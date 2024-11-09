import InteractivityClientComponent from "./_components/InteractivityClientComponent";
import StandaloneChild from "./_components/StandaloneChild";

const Page = () => (
  <main className="flex flex-col gap-6 items-center min-h-full w-full grow px-4">
    <h1 className="text-5xl font-bold py-12 text-center">
      Welcome to the Interactivity Practical Case
    </h1>
    {/* As a proof, the standalone child stays server */}
    <StandaloneChild />

    <InteractivityClientComponent
      slot={
        <>
          <h2 className="text-3xl font-bold">Change the card color</h2>
          {/* By using the slot pattern, the standalone child will be evaluated as a server component */}
          <StandaloneChild />
        </>
      }
    >
      {/* By using the composition pattern, we are now able to render the standalone child as a server component */}
      <StandaloneChild />
    </InteractivityClientComponent>
  </main>
);

export default Page;
