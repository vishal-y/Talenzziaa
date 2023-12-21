import { useCallback, useEffect, useState } from "react";
const Timer3 = () => {
 
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date("January 20, 2024 00:00:00");
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div>
        <div className="flex  justify-center md:gap-3 ">
            
          <div className="flex gap-5 relative">
              <span className="  font-semibold text-sm md:text-xl text-[ #f0eff1]">
                {countDownTime?.days} <span className="text-sm">D</span>&nbsp;⁕
              </span>
              <span className="  font-semibold text-sm md:text-xl text-[ #f0eff1]">
                {countDownTime?.hours}  <span className="text-sm">H</span>&nbsp;⁕
              </span>
              <span className="  font-semibold text-sm md:text-xl text-[ #f0eff1]">
                {countDownTime?.minutes}  <span className="text-sm">M</span>&nbsp;⁕
              </span>
              <span className="  font-semibold text-sm md:text-xl text-[ #f0eff1]">
                {countDownTime?.seconds}  <span className="text-sm">S</span>
              </span>
          </div>

        </div>
    </div>
  );
};
export default Timer3;
