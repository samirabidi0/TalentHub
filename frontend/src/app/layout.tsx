import type { Metadata } from "next";
import "./globals.css";
import { NavBar , Footer} from "@/Components";


export const metadata: Metadata = {
  title: "SkillMatcher",
  description: "A dynamic platform connecting freelancers with clients seeking top talent, streamlining the hiring process for both parties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
