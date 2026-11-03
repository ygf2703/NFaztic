"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  ImageIcon,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  appleMusicArtistUrl,
  artistName,
  heroVideoSrc,
  highFidelityLinks,
  instagramUrl,
  musicEmbeds,
  navItems,
  signals,
  socialLinks,
  spotifyArtistUrl,
  tiktokUrl,
  visualWorks,
  youtubeChannelUrl,
  youtubeUploadsPlaylistId,
} from "@/lib/site-data";
import { InstagramIcon, TikTokIcon } from "./icons";
import { TerminalInterface } from "./terminal-interface";
import { YouTubeGallery } from "./youtube-gallery";

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function ArtistSite() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(target: string) {
    setMenuOpen(false);
    scrollToSection(target);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050506] text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("top")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
              <Image
                src="/media/nfaztic-logo.png"
                alt=""
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
              {artistName}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => navigate(item.target)}
                className="h-10 rounded-lg px-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={spotifyArtistUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-medium text-white transition hover:border-[#1ed760]/60 hover:text-[#1ed760] md:inline-flex"
          >
            <Play className="h-4 w-4" />
            Listen
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-4 py-3 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => navigate(item.target)}
                  className="h-11 rounded-lg text-left text-sm text-zinc-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-[88svh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={heroVideoSrc}
          poster="/media/dj-hands.png"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.38)_0%,rgba(5,5,6,0.72)_58%,#050506_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,247,209,0.12),transparent_28%,transparent_72%,rgba(255,43,214,0.12))]" />

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="mb-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.26em] text-[#1bf7d1]">
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-lg border border-white/10 bg-black/35 px-3 py-2 backdrop-blur"
                >
                  {signal}
                </span>
              ))}
            </p>
            <h1 className="max-w-4xl text-6xl font-black uppercase tracking-normal text-white sm:text-7xl lg:text-8xl">
              {artistName}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200 sm:text-2xl">
              Cinematic psy-trance architecture, ritual percussion, and visual
              systems built for night-floor impact.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("music")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-black transition hover:bg-[#1bf7d1]"
              >
                <Play className="h-4 w-4" />
                Enter music hub
              </button>
              <button
                type="button"
                onClick={() => navigate("terminal")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/35 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#ffbe2e]/70 hover:text-[#ffbe2e]"
              >
                <Sparkles className="h-4 w-4" />
                Open terminal
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                Listen now
              </span>
              <a
                href={spotifyArtistUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/35 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#1ed760]/70 hover:text-[#1ed760]"
              >
                <Play className="h-4 w-4" />
                Spotify
              </a>
              <a
                href={appleMusicArtistUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/35 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#fa243c]/70 hover:text-[#fa243c]"
              >
                <ExternalLink className="h-4 w-4" />
                Apple Music
              </a>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/35 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#ff2bd6]/70 hover:text-[#ff2bd6]"
              >
                <ExternalLink className="h-4 w-4" />
                YouTube
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/35 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#ff2bd6]/70 hover:text-[#ff2bd6]"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/35 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#1bf7d1]/70 hover:text-[#1bf7d1]"
              >
                <TikTokIcon className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={() => navigate("music")}
            aria-label="Scroll to music section"
            className="absolute bottom-4 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-lg border border-white/10 bg-black/35 text-zinc-300 backdrop-blur transition hover:text-white"
          >
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section id="music" className="bg-[#050506] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#1ed760]">
                Music hub
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
                Official streams, one dark console.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={appleMusicArtistUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
              >
                Apple Music
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
              >
                YouTube
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {musicEmbeds.map((embed) => {
              const Icon = embed.icon;

              return (
                <motion.article
                  key={embed.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-lg border border-white/10 bg-[#0d0f14]"
                >
                  <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-lg"
                        style={{
                          background: `${embed.accent}18`,
                          color: embed.accent,
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {embed.title}
                        </h3>
                        <p className="text-xs text-zinc-500">
                          {embed.subtitle}
                        </p>
                      </div>
                    </div>
                    <a
                      href={embed.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${embed.title}`}
                      className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <iframe
                    title={`${embed.title} player`}
                    src={embed.src}
                    width="100%"
                    height={embed.height}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block w-full border-0"
                  />
                </motion.article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {highFidelityLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-32 items-start gap-4 rounded-lg border border-white/10 bg-[#08090d] p-5 transition hover:border-[#ffbe2e]/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#ffbe2e]/10 text-[#ffbe2e]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">
                      {link.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-zinc-400">
                      {link.note}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="visuals"
        className="bg-[#0a0b10] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#ff2bd6]">
                Visual portfolio
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
                Psy-art pressure with graffiti movement.
              </h2>
            </div>
            <ImageIcon className="hidden h-9 w-9 text-[#ff2bd6] sm:block" />
          </div>

          <div className="grid auto-rows-[minmax(280px,32vw)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visualWorks.map((work, index) => (
              <motion.article
                key={work.src}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className={[
                  "group relative overflow-hidden rounded-lg border border-white/10 bg-black",
                  index === 0 || index === 10 ? "sm:col-span-2" : "",
                  index === 5 ? "lg:col-span-2 lg:row-span-2" : "",
                ].join(" ")}
              >
                <Image
                  src={work.src}
                  unoptimized={work.src.startsWith("https://")}
                  alt={`${artistName} artwork: ${work.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#1bf7d1]">
                    {work.tone}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {work.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <YouTubeGallery
        channelUrl={youtubeChannelUrl}
        playlistId={youtubeUploadsPlaylistId}
      />

      <TerminalInterface />

      <section
        id="contact"
        className="border-t border-white/10 bg-[#090a0e] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#1bf7d1]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Bookings, collabs, and signal boosts.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              Connect through the official artist channels while the dedicated
              booking mailbox is configured.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-20 items-center justify-between rounded-lg border border-white/10 bg-[#0d0f14] px-5 transition hover:border-[#1bf7d1]/50"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-zinc-200 transition group-hover:text-[#1bf7d1]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-white">
                      {link.label}
                    </span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-[#1bf7d1]" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{artistName} digital ritual system</span>
          <span>Psy / Goa / Visual Systems</span>
        </div>
      </footer>
    </main>
  );
}
