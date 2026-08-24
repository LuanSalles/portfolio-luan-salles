import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-luan-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vulan | Criação de Sites para Negócios",
  description:
    "A Vulan cria sites profissionais para pequenos e médios negócios, com desenvolvimento personalizado, processo simples e foco nos objetivos de cada empresa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vulan | Criação de Sites para Negócios",
    description:
      "Sites profissionais pensados para o seu negócio, sem complicação.",
    url: "/",
    siteName: "Vulan",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/alquimia-bonsai-1180.jpg",
        width: 1180,
        height: 533,
        alt: "Case Alquimia do Bonsai desenvolvido pela Vulan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vulan | Criação de Sites para Negócios",
    description:
      "Sites profissionais pensados para o seu negócio, sem complicação.",
    images: ["/alquimia-bonsai-1180.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon-vulan.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-vulan.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Vulan",
      url: `${siteUrl}/`,
      email: "mailto:luanspctrabalho@gmail.com",
      founder: {
        "@type": "Person",
        name: "Luan Salles",
        jobTitle: "Desenvolvedor web",
        sameAs: ["https://www.linkedin.com/in/luan-salles/"],
      },
      areaServed: ["Brasil"],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Criação de sites para negócios",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      serviceType: ["Landing pages", "Sites institucionais", "Sites com catálogo"],
      description:
        "Criação de sites profissionais para pequenos e médios negócios, com processo simples e desenvolvimento adaptado ao objetivo da empresa.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
