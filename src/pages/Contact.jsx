import { useState } from "react";
// import './style.css';

// Import helper functions
import { validateEmail, isFullNameEntered } from "../utils/helpers";

function Form() {
  // State variables for form fields
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Validate full name
    if (!isFullNameEntered(userName)) {
      setErrorMessage("Please enter your full name");
      return;
    }

    // Success message
    alert(`Thank you, ${userName}! I will get back to you shortly.`);

    // Clear the form
    setUserName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Contact Form</h2>
        <form className="form" onSubmit={handleFormSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Full Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your full name"
              className="form-control"
              id="userName"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="email"
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="form-control"
              id="message"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        {/* Error Message */}
        {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Form;
