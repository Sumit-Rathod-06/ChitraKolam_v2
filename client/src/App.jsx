import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CanvasPage from "./pages/CanvasPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />} />      

        {/* Auth Routes */}
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
        <Route path="canvas" element={<CanvasPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
