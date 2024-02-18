import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("../pages/CatalogPage/FavoritePage/FavoritesPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
