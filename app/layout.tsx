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
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 py-6 px-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            © 2026 Kaboodle. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
