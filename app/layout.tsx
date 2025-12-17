import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaboodle Legal",
  description: "Legal documents for Kaboodle",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
