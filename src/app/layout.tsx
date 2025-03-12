import { ReactNode } from "react";
import { Sidebar } from "@/components/layouts/Sidebar";
import "@/styles/globals.css";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";

export const metadata = {
  title: "Leon",
  description: "",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>

        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
