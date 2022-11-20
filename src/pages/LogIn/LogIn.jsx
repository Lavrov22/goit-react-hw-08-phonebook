import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/operations";


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
    }

    return (
        <form
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <label htmlFor="1">
                Email
                <input
                    type="email"
                    name="email"
                    id='1'
                    onChange={handleChange}
                    value={email } />
            </label>
            <label htmlFor="2">
                Password
                <input
                    type="password"
                    name="password"
                    id='2'
                    onChange={handleChange}
                    value={password }/>
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LogIn;