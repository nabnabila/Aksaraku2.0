import "../App.css";
import NavigationBar from "../components/NavigationBar";
import Intro from "../components/Intro";
import "../style/LandingPage.css";
import CategorySection from "../components/CategorySection";

function HomePage() {
  return (
    <div>
      {/* intro section */}
      <div className="bg">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div className="category">
        <CategorySection />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default HomePage;
