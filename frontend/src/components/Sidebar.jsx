import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Hospital</h3>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/register-patient">Register Patient</Link></li>
        <li><Link to="/serve-multiple">Serve Multiple</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
