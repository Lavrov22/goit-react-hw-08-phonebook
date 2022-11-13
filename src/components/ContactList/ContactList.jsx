import { useSelector } from 'react-redux';
import { selectFilterByName } from "redux/selectors";
import { List } from "components/ContactList/ContactList.styled";
import {ContacItem} from "components/ContactItem/ContactItem"


    
export const ContactList = () => {

    const visibleName = useSelector(selectFilterByName);
    return (
        <List >
            {visibleName.map(contact => <ContacItem key={contact.id} {...contact} />)}
        </List >
    );  
};

