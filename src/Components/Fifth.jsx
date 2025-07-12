import { useEffect, useState } from "react";
import axios from "axios";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import image10 from "../assets/image10.svg";

const Fifth = () => {
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:9980/image");
        setImages(res.data);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };
    fetchImages();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="mt-16">
        <h5 className="text-left font-bold text-4xl">
          Where you can travel with us
        </h5>
        <div className="flex items-center justify-between mt-2">
          <p className="font-medium max-w-4xl mt-2">
            Immerse yourself in the beauty and spirituality of fascinating
            places. Join us for an unforgettable adventure through Islamic
            Central Asia.
          </p>
          <button
            className="w-32 h-10 border-2 text-green-500 border-green-500"
            onClick={() => {
              setVisible(true);
              setCurrentIndex(0);
            }}
          >
            See All
          </button>
        </div>
      </div>

      <div className="flex gap-6 mt-9 h-[500px]">
        <div className="w-1/2 h-full">
          <img
            style={{ borderRadius: "8px" }}
            className="w-full h-full object-cover"
            src={image10}
            alt="Main"
          />
        </div>

        <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <img
            style={{ borderRadius: "8px" }}
            className="w-full h-full object-cover"
            src={image10}
            alt="Small 1"
          />
          <img
            style={{ borderRadius: "8px" }}
            className="w-full h-full object-cover"
            src={image10}
            alt="Small 2"
          />
          <img
            style={{ borderRadius: "8px" }}
            className="w-full h-full object-cover"
            src={image10}
            alt="Small 3"
          />
          <img
            style={{ borderRadius: "8px" }}
            className="w-full h-full object-cover"
            src={image10}
            alt="Small 4"
          />
        </div>
      </div>

      <Rodal
        visible={visible}
        onClose={() => setVisible(false)}
        height={500}
        width={800}
      >
        {images.length > 0 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={`http://localhost:9980/${images[currentIndex].path}`}
              alt={images[currentIndex].title}
            />
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute  right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1"
            >
              ▶
            </button>
          </div>
        )}
      </Rodal>
    </div>
  );
};

export default Fifth;
