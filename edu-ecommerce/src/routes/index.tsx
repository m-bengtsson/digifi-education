import { createFileRoute } from "@tanstack/react-router";
import imageUrls from "../data/imageUrls";
export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen">
      <img
        src={imageUrls.banner}
        alt="Produktpaket från GörDetMedRW"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
