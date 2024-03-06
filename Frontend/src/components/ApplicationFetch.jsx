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


	const handleSubmit = (ev) => {
		ev.preventDefault();

		const course_id = ev.target.madar.value;
		const student_id = uni_ID;
		const app_status = "Pending";
		const alert_msg = document.getElementById('notification');

		axios.post("http://localhost:3000/api/application/add", {

			course_id: course_id,
			student_id: student_id,
			app_status: app_status

		})
			.then((response) => {
				if (response.status === 200) 
				{

					alert_msg.innerHTML = `
						<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">Applied Successfully</span>
							</div>
						</div>
					`
				}
				else
				{

					alert_msg.innerHTML = `
						<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">${response.data.message}</span>
							</div>
						</div>
					`
				}	
			})
	}



	return (
		<div className="mt-[80px] px-[2rem]">
			<div id="notification" className="relative z-10 flex justify-center items-center"></div>

			<div className="w-full mx-auto relative overflow-x-auto z-0">
				<form onSubmit={handleSubmit}>
					<table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="w-full text-xl text-white uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="w-[8%] px-6 py-3">
									No.
								</th>
								<th scope="col" className="w-[40%] px-6 py-3">
									Universities
								</th>
								<th scope="col" className="w-[20%] px-6 py-3">
									Course Info
								</th>
								<th scope="col" className="w-[20%] px-6 py-3">
									Course Fees
								</th>
								<th scope="col" className="w-[20%] px-6 py-3">
									Admission Process
								</th>
								<th scope="col" className="w-[20%] px-6 py-3">
									Ranking
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
											<div className="font-large text-gray-900 whitespace-nowrap dark:text-white">
												{items.University_Name}
												<div className="flex flex-col">
													<div className="font-medium text-gray-700">{items.University_Location}</div>
													<div className="font-medium text-gray-700">Description : {items.Description}</div>
												</div>
											</div>
										</th>
										<td className="px-6 py-4">
											<div className="font-large text-gray-900 whitespace-nowrap dark:text-white">
												<div className="flex flex-col">
													<div className="font-medium text-gray-700">{items.Course_Name}</div>
													<div className="font-medium text-gray-700">Description : {items.Course_Description}</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4">
											<div className="font-large text-gray-900 whitespace-nowrap dark:text-white">
												
												<div className="text-red-600 ">₹{items.Course_Fees}</div>

												<div className="flex flex-col">
													<div className="font-medium text-gray-700">Duration : {items.Course_Duration} Years</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4">
											<div className="font-large text-gray-900 whitespace-nowrap dark:text-white">
												{items.University_AdmissionProcess}
											</div>
										</td>
										<td className="px-6 py-4">
											<div className="font-large text-gray-900 whitespace-nowrap dark:text-white">
												{items.University_Ranking}
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
