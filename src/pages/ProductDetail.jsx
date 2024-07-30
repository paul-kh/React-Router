import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>The Product Detail Page</h1>

      {/* Because we defined 'productId' as identifier in the route definition
        inside of createBrowserRouter() in <App>, so params will have productId
        as an attribute */}
      <p>{params.productId}</p>
    </>
  );
}
