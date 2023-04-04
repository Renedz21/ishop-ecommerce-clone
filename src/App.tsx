import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import ToastProvider from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App