import cn from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import React from "react";

const _ProductCard: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <article
    {...props}
    className={cn(
      "shadow-[0_5px_30px_0px_rgba(255,255,255,0.3)] p-4 rounded-md border-2 border-gray-300",
      className
    )}
  />
);

const TagLink: React.FC<
  LinkProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ className, children, ...props }) => (
  <Link
    {...props}
    className={cn(
      "border-2 border-gray-300 text-sm duration-150 hover:bg-gray-300 hover:text-black rounded-full px-2 py-1 block w-fit mb-2",
      className
    )}
  >
    {children}
  </Link>
);

const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => <h2 {...props} className={cn("text-xl font-bold w-3/4", className)} />;

const Ref: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p {...props} className={cn("text-xs italic")} />;

const Price: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p {...props} className={cn("text-lg font-bold", className)} />;

const BuyButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => (
  <button
    {...props}
    className={cn(
      "bg-gray-200 duration-150 hover:scale-110 text-black px-4 py-1 rounded-md text-lg font-bold",
      className
    )}
  />
);

// COMPOUND //
const ProductCard = Object.assign(_ProductCard, {
  TagLink,
  Title,
  Ref,
  Price,
  BuyButton,
});

export default ProductCard;
