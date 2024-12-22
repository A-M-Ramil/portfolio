"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn(" grid sm:grid-cols-2     ", className)}>{children}</div>
  );
};

export const CardItemz = ({
  className,
  title,
  description,
  pic,
  itemlink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  pic?: string | React.ReactNode;
  itemlink?: string;
}) => {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-20/[0.3] relative group/card  h-fit dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-[90vw] min-[500px]:w-[70vw]  gap-x-2  sm:w-fit     rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-xl h-[4vh] leading-[1rem] font-bold text-sixth dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sixth h-[4vh] text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic?.toString() || ""}
            height="1000"
            width="1000"
            className="h-33  w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-4 md:mt-8">
          <CardItem
            href={itemlink}
            translateZ={60}
            as={Link}
            className="px-4 py-2 rounded-xl bg-darker   text-1 text-xs font-bold"
          >
            Explore More →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
