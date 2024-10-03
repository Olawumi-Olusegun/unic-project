import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import TanstackQueryProvider from "./(components)/Provider";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "UNIC Accessment",
  description: "An accessement based project",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <TanstackQueryProvider>
          {children}
        </TanstackQueryProvider>
        <Toaster position='top-center' />
      </body>
    </html>
  );
}
