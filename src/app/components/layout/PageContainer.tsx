'use client';
import { useEffect, useState } from 'react';

export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState('');

  useEffect(() => {
    setIsVisible('opacity-100');
  }, []);

  return <div className={`mx-auto opacity-0 transition-opacity ${isVisible} duration-200 px-4 py-8 max-w-6xl`}>{children}</div>;
}
