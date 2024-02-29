import { useEffect } from "react";
import "../assets/styles/navbar.css";
import img1 from "../assets/img/img1.jpg";

const Navbar = () => {

  useEffect(() => {

    const btn = document.getElementById('navbar_menu_button');
    const menu = document.getElementById('navbar_float_menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle("hidden");
    })

  }, []);

  return (
    <header className="w-full h-[8dvh] bg-gradient-to-r from-[--ui] to-[--bg]">

      <nav className="flex justify-between items-center px-4">

        <div className="navbar_title h-[8dvh] flex justify-between items-center gap-8">
          <div className="title text-3xl text-gray-900 font-bold">StudyWings</div>
        </div>

        <div className="navbar_menu text-lg flex items-center gap-8">
          <span className="navbar_items">Application</span>
          <a href="/root/university" className="navbar_items">University</a>
          <a href="/root/country" className="navbar_items">Country</a>
          <a href="/root/courses" className="navbar_items">Courses</a>
        </div>

        <div id="navbar_float_menu" className="hidden absolute top-[9dvh] right-3 w-[300px] h-[250px] py-3 rounded-lg bg-[--bg]">
          <div className="flex h-full flex-col justify-between items-center px-2 text-xl " >
            <div className="container flex justify-between items-center gap-8 py-4">
              <div className="w-[40%] flex justify-center items-center">
                <img className="rounded-full" src={img1.src} alt="dummy image" width={50} />
              </div>
              <span className="section w-[70%]">Name</span>
            </div>
            <span className="flex justify-center items-center hover:bg-[--color2] px-4 w-full h-[40px] rounded-lg"><a href="/">Home</a></span>
            <span className="flex justify-center items-center hover:bg-[--color2] px-4 w-full h-[40px] rounded-lg"><a href="/profile">Profile</a></span>
            <span className="flex justify-center items-center hover:bg-[--color2] px-4 bg-[--color2] w-full h-[40px] rounded-lg"><a className="flex gap-4" href="/login"><i className="bi bi-box-arrow-right block"></i> Sign in</a></span>
          </div>
        </div>

        <div id="navbar_menu_button" className="navbar_menu_button text-2xl flex items-center gap-2 bg-[--color2] px-3 py-1 rounded-full cursor-pointer">
          <i className="bi bi-list"></i>
          <img id="image" className="w-[25px] h-[25px] rounded-full border-[2px] border-[#1d1d1b]" src={img1.src} alt="profile pic" />
        </div>

      </nav>

    </header>
  );
}

export default Navbar;
