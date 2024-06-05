import Head from "next/head";
import Loginform from "../components/loginform";

const Desktop = () => {
  return (
    <main className="w-full relative bg-black h-[1060px] sm:w-[420px]">
      <div className="absolute top-[calc(50%_-_512px)] left-[0px] w-[1432px] h-[1024px] flex flex-col items-start justify-between mix-blend-screen lg:w-[620px] lg:items-start lg:justify-center md:hidden">
        <video
          className="w-[1432px] h-[1040px] relative  rounded-tl-none rounded-tr-70xl  rounded-bl-none mix-blend-screen object-cover lg:h-[1024px] lg:object-cover md:hidden md:self-stretch md:w-auto md:flex-1 sm:hidden"
          autoPlay
          muted
          loop
        >
          <source src="/aura_(2).mp4" />
        </video>
      </div>
      <div className="absolute top-[calc(50%_-_299px)] left-[calc(50%_-_234px)] overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 pr-0 pl-6 lg:w-[1010px] lg:items-center lg:justify-end lg:pl-0 lg:pr-[-500-] lg:box-border md:w-auto md:[align-self:unset] md:flex-row md:flex-wrap md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border md:[align-content:safe_center] sm:w-[470px] sm:items-center sm:justify-center sm:pl-0 sm:pr-[150px] sm:box-border">
        <Loginform />
      </div>
    </main>
  );
};

export default Desktop;
