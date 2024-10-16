import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import PilihanKuis1 from "../components/PilihanKuis1";

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
        <PilihanKuis1 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Kuis1;
