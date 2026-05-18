import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShopifyProvider from "./components/ShopifyProvider/ShopifyProvider";
import ProductModal from "./components/ProductModal/ProductModal";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import ScrollRestorationManager from "./components/ScrollRestorationManager/ScrollRestorationManager";
import CookieConsent from "./components/CookieConsent/CookieConsent";

export const metadata: Metadata = {
  title: "KSM — Where Timeless Elegance Meets Artistic Expression",
  description:
    "Discover KSM's curated collections of premium fashion. Modern tailoring, luxurious fabrics, and artful design for the discerning individual.",
  keywords: [
    "KSM",
    "luxury fashion",
    "designer clothing",
    "premium tailoring",
    "fashion collections",
  ],
  openGraph: {
    title: "KSM — Where Timeless Elegance Meets Artistic Expression",
    description:
      "Discover KSM's curated collections of premium fashion. Modern tailoring, luxurious fabrics, and artful design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollRestorationManager />
        <LoadingScreen />
        <ShopifyProvider />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ProductModal />
        <CookieConsent />
      </body>
    </html>
  );
}
