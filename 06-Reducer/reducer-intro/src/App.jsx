
import './App.css'
import Calculate from './components/Calculate'
import CalculateReducer from './components/CalculateReducer'
import Counter from './components/Counter'
import CounterReducer from './components/CounterReducer'


function App() {
 
  
  return (
  
      <>
        <Counter />
        <hr />
        <CounterReducer />
        <Calculate />
        <CalculateReducer />
      </>
    
    
  )
}

export default App
