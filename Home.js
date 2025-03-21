import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to SPSU Udaipur</h1>
        <p>Your gateway to campus information and updates.</p>
      </header>
      
      <section className="announcements">
        <h2>Latest Announcements</h2>
        <ul>
          <li>📢 Admissions for 2025 are now open!</li>
          <li>📅 Upcoming Tech Fest on April 15th.</li>
          <li>🎓 Convocation Ceremony on May 10th.</li>
        </ul>
      </section>
      
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-container">
          <a href="/gym-mess-library">🏋️ Gym & Mess Timings</a>
          <a href="/student-reviews">📝 Student Reviews</a>
          <a href="/events">📅 College Events</a>
          <a href="/gallery">📸 Photo Gallery</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
