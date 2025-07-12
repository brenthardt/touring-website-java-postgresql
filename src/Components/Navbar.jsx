import logo from "../assets/logo.svg"
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <div className="max-w-5xl h-16  flex mx-auto gap-80 items-center">
        <img className="w-28 h-12" src={logo} alt="" />

        <ul className="text-white flex gap-16 font-semibold text-nowrap ">
          <li>
            <Link
              to="second"
              smooth={true}
              duration={1200}
              className="mx-4 cursor-pointer"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="fifth"
              smooth={true}
              duration={1200}
              className="mx-4 cursor-pointer"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="third"
              smooth={true}
              duration={1200}
              className="mx-4 cursor-pointer"
            >
              Inspiration
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="fourth"
              smooth={true}
              duration={1200}
              className="mx-4 cursor-pointer"
            >
              Contact us
            </Link>
          </li>
          <li>ENG</li>
        </ul>
      </div>
      <div className="h-px bg-gray-300 w-full"></div>
    </>
  );
}

export default Navbar