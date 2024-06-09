import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>
    <Home />
  </React.StrictMode>
);
