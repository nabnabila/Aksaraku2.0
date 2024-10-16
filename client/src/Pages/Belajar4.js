import "../App.css";
import NavigationBar from "../components/NavigationBar";
import "../style/CardCarousel.css";
import IsiBelajar4 from "../components/IsiBelajar4";
import { Link } from "react-router-dom";

function Belajar4() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/pasanganaksaramurda" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* category section */}
      <div>
        <IsiBelajar4 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar4;
