import React, { useReducer } from "react";
import { colors } from "./Inkrement";

const Button = () => {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const reducer = (change = initialState, action) => {
    switch (action.type) {
      case colors.INCREMENT_RED:
        return {
          ...change,
          red: change.red < 255 ? change.red + 2 : change.red,
        };
      case colors.DECREMENT_RED:
        return {
          ...change,
          red: change.red > 0 ? change.red - 2 : change.red,
        };
      case colors.INCREMENT_GREEN:
        return {
          ...change,
          green: change.green < 255 ? change.green + 2 : change.green,
        };
      case colors.DECREMENT_GREEN:
        return {
          ...change,
          green: change.green > 0 ? change.green - 2 : change.green,
        };
      case colors.INCREMENT_BLUE:
        return {
          ...change,
          blue: change.blue < 255 ? change.blue + 2 : change.blue,
        };
      case colors.DECREMENT_BLUE:
        return {
          ...change,
          blue: change.blue > 0 ? change.blue - 2 : change.blue,
        };
      default:
        return change;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: `rgba(${count.red},${count.green},${count.blue})`,
      }}
      className="flex flex-col h-screen items-center justify-center text-white text-4xl"
    >
      <div>
        Red: {count.red} Green: {count.green} Blue: {count.blue}
      </div>

      <div className="flex mt-8 gap-8">
        <div className="flex gap-3">
          <button
            onClick={() => dispatch({ type: colors.INCREMENT_RED })}
            className="p-3 bg-red-600 text-white rounded-[50px]"
          >
            +R
          </button>
          <button
            onClick={() => dispatch({ type: colors.DECREMENT_RED })}
            className="p-4 bg-red-600 text-white rounded-[50px]"
          >
            -R
          </button>
        </div>

        <div className=" flex gap-3">
          <button
            onClick={() => dispatch({ type: colors.INCREMENT_GREEN })}
            className="p-3 bg-green-600 text-white rounded-[50px]"
          >
            +G
          </button>
          <button
            onClick={() => dispatch({ type: colors.DECREMENT_GREEN })}
            className="p-4 bg-green-600 text-white rounded-[50px]"
          >
            -G
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch({ type: colors.INCREMENT_BLUE })}
            className="p-3 bg-blue-600 text-white rounded-[50px]"
          >
            +B
          </button>
          <button
            onClick={() => dispatch({ type: colors.DECREMENT_BLUE })}
            className="p-4 bg-blue-600 text-white rounded-[50px]"
          >
            -B
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
