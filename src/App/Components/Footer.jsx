import { Link } from "react-router";
import logo from "../../assets/KeenKeeper.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] p-20 flex flex-col justify-center items-center mx-auto">
      <div className="mb-4">
        <img src={logo} alt="Keen Keeper Logo" />
      </div>
      <div className="text-center text-white">
        <p className="mb-6 text-2xl-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="font-medium text-xl mb-4">Social Links</p>
        <div className="flex justify-center items-center gap-3 mb-10">
          <a
            className="p-[10px] text-black bg-white rounded-full"
            href="https://www.google.com"
          >
            <FaInstagram />
          </a>
          <a
            className="p-[10px] text-black bg-white rounded-full"
            href="https://www.google.com"
          >
            <FaFacebook />
          </a>
          <a
            className="p-[10px] text-black bg-white rounded-full"
            href="https://www.google.com"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="flex justify-between items-center border-t border-t-white/10 pt-8 text-white/50 gap-60">
          <div>
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <p>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </p>
            <p>
              <Link to={"/terms-of-service"}>Terms Of Service</Link>
            </p>
            <p>
              <Link to={"/cookies"}>Cookies</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
