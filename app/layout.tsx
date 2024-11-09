import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Camp RSC",
  description: "Tech Camp about React Server Component.",
  authors: { name: "Loris QUESADO" },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="fr">
    <body className={`${inter.className} flex flex-col min-h-svh`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
