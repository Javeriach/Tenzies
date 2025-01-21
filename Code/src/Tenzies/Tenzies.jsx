import { useEffect, useState } from 'react';
import Dices from './Dices';
import Confetti from 'react-confetti';

function Tenzies() {
  let randomArray = new Array(10).fill(0);
  let [TotalRolls, setTotalRolls] = useState(0);
  let [initialSelected, setInitialSelecter] = useState(0);
  let [newSelectedID, setNewSelectedId] = useState(0);
  let [gameStarter, setGameStarter] = useState(false);

  let [randomNumbersArr, setRandomNumber] = useState(
    randomArray.map(() => ({
      value: Math.floor(Math.random() * 6 + 1),
      id: crypto.randomUUID(),
      selected: false,
    }))
  );

  let [allSelected, setAllSelected] = useState(new Set());

  const selectedBtnHandler = (event) => {
    if (allSelected.size < 10) {
      if (allSelected.size === 0) {
        setInitialSelecter(
          event.target.value || event.target.parentElement.value
        );
      }
      setGameStarter(true);
      setNewSelectedId(
        event.target.id || event.target.parentElement.id
      );
    }
  };

  let rollBtnHandler = () => {
    if (allSelected.size < 10) {
      setTotalRolls((prev) => prev + 1);
      setRandomNumber((prev) =>
        prev.map((element) =>
          allSelected.has(element.id)
            ? element
            : { ...element, value: Math.floor(Math.random() * 6 + 1) }
        )
      );
    }
  };

  let resetBtnHandler = () => {
    setTotalRolls(0);
    setAllSelected(new Set());
    setRandomNumber(
      randomArray.map(() => ({
        value: Math.floor(Math.random() * 6 + 1),
        id: crypto.randomUUID(),
        selected: false,
      }))
    );
  };

  useEffect(() => {
    if (gameStarter) {
      setRandomNumber((prev) =>
        prev.map((element) => {
          if (
            element.id === newSelectedID &&
            !allSelected.has(element.id) &&
            element.value === Number(initialSelected)
          ) {
            setAllSelected((prevSet) => new Set(prevSet).add(element.id));
            setGameStarter(false);
            return { ...element, selected: true };
          }
          return element;
        })
      );
    }
  }, [newSelectedID]);

  return (
    <div className="game-box">
      <div className="text-div">
        <h1>Tenzies</h1>
        <p className="game--details">
          Roll until all dice are the same. Click each die to freeze it at its
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
        {allSelected.size < 10 ? (
          <button className="roll-btn" onClick={rollBtnHandler}>
            Roll
          </button>
        ) : (
          <div className='result'>
            <div className="confetti-container">
              <Confetti />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
              <button className="reset-Btn" onClick={resetBtnHandler}>
                Reset Game
              </button>
            </div>
            <div className="">
              <h2>Game Over 😊</h2>
              <h3 className='m-0'>You won in {TotalRolls} rounds!</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tenzies;
