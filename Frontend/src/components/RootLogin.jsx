// Login Form Component
// doing POST request using axios for the first time
import axios from "axios";


const handelSubmit = (event) => {
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
					<div class="fixed top-16 bg-green-100 w-full border border-red-400 text-green-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Verification Successfull</span>
						</div>
					</div>
				`

				window.location = "/root/dashboard";
			}
			else
			{
				alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Wrong Credentials</span>
						</div>
					</div>
				`
			}
		})
		.catch((error) => {
			alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Wrong Credentials</span>
						</div>
					</div>
				`
		});
}


const LoginForm = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div id="notification" className="relative z-10 flex justify-center items-center"></div>

			<div className="w-full max-w-sm max-h-full">
				<form className="shadow-[--primary] shadow-md border border-[--primary] rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={handelSubmit}>
					<div className="w-full text-white mb-3 flex justify-between items-center">
						<div>
							
							<a href="/root" className="mx-1 text-[--primary] underline">Sign in</a>
						</div>
						<h4 className="text-xl font-semibold">Root Login</h4>
					</div>
					<div className="mb-4">
						<label className="block text-white text-sm font-bold mb-2">
							Username
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
					</div>
					<div className="mb-6">
						<label className="block text-white text-sm font-bold mb-2">
							Password
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
					</div>
					<div className="flex items-center justify-between">
						<button className="bg-[--primary] hover:bg-[--primary-400] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Sign In
						</button>
						<a className="inline-block align-baseline font-bold text-sm text-[--primary-color] hover:text-[--primary-color]" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm;
