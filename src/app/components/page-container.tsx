export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto max-w-6xl">{children}</div>;
}
