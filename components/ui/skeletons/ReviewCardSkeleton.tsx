const ReviewCard = () => (
  <div className="border-2 flex justify-between border-gray-500 animate-pulse col-span-6 rounded-md px-4 py-3.5">
    <div>
      {/* Author */}
      <div className="rounded-full bg-gray-500 w-28 h-6" />
      {/* Comment */}
      <div className="rounded-full bg-gray-500 w-48 h-4 mt-4" />
    </div>
    {/* Likes */}
    <div className="rounded-full bg-gray-500 h-3 w-10" />
  </div>
);

const ReviewCardSkeleton = () => (
  <>
    {Array.from({ length: 4 }).map(() => (
      <ReviewCard key={crypto.randomUUID()} />
    ))}
  </>
);

export default ReviewCardSkeleton;
