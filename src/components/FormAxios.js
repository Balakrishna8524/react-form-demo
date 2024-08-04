// src/components/FormAxios.js
import React, { useState } from "react";
import axios from "axios";

const FormAxios = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: "Failed to submit with Axios" });
    }
  };

  return (
    <div>
      <h2>Form Submit using Axios</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br />
        <button type="submit">Submit</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default FormAxios;
