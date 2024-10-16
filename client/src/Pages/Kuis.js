import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import Kuisgames from "../components/Kuisgames";

function Kuis1() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div>
        <Kuisgames />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Kuis1;
