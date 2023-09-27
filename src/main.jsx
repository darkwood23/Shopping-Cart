import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shopping from './components/shopping-cart.jsx'
import "./styles/main.css"
import Item from './components/item.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shopping-cart",
    element: <Shopping />,
  },
  {
    path: "item",
    element: <Item />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
