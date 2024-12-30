import React from "react";
import { Card, CardItemz } from "./card";

import { it } from "node:test";

export default function CardItem() {
  return (
    <main className=" flex items-center justify-center snap-start scroll-x-none snap-mandatory snap-y px-2 md:px-10 pb-[19vh]">
      <Card className="gap-x-4 lg:max-w-[80vw] xl:gap-x-8 xl:gap-y-4 xl:max-w-[70vw] 2xl:max-w-[60vw]">
        {items.map((item, i) => (
          <CardItemz
            key={i}
            title={item.title}
            description={item.description}
            pic={item.pic}
            itemlink={item.itemlink}
          />
        ))}
      </Card>
    </main>
  );
}

const items = [
  {
    title: "CrowdEther",
    description: "Decentralized crowdfunding platform.",
    pic: "/project/crowdether/main.png",
    itemlink: "/projects/1",
  },
  {
    title: "ChainProof",
    description: "Decentralized Identity Ledger",
    pic: "/project/chainproof/main.png",
    itemlink: "/projects/2",
  },
  {
    title: "Cryptix",
    description: "Decentralized E-tickeing platform.",
    pic: "/project/cryptix/main.png",
    itemlink: "/projects/3",
  },
  {
    title: "SendAi",
    description: "Decentralized crypto exchange platform.",
    pic: "/project/sendai/main.png",
    itemlink: "/projects/4",
  },
];
