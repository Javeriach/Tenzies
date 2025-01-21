import { useEffect, useState } from 'react';
import Dices from './Dices';
import Confetti from 'react-confetti';
function Tenzies() {
  let randomArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let [TotalRolls, setTotalRolls] = useState(0);
  let [initialSelected, setInitialSelecter] = useState(0);
  let [newSelectedID, setNewSelectedId] = useState(0);
  let [startTime, setStartTime] = useState(false);
  let [gameStarter, setGameStarter] = useState(false);
  let [showError, setShowError] = useState({
    status: false,
    msg: '',
  });
  let [countTime, setTimeCounter] = useState({
    mints: 0,
    second: 0,
  });

  let [BestTime, setBestTime] = useState(
    JSON.parse(localStorage.getItem('time'))
  );

  let [confettiMeasure, setConfettiMea] = useState({
    height: 0,
    window: 0,
  });

  let [randomNumbersArr, setRandomNumber] = useState(
    (randomArray = randomArray.map((element) => {
      return {
        value: Math.floor(Math.random() * 6 + 1),
        id: crypto.randomUUID(),
        selected: false,
      };
    }))
  );

  let [allSelected, setallSelected] = useState(0);

  const selectedBtnHandler = (event) => {
    if (allSelected < 10) {
      if (allSelected === 0) {
        setInitialSelecter(
          event.target.value
            ? event.target.value
            : event.target.parentElement.value
        );
        setStartTime(true);
      }
      setGameStarter(true);
      setNewSelectedId(
        event.target.id ? event.target.id : event.target.parentElement.id
      );
    }
  };

  let rollBtnHandler = (event) => {
    if (allSelected < 10) {
      setTotalRolls((prs) => prs + 1);
      setRandomNumber((prs) => {
        let newArray = prs.map((element) => {
          if (element.selected) return element;
          else
            return {
              ...element,
              value: Math.floor(Math.random() * 6 + 1),
            };
        });

        return newArray;
      });
    }
  };
  let resetBtnHandler = () => {
    setStartTime(false);
    setTimeCounter({
      mints: 0,
      second: 0,
    });
    setTotalRolls(0);
    setallSelected(0);
    setRandomNumber(
      (randomArray = randomArray.map((element) => {
        return {
          value: Math.floor(Math.random() * 6 + 1),
          id: crypto.randomUUID(),
          selected: false,
        };
      }))
    );
  };

  let Timer = (allSelectedValue) => {
    {
      if (allSelectedValue < 10) {
      }
    }
  };
  useEffect(() => {
    if (gameStarter) {
      setRandomNumber((prs) => {
        let newArray = prs.map((element) => {
          if (
            element.id === newSelectedID &&
            element.selected === false &&
            element.value === Number(initialSelected)
          ) {
            setallSelected(allSelected + 1);
            setGameStarter(false);
            return {
              ...element,
              selected: true,
            };
          } else {
            return element;
          }
        });

        return newArray;
      });
      return;
    }
    if (allSelected === 10) {
      setStartTime(false);
    }
  }, [newSelectedID, startTime, allSelected, countTime]);

  useEffect(() => {
    if (startTime) {
      setTimeout(() => {
        setTimeCounter((pre) => {
          if (pre.second === 60)
            return {
              ...pre,
              mints: pre.mints + 1,
              second: 0,
            };
          else {
            return {
              ...pre,
              second: pre.second + 1,
            };
          }
        });
      }, 1000);
    }
    if (
      allSelected === 10 &&
      countTime.mints <= BestTime.mints &&
      countTime.second <= BestTime.second
    ) {
      localStorage.setItem(
        'time',
        JSON.stringify({
          mints: countTime.mints,
          second: countTime.second - 1,
        })
      );
      setBestTime({
        mints: countTime.mints,
        second: countTime.second,
      });
    }

    if (allSelected === 0) {
      setConfettiMea(() => {
        return {
          height: window.innerHeight,
          window: window.innerWidth,
        };
      });
    }
  }, [startTime, countTime]);
  return (
    <div className="game-box">
      <div className="text-div">
        <h1>Tenzies</h1>
        <p className="game--details ">
          Roll until all dice are the same .Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dices-div">
          {randomNumbersArr.map((element, index) => (
            <Dices
              element={element}
              key={index}
              selectedBtnHandler={selectedBtnHandler}
            />
          ))}
        </div>
        {allSelected < 10 ? (
          <button className="roll-btn" onClick={rollBtnHandler}>
            Roll
          </button>
        ) : (
          <div className="w-100">
            <div className="confetti-container">
              <Confetti />
            </div>

            <div className="w-100 d-flex justify-content-center align-items-center">
              <button className="reset-Btn " onClick={resetBtnHandler}>
                Reset Game
              </button>
            </div>

            <div className="mt-2">
              <h2>Game Over😊</h2>

              <h5>Total Number of Rolls: {TotalRolls}</h5>
              <h5>
                Time:{countTime.mints}:{countTime.second} Seconds
              </h5>
            </div>
          </div>
        )}
      </div>
      {BestTime?.mints === countTime?.mints &&
      BestTime?.second === countTime?.second &&
      allSelected === 10 ? (
        <h5 className="mt-1">
          <h5 className="text-center">
            Congratualations <br />
            You have broken the Record🎉🎉
          </h5>
          LeastTimePeriod:{BestTime.mints}:{BestTime?.second} seconds
        </h5>
      ) : (
        <h5 className="mt-1">
          LeastTimePeriod:{BestTime.mints}:{BestTime?.second} seconds
        </h5>
      )}
    </div>
  );
}

export default Tenzies;
