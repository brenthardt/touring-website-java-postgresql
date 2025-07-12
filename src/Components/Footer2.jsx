import { Link } from "react-scroll";
import logo4 from "../assets/logo4.svg"
import socials2 from "../assets/socials2.svg";


const Footer2 = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto px-6 mt-20">
        <div className="h-px bg-gray-500 w-full"></div>
        <div className="flex text-center items-center">
          <img className="mt-6 w-48 h-32" src={logo4} alt="" />
          <div className=" w-52 h-28  mt-6 text-[#004530]">
            <p>
              +44 7459 382384 <br />
              +44 7459 382384
            </p>
            <img className="w-40 h-10 mx-auto mt-4" src={socials2} alt="" />
          </div>
          <ul className="text-[#004530] flex gap-28 font-light text-xl text-nowrap">
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
        </div>
      </div>
    </div>
  );
}

export default Footer2