import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/vertical_comment";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-70 lg:h-[150px]   w-50 cursor-pointer overflow-hidden mb-2  rounded-lg  p-4",
        // light styles
        " bg-gray-950/[.08] hover:bg-gray-950/[.05]",
        // dark styles
        " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row  items-center gap-2 lg:gap-3">
        <img
          className="rounded-full "
          width="32"
          height="32"
          alt=""
          src={img}
        />

        <div className="flex flex-col">
          <figcaption className="text-sm  font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs  font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 2xl:mt-4  text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg   ">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className=" [--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="hidden sm:block [--duration:20s]"
      >
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="hidden sm:block [--duration:20s]"
      >
        {fourthRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="hidden lg:block [--duration:20s]"
      >
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-60 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-60 dark:from-background"></div>
    </div>
  );
}
