import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import GymMessLibrary from "./pages/facilities/GymMessLibrary";
import StudentReviews from "./pages/reviews/StudentReviews";
import ClubsSocieties from "./pages/clubs/ClubsSocieties";
import HostelRules from "./pages/hostel/HostelRules";
import Dispensary from "./pages/health/Dispensary";
import Navbar from "./components/Navbar_TEMP";
import Footer from "./components/Footer_TEMP";
import Events from "./pages/Events/Events";
import Gallery from "./pages/gallery/Gallery";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gym-mess-library" element={<GymMessLibrary />} />
        <Route path="/student-reviews" element={<StudentReviews />} />
        <Route path="/clubs-societies" element={<ClubsSocieties />} />
        <Route path="/hostel-rules" element={<HostelRules />} />
        <Route path="/dispensary" element={<Dispensary />} />
        <Route path="/events" element={<Events />} /> 
       <Route path="/gallery" element={<Gallery />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
