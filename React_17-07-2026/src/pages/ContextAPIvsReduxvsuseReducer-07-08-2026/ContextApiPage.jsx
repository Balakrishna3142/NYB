import Counter from '../../components-17-07-2026/ContextAP vs Redux vs useReducer-07-08-2026/Counter'
import CounterReducer from '../../components-17-07-2026/ContextAP vs Redux vs useReducer-07-08-2026/CounterReducer'
import ThemeContext from '../../components-17-07-2026/ContextAP vs Redux vs useReducer-07-08-2026/ThemeContext'
import Theme from '../../components-17-07-2026/ContextAP vs Redux vs useReducer-07-08-2026/Theme'


function ContextApiPage() {
  return (
    <div>
        <Counter/>
        <CounterReducer/>
        <ThemeContext>
          <Theme/>
        </ThemeContext>
        
    </div>
  )
}

export default ContextApiPage
