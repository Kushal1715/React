import { Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.png";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <img src={logo} alt="logo" className="h-[60px] w-[150px] object-fill" />
      </Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/products"} as={"div"}>
          <Link to="/products">Products</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
