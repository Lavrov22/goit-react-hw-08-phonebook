import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectError, selectorOperation } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operation";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Loader } from "components/Loader/Loader";
import {
  Box,
  Typography,
} from '@mui/material';





const PhoneBook = () => {
  const error = useSelector(selectError);
  const operation = useSelector(selectorOperation);
  



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    
  }, [dispatch])


  return (
      
      <Box>
        <Typography variant="h3" component="h1" sx={{ textAlign: 'center', mt: 2 }}>
          Phonebook
        </Typography>

        <ContactForm></ContactForm>
        {error && <b>{error}</b>}
        {!error && <div>
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mt: 2 }}>
            Contacts
          </Typography>
          <Filter></Filter>
          {operation === 'fetch' && !error ? <Loader /> : <ContactList />}
        </div>}
      </Box>
  );
 
};


export default PhoneBook;