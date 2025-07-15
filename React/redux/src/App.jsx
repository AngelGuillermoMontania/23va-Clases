
import { Provider } from 'react-redux'
import './App.css'
import Count from './components/Count'
import store from './redux/store/store.js'

function App() {

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  )
}

export default App
