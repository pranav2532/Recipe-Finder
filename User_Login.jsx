import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ User_Email: "", User_Password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        navigate("/profile");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Login to continue your journey</p>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input type="email" name="User_Email" className="login-input" placeholder="Enter your email" value={formData.User_Email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="User_Password" className="login-input" placeholder="Enter your password" value={formData.User_Password} onChange={handleChange} required />

        <button type="submit" className="login-button">Login</button>
      </form>

      <p className="signup-link">Don't have an account? <span onClick={() => navigate("/signup")} className="signup-text">Sign up</span></p>
    </div>
  );
}

export default Login;