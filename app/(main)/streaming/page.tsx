import LoadTimeTracker from "@/components/ui/LoadtimeTracker";
import { Suspense } from "react";
import ProductWrapper from "./_components/wrapper/ProductWrapper";
import ReviewWrapper from "./_components/wrapper/ReviewWrapper";

// By handling the loading state and making a UI feedback to the user, we strongly reduce the FCP / LCP
const Page = () => (
  <main className="container grow px-4 mx-auto my-8">
    <section>
      <h2 className="text-2xl mb-4 font-bold">ProductList</h2>
      <div className="grid grid-cols-12 gap-10">
        {/* We are simply using the Suspense component from React to handle the loading state */}
        {/* The fallback is the content that'll render during the loading state */}
        <Suspense fallback={<>Loading Products...</>}>
          <ProductWrapper />
        </Suspense>
      </div>
    </section>

    <section>
      <h2 className="text-2xl my-4 font-bold">Reviews ⭐</h2>
      <ul className="grid grid-cols-12 gap-4">
        {/* !! But, as you can see, there's a lot of CLS (Cumulative Layout Shift) !! */}
        {/* Reviews are pushed down when the Product promise is resolved. As you may guess, it is really bad for the UX (User Experience) */}
        <Suspense fallback={<>Loading Reviews...</>}>
          <ReviewWrapper />
        </Suspense>
      </ul>
    </section>
    <LoadTimeTracker />
  </main>
);

export default Page;
