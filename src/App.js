import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

// const router = createBrowserRouter([
//   // path is the part after the domain.
//   // In https://example.com/products, path could be "/product" or "/"
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: <ProductsPage /> },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
