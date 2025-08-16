import { useReducer } from "react";

let initialstate = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "+": {
      return { ...state, count: state.count + action.payload };
    }
    case "-": {
      return { ...state, count: state.count - action.payload };
    }
    case "reset": {
      return initialstate;
    }
    default: {
      return state;
    }
  }
};

const App = () => {
  let [counter, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="w-[20%] h-[250px] bg-[#2b2b2b] px-5 pb-5 pt-1 mb-5 mt-[10%] mx-auto box-border rounded-2xl shadow">
      <h1 className="!text-white text-center font-bold border border-slate-400 rounded-lg">Result: {counter.count}</h1>
      <div className="flex justify-center mt-15">
        <div className="w-[200px] grid grid-cols-3 ">
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">1</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">2</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">3</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">4</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">5</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">6</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">7</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">8</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">9</button>
          <button className="w-[60px] btn btn-info !m-1 !inline-flex">0</button>
          <button onClick={() => dispatch({ type: "reset", payload: 0 })} className="w-[127px] btn btn-success !m-1 !inline-flex">
            Reset
          </button>
        </div>
        <div className="grid grid-rows-1">
          <button onClick={() => dispatch({ type: "+", payload: 1 })} className="w-[60px] btn btn-success !m-1 !inline-flex">
            +
          </button>
          <button onClick={() => dispatch({ type: "-", payload: 1 })} className="w-[60px] btn btn-success !m-1 !inline-flex">
            -
          </button>
          <button onClick={() => dispatch({ type: "/", payload: 1 })} className="w-[60px] btn btn-success !m-1 !inline-flex">
            /
          </button>
          <button onClick={() => dispatch({ type: "%", payload: 1 })} className="w-[60px] btn btn-success !m-1 !inline-flex">
            %
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
