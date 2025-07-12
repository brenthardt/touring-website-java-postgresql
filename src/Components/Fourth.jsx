import { useState } from "react";
import axios from "axios";
import woman from "../assets/woman.svg";
import image9 from "../assets/image9.svg";

const Fourth = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleSubmit = async () => {
    if (!name || !phone) {
      setMessage("Please enter both name and phone.");
      setMessageType("error");
      return;
    }

    try {
      await axios.post("http://localhost:9980/users/quick", {
        name,
        phone,
      });
      setMessage("We will call you back shortly!");
      setMessageType("success");
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Failed to send data", error);
      setMessage("Something went wrong.");
      setMessageType("error");
    }
  };

  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
        }}
        className="max-w-5xl h-96 mt-16 mx-auto flex gap-2 bg-black bg-opacity-30"
      >
        <img className="w-80 h-80 mt-16" src={woman} alt="" />
        <div className="mt-14">
          <h3 className="font-bold text-4xl text-white max-w-4xl">
            Would you like us to organize a tour tailored to your preferences?
          </h3>
          <p className="font-normal max-w-4xl text-white mt-3">
            Please provide your contact information, and we will get in touch
            with you shortly
          </p>

          {message && (
            <p
              className={`mt-4 text-sm font-medium ${
                messageType === "success" ? "text-green-300" : "text-red-300"
              }`}
            >
              {message}
            </p>
          )}

          <input
            style={{ borderRadius: "5px" }}
            className="w-80 mt-6 bg-white text-gray-600 h-10 px-2"
            type="text"
            placeholder="Name, Last Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex gap-3 items-center">
            <input
              style={{ borderRadius: "5px" }}
              className="w-80 mt-6 bg-white text-gray-600 h-10 px-2"
              type="text"
              placeholder="+44 7459 382384"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              style={{ borderRadius: "5px" }}
              className="w-40 mt-6 bg-green-500 text-white h-10"
            >
              CALL ME BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
