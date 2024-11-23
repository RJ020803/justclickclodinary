import Nav from "../components/Nav";
import { AuthProvider } from "./Provider";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jstClkApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}