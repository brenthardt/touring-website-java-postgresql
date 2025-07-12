import { Routes, Route } from "react-router-dom";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";
import Sixth from "./Components/Sixth";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage";
import Navbar2 from "./Components/Navbar2";
import HomePage2 from "./Components/HomePage2";
import Menu from "./Components/Menu";
import User from "./AdminTools/User";
import Login from "./AdminTools/Login";
import ProtectedRoute from "./Protected/ProtectedRoute";
import Tour from "./AdminTools/Tour";
import WannaBuyers from "./AdminTools/WannaBuyers";

export default function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour/:id" element={<HomePage2 />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tour"
          element={
            <ProtectedRoute>
              <Tour />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wannabuyers"
          element={
            <ProtectedRoute>
              <WannaBuyers />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
