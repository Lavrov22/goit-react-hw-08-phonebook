import { Link } from "components/Layout/Layout.styled";

export const AuthNav = () => {
    return (
        <>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
        </>
    );
};