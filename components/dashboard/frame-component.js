import Progressbar from "./frame-components/progressbar";
import TasksDue from "./frame-components/tasks-due";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_161px)] top-[calc(50%_-_323px)] right-[32px] left-[129px] h-[470px] overflow-x-auto flex flex-row items-start justify-center gap-[33px] text-left text-9xl text-white font-kdam-thmor ${className}`}
    >
      <Progressbar />
      <TasksDue />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
