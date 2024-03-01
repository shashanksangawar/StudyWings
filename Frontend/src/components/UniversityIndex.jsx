import axios from "axios";
import { useEffect, useState } from "react";

const UniversityIndex = () => {

	const [data, setData] = useState([]);


	useEffect(() => {
		const fetchdata = async () => {
			const university_id = parseInt(sessionStorage.getItem("uni_id"))
			// const university_id = 1
			const res = await axios.post("http://localhost:3000/api/application/fetch/admin", {
				university_id: university_id
			})
			setData(res.data.output)
		}

		fetchdata();		
	}, [])

	console.log(data);

	return (
		<div className="container mx-auto">
			<div className="mt-[100px]">
				<div className="w-full mx-auto relative overflow-x-auto z-0">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xl text-gray-700 uppercase bg-[--bg] dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Student Name
								</th>
								<th scope="col" className="px-6 py-3">
									University name
								</th>
								<th scope="col" className="px-6 py-3">
									Course name
								</th>
								<th scope="col" className="px-6 py-3">
									duration
								</th>
							</tr>
						</thead>
						<tbody className="text-xl">
							{
								data.map((item)=>(	
									<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
										<th scope="row" className="px-6 py-4 font-medium text-black">
											{item.Student_FirstName} {item.Student_LastName}
										</th>
										<td className="px-6 py-4">
											Yashu yasu
										</td>
										<td className="px-6 py-4">
											test
										</td>
										<td className="px-6 py-4">
										</td>
									</tr>
								))
								
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UniversityIndex;
