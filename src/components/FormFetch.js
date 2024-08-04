// src/components/FormFetch.js
import React, { useState } from "react";

const FormFetch = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Failed to submit with fetch" });
    }
  };

  return (
    <div>
      <h2>Form Submit using Fetch</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br />
        <button type="submit">Submit</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default FormFetch;
