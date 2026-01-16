import { Link } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Hospital Queue Management System</h1>
        <p>
          Smart, priority‑based patient queue management to replace
          traditional manual and FIFO systems.
        </p>

        <div className="landing-buttons">
          <Link to="/login" className="btn primary-btn">
            Login
          </Link>
          <Link to="/register" className="btn secondary-btn">
            Register
          </Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Use Our System?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🚑 Priority‑Based Queue</h3>
            <p>
              Patients are served based on emergency level and waiting time,
              not just arrival order.
            </p>
          </div>

          <div className="feature-card">
            <h3>⏱ Reduced Waiting Time</h3>
            <p>
              Automatically identifies critical patients and minimizes delays
              caused by manual queue handling.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Real‑Time Dashboard</h3>
            <p>
              Hospital staff can monitor queue status, patient load, and
              emergency levels in real time.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔐 Secure Access</h3>
            <p>
              Authentication‑based access ensures that only authorized staff
              can manage patient queues.
            </p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© 2026 Hospital Queue Management System</p>
      </footer>
    </div>
  );
};

export default Landing;
