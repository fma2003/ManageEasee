import Menu from "../components/global/menu";
import SidebarMobile1 from "../components/dashboard/sidebar-mobile1";
import Menu1 from "../components/dashboard/menu1";
import DataTable from "../components/dashboard/Profile/user-info";

const Profile = () => {
    return (
        <>
            <div className="sm:hidden w-full h-full relative">
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
                    frameDivTop="calc(50% - 33px)" />
                <nav className="m-0 fixed top-[1px] left-[0px] w-[89px] h-[1500px] max-h-[1080px]">
                    <SidebarMobile1 />
                </nav>
                <DataTable />
            </div>
        
            <div className="hidden sm:block w-full h-full max-w-[420px] text-left text-9xl text-white font-kdam-thmor overflow-hidden">
                <div className= "fixed top-0 z-1000">
                      <Menu1 />  
                    </div>
                
                <DataTable/>
            </div>
        </>
    );
};

export default Profile;
