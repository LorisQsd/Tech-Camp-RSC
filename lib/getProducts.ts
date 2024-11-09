import { mockProducts } from "@/data/products.mock";
import sleep from "@/utils/sleep";

export async function getProducts() {
  try {
    //! Simulate response delay !//
    await sleep(1500);

    // *You could fetch real data by uncommenting those lines : *//
    // const productsRes = await fetch(
    //   "https://dummyjson.com/products?limit=8&select=title,price,sku,shippingInformation,tags"
    // );
    // const data: Products = await productsRes.json();

    return mockProducts;
  } catch (e) {
    console.error(e);

    throw new Error("An error has occured while trying to fetch products");
  }
}
