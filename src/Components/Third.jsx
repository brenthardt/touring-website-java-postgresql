import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Third = () => {
  const [tours, setTours] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get("http://localhost:9980/tour");
        setTours(res.data);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <h3 className="text-left mt-10 font-bold text-4xl">
        Trip Ideas in Uzbekistan
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="relative w-full h-[450px] border overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={`http://localhost:9980/${tour.coverImage}`}
              alt={tour.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black bg-opacity-30 text-white">
              <div className="w-full">
                <h3 className="font-extrabold text-xl text-left mb-2">
                  {tour.title}
                </h3>
                <p className="font-normal text-sm text-left">
                  {tour.about?.substring(0, 200)}...
                </p>
              </div>

              <div className="mt-4">
                <div className="flex gap-4">
                  <Link
                    to={`/tour/${tour.id}`}
                    style={{ borderRadius: "45px" }}
                    className="w-32 border-2 border-green-500 text-white p-2 text-center hover:bg-green-500 transition"
                  >
                    View Details
                  </Link>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm">
                    {tour.days?.length || 0} days from ${tour.price}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedTour(tour);
                      setShowModal(true);
                    }}
                    style={{ borderRadius: "45px" }}
                    className="bg-green-500 text-white w-32 p-2 text-center hover:bg-green-600 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              Book Tour: {selectedTour?.title}
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded mb-3"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 rounded mb-4"
              value={buyerPhone}
              onChange={(e) => setBuyerPhone(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    await axios.post("http://localhost:9980/users/quick", {
                      name: buyerName,
                      phone: buyerPhone,
                    });

                    setShowModal(false);
                    setBuyerName("");
                    setBuyerPhone("");
                  } catch (err) {
                    console.error(err);
                    alert("Booking failed");
                  }
                }}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Third;
