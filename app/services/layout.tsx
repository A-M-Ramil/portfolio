import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Services | Ramil",
  description: "Hmm.. I have some skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!no-scrollbar ">
     
      <body className={inter.className}>
       
        {children}
        </body>
    </html>
  );
}
