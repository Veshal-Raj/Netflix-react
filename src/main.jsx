import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import '../src/net'
import { BrowserRouter as Router} from 'react-router-dom'

setTimeout(
  () => {

    ReactDOM.createRoot(document.getElementById('root')).render(
      <Router>
        <App />
      </Router>,
    )
  },
  5400
)
