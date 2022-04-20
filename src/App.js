import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { actions } from './store/index'

function App() {

  // Ejemplo antes de usar Redux Toolkit

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value 10</button>
    </div>
  );
}

export default App;
