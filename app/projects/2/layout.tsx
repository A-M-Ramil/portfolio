import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects | CrowdEther ",
  description:
    "CrowdEther is a decentralized CrowdFunding platform built on the Ethereum blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!no-scrollbar ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
