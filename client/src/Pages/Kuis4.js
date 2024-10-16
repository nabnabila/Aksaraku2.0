import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import PilihanKuis4 from "../components/PilihanKuis4";
import "../style/LandingPage.css"; // Adjust the path if necessary

function Kuis4() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div>
        <PilihanKuis4 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Kuis4;
