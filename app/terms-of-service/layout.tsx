import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaboodle – Terms of Service",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
