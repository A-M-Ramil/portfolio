import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
  } from "@/components/ui/modal_pro";
  import Image from "next/image";
    import { motion } from "framer-motion";



export const Project1=()=>{
    const images = [
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
    ];
    return(
      <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
          Who I Am! 1
        </h4>
        <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">Tech Enthusiast & Developer - My Introduction</h6>
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
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
        Hi there! I’m a passionate Web3 enthusiast on a journey to become a full-stack Web3 developer. With a solid grounding in Next.js and Tailwind CSS, I’ve been diving deep into the world of decentralized applications, using tools like Foundry for Solidity and working with the Ethereum Virtual Machine (EVM).
        </p>
       
        <p>
        I’ve also tinkered with Python and Pygame for some fun game projects and have dabbled in C++ and C# for Unity. Currently, I’m in my third year of undergrad, holding a 3.9+ CGPA, and always eager to learn something new.
        </p>
        <p>
        My love for tech comes from a place of curiosity and creativity, and I’m always looking for ways to push the boundaries of what’s possible. If you’re interested in the intersection of Web3, development, and innovation, we might just have a lot to talk about!
        </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
      </ModalBody>
      
    )
  }





  export const Project2=()=>{
    const images = [
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
    ];
    return(
      <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
          Who I Am! 2
        </h4>
        <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">Tech Enthusiast & Developer - My Introduction</h6>
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
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
        Hi there! I’m a passionate Web3 enthusiast on a journey to become a full-stack Web3 developer. With a solid grounding in Next.js and Tailwind CSS, I’ve been diving deep into the world of decentralized applications, using tools like Foundry for Solidity and working with the Ethereum Virtual Machine (EVM).
        </p>
       
        <p>
        I’ve also tinkered with Python and Pygame for some fun game projects and have dabbled in C++ and C# for Unity. Currently, I’m in my third year of undergrad, holding a 3.9+ CGPA, and always eager to learn something new.
        </p>
        <p>
        My love for tech comes from a place of curiosity and creativity, and I’m always looking for ways to push the boundaries of what’s possible. If you’re interested in the intersection of Web3, development, and innovation, we might just have a lot to talk about!
        </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
      </ModalBody>
      
    )
  }
  
  



  export const Project3=()=>{
    const images = [
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
    ];
    return(
      <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
          Who I Am! 3
        </h4>
        <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">Tech Enthusiast & Developer - My Introduction</h6>
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
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
        Hi there! I’m a passionate Web3 enthusiast on a journey to become a full-stack Web3 developer. With a solid grounding in Next.js and Tailwind CSS, I’ve been diving deep into the world of decentralized applications, using tools like Foundry for Solidity and working with the Ethereum Virtual Machine (EVM).
        </p>
       
        <p>
        I’ve also tinkered with Python and Pygame for some fun game projects and have dabbled in C++ and C# for Unity. Currently, I’m in my third year of undergrad, holding a 3.9+ CGPA, and always eager to learn something new.
        </p>
        <p>
        My love for tech comes from a place of curiosity and creativity, and I’m always looking for ways to push the boundaries of what’s possible. If you’re interested in the intersection of Web3, development, and innovation, we might just have a lot to talk about!
        </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
      </ModalBody>
      
    )
  }







  export const Project4=()=>{
    const images = [
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
      "/k.jpg",
    ];
    return(
      <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl  font-extrabold text-center mb-8">
          Who I Am! 4
        </h4>
        <h6 className="text-lg md:text-1xl  font-extrabold text-center mb-8">Tech Enthusiast & Developer - My Introduction</h6>
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
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
        Hi there! I’m a passionate Web3 enthusiast on a journey to become a full-stack Web3 developer. With a solid grounding in Next.js and Tailwind CSS, I’ve been diving deep into the world of decentralized applications, using tools like Foundry for Solidity and working with the Ethereum Virtual Machine (EVM).
        </p>
       
        <p>
        I’ve also tinkered with Python and Pygame for some fun game projects and have dabbled in C++ and C# for Unity. Currently, I’m in my third year of undergrad, holding a 3.9+ CGPA, and always eager to learn something new.
        </p>
        <p>
        My love for tech comes from a place of curiosity and creativity, and I’m always looking for ways to push the boundaries of what’s possible. If you’re interested in the intersection of Web3, development, and innovation, we might just have a lot to talk about!
        </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
      </ModalBody>
      
    )
  }



  