import "../App.css"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import IsiBelajar5 from "../components/IsiBelajar5.js";
import NavigationBar from "../components/NavigationBar.js";
import { Link } from "react-router-dom";
function Sandhangan() {
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
        <IsiBelajar5 />
      </div>
      {/* mode */}
    </div>
  );
}

export default Sandhangan;