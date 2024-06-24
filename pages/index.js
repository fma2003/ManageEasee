import { useState, useEffect } from 'react';
import UserDash from "../components/dashboard/user-dash";
import TotalUser from "../components/dashboard/total-user";
import Menu from "../components/global/menu";
import HorizontalDash from "../components/dashboard/horizontal-dash";
import FrameComponent from "../components/dashboard/frame-component";
import SidebarMobile1 from "../components/dashboard/sidebar-mobile1";
import Menu1 from "../components/dashboard/menu1";
import TasksDue1 from '../components/dashboard/frame-components/task-due1';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Ensure you have imported the required CSS for the progress bar

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on the window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="w-full h-[1219px] relative bg-gray-400 max-w-[1920px] text-left text-9xl text-white font-kdam-thmor">
        <Menu1 />
        <div className="absolute w-[calc(100%_-_34px)] top-[calc(50%_-_330.5px)] right-[16px] left-[18px] h-[903px] flex flex-col items-center justify-start gap-[33px]">
          <div className="self-stretch flex-1 rounded-3xs bg-gray-200 overflow-hidden flex flex-row flex-wrap items-start justify-center py-[22px] px-[18px]">
            <div className="w-[294px] relative align-left inline-block h-[39px] shrink-0">
              Progress Bar Task completed
            </div>
            <div className="w-[270px] h-[150px]">
             <CircularProgressbar value={70} text={"70%"} />
            </div>
          </div>
          <TasksDue1 />
        </div>
        <div className="absolute top-[110px] left-[18px] w-[399px] h-[157px] overflow-x-auto text-21xl">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[323px] overflow-hidden flex flex-col items-center justify-end">
            <div className="self-stretch relative rounded-3xs bg-gray-200 h-[157px]">
              <img
                className="absolute h-[14.46%] top-[14.01%] right-[287.1px] bottom-[71.53%] max-h-full w-[25.2px]"
                alt=""
                src="/svgrepo-iconcarrier6.svg"
              />
              <div className="absolute h-[14.65%] top-[12.1%] right-[103.3px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
                Issues Created
              </div>
              <div className="absolute h-[45.86%] top-[43.95%] right-[126px] text-21xl font-kdam-thmor text-white text-left inline-block w-[149px]">
                20
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-[19px] px-3 pb-4 bg-gray-200 absolute top-[0px] left-[368px] rounded-3xs w-[323px] h-[157px] flex flex-col items-start justify-start box-border gap-[22px]">
            <div className="w-[207.7px] relative h-[27.7px] overflow-hidden shrink-0">
              <div className="absolute h-[83.03%] top-[0%] right-[0px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
                Upcoming Events
              </div>
              <img
                className="absolute h-[81.95%] top-[18.05%] right-[182.5px] bottom-[0%] max-h-full w-[25.2px]"
                alt=""
                src="/svgrepo-iconcarrier8.svg"
              />
            </div>
            <div className="w-[185px] overflow-hidden flex flex-col items-end justify-center">
              <div className="w-[149px] relative text-21xl font-kdam-thmor text-white text-left inline-block h-[72px] shrink-0">
                20
              </div>
            </div>
          </button>
            <div className="absolute top-[0px] left-[736px] rounded-3xs bg-gray-200 w-[323px] h-[157px]">
              <div className="absolute h-[45.86%] top-[43.95%] right-[126px] inline-block w-[149px]">
                20
             </div>
             <img
               className="absolute top-[15px] left-[0px] w-[41px] h-[34px] overflow-hidden"
               alt=""
               src="/tasksbutton1.svg"
            />
            <div className="absolute top-[19px] left-[48px] w-[219.7px] h-[34px] overflow-hidden flex flex-row items-start justify-start text-lg">
              <div className="w-[171.8px] relative inline-block h-[23px] shrink-0">
                High Priority Tasks
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[1104px] rounded-3xs bg-gray-200 w-[323px] h-[157px]">
            <div className="absolute h-[45.86%] top-[42.68%] right-[126px] inline-block w-[149px]">
              20
            </div>
            <div className="absolute top-[19px] left-[10.7px] w-[208.9px] h-[25.7px] overflow-hidden flex flex-row items-start justify-start gap-[11px] text-lg">
              <img
                className="w-[25.2px] relative h-[22.7px]"
                alt=""
                src="/svgrepo-iconcarrier8.svg"
              />
              <div className="w-[171.8px] relative inline-block h-[23px] shrink-0">
                Employees Online
              </div>
            </div>
          </div>
          <TotalUser />
          <button className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[0px] left-[1840px] rounded-3xs w-[323px] h-[157px]">
            <div className="absolute h-[14.65%] top-[12.1%] right-[103.3px] text-lg font-kdam-thmor text-white text-left inline-block w-[171.8px]">
              Total Tasks
            </div>
            <div className="absolute h-[45.86%] top-[43.95%] right-[126px] text-21xl font-kdam-thmor text-white text-left inline-block w-[149px]">
              20
            </div>
            <img
              className="absolute h-[21.66%] top-[8.28%] right-[282px] bottom-[70.06%] max-h-full w-[41px] overflow-hidden"
              alt=""
              src="/tasksbutton1.svg"
            />
          </button>
        </div>
      </div>
      ) : (
        <div className="w-full h-[1182px] relative bg-gray-400 max-w-[2275px]">
          <UserDash />
          <Menu
            showFrameDiv={false}
            showMenuSvgrepoCom2
            menuWidth="calc(100% - 89px)"
            menuHeight="64px"
            menuPosition="sticky"
            menuTop="1px"
            menuLeft="89px"
            frameIconTop="calc(50% - 33px)"
            frameButtonTop="calc(50% - 27px)"
            frameDivTop="calc(50% - 33px)"
          />
          <HorizontalDash />
          <FrameComponent />
          <nav className="m-0 fixed top-[1px] left-[0px] w-[89px] h-[995px] max-h-[1080px] md:hidden">
            <SidebarMobile1 />
          </nav>
        </div>
      )}
    </>
  );
};

export default Dashboard;
