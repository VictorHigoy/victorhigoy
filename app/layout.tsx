import "./globals.css";
import Head from "next/head";
export const metadata = {
  title: "Victor Higoy",
  description: "Frontend Developer based in the Philippines",
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
