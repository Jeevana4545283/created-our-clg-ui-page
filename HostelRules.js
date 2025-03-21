import React from "react";

const HostelRules = () => {
  return (
    <div className="hostel-rules-container">
      <h1>Hostel Rules & Guidelines</h1>
      
      <section className="timings">
        <h2>⏰ Hostel Timings</h2>
        <p>Entry Time: 6:00 AM</p>
        <p>Exit Time: 9:00 PM (for students)</p>
        <p>Visitors Allowed: 10:00 AM - 6:00 PM</p>
      </section>
      
      <section className="rules">
        <h2>📜 General Rules</h2>
        <ul>
          <li>Maintain cleanliness in rooms and common areas.</li>
          <li>Strictly follow quiet hours from 10:00 PM - 6:00 AM.</li>
          <li>Any damage to hostel property will be charged.</li>
          <li>Alcohol, smoking, and drugs are strictly prohibited.</li>
          <li>Visitors must register at the security desk.</li>
        </ul>
      </section>
      
      <section className="penalties">
        <h2>⚠️ Violations & Penalties</h2>
        <p>Violating hostel rules may result in warnings, fines, or expulsion.</p>
      </section>
      
      <section className="contact">
        <h2>📞 Contact Warden</h2>
        <p>Hostel Warden: +91 9876543210</p>
        <p>Emergency Contact: +91 1234567890</p>
      </section>
    </div>
  );
};

export default HostelRules;
