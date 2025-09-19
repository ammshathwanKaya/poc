"use client";

export const LayoutContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-dvh flex flex-col">{children}</div>;
};
