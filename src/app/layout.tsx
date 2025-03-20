import { ReactNode } from "react";
import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";
import "@/styles/globals.css";
// import Header from "@/components/layouts/Header/Header";
// import Footer from "@/components/layouts/Footer/Footer";
import { BreadCrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

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
        <div className="layout-container">
          <Sidebar />{" "}
          <main className="container mx-auto px-4 py-8">{children}</main>
          <BreadCrumbs />
        </div>
      </body>
    </html>
  );
}
