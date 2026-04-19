import Navbar from "./Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

//
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none" />
      <Navbar />
      <div className="relative z-10 w-full">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
