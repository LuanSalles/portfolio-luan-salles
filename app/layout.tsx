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
  title: "Luan Salles Web | Criação de sites para pequenos negócios",
  description:
    "Criação de sites institucionais, landing pages e melhorias em sites para pequenos negócios, profissionais e marcas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luan Salles Web | Criação de sites para pequenos negócios",
    description:
      "Sites profissionais com foco em clareza, versão mobile, contato rápido e publicação organizada.",
    url: "/",
    siteName: "Luan Salles Web",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/alquimia-bonsai-1180.jpg",
        width: 1180,
        height: 533,
        alt: "Site Alquimia do Bonsai desenvolvido por Luan Salles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Salles Web | Criação de sites para pequenos negócios",
    description:
      "Sites profissionais com foco em clareza, versão mobile, contato rápido e publicação organizada.",
    images: ["/alquimia-bonsai-1180.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon-ls.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-ls.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://portfolio-luan-one.vercel.app/#person",
      name: "Luan Salles",
      jobTitle: "Desenvolvedor web",
      url: "https://portfolio-luan-one.vercel.app/",
      email: "mailto:luanspctrabalho@gmail.com",
      sameAs: [
        "https://github.com/LuanSalles",
        "https://www.linkedin.com/in/luan-salles/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Niterói",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://portfolio-luan-one.vercel.app/#service",
      name: "Luan Salles Web",
      url: "https://portfolio-luan-one.vercel.app/",
      image: "https://portfolio-luan-one.vercel.app/alquimia-bonsai-1180.jpg",
      description:
        "Criação de sites institucionais, landing pages e melhorias em sites para pequenos negócios, profissionais e marcas.",
      areaServed: ["Niterói", "Rio de Janeiro", "Brasil"],
      serviceType: ["Criação de sites", "Landing pages", "Desenvolvimento web"],
      founder: {
        "@id": "https://portfolio-luan-one.vercel.app/#person",
      },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
