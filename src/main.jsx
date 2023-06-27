import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPages from './Pages/loginPages.jsx'
import RegisterPages from './Pages/registerPages.jsx'
import ProductPages from './Pages/productPages.jsx'
import Counteran from './Pages/counteran.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: 'Hello World 🌎',
    
  },
  {
    path: '/login',
    element: <LoginPages />,
  
  },
  {
    path: '/register',
    element: <RegisterPages />,
  
  },
  {
    path: '/product',
    element: <ProductPages />
  },
  {
    path: '/counteran',
    element: <Counteran />, 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
