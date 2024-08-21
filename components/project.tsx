
import React from 'react'
import { Card, CardItemz} from './card'
import {
  Project1,
  Project2,
  Project3,
  Project4,

} from "@/app/projects/skeletons"
import { it } from 'node:test';

export default function CardItem() {
return (
  <main className=' flex items-center justify-center snap-start scroll-x-none snap-mandatory snap-y px-2 md:px-10 pb-[19vh]'> 
    
    <Card className ="gap-x-4 lg:max-w-[80vw] xl:gap-x-8 xl:gap-y-4 xl:max-w-[70vw] 2xl:max-w-[60vw]">
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
   
)
}




const items = [
  
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      pic:"/k.jpg",
      itemlink: <Project1/>
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      pic:"/k.jpg",
      itemlink: <Project2/>
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      pic:"/k.jpg",
      itemlink: <Project3/>
    },
    {
      title: "The Power of Communication",
      description:"Understand the impact of effective lives.",
    pic:"/k.jpg",
    itemlink: <Project4/>
    },
   
  ];
  