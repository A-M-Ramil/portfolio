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

export default function AnimatedModalDemo() {
  const images = [
    "/k.jpg",
    "/k.jpg",
    "/k.jpg",
    "/k.jpg",
  ];
  return (
    <div className=" text-darker ">
      <Modal>
        <ModalTrigger className="bg-20  text-darker flex justify-center group/modal-btn">
          <span 
          
          className=" text-center ">
            Learn More
            
          </span>
          
        </ModalTrigger>


        <ModalBody>



          <ModalContent>
            <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
            Looking Ahead
           
            </h4>
            <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8"> My Aspirations - Vision & Future Goals</h6>
            <div className="flex justify-center items-center">
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
                  className="rounded-xl -mr-4 mt-4 p-1  bg-1 border border-1 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-28 w-28 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 text-justify leading-5 text-pretty text-[1.1rem] flex flex-wrap gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[90%] mx-auto">
            <p>
            As I look to the future, I see myself evolving into an entrepreneur who has successfully launched innovative businesses that make a meaningful impact. My passion for blockchain and emerging technologies drives this vision, and I’m committed to pushing the boundaries of what’s possible in this space.</p>
           
            <p>
            In the near term, I’m focused on securing a remote job as a blockchain developer, where I can contribute to cutting-edge projects and continue honing my skills. Simultaneously, I’m eager to delve deeper into research, particularly at the intersection of blockchain and AI, with the goal of writing a research paper in this field within the next year or so.

            </p>
            <p>
            Long-term, I aspire to pursue both a master’s and a Ph.D. abroad, specializing in blockchain or a related interdisciplinary field. This academic journey will not only deepen my expertise but also equip me with the knowledge and insights to lead future innovations.</p>
            <p>The road ahead is full of exciting possibilities, and I’m eager to embrace the challenges and opportunities that come my way.</p>
            
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Contact Me
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}













































