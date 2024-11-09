const ProductCard = () => (
  <div className="rounded-md border-2 border-gray-300 p-4 col-span-6 xl:col-span-3 flex flex-col gap-2">
    {/* Badge */}
    <div className="rounded-full text-sm px-2 py-1 w-[65px] bg-gray-500 animate-pulse border-2 border-transparent">
      &nbsp;
    </div>

    {/* Title */}
    <div className="rounded-full w-3/4 bg-gray-500 animate-pulse mt-3 h-5" />
    <div className="rounded-full w-1/2 bg-gray-500 animate-pulse h-5" />

    {/* Ref */}
    <div className="rounded-full w-[100px] bg-gray-500 animate-pulse h-3" />

    <div className="flex justify-between items-center">
      {/* Price */}
      <div className="rounded-full w-[50px] bg-gray-500 animate-pulse h-5" />
      {/* Buy CTA */}
      <div className="rounded-md bg-gray-500 animate-pulse h-[37px] w-[106px]" />
    </div>
  </div>
);

const ProductCardSkeleton = () => (
  <>
    {Array.from({ length: 8 }).map(() => (
      <ProductCard key={crypto.randomUUID()} />
    ))}
  </>
);

export default ProductCardSkeleton;
