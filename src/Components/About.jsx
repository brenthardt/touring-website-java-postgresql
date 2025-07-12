import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const About = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`http://localhost:9980/tour/${id}`);
        setTitle(res.data.title);
        setAbout(res.data.about);
        setImages(res.data.images || []);
      } catch (err) {
        console.error("Failed to fetch tour details:", err);
      }
    };

    fetchTour();
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="mx-auto px-6">
        <h3 className="font-semibold text-4xl text-center mt-14">{title}</h3>
        <p className="font-light text-left text-4xl mt-14 text-gray-500 p-4">
          {about}
        </p>

        {images.length > 0 && (
          <img
            className="w-full h-[500px] object-cover rounded-lg p-4"
            src={`http://localhost:9980/${images[0].path.replace(/\\/g, "/")}`}
            alt="Tour cover"
          />
        )}
      </div>
    </div>
  );
};

export default About;
