import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FullPage Test",
  description: "하루만에 만듬",
};

export default function FullPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
