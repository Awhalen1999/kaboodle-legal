import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaboodle – Data Deletion",
};

export default function DataDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
