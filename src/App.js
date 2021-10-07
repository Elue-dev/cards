import Card from './components/Card';
import data from './components/data';
import './components/style.css'

function App() {
  return (
    <div className="app">
        <Card data = {data}/>
    </div>
  );
}

export default App;
