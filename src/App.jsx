import {
  Route, 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
  </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
