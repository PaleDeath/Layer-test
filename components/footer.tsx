import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="absolute top-[12740px] left-[84px] w-[1316px] h-[166px] text-center text-11xl text-white font-nunito">
      <img
        className="absolute top-[5px] left-[483px] w-[39px] h-[39px] overflow-hidden"
        alt=""
        src="/teenyiconsinstagramsolid.svg"
      />
      <img
        className="absolute top-[0px] left-[547px] w-12 h-[47px] overflow-hidden"
        alt=""
        src="/icoutlinefacebook.svg"
      />
      <img
        className="absolute top-[8px] left-[620px] w-[45px] h-9 overflow-hidden"
        alt=""
        src="/logosdiscordicon.svg"
      />
      <img
        className="absolute top-[3px] left-[690px] w-11 h-11 overflow-hidden"
        alt=""
        src="/iconparkoutlinetelegram.svg"
      />
      <img
        className="absolute top-[6px] left-[760px] w-9 h-[38px] overflow-hidden"
        alt=""
        src="/radixiconslinkedinlogo.svg"
      />
      <img
        className="absolute top-[7px] left-[823px] w-[38px] h-[37px] overflow-hidden"
        alt=""
        src="/mditwitter.svg"
      />
      <div className="absolute top-[125px] left-[0px] tracking-[0.04em]">
        Powered by @Devfolio
      </div>
      <div className="absolute top-[125px] left-[1126px] tracking-[0.04em]">
        Crafted by @
      </div>
    </div>
  );
};

export default Footer;
