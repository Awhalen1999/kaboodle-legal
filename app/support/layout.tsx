import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaboodle – Support",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
