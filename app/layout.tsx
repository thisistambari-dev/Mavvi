import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mavvi — Local Preview",
  description: "AI social media content assistant (MVP local scaffold)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink-900 font-sans">{children}</body>
    </html>
  );
}
