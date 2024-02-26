// Profile Panel using Reactjs
// doing POST request using axios for the first time
import axios from "axios";

const handelSubmit = (event) =>{
	event.preventDefault();

	const first_name = event.target.first_name.value
	const last_name = event.target.last_name.value
	const dob = event.target.dob.value
	const address = event.target.address.value
	const image = event.target.pic.value
	const userid = event.target.userid.value

	axios.post("http://localhost:3000/api/student/account/details/add", {
		first_name:	first_name,
		last_name: last_name,
		dob: dob,
		address: address,
		image: image,
		userid: userid,
	})
}

const ProfilePanel = () =>{
	return (
		<div className="w-full h-[100dvh] flex justify-center items-center">
	        <div className="w-[20dvw] h-[92dvh] fixed z-0 left-0 top-[8dvh] border-r border-gray-500">
				<div className="h-full flex flex-col justify-between items-center px-2 py-8">
					<div className="w-[15dvw] h-[30dvh] mb-6 border-b-2 border-white flex justify-center items-center">
						<div className="w-[100px] h-[100px] bg-[--primary-color] rounded-full flex justify-center items-center">
							<span className="font-bold text-2xl">User</span>
						</div>
					</div>
					<div className="h-[70dvh] flex flex-col items-center gap-4">
					    <a href="/profile">
							<span className="block w-[15dvw] p-3 bg-[--primary-color] text-white text-xl font-bold hover:bg-blue-400 rounded-lg">Profile</span>
						</a>
					    <a href="/profile/documents">
							<span className="block w-[15dvw] p-3 bg-[--primary-color] text-white text-xl font-bold hover:bg-blue-400 rounded-lg">Add Documents</span>
						</a>
					</div>
					<span className="block w-[15dvw] p-3 bg-[--primary-color] hover:bg-blue-400 text-white text-xl font-bold rounded-lg">Logout</span>
				</div>
			</div>
	        <div className="w-[80dvw] h-[100dvh] ml-[20dvw] p-8">
				<form className="w-[80%] h-full mx-auto px-8 flex flex-col justify-center" action="">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							First name
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="First name" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Last name
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="Lastname" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Date of birth
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" placeholder="Dob" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Address
						</label>
						<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="" placeholder="Address" rows={5}></textarea>
					</div>
					<div>
						<label className="label" htmlFor="userid"></label>
						<input type="hidden" name="userid" id="userid" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Profile Picture
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pic" type="file" placeholder="profilepic" />
					</div>
					<div className="flex items-center justify-start gap-8">
						<button className="bg-[--primary-color] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
						<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">Cancel</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ProfilePanel;
