
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProviders } from "@/config/ChakraProvider";
import Nav from "@/components/layout/nav/nav";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviders>
          <Nav />
          {children}
          <Footer />
        </ChakraProviders>
      </body>
    </html>
  );
}
