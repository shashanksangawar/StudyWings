// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect } from "react";
import axios from "axios";
import "../components/LoginForm";
import img1 from "../assets/img/img1.jpg";


const ProfileDocument = () => {

	const handelSubmit = (event) => {
		event.preventDefault();

		const user = sessionStorage.getItem("Id")
		const doc_name = event.target.docname.value
		const image = event.target.docbuffer.value

		axios.post("http://localhost:3000/api/student/account/document/add", {
			user: user,
			doc_name: doc_name,
			image: image
		})

			.then((response) => {
				console.log(response)
			})
	}

	useEffect(() => {
		//
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
				<div className="w-[30%] h-full flex justify-center items-center">
					<div className="w-[300px] h-[300px] flex justify-center items-center ">
						<img id="img" className="rounded-full w-[200px] h-[200px] border-[5px] border-[#1d1d1b]" src={img1.src} alt="profile pic" />
					</div>
				</div>

				<div className="w-[50%] h-full p-8 ">
					<form className="w-[80%] h-full px-8 flex flex-col justify-center" encType="multipart/form-data" onSubmit={handelSubmit} >
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Document Name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="docname" type="text" placeholder="First name" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								File
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="docbuffer" type="text" placeholder="Lastname" />
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

export default ProfileDocument;
