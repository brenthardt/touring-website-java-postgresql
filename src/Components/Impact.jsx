import tree from "../assets/tree.svg";
import people from "../assets/people.svg";
import turbine from "../assets/turbine.svg";

const Impact = () => {
  return (
    <div className="container mx-auto">
      <div className="px-6 mt-20">
        <h3 className="font-bold text-4xl text-left p-4">
          Positive impact of this trip
        </h3>
        <div className="flex justify-between mt-8">
          <div className="w-72 h-72 text-center ">
            <img className="w-52 h-52 mx-auto" src={tree} alt="" />
            <p className="mt-10">
              Every purchase one <br />
              tree planted
            </p>
          </div>

          <div className="w-72 h-72 text-center ">
            <img className="w-52 h-52 mx-auto" src={people} alt="" />
            <p className="mt-10">Community and Social Impact</p>
          </div>
          <div className="w-72 h-72 text-center">
            <img className="w-52 h-52 mx-auto" src={turbine} alt="" />
            <p className="mt-10">Educational Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
