import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Forge House | Private performance club",
  description:
    "Forge House is a premium gym landing page concept built to showcase cinematic layout, motion, and high-end frontend craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
