// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect } from "react";
import axios from "axios";
import "../components/LoginForm";
// import img1 from "../assets/img/img1.jpg";


const CountryPage = () => {

	const handelSubmit = (event) => {
		event.preventDefault();

		const country = event.target.country.value
		const description = event.target.description.value


		axios.post("http://localhost:3000/api/root/add/country", {
			country: country,
			description: description,
		})

			.then((response) => {
				console.log(response)
			})
	}

	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]">
			<div className="w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl" >

				<div className="w-[50%] h-full p-8 flex justify-center items-center ">
					<form className="w-[80%] h-full px-8 flex flex-col justify-center" encType="multipart/form-data" onSubmit={handelSubmit} >
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Country Name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Name" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Description
							</label>
							<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" rows={4}></textarea>
						</div>
						<div className="flex items-center justify-start gap-8">
							<button className="bg-gradient-to-r from-[--ui] to-[--bg] hover:bg-gradient-to-r hover:from-[--bg] hover:to-[--ui] transition-colors font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
							<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CountryPage;
