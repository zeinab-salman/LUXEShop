import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {AuthProvider} from "./components/NavBar/AuthProvider.jsx";
import { WalletProvider } from './components/WalletModel/WalletProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <WalletProvider>
    <BrowserRouter>
      
        <App />
     
    </BrowserRouter>
    </WalletProvider>
     </AuthProvider>
  </StrictMode>
)
