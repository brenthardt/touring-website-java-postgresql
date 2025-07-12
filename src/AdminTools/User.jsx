/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", password: "" });
  const [editingId, setEditingId] = useState(null);
  const [warning, setWarning] = useState("");
  const token = localStorage.getItem("token");
  const currentRole = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const axiosWithAuth = axios.create({
    baseURL: "http://localhost:9980",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const fetchUsers = async (page = 0) => {
    const res = await axiosWithAuth.get(`/users?page=${page}&size=${pageSize}`);
    setUsers(res.data.content);
    setTotalPages(res.data.totalPages);
    setCurrentPage(res.data.number);
  };

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => setWarning(""), 3000);
      return () => clearTimeout(timer);
    }
    fetchUsers();
  }, [warning]);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save = async () => {
    if (currentRole !== "ROLE_ADMIN") {
      setWarning("Only ADMINs can add/update user.");
      setForm({ name: "", phone: "", password: "" });
      return;
    }
    if (editingId) {
      await axiosWithAuth.put(`/users/${editingId}`, form);
    } else {
      await axiosWithAuth.post("/users", form);
    }
    setForm({ name: "", phone: "", password: "" });
    setEditingId(null);
    fetchUsers();
  };

  const edit = (user) => {
    if (currentRole !== "ROLE_ADMIN") {
      setWarning("Only ADMINs can edit user.");
      return;
    }
    setForm({ name: user.name, phone: user.phone, password: user.password });
    setEditingId(user.id);
  };

  const eliminate = async (id) => {
    if (currentRole !== "ROLE_ADMIN") {
      setWarning("Only ADMINs can delete user.");
      return;
    }
    await axiosWithAuth.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <>
      {warning && <div className="text-danger mt-2 text-center">{warning}</div>}
      <div className="d-flex justify-content-start px-4">
        <div
          className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
          style={{
            width: "60px",
            height: "60px",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
          title={name}
        >
          {name}
        </div>
      </div>

      <h5 className="text-center">Users</h5>
      <div className="container mt-4 text-center d-flex justify-content-center">
        <div className="w-25 mx-auto">
          <div className="mt-2">
            <input
              className="form-control"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={change}
            />
          </div>
          <div className="mt-2">
            <input
              className="form-control"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={change}
            />
          </div>
          <div className="mt-2">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={change}
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-secondary w-100" onClick={save}>
              {editingId ? "Update User" : "Add User"}
            </button>
          </div>
        </div>

        <table className="table table-bordered w-50 mx-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              {/* <th>Password</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) => u.name.toLowerCase() !== "admin")
              .map((u, i) => (
                <tr key={u.id}>
                  <td>{i + 1}</td>
                  <td> {u.name}</td>
                  <td>{u.phone}</td>
                  {/* <td>{u.password}</td> */}
                  <td>
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => edit(u)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => eliminate(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 0 && "disabled"}`}>
              <button
                type="button"
                className="page-link"
                onClick={() => fetchUsers(currentPage - 1)}
              >
                previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${index === currentPage ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="page-link"
                  onClick={() => fetchUsers(index)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages - 1 && "disabled"
              }`}
            >
              <button
                type="button"
                className="page-link"
                onClick={() => fetchUsers(currentPage + 1)}
              >
                next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default User;
