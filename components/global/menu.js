import { useState, useMemo, useCallback } from "react";
import SidebarVariant from "./Menu/sidebar-variant";
import PortalPopup from "./Menu/portal-popup";
import PropTypes from "prop-types";

const Menu = ({
  className = "",
  showFrameDiv,
  showMenuSvgrepoCom2,
  menuWidth,
  menuHeight,
  menuPosition,
  menuTop,
  menuLeft,
  frameIconTop,
  frameButtonTop,
  frameDivTop,
}) => {
  const [isSidebarVariant2Open, setSidebarVariant2Open] = useState(false);
  
  const menuStyle = useMemo(() => {
    return {
      width: menuWidth,
      height: menuHeight,
      position: menuPosition,
      top: menuTop,
      left: menuLeft,
      zIndex: 1000, // Added zIndex property
    };
  }, [menuWidth, menuHeight, menuPosition, menuTop, menuLeft]);

  const frameIconStyle = useMemo(() => {
    return {
      top: frameIconTop,
    };
  }, [frameIconTop]);

  const frameButtonStyle = useMemo(() => {
    return {
      top: frameButtonTop,
    };
  }, [frameButtonTop]);

  const frameDivStyle = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  const openSidebarVariant2 = useCallback(() => {
    setSidebarVariant2Open(true);
  }, []);

  const closeSidebarVariant2 = useCallback(() => {
    setSidebarVariant2Open(false);
  }, []);

  return (
    <>
      <div
        className={`w-[578px] bg-black max-w-full h-[85px] overflow-hidden ${className}`}
        style={menuStyle}
      >
        <img
          className="absolute top-[calc(50%_-_32.5px)] right-[0px] w-14 h-[66px] overflow-hidden"
          alt=""
          src="/frame-11.svg"
          style={frameIconStyle}
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_26.5px)] right-[67px] w-[79px] h-[53px] overflow-hidden"
          style={frameButtonStyle}
        >
          <div className="absolute top-[3px] left-[16px] rounded-[50%] bg-gainsboro w-12 h-[47px]" />
        </button>
        {showFrameDiv && (
          <div
            className="absolute top-[calc(50%_-_32.5px)] left-[0px] w-[170px] h-[66px] overflow-hidden cursor-pointer"
            onClick={openSidebarVariant2}
            style={frameDivStyle}
          >
            {showMenuSvgrepoCom2 && (
              <div className="absolute top-[7px] left-[0px] w-[72px] h-[51px] overflow-hidden">
                <img
                  className="absolute w-[calc(100%_-_24px)] top-[calc(50%_-_13.5px)] right-[12px] left-[12px] max-w-full overflow-hidden h-[25.5px]"
                  alt=""
                  src="/svgrepo-iconcarrier7.svg"
                />
              </div>
            )}
          </div>
        )}
      </div>
      {isSidebarVariant2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSidebarVariant2}
        >
          <SidebarVariant onClose={closeSidebarVariant2} />
        </PortalPopup>
      )}
    </>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  showFrameDiv: PropTypes.bool,
  showMenuSvgrepoCom2: PropTypes.bool,

  /** Style props */
  menuWidth: PropTypes.any,
  menuHeight: PropTypes.any,
  menuPosition: PropTypes.any,
  menuTop: PropTypes.any,
  menuLeft: PropTypes.any,
  frameIconTop: PropTypes.any,
  frameButtonTop: PropTypes.any,
  frameDivTop: PropTypes.any,
};

export default Menu;
