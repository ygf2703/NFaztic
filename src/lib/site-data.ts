import {
  Apple,
  ExternalLink,
  Headphones,
  Music2,
  Radio,
  Video,
} from "lucide-react";
import { InstagramIcon, TikTokIcon } from "../components/icons";

export const artistName = "NFAZTIC";

export const heroVideoSrc =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "https://github.com/ygf2703/NFaztic/releases/download/media-2026-11/6-hero-spiral-string.mp4";

export const spotifyArtistUrl =
  "https://open.spotify.com/artist/6jX8Nthw9i2jsDNpszPxxV?si=59c9e3be3b68478a";

export const appleMusicArtistUrl =
  "https://music.apple.com/us/artist/nfaztic/1819876025";

export const youtubeChannelUrl =
  "https://www.youtube.com/@nfaztic";

export const soundCloudUrl =
  "https://soundcloud.com/nfaztic273";

export const youtubeUploadsPlaylistId = "UUPb-S3gq9uXdWcpGKWo3DPg";

export const instagramUrl = "https://www.instagram.com/nfazticmusic/";

export const tiktokUrl = "https://www.tiktok.com/@nfaztic";

export const navItems = [
  { label: "Music", target: "music" },
  { label: "Visuals", target: "visuals" },
  { label: "YouTube", target: "youtube" },
  { label: "Terminal", target: "terminal" },
  { label: "Contact", target: "contact" },
];

export const signals = [
  "Psy / Goa Trance",
  "Florentin graffiti pulse",
  "CDN-ready media stack",
];

export const musicEmbeds = [
  {
    title: "Spotify",
    subtitle: "Artist catalog",
    icon: Music2,
    accent: "#1ed760",
    src: "https://open.spotify.com/embed/artist/6jX8Nthw9i2jsDNpszPxxV?utm_source=generator&theme=0",
    height: 352,
    href: spotifyArtistUrl,
  },
  {
    title: "Apple Music",
    subtitle: "Official artist page",
    icon: Apple,
    accent: "#fa2d48",
    src: "https://embed.music.apple.com/us/artist/nfaztic/1819876025",
    height: 450,
    href: appleMusicArtistUrl,
  },
  {
    title: "SoundCloud",
    subtitle: "Sketches, drops, live energy",
    icon: Radio,
    accent: "#ff7a18",
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      soundCloudUrl,
    )}&color=%23ff7a18&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    height: 166,
    href: soundCloudUrl,
  },
];

export const highFidelityLinks = [
  {
    title: "Bandcamp WAV",
    note: "Collector-grade release pages and high-resolution drops.",
    href: process.env.NEXT_PUBLIC_BANDCAMP_URL || soundCloudUrl,
    icon: Headphones,
  },
  {
    title: "HQ Audio",
    note: "Lossless masters for sets, premieres, and direct-listening drops.",
    href: process.env.NEXT_PUBLIC_HIGH_FIDELITY_WAV_URL || soundCloudUrl,
    icon: ExternalLink,
  },
];

export const visualWorks = [
  {
    title: "THE MOSSBOUND CALL",
    src: "https://github.com/ygf2703/NFaztic/releases/download/media-2026-11/9-the-mossbound-call.jpg",
    tone: "swamp signal",
  },
  {
    title: "the rise of the sun",
    src: "https://github.com/ygf2703/NFaztic/releases/download/media-2026-11/7-the-rise-of-the-sun.jpg",
    tone: "solar ignition",
  },
  {
    title: "THE BEGINNING OF A JOURNEY",
    src: "https://github.com/ygf2703/NFaztic/releases/download/media-2026-11/8-the-beginning-of-a-journey.jpg",
    tone: "origin pulse",
  },
  {
    title: "Explosive Energy",
    src: "/media/explosive-energy.png",
    tone: "festival ignition",
  },
  {
    title: "AI Your Brain",
    src: "/media/ai-your-brain.png",
    tone: "neural circuitry",
  },
  {
    title: "Bell Your Soul",
    src: "/media/bell-your-soul.png",
    tone: "ritual focus",
  },
  {
    title: "Synaptic Dome",
    src: "/media/synaptic-dome.png",
    tone: "sacred geometry",
  },
  {
    title: "The Spiral String",
    src: "/media/spiral-string.png",
    tone: "psy-guitar wave",
  },
  {
    title: "Ceremonial Dissonance",
    src: "/media/ceremonial-dissonance.png",
    tone: "cosmic ceremony",
  },
  {
    title: "Children of the Drum",
    src: "/media/children-of-the-drum.png",
    tone: "tribal rhythm",
  },
  {
    title: "Echoes of the Forest",
    src: "/media/echoes-of-the-forest.png",
    tone: "forest mantra",
  },
  {
    title: "Cosmic Seed",
    src: "/media/cosmic-seed.png",
    tone: "solar bloom",
  },
  {
    title: "Dreamvoid Logic",
    src: "/media/dreamvoid-logic.png",
    tone: "alien intelligence",
  },
  {
    title: "Nuclear Drop",
    src: "/media/nuclear-drop.png",
    tone: "speaker pressure",
  },
  {
    title: "Ritual of Cosmic Energy",
    src: "/media/ritual-cosmic-energy.png",
    tone: "ancient frequency",
  },
];

export const socialLinks = [
  { label: "Spotify", href: spotifyArtistUrl, icon: Music2 },
  { label: "Apple Music", href: appleMusicArtistUrl, icon: Apple },
  { label: "YouTube", href: youtubeChannelUrl, icon: Video },
  { label: "SoundCloud", href: soundCloudUrl, icon: Radio },
  { label: "Instagram", href: instagramUrl, icon: InstagramIcon },
  { label: "TikTok", href: tiktokUrl, icon: TikTokIcon },
];
