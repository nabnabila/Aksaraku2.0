import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import IsiBelajar4 from "../components/IsiBelajar4";
import { Link } from "react-router-dom";
function PasanganAksaraMurda() {
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
        <IsiBelajar4 />
      </div>
      {/* mode */}
    </div>
  );
}

export default PasanganAksaraMurda;
