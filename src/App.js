
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <PlayingWithProps property1="value1" property2="value2"/>
     <Counter/>
     <Counter/>
     <Counter/>
     
    </div>
  );
}



function PlayingWithProps(properties){
console.log(properties)

  return(
    <div>Props</div>
  ) 
}

export default App;
