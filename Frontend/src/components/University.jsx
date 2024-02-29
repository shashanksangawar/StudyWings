// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect } from "react";
import axios from "axios";
import "../components/LoginForm";
// import img1 from "../assets/img/img1.jpg";


const UniversityPage = () => {

	const handelSubmit = (event) => {
		event.preventDefault();

		const name = event.target.name.value
		const location = event.target.location.value
		const description = event.target.description.value
		const ranking = event.target.ranking.value
		const admission_process = event.target.admission_process.value	


		axios.post("http://localhost:3000/api/root/add/university", {
			name: name,
			location: location,
			description: description,
			ranking: ranking,
			admission_process: admission_process
		})

			.then((response) => {
				console.log(response)
			})
	}

	useEffect(() => {

		// axios.post("http://localhost:3000/api/student/account/details/fetch",{
		// 	user: sessionStorage.getItem("Id")
		// })
		//
		// .then((response) => {
		// 	const data = response.data.output.Student_ProfilePic;
		//
		// 	console.log(data)
		//
		// 	const test = document.getElementById("Test");
		//
		// 	test.innerHTML = `<img src=${data} alt="profile"/>`;
		// 	// console.log(response)
		// })

	}, []);

	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]">
			<div className="w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl" >

				<div className="w-[50%] h-full p-8 flex justify-center items-center ">
					<form className="w-[80%] h-full px-8 flex flex-col justify-center" encType="multipart/form-data" onSubmit={handelSubmit} >
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Location
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Description
							</label>
							<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="date" placeholder="Description" rows={4}></textarea>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Ranking
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ranking" type="text" placeholder="Ranking" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Admission Process
							</label>
							<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="admission_process" type="text" placeholder="Admission Process" rows={4}></textarea>
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

export default UniversityPage;
