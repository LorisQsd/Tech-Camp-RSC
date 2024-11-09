import LoadTimeTracker from "@/components/ui/LoadtimeTracker";
import ProductWrapper from "./_components/wrapper/ProductWrapper";
import ReviewWrapper from "./_components/wrapper/ReviewWrapper";

// The first issue was that multiple await that doesn't depend on each other are creating a waterfall issue
// The page made 5s to render
// Since we aren't fetching any data into our page, we could remove the async key word and make its content static at build time
const Page = () => (
  <main className="container grow px-4 mx-auto my-8">
    <section>
      <h2 className="text-2xl mb-4 font-bold">ProductList</h2>
      <div className="grid grid-cols-12 gap-10">
        {/* By creating wrappers and isolate our request, we can parallelize our api calls */}
        <ProductWrapper />
      </div>
    </section>

    <section>
      <h2 className="text-2xl my-4 font-bold">Reviews ⭐</h2>
      <ul className="grid grid-cols-12 gap-4">
        {/* So this request doesn't need to wait after ProductWrapper to finish rendering to start */}
        <ReviewWrapper />
      </ul>
    </section>
    <LoadTimeTracker />
  </main>
);

export default Page;
