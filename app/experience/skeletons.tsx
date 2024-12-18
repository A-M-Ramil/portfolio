import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/modalexp";
import Image from "next/image";
import { motion } from "framer-motion";

export const Education = () => {
  const images = ["/k.jpg", "/k.jpg", "/k.jpg", "/k.jpg"];
  return (
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl tracking-widest font-extrabold text-center mb-1">
          Educational Background
        </h4>
        <h6 className="text-xs md:text-1xl  font-semibold text-center mb-8">
          My Developer Journey
        </h6>
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
        <div className="py-10 text-justify leading-5 text-pretty text-sm flex flex-wrap gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[90%] mx-auto">
          <p>
            I’m currently pursuing a <b>Bachelor’s degree</b> in{" "}
            <b>Computer Science and Engineering</b> at <b>BRAC University</b>,
            where I’m deepening my understanding of programming, data
            structures, and algorithms. My coursework has also covered software
            engineering, computer networks, and database management systems, all
            grounded in a solid foundation of mathematics and statistics.
          </p>

          <p>
            Before university, I completed my HSC at <b>Notre Dame College</b>,
            one of the most esteemed institutions in Bangladesh.
          </p>

          <p>
            Throughout my academic journey, I’ve consistently ranked in the top
            1% of my department, a testament to my dedication and hard work. I’m
            passionate about learning and growing, and I’m always seeking new
            opportunities to expand my knowledge and skills.
          </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
    </ModalBody>
  );
};

export const Blockchain = () => {
  const images = ["/k.jpg", "/k.jpg", "/k.jpg", "/k.jpg"];
  return (
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl tracking-widest font-extrabold text-center mb-2">
          A Journey of Blocks
        </h4>
        <h6 className="text-xs md:text-1xl  font-semibold text-center mb-8">
          How I ended up here-Blockchain
        </h6>
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
        <div className="py-10 text-justify leading-5 text-pretty text-sm flex flex-wrap gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[90%] mx-auto">
          <p>
            My journey into the world of Web3 and blockchain began early in my
            academic career, starting from my freshman year at{" "}
            <b>BRAC University</b>. Alongside my university studies, I delved
            deeply into blockchain technology, the{" "}
            <b>Ethereum Virtual Machine (EVM)</b>, and <b>Solidity</b>. It was a
            path that demanded both time and dedication, as I balanced my
            coursework with the growing passion for this cutting-edge field.
          </p>

          <p>
            I primarily honed my skills through online resources, including
            comprehensive certifications like the Blockchain specialization from
            the <b>University at Buffalo</b> via Coursera. This program provided
            me with a solid foundation, and I quickly moved on to applying my
            knowledge through hands-on projects. Over time, I’ve developed and
            deployed numerous full-fledged blockchain projects, writing smart
            contracts and exploring various aspects of decentralized technology.
          </p>

          <p>
            In addition to online learning, I also took a specialized course in
            Blockchain at my university, further solidifying my understanding of
            the technology. Despite the challenges of balancing my academic
            responsibilities—where I’ve consistently ranked in the top 1% of my
            department—I’ve remained committed to mastering blockchain. This
            dedication has enabled me to contribute to a range of projects, each
            one expanding my expertise and deepening my passion for Web3
            development.
          </p>

          <p>
            Looking back, the journey has been incredibly rewarding, and I’m
            excited about the future possibilities in this dynamic and
            transformative space.
          </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
    </ModalBody>
  );
};

export const Seo = () => {
  const images = ["/k.jpg", "/k.jpg", "/k.jpg", "/k.jpg"];
  return (
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl tracking-widest font-extrabold text-center mb-2">
          Mastering SEO: A Journey of Strategic Growth
        </h4>

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
        <div className="py-10 text-justify leading-5 text-pretty text-sm flex flex-wrap gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[90%] mx-auto">
          <p>
            I first ventured into the world of{" "}
            <b>Search Engine Optimization (SEO)</b> back in December 2021,
            learning the ropes through <b>Passive Journal</b>. During this time,
            I gained hands-on experience in essential SEO techniques, including{" "}
            <b>keyword research</b>, <b>on-page optimization</b>, and{" "}
            <b>local SEO</b>. These skills allowed me to execute minor projects
            that improved website visibility and search engine rankings.
          </p>

          <p>
            Although I didn’t pursue SEO as a long-term career path, as my
            journey into university led me to discover a deep passion for
            programming and the technical aspects of the web, the experience I
            gained has been invaluable. The analytical and strategic thinking
            required in SEO continues to influence my approach to
            problem-solving in the tech field.
          </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
    </ModalBody>
  );
};

