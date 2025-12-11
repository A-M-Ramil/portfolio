"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/project_timeline";
import { SiNextdotjs, SiReact, SiSolidity } from "react-icons/si";
import { AnimatedTooltip } from "../../../components/ui/animated_project_stack";

interface PhaseCardProps {
  phaseNumber: string;
  title: string;
  timeframe: string;
  tag: string;
  features: { title: string; description: string }[];
  colorVariation: 1 | 2 | 3 | 4 | 5;
}

const PhaseCard = ({
  phaseNumber,
  title,
  timeframe,
  tag,
  features,
  colorVariation,
}: PhaseCardProps) => {
  const colorConfig = {
    1: {
      primary: "#212100",
      secondary: "#c5c69b",
      background: "rgba(33, 33, 0, 0.1)",
      border: "rgba(197, 198, 155, 0.3)",
      gradient: "from-[#212100]/20 to-transparent",
    },
    2: {
      primary: "#212100",
      secondary: "#c5c69b",
      background: "rgba(33, 33, 0, 0.08)",
      border: "rgba(197, 198, 155, 0.25)",
      gradient: "from-[#212100]/15 to-transparent",
    },
    3: {
      primary: "#212100",
      secondary: "#c5c69b",
      background: "rgba(33, 33, 0, 0.06)",
      border: "rgba(197, 198, 155, 0.2)",
      gradient: "from-[#212100]/10 to-transparent",
    },
    4: {
      primary: "#212100",
      secondary: "#c5c69b",
      background: "rgba(33, 33, 0, 0.04)",
      border: "rgba(197, 198, 155, 0.15)",
      gradient: "from-[#212100]/5 to-transparent",
    },
    5: {
      primary: "#212100",
      secondary: "#c5c69b",
      background: "rgba(33, 33, 0, 0.02)",
      border: "rgba(197, 198, 155, 0.1)",
      gradient: "from-[#212100]/3 to-transparent",
    },
  };

  const colors = colorConfig[colorVariation] || colorConfig[1];

  return (
    <div className="group relative">
      <div
        className={`absolute -inset-4 bg-gradient-to-r ${colors.gradient} dark:from-[#212100]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      <div
        className={`relative bg-1 dark:bg-[#212100] rounded-2xl p-7 border-2 border-[#c5c69b] dark:border-[#c5c69b]/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center shadow-lg">
                <span className="text-[#FEFFD2] dark:text-[#212100] font-bold text-lg">
                  {phaseNumber}
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#c5c69b] dark:bg-[#212100] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#212100] dark:bg-[#c5c69b] rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#212100] dark:text-[#FEFFD2]">
                {title}
              </h3>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] font-semibold">
                {timeframe}
              </p>
            </div>
          </div>
          <div
            className={`px-4 py-2 bg-20 dark:bg-[#212100] text-[#212100] dark:text-[#c5c69b] text-sm font-medium rounded-full border border-[#c5c69b] dark:border-[#c5c69b]/30`}
          >
            {tag}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-60 dark:bg-[#212100]/80 rounded-xl p-4 border border-20 dark:border-[#c5c69b]/20`}
            >
              <h4 className="font-semibold text-[#212100] dark:text-[#c5c69b] mb-2">
                {feature.title}
              </h4>
              <p className="text-[#212100]/70 dark:text-[#c5c69b]/80 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Project1Timeline() {
  const items = [
    {
      id: 1,
      name: "Next.js",
      designation: "Frontend Framework",
      Icon: SiNextdotjs,
    },
    { id: 2, name: "React", designation: "UI Library", Icon: SiReact },
    {
      id: 3,
      name: "Solidity",
      designation: "Smart Contract Language",
      Icon: SiSolidity,
    },
  ];

  const phasesData: Array<{
    phaseNumber: string;
    title: string;
    timeframe: string;
    tag: string;
    colorVariation: 1 | 2 | 3 | 4 | 5;
    features: { title: string; description: string }[];
  }> = [
    {
      phaseNumber: "01",
      title: "Research & Planning",
      timeframe: "Week 1",
      tag: "Discovery Phase",
      colorVariation: 1,
      features: [
        {
          title: "User Research",
          description: "Analyzed pain points for university clubs and sponsors",
        },
        {
          title: "Persona Definition",
          description:
            "Created detailed user personas for Presidents, Members & Sponsors",
        },
        {
          title: "Technical Planning",
          description:
            "Wireframes, user flows, and technical requirements definition",
        },
      ],
    },
    {
      phaseNumber: "02",
      title: "Core Architecture",
      timeframe: "Week 2",
      tag: "Foundation Building",
      colorVariation: 2,
      features: [
        {
          title: "Tech Stack Setup",
          description: "Next.js 14, TypeScript, Prisma, Supabase foundation",
        },
        {
          title: "Authentication",
          description: "Clerk implementation with dual login flows and OAuth",
        },
        {
          title: "Database Design",
          description: "Multi-tenant architecture with proper data isolation",
        },
      ],
    },
    {
      phaseNumber: "03",
      title: "Feature Implementation",
      timeframe: "Weeks 3-4",
      tag: "Core Features",
      colorVariation: 3,
      features: [
        {
          title: "Club Dashboard",
          description: "RBAC permissions, member management, role hierarchy",
        },
        {
          title: "Sponsor Portal",
          description: "Company verification system and sponsorship workflows",
        },
        {
          title: "Event Management",
          description:
            "Event creation, media uploads, and calendar integration",
        },
      ],
    },
    {
      phaseNumber: "04",
      title: "Integration & Polish",
      timeframe: "Weeks 5-6",
      tag: "Service Integration",
      colorVariation: 4,
      features: [
        {
          title: "Payment System",
          description: "Paddle integration for secure sponsorship transactions",
        },
        {
          title: "Authorization",
          description: "Hybrid RBAC-ABAC model with Permit.io",
        },
        {
          title: "Containerization",
          description: "Docker setup for consistent deployment environments",
        },
      ],
    },
    {
      phaseNumber: "05",
      title: "Deployment",
      timeframe: "Week 7",
      tag: "Launch & Documentation",
      colorVariation: 5,
      features: [
        {
          title: "Production Deployment",
          description: "Vercel deployment with environment configuration",
        },
        {
          title: "Documentation",
          description: "Technical documentation and deployment guides",
        },
        {
          title: "Quality Assurance",
          description: "Security audit, performance testing, and bug fixes",
        },
      ],
    },
  ];

  const data = [
    {
      title: "Project Overview",
      content: (
        <div className="space-y-10">
          <div className="relative overflow-hidden rounded-3xl bg-1 p-8 md:p-10 border-2 border-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-20 dark:bg-[#212100]/80 rounded-full border border-[#c5c69b] dark:border-[#c5c69b]/30">
                <div className="w-2 h-2 rounded-full bg-[#212100] dark:bg-[#c5c69b] "></div>
                <span className="text-sm font-medium text-[#212100] dark:text-[#c5c69b]">
                  CSE391: Programming for the Internet • Completed Project
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-6 leading-tight">
                From Concept to Production:{" "}
                <span className="text-[#212100] dark:text-[#c5c69b]">
                  Clubify
                </span>{" "}
                Evolution
              </h1>

              <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl">
                What began as a semester project evolved into a comprehensive
                full-stack SaaS platform. Over 7 weeks of agile development, I
                transformed initial concepts into a production-ready application
                that bridges university clubs with corporate sponsors through
                innovative technology.
              </p>
            </div>
          </div>

          {/* Development Phases - Using the modular component */}
          <div className="space-y-6">
            {phasesData.map((phase, index) => (
              <PhaseCard
                key={index}
                phaseNumber={phase.phaseNumber}
                title={phase.title}
                timeframe={phase.timeframe}
                tag={phase.tag}
                features={phase.features}
                colorVariation={phase.colorVariation}
              />
            ))}
          </div>

          {/* Outcome Summary - Updated with your colors */}
          <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-8 border-2 border-20 shadow-lg">
            <div className="relative z-10">
              <div className="flex xl:flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-3">
                    Final Outcome: Production-Ready SaaS Platform
                  </h3>
                  <p className="text-[#212100]/70 dark:text-[#c5c69b] text-lg">
                    The project culminated in a fully functional, scalable
                    application that successfully integrates multiple complex
                    systems into a cohesive user experience.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-[#FEFFD2] dark:bg-[#212100] text-[#212100] dark:text-[#c5c69b] font-semibold rounded-lg border border-[#c5c69b] dark:border-[#c5c69b]/30">
                    Multi-Tenant Architecture
                  </div>
                  <div className="px-4 py-2 bg-[#FEFFD2] dark:bg-[#212100] text-[#212100] dark:text-[#c5c69b] font-semibold rounded-lg border border-[#c5c69b] dark:border-[#c5c69b]/30">
                    Secure Payments
                  </div>
                  <div className="px-4 py-2 bg-[#FEFFD2] dark:bg-[#212100] text-[#212100] dark:text-[#c5c69b] font-semibold rounded-lg border border-[#c5c69b] dark:border-[#c5c69b]/30">
                    6+ Service Integrations
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30">
                  <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#212100] dark:bg-[#c5c69b]"></div>
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FEFFD2] dark:bg-[#212100] flex items-center justify-center mt-0.5 border border-[#c5c69b]">
                        <span className="text-[#212100] dark:text-[#c5c69b] text-sm">
                          ✓
                        </span>
                      </div>
                      <span className="text-[#212100] dark:text-[#c5c69b]">
                        Real payment processing integration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FEFFD2] dark:bg-[#212100] flex items-center justify-center mt-0.5 border border-[#c5c69b]">
                        <span className="text-[#212100] dark:text-[#c5c69b] text-sm">
                          ✓
                        </span>
                      </div>
                      <span className="text-[#212100] dark:text-[#c5c69b]">
                        Hybrid authorization model (RBAC + ABAC)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FEFFD2] dark:bg-[#212100] flex items-center justify-center mt-0.5 border border-[#c5c69b]">
                        <span className="text-[#212100] dark:text-[#c5c69b] text-sm">
                          ✓
                        </span>
                      </div>
                      <span className="text-[#212100] dark:text-[#c5c69b]">
                        Production deployment with Docker
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30">
                  <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#212100] dark:bg-[#c5c69b]"></div>
                    Skills Demonstrated
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FEFFD2] dark:bg-[#212100] flex items-center justify-center mt-0.5 border border-[#c5c69b]">
                        <span className="text-[#212100] dark:text-[#c5c69b] text-sm">
                          ★
                        </span>
                      </div>
                      <span className="text-[#212100] dark:text-[#c5c69b]">
                        Full-stack architecture design
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FEFFD2] dark:bg-[#212100] flex items-center justify-center mt-0.5 border border-[#c5c69b]">
                        <span className="text-[#212100] dark:text-[#c5c69b] text-sm">
                          ★
                        </span>
                      </div>
                      <span className="text-[#212100] dark:text-[#c5c69b]">
                        Third-party service integration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#FEFFD2] dark:bg-[#212100] flex items-center justify-center mt-0.5 border border-[#c5c69b]">
                        <span className="text-[#212100] dark:text-[#c5c69b] text-sm">
                          ★
                        </span>
                      </div>
                      <span className="text-[#212100] dark:text-[#c5c69b]">
                        Complex state & permission management
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tech_Stack",
      content: (
        <div className="flex h-fit  flex-row mb-10 w-full">
          <AnimatedTooltip items={items} />
        </div>
      ),
    },
    {
      title: "Diagram & Details",
      content: (
        <div>
          <p className="text-neutral-800  dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="px-4 py-2 rounded-md border border-20 bg-20/[0.5] text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Sketch
            </button>
            <button className="px-4 py-2 rounded-md border border-20 bg-20/[0.5] text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Sketch
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Aspects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src=""
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Highlights",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src=""
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Challenges",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src=""
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Conclusion",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src=""
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src=""
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Timeline data={data} />
    </div>
  );
}
