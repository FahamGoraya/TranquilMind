import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router";

interface Message {
  type: "ai" | "user";
  text: string;
}

const TranquilMindLanding: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const messages: Message[] = [
    {
      type: "ai",
      text: "Hi! I'm here to support your mental wellness journey. How are you feeling today?",
    },
    { type: "user", text: "I've been feeling anxious about work lately." },
    {
      type: "ai",
      text: "I understand that work anxiety can be overwhelming. Let's explore some coping strategies together.",
    },
    { type: "user", text: "That would be really helpful, thank you." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">🧠</div>
            <span>TranquilMind</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#how-it-works" className="nav-link">
              How It Works
            </a>

            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary" onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </div>
          <button className="mobile-menu" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>✨ Trusted by 50,000+ users</span>
              </div>
              <h1 className="hero-title">
                Your <span className="gradient-text">AI-Powered</span>
                <br />
                Mental Wellness
                <br />
                Companion
              </h1>
              <p className="hero-description">
                Experience personalized mental health support with TranquilMind.
                Get instant, empathetic responses and evidence-based guidance
                whenever you need it.
              </p>
              <div className="hero-buttons">
                <button
                  className="btn-primary btn-large"
                  onClick={() => navigate("/signup")}
                >
                  Start Your Journey
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Active Users</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="chat-interface">
                    <div className="chat-header">
                      <div className="ai-avatar">🤖</div>
                      <div className="chat-info">
                        <span className="chat-name">TranquilMind AI</span>
                        <span className="chat-status">Always here for you</span>
                      </div>
                      <div className="status-dot"></div>
                    </div>
                    <div className="chat-messages">
                      {messages
                        .slice(0, currentMessage + 1)
                        .map((msg, index) => (
                          <div
                            key={index}
                            className={`message ${msg.type}-message`}
                          >
                            <div className="message-content">{msg.text}</div>
                            <div className="message-time">
                              {new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        ))}
                      {currentMessage < messages.length - 1 && (
                        <div className="typing-indicator">
                          <div className="typing-dots">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                          </div>
                          <span className="typing-text">
                            TranquilMind is typing...
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose TranquilMind?</h2>
            <p className="section-subtitle">
              Experience the future of mental wellness with our AI-powered
              platform designed to support your journey.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💝</div>
              <h3 className="feature-title">Empathetic AI</h3>
              <p className="feature-description">
                Our AI is trained to provide compassionate, understanding
                responses that make you feel heard and supported.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Complete Privacy</h3>
              <p className="feature-description">
                Your conversations are completely confidential and secure. We
                use end-to-end encryption to protect your data.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">24/7 Availability</h3>
              <p className="feature-description">
                Get support whenever you need it. Our AI companion is available
                round the clock, ready to listen and help.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Progress Tracking</h3>
              <p className="feature-description">
                Monitor your mental wellness journey with insights and analytics
                to track your progress over time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Personalized Support</h3>
              <p className="feature-description">
                Receive tailored recommendations and coping strategies based on
                your unique needs and preferences.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧘</div>
              <h3 className="feature-title">Mindfulness Tools</h3>
              <p className="feature-description">
                Access guided meditations, breathing exercises, and mindfulness
                techniques to center yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How TranquilMind Works</h2>
            <p className="section-subtitle">
              Start your mental wellness journey in three simple steps.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Share Your Feelings</h3>
              <p className="step-description">
                Open up about what's on your mind. Our AI creates a safe,
                judgment-free space for you to express yourself.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Get Personalized Support</h3>
              <p className="step-description">
                Receive empathetic responses and evidence-based strategies
                tailored to your specific situation and needs.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Track Your Progress</h3>
              <p className="step-description">
                Monitor your mental wellness journey with insights and celebrate
                your growth along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Start Your Mental Wellness Journey?
            </h2>
            <p className="cta-description">
              Join us to find peace and support with TranquilMind AI.
            </p>
            <div className="cta-buttons">
              <button
                className="btn-primary btn-large"
                onClick={() => navigate("/signup")}
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="nav-logo">
                <div className="logo-icon">🧠</div>
                <span>TranquilMind</span>
              </div>
              <p className="footer-description">
                Your trusted AI companion for mental wellness and emotional
                support.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TranquilMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TranquilMindLanding;
