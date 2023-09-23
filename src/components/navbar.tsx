import { MobileSidebar } from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import Profile from "@/components/ui/profile";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "./ui/avatar";
import IconIconNotification from "@/assets/icon/notification";
import IconMessage from "@/assets/icon/message";
import { TopBarSearch } from "./top-bar-search";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-between p-5 bg-[#FFFFFF] rounded-xl shadow-none dark:bg-gray-800 dark:border-gray-70">
        <TopBarSearch />
        <div className=" space-x-6 mr-5 flex items-center justify-center">
          <span className="relative inline-block cursor-pointer">
            <IconMessage />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
              4
            </span>
          </span>
          <span className="relative inline-block cursor-pointer">
            <IconIconNotification fontSize={"26"} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full">
              4
            </span>
          </span>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
