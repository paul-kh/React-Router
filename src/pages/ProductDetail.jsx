import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>The Product Detail Page</h1>

      {/* Because we defined 'productId' as identifier in the route definition
        inside of createBrowserRouter() in <App>, so params will have productId
        as an attribute */}
      <p>{params.productId}</p>
      {/** The 'relative' prop of the below <Link> has 2 types of value:
       * 1. 'path'  : path is resolved based on the currently active route in the address bar
       * 2. 'route' : (default value) path is resolved based on route definition in
       *              createBrowserRouter() of <App>
       *
       * Note: The 'to' prop = ".." means going up 1 level
       */}
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
