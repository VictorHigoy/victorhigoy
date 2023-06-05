import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

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
      <body className="font-sans bg-[#002D62] bg-[url('/img/NoiseAndTexture.svg')]">
        {children}
      </body>
    </html>
  );
}
