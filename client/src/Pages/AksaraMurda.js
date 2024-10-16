import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import IsiBelajar3 from "../components/IsiBelajar3";
import { Link } from "react-router-dom";

function AksaraMurda() {
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
        <IsiBelajar3 />
      </div>
      {/* mode */}
    </div>
  );
}

export default AksaraMurda;
