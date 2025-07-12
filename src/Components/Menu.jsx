import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="container mx-auto">
        <div className="flex shadow-xl">

      <ul className="text-[#004530] flex gap-28 font-medium text-2xl p-2 text-nowrap">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1200}
            className="mx-4 cursor-pointer"
          >
            About tour
          </Link>
        </li>
        <li>
          <Link
            to="itinerary"
            smooth={true}
            duration={1200}
            className="mx-4 cursor-pointer"
          >
            Itinerary
          </Link>
        </li>
        <li>
          <Link
            to="included"
            smooth={true}
            duration={1200}
            className="mx-4 cursor-pointer"
          >
            Included
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="excluded"
            smooth={true}
            duration={1200}
            className="mx-4 cursor-pointer"
          >
            Excluded
          </Link>
        </li>

      </ul>
        <div className="flex items-center gap-6 bg-green-500 w-full justify-around shadow-xl">
          <p className="text-white text-xl font-medium">7 days for $1000</p>
          <button className="bg-[#004530] text-white rounded-full w-48 h-10 font-light">
            Buy now
          </button>
        </div>
        </div>
    </div>
  );
};

export default Menu;
