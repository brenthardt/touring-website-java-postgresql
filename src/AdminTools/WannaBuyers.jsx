import { useEffect, useState } from "react";
import axios from "axios";

const WannaBuyers = () => {
  const [users, setUsers] = useState([]);
  const [copiedPhone, setCopiedPhone] = useState(null);

  useEffect(() => {
    const fetchWannabuyers = async () => {
      try {
        const res = await axios.get("http://localhost:9980/users/wannabuyers");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching wannabuyers:", err);
      }
    };

    fetchWannabuyers();
  }, []);

  const handleCopy = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000); 
  };

  return (
    <div className="container mx-auto px-6 text-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Wannabuyers</h2>
      <table className="w-[50%] mx-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.phone}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleCopy(user.phone)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  {copiedPhone === user.phone ? "Copied" : "Copy"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WannaBuyers;
