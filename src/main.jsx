import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import VerifyOTP from './components/VerifyOtp.jsx';
import Question1 from './pages/Q&A.jsx';

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
      },
      {
        path:"/verify-otp",
        element:<VerifyOTP/>
      },
      {
        path:"/Question",
        element:<Question1/>
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
