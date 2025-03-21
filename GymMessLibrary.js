import React from "react";
import "./GymMessLibrary.css"; // Import CSS for styling

const GymMessLibrary = () => {
  return (
    <div className="facilities-container">
      <h1>Campus Facilities</h1>
      
      <section className="facility">
        <h2>🏋️ Gym</h2>
        <p>Our gym is equipped with modern machines and is open to students and staff.</p>
        <p><strong>Timings:</strong> 6:00 AM - 10:00 PM</p>
      </section>
      
      <section className="facility">
        <h2>🍽️ Mess</h2>
        <p>The mess provides healthy meals to students with a rotating menu.</p>
        <p><strong>Timings:</strong> Breakfast: 7:00 AM - 9:00 AM, Lunch: 12:00 PM - 2:00 PM, Dinner: 7:00 PM - 9:30 PM</p>
      </section>
      
      <section className="facility">
        <h2>📚 Library</h2>
        <p>The library has a vast collection of books, journals, and digital resources.</p>
        <p><strong>Timings:</strong> 8:00 AM - 8:00 PM</p>
      </section>
    </div>
  );
};

export default GymMessLibrary;