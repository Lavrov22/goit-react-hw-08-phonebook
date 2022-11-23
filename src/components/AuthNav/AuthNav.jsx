import { Link, Wrapper } from "components/AuthNav/AuthNav.styled";

export const AuthNav = () => {
    return (
        <Wrapper>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
        </Wrapper>
    );
};