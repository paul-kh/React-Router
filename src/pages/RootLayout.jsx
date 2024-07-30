import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <h1>
        <MainNavigation />
      </h1>
      {/* The <Outlet> component marks the location where
          the children of the RootLayout will reside */}
      <Outlet />
    </>
  );
}
