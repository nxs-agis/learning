import { useState } from "react";
import LOGO from "../assets/logo.png";
import ListNavbar from "./ListNavbar";

export default function Navbar() {
  const [toogle, setToggle] = useState<boolean>(false);

  function handlerDropdown() {
    setToggle(!toogle);
  }

  return (
    <ul className="grid grid-cols-[4fr_1fr] text-white py-5 px-5 lg:py-8 lg:px-16 font-bold items-center">
      <li className="flex items-center">
        <img src={LOGO} alt="wave-site-logo" className="w-6 lg:w-10" />
        <h1 className="text-base ml-3 lg:text-2xl lg:ml-4 ">
          Cluster Wave Site
        </h1>
      </li>

      <button onClick={handlerDropdown} className="lg:hidden">
        Menu
      </button>

      <div
        className={`lg:flex lg:justify-between lg:text-xl ${
          toogle ? "block absolute flex-col mt-32 right-2" : "hidden"
        } lg:block`}
      >
        <ListNavbar path="/" label="Home" isActive={true} />
        <ListNavbar path="/cluster" label="Cluster" isActive={false} />
        <ListNavbar path="/about" label="About Me" isActive={false} />
      </div>
    </ul>
  );
}
