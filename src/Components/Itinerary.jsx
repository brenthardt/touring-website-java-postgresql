import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Itinerary = () => {
  const [days, setDays] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9980/tour/${id}`)
      .then((res) => {
        setDays(res.data.days);
      })
      .catch((err) => console.error("Failed to fetch tour days", err));
  }, [id]);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index)); 
  };

  return (
    <div className="container mx-auto">
      <div className="px-6 mt-20">
        <h3 className="font-bold text-4xl text-left p-4">Itinerary</h3>

        {days?.map((dayItem, index) => (
          <div key={index} className="flex items-start mt-16">
            <h3 className="font-semibold text-2xl text-left p-4">
              Day {dayItem.day}
            </h3>
            <div
              style={{
                borderRadius: "25px",
                transition: "max-height 0.3s ease",
              }}
              className={`bg-[#00D5941A] max-w-6xl p-6 flex gap-16 overflow-hidden ${
                expandedIndex === index ? "max-h-[1000px]" : "max-h-24"
              }`}
            >
              <p className="transition-all duration-300 ease-in-out">
                {dayItem.text}
              </p>
              <button
                style={{ borderRadius: "50px" }}
                className="bg-[#00D5941A] text-center w-14 h-14"
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? "-" : "+"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
