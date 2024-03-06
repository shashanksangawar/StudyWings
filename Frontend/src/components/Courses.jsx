// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect, useRef } from "react";
import axios from "axios";
// import img1 from "../assets/img/img1.jpg";


const CoursesPage = () => {


	useEffect(() => {

		axios.get("http://localhost:3000/api/root/fetch/university")

			.then((response) => {
				console.log(response.data)

				const id1 = document.getElementById('university_id')

				const printUniversity = response.data.output.map((items) => (
					`
						<option value=${items.University_Id}>${items.University_Name}</option>
					`
				))

				id1.innerHTML = printUniversity;

			})
		
		axios.get("http://localhost:3000/api/root/fetch/country")

			.then((response) => {
				console.log(response.data)

				const id2 = document.getElementById('country_id')

				const printCountry = response.data.output.map((items) => (
					`
						<option value=${items.CountryId}>${items.Country}</option>
					`
				))

				id2.innerHTML = printCountry;

			})

	}, []);


	const handelSubmit = (event) => {
		event.preventDefault();

		const university_id = event.target.university_id.value
		const country_id = event.target.country_id.value
		const name = event.target.name.value
		const description = event.target.description.value
		const duration = event.target.duration.value
		const fees = event.target.fees.value
		const start_date = event.target.start_date.value
		const end_date = event.target.end_date.value
		const status = event.target.status.value
		const alert_msg = document.getElementById('notification');


		axios.post("http://localhost:3000/api/root/add/course", {
			university_id: university_id,
			country_id: country_id,
			name: name,
			description: description,
			duration: duration,
			fees: fees,
			start_date: start_date,
			end_date: end_date,
			status: status
			})

			.then((response) => 
			{
				if (response.status === 200) {

					alert_msg.innerHTML = `
						<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">Added Successfully</span>
							</div>
						</div>
					`
	
					window.location = "/root/dashboard";
				}
			})
	}

	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]">
			<div id="notification" className="relative z-10 flex justify-center items-center"></div>

			<div className="w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl" >

				<div className="w-[80%] h-full p-8 flex justify-center items-center ">
					<form className="w-[80%] h-full px-8 flex flex-col justify-center" encType="multipart/form-data" onSubmit={handelSubmit} >

						<div className="flex justify-around gap-8">
							<div className="container w-[50%]">
								<div id="uni_id" className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Select university
									</label>
									<select id="university_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									</select>
								</div>

								<div id="cont_id" className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Select country
									</label>
									<select id="country_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									</select>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										status
									</label>
									<select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
										<option value="Active">Active</option>
										<option value="Non Active">Non Active</option>
									</select>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										description
									</label>
									<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" rows={5}></textarea>
								</div>

							</div>
							<div className="container w-[50%]">
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Name
									</label>
									<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" rows={4} />
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										duration
									</label>
									<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="duration" type="number" placeholder="Duration"/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										fees
									</label>
									<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fees" type="text" placeholder="fees" rows={4} />
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										start date
									</label>
									<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_date" type="date" rows={4} />
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										end date
									</label>
									<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="end_date" type="date" />
								</div>
							</div>
						</div>
						<div className="flex items-center justify-start gap-8 mt-4">
							<button className="bg-gradient-to-r from-[--ui] to-[--bg] hover:bg-gradient-to-r hover:from-[--bg] hover:to-[--ui] transition-colors font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
							<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CoursesPage;
