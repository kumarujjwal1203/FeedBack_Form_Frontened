import axios from "axios";
import { useState, useEffect } from "react";
import "./Admin.css"; // Make sure this file exists

export default function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function getFeedback() {
      try {
        const response = await axios.get(
          "https://feedback-form-backend-g334.onrender.com/feedbacks"
        );
        console.log("Feedbacks received:", response.data); // Debug log
        setFeedbacks(response.data);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    }
    getFeedback();
  }, []);

  return (
    <div className="admin-container">
      <h1>User Feedback</h1>
      <ul className="feedback-list">
        {feedbacks.map((feedback, index) => (
          <li className="feedback-card" key={index}>
            <p>
              <strong>👤 Name:</strong> {feedback.name || "Anonymous"}
            </p>
            <p>
              <strong>📌 Type:</strong>{" "}
              {feedback.feedbackType || "Not provided"}
            </p>
            <p>
              <strong>⭐ Rating:</strong>{" "}
              <span className="stars">
                {feedback.rating
                  ? "⭐".repeat(Number(feedback.rating))
                  : "Not rated"}
              </span>
            </p>
            <p>
              <strong>💬 Message:</strong> {feedback.message || "No message"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
