import React from "react";
import "./App.scss";
import routes, { RenderRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/JWTAuthContext";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <>{RenderRoutes(routes)}</>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
