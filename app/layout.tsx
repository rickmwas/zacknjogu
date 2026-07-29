import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "@/components/layout/ClientShell";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";

export const metadata: Metadata = {
  title: {
    default: `${CAMPAIGN_INFO.candidateName} | MCA Candidate for ${CAMPAIGN_INFO.ward}`,
    template: `%s | ${CAMPAIGN_INFO.candidateName} for ${CAMPAIGN_INFO.ward}`,
  },
  description: `${CAMPAIGN_INFO.sloganTranslation}. Official campaign website for Zack Njogu, Jubilee Party candidate for Member of County Assembly (MCA), Maai Mahiu Ward, Naivasha Sub-County, Nakuru County.`,
  keywords: [
    "Zack Njogu",
    "Maai Mahiu MCA",
    "Naivasha Sub-County",
    "Nakuru County elections",
    "Jubilee Party MCA candidate",
    "Maai Mahiu Ward Development",
    "Bursary transparency Nakuru",
  ],
  authors: [{ name: "Zack Njogu Campaign Team" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://zacknjogu.co.ke",
    title: `${CAMPAIGN_INFO.candidateName} - ${CAMPAIGN_INFO.position}`,
    description: CAMPAIGN_INFO.sloganTranslation,
    siteName: `Zack Njogu MCA Campaign`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CAMPAIGN_INFO.candidateName} - MCA Maai Mahiu Ward`,
    description: CAMPAIGN_INFO.sloganTranslation,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="suppressHydrationWarning">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-neutral-950 text-neutral-950 dark:text-white font-body antialiased selection:bg-[#E31E24] selection:text-white">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}


