import Navbar from "./Navbar";
import background from "../assets/image1.svg";
const LandingPage = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full  border "
    >
      <Navbar />
      <div className="font-bold text-6xl max-w-2xl text-left mx-28 mt-80 text-white">
        <p> Travel through the land and observe how He began his voyage.</p>
      </div>
      <div className="font-medium mt-4 mx-28 text-white mb-28">
        We are BARLAS VOYAGE and we orginize group trip to Central Asia. <br />{" "}
        If you want to travel to learn from the past, let us to be your guide.
      </div>
    </div>
  );
};

export default LandingPage;
