import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Protected/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ phone: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sub = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9980/users/login", form);
      const { token, role } = res.data;
      login(token, role);
      localStorage.setItem("name", res.data.name);
      navigate("/user");
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="container mt-5 w-25 text-center">
      <h5>Login</h5>
      <form onSubmit={sub}>
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-control"
            value={form.phone}
            onChange={change}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={form.password}
            onChange={change}
            required
          />
        </div>
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
};

export default Login;
