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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="w-full h-[280px] bg-[#4338CA] absolute bottom-0 left-0 flex justify-center items-center">
          <div className="w-[1800px] h-[200px] bg-white flex ">
            <div className="">
              <p>Movie Z</p>
              <p>© 2024 Movie Z. All Rights Reserved</p>
            </div>
            <div className="flex">
              <p>Contact Information</p>
              <div></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
