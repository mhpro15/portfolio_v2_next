import { linkedinLogo, githubLogo, resumeLogo } from "../../../data/logo";
export const Info = () => {
  return (
    <div className="p-5 text-header-white font-lato bg-glass-box rounded-xl w-full">
      <p className="font-bold text-2xl">Hung Nguyen</p>
      <p className="text-text-white lg">Software Developer</p>
      <br />
      <div className="flex lg:flex-row justify-between flex-col">
        <div className="lg:visible invisible">
          <p>Location</p>
          <p>Email</p>
        </div>
        <div className=" text-text-white lg:text-right">
          <p>Toronto, ON</p>
          <a href="mailto:nmhp1903@gmail.com" className="decoration-none">
            <p>nmhp1903@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <a href="https://www.linkedin.com/in/hung-nguyen1206/" target="_blank">
          {linkedinLogo}
        </a>
        <a href="https://github.com/mhpro15" target="_blank">
          {githubLogo}
        </a>
      </div>
      <div>
        <a href="./resume.pdf" target="_blank">
          <button className=" mx-auto font-bold rounded-full border-2 w-full max-w-[400px] p-2 mt-20 flex justify-between hover:bg-text-white hover:text-[#000000] transition-all duration-300 ease-in-out">
            <p></p>
            <p className="ml-7">Download Resume</p>
            <p className="lg:visible invisible">{resumeLogo}</p>
          </button>
        </a>
      </div>
      <br />
    </div>
  );
};
