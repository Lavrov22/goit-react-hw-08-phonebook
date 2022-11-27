
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/operations";


export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    console.log(email)
    console.log(password)
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
         setEmail('');
         setPassword('');
    }

    return (
        <Box
            sx={{ display: 'flex', flexWrap: 'wrap' }}
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" autoComplete="off">Password</InputLabel>
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
            <Button variant="contained" type="submit" sx={{height: 50}}  onSubmit={handleSubmit}>Log In</Button>
        </Box>
                
    );
};