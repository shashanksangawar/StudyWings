import { useEffect, useRef, useState } from "react";
import "../assets/styles/navbar.css";
import img1 from "../assets/img/img1.jpg";

const Navbar = () => {

  const menu = useRef();
  const btn = useRef();
  const [code, setCode] = useState(0);
  const [uname, setName] = useState([]);

  const clickMe = () => {
    // console.log(menu.current.classList.contains("hidden"));
    const doopen = btn.current.classList.contains("bi-list");
    if( doopen === true ){
      btn.current.classList.remove("bi-list");
      btn.current.classList.add("bi-x");
      menu.current.style.right = "8dvw";
    }else{
      btn.current.classList.remove("bi-x");
      btn.current.classList.add("bi-list");
      menu.current.style.right = "-100%";
    }

  }

  const clickLogout = () => {
    setCode(1)
  }

  function logIn() {
    return <a className="flex gap-4" href="/login"><i className="bi bi-box-arrow-right block"></i> Sign Up</a>
  }

  function logOut() {
    return (<a onClick={clickLogout} className="flex gap-4" href="/"><i className="bi bi-box-arrow-right block"></i> logout</a>)
  }


  useEffect(() => {
    setName(sessionStorage.getItem("name"));
    const storedCode = parseInt(sessionStorage.getItem("navcode"));
    if (!isNaN(storedCode)) { // Check if parsing was successful
      setCode(storedCode);
    }
  }, []);

  console.log(code, typeof code)

  return (
    <header className="w-full h-[8dvh] bg-transparent py-3">

      <nav className="flex justify-between items-center">

        <div className="navbar_title h-[8dvh] flex justify-between items-center gap-8">
          <div className="bg-gradient-to-r from-[--primary] to-[--secondary] p-[2.5px] rounded-full">
            <div className="title text-2xl font-extrabold p-3 bg-[--background] rounded-full">StudyWings</div>
          </div>
        </div>

        <div ref={menu} id="navbar_float_menu" className="absolute transition transition-all top-[9dvh] right-[-100%] z-10 w-[300px] h-[280px] p-1 rounded-lg">
          <div className="flex h-full flex-col justify-evenly items-center p-3 text-xl bg-[--primary] rounded-lg text-[--background]" >
            <div className="container flex justify-between items-center gap-8 rounded-md h-[80px] bg-[--primary-400]">
              <div className="w-[40%] flex justify-center items-center">
                <img className="rounded-full" src={img1.src} alt="dummy image" width={50} />
              </div>
              <span className="section w-[70%]">{uname}</span>
            </div>
            <span className="flex justify-center items-center hover:bg-[--primary-400] px-4 w-full h-[40px] rounded-lg"><a href="/">Home</a></span>
            <span className="flex justify-center items-center hover:bg-[--primary-400] px-4 w-full h-[40px] rounded-lg"><a href="/profile">Profile</a></span>
            <span className="flex justify-center items-center hover:bg-[--primary-400] px-4 w-full h-[40px] rounded-lg">
              {code === 0 ? logOut() : logIn()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div onClick={clickMe} id="navbar_menu_button" className="navbar_menu_button text-2xl flex items-center gap-2 bg-[--primary] px-3 py-1 rounded-full cursor-pointer">
            <i ref={btn} className="bi bi-list text-3xl text-[--background]"></i>
            <img id="image" className="w-[28px] h-[28px] rounded-full border-[2px] border-[#1d1d1b]" src={img1.src} alt="profile pic" />
          </div>
        </div>


      </nav>

    </header>
  );
}

export default Navbar;
