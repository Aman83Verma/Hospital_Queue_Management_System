import "../styles/dashboard.css";

const StatCard = ({ title, value, icon, color = "#1976d2" }) => {
  return (
    <div className="stat-card" style={{ '--card-color': color }}>
      <div className="stat-card-header">
        <div className="stat-icon" style={{ backgroundColor: `${color}15` }}>
          {icon}
        </div>
      </div>
      <div className="stat-card-content">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-title">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
