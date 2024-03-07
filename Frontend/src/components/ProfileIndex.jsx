// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/LoginForm";
// import StudentInfo from "../components/ApplicationInfo";

const ProfilePanel = () => {

	const [res, setResponse] = useState([]);
	const [docus, setDocus] = useState([]);
	//
	const fetchdata = async () => {
		try {
			const user = parseInt(sessionStorage.getItem("Id"));
			const data = await axios.post("http://localhost:3000/api/student/account/details/fetch", {
				user: user
			})
			setResponse(data.data.output);
		}
		catch (error) {
			window.location.href = "/profile/add";
		}
	}

	const fetchdoc = async () => {
		try {
			const user = parseInt(sessionStorage.getItem("Id"));
			const docs = await axios.post("http://localhost:3000/api/student/account/document/fetch", {
				user: user
			})
			setDocus(docs.data.output);
		}
		catch (error) {
			alert("No Documents Found");
			window.location.href="/profile/documents"
		}
	}

	useEffect(() => {
		fetchdata();
		fetchdoc();
	}, []);


	// const data = res.data.out;

	return (
		<div className="w-full h-auto my[3rem] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-auto mx-auto my-[3rem] bg-[--background] flex gap-[3rem] flex-col justify-center items-center">
				<div className="w-full h-[30%] bg-[] text-[--text] flex justify-center items-center">
					<div className="w-[300px] h-[300px] flex justify-center items-center">
						<div id="profile" className="flex justify-center items-center ">
							<img className="w-[400px] rounded-full border-black border" src={res.Student_ProfilePic} alt="this is image" />
						</div>
					</div>

					<div className="w-[50%] h-full p-8 ">
						<div id="thisitem" className="w-auto h-full px-8 flex justify-center bg-[--bg] p-8 rounded-xl">
							<div className="flex flex-col justify-center items-center gap-8 text-3xl">
								<div className="first text-center">{res.Student_FirstName} {res.Student_LastName}</div>
								{/* <a href="/profile/update"><button className="px-4 py-2 my-3 bg-blue-600 text-sm text-white rounded-lg">Update Profile</button></a> */}

							</div>
						</div>
					</div>
				</div>

				<div className="w-full shadow-[--primary] shadow-md border border-[--primary] rounded-3xl">
					<div id="thisitem" className="w-auto h-full px-16 flex m-4 rounded-xl">
						<div className="flex flex-col justify-center items-center gap-8 text-3xl">
							<h1>Documents</h1>
							{
								docus.map((items) =>
								(
									<div className="flex flex-col justify-center items-center">
										<div className="first text-center text-2xl">{items.Student_DocumentName}</div>
										<img className="w-[200px]" src={items.Student_Document} alt="Document" />

									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePanel;