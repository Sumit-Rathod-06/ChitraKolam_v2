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
import AnalysePage from "./pages/AnalysePage";
import {GenerateKolamPage} from "./pages/GenerateKolamPage";
import ExplorePage from "./pages/ExplorePage";
import TutuorialPage from "./pages/TutuorialPage";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
function App() {
    const profileImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />} />      

        {/* Auth Routes */}
<Route path="profile" element={<ProfilePage />} />        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="canvas" element={<PrivateRoute><CanvasPage /></PrivateRoute>} />
        <Route path="tutorial" element={<PrivateRoute><TutuorialPage /></PrivateRoute>} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="analyze" element={<PrivateRoute><AnalysePage /></PrivateRoute>} />
        <Route path="generate-kolam" element={<PrivateRoute><GenerateKolamPage /></PrivateRoute>} />
        <Route path="community" element={<PrivateRoute><CommunityPage /></PrivateRoute>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
