import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@assets/styles/nullable.css";
import "@assets/styles/fonts/fonts.css";
import "@assets/styles/colors/colors.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
