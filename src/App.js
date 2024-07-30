import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/", //The parent path
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      /************************************************************************
       * Any child path starts with '/' is ABSOLUTE PATH.
       * By removing the '/', the path become relative to its parent path.
       ***********************************************************************/
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> }, // path = /root/products
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
