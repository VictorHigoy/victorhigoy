import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Higoy",
  description: "Frontend Developer based in the Philippines",
  openGraph: {
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "/img/VictorPortfolioMetaBuilder.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body
        className={`font-sans bg-[#002D62] bg-[url("/img/NoiseAndTexture.svg")]`}
      >
        {children}
      </body>
    </html>
  );
}
