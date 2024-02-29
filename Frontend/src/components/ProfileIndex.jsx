// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect } from "react";
import axios from "axios";
import "../components/LoginForm";
import img1 from "../assets/img/img1.jpg";


const ProfilePanel = () => {

	useEffect(() => {

		axios.post("http://localhost:3000/api/student/account/details/fetch",{
			user: sessionStorage.getItem("Id")
		})

		.then((response) => {
			const res = response.data.output;

			console.log(res);

				const main = res.Student_DOB;

				const item = document.getElementById("thisitem");
				const item2 = document.getElementById("image");

				item.innerHTML = `
					<div className="flex justify-center items-center">
						<div className="first">${res.Student_FirstName}</div>
						<div className="first">${res.Student_LastName}</div>
						<div className="first">${res.Student_DOB}</div>
						<div className="first">${res.Student_Address}</div>
					</div>
				`
				item2.innerHTML = `
					<div className="flex justify-center items-center">
						<img src={res.} alt="" />
					</div> 
				`
		})

	}, []);

	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]">
			<div className="w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl" >
				<div className="w-[30%] h-full flex justify-center items-center">
					<div id="image" className="w-[300px] h-[300px] flex justify-center items-center ">
					</div>
				</div>

				<div className="w-[50%] h-full p-8 ">
					<div id="thisitem" className="w-[80%] h-full px-8 flex flex-col justify-center">
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePanel;
