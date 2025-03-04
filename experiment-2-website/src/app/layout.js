import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './layout.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextJS Experiment 2 Website",
  description: "Multi-page NextJS website to build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* 
          This Navbar component is separate from the Page component 
          which will not have the page styling affect the navbar! 
        */}
        <Navbar />

        {/*
          This will be the page and its content that gets displayed!
        */}
        {children}
      </body>
    </html>
  );
}
