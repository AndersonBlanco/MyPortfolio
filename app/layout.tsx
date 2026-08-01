import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ladder-fix.css";

export const metadata: Metadata = {
  title: "Anderson Blanco — Creative Technologist",
  description:
    "A fashion-inspired portfolio exploring software, product thinking, interaction design, and creative technology.",
};

export const viewport: Viewport = {
  themeColor: "#070708",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
