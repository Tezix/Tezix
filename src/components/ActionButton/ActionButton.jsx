import { Link } from 'react-router-dom';
import './ActionButton.css';

function ActionButton({text}) {
  
  return (
        <div className="get-in-touch-button">
          <Link to="#">{text}</Link> 
        </div>
      
  )
}

export default ActionButton;

