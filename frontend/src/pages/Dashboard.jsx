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
    } catch {
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
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />

        {error && <p className="error-text">{error}</p>}

        <div className="stats-grid">
          <StatCard title="Total Patients" value={queueData.totalPatients} />
          <StatCard title="Highest Emergency" value={queueData.highestEmergencyLevel} />
          <StatCard
            title="Longest Waiting"
            value={queueData.longestWaitingPatient?.name || "—"}
          />
        </div>

        <div className="queue-section">
          <button className="serve-btn" onClick={handleServe}>
            Serve Next Patient
          </button>

          {queueData.totalPatients === 0 ? (
            <p className="empty-text">No patients in queue</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Emergency</th>
                  <th>Waiting Time</th>
                </tr>
              </thead>
              <tbody>
                {queueData.nextPatients.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.emergencyLevel}</td>
                    <td>{p.waitingTimeInMinutes} min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
