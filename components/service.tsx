import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import Testimonials from "@/components/vertical_testamonials";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "End-to-End Web3 Solutions",
      description:
        "Providing full-stack Web3 development to create decentralized and scalable applications.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-darker/[0.2]",
    },
    {
      title: "Empowering Users with Decentralized Identity",
      description:
        "Developing self-sovereign identity solutions that give users control over their personal data.",
      skeleton: <Skeleton />,
      className: "border-b col-span-1 lg:col-span-2 border-darker/[0.2]",
    },
    {
      title: "Ensuring Smart Contract Security",
      description:
        "Conducting thorough smart contract audits to prevent vulnerabilities and ensure reliability",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r  border-darker/[0.2]",
    },
    {
      title: "What Others Say About My Expertise",
      description:
        "Discover testimonials from clients, mentors, and peers who have experienced the impact of my blockchain and Web3 development work.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3  pb-10 lg:border-none",
    },
  ];
  return (
    <main>
      <div className="relative z-20  pb-10 lg:py-10 max-w-7xl mx-auto">
        <div className="px-8 font-futural ">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-darker">
            Blockchain & Smart Contract Development
          </h4>

          <p className="capitalize text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-5 text-center font-normal ">
            helping businesses to leverage the power of blockchain technology to
            enhance transparency and security
          </p>
        </div>

        <div className="relative ">
          <div className="grid grid-cols-1  font-futural font-semibold lg:grid-cols-6 mt-12 xl:border rounded-md border-darker/[0.2]">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-content w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-20  pb-10 lg:py-10 max-w-7xl lg:max-w-[80%] mx-auto">
        <Testimonials />
      </div>
    </main>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-darker text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-5 text-center font-normal ",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-60 shadow-2xl group h-full">
        <div className="flex flex-1 w-full  flex-col space-y-2  ">
          <Image
            src="/services_1.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-60 via-60 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-60  via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full  flex-col space-y-2  relative">
        <Image
          src="/services_3.png"
          alt="header"
          width={800}
          height={800}
          className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
        />
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = ["/services_2_01.jpg", "/k.jpg", "/k.jpg", ,];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-20/[0.15]   border border-darker/[0.2] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image || ""}
              alt="SSI Images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-20/[0.15]    flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image || ""}
              alt="SSI Images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-60  to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-60   to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-[57vh]  ">
      <Testimonials />
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="h-screen  flex justify-center overflow-hidden items-center">
      <Image
        alt="dummy"
        src="/sevices_2.png"
        width={1000}
        height={1000}
        className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto"
      />
    </div>
  );
};
