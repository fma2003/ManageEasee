import PropTypes from "prop-types";

const TotalUser = ({ className = "" }) => {
  return (
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
  );
};

TotalUser.propTypes = {
  className: PropTypes.string,
};

export default TotalUser;
