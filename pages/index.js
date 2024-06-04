import Head from "next/head";
import Credentials from "../components/credentials";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black h-[1024px] overflow-hidden sm:w-[420px]">
      <div className="absolute h-[58.4%] top-[20.8%] bottom-[20.8%] left-[calc(50%_-_447px)] w-[1136px] overflow-hidden flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-6 box-border lg:w-[1010px] lg:items-center lg:justify-end lg:pl-0 lg:pr-[-500-] lg:box-border md:w-auto md:[align-self:unset] md:flex-row md:flex-wrap md:items-center md:justify-center md:pl-[225px] md:pr-0 md:box-border sm:w-[900px] sm:items-center sm:justify-center sm:pl-0 sm:pr-[150px] sm:box-border">
        <Credentials />
      </div>
      <div className="absolute top-[calc(50%_-_512px)] left-[0px] w-[650px] h-[1024px] flex flex-col items-start justify-between mix-blend-screen lg:w-[620px] lg:items-start lg:justify-center md:hidden">
        <video
          className="self-stretch h-[1024px] relative shadow-[15px_4px_40px_7px_rgba(36,_43,_216,_0.25)] rounded-tl-none rounded-tr-70xl rounded-br-70xl rounded-bl-none mix-blend-screen object-cover lg:h-[1024px] lg:object-cover md:hidden md:self-stretch md:w-auto md:flex-1 sm:hidden"
          autoPlay
          muted
        >
          <source src="/aura_(2).mp4" />
        </video>
      </div>
    </div>
  );
};

export default Desktop;
