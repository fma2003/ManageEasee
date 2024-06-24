import PropTypes from "prop-types";

const TasksDue1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 rounded-3xs bg-black overflow-hidden flex flex-row flex-wrap items-start justify-center py-[18px] px-8 gap-[9px_87px] text-left text-xl text-white font-kdam-thmor ${className}`}
    >
      <div className="w-[131px] relative text-9xl inline-block h-[47px] shrink-0">
        Tasks due
      </div>
      <select className="w-[106px] bg-[transparent] [border:none] h-[47.2px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[7px] px-[7.5px] box-border font-kdam-thmor text-lg text-white"> 
         <option value="this-week" className="bg-black">This week</option>
          <option value="next-week" className="bg-black">Next week</option>
      </select>
      <div className="w-[362px] h-[58px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Build UI for Home Page
        </div>
      </div>
      <div className="w-[353px] h-[58px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Send a mail to Fahad
        </div>
      </div>
      <div className="w-[356px] h-[58px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Go through the records
        </div>
      </div>
      <div className="w-[350px] h-[50px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-1.5 px-[15px] box-border">
        <div className="w-[277px] relative inline-block h-[39px] shrink-0">
          Implement the NavBar
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[118px] relative h-[41px] overflow-hidden shrink-0">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[-5px] left-[12px] text-xl font-kdam-thmor text-dodgerblue text-left inline-block w-[136px] h-[49px]">
          Veiw more
        </button>
      </button>
    </div>
  );
};

TasksDue1.propTypes = {
  className: PropTypes.string,
};

export default TasksDue1;
