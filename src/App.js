import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  // path is the part after the domain.
  // In https://example.com/products, path could be "/product" or "/"
  { path: "/", element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
