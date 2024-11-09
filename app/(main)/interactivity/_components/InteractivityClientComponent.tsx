"use client";

import { Colors } from "@/types/colors";
import cn from "@/utils/cn";
import { useState } from "react";
import StandaloneChild from "./StandaloneChild";

const InteractivityClientComponent = () => {
  const [color, setColor] = useState<Colors>("red");

  const handleButtonClick = (color: Colors) => () => setColor(color);

  return (
    <>
      <article className="border-2 border-gray-300 rounded-md space-y-5 px-6 py-4">
        <h2 className="text-3xl font-bold">Change the card color</h2>

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
        {/* Even if the StandaloneChild is server by default, it is evaluated as a client component because its parent (this component) uses the 'use client' directive. */}
        <StandaloneChild />
      </div>
    </>
  );
};

export default InteractivityClientComponent;
