import { Button, Navbar, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="whitespace-nowrap font-semibold self-center text-sm sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 text-3xl font-bold rounded-lg">
          Kushal's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button color="gray" className="w-12 h-10 lg:hidden" pill>
        <AiOutlineSearch size={20} />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button color="gray" className="w-12 h-10 hidden sm:inline" pill>
          <FaMoon size={20} />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue">Sign in</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link as={"div"} active={path === "/"} className="text-center">
            Home
          </Navbar.Link>
        </Link>
        <Link to="/about">
          <Navbar.Link
            as={"div"}
            active={path === "/about"}
            className="text-center"
          >
            About
          </Navbar.Link>
        </Link>
        <Link to="/projects">
          <Navbar.Link
            as={"div"}
            active={path === "/projects"}
            className="text-center"
          >
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
