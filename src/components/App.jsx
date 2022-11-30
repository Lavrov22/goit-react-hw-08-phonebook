import { Routes, Route } from "react-router-dom";
import { lazy, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "redux/Auth/operations";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";
import { selectIsRefreshing } from "redux/Auth/selectors";
import {Layout} from "components/Layout/Layout";

const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Register = lazy(() => import('pages/Register/Register'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
          <Route path='/phonebook' element={
            <PrivateRoute component={PhoneBook} redirectTo='/login' />} ></Route>
        <Route path='/login' element={
          <RestrictedRoute component={LogIn} redirectTo='/phonebook'/>
        } ></Route>
        <Route path='/register' element={
          <RestrictedRoute component={Register} redirectTo='/phonebook' />
        } ></Route>
      </Route>
    </Routes>

  );
 
};


