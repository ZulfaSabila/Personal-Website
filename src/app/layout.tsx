import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

// Font utama untuk teks (judul, paragraf)
const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Font monospace (kode, highlight teks)
const fontMono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zulfa",
  description: "Portofolio – Zulfa Sabila | Mahasiswa Teknik Informatika STITEK Bontang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200`}
      >
        {children}
      </body>
    </html>
  );
}
