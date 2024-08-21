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
              My Story!
            </h4>
            <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">From Curiosity to Code - My Journey</h6>
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
                  className="rounded-xl -mr-4 mt-4 p-1 bg-1 border border-1 flex-shrink-0 overflow-hidden"
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
            From a young age, I was always that kid who couldn’t get enough of gaming, tinkering with software, and exploring all things tech. Yet, despite my fascination with technology, I never really saw myself as someone who would dive into the world of computer science. I had my heart set on becoming a nuclear engineer and also nurtured a deep love for business.</p>
           
            <p>
            Life, however, had different plans. The pandemic threw a wrench in my ambitions to study nuclear physics abroad. But looking back, I now see it as a blessing in disguise. With no clear path ahead, I found myself stepping into the world of Computer Science and Engineering (CSE). What started as a backup plan quickly turned into a passion. The thrill of solving problems, building projects, and diving into the intricacies of software has made this journey incredibly rewarding—and honestly, it feels more like play than work.</p>
            <p>
            Interestingly, my background wasn’t purely academic before university. I had already dabbled in graphic design, mastering tools like Illustrator and Photoshop, along with HTML, CSS, and even some C programming. I also had a knack for using Canva and basic Microsoft Office tools.</p>
            <p>Now, I find myself in a place where my love for business and computer science coexists harmoniously. Each day in CSE feels like an adventure, and achieving high scores comes naturally when you’re doing something you genuinely enjoy.</p>
            
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













































