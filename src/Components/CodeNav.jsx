import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoListOutline } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { useRecoilState } from "recoil";
import { ProblemTabsAtom, codeNavTabSelected } from "../atoms/ProblemMenuAtom";


export default function CodeNav() {
  
    const [small, setSmall] = useState(false);
    const [isTabsOpen, setIsTabsOpen] = useRecoilState(ProblemTabsAtom)
    const [dashboardOpen, setDashboardOpen] = useRecoilState(codeNavTabSelected)

    const handleDashboardClick = () => {
      setIsTabsOpen(!isTabsOpen)
      setDashboardOpen(!dashboardOpen)
    }
    return (
      <div
        className={`max-h-screen h-screen bg-blue sidebar relative z-50 ${
          small ? "small" : "large"
        }`}
        style={{backgroundColor: isTabsOpen ? "" : "#1e293b"}}
      >
        <div
          className={`p-4 pt-0 h-full flex flex-col  justify-between transition-all ${
            small ? "w-[18rem]  min-w-[18rem]" : "w-[5rem]  min-w-[5rem]"
          }`}
        >
          <div className="flex flex-col">
            <Link to={"/"}>
              <span className="h-20 flex w-full items-center ml-3  text-lg">
                {small ? "CodeCode" : "CC"}
              </span>
            </Link>
            <div className={`p-2.5 rounded-lg  mb-2 cursor-pointer flex items-center hover:bg-darkGreen ${dashboardOpen ? "bg-darkGreen bs" : ""}`}  onClick={handleDashboardClick}>
              <HiMiniSquares2X2 className="ml-0.5  text-2xl" />
              {small && <span className="pl-4 text-sm">Dashboard</span>}
            </div>
            <Link to={"/account"}>
            <div className=" p-2.5  rounded-lg  mb-2 cursor-pointer hover:bg-darkGreen flex items-center">
              <FaRegUserCircle className="ml-0.5  text-2xl" />
  
              {small && <span className="pl-4 text-sm">Account</span>}
            </div>
            </Link>
            <div className=" p-2.5  rounded-lg  mb-2 cursor-not-allowed hover:bg-darkGreen flex items-center">
              <TbBooks className="ml-0.5  text-2xl" />
  
              {small && <span className="pl-4 text-sm">Lessons</span>}
            </div>
            <div className=" p-2.5  rounded-lg  mb-2 cursor-not-allowed hover:bg-darkGreen flex items-center">
              <FaLaptopCode className="ml-0.5  text-2xl" />
  
              {small && <span className="pl-4 text-sm">Problems</span>}
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className=" p-3.5 mb-2  text-yellow-300 hover:bg-darkGreen flex items-center rounded-lg cursor-not-allowed" >
              <MdSunny className="ml-0.5  text-xl" />
  
              {small && <span className="pl-4 text-sm">Dark Mode</span>}
            </div>
            <div className="p-3.5 mb-2   hover:bg-darkGreen flex items-center rounded-lg  cursor-not-allowed">
              <FaGear className="ml-0.5  text-xl" />
  
              {small && <span className="pl-4 text-sm ">Settings</span>}
            </div>
            <div className="bg-gray-600 h-[1px] w-full mt-4"></div>
            <div
              className="p-3.5 mb-2 cursor-pointer mt-3 hover:bg-darkGreen flex items-center rounded-lg "
              onClick={() => setSmall((prev) => !prev)}
            >
              <BsArrowsCollapseVertical className="ml-0.5  text-xl" />
  
              {small && <span className="pl-4 text-sm">Collapse</span>}
            </div>
          </div>
        </div>
      </div>
    );
}
