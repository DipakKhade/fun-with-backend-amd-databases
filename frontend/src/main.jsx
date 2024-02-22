
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MaxWidthWrapper from './components/MaxWidthWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <MaxWidthWrapper>
    <App />
    </MaxWidthWrapper>
)
