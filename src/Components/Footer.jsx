
import logo2 from "../assets/logo2.svg"
import logos from "../assets/logos.svg";
import socials from "../assets/socials.svg";

const Footer = () => {
  return (
    <div style={{ backgroundColor: " #004530" }} className="container mx-auto">
      <div className="w-full flex">
        <img className="w-80 h-40 mt-4  " src={logo2} alt="" />
        <div className="max-w-2xl mt-4">
          <ul className="text-yellow-500 flex gap-48 mb-3 font-light text-nowrap ">
            <li>ABOUT US</li>
            <li>DESTINATIONS</li>
            <li>INSPIRATION</li>
          </ul>
          <img src={logos} alt="" />
        </div>
        <div className="mt-4 ml-5">
          <p className="text-yellow-500 font-light">CONTACT US</p>
          <div className="text-white mt-2">
            <p>
              +44 7884 610140 <br />
              +44 7459 382384
            </p>
            <p>
              www.yourwebsitename.com <br />
              yourmailaddress@gmail.com
            </p>
            <p className="text-yellow-500 font-light">LET&apos;S BE SOCIAL</p>
            <img className="mt-2" src={socials} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer