import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectorOperation } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operation";
import { Item, ButtonDelete } from "components/ContactItem/ContactItem.styled";
import { Loader } from "components/Loader/Loader";


export const ContacItem = ({id, name, number}) => {
    const operation = useSelector(selectorOperation);
    const dispatch = useDispatch();

    return (
        <Item>{name}: {number}
            <ButtonDelete type='button' onClick={() => dispatch(deleteContact(id))}>
                {operation === id ? <Loader /> : 'Delete'}
            </ButtonDelete>
        </Item>);
};

ContacItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}