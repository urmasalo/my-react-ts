import { Counter } from './components/Counter';
import { TimerFather } from './components/TimerFather';
import { User } from './components/User';

function App() {
  return (
    <>
      <h1>Hola Mundo + Typescript</h1>
      <hr />
      <h4>Use State</h4>
      <Counter/>
      <User/>
      <h4>Use Effect - useRef</h4>
      <hr />
      <TimerFather/>
    </>
  );
}

export default App;
