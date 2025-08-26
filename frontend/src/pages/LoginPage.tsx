import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3005/api/users/me", {
          withCredentials: true,
        });
        //go to dashboard
        if (response.data.success) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };
    checkAuth();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show error helper
  const showError = (message: string) => {
    setError(message);
    setTimeout(() => setError(""), 5000); // auto-hide after 5s
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.email.includes("@")) {
      showError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      showError("Password must be at least 6 characters long");
      return;
    }

    try {
      setIsLoading(true);
      const promise = await axios.post(
        "http://localhost:3005/api/users/login",
        formData,
        { withCredentials: true }
      );
      const data = promise.data;
      if (data.success) {
        showError("Login successful!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        showError(data.message);
      }
    } catch (error) {
      showError("Invalid email or password");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Floating Shapes Background */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Navigation */}
      <nav className="login-nav">
        <div className="nav-content">
          <a className="nav-logo" href="/">
            <div className="logo-icon">🧠</div>
            <span>TranquilMind</span>
          </a>
          <div className="nav-links">
            <a href="/" className="nav-link">
              Back to Home
            </a>
            <a href="/signup" className="nav-link">
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="login-content">
        {/* Login Card */}
        <div className="login-card">
          <div className="login-header">
            <div className="welcome-badge">
              <span>👋 Welcome Back</span>
            </div>
            <h1 className="login-title">
              Continue Your{" "}
              <span className="gradient-text">Wellness Journey</span>
            </h1>

            {/* Error Message */}
            {error && (
              <div
                className={`error-message ${
                  error.includes("successful") ? "success" : ""
                }`}
              >
                <span>{error}</span>
                <button className="error-close" onClick={() => setError("")}>
                  ×
                </button>
              </div>
            )}

            <p className="login-subtitle">
              Sign in to access your personalized AI companion and continue your
              path to mental wellness
            </p>
          </div>

          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`submit-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Signing In...
                </>
              ) : (
                <>Sign In</>
              )}
            </button>
          </form>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h3 className="features-title">Your Wellness Companion</h3>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-content">
                <h4>Personalized Sessions</h4>
                <p>
                  Tailored conversations based on your emotional needs and
                  preferences
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div className="feature-content">
                <h4>Progress Tracking</h4>
                <p>
                  Monitor your mental wellness journey with insightful analytics
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌙</div>
              <div className="feature-content">
                <h4>Mood Insights</h4>
                <p>
                  Daily check-ins and mood tracking to understand your patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
