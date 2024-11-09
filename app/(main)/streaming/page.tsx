import LoadTimeTracker from "@/components/ui/LoadtimeTracker";
import ProductCardSkeleton from "@/components/ui/skeletons/ProductCardSkeleton";
import ReviewCardSkeleton from "@/components/ui/skeletons/ReviewCardSkeleton";
import { Suspense } from "react";
import ProductWrapper from "./_components/wrapper/ProductWrapper";
import ReviewWrapper from "./_components/wrapper/ReviewWrapper";

// By handling the loading state and making a UI feedback to the user, we strongly reduce the FCP / LCP
const Page = () => (
  <main className="container grow px-4 mx-auto my-8">
    <section>
      <h2 className="text-2xl mb-4 font-bold">ProductList</h2>
      <div className="grid grid-cols-12 gap-10">
        {/* The perfect solution is to make a UI feedback using skeletons */}
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductWrapper />
        </Suspense>
      </div>
    </section>

    <section>
      <h2 className="text-2xl my-4 font-bold">Reviews ⭐</h2>
      <ul className="grid grid-cols-12 gap-4">
        {/* Skeleton doesn't affect the SEO and greatly improve the CLS */}
        {/* Those skeletons needs to be developped within a UI/UX designer to anticipate as much as possible the final result and make a pretty close pixel perfect UI feedback */}
        <Suspense fallback={<ReviewCardSkeleton />}>
          <ReviewWrapper />
        </Suspense>
      </ul>
    </section>
    <LoadTimeTracker />
  </main>
);

export default Page;
