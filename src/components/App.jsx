import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));
const Layout = lazy(() => import("components/Layout/Layout"));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {

  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path='/phonebook' element={<PhoneBook />} ></Route>
        <Route path='/login' element={<LogIn/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
      </Route>
    </Routes>

  );
 
};


