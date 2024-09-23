// components/HeroSection.tsx
import FooterImage from "../images/FooterImage.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 ">
      <div className=" max-w-[70rem] bg-[#FFE4D8] rounded-[40px] mx-auto text-black ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center pl-[40px] gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Start Your Journey with StoreHub Today
            </h2>
            <p className="mb-6 text-black">
              Ready to transform your e-commerce experience? Sign up now to
              launch your store with StoreHub and harness the power of NEAR’s
              blockchain technology.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md">
                Get Started
              </button>
              <button className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-md">
                Marketplace
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={FooterImage}
              alt="StoreHub Overview"
              className="mx-4 mt-9 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
