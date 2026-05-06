import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects | Clubify! ",
  description: "Clubify is a multi-tenant, cloud-based SaaS application",
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
