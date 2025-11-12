import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import MyExports from "../Components/MyExport/MyExports";
import MyImports from "../Components/MyImport/MyImports";
import AddExport from "../Components/AddExport/AddExport";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../Pages/Details/CardDetails";
import PrivetRoute from "../Components/PrivetRoute";
import Loading from "../Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loading></Loading>,

    children: [
      {
        index: true,
        loader: () => fetch("https://tradeflow-sarver.vercel.app/latest-cards"),

        Component: Home,
      },
      {
        path: "/all-Products",
        loader: () => fetch("https://tradeflow-sarver.vercel.app/cards"),
        Component: AllProducts,
      },
      {
        path: "/my-exports",
        element: (
          <PrivetRoute>
            <MyExports></MyExports>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-imports",
        loader: () => fetch("https://tradeflow-sarver.vercel.app/import-card"),
        element: (
          <PrivetRoute>
            <MyImports></MyImports>
          </PrivetRoute>
        ),
      },
      {
        path: "/add-export",
        element: (
          <PrivetRoute>
            <AddExport></AddExport>
          </PrivetRoute>
        ),
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://tradeflow-sarver.vercel.app/cards/${params.id}`),
        element: (
          <PrivetRoute>
            <CardDetails></CardDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
