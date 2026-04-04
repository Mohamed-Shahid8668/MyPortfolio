import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/messages");
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/messages/${id}`);
      fetchMessages(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="admin">
      <h2>📩 Messages Dashboard</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => deleteMessage(msg.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;