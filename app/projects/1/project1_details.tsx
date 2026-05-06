"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/project_timeline";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiClerk,
  SiPaddle,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
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
    {
      id: 2,
      name: "TypeScript",
      designation: "Language",
      Icon: SiTypescript,
    },
    {
      id: 3,
      name: "PostgreSQL",
      designation: "Database",
      Icon: SiPostgresql,
    },
    {
      id: 4,
      name: "Prisma",
      designation: "ORM",
      Icon: SiPrisma,
    },
    {
      id: 5,
      name: "Clerk",
      designation: "Authentication",
      Icon: SiClerk,
    },
    {
      id: 6,
      name: "Paddle",
      designation: "Payments & Billing",
      Icon: SiPaddle,
    },
    {
      id: 7,
      name: "Docker",
      designation: "Containerization",
      Icon: SiDocker,
    },
    {
      id: 8,
      name: "shadcn/ui",
      designation: "UI Components",
      Icon: SiTailwindcss,
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
                  CSE391: Programming for the Internet Completed Project
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-6 leading-tight">
                From Concept to Production:{" "}
                <span className="text-[#212100] dark:text-[#c5c69b]">
                  Clubify
                </span>{" "}
                Evolution
              </h1>

              <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl mb-8">
                What began as a semester project evolved into a comprehensive
                full-stack SaaS platform. Over 7 weeks of agile development, I
                transformed initial concepts into a production-ready application
                that bridges university clubs with corporate sponsors through
                innovative technology.
              </p>

              {/* --- LIVE LINK & GITHUB BUTTONS --- */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://clubify-pi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#212100] dark:bg-[#c5c69b] text-[#FEFFD2] dark:text-[#212100] font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Visit Live Site
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                {/* Optional Github Link */}
                <a
                  href="https://github.com/A-M-Ramil/Clubify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#212100] dark:text-[#c5c69b] font-bold rounded-xl border-2 border-[#212100] dark:border-[#c5c69b] transition-all duration-300 hover:bg-[#212100]/5 dark:hover:bg-[#c5c69b]/10"
                >
                  Source Code
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              {/* -------------------------------------- */}
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
      title: "Architecture & Design",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl">
            Clubify operates on a robust multi-tenant architecture designed to
            securely separate data while maintaining a unified ecosystem for
            both student organizations and corporate sponsors.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-6 border-2 border-20 dark:border-[#c5c69b]/30 shadow-sm transition-all hover:shadow-md">
              <h4 className="text-xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-3">
                The Club Portal
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm leading-relaxed mb-4">
                A dedicated workspace for internal operations. Features include
                member onboarding, role assignment, event creation, and
                newsletter dispatching. Data is strictly isolated so clubs only
                access their own metrics.
              </p>
              <div className="inline-block px-3 py-1 bg-[#FEFFD2] dark:bg-[#c5c69b]/20 text-[#212100] dark:text-[#c5c69b] text-xs font-semibold rounded-full border border-[#c5c69b]/50">
                Internal Operations
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-6 border-2 border-20 dark:border-[#c5c69b]/30 shadow-sm transition-all hover:shadow-md">
              <h4 className="text-xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-3">
                Sponsor Dashboard
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm leading-relaxed mb-4">
                A discovery and negotiation hub for verified companies. Sponsors
                can browse events by university, category, or location, and send
                direct sponsorship proposals with tracked payment histories.
              </p>
              <div className="inline-block px-3 py-1 bg-[#FEFFD2] dark:bg-[#c5c69b]/20 text-[#212100] dark:text-[#c5c69b] text-xs font-semibold rounded-full border border-[#c5c69b]/50">
                B2B Discovery
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Deep Dive",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl mb-6">
            Moving beyond basic CRUD operations, the project tackled complex
            real-world SaaS requirements, specifically focusing on granular
            security and secure financial transactions.
          </p>
          <div className="space-y-4">
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30 flex flex-col md:flex-row gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center shrink-0">
                <SiClerk className="text-[#FEFFD2] dark:text-[#212100] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                  AuthN vs. AuthZ Isolation
                </h4>
                <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                  Implemented a clear boundary between Identity (Clerk) and
                  Access Control (Permit.io). While Clerk handles OAuth and
                  session security, Permit.io executes a hybrid RBAC-ABAC model
                  to ensure users can only edit resources belonging to their
                  specific club.
                </p>
              </div>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30 flex flex-col md:flex-row gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center shrink-0">
                <SiPaddle className="text-[#FEFFD2] dark:text-[#212100] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                  Monetization Engine
                </h4>
                <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                  Integrated Paddle as the Merchant of Record to handle complex
                  B2B sponsorship payments, sponsor subscription tiers, and
                  automated platform commission calculations on successful
                  deals.
                </p>
              </div>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30 flex flex-col md:flex-row gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center shrink-0">
                <SiDocker className="text-[#FEFFD2] dark:text-[#212100] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                  Deployment Architecture
                </h4>
                <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                  Containerized the Next.js application using Docker to ensure
                  environmental parity across development, testing, and
                  production stages, paving the way for scalable cloud hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Key Highlights",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-8 border-2 border-20 dark:border-[#c5c69b]/30 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-4">
              Global Event Showcase
            </h3>
            <p className="text-[#212100]/80 dark:text-[#c5c69b] mb-6">
              A dynamic landing page featuring an interactive map of ongoing and
              upcoming events across universities. Designed to maximize
              visibility for trending events and attract top-tier sponsors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#212100] dark:text-[#c5c69b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#212100] dark:bg-[#c5c69b]"></div>
                Clickable interactive event posters
              </li>
              <li className="flex items-center gap-2 text-sm text-[#212100] dark:text-[#c5c69b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#212100] dark:bg-[#c5c69b]"></div>
                Trending algorithms for high-visibility
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-8 border-2 border-20 dark:border-[#c5c69b]/30 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-4">
              Communication Hub
            </h3>
            <p className="text-[#212100]/80 dark:text-[#c5c69b] mb-6">
              Integrated with Resend API to power a robust internal
              communication system, allowing clubs to easily manage their
              audience and automate essential updates.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#212100] dark:text-[#c5c69b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#212100] dark:bg-[#c5c69b]"></div>
                Bulk newsletter dispatching
              </li>
              <li className="flex items-center gap-2 text-sm text-[#212100] dark:text-[#c5c69b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#212100] dark:bg-[#c5c69b]"></div>
                Custom email templating for RSVPs
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Challenges",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl">
            Building a dual-sided marketplace introduced several architectural
            hurdles that required careful planning and execution to overcome.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="  dark:bg-[#212100] rounded-xl p-6 border-l-4 border-l-[#212100] dark:border-l-[#c5c69b] border-y border-r border-[#c5c69b]">
              <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                Handling Multi-Tenancy Data Leaks
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                Ensuring that a user from 'Club A' could never accidentally
                query or mutate data belonging to 'Club B' required strict
                middleware rules and Row-Level Security (RLS) policies within
                Supabase and Prisma.
              </p>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border-l-4 border-l-[#212100] dark:border-l-[#c5c69b] border-y border-r border-[#c5c69b]">
              <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                Complex Database Relationships
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                Designing the Prisma schema to accurately map the many-to-many
                relationships between Sponsors, Events, and Clubs while
                maintaining referential integrity and query performance.
              </p>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border-l-4 border-l-[#212100] dark:border-l-[#c5c69b] border-y border-r border-[#c5c69b]">
              <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                State Management in Complex Forms
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                Managing the UI state for multi-step sponsorship proposals and
                event creation workflows, ensuring data validation across
                different components before database submission.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#212100]/5 to-transparent dark:from-[#212100]/80 dark:to-[#212100]/40 p-8 md:p-12 border-2 border-20 dark:border-[#c5c69b]/30 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#FEFFD2] dark:text-[#212100]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212100] dark:text-[#FEFFD2]">
              Bridging the Gap
            </h2>
            <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed">
              Clubify successfully delivers on its mission to professionalize
              university club management while opening direct monetization
              channels with corporate sponsors.
            </p>
            <p className="text-md text-[#212100]/70 dark:text-[#c5c69b]/80">
              Building this platform was an incredible journey through modern
              full-stack development, transitioning from basic theory to a
              production-ready architecture equipped to handle real-world scale
              and security demands.
            </p>
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
