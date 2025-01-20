import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import People from "./pages/People.jsx";
import Home from "./pages/Home.jsx";
import Error from './pages/Error.jsx'
import Login from "./pages/Login.jsx";
import About_Us from "./pages/About_us.jsx";
import ContactUs from "./pages/Contact_us.jsx";
import { Provider } from "react-redux";
import { store } from "./Store.js";



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
      ],
      errorElement: <Error/>
    },
    {
      path: "/people",
      element: <People/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/about-us',
      element:<About_Us/>
    },
    {
      path:'/contact-us',
      element:<ContactUs/>
    }
  ]
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
