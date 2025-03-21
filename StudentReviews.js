import React, { useState } from "react";

const StudentReviews = () => {
  const [reviews] = useState([
    { id: 1, name: "Rahul Sharma", review: "Great facilities and well-maintained campus!", rating: 5 },
    { id: 2, name: "Priya Verma", review: "The library is amazing, but the mess food can be improved.", rating: 4 },
    { id: 3, name: "Amit Singh", review: "Hostel is well managed, but WiFi needs improvement.", rating: 3 }
  ]);
  

  return (
    <div className="student-reviews-container">
      <h1>Student Reviews</h1>

      <section className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>
            <p>⭐ {Array(review.rating).fill("⭐").join("")}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StudentReviews;
    