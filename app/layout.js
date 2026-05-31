import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Nextcen",
  description: "Nexcent Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
