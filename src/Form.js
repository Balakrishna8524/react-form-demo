import React, {useState} from "react";

const Form = () => {
	const [formData, setFormData] = useState({
		name:"",
		email:"",
	});


	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const {name,value} = e.target;
		setFormData(prev=>({...prev,[name]:value}));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		try{
			const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
				method:"POST",
				headers:{ "Content-Type": "application/json"},
				body: JSON.stringify(formData)
			});
			//console.log(res);
			const data = await res.json();
			setResponse(data)
			setError(null);
		}catch(err){
			setError("Error submitting form.");
			setResponse(null);
		}
	}


	return(
		<div style={{maxWidth:"400px", margin:"auto"}}>
			<h2>Contact Form</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<br />
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
		</div>
	)
}

export default Form;