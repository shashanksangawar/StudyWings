import axios from "axios";
import { useEffect, useState } from "react";
import "../components/LoginForm"

const ApplicationFetch = () => {

	const [data, setData] = useState([]);
	let count = 0;
	const uni_ID = 2;

	useEffect(() => {

		const fetchdata = async () => {
			const res = await axios("http://localhost:3000/api/root/fetch")
			setData(res.data.output);
		}

		fetchdata();
	}, [])

	console.log(uni_ID)

	const handleSubmit = (ev) => {
		ev.preventDefault();

		const course_id = ev.target.madar.value;
		const student_id = uni_ID;
		const app_status = "huluhulhu";

		axios.post("http://localhost:3000/api/application/add", {

			course_id: course_id,
			student_id: student_id,
			app_status: app_status

		})
			.then((response) => {
				console.log(response.data)
			})
	}



	return (
		<div className="mt-[80px] px-[2rem]">

			<div className="w-full mx-auto relative overflow-x-auto">
				<form onSubmit={handleSubmit}>
					<table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="w-full text-xl text-white uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="w-[8%] px-6 py-3">
									No.
								</th>
								<th scope="col" className="w-[44%] px-6 py-3">
									Universities
								</th>
								<th scope="col" className="w-[20%] px-6 py-3">
									Course Info
								</th>
								<th scope="col" className="w-[20%] px-6 py-3">
									Admission Process
								</th>
								<th scope="col" className="w-[8%] px-6 py-3">
								</th>
							</tr>
						</thead>
						<tbody className="text-xl">
							{
								data.map((items) => (
									< tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
										<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<div className="">
												{count = count + 1}
											</div>
										</td>
										<th className="px-6 py-4">
											<div className="">
												{items.University_Name}
												<div className="flex flex-col">
													<div>Description : {items.Description}</div>
													<div className="text-md inline-flex items-center text-yellow-300"><i className="bi bi-arrow-right"></i> Apply now</div>
												</div>
											</div>
										</th>
										<td className="px-6 py-4">
											<div>
												{items.Course_Name}
											</div>
										</td>
										<td className="px-6 py-4">
											<div>
												{items.University_AdmissionProcess}
											</div>
										</td>
										<td className="px-6 py-4">
											<div>
												<input id="madar" type="radio" name="madar" value={items.Course_Id} />

											</div>
										</td>
									</tr>
								))
							}

						</tbody>
					</table>
					<div className="fixed top-[90px] right-[80px]">
						<button className="px-4 py-2 bg-red-800 text-white rounded-md" type="submit">Next</button>
					</div>
				</form>
			</div>

		</div >
	);
}

export default ApplicationFetch;
