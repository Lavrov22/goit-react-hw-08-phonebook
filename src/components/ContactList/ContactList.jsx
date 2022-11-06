import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, ButtonDelete, List } from "components/ContactList/ContactList.styled";
import { deleteContacts } from "redux/actions";

    
export const ContactList = ({ visibleName }) => {
    const dispatch = useDispatch();
    return (
        <List >
            {visibleName.map(({id, name, number}) => <Item key={id}>{name}: {number}
                <ButtonDelete type='button' onClick={() => dispatch(deleteContacts(id))}>Delete</ButtonDelete>
            </Item>)}
        </List >
    )   
};

ContactList.propTypes = {
    onDeleteContact :PropTypes.func.isRequired,
    visibleName: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
        
    )
        
        
    
}