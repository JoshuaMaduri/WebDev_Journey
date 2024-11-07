'use client'
import "./globals.css";
import Image from "next/image";
import background from '@/public/spectrum-gradient.png'
import { poppins } from "./ui/fonts/fonts"; 
import { Navbar } from "./(homepage)/navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./ui/theme/theme";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <BackgroundImage/>
          <Navbar />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
