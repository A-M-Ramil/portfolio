import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1  rounded-xl  hover:shadow-xl transition duration-200 shadow-none  p-4 bg-[#000000] border border-[#1f1f1f]  justify-between flex flex-col space-y-2",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 text-white transition duration-200">
        {icon}
        <div className="font-bold text-white  mb-2 mt-2">{title}</div>
        <div className="grid grid-cols-2   font-normal text-white text-xs ">
          <div className="justify-self-start">{description}</div>
          <div className="justify-self-end ">{link}</div>
        </div>
      </div>
    </div>
  );
};
