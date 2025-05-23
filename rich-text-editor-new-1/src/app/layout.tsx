import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rich Text Editor New - 1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
