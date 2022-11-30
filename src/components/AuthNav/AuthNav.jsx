import { Link, Wrapper, LinkRegister} from "components/AuthNav/AuthNav.styled";

export const AuthNav = () => {
    return (
        <Wrapper>
            <Link to='/login'>Log In</Link>
            <LinkRegister to='/register'>Register</LinkRegister>
        </Wrapper>
    );
};