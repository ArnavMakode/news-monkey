import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isDroped, toggleDropdown] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);
  const [searchTerm, setSearch] = useState('')
  const navigate = useNavigate();
  const search = () => {
    if(searchTerm.trim().length !== 0) navigate(`/search/${searchTerm.trim()}`);
  }
  const toggleMenu = () => setMenu(!isMenuOpen);
  const drop = () => toggleDropdown(!isDroped);
  return (
    <nav className=" bg-slate-950 text-white sm:flex items-baseline sm:p-2 sticky top-0 z-20">
      <div className="flex justify-between px-1 max-sm:border-b-2">
        <div className=" text-xl font-bold">NewsMonkey</div>
        <div
          className=" text-2xl sm:hidden mb-1 text hover:text-blue-500 cursor-default"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "×" : "≡"}
        </div>
      </div>
      <div className={`sm:flex w-full ${isMenuOpen ? "block" : "hidden"}`}>
        <div className=" max-sm:border-b border-gray-500 text-gray-300 px-1 ">
          <NavLink to="/" className=" hover:text-blue-500">
            Home
          </NavLink>
        </div>
        <div onMouseEnter={drop} onMouseLeave={drop}>
          <div className=" max-sm:border-b border-gray-500 text-gray-300 hover:text-gray-400 px-1">
            Categories ▾
          </div>
          {isDroped && (
            <div className="sm:absolute sm:translate-x-2 z-30 bg-gray-800 rounded shadow-lg hover:cursor-pointer">
              <ul>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/" className=" hover:text-blue-500">
                    general
                  </NavLink>
                </li>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/business" className=" hover:text-blue-500">
                    business
                  </NavLink>
                </li>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/entertainment" className=" hover:text-blue-500">
                    entertainment
                  </NavLink>
                </li>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/health" className=" hover:text-blue-500">
                    health
                  </NavLink>
                </li>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/science" className=" hover:text-blue-500">
                    science
                  </NavLink>
                </li>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/sports" className=" hover:text-blue-500">
                    sports
                  </NavLink>
                </li>
                <li className="max-sm:border-b px-3 border-gray-500">
                  <NavLink to="/technology" className=" hover:text-blue-500">
                    technology
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={`p-1 sm:flex ${isMenuOpen ? "flex" : "hidden"}`}>
        <input
          type="text"
          className="border rounded text-black"
          placeholder="Enter the text"
          onChange={(e) => (setSearch(e.target.value))}
        />
        <button onClick={search} className=" bg-gray-600 rounded mx-1 border px-1 hover:bg-gray-400">
          Search
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
