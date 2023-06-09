import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wia",
  description: "Generated by women in annimation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={" mx-auto" + inter.className}>
          <Header />
          <div className="mt-28">{children}</div>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
