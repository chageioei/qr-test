import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="blue">
      <App />
    </Theme>
  </React.StrictMode>
)
