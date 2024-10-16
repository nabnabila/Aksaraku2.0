import "../App.css";
import NavigationBar from "../components/NavigationBar";
import "../style/CardCarousel.css";
import IsiBelajar5 from "../components/IsiBelajar5";
import { Link } from "react-router-dom";

function Belajar5() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/sandhangan1" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* category section */}
      <div>
        <IsiBelajar5 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar5;
