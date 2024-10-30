import { Button, Navbar, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [cartItemNumber, setCartItemNumber] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartItemNumber(data.length);

    // Event listener for the custom event
    const updateCartCount = () => {
      const updatedData = JSON.parse(localStorage.getItem("cartData")) || [];
      setCartItemNumber(updatedData.length);
    };

    window.addEventListener("cartUpdated", updateCartCount);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);
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
        <div className="flex cursor-pointer" onClick={() => navigate("/cart")}>
          <FaCartShopping size={30} />
          <span>{cartItemNumber}</span>
        </div>
      </Navbar>
    </nav>
  );
};

export default Header;
