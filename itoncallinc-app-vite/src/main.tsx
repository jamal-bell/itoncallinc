import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// @ts-ignore
import Root from "./routes/Root";
// @ts-ignore
import ErrorPage from "./error-page";
// @ts-ignore
import Contact from "./routes/Contact";
// @ts-ignore
import Home from "./routes/Home";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
