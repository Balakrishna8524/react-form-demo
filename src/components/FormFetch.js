

import React, {useState} from "react";

const FormFetch = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        header:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      setResponse(data);
      setError(null);
      setLoading(false);

    } catch(err) {
      setResponse({error: "Failed to submit with fetch: "+ err});
      setError("Error submitting form.");
      setLoading(false);
    }

  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({...prev,[name]:value}));
  }


  return(
    <>
      <h2>Form Submit using Fetch</h2>

      {loading && (<><br/><br/>Loading...</>)}
      {!loading && (
        <>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /> <br/>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /> <br/>
          <button type="submit">Submit</button>
        </form>

        {response && (
          <div style={{marginTop:"20px", color:"green"}}>
            <strong>Form submitted successfully!</strong>
            <pre>{JSON.stringify(response,null,2)}</pre>
          </div>
        )}
        {error && (
          <div style={{marginTop:"20px", color:"red"}}>
            <strong>{error}</strong>
          </div>
        )}
        </>

      
      )}
      

    </>
  );

}

export default FormFetch;