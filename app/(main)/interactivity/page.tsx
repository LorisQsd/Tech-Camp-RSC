import InteractivityClientComponent from "./_components/InteractivityClientComponent";
import StandaloneChild from "./_components/StandaloneChild";

// We can isolate our client boundary
// Therefore, we'll be able to exclude our main and h1 tags of the hydration process and gain a little bit of js final bundle size
const Page = () => (
  <main className="flex flex-col gap-6 items-center min-h-full w-full grow px-4">
    <h1 className="text-5xl font-bold py-12 text-center">
      Welcome to the Interactivity Practical Case
    </h1>
    {/* As a proof, the standalone child stays server */}
    <StandaloneChild />

    <InteractivityClientComponent />
  </main>
);

export default Page;
