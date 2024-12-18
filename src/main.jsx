import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes.jsx";
import ProductContext from "./Provider/ProductContext.jsx";

import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ProductContext>
        <RouterProvider router={router} />
      </ProductContext>
    </HelmetProvider>
    <ToastContainer />
  </StrictMode>
);
