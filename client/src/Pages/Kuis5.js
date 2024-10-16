import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import PilihanKuis5 from "../components/PilihanKuis5";
import "../style/LandingPage.css"; // Adjust the path if necessary

function Kuis5() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div>
        <PilihanKuis5 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Kuis5;
