import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Account created:", formData);
      alert("Account created successfully!");
    }, 2000);
  };

  return (
    <div className="signup-container">
      {/* Floating Shapes Background */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Navigation */}
      <nav className="signup-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <div className="logo-icon">🧠</div>
            <span>TranquilMind</span>
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link">
              Back to Home
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="signup-content">
        {/* Sign Up Card */}
        <div className="signup-card">
          <div className="signup-header">
            <div className="welcome-badge">
              <span>✨ Welcome to TranquilMind</span>
            </div>
            <h1 className="signup-title">
              Start Your <span className="gradient-text">Wellness Journey</span>
            </h1>
            <p className="signup-subtitle">
              Join thousands of users finding peace and support with our AI
              companion
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Name Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a strong password"
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

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <span className="checkbox-text">
                  I agree to the{" "}
                  <a href="/terms" className="form-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="form-link">
                    Privacy Policy
                  </a>
                </span>
              </label>
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
                  Creating Account...
                </>
              ) : (
                <>Create Account</>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="signup-footer">
            <p>
              Already have an account?{" "}
              <a href="/signin" className="signin-link">
                Sign in here
              </a>
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h3 className="benefits-title">Why TranquilMind?</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">💝</div>
              <div className="benefit-content">
                <h4>Empathetic Support</h4>
                <p>
                  AI companion trained to understand and support your emotional
                  needs
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <div className="benefit-content">
                <h4>Complete Privacy</h4>
                <p>
                  Your conversations are encrypted and completely confidential
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-content">
                <h4>24/7 Availability</h4>
                <p>Get support whenever you need it, day or night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
