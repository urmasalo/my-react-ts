import { Counter } from './components/Counter';
import { TimerFather } from './components/TimerFather';
import { User } from './components/User';
import { CounterRed } from './components/CounterRed'
import { Form } from './components/Form';

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
      <h4>Use Reducer </h4>
      <hr />
      <CounterRed/>
      <h4>Custom Hooks</h4>
      <hr />
      <Form/>
    </>
  );
}

export default App;
