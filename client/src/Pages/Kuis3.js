import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import PilihanKuis3 from "../components/PilihanKuis3";
import "../style/LandingPage.css"; // Adjust the path if necessary

function Kuis3() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div>
        <PilihanKuis3 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Kuis3;
