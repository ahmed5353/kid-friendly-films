import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="-bg--color-primary py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            &copy; Copyright {new Date().getFullYear()} by{" "}
            <a href="mailto:ahmedreda5353@gmail.com">Ahmed Nagy</a>
          </p>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
