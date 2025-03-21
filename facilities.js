import React from "react";

const GymMessLibrary = () => {
  return (
    <div className="facilities-container">
      <h1>Facilities at SPSU Udaipur</h1>
      
      <section className="facility-section">
        <h2>🏋️ Gym</h2>
        <p>Our fully equipped gym is open for students from 6 AM to 10 PM.</p>
        <p>Timings: Morning - 6:00 AM to 10:00 AM | Evening - 5:00 PM to 10:00 PM</p>
        <p>Feedback: <a href="/feedback">Give your feedback</a></p>
      </section>
      
      <section className="facility-section">
        <h2>🍽️ Mess</h2>
        <p>The mess offers a variety of meals with a weekly changing menu.</p>
        <p>Breakfast: 7:00 AM - 9:00 AM | Lunch: 12:30 PM - 2:30 PM | Dinner: 7:00 PM - 9:30 PM</p>
        <p><a href="/canteen-menu">Check Daily Menu</a></p>
      </section>
      
      <section className="facility-section">
        <h2>📚 Library</h2>
        <p>The library houses a vast collection of books, journals, and digital resources.</p>
        <p>Timings: 8:00 AM - 8:00 PM</p>
        <p>Feedback: <a href="/feedback">Share your experience</a></p>
      </section>
    </div>
  );
};

export default GymMessLibrary;
