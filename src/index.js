import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeContextProvider from './components/common/ThemeContextProvider'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
)

reportWebVitals(console.log)
