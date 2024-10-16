import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkara2 from "../../components/NgaturUkara/nu2";
function IsiKuis2E() {
  return (
    <div>
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/games/ngaturukara" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <NgaturUkara2 />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2E;
