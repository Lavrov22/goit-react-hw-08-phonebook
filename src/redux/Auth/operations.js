import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(response.data.token)
            Notify.success('Successful register');
            return response.data;
        } catch (error) {
            Notify.failure('Somethin went wrong');
            console.log(thunkApi.rejectWithValue(error.message))
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, thunkApi) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            Notify.success('Successful login');
            return response.data;
        } catch (error) {
            Notify.failure('Email or password is incorrect');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkApi) => {
        try {
            const response = await axios.post('/users/logout');
            clearAuthHeader(response.data.token);
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const peristedToken = state.auth.token;
        if (peristedToken === null) {
            return thunkApi.rejectWithValue() ;
        }

        setAuthHeader(peristedToken);
        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)