import "../App.css";
import NavigationBar from "../components/NavigationBar";
import "../style/CardCarousel.css";
import IsiBelajar3 from "../components/IsiBelajar3";
import { Link } from "react-router-dom";

function Belajar3() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/aksaramurda" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      <div>
        <IsiBelajar3 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar3;
