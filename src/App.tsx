import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Loader from "./pages/Loader";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PriceList = lazy(() => import("./pages/PriceList"));
const Gallery = lazy(() => import("./pages/Gallery"));

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
