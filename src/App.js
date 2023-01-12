import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { bolme, decrementAction,incrementAction, incrementByUser,  setIncrementValueAction, setIncrementValueAction1, vurma } from './redux/action/counter.action';

function App() {
  const count = useSelector((state)=>state.counterReducer.count);
  const inputValue= useSelector((state)=>state.counterReducer.inputValue);
  const inputValue1= useSelector((state)=>state.counterReducer.inputValue1);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Qiymet: {count}</h1>

      <input type="number" value={inputValue} onChange={(e) => dispatch(setIncrementValueAction(e.target.value))} />
      <input type="number" value={inputValue1} onChange={(e) => dispatch(setIncrementValueAction1(e.target.value))} />
      <button onClick={()=> dispatch(incrementByUser(inputValue))}>Topla(+)</button>
      <button onClick={()=> dispatch(bolme(inputValue))}>böl(%)</button>
      <button onClick={()=> dispatch(vurma(inputValue))}>vur(*)</button>
      <button onClick={()=> dispatch(incrementAction(inputValue))}>counter artir</button>
      <button onClick={()=> dispatch(decrementAction(inputValue))}>counter azalt</button>
    </div>
  );
}

export default App;