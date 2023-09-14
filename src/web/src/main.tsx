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

const NavBarWrapper = () => {
  return (
    <div>
      <NavComponent />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      {
        path: "/",
        element: <DashboardScreen />,
      },
      {
        path: "/add",
        element: <AddPlantScreen />
      },
      {
        path: "/plants",
        element: <ListPlantScreen />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
