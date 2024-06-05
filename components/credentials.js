import PropTypes from "prop-types";

const Credentials = ({ className = "" }) => {
  return (
    <div
      className={`w-[400px] relative h-[598px] text-left text-29xl text-white font-k2d lg:w-[445px] sm:align-left sm:w-[1200px] sm: right-7 ssm:right-10 md:left-2 ${className}`}
    >
      <img
        className="absolute top-[6px] left-[166px] w-24 h-[92px] overflow-hidden"
        loading="eager"
        alt=""
        src="/logobgblack-1.svg"
      />
      <h1 className="m-0 absolute top-[147px] left-[67px] text-inherit font-normal font-inherit inline-block w-[291px] h-[78px]">
        Login
      </h1>
      <input
        className="[outline:none] bg-black absolute top-[235px] left-[66px] rounded-xl box-border w-[327px] h-[77px] border-[1px] border-solid border-white"
        placeholder="Enter Email"
        type="text"
        form="Emal"
      />
      <input
        className="[outline:none] bg-black absolute top-[337px] left-[66px] rounded-xl box-border w-[328px] h-[77px] border-[1px] border-solid border-white"
        placeholder="Enter Password"
        type="text"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[427px] left-[67px] text-lg font-k2d text-darkblue text-left inline-block w-[249px] h-[23px]">
        <p className="m-0">Forgot your password?</p>
      </button>
      <p className="m-0 absolute top-[462px] left-[67px] text-lg inline-block w-[140px] h-[19px]">
        Remember me
      </p>
      <div className="absolute top-[465px] left-[128px] w-9 h-8 overflow-hidden" />
      <div className="absolute top-[539px] left-[calc(50%_-_49px)] text-5xl text-black inline-block w-[97px] h-[34px]">
        Continue
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[538px] left-[67px] w-[325px] h-[52px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro" />
        <div className="absolute h-[65.38%] w-[38.86%] top-[17.31%] left-[36.34%] text-5xl font-semibold font-k2d text-black text-left inline-block">
          Continue
        </div>
      </button>
      <input
        className="m-0 absolute top-[469px] left-[192px] w-3.5 h-[13px]"
        type="checkbox"
      />
    </div>
  );
};

Credentials.propTypes = {
  className: PropTypes.string,
};

export default Credentials;
