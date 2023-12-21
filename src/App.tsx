import Counter from './components/counter/Counter';
import CountTestOne from './components/countTestOne.tsx/CountTestOne';
import CountTestOneChild from './components/countTestOne.tsx/count-child/CountTestOneChild';
import Products from './components/products/Products';
import './App.css';

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
        <h2>RTX Query Get Products</h2>
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;