"use client";
import { useEffect, useState } from "react";
import PageContainer from "./page-container";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div
      className={`flex flex-col my-20 items-center justify-center bg-secondary text-xl lg:text-4xl text-neutral-200 w-full`}
    >
      <PageContainer>
        <ReactTyped
          strings={[
            "Welcome!",
            "My name is Borgar Barland.",
            "I am a software engineer.",
            "Send me a message!",
          ]}
          typeSpeed={20}
          backSpeed={10}
          startDelay={1000}
          smartBackspace={true}
          cursorChar="_"
          className="font-bold"
        />
      </PageContainer>
    </div>
  );
}
