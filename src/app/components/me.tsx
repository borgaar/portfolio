"use client";
import Image from "next/image";
import PageContainer from "./page-container";
import { useEffect, useState } from "react";

export default function Me() {
  const [isVisible, setIsVisible] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [showClickMe, setShowClickMe] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      doAnimations();
    });
    setTimeout(() => {
      doAnimations();
    }, 9500);
  }, []);

  const doAnimations = async () => {
    setIsVisible(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSlideUp(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setShowClickMe(true);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      } duration-[1500ms]`}
    >
      <a
        href="https://www.linkedin.com/in/borgar-barland-1096b7303/"
        target="_blank"
      >
        <div className="relative group overflow-hidden">
          <div className="absolute h-full w-full border-b-2 border-red-300 bg-gradient-to-t z-10 from-red-500/10 via-transparent via-10% to-transparent " />
          <Image
            className={`${
              slideUp || "translate-y-400"
            } duration-1000 group-hover:duration-200 group-hover:scale-[1.06] opacity-50 group-hover:opacity-100 transition-all`}
            src={"/me.png"}
            height={400}
            width={400}
            alt="A photo of one handsome devil should right here"
          />
          <div
            className={`pt-5 ${
              showClickMe ? "opacity-100" : "opacity-0"
            } absolute top-[63%] right-[6%] text-center group-hover:opacity-0 transition-opacity duration-600 text-neutral-700 md:text-neutral-800 text-sm lg:text-lg`}
          >
            Click me!
          </div>
        </div>
      </a>
      <div className="pt-10 px-16 lg:px-0 max-w-[34rem] text-neutral-300 text-center text-xs lg:text-lg">
        <div className="pb-4 text-neutral-600 md:text-neutral-700">
          &lt;!-- Passion drives quality --&gt;
        </div>
        <i className="text-neutral-500">
          <span className="text-neutral-700">/*</span> Every day I strive for
          perfection in my work.
          <br />
          With true passion for creation through code, I am always learning and
          developing, staying ready for the next challenge.{" "}
          <span className="text-neutral-700">*/</span>
        </i>
      </div>
    </div>
  );
}
