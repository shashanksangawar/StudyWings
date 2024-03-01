// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/LoginForm";
import StudentInfo from "../components/ApplicationInfo";

const ProfilePanel = () => {

	const [data, setData] = useState([]);

	useEffect(() => {

		const fetchdata = async () => {

			const user = sessionStorage.getItem("Id");
			const res = await axios.post("http://localhost:3000/api/student/account/details/fetch", {
				user: user
			})
			setData(res.data.output);
		}

	// 	const vi = 3;
	// 	let id = sessionStorage.setItem("Id", vi)

		console.log()
		
		fetchdata();

	}, []);


	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]">
			<div className="w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl" >
				<div className="w-[40%] flex flex-col justify-center items-center">
					<div className="w-[40%] h-full flex justify-center items-center">
						<div id="profile" className="w-[300px] h-[300px] flex justify-center items-center ">
							<img src={data.Student_ProfilePic} alt="this is image" />
						</div>
					</div>

					<div className="w-[70%] h-full p-8 ">
						<div id="thisitem" className="w-[100%] h-full px-8 flex flex-col justify-center">
							<div className="flex flex-col justify-center items-center">
								<div className="first">First Name:{data.Student_FirstName}</div>
								<div className="first">Last Name:{data.Student_LastName}</div>
								<div className="first">DOB:{data.Student_DOB}</div>
								<div className="first">Address:{data.Student_Address}</div>
							</div>
						</div>
					</div>
				</div>

				<StudentInfo />

			</div>
		</div>
	);
}

export default ProfilePanel;
