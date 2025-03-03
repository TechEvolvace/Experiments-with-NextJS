/* 
  The next/font/google package allows us to use any 
  Google font in the NextJS application!
*/
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* 
  Define the geistSans constant with a new CSS variable
  name to reference the geistSans font!
*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* 
  Define the geistMono constant with a new CSS variable
  name to reference the geistMono font!
*/
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 
  Looks like this defines the metadata for the NextJS 
  application! This metadata is getting exported too.
*/
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/* 
  Looks like this defines the root layout for 
  the NextJS application in a format similar to 
  React-modified HTML component!
*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
