import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import appCss from "../styles.css?url";
import Footer from "../components/Footer";

type Category = {
  id: number;
  name: string;
  slug: string;
  parentId: number | null;
  description: string;
  descriptionBel: string;
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  loader: async (): Promise<Category[]> => {
    const res = await fetch("http://localhost:3050/categories");

    if (!res.ok) {
      throw new Error(`Failed to fetch categories (${res.status})`);
    }

    return res.json();
  },

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const categories = Route.useLoaderData();

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header categories={categories} />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
