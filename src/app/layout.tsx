'use client'
import type { Metadata } from "next";
import { usePathname } from "next/navigation"; 
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import "./globals.css";
import "../app/style/fadeAnimation.css";
import "./font.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current path
console.log(pathname,'----this is pathname ----')
  const showHeaderAndFooter = pathname == "/pbstech" ? '': <NavBar/>

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white Bricolage_Grotesque">
        {/* Conditionally render NavBar and Footer */}
        {showHeaderAndFooter}
        {children}
        {showHeaderAndFooter && <Footer />}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
        <script>{`AOS.init()`}</script>
      </body>
    </html>
  );
}
