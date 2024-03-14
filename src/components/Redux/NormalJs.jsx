import { createStore } from "redux";

const initialState = {
  value: 0,
};

function appReducer(prevState = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        value: prevState.value + 1,
      };

    case "decrement":
      return {
        ...prevState,
        value: prevState.value - 1,
      };

    default:
      return prevState;
  }
}

const store = createStore(appReducer);

const state = store.getState();

store.subscribe(() => {
  confirm.log(state.getState());
});

document.getElementById("value").innerHTML = state.value;

document.getElementById("increment").onclick = () => {
  store.dispatch({
    type: "increment",
  });
  console.log("increment");
};

document.getElementById("decrement").onclick = () => {
  store.dispatch({
    type: "decrement",
  });
  console.log("decrement");
};

console.log(state);
