import './App.css';
import { useDispatch } from "react-redux";
import {changeState} from './reduxStore'
import { useSelector } from "react-redux";

function App() {

  const isLightOn = useSelector((state) => state.lights.value);
  const lightedness = isLightOn ? "lit" : "dark";

  const dispatch = useDispatch();

  const flipLight = () => {
    dispatch(changeState(!isLightOn))
  }

  return (
    <>
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={flipLight}>flip</button>
      </div>
    </>
  );
}

export default App;
