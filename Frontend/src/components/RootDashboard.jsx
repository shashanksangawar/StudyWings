import axios from "axios";
import React from "react";
import { useEffect } from "react";

const RootDashboard = () => {

	useEffect(() => {

		axios.get("http://localhost:3000/api/root/fetch/university")

			.then((response) => {
				const uni = response.data.output;

				// console.log(uni)
				const unibody = document.getElementById('tbody1');

				const handelMap = uni.map((item) => (
					`
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							${item.University_Name}
						</th>
						<td class="px-6 py-4">
							${item.University_Location}
						</td>
						<td class="px-6 py-4">
							${item.Description}
						</td>
						<td class="px-6 py-4">
							${item.University_Ranking}
						</td>
						<td class="px-6 py-4">
							${item.University_AdmissionProcess}
						</td>
						<td class="px-6 py-4 text-right">
							<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					`
				))

				unibody.innerHTML = handelMap.join(''); 

				console.log(uni)
			})

	}, [])

	return (
		<>
			<section className="w-full h-screen">

				<div>
					<h3 className="text-3xl px-8 py-5">University</h3>
					<div className="w-[80dvw] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
						<a href="/root/university" ><button className="px-4 py-2 my-3 bg-blue-400 text-white rounded-lg">Add</button></a>
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										Name
									</th>
									<th scope="col" className="px-6 py-3">
										Location
									</th>
									<th scope="col" className="px-6 py-3">
										Description
									</th>
									<th scope="col" className="px-6 py-3">
										Ranking
									</th>
									<th scope="col" className="px-6 py-3">
										Admission Process
									</th>
									<th scope="col" className="px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody id="tbody1">
							</tbody>
						</table>
					</div>
				</div>

			</section>
		</>
	)
}

export default RootDashboard;
