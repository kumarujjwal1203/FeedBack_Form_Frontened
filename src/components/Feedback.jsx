// import React, { useState } from "react";
// import axios from "axios";
// import "./Feedback.css"; // make sure to import CSS

// export default function Feedback() {
//   const [name, setName] = useState("");
//   const [feedbackType, setFeedbackType] = useState("Suggestion");
//   const [rating, setRating] = useState("5");
//   const [message, setMessage] = useState("");

//   async function onFormSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://feedback-form-backend-g334.onrender.com/feedback",
//         {
//           name,
//           feedbackType,
//           rating,
//           message,
//         }
//       );
//       console.log(response.data);
//       alert("✅ Feedback submitted successfully!");

//       // Reset form
//       setName("");
//       setFeedbackType("Suggestion");
//       setRating("5");
//       setMessage("");
//     } catch (error) {
//       console.error("❌ Error submitting feedback:", error);
//       alert("Something went wrong. Please try again!");
//     }
//   }

//   return (
//     <div className="feedback-container">
//       <form onSubmit={onFormSubmit} className="feedback-form">
//         <h2>📢 Feedback Form</h2>

//         <input
//           type="text"
//           placeholder="👤 Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <select
//           value={feedbackType}
//           onChange={(e) => setFeedbackType(e.target.value)}
//           required
//         >
//           <option value="Suggestion">💡 Suggestion</option>
//           <option value="Complaint">⚠️ Complaint</option>
//           <option value="Praise">🎉 Praise</option>
//           <option value="Bug Report">🐞 Bug Report</option>
//         </select>

//         <select
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           required
//         >
//           <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
//           <option value="4">⭐️⭐️⭐️⭐️ Good</option>
//           <option value="3">⭐️⭐️⭐️ Average</option>
//           <option value="2">⭐️⭐️ Poor</option>
//           <option value="1">⭐️ Very Poor</option>
//         </select>

//         <textarea
//           placeholder="📝 Your feedback message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />

//         <button type="submit">🚀 Submit</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Feedback.css"; // make sure to import CSS

export default function Feedback() {
  const [name, setName] = useState("");
  const [feedbackType, setFeedbackType] = useState("Suggestion");
  const [rating, setRating] = useState("5");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://feedback-form-backend-g334.onrender.com/feedback",
        {
          name,
          feedbackType,
          rating,
          message,
        }
      );
      console.log(response.data);
      alert("✅ Feedback submitted successfully!");

      // Reset form
      setName("");
      setFeedbackType("Suggestion");
      setRating("5");
      setMessage("");
    } catch (error) {
      console.error("❌ Error submitting feedback:", error);
      alert("Something went wrong. Please try again!");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token"); // 🔐 Remove token
    alert("You have been logged out.");
    navigate("login"); // ⬅️ Redirect to login or home
  }

  return (
    <div className="feedback-container">
      <form onSubmit={onFormSubmit} className="feedback-form">
        <h2>📢 Feedback Form</h2>

        <input
          type="text"
          placeholder="👤 Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          value={feedbackType}
          onChange={(e) => setFeedbackType(e.target.value)}
          required
        >
          <option value="Suggestion">💡 Suggestion</option>
          <option value="Complaint">⚠️ Complaint</option>
          <option value="Praise">🎉 Praise</option>
          <option value="Bug Report">🐞 Bug Report</option>
        </select>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
          <option value="4">⭐️⭐️⭐️⭐️ Good</option>
          <option value="3">⭐️⭐️⭐️ Average</option>
          <option value="2">⭐️⭐️ Poor</option>
          <option value="1">⭐️ Very Poor</option>
        </select>

        <textarea
          placeholder="📝 Your feedback message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">🚀 Submit</button>
        <button
          type="button"
          onClick={handleLogout}
          style={{
            marginTop: "15px",
            backgroundColor: "#ff4d4d",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          🔒 Logout
        </button>
      </form>
    </div>
  );
}
