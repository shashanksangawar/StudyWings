import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center fixed w-full z-0">
      <div className="brand grid place-items-center">
        <a className="navbar-item" href="/">
          <h1 className="text-4xl text-[--primary-color] font-semibold flex justify-center items-center">StudyWings</h1>
        </a>
      </div>


      <div className="navbar-menu-btn lg:hidden block">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="hidden navbar-menu lg:flex justify-between items-center gap-[1.5rem] lg:text-lg text-base">
        <div className="md:block hidden">
          <input id="ani_input" className="p-2 rounded-full border border-gray-700  px-6 text-xl font-semibold" type="text" placeholder="Search" />
        </div>
        <span className="link hover:text-[--primary-color] hover:underline"><a href="/">Home</a></span>
        <span className="link hover:text-[--primary-color] hover:underline"><a href="/profile">Profile</a></span>
        <span id="log_btn" className="link block text-[--primary-fg] border-[--primary-color] border-2 hover:bg-[--primary-color] hover:text-white transition-colors px-4 py-2 rounded-full"><a href="/login">Sign-in</a></span>
      </div>
    </nav>
  )
}

export default Navbar;
