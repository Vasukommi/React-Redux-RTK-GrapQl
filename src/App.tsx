import Counter from './components/counter/Counter';
import CountTestOne from './components/countTestOne.tsx/CountTestOne';
import CountTestOneChild from './components/countTestOne.tsx/count-child/CountTestOneChild';
import Locations from "./components/locations/Locations"
import Dogs from "./components/locations/Dogs";
import './App.css';
import AddTodo from './components/locations/Mutation';

function App() {

  return (
    <div className="App">
      <div>
        <h2>Counter Example</h2>
        <div>
          <Counter />
          <CountTestOne />
          <CountTestOneChild />
        </div>
        <h2>Aplollo Client</h2>
        <div>
          <Locations />
        </div>
        <div>
          {/* <Dogs /> */}
          {<AddTodo />}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;