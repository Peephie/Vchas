import {
  Route, 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import './App.css'
import WordPage from './pages/WordPage';
import AllWordsPage from './pages/AllWordsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='*' element={<ErrorPage/>} />
    <Route path='/words/:id' element={<WordPage/>} />
    <Route path='/words' element={<AllWordsPage/>} />
  </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
