import { Link } from "react-router-dom";
import "./ActionButton.css";

function ActionButton({ text }) {
  return (
    <div className="action-button">
      <Link to="/contact">{text}</Link>
    </div>
  );
}

export default ActionButton;
