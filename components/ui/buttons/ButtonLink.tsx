import cn from "@/utils/cn";
import Link, { LinkProps } from "next/link";

type TButtonLink = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

const ButtonLink: React.FC<TButtonLink> = ({ className, ...props }) => (
  <Link
    className={cn(
      "bg-white text-black rounded-lg w-fit h-fit p-2 block hover:scale-110 duration-150 text-center",
      className
    )}
    {...props}
  />
);

export default ButtonLink;
