import type { NextPage } from "next";
import Scroll from "../components/scroll.jsx";
const GroupComponent3: NextPage = () => {
  return (
    <div className="absolute top-[35px] right-[83px] w-[1342px] h-[61.2px] text-center text-3xl text-white font-montserrat">
      <div className="absolute top-[10px] right-[0px] overflow-hidden flex flex-row items-start justify-start">
        <div className="w-[130px] relative tracking-[0.01em] font-medium text-paleturquoise inline-block shrink-0">
          About
        </div>
        <div className="w-[140px] relative tracking-[0.01em] inline-block shrink-0">
          Judges
        </div>
        <div className="w-[157px] relative tracking-[0.01em] inline-block shrink-0">
          Workshop
        </div>
        <div className="w-[124px] relative tracking-[0.01em] inline-block shrink-0">
          Prizes
        </div>
        <div className="w-[118px] relative tracking-[0.01em] inline-block shrink-0">
          Tracks
        </div>
        <div className="w-[142px] relative tracking-[0.01em] inline-block shrink-0">
          Partners
        </div>
        <div className="w-[92px] relative tracking-[0.01em] inline-block shrink-0">
          FAQs
        </div>
      </div>
      <div className="absolute h-full w-[15.57%] top-[0%] right-[84.43%] bottom-[0%] left-[0%] text-left text-lg font-audiowide">
        <img
          className="absolute h-full w-[25.36%] top-[0%] right-[74.64%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <div className="absolute top-[12px] left-[65px] flex items-center w-36 h-[38px]">
          BLOCKCHAIN CLUB SRM
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
