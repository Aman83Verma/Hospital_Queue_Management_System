import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { registerPatient } from "../services/patientService";
import "../styles/forms.css";

const RegisterPatient = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    symptoms: "",
    emergencyLevel: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear message when user starts typing
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerPatient({
        name: form.name,
        age: Number(form.age),
        symptoms: form.symptoms,
        emergencyLevel: Number(form.emergencyLevel),
      });
      setMessage("Patient registered successfully!");
      setMessageType("success");
      setForm({ name: "", age: "", symptoms: "", emergencyLevel: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to register patient. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const getEmergencyLevelInfo = (level) => {
    const levels = {
      1: { label: "Low", color: "#2e7d32", description: "Non-urgent" },
      2: { label: "Medium", color: "#f57f17", description: "Moderate priority" },
      3: { label: "High", color: "#e65100", description: "Urgent" },
      4: { label: "Critical", color: "#c62828", description: "Life-threatening" },
      5: { label: "Critical", color: "#c62828", description: "Life-threatening" },
    };
    return levels[level] || { label: "Unknown", color: "#6b7280", description: "" };
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
                <h1>Register New Patient</h1>
                <p className="page-subtitle">Add a new patient to the queue system</p>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            <div className="form-card">
              {message && (
                <div className={`form-alert ${messageType}`}>
                  <span className="alert-icon">
                    {messageType === "success" ? "✓" : "⚠️"}
                  </span>
                  <span>{message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    Patient Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter patient's full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">
                    <span className="label-icon">🎂</span>
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter patient's age"
                    value={form.age}
                    onChange={handleChange}
                    required
                    min="0"
                    max="150"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="symptoms">
                    <span className="label-icon">🏥</span>
                    Symptoms
                  </label>
                  <textarea
                    id="symptoms"
                    name="symptoms"
                    placeholder="Describe the patient's symptoms..."
                    value={form.symptoms}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyLevel">
                    <span className="label-icon">🚨</span>
                    Emergency Level
                  </label>
                  <div className="emergency-selector">
                    <input
                      id="emergencyLevel"
                      name="emergencyLevel"
                      type="number"
                      placeholder="Enter emergency level (1-5)"
                      value={form.emergencyLevel}
                      onChange={handleChange}
                      required
                      min="1"
                      max="5"
                      className="form-input"
                    />
                    {form.emergencyLevel && (
                      <div className="emergency-preview">
                        <span
                          className="emergency-badge-preview"
                          style={{
                            backgroundColor: `${getEmergencyLevelInfo(Number(form.emergencyLevel)).color}15`,
                            color: getEmergencyLevelInfo(Number(form.emergencyLevel)).color,
                            borderColor: `${getEmergencyLevelInfo(Number(form.emergencyLevel)).color}40`,
                          }}
                        >
                          Level {form.emergencyLevel} - {getEmergencyLevelInfo(Number(form.emergencyLevel)).label}
                        </span>
                        <span className="emergency-description">
                          {getEmergencyLevelInfo(Number(form.emergencyLevel)).description}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="form-hint">
                    <span>1 = Low Priority</span>
                    <span>2 = Medium</span>
                    <span>3 = High</span>
                    <span>4-5 = Critical</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Registering...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">✓</span>
                      Register Patient
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

export default RegisterPatient;
