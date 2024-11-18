import LOGO from "../assets/img/logo.png";
import LINKED from "../assets/img/linked-in.png";
import GIT from "../assets/img/git.png";

export default function Footer() {
  return (
    <footer className="bg-[#032F2F] w-full p-5 lg:py-8 lg:px-16">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="text-white justify-self-start">
          <h1 className="text-base font-semibold lg:text-xl">Folowed Me at</h1>
          <p className="flex gap-3 py-2">
            <button>
              <img src={LINKED} alt="linkedin" className="w-6 lg:w-9" />
            </button>
            <button>
              <img src={GIT} alt="github" className="w-6 lg:w-9" />
            </button>
          </p>
        </div>

        <div className="text-white flex flex-col justify-self-end">
          <p className="flex items-center">
            <img src={LOGO} alt="wave-site-logo" className="w-5 lg:w-6" />
            <h1 className="text-base font-semibold ml-3 lg:text-xl lg:ml-4 ">
              Cluster Wave Site
            </h1>
          </p>
          <h1 className="text-white ml-9 lg:ml-10 text-xs lg:text-base font-extralight">
            2024 &copy; Agis Satria M. All rights reserved
          </h1>
        </div>
      </div>
      <div className="w-full h-[1px] mt-5 bg-white"></div>
    </footer>
  );
}
