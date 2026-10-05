import { Link } from "react-router";
import logo from "../../assets/KeenKeeper.png";
import { SiInstagram } from "react-icons/si";
import { LiaFacebook } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";

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
        <p className="mb-4 text-xl font-medium">Social Links</p>
        <div className="flex items-center justify-center gap-3 mb-10">
          <a
            className="p-[10px] text-black bg-white rounded-full"
            href="https://www.google.com"
          >
            <SiInstagram size={20} />
          </a>
          <a
            className="p-[10px] text-black bg-white rounded-full"
            href="https://www.google.com"
          >
            <LiaFacebook size={20} />
          </a>
          <a
            className="p-[10px] text-black bg-white rounded-full"
            href="https://www.google.com"
          >
            <BsTwitterX size={19} />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-20 pt-8 text-center border-t max-md:flex-col border-t-white/10 text-white/50 md:gap-60">
          <div className="flex items-center justify-center">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8">
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
