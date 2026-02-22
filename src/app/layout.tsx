import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Panoply — The Intelligence Layer for Human History",
  description:
    "Agentic AI that clears the 50-year artifact cataloging backlog. Autonomous cataloging, micro-detail recognition, and visitor deep-dive analysis for museums worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
