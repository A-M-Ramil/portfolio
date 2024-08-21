"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative pt-10 w-full h-[40vh] md:w-[30vw]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex justify-center align-center bg-1 h-[80%] w-full sm:h-60 md:w-[100%] rounded-3xl p-4 shadow-xl border border-60 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05]  flex-col "
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className=" font-normal text-darker ">
              {card.content}
            </div>
            <div className="pt-10">
              <p className="text-10 font-medium ">
                {card.name}
              </p>
              <p className="text-5 font-normal ">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
