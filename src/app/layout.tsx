import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reifio — Turn workflows into AI agent skills",
  description:
    "We help enterprises turn messy workflows into reusable AI agent skills. Claude Code, Cowork, Codex — set up right, governed properly, owned by you.",
  openGraph: {
    title: "Reifio — Turn workflows into AI agent skills",
    description:
      "We help enterprises turn messy workflows into reusable AI agent skills.",
    url: "https://reifio.com",
    siteName: "Reifio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
