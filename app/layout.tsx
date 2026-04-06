import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Forge House Gym | Elite Performance & Recovery Club",
  description:
    "Experience world-class strength training, expert coaching, and premium recovery at Forge House. The premier fitness sanctuary for professionals.",
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
