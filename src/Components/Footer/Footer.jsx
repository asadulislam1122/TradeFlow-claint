import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ReactWorld</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Build modern web experiences with clean code, reusable components,
            and scalable design systems using React.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Services</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Branding
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Design
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Marketing
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Company</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                About Us
              </a>
            </li>
            {/* contact */}
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Contact
              </a>
            </li>

            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400 transition-colors duration-200">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Follow Us</h6>
          <div className="flex space-x-4">
            {/* github */}
            <a
              href="https://github.com/asadulislam1122"
              className="hover:text-pink-400 transition-transform transform hover:scale-110 mr-1"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <FaGithub />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/prince.asadul.426723"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* linkdin */}
            <a
              href="https://www.linkedin.com/in/md-asadullah-a62863396"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <IoLogoLinkedin />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ReactWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
