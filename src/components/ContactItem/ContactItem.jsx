import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectorOperation } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operation";
import { Loader } from "components/Loader/Loader";
import {
    Box,
    Typography,
    Button,
    Chip
} from '@mui/material';



export const ContacItem = ({id, name, number}) => {
    const operation = useSelector(selectorOperation);
    const dispatch = useDispatch();

    return (
    
    
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2, justifyContent: 'space-between', width: '300px', mx: 'auto' }}>
                <Typography variant="body1" component="h1" sx={{ textAlign: 'center' }}>
                    {name}: {number}
                </Typography>
                <Button variant="contained" type="button" onClick={() => dispatch(deleteContact(id))}>
                    {operation === id ? <Loader /> : 'Delete'}
                </Button>
            </Box>
    );
};

ContacItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}