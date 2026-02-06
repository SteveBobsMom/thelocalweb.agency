import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "thelocalweb.agency – Webentwicklung aus Zürich",
  description: "Professionelle Websites für lokale Geschäfte. Design, Entwicklung & Hosting aus Zürich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a1a] text-white`}>
        {children}
      </body>
    </html>
  );
}
