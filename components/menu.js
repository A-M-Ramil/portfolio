"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import FlipLink from "@/components/ui/zoop";
import FlipLinkOnly from "@/components/ui/zoop-only";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/contacts", label: "Contact" },
  { path: "/experience", label: "Experience" },
];

export default function Menu() {
  const container = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = async () => {
    setMenuOpen(!menuOpen);
  };

  const tl = useRef();

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.75,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })

        .to(".menu-link-item-holder", {
          duration: 1.5,
          y: 0,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuOpen]);

  return (
    <div className="menu-container z-auto " ref={container}>
      <div className="menu-bar z-50">
        <div className="menu-logo z-9 text-1xl text-white">
          <FlipLink href={"/"}>Home</FlipLink>
        </div>
        <div className="menu-open z-9  text-white" onClick={toggleMenu}>
          <FlipLinkOnly>Menu</FlipLinkOnly>
        </div>
      </div>
      <div className="menu-overlay z-9">
        <div className="menu-overlay-bar z-9">
          <div className="menu-logo text-1xl text-white">
            <FlipLink href={"/"}>Home</FlipLink>
          </div>
          <div className="menu-logo text-1xl text-white" onClick={toggleMenu}>
            <FlipLinkOnly>Close</FlipLinkOnly>
          </div>
        </div>
        <div className="menu-close-icon text-white" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy md:px-[2em] md:py-[2em] ">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div
                  className="menu-link-item-holder text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw]"
                  onClick={toggleMenu}
                >
                  <FlipLink href={link.path}>{link.label}</FlipLink>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info ">
            <div className="menu-info-col h-full  ">
              <div className="w-fit flex flex-col gap-y-2 xl:text-[2vw] h-fit text-white">
                <FlipLink href="https://x.com/A_M_Ramil">X &#8599;</FlipLink>
                <FlipLink href="https://github.com/A-M-Ramil">
                  GitHub &#8599;
                </FlipLink>
                <FlipLink href="https://www.facebook.com/ahammodmunim.ramil">
                  Facebook&#8599;
                </FlipLink>
                <FlipLink href="https://bd.linkedin.com/in/amramil">
                  LinkedIn &#8599;
                </FlipLink>
                <FlipLink
                  href="/AhammodMunimRamil_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume &#8599;
                </FlipLink>
              </div>
            </div>
            <div className="menu-info-col  ">
              <div className="w-fit flex flex-col gap-y-2  xl:text-[2vw] h-fit text-white">
                <FlipLinkOnly>amramil.amr@gmail.com</FlipLinkOnly>
                <FlipLinkOnly>+880 1755 219197</FlipLinkOnly>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-preview text-white"></div>
      </div>
    </div>
  );
}
