import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import ListaSalones from './components/Salones.jsx'
import SalonPage from './components/SalonPage.jsx'
import Register from './components/Register.jsx'
import Reservacion from './components/Reservacion.jsx'
import SalonInfo from './components/propietario/SalonInfo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/registro',
    element: <Register />
  },
  {
    path: '/salones',
    element: <ListaSalones />
  },
  {
    path: '/salones/:id',
    element: <SalonPage />
  },
  {
    path: '/reservar/:id',
    element: <Reservacion />
  },
  {
    path: '/salonInfo/:id',
    element: <SalonInfo />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}/>
    </NextUIProvider>
  </StrictMode>,
)
