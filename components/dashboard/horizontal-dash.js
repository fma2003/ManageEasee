import PropTypes from "prop-types";

const HorizontalDash = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_120px)] top-[calc(50%_-_504px)] right-[10px] left-[104px] overflow-x-auto flex flex-row items-start justify-center py-0 px-3 box-border gap-[44px] text-left text-21xl text-white font-kdam-thmor hide-scrollbar ${className}`}
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[323px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
        <div className="self-stretch relative rounded-3xs bg-gray-200 h-[157px]">
          <img
            className="absolute h-[14.46%] top-[14.01%] right-[287.1px] bottom-[71.53%] max-h-full w-[25.2px]"
            alt=""
            src="/svgrepo-iconcarrier6.svg"
          />
          <div className="absolute h-[14.65%] top-[12.1%] right-[103.3px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
            Issues Created
          </div>
          <div className="absolute h-[45.86%] top-[43.95%] right-[126px] text-21xl font-kdam-thmor text-white text-left inline-block w-[149px]">
            20
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] pt-[19px] px-3 pb-4 bg-gray-200 w-[323px] rounded-3xs h-[157px] shrink-0 flex flex-col items-start justify-start box-border gap-[22px]">
        <div className="w-[207.7px] relative h-[27.7px] overflow-hidden shrink-0">
          <div className="absolute h-[83.03%] top-[0%] right-[0px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
            Upcoming Events
          </div>
          <img
            className="absolute h-[81.95%] top-[18.05%] right-[182.5px] bottom-[0%] max-h-full w-[25.2px]"
            alt=""
            src="/svgrepo-iconcarrier8.svg"
          />
        </div>
        <div className="w-[149px] text-21xl font-kdam-thmor text-white text-left inline-block h-[72px] shrink-0 ml-9">
          20
        </div>
      </button>
      <div className="w-[323px] relative rounded-3xs bg-gray-200 h-[157px] shrink-0">
        <div className="absolute h-[45.86%] top-[43.95%] right-[126px] inline-block w-[149px]">
          20
        </div>
        <img
          className="absolute top-[15px] left-[0px] w-[41px] h-[34px] overflow-hidden"
          alt=""
          src="/tasksbutton1.svg"
        />
        <div className="absolute top-[19px] left-[48px] w-[219.7px] h-[34px] overflow-hidden flex flex-row items-start justify-start text-lg">
          <div className="w-[171.8px] relative inline-block h-[23px] shrink-0">
            High Priority Tasks
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-gray-200 w-[323px] relative rounded-3xs h-[157px] shrink-0">
        <div className="absolute h-[14.65%] top-[12.1%] right-[103.3px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
          Total Tasks
        </div>
        <div className="absolute h-[45.86%] top-[43.95%] right-[126px] text-21xl font-kdam-thmor text-white text-left inline-block w-[149px]">
          20
        </div>
        <img
          className="absolute h-[21.66%] top-[8.28%] right-[282px] bottom-[70.06%] max-h-full w-[41px] overflow-hidden"
          alt=""
          src="/tasksbutton1.svg"
        />
      </button>
      <div className="w-[323px] relative rounded-3xs bg-gray-200 h-[157px] shrink-0">
        <div className="absolute h-[45.86%] top-[42.68%] right-[126px] inline-block w-[149px]">
          20
        </div>
        <div className="absolute top-[19px] left-[10.7px] w-[208.9px] h-[25.7px] overflow-hidden flex flex-row items-start justify-start gap-[11px] text-lg">
          <img
            className="w-[25.2px] relative h-[22.7px]"
            alt=""
            src="/svgrepo-iconcarrier8.svg"
          />
          <div className="w-[171.8px] relative inline-block h-[23px] shrink-0">
            Employees Online
          </div>
        </div>
      </div>
      <button
        className={`cursor-pointer [border:none] p-0 bg-gray-200 w-[323px] relative rounded-3xs h-[157px] shrink-0 ${className}`}
      >
        <img
          className="absolute h-[14.46%] top-[14.01%] right-[287.1px] bottom-[71.53%] max-h-full w-[25.2px]"
          alt=""
          src="/svgrepo-iconcarrier6.svg"
        />
        <div className="absolute h-[14.65%] top-[12.1%] right-[103.3px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
          Total Employees
        </div>
        <div className="absolute h-[45.86%] top-[41.4%] right-[114px] text-21xl font-kdam-thmor text-white text-left inline-block w-[149px]">
          20
        </div>
      </button>
    </div>
  );
};

HorizontalDash.propTypes = {
  className: PropTypes.string,
};

export default HorizontalDash;
