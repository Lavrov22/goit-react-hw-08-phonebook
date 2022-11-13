import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from "redux/selectors";
import { deleteContact } from "redux/operation";
import { Item, ButtonDelete } from "components/ContactItem/ContactItem.styled";
import { Loader } from "components/Loader/Loader";


export const ContacItem = ({id, name, number}) => {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    return (
        <Item>{name}: {number}
            <ButtonDelete type='button' onClick={() => dispatch(deleteContact(id))} disabled={isLoading === 'pendingDeleteContact'}>
                {isLoading === 'pendingDeleteContact' ? <Loader /> : 'Delete'}
            </ButtonDelete>
        </Item>);
};