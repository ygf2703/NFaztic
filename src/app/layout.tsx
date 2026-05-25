import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nfaztic.com",
  ),
  title: "NFAZTIC | Psy / Goa Trance",
  description:
    "A high-end artist website for NFAZTIC, featuring music embeds, psy-art visuals, YouTube playback, and a terminal navigation easter egg.",
  openGraph: {
    title: "NFAZTIC | Psy / Goa Trance",
    description:
      "Cinematic psy-trance architecture, ritual percussion, and neon visual mythology.",
    images: ["/media/dj-hands.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-[#050506] antialiased">
      <body className="min-h-full bg-[#050506] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
