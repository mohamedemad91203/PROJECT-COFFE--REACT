import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <div className=" bg-[#3f181c] h-[70px]">
      <div className="container mx-auto flex justify-between items-center h-full ">
        {/* {start logo} */}

        <div className="text-white flex items-center gap-2 ">
          <img className="w-[40px]" src={logo} alt="logo" />
          <h1 className="text-3xl font-bold">Coffe</h1>
        </div>

        <ul className=" hidden  mdl:flex items-center gap-8 text-white text-lg">
          {Links.map((item) => (
            <li
              className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded"
              key={item.id}
            >
              <Link to={item.path}>{item.page}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden mdl:flex text-white gap-4">
          <button
            className="bg-transparent px-4 py-2 rounded font-medium border border-white   hover:border-orange-400  hover:text-orange-300  transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="mdl:hidden relative cursor-pointer text-white"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar ? (
            <FaBars fontSize="20px" />
          ) : (
            <IoMdClose fontSize="20px" />
          )}
        </div>
    {/* Mobile Menu */}
    <div
                className={`fixed top-0 right-0 bg-[#3F181C] w-[200px] h-[100vh] transform ${openBar ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-500 ease-in-out`}
            >
                {/* Close Icon */}
                <div
                    className="absolute top-4 left-2 text-white cursor-pointer"
                    onClick={() => setOpenBar(false)}
                >
                    <IoMdClose fontSize="24px" />
                </div>

                <ul className="flex flex-col gap-7 text-white px-4 mt-16">
                    {Links.map((link) => (
                        <li key={link.id} className="  px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
                            <Link to={link.path}>{link.page}</Link>
                        </li>
                    ))}
                </ul>

                <div className="text-white flex flex-col mt-7 px-4 gap-4">
                    
                    <button className="bg-transparent px-4 py-2 rounded font-medium border border-white  hover:border-orange-400  hover:text-orange-300  transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        
      </div>
    </div>
  );
};

export default Navbar;
