import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../assets/star.svg";

const Sixth = () => {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    password: "",
    phone: "",
    comment: "",
  });

  const sliderRef = useRef();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await axios.get("http://localhost:9980/users/comments");
    setComments(res.data);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:9980/users/comment", form);
      setVisible(false);
      setForm({ name: "", password: "", phone: "", comment: "" });
      fetchComments();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%",
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center mt-6">{dots}</div>
    ),
    cssEase: "ease-in-out",
  };

  return (
    <div className="container mx-auto px-6">
      <h3 className="font-bold text-4xl text-center mt-16">
        What our clients say about us
      </h3>

      <div className="relative mt-10">
        <Slider ref={sliderRef} {...settings}>
          {comments.map((user, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white shadow-lg rounded-md py-6 min-h-[300px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                <div className="w-full h-1 bg-green-500 mb-4"></div>
                <h5 className="font-semibold text-center mb-2 text-lg">
                  “
                  {user.comment.length > 80
                    ? user.comment.slice(0, 80) + "..."
                    : user.comment}
                  ”
                </h5>
                <p className="text-center text-sm text-gray-600">
                  {user.comment.length > 160
                    ? user.comment.slice(0, 160) + "..."
                    : user.comment}
                </p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="w-5 h-5 mx-0.5"
                      src={star}
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-gray-700 mt-2">
                  {user.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded font-semibold"
        >
          ← 
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded font-semibold"
        >
           →
        </button>
      </div>

      <button
        className="mb-12 bg-green-500 hover:bg-green-600 text-white w-64 h-11 font-bold mx-auto block mt-10 rounded"
        onClick={() => setVisible(true)}
      >
        WRITE A COMMENT
      </button>

      <Rodal visible={visible} onClose={() => setVisible(false)} height={400}>
        <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
        <input
          className="w-full border p-2 mb-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border p-2 mb-2"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          className="w-full border p-2 mb-2"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <textarea
          className="w-full border p-2 mb-4"
          placeholder="Your comment"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Rodal>
    </div>
  );
};

export default Sixth;
