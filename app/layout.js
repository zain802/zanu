import "./globals.css";
import Navbar from "@/components/Header/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Professional Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-white font-[Poppins]">
        {/* Navbar sab pages me common */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
