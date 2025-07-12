import LandingPage from "./LandingPage";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Footer from "./Footer";


export default function HomePage() {
  return (
    <>
      <div id="landingpage">
        <LandingPage />
      </div>
      <div id="second">
        <Second />
      </div>
      <div id="third">
        <Third />
      </div>
      <div id="fourth">
        <Fourth />
      </div>
      <div id="fifth">
        <Fifth />
      </div>
      <div id="sixth">
        <Sixth />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

