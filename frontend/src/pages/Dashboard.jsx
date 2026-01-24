import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Loader from "../components/Loader";
import { getQueueStatus, serveNextPatient } from "../services/patientService";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [queueData, setQueueData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadQueue = async () => {
    try {
      setLoading(true);
      const data = await getQueueStatus();
      setQueueData(data);
      setError("");
    } catch (err) {
      setError("Unable to load queue data");
    } finally {
      setLoading(false);
    }
  };

  const handleServe = async () => {
    try {
      await serveNextPatient();
      loadQueue();
    } catch {
      setError("No patients available to serve");
    }
  };

  useEffect(() => {
    loadQueue();
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadQueue, 30000);
    return () => clearInterval(interval);
  }, []);

  const getEmergencyBadgeClass = (level) => {
    if (level >= 4) return "emergency-critical";
    if (level >= 3) return "emergency-high";
    if (level >= 2) return "emergency-medium";
    return "emergency-low";
  };

  if (loading) return <Loader />;

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          {error && (
            <div className="error-alert">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Welcome Section */}
          <div className="dashboard-header">
            <div>
              <h1>Queue Management</h1>
              <p className="dashboard-subtitle">Monitor and manage patient queue in real-time</p>
            </div>
            <button className="serve-btn-primary" onClick={handleServe}>
              <span className="btn-icon">⚡</span>
              Serve Next Patient
            </button>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <StatCard
              title="Total Patients"
              value={queueData?.totalPatients || 0}
              icon="👥"
              color="#1976d2"
            />
            <StatCard
              title="Highest Emergency"
              value={queueData?.highestEmergencyLevel || 0}
              icon="🚨"
              color="#d32f2f"
            />
            <StatCard
              title="Longest Waiting"
              value={queueData?.longestWaitingPatient?.name || "—"}
              icon="⏱️"
              color="#ed6c02"
            />
          </div>

          {/* Queue Section */}
          <div className="queue-section">
            <div className="queue-header">
              <h2>Patient Queue</h2>
              <span className="queue-count">
                {queueData?.totalPatients || 0} {queueData?.totalPatients === 1 ? 'patient' : 'patients'}
              </span>
            </div>

            {queueData?.totalPatients === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🏥</div>
                <h3>No patients in queue</h3>
                <p>The queue is currently empty. New patients will appear here when registered.</p>
              </div>
            ) : (
              <div className="queue-table-container">
                <table className="queue-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient Name</th>
                      <th>Emergency Level</th>
                      <th>Waiting Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {queueData?.nextPatients?.map((p, index) => (
                      <tr key={p.id} className="queue-row">
                        <td className="queue-number">{index + 1}</td>
                        <td className="patient-name">
                          <span className="name-text">{p.name}</span>
                        </td>
                        <td>
                          <span className={`emergency-badge ${getEmergencyBadgeClass(p.emergencyLevel)}`}>
                            Level {p.emergencyLevel}
                          </span>
                        </td>
                        <td className="waiting-time">
                          <span className="time-value">{p.waitingTimeInMinutes}</span>
                          <span className="time-unit">min</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
