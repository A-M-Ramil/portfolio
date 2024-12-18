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
import { motion } from "framer-motion";
import { MaskContainer } from "@/components/ui/mask";

export default function AnimatedModalDemo() {
  const images = [
    "/about/nar.gif",
    "/about/read.gif",
    "/about/fracry3.gif",
    "/about/gym.gif",
  ];
  return (
    <div className=" text-darker ">
      <Modal>
        <ModalTrigger className="bg-20  text-darker flex justify-center group/modal-btn">
          <span className=" text-center ">Learn More</span>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
              Beyond Code
            </h4>
            <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">
              Hobbies & Passions - Life Outside Tech
            </h6>
            <div className="flex justify-center mb-4 items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 1000,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 1000,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-1 border border-1  flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    unoptimized
                    className="rounded-lg h-28 w-28 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <MaskContainer
              revealText={
                <p className="py-10 text-justify  bg-1 text-black leading-5 text-pretty text-sm  gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[100%] mx-auto">
                  When I’m not deep in code, you’ll probably find me immersed in
                  one of my favorite offline AAA-rated games or battling it out
                  in an online FPS. Gaming has always been a big part of my
                  life—it’s my way of unwinding and keeping the competitive
                  spirit alive.Some of my favorite games include{" "}
                  <em>Sekiro: Shadows Die Twice</em>,<em>The Witcher 3</em>,{" "}
                  <em>Red Dead Redemption 2</em>,<em>Ghost of Tsushima</em>, or{" "}
                  <em>Far Cry 3</em>.
                  <p className="mb-4" />
                  But it’s not all about screen time for me. I’m also a huge fan
                  of self-help and entrepreneurial books. Some of my favorites
                  include <em>Show Your Work</em>, <em>Rework</em>,
                  <em>The Almanack of Naval Ravikant</em>, <em>Ikigai</em>, and{" "}
                  <em>Never Split the Difference</em>. I’m always on the lookout
                  for new insights and ways to better understand life and
                  business. Recently, I’ve added weightlifting to my routine,
                  and the gym has become a new passion of mine—it’s amazing how
                  pushing physical limits can clear the mind.
                  <p className="mb-4" />
                  I’ve also got a soft spot for cats. Though I don’t have one at
                  the moment, I really hope to adopt a feline friend someday.
                  And when I’m not gaming or at the gym, I’m probably trying to
                  sharpen my chess skills or diving into a new anime. Speaking
                  of which, I’ve seen so many anime, manga, manhwa, and manhua
                  that I’ve honestly lost count. If you ever need a
                  recommendation, I’m your go-to person.
                </p>
              }
              size={30}
              revealSize={500}
            >
              <p className="text-1">
                All hail to PC Gamers! <br />
                (also, cat lovers)
              </p>
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
