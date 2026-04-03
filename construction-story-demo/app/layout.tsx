import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Axiom Construct | Storytelling Construction Demo",
  description:
    "A premium five-page storytelling construction company website demo built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
