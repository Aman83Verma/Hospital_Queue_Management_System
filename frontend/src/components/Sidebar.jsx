import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Hospital</h3>
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/register-patient" className={({ isActive }) => isActive ? "active" : ""}>
            Register Patient
          </NavLink>
        </li>
        <li>
          <NavLink to="/serve-multiple" className={({ isActive }) => isActive ? "active" : ""}>
            Serve Multiple
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
