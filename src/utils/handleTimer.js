import { useEffect, useState } from "react";
import { useGameContext } from "../state/gameContext";

export let useTimer = () => {
  let { state, setTimerDispatch } = useGameContext();
  let { inProgress } = state;
  let [counter, setCounter] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [mins, setMins] = useState(0);
  let timer;
  useEffect(() => {
    if (!inProgress) {
      setCounter(0);
    } else {
      timer = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [inProgress]);

  useEffect(() => {
    if (inProgress) {
      setSeconds(counter % 60);
      setMins(Math.floor(counter / 60));

      setTimerDispatch({ s: seconds, m: mins });
    }
  }, [counter, inProgress]);
};
