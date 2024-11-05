import "./globals.css";
import Image from "next/image";
import background from '@/public/spectrum-gradient.png'
import { poppins } from "./ui/fonts/fonts"; 

const BackgroundImage = () => {
  return (
    <Image
      src={background}
      alt="Background"
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1
      }}
    />
  )
}

export const metadata = {
  title: "Joshua Maduri - Software Developer",
  description: "Keep up to date with the latest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <BackgroundImage/>
        {children}
      </body>
    </html>
  );
}
