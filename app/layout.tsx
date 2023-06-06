import "./globals.css";
import {
  Inter,
  Inter_Tight,
  Roboto_Slab,
  Titillium_Web,
  League_Spartan,
} from "next/font/google";

export const metadata = {
  title: "Victor Higoy",
  description: "Frontend Developer based in the Philippines",
};

const InterTight = League_Spartan({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans bg-[#002D62] bg-[url("/img/NoiseAndTexture.svg")]`}
      >
        {children}
      </body>
    </html>
  );
}
