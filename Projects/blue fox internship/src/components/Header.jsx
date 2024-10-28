import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <nav className="border-b-2 lg:px-[80px] bg-blue-100">
      <Navbar className="bg-blue-100">
        <Link to="/">
          <img src={logo} alt="logo" className="h-16 " />
        </Link>

        <form className="lg:w-[260px]">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden md:inline"
          />
        </form>
        {/* <Button color="gray" className="w-12 h-10 hidden lg:inline" pill>
          <AiOutlineSearch size={20} />
        </Button> */}
        <Navbar.Toggle className="text-center" />

        <Navbar.Collapse>
          <Link to="/" className="text-lg text-center hover:text-blue-500">
            <Navbar.Link active={path === "/"} as={"div"}>
              Home
            </Navbar.Link>
          </Link>
          <Link to="/about" className="text-lg text-center">
            <Navbar.Link active={path === "/about"} as={"div"}>
              About
            </Navbar.Link>
          </Link>
          <Link to="/products" className="text-lg  text-center">
            <Navbar.Link active={path === "/products"} as={"div"}>
              Products
            </Navbar.Link>
          </Link>
          <Link to="/contact" className="text-lg  text-center">
            <Navbar.Link active={path === "/contact"} as={"div"}>
              Contact
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
