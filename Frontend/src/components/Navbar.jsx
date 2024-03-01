import { useEffect, useRef, useState } from "react";
import "../assets/styles/navbar.css";
import img1 from "../assets/img/img1.jpg";
import axios from "axios";

const Navbar = () => {

  const menu = useRef();
  const [data, setData] = useState([]);
  const [code, setCode] = useState();
  const span = useRef();


  const clickMe = () => {
    // console.log(menu.current.classList.contains("hidden"));
    menu.current.classList.toggle("hidden");
  }

  function logIn(){
    return <a className="flex gap-4" href="/login"><i className="bi bi-box-arrow-right block"></i> Sign Up</a>
  } 

  function logOut(){
    return(<a className="flex gap-4" href="/"><i className="bi bi-box-arrow-right block"></i> logout</a>)
  }


  useEffect(() => {
    const code = sessionStorage.getItem("navcode")
    // const id = 1;
    // if (code === 0) {
    //   setCode(code)
    // }else {
    //   const code1 = sessionStorage.setItem("navcode", id)
    //   code === code1
    // }
  }, []);
  
  console.log(code, typeof code)

  return (
    <header className="w-full h-[8dvh] bg-transparent">

      <nav className="flex justify-between items-center px-4">

        <div className="navbar_title h-[8dvh] flex justify-between items-center gap-8">
          <div className="title text-3xl text-gray-900 font-bold">StudyWings</div>
        </div>


        <div ref={menu} id="navbar_float_menu" className="hidden absolute top-[9dvh] right-3 w-[300px] h-[250px] py-3 rounded-lg bg-[--bg]">
          <div className="flex h-full flex-col justify-between items-center px-2 text-xl " >
            <div className="container flex justify-between items-center gap-8 py-4">
              <div className="w-[40%] flex justify-center items-center">
                <img className="rounded-full" src={img1.src} alt="dummy image" width={50} />
              </div>
              <span className="section w-[70%]">Name</span>
            </div>
            <span className="flex justify-center items-center hover:bg-[--color2] px-4 w-full h-[40px] rounded-lg"><a href="/">Home</a></span>
            <span className="flex justify-center items-center hover:bg-[--color2] px-4 w-full h-[40px] rounded-lg"><a href="/profile">Profile</a></span>
            <span ref={span} className="flex justify-center items-center hover:bg-[--color2] px-4 bg-[--color2] w-full h-[40px] rounded-lg">
              {code === 0 ? logOut() : logIn()}
            </span>
          </div>
        </div>


        <div className="flex items-center gap-4">
          <div className="navbar_menu text-lg flex items-center gap-8">
            <a href="/application" className=" bg-[--color2] px-3 py-1 rounded-full" ><span className="navbar_items">Application</span></a>
          </div>

          <div onClick={clickMe} id="navbar_menu_button" className="navbar_menu_button text-2xl flex items-center gap-2 bg-[--color2] px-3 py-1 rounded-full cursor-pointer">
            <i className="bi bi-list"></i>
            <img id="image" className="w-[25px] h-[25px] rounded-full border-[2px] border-[#1d1d1b]" src={img1.src} alt="profile pic" />
          </div>
        </div>


      </nav>

    </header>
  );
}

export default Navbar;
