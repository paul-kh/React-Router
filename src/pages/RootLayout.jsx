import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      {/* The <Outlet> component marks the location where
          the children of the RootLayout will reside */}
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
