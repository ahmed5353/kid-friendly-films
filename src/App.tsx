// import { lazy } from "react";
import AppLayout from "./components/ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";

// const Home = lazy(() => import("./pages/Home"));
// const MovieDetails = lazy(() => import("./pages/MovieDetails"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/moviedetail/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
