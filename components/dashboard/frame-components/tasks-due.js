import PropTypes from "prop-types";

const TasksDue = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 relative rounded-3xs bg-black h-[470px] overflow-hidden shrink-0 text-left text-xl text-white font-kdam-thmor ${className}`}
    >
      <div className="absolute top-[calc(50%_-_211px)] right-[41.5px] w-[150px] h-[51px] overflow-hidden flex flex-row items-start justify-start py-[7px] px-[7.5px] box-border">
        <select className="bg-[transparent] border-none w-full h-full font-kdam-thmor text-lg text-white">
          <option value="this-week" className="bg-black">This week</option>
          <option value="next-week" className="bg-black">Next week</option>
        </select>
      </div>
      <div className="absolute top-[calc(50%_-_122px)] left-[30.5px] w-[516.9px] h-[62.5px] overflow-hidden flex flex-row items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Build UI for Home Page
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_50px)] left-[30.5px] w-[517px] h-[63px] overflow-hidden flex flex-row items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Send a mail to Fahad
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_22px)] left-[30.5px] w-[517px] h-[63px] overflow-hidden flex flex-row items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Go through the records
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_85px)] left-[30.5px] w-[517px] h-[63px] overflow-hidden flex flex-col items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Implement the NavBar
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_+_156px)] right-[-0.5px] w-40 h-11 overflow-hidden text-xl font-kdam-thmor text-dodgerblue text-left inline-block">
        View more
      </button>
      <div className="absolute top-[calc(50%_-_211.9px)] left-[11.3px] text-9xl inline-block w-[243.3px] h-[50.8px]">
        Tasks due
      </div>
    </div>
  );
};

TasksDue.propTypes = {
  className: PropTypes.string,
};

export default TasksDue;
