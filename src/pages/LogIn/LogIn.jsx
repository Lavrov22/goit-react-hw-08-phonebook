

const LogIn = () => {
    return (
         <form autoComplete="off">
            <label htmlFor="1">
                Email
                <input type="email" name="email" id='1'/>
            </label>
            <label htmlFor="2">
                Password
                <input type="password" name="password" id='2'/>
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LogIn;