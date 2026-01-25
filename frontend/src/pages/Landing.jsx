import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const isAuthenticated = !!token;

  return (
    <div className="landing-container">
      <div className="landing-background">
        <div className="landing-background-pattern"></div>
      </div>

      <header className="landing-header">
        <div className="landing-header-content">
          {isAuthenticated && (
            <button className="landing-return-btn" onClick={() => navigate("/dashboard")}>
              <span className="return-icon">←</span>
              Go to Dashboard
            </button>
          )}

          <div className="landing-hero">
            <div className="landing-icon">🏥</div>
            <h1>Hospital Queue Management System</h1>
            <p className="landing-subtitle">
              Smart, priority‑based patient queue management to replace
              traditional manual and FIFO systems. Streamline your hospital operations
              with intelligent patient prioritization.
            </p>

            <div className="landing-buttons">
              <Link to="/login" className="btn primary-btn">
                <span className="btn-icon">🔐</span>
                Sign In
              </Link>
              <Link to="/register" className="btn secondary-btn">
                <span className="btn-icon">👨‍⚕️</span>
                Register Staff
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2>Why Use Our System?</h2>
            <p className="features-subtitle">
              Experience the future of hospital queue management with intelligent prioritization
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚑</div>
              <h3>Priority‑Based Queue</h3>
              <p>
                Patients are served based on emergency level and waiting time,
                not just arrival order. Critical cases get immediate attention.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Reduced Waiting Time</h3>
              <p>
                Automatically identifies critical patients and minimizes delays
                caused by manual queue handling. Optimize patient flow efficiently.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real‑Time Dashboard</h3>
              <p>
                Hospital staff can monitor queue status, patient load, and
                emergency levels in real time. Make data-driven decisions instantly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure Access</h3>
              <p>
                Authentication‑based access ensures that only authorized staff
                can manage patient queues. Your data is protected and secure.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Processing</h3>
              <p>
                Serve multiple patients simultaneously based on available doctors.
                Maximize efficiency and reduce patient wait times significantly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>
                Access the system from any device - desktop, tablet, or mobile.
                Manage queues on the go with our fully responsive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join hospitals that are already using our system to improve patient care</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn cta-primary-btn">
              Get Started
            </Link>
            <Link to="/login" className="btn cta-secondary-btn">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <p>© 2026 Hospital Queue Management System. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
