import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPages from './Pages/loginPages.jsx'
import RegisterPages from './Pages/registerPages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: 'Hello World 🌎',
    
  },
  {
    path: '/loginPages',
    element: <LoginPages />,
  
  },
  {
    path: '/registerPages',
    element: <RegisterPages />,
  
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
