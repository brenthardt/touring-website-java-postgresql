import { Link } from "react-scroll";
import logo from "../assets/logo.svg";
import phone from "../assets/phone.svg";

const Navbar2 = () => {
  return (
    <div style={{ backgroundColor: "#004530" }} className="container mx-auto">
      <div className="flex mx-auto gap-80 items-center p-2">
        <img className="w-28 h-12" src={logo} alt="" />

        <ul className="text-white flex gap-16 font-semibold text-nowrap">
          <li>
            <Link
              to="/second"
              smooth={true}
              duration={500}
              className="mx-4 cursor-pointer"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="fifth"
              smooth={true}
              duration={500}
              className="mx-4 cursor-pointer"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="third"
              smooth={true}
              duration={500}
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
              duration={500}
              className="mx-4 cursor-pointer"
            >
              Contact us
            </Link>
          </li>
          <li>ENG</li>
          <li className="w-10 h-10  rounded-full flex justify-center items-center cursor-pointer">
            <img className="w-5 h-5 object-contain" src={phone} alt="Phone" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
