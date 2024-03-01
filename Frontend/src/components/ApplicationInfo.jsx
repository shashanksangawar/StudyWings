import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentInfo = () =>{
	
	const [data, setData] = useState([]);

	useEffect(() =>{
	
		const fetchinfo = async () =>{

			const student_id = sessionStorage.getItem("Id");

			console.log(student_id)

			const res = await axios.post("http://localhost:3000/api/application/fetch",{
				student_id: student_id
			})
			setData(res.data.output);
		}

		fetchinfo();

	}, []);


	return(
		<div className="w-[60%]">
			<div class="flex flex-col gap-4 justify-center items-center text-xl">

				{data.map((item) => (
					`
						<div class="bg-sky-500  text-white">${item.University_Name}</div>
						<div>${item.Course_Name}</div>
						<div>${item.Description}</div>
						<div>${item.Application_Status}</div>
					`
				))}
			</div>

		</div>
	);
}

export default StudentInfo;
