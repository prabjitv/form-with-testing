import './App.css';

import Button from './components/button/button';

function App({label}) {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please"></Button>
      </header>
    </div>
  );
}

export default App;
