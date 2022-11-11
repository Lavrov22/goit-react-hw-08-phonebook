export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
// export const selectIsLoadingOnButton = state => state.contacts.isLoadingOnButton;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilterByName = (state) => {
    const filter = selectFilter(state);
    const contacts = selectContacts(state);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};