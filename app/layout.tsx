import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "创意作品集｜写作、AI产品与影像",
  description: "文学写作、AI产品、AIGC影视、广告营销、配音与影像创作精选作品。",
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
