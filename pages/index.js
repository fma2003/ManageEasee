import Head from "next/head";
import Credentials from "../components/credentials";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black h-[1055px] lg:h-[1024px] overflow-hidden sm:w-full ">
      <div className="absolute h-[58.4%] top-[20.8%] bottom-[20.8%] left-1/2 transform -translate-x-1/2 w-[1136px] overflow-hidden flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-6 box-border 
        lg:w-[1010px]
        md:w-full md:justify-center md:pl-0 md:pr-0 
         sm:justify-center ">
        <Credentials />
      </div>  
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[650px] h-[1024px] flex flex-col items-start justify-between mix-blend-screen 
        lg:w-[620px] 
        md:hidden 
        sm:hidden">
        <video
          className="self-stretch h-full xlg:w-[1150px]  relative shadow-[15px_4px_40px_7px_rgba(36,_43,_216,_0.25)] rounded-tl-none rounded-tr-70xl rounded-br-70xl rounded-bl-none mix-blend-screen object-cover 
            lg:h-[1024px] 
            md:hidden 
            sm:hidden"
          autoPlay
          muted
          loop
        >
          <source src="/aura_(2).mp4" />
        </video>
      </div>
    </div>
  );
};

export default Desktop;
