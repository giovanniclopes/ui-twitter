import React from "react";
import ReactDOM from "react-dom/client";

import { Sidebar } from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import "./global.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
