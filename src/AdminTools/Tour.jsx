import { useEffect, useState } from "react";
import axios from "axios";

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [included, setIncluded] = useState("");
  const [excluded, setExcluded] = useState("");
  const [days, setDays] = useState([]);
  const [images, setImages] = useState([]);
  const [editingTour, setEditingTour] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [warning, setWarning] = useState("");
  const token = localStorage.getItem("token");
  const currentRole = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const axiosWithAuth = axios.create({
    baseURL: "http://localhost:9980",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const API_URL = "http://localhost:9980/tour";

  useEffect(() => {
    fetchTour();
  }, []);

  const fetchTour = async () => {
    const res = await axiosWithAuth.get(API_URL);
    setTours(res.data);
  };

  const imageC = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const subBro = async (e) => {
    e.preventDefault();
    if (currentRole !== "ROLE_ADMIN") {
      setWarning("Only ADMINs can add/update tour.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("about", about);
    formData.append("included", included);
    formData.append("excluded", excluded);
    formData.append(
      "days",
      new Blob([JSON.stringify(days)], { type: "application/json" })
    );
    formData.append("coverImage", coverImage);

    if (images.length > 0) {
      images.forEach((image) => formData.append("images", image));
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      if (editingTour) {
        await axios.put(`${API_URL}/${editingTour.id}`, formData, config);
        setEditingTour(null);
      } else {
        await axios.post(API_URL, formData, config);
      }

      fetchTour();
      setTitle("");
      setPrice("");
      setAbout("");
      setIncluded("");
      setExcluded("");
      setDays([]);
      setImages([]);
      setImagePreviews([]);
      setCoverImage(null);
      setCoverPreview(null);
    } catch (error) {
      console.error("Error submitting tour:", error);
    }
  };

  const delU = async (id) => {
    if (currentRole !== "ROLE_ADMIN") {
      setWarning("Only ADMINs can delete tour.");
      return;
    }

    await axiosWithAuth.delete(`${API_URL}/${id}`);
    fetchTour();
  };

  const edit = (tour) => {
    if (currentRole !== "ROLE_ADMIN") {
      setWarning("Only ADMINs can edit tour.");
      return;
    }
    setEditingTour(tour);
    setTitle(tour.title);
    setPrice(tour.price);
    setAbout(tour.about);
    setIncluded(tour.included);
    setExcluded(tour.excluded);
    setDays(tour.days || []);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6">
      {warning && (
        <div className="text-red-600 mb-4 text-center font-semibold">
          {warning}
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Tour Management</h1>
        <div
          className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-bold"
          title={name}
        >
          {name}
        </div>
      </div>    

      <div className="flex justify-center">
        <form
          onSubmit={subBro}
          className="bg-white shadow-md p-6 rounded-lg col-span-1 space-y-4"
        >
          <h2 className="text-lg font-semibold text-center">
            {editingTour ? "Edit Tour" : "Add New Tour"}
          </h2>
          <div className="flex w-[50%] gap-5">
            <input
              type="text"
              placeholder="Title"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Price"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="About"
              className="input"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>

          <div className="flex w-[50%] gap-5">
            <input
              type="text"
              placeholder="Included"
              className="input"
              value={included}
              onChange={(e) => setIncluded(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Excluded"
              className="input"
              value={excluded}
              onChange={(e) => setExcluded(e.target.value)}
              required
            />
          </div>

          <div className="flex w-[50%] gap-5 ">
            <p className="font-medium">Days</p>
            {days.map((day, index) => (
              <div key={index} className="gap-2 my-2">
                <input
                  type="number"
                  className="input w-20"
                  placeholder="№"
                  value={day.day}
                  onChange={(e) => {
                    const newDays = [...days];
                    newDays[index].day = parseInt(e.target.value, 10);
                    setDays(newDays);
                  }}
                />
                <input
                  type="text"
                  className="input flex-1 mt-2"
                  placeholder="description"
                  value={day.text}
                  onChange={(e) => {
                    const newDays = [...days];
                    newDays[index].text = e.target.value;
                    setDays(newDays);
                  }}
                />
                <button
                  type="button"
                  className="btn-red mx-auto block mt-2"
                  onClick={() => {
                    const newDays = days.filter((_, i) => i !== index);
                    setDays(newDays);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn-gray"
            onClick={() => setDays([...days, { day: 1, text: "" }])}
          >
            Add Day
          </button>

          <div className="flex gap-5 w-[50%]">
            <div>
              <label className="font-medium">Cover Image</label>
              <input
                type="file"
                accept="image/*"
                className="input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setCoverImage(file);
                  setCoverPreview(URL.createObjectURL(file));
                }}
              />
              {coverPreview && (
                <img
                  src={coverPreview}
                  alt="cover"
                  className="rounded mt-2 w-20 h-20 object-cover"
                />
              )}
            </div>

            <div>
              <label className="font-medium">Additional Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="input"
                onChange={imageC}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {imagePreviews.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-20 h-20 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>


          <button type="submit" className="btn-blue mx-2">
            {editingTour ? "Update" : "Create"}
          </button>

          {editingTour && (
            <button
              type="button"
              onClick={() => {
                setEditingTour(null);
                setTitle("");
                setPrice("");
                setAbout("");
                setIncluded("");
                setExcluded("");
                setDays([]);
                setImages([]);
                setImagePreviews([]);
                setCoverImage(null);
                setCoverPreview(null);
              }}
              className="btn-gray"
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-1">{tour.title}</h3>
            <p className="text-sm text-gray-500 mb-2">${tour.price}</p>

            {tour.coverImage && (
              <img
                src={`http://localhost:9980/${tour.coverImage}`}
                alt="Cover"
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}

            <ul className="text-sm list-disc list-inside mb-3">
              {tour.days.map((day, i) => (
                <li key={i}>{`Day ${day.day}: ${day.text}`}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {tour.images &&
                tour.images.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:9980/${img.path}`}
                    alt={img.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                ))}
            </div>

            <div className="mt-4 flex justify-between">
              <button className="btn-blue-sm" onClick={() => edit(tour)}>
                Edit
              </button>
              <button className="btn-red-sm" onClick={() => delU(tour.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
