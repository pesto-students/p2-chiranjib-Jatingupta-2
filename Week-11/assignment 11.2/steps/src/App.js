import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { addStep, resetSteps } from './reduxStore';

function App() {

  const steps = useSelector((state) => state.steps.value);

  const dispatch = useDispatch()

  return (
    <>
      You've walked {steps} steps! <br />
      <button onClick={dispatch.bind(null,addStep())}>Add a Step</button><br />
      <button onClick={dispatch.bind(null,resetSteps())}>Reset Steps</button><br />
    </>
  );
}

export default App;
