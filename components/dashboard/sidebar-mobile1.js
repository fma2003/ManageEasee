import React, { useState, useCallback } from "react";
import SidebarVariant2 from "./sidebar/sidebar-variant2";
import PortalDrawer from "./sidebar/portal-drawer";
import PropTypes from "prop-types";

const SidebarMobile1 = ({ className = "" }) => {
  const [isSidebarVariant2Open, setSidebarVariant2Open] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const openSidebarVariant2 = useCallback(() => {
    setSidebarVariant2Open(true);
  }, []);

  const closeSidebarVariant2 = useCallback(() => {
    setSidebarVariant2Open(false);
  }, []);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <>
      <div className={`absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-black overflow-hidden ${className}`}>
        <button
          className={`absolute top-[86.91%] left-0 right-[1.12%] bottom-[6.15%] w-[98.88%] h-[6.93%] overflow-hidden p-0 bg-transparent border-none cursor-pointer transition duration-200 ${
            selectedButton === 6 ? "brightness-10" : "hover:brightness-1000"
          }`}
          onClick={() => handleButtonClick(6)}
        >
          <img
            className="absolute h-[62.9%] w-[47.16%] top-[18.26%] left-[19.32%] right-[33.52%] bottom-[18.84%] max-w-full max-h-full"
            alt=""
            src="/svgrepo-iconcarrier9.svg"
          />
        </button>
        <button
          className={`absolute top-[60.54%] left-[1.24%] right-[-0.34%] bottom-[32.52%] w-[99.1%] h-[6.93%] overflow-hidden p-0 bg-transparent border-none cursor-pointer transition duration-200 ${
            selectedButton === 5 ? "brightness-10" : "hover:brightness-1000"
          }`}
          onClick={() => handleButtonClick(5)}
        >
          <img
            className="absolute h-[45.94%] w-[51.81%] top-[26.81%] left-[23.7%] right-[24.49%] bottom-[27.25%] max-w-full max-h-full"
            alt=""
            src="/svgrepo-iconcarrier10.svg"
          />
        </button>
        <button
          className={`absolute top-[49.42%] left-[1.24%] right-[-0.34%] bottom-[43.65%] w-[99.1%] h-[6.93%] overflow-hidden p-0 bg-transparent border-none cursor-pointer transition duration-200 ${
            selectedButton === 4 ? "brightness-10" : "hover:brightness-1000"
          }`}
          onClick={() => handleButtonClick(4)}
        >
          <img
            className="absolute h-[54.93%] w-[46.37%] top-[21.16%] left-[27.1%] right-[26.53%] bottom-[23.91%] max-w-full max-h-full"
            alt=""
            src="/svgrepo-iconcarrier11.svg"
          />
        </button>
        <button
          className={`absolute top-[38.28%] left-[0.9%] right-0 bottom-[54.78%] w-[99.1%] h-[6.93%] overflow-hidden p-0 bg-transparent border-none cursor-pointer transition duration-200 ${
            selectedButton === 3 ? "brightness-10" : "hover:brightness-1000"
          }`}
          onClick={() => handleButtonClick(3)}
        >
          <img
            className="absolute h-[54.93%] w-[51.02%] top-[21.16%] left-[24.04%] right-[24.94%] bottom-[23.91%] max-w-full max-h-full"
            alt=""
            src="/svgrepo-iconcarrier12.svg"
          />
        </button>
        <button
          className={`absolute top-[27.15%] left-0 right-[0.9%] bottom-[65.92%] w-[99.1%] h-[6.93%] overflow-hidden p-0 bg-transparent border-none cursor-pointer transition duration-200 ${
            selectedButton === 2 ? "brightness-10" : "hover:brightness-1000"
          }`}
          onClick={() => handleButtonClick(2)}
        >
          <img
            className="absolute h-[60.87%] w-[53.29%] top-[18.26%] left-[23.81%] right-[22.9%] bottom-[20.87%] max-w-full max-h-full"
            alt=""
            src="/svgrepo-iconcarrier13.svg"
          />
        </button>
        <button
          className={`absolute top-[calc(50%_-_345.5px)] left-0 right-[1px] bottom-auto w-[calc(100%_-_1px)] h-[69px] overflow-hidden p-0 bg-transparent border-none cursor-pointer transition duration-200 ${
            selectedButton === 1 ? "brightness-10" : "hover:brightness-1000"
          }`}
          onClick={() => handleButtonClick(1)}
        >
          <img
            className="absolute h-[65.22%] w-[55.11%] top-[17.39%] left-[22.73%] right-[22.16%] bottom-[17.39%] max-w-full max-h-full"
            alt=""
            src="/svgrepo-iconcarrier14.svg"
          />
        </button>
        <div className="absolute top-[82.66%] left-[-0.56%] right-[0.34%] bottom-[17.24%] w-[100.22%] h-[0.1%] border-t border-solid border-gray-100 box-border" />
        <img
          className="absolute top-0 left-[1.12%] right-0 bottom-[92.28%] w-[98.88%] h-[7.72%] cursor-pointer"
          alt=""
          src="/sidebarclosebutton.svg"
          onClick={openSidebarVariant2}
        />
      </div>
      {isSidebarVariant2Open && (
        <PortalDrawer placement="Left" onOutsideClick={closeSidebarVariant2}>
          <SidebarVariant2 onClose={closeSidebarVariant2} />
        </PortalDrawer>
      )}
    </>
  );
};

SidebarMobile1.propTypes = {
  className: PropTypes.string,
};

export default SidebarMobile1;
