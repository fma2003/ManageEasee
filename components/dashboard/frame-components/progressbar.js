import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Ensure you have imported the required CSS for the progress bar

const Progressbar = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-3xs bg-gray-200 h-[470px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[22px] px-[18px] box-border text-left text-9xl text-white font-kdam-thmor ${className}`}
    >
      <div className="w-full text-left text-2xl mb-4">
        Task completed
      </div>
      <div className="w-[350px] h-[150px]">
        <CircularProgressbar value={70} text={"70%"} />
      </div>
    </div>
  );
};

Progressbar.propTypes = {
  className: PropTypes.string,
};

export default Progressbar;
