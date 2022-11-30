import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectorOperation } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operation";
import { nanoid } from 'nanoid'
import { Loader } from "components/Loader/Loader";
import {
    FormGroup,
    FormControl,
    InputLabel,
    OutlinedInput,
    Box,
    Button,
} from '@mui/material';


export const ContactForm = () => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);
    const operation = useSelector(selectorOperation);
    const numberId = useRef(nanoid());
    const nameId = useRef(nanoid());

    const dispatch = useDispatch();
    
    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const contactsName = contacts.map(contact => contact.name.toLowerCase());
        if (!contactsName.includes(name.toLowerCase())) {
            dispatch(addContact({ name, number }));
            return reset();
        } else {
             alert(`${name} is alredy in contacts`);
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <Box
            sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, }}
            component="form"
            onSubmit={handleSubmit}
            autoComplete='off'
        >
            <FormGroup sx={{ mx: 'auto', }}>
                <FormControl sx={{ m: 1, width: '300px' }} variant="outlined"  >
                    <InputLabel htmlFor={nameId.current}>Name</InputLabel>
                    <OutlinedInput
                        onChange={handleChange}
                        label="Name"
                        value={name}
                        id={nameId.current}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
                    <InputLabel htmlFor={numberId.current}>Number</InputLabel>
                    <OutlinedInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        value={number}
                        id={numberId.current}

                        label="Password"
                    />
        
                </FormControl>
                <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1, width: '300px' }} >{operation === "add" ? <Loader /> : 'Add contact'}</Button>
            </FormGroup>
        </Box>
    );

};

