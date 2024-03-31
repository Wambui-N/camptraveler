import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/Components";

export const metadata: Metadata = {
  title: "Camp Traveller",
  description: "Travel UI/UX app for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
