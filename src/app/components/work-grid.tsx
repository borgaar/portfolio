"use client";
import { work } from "../lib/work";
import WorkCard from "./work-card";
import PageContainer from "./page-container";
import { useEffect, useState } from "react";

export default function WorkGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 800);
  }, []);

  return (
    <PageContainer>
      {/* <div className="flex justify-center my-10 text-3xl">
        Stuff I do or did
      </div> */}
      <div
        className={`grid px-4 duration-[1500ms] transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        } md:grid-cols-2 grid-cols-1 h-min mb-8 gap-8 lg:gap-4`}
      >
        {work.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </PageContainer>
  );
}
