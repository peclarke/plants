import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import DashboardScreen from './screens/dashboard/dashboard.tsx';
import AddPlantScreen from './screens/add_plant/addplant.tsx';
import ListPlantScreen from './screens/list_plant/listplant.tsx';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavComponent from './components/nav/nav.tsx';
import JoySignInSideTemplate from './screens/auth/login.tsx';
import Register from './screens/auth/register.tsx';
import { ErrorEl } from './components/error.tsx';

const NavBarWrapper = () => {
  return (
    <div>
      <NavComponent />
      <Outlet />
    </div>
  )
}

const AuthWrapper = ({children} : any) => {
  return children;
  return <JoySignInSideTemplate />;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    errorElement: <ErrorEl />,
    children: [
      {
        path: "/",
        element:  <AuthWrapper><DashboardScreen /></AuthWrapper>,
      },
      {
        path: "/plants",
        element:  <AuthWrapper><ListPlantScreen /></AuthWrapper>
      },
      {
        path: "/signup",
        element: <Register />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
