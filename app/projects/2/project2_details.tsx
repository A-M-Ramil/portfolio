"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/project_timeline";
import {
  SiNextdotjs,
  SiTypescript,
  SiSolidity,
  SiIpfs,
  SiEthereum,
  SiTailwindcss,
  SiVercel,
  SiGithub,
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
      name: "Solidity",
      designation: "Smart Contracts",
      Icon: SiSolidity,
    },
    {
      id: 3,
      name: "Ethereum",
      designation: "Blockchain / EVM",
      Icon: SiEthereum,
    },
    {
      id: 4,
      name: "IPFS",
      designation: "Decentralized Storage",
      Icon: SiIpfs,
    },
    {
      id: 5,
      name: "TypeScript",
      designation: "Language",
      Icon: SiTypescript,
    },
    {
      id: 6,
      name: "Ethers.js",
      designation: "Web3 Integration",
      Icon: SiEthereum, // Reusing Ethereum icon as Ethers.js doesn't have a standard Simple Icon
    },
    {
      id: 7,
      name: "Tailwind CSS",
      designation: "Styling",
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
      title: "Requirement Engineering",
      timeframe: "Weeks 1-2",
      tag: "Analysis Phase",
      colorVariation: 1,
      features: [
        {
          title: "SDLC Planning",
          description:
            "Analyzed requirements for a decentralized trustless system.",
        },
        {
          title: "UML Design",
          description:
            "Created Use Case and Class diagrams for Campaign management.",
        },
        {
          title: "Feasibility Study",
          description:
            "Assessed socio-economic and regulatory challenges of Web3.",
        },
      ],
    },
    {
      phaseNumber: "02",
      title: "Architecture & Contracts",
      timeframe: "Weeks 3-5",
      tag: "Design Phase",
      colorVariation: 2,
      features: [
        {
          title: "Smart Contract Design",
          description:
            "Architected secure Solidity contracts for escrow and withdrawals.",
        },
        {
          title: "EVM Integration",
          description:
            "Ensured EVM compatibility for tamper-proof data handling.",
        },
        {
          title: "MVC Pattern",
          description:
            "Applied Architectural patterns as per CSE470 guidelines.",
        },
      ],
    },
    {
      phaseNumber: "03",
      title: "Frontend & Web3 Sync",
      timeframe: "Weeks 6-8",
      tag: "Implementation",
      colorVariation: 3,
      features: [
        {
          title: "Wallet Connection",
          description:
            "Integrated private key cryptography for secure authentication.",
        },
        {
          title: "Real-Time Tracking",
          description:
            "Built UI for real-time progress bars and contribution tracking.",
        },
        {
          title: "IPFS Storage",
          description:
            "Implemented decentralized image hosting for campaign assets.",
        },
      ],
    },
    {
      phaseNumber: "04",
      title: "Testing & Security",
      timeframe: "Weeks 9-11",
      tag: "Quality Assurance",
      colorVariation: 4,
      features: [
        {
          title: "Smart Contract Audit",
          description:
            "Tested withdrawal mechanics to ensure zero admin interference.",
        },
        {
          title: "Software Metrics",
          description:
            "Evaluated code quality using Cyclomatic Complexity and CFG.",
        },
        {
          title: "Gas Optimization",
          description:
            "Refactored code to minimize blockchain transaction costs.",
        },
      ],
    },
    {
      phaseNumber: "05",
      title: "Deployment & Delivery",
      timeframe: "Weeks 12-13",
      tag: "Launch",
      colorVariation: 5,
      features: [
        {
          title: "Blockchain Deployment",
          description:
            "Deployed the final smart contracts to the blockchain network.",
        },
        {
          title: "NFT Minting",
          description:
            "Finalized ERC721 token minting for contributor rewards.",
        },
        {
          title: "Documentation",
          description:
            "Compiled comprehensive SDLC documentation and user guides.",
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
                  CSE470: Software Engineering Project
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-6 leading-tight">
                Decentralizing the Future of Funding:{" "}
                <span className="text-[#212100] dark:text-[#c5c69b]">
                  CrowdEther
                </span>{" "}
              </h1>
              <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl mb-8">
                CrowdEther is a blockchain-based crowdfunding platform designed
                to make fundraising more secure, accessible, and transparent
                globally. Developed as a capstone for CSE470, it eliminates
                traditional banking restrictions by utilizing Ethereum Smart
                Contracts, ensuring zero currency borders and tamper-proof
                transactions.
              </p>

              {/* --- LIVE LINK & GITHUB BUTTONS --- */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://crowd-ether-c.vercel.app/"
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

                <a
                  href="https://github.com/A-M-Ramil/CrowdEther"
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
            </div>
          </div>

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

          <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-8 border-2 border-20 shadow-lg">
            <div className="relative z-10">
              <div className="flex xl:flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-3">
                    Final Outcome: A Trustless Ecosystem
                  </h3>
                  <p className="text-[#212100]/70 dark:text-[#c5c69b] text-lg">
                    The platform successfully replaced traditional centralized
                    banking with immutable EVM smart contracts, lowering
                    administrative costs and increasing donor confidence.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-[#FEFFD2] dark:bg-[#212100] text-[#212100] dark:text-[#c5c69b] font-semibold rounded-lg border border-[#c5c69b] dark:border-[#c5c69b]/30">
                    Smart Contracts
                  </div>
                  <div className="px-4 py-2 bg-[#FEFFD2] dark:bg-[#212100] text-[#212100] dark:text-[#c5c69b] font-semibold rounded-lg border border-[#c5c69b] dark:border-[#c5c69b]/30">
                    ERC721 Tokens
                  </div>
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
        <div className="flex h-fit flex-row mb-10 w-full">
          <AnimatedTooltip items={items} />
        </div>
      ),
    },
    {
      title: "Architecture & Design",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl">
            CrowdEther leverages Ethereum Virtual Machine (EVM) compatibility to
            ensure all data is tamper-proof and fully transparent to the public.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-6 border-2 border-20 dark:border-[#c5c69b]/30 shadow-sm transition-all hover:shadow-md">
              <h4 className="text-xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-3">
                Web3 Authentication
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm leading-relaxed mb-4">
                Users authenticate seamlessly by connecting their Web3 wallets
                (e.g., MetaMask). The connected wallet's private key acts as the
                sole authenticator, entirely removing the need for traditional
                passwords.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-6 border-2 border-20 dark:border-[#c5c69b]/30 shadow-sm transition-all hover:shadow-md">
              <h4 className="text-xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-3">
                Decentralized Storage
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm leading-relaxed mb-4">
                To keep the blockchain lightweight and avoid exorbitant gas
                fees, campaign images and metadata are stored on IPFS servers
                rather than directly on the Ethereum chain.
              </p>
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
            The core logic of CrowdEther relies heavily on custom Solidity smart
            contracts to handle complex financial operations without human
            intermediaries.
          </p>
          <div className="space-y-4">
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30 flex flex-col md:flex-row gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center shrink-0">
                <SiSolidity className="text-[#FEFFD2] dark:text-[#212100] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                  Automated Escrow Management
                </h4>
                <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                  Smart contracts act as an automated escrow. Funds are locked
                  securely on the blockchain and cannot be withdrawn by the
                  creator until the predefined campaign goal is reached or the
                  time limit expires.
                </p>
              </div>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border border-[#c5c69b] dark:border-[#c5c69b]/30 flex flex-col md:flex-row gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#212100] dark:bg-[#c5c69b] flex items-center justify-center shrink-0">
                <SiEthereum className="text-[#FEFFD2] dark:text-[#212100] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                  Zero-Interference Withdrawals
                </h4>
                <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                  The withdrawal mechanism is cryptographically hardcoded so
                  that absolutely no one—not even the platform
                  administrators—can interfere with or access the raised funds
                  once the creator's wallet requests a valid withdrawal.
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
              Real-Time Transparency
            </h3>
            <p className="text-[#212100]/80 dark:text-[#c5c69b] mb-6">
              Because the application reads directly from the blockchain state,
              the UI updates goal tracking, time left, and contribution amounts
              in absolute real-time as blocks are mined.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-1 dark:bg-[#212100]/80 p-8 border-2 border-20 dark:border-[#c5c69b]/30 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#212100] dark:text-[#FEFFD2] mb-4">
              NFT Rewards System
            </h3>
            <p className="text-[#212100]/80 dark:text-[#c5c69b] mb-6">
              Campaign creators have the option to reward their top
              contributors. Images saved to the IPFS server can be minted as
              ERC721 tokens (NFTs) and distributed to supporters.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Challenges Overcome",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed max-w-3xl">
            Developing a decentralized financial platform introduced strict
            technical and socio-economic hurdles.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border-l-4 border-l-[#212100] dark:border-l-[#c5c69b] border-y border-r border-[#c5c69b]">
              <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                Gas Price Education & Trust
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                A major socio-economic challenge was teaching users how gas
                prices work on the EVM and why network transaction costs exist
                alongside their standard donations.
              </p>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border-l-4 border-l-[#212100] dark:border-l-[#c5c69b] border-y border-r border-[#c5c69b]">
              <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                Smart Contract Vulnerabilities
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                Because smart contracts are immutable once deployed,
                implementing rigorous security measures to encrypt data and
                prevent hacking was critical to ensuring user funds remained
                safe.
              </p>
            </div>
            <div className="bg-[#FEFFD2]/50 dark:bg-[#212100] rounded-xl p-6 border-l-4 border-l-[#212100] dark:border-l-[#c5c69b] border-y border-r border-[#c5c69b]">
              <h4 className="font-bold text-lg text-[#212100] dark:text-[#FEFFD2] mb-2">
                Regulatory Adaptation
              </h4>
              <p className="text-[#212100]/80 dark:text-[#c5c69b] text-sm">
                Addressing legal frameworks and government concerns regarding
                the legality of digital assets and cross-border decentralized
                fundraising required strict compliance considerations.
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
              <SiEthereum className="w-8 h-8 text-[#FEFFD2] dark:text-[#212100]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212100] dark:text-[#FEFFD2]">
              The Lightbringer of Crowdfunding
            </h2>
            <p className="text-lg text-[#212100]/80 dark:text-[#c5c69b] leading-relaxed">
              CrowdEther proves that blockchain technology can effectively
              eliminate corruption and inefficiency in the fundraising niche.
            </p>
            <p className="text-md text-[#212100]/70 dark:text-[#c5c69b]/80">
              By shifting the power from centralized banks back to the global
              community, it fosters incredible possibilities for transparent,
              borderless contributions in the digital age.
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
