import { useState } from "react";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPssword] = useState('');

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
    }

    return (
        <form
            autoComplete="off"
            onClick={handleSubmit}
        >
            <label htmlFor="1">
                Name
                <input
                    type="text"
                    name="name"
                    id='1'
                    onChange={handleChange}
                    value={name}
                />
            </label>
            <label htmlFor="2">
                Email
                <input
                    type="email"
                    name="email"
                    id='2'
                    onChange={handleChange}
                    value={email}
                />
            </label>
            <label htmlFor="3">
                Password
                <input
                    type="password"
                    name="password"
                    id='3'
                    onChange={handleChange}
                    value={password}
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}

export default Register;