export const Webdev = () => {
  const images = ["/k.jpg", "/k.jpg", "/k.jpg", "/k.jpg"];
  return (
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl  font-extrabold tracking-widest text-center mb-2">
          Building the Web: My Development Journey
        </h4>
        <h6 className="text-xs md:text-1xl  font-semibold text-center mb-8">
          From Smart Contracts to Full-Stack Expertise
        </h6>
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
        <div className="py-10 text-justify leading-5 text-pretty text-sm flex flex-wrap gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[90%] mx-auto">
          <p>
            My web development journey began out of necessity when I realized I
            needed a platform to bring my smart contracts to life, essentially
            creating a <b>dApp</b>. Initially, I was torn between diving into
            mobile app development with Flutter or Kotlin, but the versatility
            and power of web development ultimately won me over.
          </p>

          <p>
            I quickly immersed myself in the world of web technologies, starting
            with <b>Next.js</b>—a framework that offered the power and
            flexibility I was looking for. Along the way, I picked up{" "}
            <b>Tailwind CSS</b>, <b>SCSS</b>, and <b>CSS</b> to craft responsive
            and visually appealing designs. My journey didn’t stop there; I also
            delved into <b>TypeScript</b> for type-safe coding, and enhanced my
            pages with animations using <b>Framer Motion</b> and a bit of{" "}
            <b>GSAP</b>.
          </p>

          <p>
            In the backend, I’ve worked with <b>Prisma ORM</b>, primarily using
            databases like <b>MySQL</b>, <b>SQLite</b>, and <b>MongoDB</b>. I
            have also touched on <b>Django</b> and <b>Node.js</b>, broadening my
            full-stack capabilities. To bring my web3 vision to life, I learned{" "}
            <b>web3.js</b> and <b>ether.js</b>, connecting the frontend with
            blockchain technology.
          </p>

          <p>
            Despite the rapid pace of learning, I’ve committed to mastering each
            tool and technology, driven by my perfectionist nature. In fact,
            this portfolio website is my fourth iteration. The previous three
            were nearly complete, but I scrapped them after reaching 90%-100%
            because I simply changed my mind. If you’re reading this, know that
            I’m always striving for the perfect balance between functionality
            and design, and I’m constantly evolving my skills to achieve that.
          </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
    </ModalBody>
  );
};

export const Workexp = () => {
  const images = ["/k.jpg", "/k.jpg", "/k.jpg", "/k.jpg"];
  return (
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl  font-extrabold tracking-widest text-center mb-2">
          Professional Experience
        </h4>
        <h6 className="text-xs md:text-1xl  font-semibold text-center mb-8">
          Work life balance{" "}
        </h6>
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
        <div className="py-10 text-justify leading-5 text-pretty text-sm flex flex-wrap gap-x-4 gap-y-6 tracking-wide  items-start justify-start w-[90%] mx-auto">
          <p>
            Though I’m a fresher in the professional world, my journey in tech
            has been anything but ordinary. I’ve spent years honing my craft
            across various domains, consistently pushing myself to learn, adapt,
            and innovate. My work speaks to my dedication, meticulousness, and
            passion for creating impactful solutions.
          </p>
          <p>
            What sets me apart is my ability to dive deep into complex problems
            and emerge with practical, efficient solutions. I approach every
            project with a perfectionist mindset, ensuring that the final
            product not only meets but exceeds expectations. My portfolio is a
            testament to this, with multiple iterations of my work demonstrating
            my commitment to continuous improvement and excellence.
          </p>
          <p>
            While I may be at the beginning of my career, I bring a fresh
            perspective, a hunger to learn, and a relentless drive to contribute
            meaningfully. I’m not just looking for a job—I’m looking for an
            opportunity to make a difference, to be part of a team that values
            innovation and forward-thinking.
          </p>
          <p>
            I’m eager to apply my skills and passion to real-world challenges,
            and I’m confident that my proactive approach and ability to deliver
            high-quality results make me a valuable asset to any team. I’m ready
            to take on new challenges, grow professionally, and help drive
            success through creativity and hard work.
          </p>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Contact Me
        </button>
      </ModalFooter>
    </ModalBody>
  );
};
