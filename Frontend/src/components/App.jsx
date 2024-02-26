import React from "react";
import { useState } from "react";
// import { Image } from "astro:assets";
import wings from "../assets/img/wings.png";
import img1 from "../assets/img/img2.jpg";

const App = () => {


	// () =>{setCount((count) => count + 1)}
	// 	const givealert = () =>{
	// 		window.location = '/#test'	
	// }

	return (
		<>
			<div className="hero">
				<div className="my_cnt w-full h-full flex justify-center items-center backdrop-blur">
					<div className="w-[60dvw] h-[60dvh] bg-white p-[3rem] border border-[--primary-color] rounded-[1rem] shadow-xl flex justify-center gap-12">
						<div className="flex flex-col justify-center">
							<h1 className="text-7xl text-[--primary-fg] font-bold w-[400px] leading-normal">Welcome to StudyWings</h1>
							<div className="mt-4 ">
								<p className="text-2xl text-[--primary-fg] leading-relaxed">Shape Your Future</p>
								<p className="text-2xl text-[--primary-fg] leading-relaxed">You Take The Leap, We Give You The Wing's </p>
							</div>
							<div className="flex gap-4 mt-8">
								<button className="button rounded-lg text-2xl px-4 py-2 bg-[--primary-color] text-white">Learn more</button>
								<button className="button rounded-lg text-2xl px-4 py-2 text-[--primary-color] border-2 border-[--primary-color]">Contact Us</button>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<img src={wings.src} width={650} alt="" />
						</div>
					</div>
				<svg id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path fill="var(--primary-color)" d="M0,196L80,163.3C160,131,320,65,480,73.5C640,82,800,163,960,171.5C1120,180,1280,114,1440,73.5C1600,33,1760,16,1920,24.5C2080,33,2240,65,2400,98C2560,131,2720,163,2880,147C3040,131,3200,65,3360,49C3520,33,3680,65,3840,73.5C4000,82,4160,65,4320,114.3C4480,163,4640,278,4800,318.5C4960,359,5120,327,5280,326.7C5440,327,5600,359,5760,359.3C5920,359,6080,327,6240,261.3C6400,196,6560,98,6720,81.7C6880,65,7040,131,7200,171.5C7360,212,7520,229,7680,236.8C7840,245,8000,245,8160,220.5C8320,196,8480,147,8640,130.7C8800,114,8960,131,9120,138.8C9280,147,9440,147,9600,171.5C9760,196,9920,245,10080,245C10240,245,10400,196,10560,204.2C10720,212,10880,278,11040,285.8C11200,294,11360,245,11440,220.5L11520,196L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path></svg>
				</div>
				<div id="test" className="w-screen h-[92dvh] flex justify-center items-center">
					<div className="flex justify-between">
						<img src={img1.src} width={400} alt="image" className="mr-[200px] rounded-xl" />	
						<div className="text-2xl w-[900px] py-[90px] leading-normal">
							<h1 className="text-5xl my-7 font-bold">About StudyWings :-</h1>
							<p className="mx-4 my-2">
								StudyWings is revolutionizing the landscape of education by providing students with a dynamic platform designed to elevate their learning experience. Our startup leverages cutting-edge technology and innovative teaching methodologies to empower students to soar to new heights academically. With StudyWings, students gain access to personalized learning paths tailored to their individual needs, comprehensive study materials, and interactive resources that foster engagement and comprehension. Whether it's mastering complex subjects or preparing for standardized tests, StudyWings equips students with the tools and support they need to achieve academic success. Join us on this journey as we redefine the way students learn and excel in their educational pursuits.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default App;
