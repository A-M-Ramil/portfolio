import { cn } from "@/utils/cn";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Who from "@/app/about/whoamI";
import MyJourney from "@/app/about/myjourney";
import BeyondCode from "@/app/about/beyondcode";
import LookingAhead from "@/app/about/lookingahead";

import { FaFileCode } from "react-icons/fa";
import { GiLifeBar } from "react-icons/gi";
import { RiProfileFill, RiFolderHistoryFill } from "react-icons/ri";
import { link } from "fs";

export default function Bento() {
  return (
    <BentoGrid className="font-playfair  z-5 pt-4 px-5 w-screen max-w-[95vw] md:max-w-[90vw] xl:max-w-[70vw] pb-[5vh] mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl    bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2]  "></div>
);

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-[#1f1f1f] p-2  items-center space-x-2 bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonOne = () => {
  return (
    <div className="w-content group/card ">
      <div
        className={cn(
          " cursor-pointer overflow-hidden  relative card h-[20vh] rounded-md shadow-xl opacity-40  mx-auto backgroundImage flex flex-col justify-between p-4",
          `bg-[url("/whoamI.jpg")] bg-cover`,
        )}
      >
        <div className="absolute w-full h-full min-h-[6rem] top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: `linear-gradient(-45deg, #1f1f1f, 
        #2e2e2e )`,

        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1  w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl  p-4 bg-black border-[#1f1f1f] border  flex flex-col items-center justify-center"
      >
        <Image
          src="/about/me3.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center text-white font-semibold  mt-4">
          Hmmm... A Researcher
        </p>
        <p className="border border-primary font-semibold  bg-red-900/20 text-primary text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative  z-1 w-1/3 rounded-2xl  p-4 bg-black border-[#1f1f1f] border flex flex-col items-center justify-center">
        <Image
          src="/about/me3.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center text-white font-semibold  mt-4">
          Nooooooo....An Entrepreneur
        </p>
        <p className="border border-green-500 font-semibold bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl -z-2 p-4 bg-black border-[#1f1f1f] border  flex flex-col items-center justify-center"
      >
        <Image
          src="/about/me3.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center text-white font-semibold  mt-4">
          But wait...A Developer
        </p>
        <p className="border border-orange-500 font-semibold bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Who I Am",
    description: "Tech Enthusiast & Developer - My Introduction",
    header: <SkeletonOne />,
    className: "md:col-span-2 h-full",
    icon: <RiProfileFill className="h-4 w-4 text-darker" />,
    link: <Who />,
  },
  {
    title: "My Story",
    description: "From Curiosity to Code - My Journey",
    header: <SkeletonTwo />,
    className: "md:col-span-1 ",
    icon: <RiFolderHistoryFill className="h-4 w-4 text-darker" />,
    link: <MyJourney />,
  },
  {
    title: "Beyond Code",
    description: "Hobbies & Passions - Life Outside Tech",
    header: <SkeletonThree />,
    className: "md:col-span-1 ",
    icon: <FaFileCode className="h-4 w-4 text-darker" />,
    link: <BeyondCode />,
  },
  {
    title: "Looking Ahead",
    description: "My Aspirations - Vision & Future Goals",
    header: <SkeletonFour />,
    className: "md:col-span-2 ",
    icon: <GiLifeBar className="h-4 w-4 text-darker" />,
    link: <LookingAhead />,
  },
];
