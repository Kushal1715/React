import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FooterCom = () => {
  return (
    <>
      <Footer container className="border border-t-4 border-green-500 w-full">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-between w-full">
            {/* //logo left */}
            <div>
              <Link
                to="/"
                className="whitespace-nowrap font-semibold self-center text-sm sm:text-xl dark:text-white "
              >
                <span className="px-2 py-1 text-3xl font-bold rounded-lg bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500">
                  Kushal's
                </span>
                Blog
              </Link>
            </div>

            {/* //content right  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 sm:gap-44 sm:ml-10">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">100 JS Projects</Footer.Link>
                  <Footer.Link href="/about" target="_blank">
                    Kushal's Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Linkedin</Footer.Link>
                  <Footer.Link href="#">Github</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="mt-6 sm:mt-0">
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="flex flex-col items-center gap-2 w-full">
            <Footer.Copyright
              href="#"
              by="Kushal Khadka"
              year={new Date().getFullYear()}
            />
            <div className="flex  gap-10">
              <Footer.Icon href="#" icon={FaLinkedin} />
              <Footer.Icon href="#" icon={FaGithub} />
              <Footer.Icon href="#" icon={FaFacebook} />
              <Footer.Icon href="#" icon={FaInstagram} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterCom;
