import AddForm from "./components/AddForm";
import ProductTab from "./components/ProductTab";

export default function Home() {
  return (
    <div className="mt-6 w-full flex items-center justify-center flex-col">
      <AddForm />
      <ProductTab />
    </div>
  );
}
