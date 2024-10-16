import "../../App.css";
import "../../style/ImageMatch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/Gambar/g3";
function IsiKuis4B() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/games/gambar" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <NyocokakeGambar
          nextPagePath={"/pasanganaksaranglegena/kuis2/nyocokakeswara"}
        />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4B;
