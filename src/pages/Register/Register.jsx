import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/Auth/operations";

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
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPssword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();


    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPssword(value);
                break;
        
            default:
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 7) {
          return  Notify.warning('Password is at least 7 number');
        }
        dispatch(register({ name, email, password }));
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

         <Box
            sx={{ display: 'flex', flexWrap: 'wrap', mt: 5,}}
            component="form"
                onSubmit={handleSubmit}
                autoComplete='off'
        >
            <FormGroup sx={{ mx: 'auto',}}>
                <Typography variant="h3" component="h1" sx={{ mb: 2}}>
                    Contact Register
                    </Typography>
                    <FormControl sx={{ m: 1, width: '300px', mx: 'auto' }} variant="outlined" >
                    <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-name"
                        value={name}
                        onChange={handleChange}
                        label="Name"
                        name='name'
                        type='text'
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '300px', mx: 'auto' }} variant="outlined" >
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
                <FormControl sx={{ m: 1, width: '300px', mx: 'auto' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
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
                <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1, width: '300px', mx: 'auto'}} >Register</Button>
            </FormGroup>
            </Box>
    
    );
}

export default Register;