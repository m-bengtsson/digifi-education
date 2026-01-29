import { createFileRoute } from "@tanstack/react-router";

// type Product = {
//   id: number;
//   sku: string;
//   name: string;
//   price: number;
//   images: string[];
// };

// type Category = {
//   id: number;
//   name: string;
//   slug: string;
// };

export const Route = createFileRoute("/products/$categorySlug")({
  component: ProductsByCategoryPage,
});

function ProductsByCategoryPage() {
  // const { categorySlug } = Route.useParams();
  // const [products, setProducts] = useState<Product[]>([]);

  return (
    <div>
      <h1>Category</h1>
    </div>
  );
}
