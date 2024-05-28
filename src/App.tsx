import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Loader from "./pages/Loader";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PriceList = lazy(() => import("./pages/PriceList"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Mansion = lazy(() => import("./pages/Gallery/Mansion"));
const Interior = lazy(() => import("./pages/Gallery/Interior"));
const Summer = lazy(() => import("./pages/Gallery/Summer"));
const Winter = lazy(() => import("./pages/Gallery/Winter"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/loader",
        element: <Loader />,
      },
      {
        path: "/cennik",
        element: (
          <Suspense fallback={<Loader />}>
            <PriceList />
          </Suspense>
        ),
      },
      {
        path: "/galeria",

        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "/galeria/posiadlosc",
        element: (
          <Suspense fallback={<Loader />}>
            <Mansion />
          </Suspense>
        ),
      },
      {
        path: "/galeria/wnetrze",
        element: (
          <Suspense fallback={<Loader />}>
            <Interior />
          </Suspense>
        ),
      },
      {
        path: "/galeria/zima",
        element: (
          <Suspense fallback={<Loader />}>
            <Winter />
          </Suspense>
        ),
      },
      {
        path: "/galeria/lato",
        element: (
          <Suspense fallback={<Loader />}>
            <Summer />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
