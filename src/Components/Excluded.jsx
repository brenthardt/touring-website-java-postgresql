import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Excluded = () => {
  const { id } = useParams();
  const [excludedItems, setExcludedItems] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:9980/tour/${id}`)
      .then((res) => {
        setExcludedItems(res.data.excluded || "");
      })
      .catch((err) => {
        console.error("Failed to fetch excluded data:", err);
      });
  }, [id]);

  const parsedItems = excludedItems.split(",").map((item) => item.trim());

  return (
    <div className="container mx-auto px-6 mt-20">
      <h3 className="font-bold text-4xl text-left p-4">Excluded</h3>
      <ul className="ml-10 text-xl text-gray-700">
        {parsedItems.map((item, index) => (
          <li key={index} className="mb-2">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Excluded;
