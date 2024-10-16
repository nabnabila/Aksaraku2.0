import "../App.css";
import NavigationBar from "../components/NavigationBar";
import "../style/CardCarousel.css"; //
import IsiBelajar2 from "../components/IsiBelajar2";
import { Link } from "react-router-dom";

function Belajar2() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/pasanganaksaranglegena" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      <div>
        <IsiBelajar2 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar2;
