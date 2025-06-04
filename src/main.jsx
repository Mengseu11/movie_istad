import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import People from "./pages/People.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import ContactUs from "./pages/Contact_us.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import MovieDetail from "./pages/MovieDetail.jsx";
import Movie from "./pages/Movie.jsx";
import Nowplaying from "./pages/Nowplaying.jsx";
import Populars from "./pages/Populars.jsx";
import Toprateds from "./pages/Toprateds.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import PeopleDetail from "./pages/PeopleDetail.jsx";
// import Populars from "./pages/Populars.jsx";
// import Toprateds from "./pages/Toprateds.jsx";
// import Upcoming from "./pages/Upcoming.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/people/:id",
    element: <PeopleDetail/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/movie",
    element: <Movie />,
    children: [],
  },
  {
    path: "/populars",
    element: <Populars />,
  },
  {
    path: "/nowplaying",
    element: <Nowplaying />,
  },
  {
    path: "/toprateds",
    element: <Toprateds />,
  },
  {
    path: "/upcoming",
    element: <Upcoming />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
