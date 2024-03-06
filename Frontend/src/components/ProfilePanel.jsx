// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect } from "react";
import axios from "axios";
import "../components/LoginForm";
import img1 from "../assets/img/img1.jpg";


const ProfilePanel = () => {

	const handelSubmit = (event) => {
		event.preventDefault();

		const first_name = event.target.first_name.value
		const last_name = event.target.last_name.value
		const dob = event.target.dob.value
		const address = event.target.address.value
		const image = event.target.image.value	
		const user = sessionStorage.getItem("Id");

		console.log(image)

		axios.post("http://localhost:3000/api/student/account/details/add", {
			first_name: first_name,
			last_name: last_name,
			dob: dob,
			address: address,
			image: image,
			user: user
		})

			.then((response) => {
				console.log(response)
			})
	}

	useEffect(() => {

		axios.post("http://localhost:3000/api/student/account/details/fetch",{
			user: sessionStorage.getItem("Id")
		})

		.then((response) => {
			const data = response.data.output.Student_ProfilePic;

			console.log(data)

			const test = document.getElementById("Test");

			test.innerHTML = `<img src=${data} alt="profile"/>`;
			// console.log(response)
		})

	}, []);

	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-[80dvh] mx-auto flex justify-center items-center rounded-[20px] shadow-[--primary] shadow-md" >
				<div className="w-[30%] h-full flex justify-center items-center">
					<div className="w-[300px] h-[300px] flex justify-center items-center ">
						<img id="img" className="rounded-full w-[200px] h-[200px] border-[5px]" src={img1.src} alt="profile pic" />
					</div>
				</div>

				<div className="w-[50%] h-full p-8 ">
					<form className="w-[80%] h-full px-8 flex flex-col justify-center" encType="multipart/form-data" onSubmit={handelSubmit} >
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								First name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="First name" />
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Last name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="Lastname" />
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Date of birth
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" placeholder="Dob" />
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Address
							</label>
							<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="" placeholder="Address" rows={5}></textarea>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Profile Picture
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="photo link" />
						</div>
						<div className="flex items-center justify-start gap-8">
							<button className="bg-[--primary] text-[--background] hover:bg-[--primary-500] hover:text-[--text] transition-colors font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
							<button className="bg-gray-500 hover:bg-gray-700 hover:text-[--text] text-[--background] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ProfilePanel;
