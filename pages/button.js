const Button = () => {
  return (
    <div className="w-full relative rounded-[5px] box-border h-[164px] overflow-hidden text-left text-5xl text-black font-k2d border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] w-[355px] h-[52px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro" />
        <div className="absolute h-[65.38%] w-[38.87%] top-[17.31%] left-[36.34%] font-semibold inline-block">
          Continue
        </div>
      </div>
      <div className="absolute top-[92px] left-[27px] w-[341px] h-[52px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro" />
        <div className="absolute h-[65.38%] w-[37.24%] top-[17.31%] left-[36.36%] font-semibold inline-block">
          Continue
        </div>
      </div>
    </div>
  );
};

export default Button;
