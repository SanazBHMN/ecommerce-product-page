import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Root from "./pages/Root.tsx";
import HomePage from "./pages/HomePage.tsx";
import CollectionsPage from "./pages/CollectionsPage.tsx";
import WomenPage from "./pages/WomenPage.tsx";
import MenPage from "./pages/MenPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
      {
        path: "/women",
        element: <WomenPage />,
      },
      {
        path: "/men",
        element: <MenPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
