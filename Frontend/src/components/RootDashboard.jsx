import axios from "axios";
import React from "react";
import { useEffect } from "react";

const RootDashboard = () => {

	async function university()
	{
		axios.get("http://localhost:3000/api/root/fetch/university")

			.then((response) => {
				const uni = response.data.output;

				// console.log(uni)
				const unibody = document.getElementById('tbody2');

				const handelMap = uni.map((item) => (
					`
					<tr class="bg-[--background] border-b text-white border-gray-700">
						<th scope="row" class="px-6 py-4">
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
					</tr>
					`
				))

				unibody.innerHTML = handelMap.join(''); 

				console.log(uni)
			})
	}

	async function country()
	{
		axios.get("http://localhost:3000/api/root/fetch/country")

			.then((response) => {
				const uni = response.data.output;

				// console.log(uni)
				const unibody = document.getElementById('tbody3');

				const handelMap = uni.map((item) => (
					`
					<tr class="bg-[--background] border-b text-white border-gray-700">
						<th scope="row" class="px-6 py-4">
							${item.Country}
						</th>
						<td class="px-6 py-4">
							${item.Description}
						</td>
					</tr>
					`
				))

				unibody.innerHTML = handelMap.join(''); 

				console.log(uni)
			})
	}

	async function courses()
	{
		axios.get("http://localhost:3000/api/root/fetch")

			.then((response) => {
				const uni = response.data.output;

				// console.log(uni)
				const unibody = document.getElementById('tbody1');

				const handelMap = uni.map((item) => (
					`
					<tr class="bg-[--background] border-b text-white border-gray-700">
						<th scope="row" class="px-6 py-4">
							${item.University_Name}
						</th>
						<td class="px-6 py-4">
							${item.University_Location}
						</td>
						<td class="px-6 py-4">
							${item.Course_Name}
						</td>
						<td class="px-6 py-4">
							${item.Course_Description}
						</td>
						<td class="px-6 py-4">
							${item.Course_Duration} Years
						</td>
						<td class="px-6 py-4">
							${item.Course_Fees}
						</td>
						<td class="px-6 py-4">
							${item.Course_Status}
						</td>
					</tr>
					`
				))

				unibody.innerHTML = handelMap.join(''); 

				console.log(uni)
			})
	}

	useEffect(() => {
		courses();
		university();
		country();
	}, [])

	return (
		<>
			<section className="w-full h-screen flex flex-col gap-16">

				<div>
					<h3 className="text-3xl px-20 py-5">University Courses</h3>
					<div className="w-[80dvw] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
						<a href="/root/courses" ><button className="px-4 py-2 my-3 bg-blue-400 text-white rounded-lg">Add</button></a>
						<table className="w-full text-sm text-left rtl:text-right bg-[--background]">
							<thead className="text-l text-white uppercase bg-[--bg] bg-[--primary]">
								<tr>
									<th scope="col" className="px-6 py-3">
										University Name
									</th>
									<th scope="col" className="px-6 py-3">
										Location
									</th>
									<th scope="col" className="px-6 py-3">
										Course Name
									</th>
									<th scope="col" className="px-6 py-3">
										Course Description
									</th>
									<th scope="col" className="px-6 py-3">
										Course Duration
									</th>
									<th scope="col" className="px-6 py-3">
										Course Fees
									</th>
									<th scope="col" className="px-6 py-3">
										Course Status
									</th>
									
								</tr>
							</thead>
							<tbody id="tbody1">
							</tbody>
						</table>
					</div>
				</div>

				<div>
					<h3 className="text-3xl px-20 py-5">University</h3>
					<div className="w-[80dvw] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
						<a href="/root/university" ><button className="px-4 py-2 my-3 bg-blue-400 text-white rounded-lg">Add</button></a>
						<table className="w-full text-sm text-left rtl:text-right bg-[--background]">
							<thead className="text-l text-white uppercase bg-[--bg] bg-[--primary]">
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
									
								</tr>
							</thead>
							<tbody id="tbody2">
							</tbody>
						</table>
					</div>
				</div>

				<div>
					<h3 className="text-3xl px-20 py-5">Country</h3>
					<div className="w-[80dvw] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
						<a href="/root/country" ><button className="px-4 py-2 my-3 bg-blue-400 text-white rounded-lg">Add</button></a>
						<table className="w-full text-sm text-left rtl:text-right bg-[--background]">
							<thead className="text-l text-white uppercase bg-[--bg] bg-[--primary]">
								<tr>
									<th scope="col" className="px-6 py-3">
										Name
									</th>
									<th scope="col" className="px-6 py-3">
										Description
									</th>
									
								</tr>
							</thead>
							<tbody id="tbody3">
							</tbody>
						</table>
					</div>
				</div>

			</section>
		</>
	)
}

export default RootDashboard;
