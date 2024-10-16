import "../App.css";
import NavigationBar from "../components/NavigationBar";
import "../style/CardCarousel.css";
import IsiBelajar1 from "../components/IsiBelajar1";
import { Link } from "react-router-dom";

function Belajar1() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/aksaranglegena" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* category section */}
      <div>
        <IsiBelajar1 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar1;
