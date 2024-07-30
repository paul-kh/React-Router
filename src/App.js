import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  /*********************************************************************
   * The below object in the 1st array element is the RootLayout Wrapper
   * mainly for placing Nav bar that will appear on every page
   * (Home Page, and Product Page)
   *********************************************************************/

  {
    path: "/",
    element: <RootLayout />,

    // We place all pages that will be wrapped by the <RootLayout>
    // in the children prop
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
