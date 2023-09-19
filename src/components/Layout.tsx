import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto bg-slate-800">
      <Navbar />
      <main className="min-h-screen my-2">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
