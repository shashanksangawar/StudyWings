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

			{data.map((item) => (
				`
				<div className="flex flex-col gap-4 justify-center items-center text-xl">
					<div className="bg-sky-500  text-white">${item.Student_Name}</div>
					<div>${item.Course_Name}</div>
					<div>${item.Description}</div>
					<div>${item.Start_date}</div>
					<div>${item.End_date}</div>
					<div>${item.Status}</div>
				</div>
				`
			))}
		</div>
	);
}

export default StudentInfo;
