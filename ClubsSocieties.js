import React from "react";
import "./ClubsSocieties.css"; // Import CSS for styling

const ClubsSocieties = () => {
  return (
    <div className="clubs-container">
      <h1>Clubs & Societies at SPSU</h1>
      
      <section className="club">
        <h2>💻 Geeks for Geeks</h2>
        <p>A community for coding enthusiasts to enhance their programming skills.</p>
      </section>
      
      <section className="club">
        <h2>🚀 LT3Ninjas</h2>
        <p>A tech-focused club that conducts hackathons, coding challenges, and workshops.</p>
      </section>
      
      <section className="club">
        <h2>⚽ Sports Club</h2>
        <p>Join the sports club to participate in football, basketball, cricket, and more.</p>
      </section>
      
      <section className="club">
        <h2>🎭 Cultural Club - Panache</h2>
        <p>Panache is the official cultural club of SPSU, organizing dance, drama, and music events.</p>
        <button className="register-btn">Register for Panache</button>
      </section>
    </div>
  );
};

export default ClubsSocieties;
