import About from "./About";
import Excluded from "./Excluded";
import Footer2 from "./Footer2";
import Impact from "./Impact";
import Included from "./Included";
import Itinerary from "./Itinerary";
import Menu from "./Menu";
import Navbar2 from "./Navbar2";

export default function HomePage2() {
  return (
    <>
      <div id="navbar2">
        <Navbar2 />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <div id="itinerary">
        <Itinerary />
      </div>
      <div id="included">
        <Included />
      </div>
      <div id="excluded">
        <Excluded />
      </div>
      <div id="footer2">
        <Footer2 />
      </div>
    </>
  );
}
