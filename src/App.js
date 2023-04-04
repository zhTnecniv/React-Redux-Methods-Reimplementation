import CounterApp1 from "./CounterApp1";
import CounterApp2 from "./CounterApp2";
import { store } from "./store.js";
// import { Provider } from "react-redux";
import MyProvider from "./MyProvider";

const App = () => {
  return (
    <MyProvider store={store}>
      <CounterApp1 />
      <CounterApp2 />
    </MyProvider>
  );
}

export default App;
