// Login Form Component
// doing POST request using axios for the first time
import axios from "axios";


const handelSubmit = (event) =>{
	event.preventDefault();
	
	const username = event.target.username.value;
	const password = event.target.password.value;

	const alert_msg = document.getElementById('notification');

	axios
		.post("http://localhost:3000/api/root/login", {
			username: username,
			password: password
		})

		
		.then((response) => {

			console.log(response.statusText)

			if (response.status === 200) {
				
				alert_msg.innerHTML = `
					<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Verification Successfull</span>
						</div>
					</div>
				`
				
				// window.location = "/";
			}
		})
		.catch((error) => {
			console.error(error);
		});
}


const LoginForm = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="w-full max-w-sm max-h-full">
				<form className="bg-white shadow-lg border border-gray-500 rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={handelSubmit}>
					<div className="w-full text-gray-700 mb-3">
						<a href="/register" className="mx-1 text-[--primary-color] underline">Sign up </a>
						<span className="">/</span>
						<a href="/login" className="mx-1 underline">Sign in</a>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Username
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Password
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
					</div>
					<div className="flex items-center justify-between">
						<button className="bg-gradient-to-r from-[--bg] to-[--ui] hover:bg-gradient-to-r hover:from-[--ui] hover:to-[--bg] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Sign In
						</button>
						<a className="inline-block align-baseline font-bold text-sm text-[--primary-color] hover:text-[--primary-color]" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
				<div id="notification" className="relative z-10 flex justify-center items-center"></div>
			</div>
		</div>
	)
}

export default LoginForm;
