import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";
import { fetchContacts } from "redux/operation";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Loader } from "components/Loader/Loader";


export const App = () => {

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        {error && <b>{error}</b>} 
        {!error && <div>
        <h2>Contacts</h2>
        <Filter></Filter>
        {isLoading === 'pending' && <Loader/>}
        <ContactList></ContactList>
        </div>}
      </div>
       
         
      
    );
 
};
