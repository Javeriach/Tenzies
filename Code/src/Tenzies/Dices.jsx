import { useEffect, useState } from 'react';
import SingleDotCreate from './SingleDotCreate';

function Dices(pros) {
  return (
    <div
      className="border-secondary "
      id={pros.element.id}
      onClick={pros.selectedBtnHandler}
    >
      <button
        className={` dice ${pros.element.selected ? 'styleDice' : ''}`}
        id={pros.element.id}
        value={pros.element.value}
        onClick={pros.selectedBtnHandler}
      >
        {pros.element.value === 1 ? (
          <div id={pros.element.id} value={pros.element.value}>
            <SingleDotCreate />
          </div>
        ) : pros.element.value === 2 ? (
          <div value={pros.element.value} id={pros.element.id}>
            <SingleDotCreate />
            <SingleDotCreate />
          </div>
        ) : pros.element.value === 3 ? (
          <div
            className="display"
            id={pros.element.id}
            value={pros.element.value}
          >
            <div
              className="d-flex"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
            <div id={pros.element.id} value={pros.element.value}>
              <SingleDotCreate
                id={pros.element.id}
                value={pros.element.value}
              />
            </div>
          </div>
        ) : pros.element.value === 4 ? (
          <div
            className="display mt-1 "
            id={pros.element.id}
            value={pros.element.value}
          >
            <div
              className="d-flex"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
              <SingleDotCreate />
            </div>

            <div id={pros.element.id} value={pros.element.value}>
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
          </div>
        ) : pros.element.value === 5 ? (
          <div
            className="display"
            id={pros.element.id}
            value={pros.element.value}
          >
            <div
              className="d-flex"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
            <div
              className=" d-flex"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
            </div>
            <div
              className="d-flex h-25"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
          </div>
        ) : pros.element.value === 6 ? (
          <div className="ms-1" id={pros.element.id} value={pros.element.value}>
            <div className="d-flex" id={pros.element.id}>
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
            <div
              className="d-flex"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
            <div
              className="d-flex"
              id={pros.element.id}
              value={pros.element.value}
            >
              <SingleDotCreate />
              <SingleDotCreate />
            </div>
          </div>
        ) : (
          ''
        )}
      </button>
    </div>
  );
}

export default Dices;
