"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/modal";
import Image from "next/image";
import { MaskContainer } from "@/components/ui/mask";

export default function AnimatedModalDemo() {
  return (
    <div className=" text-darker ">
      <Modal>
        <ModalTrigger className="bg-20  text-darker flex justify-center group/modal-btn">
          <span className=" text-center ">Learn More</span>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
              Who I Am!
            </h4>
            <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">
              Tech Enthusiast & Developer - My Introduction
            </h6>
            <div className="flex justify-center ">
              <Image
                src={"/whoamI.jpg"}
                alt="bali images"
                width="900"
                height="1200"
                className="rounded-lg h-fit w-[100%] object-cover flex-shrink-0"
              />
            </div>
            <MaskContainer
              revealText={
                <p className="py-10 text-justify bg-1 text-black leading-5 text-pretty text-sm  gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[100%] mx-auto">
                  Hi there! I’m a passionate Web3 enthusiast on a journey to
                  become a full-stack Web3 developer. With a solid grounding in
                  Next.js and Tailwind CSS, I’ve been diving deep into the world
                  of decentralized applications, using tools like Foundry for
                  Solidity and working with the Ethereum Virtual Machine (EVM).
                  <br />
                  I’ve also tinkered with Python and Pygame for some fun game
                  projects and have dabbled in C++ and C# for Unity. Currently,
                  I’m in my third year of undergrad, holding a 3.9+ CGPA, and
                  always eager to learn something new.
                  <br />
                  My love for tech comes from a place of curiosity and
                  creativity, and I’m always looking for ways to push the
                  boundaries of what’s possible. If you’re interested in the
                  intersection of Web3, development, and innovation, we might
                  just have a lot to talk about!
                </p>
              }
              size={30}
              revealSize={300}
            >
              <p className="text-1">3rd Year Cool Undergrad Student</p>
            </MaskContainer>
          </ModalContent>
          <ModalFooter className="gap-4">
            <a
              href="/contacts"
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-1 rounded-md border border-black w-28"
            >
              Contact Me
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
