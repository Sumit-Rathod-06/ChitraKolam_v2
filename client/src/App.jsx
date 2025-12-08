import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CanvasPage from "./pages/CanvasPage";
import PrivateRoute from "./components/PrivateRoute";
import AnalysePage from "./pages/AnalysePage" 

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />} />      

        {/* Auth Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="canvas" element={<PrivateRoute><CanvasPage /></PrivateRoute>} />
        <Route path="analyse" element={<PrivateRoute><AnalysePage /></PrivateRoute>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
