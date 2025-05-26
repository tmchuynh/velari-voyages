import BackToTop from "@/components/button/BackToTop";
import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import Footer from "@/components/navigation/Footer";
import { NavBar } from "@/components/navigation/NavBar";
import "./globals.css";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main>
            <NavBar />
            <DynamicBreadcrumb />
            {children}
            <BackToTop />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
