import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import DashboardScreen from './screens/dashboard/dashboard.tsx';
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
import { initialState, StateContext, StateType } from './state/context.ts';

const NavBarWrapper = () => {
  return (
    <div>
      <NavComponent />
      <Outlet />
    </div>
  )
}

const AuthWrapper = ({children} : any) => {
  const { state } = useContext(StateContext);
  
  if (state.loggedIn) {
    return children
  } else {
    return <JoySignInSideTemplate />
  }
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

const PlantApp = () => {
  const [state, setState] = useState<StateType>(initialState);
  const value = { state, setState }
  

  return (
    <StateContext.Provider value={value}>
      <RouterProvider router={router} />
    </StateContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlantApp />
  </React.StrictMode>,
)
