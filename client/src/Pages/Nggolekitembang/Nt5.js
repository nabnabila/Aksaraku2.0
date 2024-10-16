import "../../App.css";
import "../../style/WordSearch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NggolekiTembang5 from "../../components/NggolekiTembung/nt5";
function IsiKuis1E() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/games/nggolekitembung" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <NggolekiTembang5 />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis1E;