"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    <div className=" items-center justify-center bg-transparent h-auto w-full">
      <TextRevealCard
        text="What they say"
        revealText="What makes me happy "
      >
        
      </TextRevealCard>
    </div>
  );
}
