import ProductCard from "@/components/ui/cards/ProductCard";
import { getProducts } from "@/lib/getProducts";

const ProductWrapper = async () => {
  const { products } = await getProducts();

  return products.map(({ id, title, price, sku, tags }) => (
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
  ));
};

export default ProductWrapper;
