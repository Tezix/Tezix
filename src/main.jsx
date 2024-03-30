import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { LanguageProvider } from './components/LanguageContext/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
    <LanguageProvider>
        <App />
    </LanguageProvider>
</Router>
)
