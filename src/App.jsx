import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from './components/navbar/NavBar';
import HomePage from './pages/home-page/HomePage';
import DictionaryApp from './pages/dictionary-app/DictionaryApp'
import PokemonSearchApp from './pages/pokemon-search-app/PokemonSearchApp';

import './App.css'
import TodoListPage from './pages/todo-list/TodoListPage';


const Layout = () => {

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/dictionary", element: <DictionaryApp/> },
      { path: "/pokemon-search", element: <PokemonSearchApp/> },
      { path: "/todo-list", element: <TodoListPage/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
