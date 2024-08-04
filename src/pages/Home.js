import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
	return(
		
		<ul>
		
			<li>
				<Link to="/form-fetch"> Form using fetch </Link>
			</li>
			<li>
				<Link to="/form-axios"> Form using Axios</Link>
			</li>
		
		</ul>
	)
}

export default Home;