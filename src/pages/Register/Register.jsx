

const Register = () => {
    return (
        <form autoComplete="off">
            <label htmlFor="1">
                Name
                <input type="text" name="text" id='1' />
            </label>
            <label htmlFor="2">
                Email
                <input type="email" name="email" id='2' />
            </label>
            <label htmlFor="3">
                Password
                <input type="password" name="password" id='3' />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}

export default Register;