//Main page
import "../assets/styles/index.css"

const App = () => {

	return (
		<>
			<section className="hero w-full h-[92dvh] flex flex-col justify-evenly items-center">
				<div className="bg-gradient-to-r from-[--accent] to-[--primary] p-[2.5px] rounded-[40px]">
					<div className="w-[900px] bg-[--background] p-4 flex flex-col justify-center items-center rounded-[40px]">
						<h1 className="text-8xl font-extrabold text-center leading-loose text-transparent bg-clip-text bg-gradient-to-r from-[--primary] to-[--accent]">StudyWings</h1>
						<p className="w-4/5 text-2xl text-center py-8 leading-relaxed">
							Let StudyWings help you find your dream university
							and unlock your full potential. Your passport to a global education.
						</p>
					</div>
				</div>
				<div className="calltoaction flex gap-8">
					<a href="/application">
						<button className="buttons bg-[--primary] text-[--background] font-semibold px-6 py-3 rounded-full">Learn More</button>
					</a>
					<a href="/application">
						<button className="buttons bg-[--secondary] text-[--text] font-semibold px-6 py-3 rounded-full">Apply Now</button>
					</a>
				</div>
			</section>

			<section className="info w-full h-dvh">
				<div className="py-4">
					<h1 className="text-6xl font-semibold text-center my-8">Why StudyWings ?</h1>
					<div className="w-full flex justify-evenly mt-12">
						<div className="info_block">Save time</div>
						<div className="info_block">Get free from manual paper work</div>
						<div className="info_block">it's simple</div>
					</div>
				</div>
				<div className="more_info">
					<div className="item-0"></div>
					<div className="item-1"></div>
					<div className="item-2"></div>
					<div className="item-3"></div>
				</div>
			</section>
		</>
	)
}


export default App;
