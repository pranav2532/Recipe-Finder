import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

function Confirmation({ message = "Your action was completed successfully!", redirectTo = "/" }) {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">🎉 Success!</h2>
      <p className="confirmation-message" style={{color:'#050517'}}>{message}</p>
      <button className="confirmation-button" onClick={() => navigate(redirectTo)}>
        Return Home
      </button>
    </div>
  );
}

export default Confirmation;
