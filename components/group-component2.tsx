import type { NextPage } from "next";
import { useEffect, useState } from "react";

const GroupComponent2: NextPage = () => {
  // Set the target date in UTC
  const targetDate = new Date(Date.UTC(2024, 2, 13, 0, 0, 0)); // March 12, 2024

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in seconds
  const diff = targetDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Set the initial time in seconds
  const [timeLeft, setTimeLeft] = useState(diff);

  function pad(num: number) {
    return num.toString().padStart(2, '0');
  }
  // Define a function to convert seconds to days, hours, and minutes
  const secondsToTime = (secs: number) => {
    const days = Math.floor(secs / (24 * 60 * 60));
    const hours = Math.floor((secs % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secs % (60 * 60)) / 60);
    const seconds = Math.ceil(secs % 60);
    return { days, hours, minutes, seconds };
  };

  // Use the useEffect hook to set up an interval that updates the time left every second
  useEffect(() => {
    // If the time left is zero, clear the interval and return
    if (timeLeft === 0) {
      return;
    }
    // Create an interval that decrements the time left by one every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    // Clear the interval when the component unmounts or the time left changes
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Convert the time left in seconds to days, hours, and minutes format
  const { days, hours, minutes, seconds } = secondsToTime(timeLeft);

  return (
    <div className="absolute top-[945px] left-[calc(50%_-_310px)] w-[620px] h-[235px] text-center text-7xl text-white font-montserrat">
      <div className="absolute top-[0px] left-[calc(50%_-_268px)] w-[562px] h-[132px] text-54xl font-oswald">
        <b className="absolute top-[0px] left-[-45px] tracking-[0.13em] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
          {pad(days)}
        </b>
        <b className="absolute top-[0px] left-[calc(50%_-_135px)] tracking-[0.13em] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
          {pad(hours)}
        </b>
        <b className="absolute top-[0px] left-[calc(50%_+_70px)] tracking-[0.13em] inline-block text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[104px] h-[94px] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
          {pad(minutes)}
        </b>
        <b className="absolute top-[0px] left-[calc(50%_+_290px)] tracking-[0.13em] inline-block text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[104px] h-[94px] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
          {pad(seconds)}
        </b>
        <div className="absolute top-[98px] left-[-50px] text-11xl tracking-[0.13em] font-light font-montserrat flex items-center justify-center w-[98px] h-[29px]">
          Days
        </div>
        <div className="absolute top-[95px] left-[calc(50%_-_145px)] text-11xl tracking-[0.13em] font-light font-montserrat">
          Hours
        </div>
        <div className="absolute top-[98px] left-[calc(50%_+_50px)] text-11xl tracking-[0.13em] font-light font-montserrat flex items-center justify-center w-[149px] h-[29px]">
          Minutes
        </div>
        <div className="absolute top-[98px] left-[calc(50%_+_270px)] text-11xl tracking-[0.13em] font-light font-montserrat flex items-center justify-center w-[149px] h-[29px]">
          Seconds
        </div>
      </div>
      <a
        href="^7^"
        className="absolute top-[192px] left-[calc(50%_-_234px)] tracking-[0.13em] font-medium bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 no-underline"
      >
        Devfolio
      </a>

      <a
        href="^8^"
        className="absolute top-[192px] left-[calc(50%_+_78px)] tracking-[0.13em] font-medium bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 no-underline"
      >
        Learn More
      </a>
    </div>
  );
};

export default GroupComponent2;
