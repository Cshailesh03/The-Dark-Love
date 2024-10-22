import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path :"/login",
        element:<AuthPage/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider > */}
      <RouterProvider router={router}/>
    {/* </Provider> */}
  </StrictMode>
)
