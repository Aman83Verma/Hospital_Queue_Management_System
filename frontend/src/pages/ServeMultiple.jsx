import { useState } from "react";
import { serveMultiplePatients } from "../services/patientService";
import "../styles/forms.css";

const ServeMultiple = () => {
  const [doctors, setDoctors] = useState("");
  const [message, setMessage] = useState("");

  const handleServe = async (e) => {
    e.preventDefault();
    try {
      const res = await serveMultiplePatients(Number(doctors));
      setMessage(`Served ${res.length} patients successfully`);
      setDoctors("");
    } catch (err) {
      setMessage("Failed to serve patients");
    }
  };

  return (
    <div className="form-container">
      <h2>Serve Multiple Patients</h2>

      {message && <p className="form-message">{message}</p>}

      <form onSubmit={handleServe}>
        <input
          type="number"
          placeholder="Doctors Available"
          value={doctors}
          onChange={(e) => setDoctors(e.target.value)}
          required
        />
        <button type="submit">Serve Patients</button>
      </form>
    </div>
  );
};

export default ServeMultiple;
