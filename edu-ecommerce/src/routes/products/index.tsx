import { createFileRoute } from "@tanstack/react-router";

type Product = {
  id: number;
  sku: string;
  name: string;
  price: number;
  images: string[];
};

const API_BASE_URL = "http://localhost:3050";

export const Route = createFileRoute("/products/")({
  loader: async () => {
    const res = await fetch(`${API_BASE_URL}/products`);
    const products = await res.json();
    return products;
  },
  component: ProductsPage,
});
function ProductsPage() {
  const products = Route.useLoaderData();
  console.log("products", products);
  return (
    <div className=" container max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center uppercase py-10">
        Alla produkter
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center bg-white  p-4 rounded-md h-full"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="flex flex-col text-sm items-center justify-center uppercase">
              <p className=" font-extrabold text-neutral-500">{product.name}</p>
              <p className="font-extrabold">
                {product.price}
                <span className="text-gray-500">kr</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
