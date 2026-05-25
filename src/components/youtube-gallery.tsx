"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Video } from "lucide-react";

type YouTubePlayer = {
  destroy: () => void;
  loadPlaylist: (options: {
    list: string;
    listType: "playlist";
    index?: number;
  }) => void;
  nextVideo: () => void;
  pauseVideo: () => void;
  playVideo: () => void;
  previousVideo: () => void;
};

type YouTubeNamespace = {
  Player: new (
    elementId: string,
    options: {
      height: string;
      width: string;
      playerVars: Record<string, string | number>;
      events: {
        onReady: () => void;
        onStateChange: (event: { data: number }) => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: {
    PLAYING: number;
  };
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youTubeApiPromise: Promise<YouTubeNamespace> | null = null;

function loadYouTubeApi() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("YouTube API needs a browser."));
  }

  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (!youTubeApiPromise) {
    youTubeApiPromise = new Promise((resolve) => {
      const previousCallback = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        if (window.YT) {
          resolve(window.YT);
        }
      };

      if (
        !document.querySelector('script[src="https://www.youtube.com/iframe_api"]')
      ) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
      }
    });
  }

  return youTubeApiPromise;
}

export function YouTubeGallery({
  channelUrl,
  playlistId,
}: {
  channelUrl: string;
  playlistId: string;
}) {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let player: YouTubePlayer | null = null;

    loadYouTubeApi().then((YT) => {
      if (!isMounted) {
        return;
      }

      player = new YT.Player("nfaztic-youtube-player", {
        height: "100%",
        width: "100%",
        playerVars: {
          color: "white",
          list: playlistId,
          listType: "playlist",
          modestbranding: 1,
          origin: window.location.origin,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            setReady(true);
            player?.loadPlaylist({ list: playlistId, listType: "playlist" });
          },
          onStateChange: (event) => {
            setPlaying(event.data === YT.PlayerState.PLAYING);
          },
        },
      });

      playerRef.current = player;
      window.setTimeout(() => {
        if (isMounted && playerRef.current) {
          setReady(true);
        }
      }, 1200);
    });

    return () => {
      isMounted = false;
      player?.destroy();
      playerRef.current = null;
    };
  }, [playlistId]);

  function togglePlayback() {
    if (!playerRef.current) {
      return;
    }

    if (playing) {
      playerRef.current.pauseVideo();
      setPlaying(false);
      return;
    }

    playerRef.current.playVideo();
    setPlaying(true);
  }

  return (
    <section
      id="youtube"
      className="border-y border-white/10 bg-[#08090d] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#1bf7d1]">
            Video signal
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Channel uploads in a dark player.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Studio clips, visual sessions, and live fragments sit beside the
            music catalog without pulling the page away from the NFAZTIC world.
          </p>
          <a
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-medium text-white transition hover:border-[#1bf7d1]/70 hover:text-[#1bf7d1]"
          >
            <Video className="h-4 w-4" />
            Open channel
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-[#1bf7d1]/10">
          <div className="relative aspect-video w-full bg-[#11131a]">
            {!ready && (
              <div className="absolute inset-0 grid place-items-center text-sm uppercase tracking-[0.22em] text-zinc-500">
                Loading player
              </div>
            )}
            <div id="nfaztic-youtube-player" className="absolute inset-0" />
          </div>
          <div className="flex items-center justify-between border-t border-white/10 bg-[#0d0f14] p-3">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Uploads playlist
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous video"
                disabled={!ready}
                onClick={() => playerRef.current?.previousVideo()}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={playing ? "Pause video" : "Play video"}
                disabled={!ready}
                onClick={togglePlayback}
                className="grid h-10 w-10 place-items-center rounded-lg bg-white text-black transition hover:bg-[#1bf7d1] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {playing ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                aria-label="Next video"
                disabled={!ready}
                onClick={() => playerRef.current?.nextVideo()}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
