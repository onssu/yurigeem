import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "yurigeem",
  description: "yurigeem portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
