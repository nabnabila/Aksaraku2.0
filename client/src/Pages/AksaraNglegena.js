import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import IsiBelajar1 from "../components/IsiBelajar1";
import { Link } from "react-router-dom";

function AksaraNglegena() {
  return (
    <div>
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/Homepage" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>
        {/* navigation bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
        {/* end of intro section */}
      </div>

      {/* mode */}
      <div>
        <IsiBelajar1 />
      </div>
      {/* mode */}
    </div>
  );
}

export default AksaraNglegena;
