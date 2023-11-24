import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <div>
          <Link to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            eStudy
          </Link>
        </div>
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all "
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all "
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all "
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            Contact
          </Link>
        </nav>
        <div className="flex md:hidden " onClick={handleNav}>
          <div className="p-2 ">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={`${
          nav ? "translate-x-0" : "hidden"
        } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        {/* mobile nav */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightGreen transition-all "
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightGreen transition-all "
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightGreen transition-all "
        >
          Courses
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightGreen transition-all"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightGreen transition-all"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
