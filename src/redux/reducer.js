import { combineReducers } from "redux";

const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const contactsReducer = (state = contactsInitialState, {type, payload}) => {
    switch (type) {
        case "contacts/addContacts":
            const contactName = state.map(contact =>
                contact.name.toLowerCase());
            if (contactName.includes(payload.name.toLowerCase())) {
                alert(`${payload.name} is alredy in contacts`);
                return state;
            } else {
                return [payload, ...state]
            };

        case "contacts/deleteContacts":
            return state.filter(contact => contact.id !== payload);
        default:
            return state;
    }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})