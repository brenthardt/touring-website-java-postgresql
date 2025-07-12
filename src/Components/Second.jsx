import image2 from "../assets/image2.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

const Second = () => {
  return (
    <div className="container mx-auto flex gap-24 p-10">
      <img className="max-w-md h-[600px] object-cover" src={image2} alt="" />
      <div className="flex flex-col justify-center max-w-2xl space-y-8">
        <p className="font-bold text-left text-4xl">
          Small and big group trip through Central Asia
        </p>
        <p className="font-semibold flex gap-4 items-center">
          <img className="w-12 h-12" src={icon1} alt="" />
          Discover Islamic Central Asia with our expert guides. Experience the
          rich cultural heritage of Islamic Central Asia with our expert guides.
          Embark on a journey through ancient cities, stunning architecture, and
          vibrant markets.
        </p>
        <p className="font-semibold flex gap-4 items-center">
          <img className="w-12 h-12" src={icon2} alt="" />
          Our Commitment to World-Class Service. Our dedicated team ensures your
          experience exceeds expectations. Your satisfaction is our top
          priority.
        </p>
        <p className="font-semibold flex gap-4 items-center">
          <img className="w-12 h-12" src={icon3} alt="" />
          24/7 Strong Customer Support. We have a team ready to provide prompt
          and effective solutions to your queries or concerns.
        </p>
      </div>
    </div>
  );
};

export default Second;
