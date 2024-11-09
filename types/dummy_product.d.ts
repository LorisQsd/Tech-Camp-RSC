export type Products = {
  products: {
    id: number;
    title: string;
    price: number;
    sku: string;
    shippingInformation: string;
    tags: string[];
  }[];
};
