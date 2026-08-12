import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张语酌创意作品集｜文学、AI 产品与影视",
  description: "张语酌的文学作品、AI 产品、AIGC 影视作品、广告营销、配音作品与其他影视作品。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
