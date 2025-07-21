"use client";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, useMemo } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 100,
      translateX: 100,
      duration: 6,
      delay: 0,
      repeatDelay: 2,
    },
    {
      initialX: 250,
      translateX: 250,
      duration: 8,
      delay: 1,
      repeatDelay: 3,
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      delay: 0.5,
      repeatDelay: 1,
    },
    {
      initialX: 550,
      translateX: 550,
      duration: 7,
      delay: 2,
      repeatDelay: 4,
    },
    {
      initialX: 700,
      translateX: 700,
      duration: 4,
      delay: 0,
      repeatDelay: 2,
    },
    {
      initialX: 850,
      translateX: 850,
      duration: 9,
      delay: 3,
      repeatDelay: 3,
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 6.5,
      delay: 1.5,
      repeatDelay: 2,
    },
    {
      initialX: 1150,
      translateX: 1150,
      duration: 7.5,
      delay: 0.7,
      repeatDelay: 1.5,
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 5,
      delay: 2,
      repeatDelay: 2.5,
    },
    {
      initialX: 1300,
      translateX: 1300,
      duration: 5,
      delay: 5,
      repeatDelay: 2.5,
    },
    {
      initialX: 1400,
      translateX: 1400,
      duration: 5,
      delay: 0,
      repeatDelay: 2.5,
    },
    {
      initialX: 1500,
      translateX: 1500,
      duration: 5,
      delay: 3,
      repeatDelay: 2.5,
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-full  bg-gradient-to-b relative flex items-center w-full justify-center overflow-hidden",

        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const ballSize = useMemo(() => {
    return Math.floor(Math.random() * 50) + 1; // 1 to 50 px
  }, []);
  const beamRef = React.useRef<HTMLDivElement>(null);
  const [collision, setCollision] = React.useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = React.useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] =
    React.useState(false);

  React.useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  React.useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        animate={{
          translateY: beamOptions.translateY || "1800px",
          translateX: beamOptions.translateX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={`absolute left-0 top-20 m-auto rounded-full bg-blue-500 ${
          beamOptions.className || ""
        }`}
        style={{
          width: ballSize,
          height: ballSize,
          borderRadius: "50%",
          backgroundColor: "#c5c69b",
          position: "absolute",
          top: "20px",
          left: 0,
          margin: "0 auto",
        }}
      />

      {/* Explosion stays the same */}
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 300 - 150),
    directionY: Math.floor(Math.random() * -200 - 40),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-darker to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-3 w-3 rounded-full bg-gradient-to-b from-20 to-20"
        />
      ))}
    </div>
  );
};
