import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../redux/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { currentUser } = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.theme);
  // console.log(currentUser.profilePicture);
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
        <Button
          color="gray"
          className="w-12 h-10 hidden sm:inline"
          pill
          onClick={() => dispatch(themeActions.toggleTheme())}
        >
          {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img
                className="w-10 h-10 rounded-full"
                src={currentUser.profilePicture}
                alt="Rounded avatar"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign in
            </Button>
          </Link>
        )}

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
