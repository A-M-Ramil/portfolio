"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wooble-card";
import Form from "@/components/ui/form"
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { motion, MotionProps } from "framer-motion";


export default function WobbleCardF() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <main className="grid grid-cols-1 pb-2 lg:grid-cols-3 gap-4 md:max-w-[92vw] md:mx-[4vw] xl:max-w-[67vw] xl:mx-[16.5vw] w-full">
      
      <motion.div 
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className=" lg:flex lg:justify-between  col-span-1"> 
      <div className=" grid grid-flow-dense grid-cols-12  lg:w-full gap-4"> <SocialsBlock/> </div>
      


      </motion.div>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-20/[0.3] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className=" max-w-[90%] md:max-w-[55%] ">
          <h2 className="text-left text-balance font-futurabk text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-darker/[0.9]">
            Innovate with Blockchain and AI—Transform Tomorrow
          </h2>
          <p className="mt-4 text-left font-futurabk text-base/6 text-5">
          Reach out today to start a conversation on how we can revolutionize industries with cutting-edge Web3 and AI technologies.
          </p>
        </div>
        <Image
          src="/k.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-20/[0.3] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        
        
        <div className="max-w-xm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance font-futurabk font-semibold text-base md:text-xl lg:text-3xl  tracking-[-0.015em] text-darker/[0.9]">
          Let’s Build the Future Together with Web3, Blockchain, and AI
          </h2>
          <p className="mt-4 max-w-[26rem] font-futurabk text-left  text-base/6 text-5">
          Connect with me to explore groundbreaking solutions that harness the power of decentralized technology and artificial intelligence.
          </p>
        </div>
        
        
        
      </WobbleCard>
      <motion.div 
      whileHover={{scale: 1.03,}}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      
      className="cols-span-1">
          
          <Form/>
            </motion.div>
      
      </main>
  );
}

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg  p-6",
        className
      )}
      {...rest}
    />
  );
};




const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="cols-span-6 bg-20/[0.3]  md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-darker/[0.9]"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-20/[0.3] md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-darker/[0.9]"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-20/[0.3] md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-darker/[0.9]"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-20/[0.3] md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-darker/[0.9]"
      >
        <SiTwitter />
      </a>
    </Block>
  </>
);