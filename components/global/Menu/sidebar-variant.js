import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const SidebarVariant = ({ className = "" }) => {
  const router = useRouter();

  const onMenuSvgrepoCom2Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  return (
    <div
      className={`w-[325px] bg-black h-[1024px] overflow-hidden max-w-full max-h-full text-left text-6xl text-white font-kdam-thmor ${className}`}
    >
      <div className="absolute h-[6.93%] w-[99.11%] top-[86.91%] right-[-2.74%] bottom-[6.15%] left-[3.63%] overflow-hidden">
        <img
          className="absolute h-[62.96%] w-[13.72%] top-[18.31%] right-[73.18%] bottom-[18.73%] left-[13.1%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svgrepo-iconcarrier.svg"
        />
        <div className="absolute h-[61.97%] w-[55.79%] top-[18.31%] left-[35.36%] inline-block">
          Logout
        </div>
      </div>
      <div className="absolute h-[6.93%] w-[99.11%] top-[60.55%] right-[-0.31%] bottom-[32.52%] left-[1.2%] overflow-hidden">
        <img
          className="absolute h-[46.06%] w-[12.2%] top-[26.76%] right-[71.65%] bottom-[27.18%] left-[16.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svgrepo-iconcarrier1.svg"
        />
        <div className="absolute h-[61.97%] w-[55.79%] top-[18.31%] left-[35.36%] inline-block">
          Messages
        </div>
      </div>
      <div className="absolute h-[6.93%] w-[99.11%] top-[71.68%] right-[-0.34%] bottom-[21.39%] left-[1.23%] overflow-hidden">
        <div className="absolute h-[61.97%] w-[55.79%] top-[18.31%] left-[35.36%] inline-block">
          Profile
        </div>
        <div className="absolute h-[64.79%] w-[13.35%] top-[16.9%] right-[70.51%] bottom-[18.31%] left-[16.14%] rounded-[50%] bg-gainsboro" />
      </div>
      <div className="absolute h-[6.93%] w-[99.11%] top-[49.41%] right-[-0.31%] bottom-[43.65%] left-[1.2%] overflow-hidden">
        <img
          className="absolute h-[47.89%] w-[11.27%] top-[25.35%] right-[72.87%] bottom-[26.76%] left-[15.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svgrepo-iconcarrier2.svg"
        />
        <div className="absolute h-[61.97%] w-[55.79%] top-[18.31%] left-[35.36%] inline-block">
          Employees
        </div>
      </div>
      <div className="absolute h-[6.93%] w-[99.11%] top-[38.28%] right-[0%] bottom-[54.79%] left-[0.89%] overflow-hidden">
        <img
          className="absolute h-[47.89%] w-[12.2%] top-[25.35%] right-[72.87%] bottom-[26.76%] left-[14.93%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svgrepo-iconcarrier3.svg"
        />
        <div className="absolute h-[61.97%] w-[55.79%] top-[18.31%] left-[35.36%] inline-block">
          Tasks
        </div>
      </div>
      <div className="absolute h-[6.93%] w-[99.11%] top-[27.15%] right-[0.89%] bottom-[65.92%] left-[0%] overflow-hidden">
        <img
          className="absolute h-[57.04%] w-[13.72%] top-[13.8%] right-[71.5%] bottom-[29.15%] left-[14.78%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svgrepo-iconcarrier4.svg"
        />
        <div className="absolute h-[61.97%] w-[55.79%] top-[18.31%] left-[35.36%] inline-block">
          Calendar
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_3px)] top-[calc(50%_-_346px)] right-[3px] left-[0px] h-[69px] overflow-hidden">
        <img
          className="absolute h-[59.42%] w-[13.73%] top-[27.54%] right-[71.65%] bottom-[13.04%] left-[14.63%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svgrepo-iconcarrier5.svg"
        />
        <div className="absolute h-[63.77%] w-[55.81%] top-[27.54%] left-[34.44%] inline-block">
          Dashboard
        </div>
      </div>
      <img
        className="absolute top-[62px] left-[250px] w-[72px] h-[51px] overflow-hidden cursor-pointer"
        alt=""
        src="/menusvgrepocom-2.svg"
        onClick={onMenuSvgrepoCom2Click}
      />
      <img
        className="absolute top-[calc(50%_-_456px)] right-[87px] w-[223px] h-[61px] overflow-hidden"
        alt=""
        src="/logotext.svg"
      />
      <div className="absolute h-[0.1%] w-[99.42%] top-[82.67%] right-[0.74%] bottom-[17.24%] left-[-0.15%] box-border border-t-[1px] border-solid border-gray-100" />
      <img
        className="absolute top-[746px] left-[54px] w-[52px] h-[47px] object-cover [mix-blend-mode:linear-burn]"
        alt=""
        src="/photo-by-tom-ramalho1@2x.png"
      />
    </div>
  );
};

SidebarVariant.propTypes = {
  className: PropTypes.string,
};

export default SidebarVariant;
