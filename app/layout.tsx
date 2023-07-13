import "./globals.css";
import { metaBuilder } from "@/helpers/metabuilders";

export async function generateMetadata() {
  return metaBuilder({
    title: "Victor Higoy Jr",
    description: "Frontend Developer based in the Philippines",
  });
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      <body
        className={`font-sans bg-[#002D62] bg-[url("/img/NoiseAndTexture.svg")]`}
      >
        {children}
      </body>
    </html>
  );
}
