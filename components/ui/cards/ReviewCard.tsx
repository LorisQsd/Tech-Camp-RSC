import cn from "@/utils/cn";
import React from "react";

const _ReviewCard: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => (
  <li
    {...props}
    className={cn(
      "border-2 flex justify-between border-gray-300 col-span-6 rounded-md px-4 py-2",
      className
    )}
  />
);

const UserName: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p {...props} className={cn("text-xl font-bold", className)} />;

const Content: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p {...props} className={cn("my-2", className)} />;

const Likes: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p {...props} className={cn("italic text-xs", className)}>
    <em>{children}</em>
  </p>
);

const ReviewCard = Object.assign(_ReviewCard, {
  UserName,
  Content,
  Likes,
});

export default ReviewCard;
