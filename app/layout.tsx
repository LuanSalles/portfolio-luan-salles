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
  metadataBase: new URL("https://portfolio-luan-one.vercel.app"),
  title: "Luan Salles | Desenvolvimento web para sites profissionais",
  description:
    "Desenvolvimento de sites institucionais e landing pages para profissionais, empresas e pequenos negócios.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luan Salles | Desenvolvimento web para sites profissionais",
    description:
      "Sites institucionais e landing pages com foco em clareza, versão mobile, performance e contato rápido.",
    url: "/",
    siteName: "Luan Salles",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/alquimia-bonsai-desktop.png",
        width: 1600,
        height: 900,
        alt: "Site Alquimia do Bonsai desenvolvido por Luan Salles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Salles | Desenvolvimento web para sites profissionais",
    description:
      "Sites institucionais e landing pages com foco em clareza, versão mobile, performance e contato rápido.",
    images: ["/alquimia-bonsai-desktop.png"],
  },
  icons: {
    icon: [{ url: "/favicon-ls.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-ls.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
