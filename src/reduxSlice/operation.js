import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://636cdf33ab4814f2b270b3fd.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/Contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk('contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/Contacts', { name, number });
            console.log(response.data)
            return response.data;
        
        } catch (error) {
           
            return thunkAPI.rejectWithValue(error.message);
        };
    });