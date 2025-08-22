import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { PetraWallet } from 'petra-plugin-wallet-adapter'

const wallets = [new PetraWallet()]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AptosWalletAdapterProvider plugins={wallets} autoConnect>
      <App />
    </AptosWalletAdapterProvider>
  </React.StrictMode>
)

