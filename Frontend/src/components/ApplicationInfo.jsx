import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentInfo = () =>{
	
	const [data, setData] = useState([]);
	// const [student_id, setId] = useState(0);

	useEffect(() =>{
	
		const fetchinfo = async () =>{

			const student_id = parseInt(sessionStorage.getItem("Id"));
			// if (!isNaN(stu_id)) {
			// 	setId(stu_id)
			// }

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
			<div className="flex flex-col gap-4 justify-center items-center text-xl">
				<div className="bg-sky-500  text-white">{data.Student_Name}</div>
				<div>{data.Course_Name}</div>
				<div>{data.Description}</div>
				<div>{data.Start_date}</div>
				<div>{data.End_date}</div>
				<div>{data.Status}</div>
			</div>
		</div>
	);
}

export default StudentInfo;
