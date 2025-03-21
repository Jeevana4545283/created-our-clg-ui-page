import React from "react";

const Dispensary = () => {
  return (
    <div className="dispensary-container">
      <h1>Campus Dispensary</h1>
      
      <section className="dispensary-info">
        <h2>🩺 Medical Assistance</h2>
        <p>The campus dispensary provides medical assistance to students and staff.</p>
      </section>
      
      <section className="timings">
        <h2>⏰ Timings</h2>
        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
        <p>Saturday: 9:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
      </section>
      
      <section className="emergency-contacts">
        <h2>📞 Emergency Contacts</h2>
        <p>Doctor on Duty: +91 9876543210</p>
        <p>Ambulance Service: +91 1234567890</p>
      </section>
      
      <section className="feedback">
        <h2>📝 Feedback</h2>
        <p><a href="/feedback">Share your experience</a></p>
      </section>
    </div>
  );
};

export default Dispensary;