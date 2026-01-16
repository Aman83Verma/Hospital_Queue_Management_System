import { useState } from "react";
import { registerPatient } from "../services/patientService";
import "../styles/forms.css";

const RegisterPatient = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    symptoms: "",
    emergencyLevel: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerPatient({
        name: form.name,
        age: Number(form.age),
        symptoms: form.symptoms,
        emergencyLevel: Number(form.emergencyLevel),
      });
      setMessage("Patient registered successfully");
      setForm({ name: "", age: "", symptoms: "", emergencyLevel: "" });
    } catch (err) {
      setMessage("Failed to register patient");
    }
  };

  return (
    <div className="form-container">
      <h2>Register Patient</h2>

      {message && <p className="form-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Patient Name" value={form.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="symptoms" placeholder="Symptoms" value={form.symptoms} onChange={handleChange} required />
        <input name="emergencyLevel" type="number" placeholder="Emergency Level in numbers" value={form.emergencyLevel} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPatient;
