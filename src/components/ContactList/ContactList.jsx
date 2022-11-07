import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from "reduxSlice/selectors";
import { Item, ButtonDelete, List } from "components/ContactList/ContactList.styled";
import { deleteContacts } from "reduxSlice/contactsSlice";

    
export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filterByName = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };

    const visibleName = filterByName();
    
    return (
        <List >
            {visibleName.map(({id, name, number}) => <Item key={id}>{name}: {number}
                <ButtonDelete type='button' onClick={() => dispatch(deleteContacts(id))}>Delete</ButtonDelete>
            </Item>)}
        </List >
    )   
};

