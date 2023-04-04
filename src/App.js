import CounterApp1 from "./CounterApp1";
import CounterApp2 from "./CounterApp2";
import { store } from "./store.js";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <CounterApp1 />
      <CounterApp2 />
    </Provider>
  );
}

export default App;
