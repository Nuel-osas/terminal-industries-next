import type { Metadata } from "next";
import "@/styles/globals.css";
import "swiper/css";
export const metadata: Metadata = {
  title: "Terminal Industries",
  description:
    "AI-native technology that turns the space between your gate and your dock into one connected, automated system.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
