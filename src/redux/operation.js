import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://636cdf33ab4814f2b270b3fd.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('/Contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk('contacts/addContact',
    async ({ name, number }, {rejectWithValue}) => {
        try {
            const response = await axios.post('/Contacts', { name, number });
            
            return response.data;
        
        } catch (error) {
           
            return rejectWithValue(error.message);
        };
    });

export const deleteContact = createAsyncThunk('contacts/deleteCintact',
    async (contactId, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`/Contacts/${contactId}`)
        return response.data;
    } catch (error) {
         return rejectWithValue(error.message);
    }
})