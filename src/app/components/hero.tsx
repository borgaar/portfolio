"use client";
import { useEffect, useState } from "react";
import PageContainer from "./page-container";

export default function Hero() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    setIsTextVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center bg-secondary text-xl lg:text-4xl text-neutral-200 w-full`}
    >
      <PageContainer>
        <div
          className={`grid grid-cols-[auto_auto] duration-[1500ms] px-8 transition-opacity lg:py-24 py-6 ${
            isTextVisible ? "opacity-100" : "opacity-0"
          } flex-none lg:gap-y-5 gap-y-3 gap-x-6 lg:gap-x-20 items-center`}
        >
          <div className="text-neutral-500">0</div>
          <div className="font-bold">&gt; Welcome!</div>
          <div className="text-neutral-500">1</div>
          <div> I am Borgar.</div>
          <div className="text-neutral-500">2</div>
          <div>I build software,</div>
          <div className="text-neutral-500">3</div>
          <div>
            and would love to hear from{" "}
            <span className="font-semibold">you</span>!
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
