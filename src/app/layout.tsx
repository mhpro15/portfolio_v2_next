import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TabContextProvider } from "../context/nav-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hung Nguyen",
  description: "A Hung Nguyen Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        defer
        data-website-id="677b8eb73579b87bc9d19ee4"
        data-domain="manhhung.app"
        src="https://datafa.st/js/script.js"
      ></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabContextProvider>{children}</TabContextProvider>
      </body>
    </html>
  );
}
