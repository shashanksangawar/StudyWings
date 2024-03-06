// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/LoginForm";
// import StudentInfo from "../components/ApplicationInfo";

const ProfilePanel = () => {

	const [res, setResponse] = useState([]);
	//
	useEffect(() => {
		
			const fetchdata = async () => 
			{
		
				const user = parseInt(sessionStorage.getItem("Id"));
				const data = await axios.post("http://localhost:3000/api/student/account/details/fetch", {
					user: user
				})
				setResponse(data.data.output);
			}
		
		fetchdata();
	}, []);


	// const data = res.data.out;

	return (
		<div className="w-full h-auto mt-[3rem] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-auto mx-auto bg-[--background] flex gap-[3rem] flex-col justify-center items-center">
				<div className="w-full h-[30%] bg-[] text-[--text] flex justify-center items-center">
					<div className="w-[200px] h-auto flex justify-center items-center">
						<div id="profile" className="flex justify-center items-center border-black border">
							<img className="rounded-full" src={res.Student_ProfilePic} alt="this is image" />
						</div>
					</div>

					<div className="w-[50%] h-full p-8 ">
						<div id="thisitem" className="w-auto h-full px-8 flex justify-center bg-[--bg] p-8 rounded-xl">
							<div className="flex flex-col justify-center items-center gap-8 text-3xl">
								<div className="first text-center">{res.Student_FirstName}</div>
								<div className="first text-center">{res.Student_LastName}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full h-[80%]">
					<div className="flex flex-col justify-center p-4">
						{/* {
							res.map((items) =>(
								<>
								<div className="p-4 w-[80%]">
									<div className="text-xl">{items.name}</div>
									<div className="text-sm pb-3">{items.email}</div>
									<div className="text-xl px-3">{items.body}</div>
									<span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-800 bg-blue-400 uppercase last:mr-0 mr-1">Accepted</span>
								</div>
								<hr />
								</>
							))
						} */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePanel;
