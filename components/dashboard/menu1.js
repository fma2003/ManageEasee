import { useState, useCallback } from "react";
import SidebarVariant2 from "./sidebar/sidebar-variant2";
import PortalDrawer from "./sidebar/portal-drawer";
import PropTypes from "prop-types";

const Menu1 = ({ className = "" }) => {
  const [isSidebarVariant2Open, setSidebarVariant2Open] = useState(false);

  const openSidebarVariant2 = useCallback(() => {
    setSidebarVariant2Open(true);
  }, []);

  const closeSidebarVariant2 = useCallback(() => {
    setSidebarVariant2Open(false);
  }, []);

  return (
    <>
      <header
        className={`absolute w-[calc(100%_+_2px)] top-[0px] right-[-1px] left-[-1px] bg-black h-[85px] overflow-hidden sm:w-[400px] sm:max-w-[428px] postion:sticky sm:z-[1000] ${className}`}
      >
        <div className="absolute top-[calc(50%_-_32.5px)] right-[0px] w-14 h-[66px] overflow-hidden">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[calc(100%_-_5px)] top-[calc(50%_-_34px)] right-[5px] left-[0px] h-[68px] overflow-hidden">
            <img
              className="absolute h-[63.82%] w-[50.2%] top-[12.94%] right-[21.57%] bottom-[23.24%] left-[28.24%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute h-[66.32%] w-[85.69%] top-[11.62%] right-[5.1%] bottom-[22.06%] left-[9.22%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </button>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_26.5px)] right-[67px] w-[79px] h-[53px] overflow-hidden">
          <div className="absolute top-[3px] left-[16px] rounded-[50%] bg-gainsboro w-12 h-[47px]" />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_32.5px)] left-[0px] w-[170px] h-[66px] overflow-hidden"
          onClick={openSidebarVariant2}
        >
          <div className="absolute top-[7px] left-[0px] w-[72px] h-[51px] overflow-hidden">
            <img
              className="absolute w-[calc(100%_-_24px)] top-[calc(50%_-_13.5px)] right-[12px] left-[12px] max-w-full overflow-hidden h-[25.5px]"
              alt=""
              src="/svgrepo-iconcarrier7.svg"
            />
          </div>
        </button>
      </header>
      {isSidebarVariant2Open && (
        <PortalDrawer placement="Left" onOutsideClick={closeSidebarVariant2}>
          <SidebarVariant2 onClose={closeSidebarVariant2} />
        </PortalDrawer>
      )}
    </>
  );
};

Menu1.propTypes = {
  className: PropTypes.string,
};

export default Menu1;
