"use client";

import Image from "next/image";
import { useState } from "react";
import { IoLogoWindows } from "react-icons/io";
import { TbUserSearch } from "react-icons/tb";
import { MdOutlineSettingsOverscan } from "react-icons/md";
import { GiSaberAndPistol } from "react-icons/gi";
import { GiStarCycle } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import { MdOutlineScoreboard } from "react-icons/md";
import { MdOutlineFolderCopy } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { FaExchangeAlt } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { LuTags } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { PiTimer } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

import Das from "../app/dashboard/page"

export default function Home() {
  const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

  const handleDivClick = (divIndex: number) => {
    setSelectedDiv(divIndex);
  };

  return (
    <div className="flex w-[100%] pt-[10px]">
      
      <div className="w-[15%] pl-[18px] border-r-[2px] pt-[10px]">
        <div className="">
          <IoLogoWindows className="text-3xl" />
        </div>
        <div className="pt-[22px] cursor-pointer">
          <h5 className="font-bold text-[18px] pb-[6px]">Reports</h5>
          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea]">
            <TbUserSearch />
            <span className="font-bold">Reviewees</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 ">
            <TbUserSearch />
            <span className="font-bold">Evaluators</span>
          </div>
        </div>

        <div className="pt-[22px] cursor-pointer ">
          <h5 className="font-bold text-[18px] pb-[6px]">Tickets</h5>
          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <MdOutlineSettingsOverscan />
            <span className="font-bold">Overview</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <GiSaberAndPistol />
            <span className="font-bold">Sampling rules</span>
          </div>
        </div>

        <div className="pt-[22px] cursor-pointer ">
          <h5 className="font-bold text-[18px] pb-[6px]">Workloads</h5>
          <div className="flex text-[#727a7f] items-center gap-2 hover:text-[#35abea] duration-500">
            <MdSelfImprovement />
            <span className="font-bold">Overview</span>
          </div>

          <div className="flex text-[#727a7f] items-center gap-2 hover:text-[#35abea] duration-500">
            <GiStarCycle />
            <span className="font-bold">Cycles</span>
          </div>
        </div>

        <div className="pt-[22px] cursor-pointer ">
          <h5 className="font-bold text-[18px] pb-[6px]">Tools</h5>
          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <MdOutlineScoreboard />
            <span className="font-bold">Scorecards</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <MdOutlineFolderCopy />
            <span className="font-bold">Criteria</span>
          </div>
        </div>

        <div className="pt-[22px] cursor-pointer ">
          <h5 className="font-bold text-[18px] pb-[6px]">Settings</h5>
          <div className="flex items-center gap-2 text-[#727a7f] hover:text-[#35abea] duration-500">
            <LuUser2 />
            <span className="font-bold">Profile</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <FaExchangeAlt /> 
            <span className="font-bold">General</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <LuUsers />
            <span className="font-bold">Users</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <MdGroups2 />
            <span className="font-bold">Groups</span>
          </div>

          <div className="flex items-center text-[#727a7f] gap-2 hover:text-[#35abea] duration-500">
            <LuTags />
            <span className="font-bold">Tags</span>
          </div>
        </div>

        <div className="flex items-center text-[#727a7f] gap-2 pt-[36px] font-bold cursor-pointer">
          <span>Alex</span>
          <span>AM</span>
        </div>
      
      </div>

      <div className="w-[85%] pl-[22px] pr-[16px] pt-[16px]">
        <div className="flex  gap-6">
          <div className="w-[10%]">
            <h4 className="text-[18px] font-bold text-[#646161] pb-[6px]">
              Aggregate by
            </h4>
            <div className="bg-[#282828] rounded-md w-[90%] py-[4px] font-bold px-[15px] text-[#e9e9e9] flex items-center justify-between">
              <PiTimer />
              <span>Week</span>
            </div>
          </div>

          <div className="w-[13%]">
            <h4 className="text-[18px] font-bold text-[#646161] pb-[6px]">
              Reviewees
            </h4>
            <div className=" borders px-[16px] py-[6px] rounded-md text-[#000000] flex items-center justify-between">
              <span>Show all</span>
              <FaAngleDown />
            </div>
          </div>

          <div className="w-[13%]">
            <h4 className="text-[18px] font-bold text-[#646161] pb-[6px]">
              Group
            </h4>
            <div className=" borders px-[16px] py-[6px] rounded-md text-[#000000] flex items-center justify-between">
              <span>Show all</span>
              <FaAngleDown />
            </div>
          </div>

          <div className="w-[13%]">
            <h4 className="text-[18px] font-bold text-[#646161] pb-[6px]">
              Scorecard
            </h4>
            <div className=" borders px-[16px] py-[6px] rounded-md text-[#000000] flex items-center justify-between">
              <span>Show all</span>
              <FaAngleDown />
            </div>
          </div>

          <div className="w-[13%]">
            <h4 className="text-[18px] font-bold text-[#646161] pb-[6px]">
              Workloads
            </h4>
            <div className=" borders px-[16px] py-[6px] rounded-md text-[#000000] flex items-center justify-between">
              <span>Show all</span>
              <FaAngleDown />
            </div>
          </div>

          <div className="w-[33%]">
            <h4 className="text-[18px] font-bold text-[#646161] pb-[6px]">
              Metric
            </h4>
            <div className="flex justify-between rounded-md bg-[#85d8ff]">
              <div
                className={` text-center rounded-md my-1 ml-[3px] px-[25px] py-[6px] cursor-pointer ${
                  selectedDiv === 1 ? "bg-[#ffffff]" : "bg-transparent"
                }`}
                onClick={() => handleDivClick(1)}
              >
                Evaluations
              </div>
              <div
                className={` text-center rounded-md my-1 px-[19px] py-[6px] cursor-pointer ${
                  selectedDiv === 2 ? "bg-[#ffffff]" : "bg-transparent"
                }`}
                onClick={() => handleDivClick(2)}
              >
                Average score
              </div>
              <div
                className={`text-center rounded-md my-1 mr-[3px] px-[25px] py-[6px] cursor-pointer ${
                  selectedDiv === 3 ? "bg-[#ffffff]" : "bg-transparent"
                }`}
                onClick={() => handleDivClick(3)}
              >
                Pass rate
              </div>
            </div>

          </div>
        </div>

        <div className="pt-[14px] w-[100%] gap-5 flex">
          <div className=" w-[19%] ">
            <div className="borders rounded-md mb-[14px]">
              <div className="pl-[16px]">
                <h5 className="font-bold pt-2 text-[#3f3f3f] text-[18px] ">
                  Average score, today
                </h5>
              </div>
              <div className="text-[#000] text-[64px] text-center font-bold py-[19px]">
                94.1%
              </div>
            </div>

            <div className="borders rounded-md">
              <div className="pl-[16px]">
                <h5 className="font-bold pt-2 text-[#3f3f3f] text-[18px] ">
                  Average score, this week
                </h5>
              </div>
              <div className="text-[#000] text-[64px] text-center font-bold pt-[19px]">
                94.1%
              </div>
              <div className="text-center pb-[16px]"><span className="text-[#15ff09]">+2.8% </span> from last week</div>
            </div>

          </div>
          <div className="borders rounded-md w-[81%]">
           <Das/>
          </div>
        </div>

        <div className="borders rounded-md pb-[5px] w-[100%] pl-[22px] pr-[16px] mt-[16px] ">
            <div className="">
              <h4 className="font-bold text-[18px]">Average score (by reviewee), week on week</h4>
              <span className="text-[#6b6b6b] font-medium">Click on reviewee to se all the evaluations</span>
            </div>

            <div className="flex mt-[12px] gap-5">
              <div className=" w-[23%] my-auto">
                <div className="cursor-pointer">
                  <div className="flex gap-2 font-bold ">
                    <div className="hover:bg-[#e6dfdf] duration-500 px-[8px] py-[4px] rounded-md text-[15px]">Dimi llias</div>
                    <div className="hover:bg-[#e6dfdf] duration-500 px-[8px] py-[4px] rounded-md text-[15px]">New hire</div>
                  </div>
                  <span className="text-[gray] text-[16px] pt-[3px] pl-[8px]">dimi@intryc.com</span>
                </div>

                <div className="mt-[16px]">
                  <div className="flex gap-2 font-bold pl-[8px]">
                    <div className=" text-[15px]">Alex Marantelos</div>
                  </div>
                </div>
              </div>
              <div className=" w-[77%]">
                <div className="flex w-[100%]">
                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 5 Feb 24</div>
                  <div className="border-y-[1px] border-r-[1px] border-l-[1px] roundborder px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 12 Feb 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 19 Feb 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 26 Feb 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 4 mar 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 11 mar 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 18 mar 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 25 mar 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 1 Apr 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 8 Apr 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 15 Apr 24</div>
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="font-medium text-[12px] text-[gray]"> 22 Apr 24</div>
                  <div className="border-y-[1px] roundborders border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>
                </div>

                <div className="flex w-[100%] pt-[14px]">
                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] border-l-[1px] roundborder px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  <div className="border-y-[1px] border-r-[1px] px-[8px] font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>

                <div className=" text-center w-[8.3%]">
                  
                  <div className="border-y-[1px] border-r-[1px] px-[8px] roundborders font-bold py-[7px] mt-[2px]">
                    62.1%
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}
