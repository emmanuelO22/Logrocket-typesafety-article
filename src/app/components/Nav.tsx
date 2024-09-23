// components/Nav.tsx
import Link from "next/link";
import Image from "next/image";
import storehubIcon from "../images/storehubIcon.svg";

const Nav = () => {
  return (
    <nav className="flex justify-between mt-[20px] mb-[60px] items-center space-x-6 py-4 px-8 ">
      <div>
        <Image
          className=" w-[125px]
          h-[30px]"
          src={storehubIcon}
          alt=" store hub Logo"
        />
      </div>

      <div className="flex gap-[46px]">
        <Link href="/" className="hover:text-[#FE5B13] font-[600]">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#FE5B13] font-[600]">
          About Us
        </Link>
        <Link href="/features" className="hover:text-[#FE5B13] font-[600]">
          Features
        </Link>
        <Link href="/contact" className="hover:text-[#FE5B13] font-[600]">
          Contact
        </Link>
        <Link href="/marketplace" className="hover:text-[#FE5B13] font-[600]">
          Marketplace
        </Link>
      </div>

      <div className="flex gap-[38px]">
        <Link href="/login" className="hover:text-[#FE5B13] font-[600] mt-2">
          Login
        </Link>
        <button className="bg-[#FE5B13] text-white px-4 py-2 rounded-lg hover:bg-[#d46e43] font-[600]">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Nav;
