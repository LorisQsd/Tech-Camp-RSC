import ProductCard from "@/components/ui/cards/ProductCard";
import ReviewCard from "@/components/ui/cards/ReviewCard";
import LoadTimeTracker from "@/components/ui/LoadtimeTracker";
import { getComments } from "@/lib/getComments";
import { getProducts } from "@/lib/getProducts";

const Page = async () => {
  const { products } = await getProducts();
  const { comments } = await getComments();

  return (
    <main className="container grow px-4 mx-auto my-8">
      <section>
        <h2 className="text-2xl mb-4 font-bold">ProductList</h2>
        <div className="grid grid-cols-12 gap-10">
          {products.map(({ id, title, price, sku, tags }) => (
            <ProductCard
              className="col-span-6 xl:col-span-3 flex flex-col gap-2"
              key={id}
            >
              <ProductCard.TagLink href="#">{tags[0]}</ProductCard.TagLink>
              <div>
                <ProductCard.Title>{title}</ProductCard.Title>
                <ProductCard.Ref>Ref: {sku}</ProductCard.Ref>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <ProductCard.Price>{price}</ProductCard.Price>
                <ProductCard.BuyButton>Acheter</ProductCard.BuyButton>
              </div>
            </ProductCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl my-4 font-bold">Reviews ⭐</h2>
        <ul className="grid grid-cols-12 gap-4">
          {comments.map(({ id, likes, user: { fullName }, body }) => (
            <ReviewCard key={id}>
              <div>
                <ReviewCard.UserName>{fullName}</ReviewCard.UserName>
                <ReviewCard.Content>{body}</ReviewCard.Content>
              </div>

              <ReviewCard.Likes>
                {likes} like{likes > 1 ? "s" : ""}
              </ReviewCard.Likes>
            </ReviewCard>
          ))}
        </ul>
      </section>
      <LoadTimeTracker />
    </main>
  );
};

export default Page;
