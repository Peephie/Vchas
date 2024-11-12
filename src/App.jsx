import {
  Route, 
  RouterProvider,
  createHashRouter, 
  createRoutesFromElements
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import WordPage from './pages/WordPage';
import AllWordsPage from './pages/AllWordsPage';
import RandomWordsPage from './pages/RandomWordsPage';

const router = createHashRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='*' element={<ErrorPage />} />
    <Route path='/words/:id' element={<WordPage />} />
    <Route path='/words' element={<AllWordsPage />} />
    <Route path='/randomWords' element={<RandomWordsPage /> } />
  </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
