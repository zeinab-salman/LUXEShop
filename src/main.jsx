import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {AuthProvider} from "./hooks/context/AuthProvider.jsx";
import { WalletProvider } from './hooks/context/WalletProvider.jsx';
import { StoreData } from './hooks/context/StoreData.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreData>
    <AuthProvider>
      <WalletProvider>
    <BrowserRouter>
      
        <App />
     
    </BrowserRouter>
    </WalletProvider>
     </AuthProvider>
     </StoreData>
  </StrictMode>
)
