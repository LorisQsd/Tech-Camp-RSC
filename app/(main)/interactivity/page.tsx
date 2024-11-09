import cn from "@/utils/cn";

const Page = () => (
  <main className="flex flex-col gap-6 items-center min-h-full w-full grow px-4">
    <h1 className="text-5xl font-bold py-12 text-center">
      Welcome to the Interactivity Practical Case
    </h1>

    <article className="border-2 border-gray-300 rounded-md space-y-5 px-6 py-4">
      <h2 className="text-3xl font-bold">Change the card color</h2>

      <div className="flex justify-between">
        <button className="duration-150 hover:scale-110 rounded-full size-8 bg-red-500" />
        <button className="duration-150 hover:scale-110 rounded-full size-8 bg-blue-500" />
        <button className="duration-150 hover:scale-110 rounded-full size-8 bg-violet-500" />
      </div>
    </article>

    <div
      className={cn(
        "w-36 h-28 flex items-center justify-center rounded-md flex-col bg-zinc-800/80"
      )}
    >
      <p className="text-xl">Card</p>
    </div>
  </main>
);

export default Page;
