"use client";

import { Colors } from "@/types/colors";
import cn from "@/utils/cn";
import { useState } from "react";

const InteractivityClientComponent = ({
  children,
  slot,
}: {
  children?: React.ReactNode;
  slot: React.ReactNode;
}) => {
  const [color, setColor] = useState<Colors>("red");

  const handleButtonClick = (color: Colors) => () => setColor(color);

  return (
    <>
      <article className="border-2 border-gray-300 rounded-md space-y-5 px-6 py-4">
        {/* 
            TIPS - Their is also another way to render a server component within a client boundary.
            We could use the following slot pattern and render a ReactNode.
            
            So finally, as long as we are rendering a ReactNode into our client boundary, we'll be able to render a server component again.
        */}
        {slot}
        <div className="flex justify-between">
          <button
            onClick={handleButtonClick("red")}
            className="duration-150 hover:scale-110 rounded-full size-8 bg-red-500"
          />
          <button
            onClick={handleButtonClick("blue")}
            className="duration-150 hover:scale-110 rounded-full size-8 bg-blue-500"
          />
          <button
            onClick={handleButtonClick("violet")}
            className="duration-150 hover:scale-110 rounded-full size-8 bg-violet-500"
          />
        </div>
      </article>
      <div
        className={cn(
          "w-36 h-28 flex items-center justify-center rounded-md flex-col",
          {
            "bg-red-500": color === "red",
            "bg-blue-500": color === "blue",
            "bg-violet-500": color === "violet",
          }
        )}
      >
        <p className="text-xl">Card</p>
        {/* To be able to render a server component inside a client boundary, we'll need to use the composition pattern and pass our server component using the children prop */}
        {/* Composition Pattern source with a great example using a context provider : https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers */}
        {children}
      </div>
    </>
  );
};

export default InteractivityClientComponent;
