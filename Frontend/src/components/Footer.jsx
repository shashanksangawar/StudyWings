const Footer = () => {
	return <footer className="py-3 bg-[--primary-800] h-[70px] my-8 px-8 rounded-xl flex justify-between items-center">
		<div className="text-center">
			<span className="text-white">Copyright © StudyWings 2024</span>
		</div>
		<div className="links inline-flex gap-4">
			<div className="flex items-center gap-4">
				<a href="/" className="text-white">Home</a>
				<a href="/profile" className="text-white">Profile</a>
				<a href="/register" className="text-white">Login</a>
			</div>
			<span className="px-2">|</span>
			<a href="#" className="text-white">Terms of Use</a>
		</div>
	</footer>
};

export default Footer;