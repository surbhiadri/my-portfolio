import logo from "../../src/assets/surbhi-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-between gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/surbhi-kumari-34a349202/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/surbhiadri" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
