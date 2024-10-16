import "../../App.css";
import "../../style/Crossword.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Memory2 from "../../components/Memory/m2";
function IsiKuis3E() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/games/memory" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>

      {/* mode */}
      <div>
        <Memory2 />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3E;
