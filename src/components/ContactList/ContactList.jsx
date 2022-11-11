import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectFilterByName } from "redux/selectors";
import { deleteContact } from "redux/operation";
import { Item, ButtonDelete, List } from "components/ContactList/ContactList.styled";
import { Loader } from "components/Loader/Loader";


    
export const ContactList = () => {

    const isLoading = useSelector(selectIsLoading);
    const visibleName = useSelector(selectFilterByName);
    const dispatch = useDispatch();

    return (
        <List >
            {visibleName.map(({id, name, number}) => <Item key={id}>{name}: {number}
                <ButtonDelete type='button' onClick={() => dispatch(deleteContact(id))}>
            {isLoading ? <Loader /> : 'Delete'}
        </ButtonDelete>
            </Item>)}
        </List >
    )   
};

