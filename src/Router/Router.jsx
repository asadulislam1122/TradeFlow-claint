import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import MyExports from "../Components/MyExport/MyExports";
import MyImports from "../Components/MyImport/MyImports";
import AddExport from "../Components/AddExport/AddExport";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/all-Products", Component: AllProducts },
      { path: "/my-exports", Component: MyExports },
      { path: "/my-imports", Component: MyImports },
      { path: "/add-export", Component: AddExport },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);
