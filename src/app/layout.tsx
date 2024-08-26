import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import "./globals.css";
import "../app/style/fadeAnimation.css";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile Business Solution",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-r from-blue-100 to-gray-100">
        <NavBar />
        {children}
        <Footer />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
        <script>{`AOS.init()`}</script>
      </body>
    </html>
  );
}
 