import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { serveMultiplePatients } from "../services/patientService";
import "../styles/forms.css";

const ServeMultiple = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [loading, setLoading] = useState(false);
  const [servedCount, setServedCount] = useState(null);

  const handleServe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setServedCount(null);
    
    try {
      const res = await serveMultiplePatients(Number(doctors));
      const count = res.length || 0;
      setServedCount(count);
      setMessage(
        count > 0
          ? `Successfully served ${count} ${count === 1 ? "patient" : "patients"}!`
          : "No patients available to serve."
      );
      setMessageType(count > 0 ? "success" : "info");
      setDoctors("");
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage("");
        setMessageType("");
        setServedCount(null);
      }, 5000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to serve patients. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="page-content">
          <div className="page-header">
            <div className="header-content">
              <button className="return-btn" onClick={() => navigate("/dashboard")}>
                <span className="return-icon">←</span>
                Back to Dashboard
              </button>
              <div className="header-text">
                <h1>Serve Multiple Patients</h1>
                <p className="page-subtitle">Process multiple patients based on available doctors</p>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            <div className="form-card">
              {message && (
                <div className={`form-alert ${messageType}`}>
                  <span className="alert-icon">
                    {messageType === "success" ? "✓" : messageType === "info" ? "ℹ️" : "⚠️"}
                  </span>
                  <span>{message}</span>
                  {servedCount !== null && servedCount > 0 && (
                    <span className="served-count-badge">{servedCount} served</span>
                  )}
                </div>
              )}

              <form onSubmit={handleServe} className="modern-form">
                <div className="info-card">
                  <div className="info-icon">👨‍⚕️</div>
                  <div className="info-content">
                    <h3>How it works</h3>
                    <p>
                      Enter the number of doctors available. The system will automatically serve
                      patients based on their emergency level and waiting time, prioritizing the
                      most critical cases first.
                    </p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="doctors">
                    <span className="label-icon">👨‍⚕️</span>
                    Number of Doctors Available
                  </label>
                  <input
                    id="doctors"
                    type="number"
                    placeholder="Enter number of available doctors"
                    value={doctors}
                    onChange={(e) => {
                      setDoctors(e.target.value);
                      if (message) {
                        setMessage("");
                        setMessageType("");
                      }
                    }}
                    required
                    min="1"
                    max="50"
                    className="form-input"
                  />
                  <div className="form-hint">
                    Enter a number between 1 and 50
                  </div>
                </div>

                {doctors && Number(doctors) > 0 && (
                  <div className="preview-card">
                    <div className="preview-icon">📊</div>
                    <div className="preview-content">
                      <h4>Ready to serve</h4>
                      <p>
                        With <strong>{doctors}</strong> {Number(doctors) === 1 ? "doctor" : "doctors"} available,
                        the system will process up to <strong>{doctors}</strong> {Number(doctors) === 1 ? "patient" : "patients"}
                        from the queue, prioritizing by emergency level.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading || !doctors || Number(doctors) < 1}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">⚡</span>
                      Serve Patients
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeMultiple;
