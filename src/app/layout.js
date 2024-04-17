import { Inter } from "next/font/google";
import "./globals.css";
import Remove from "@/lib/Remove";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background">
          <Remove props={children}/>
        </div>
      </body>
    </html>
  );
}
