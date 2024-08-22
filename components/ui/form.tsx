"use client";
import React from "react";
import { Input } from "./input";
import { cn } from "@/utils/cn";
import { motion, MotionProps } from "framer-motion";

export default function SignupForm() {
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    
    
    <div className="h-full w-full mx-auto rounded-none md:rounded-2xl  p-4 md:p-8 shadow-input bg-20/[0.3]">
      
      
      
        <LabelInputContainer className=" mb-4 ">
            <Input id="Name" placeholder="Name" type="text" />
        </LabelInputContainer>
                
        <LabelInputContainer className="mb-4">
          
          <Input id="email" placeholder="Email" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          
          <Input id="subject" placeholder="Subject" type="text" />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-4">
          
          <Input id="message" placeholder="Write in details" type="text" />
        </LabelInputContainer>
        <motion.button
          className="bg-gradient-to-br relative group/btn from-60 to-60 block bg-60 w-full text-darker/[0.9] rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(10)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          whileHover={{ scale: 1.1 }}
          onClick={
            handleSubmit
          }
        >
          Submit
          <BottomGradient />
        </motion.button>

        
      
    </div>
   
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col h-[5.5vh] space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

