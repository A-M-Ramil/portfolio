"use client";

import React, { useEffect } from "react";

interface BubbleTextProps {
  text: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span",
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: typeof span) {
        this.style.fontWeight = "900";
        this.style.color = "rgb(255, 255,255)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(255, 255,255)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(255, 255,255)";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "100";
        this.style.color = "rgb(255, 255,255)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "rgb(255, 255,255)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(255, 255,255)";
        }
      });
    });
  }, []);

  return (
    <div className="hover-text font-playfair font-extrabold  ">
      <Text>{text}</Text>
    </div>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
