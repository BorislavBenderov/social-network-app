import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { PostContextProvider } from "./contexts/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
