
import * as React from 'react';
import {
    VisibilityOff,
    Visibility
} from '@mui/icons-material';
import {
    FormGroup,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Box,
    IconButton, 
    Button,
    Typography
} from '@mui/material';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/operations";



export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

     const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

     const handleSubmit = e => {
        e.preventDefault();
         dispatch(logIn({ email, password }));

    }

    return (
        <Box
            sx={{ display: 'flex', flexWrap: 'wrap', mt: 5,}}
            component="form"
            onSubmit={handleSubmit}
             autoComplete='off'
        >
            <FormGroup sx={{ mx: 'auto',}}>
                <Typography variant="h3" component="h1" sx={{ textAlign: 'center', mb: 2}}>
                    Contact Log In
                </Typography>
                <FormControl sx={{ m: 1, width: '300px' }} variant="outlined"  >
                    <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        name='email'
                        type='email'
                    
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleChange}
                        name='password'
                    
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
        
                </FormControl>
                <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1, width: '300px'}} >Log In</Button>
            </FormGroup>
        </Box>
                
    );
};