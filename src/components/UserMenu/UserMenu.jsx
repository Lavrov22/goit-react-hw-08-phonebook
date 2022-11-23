import { useDispatch } from "react-redux";
// import { selectName, selectEmail } from "redux/Auth/selectors";
import { logOut } from "redux/Auth/operations";
import BackgroundLetterAvatars from "components/Avatar/Avatar";
import { Wrapper } from "components/UserMenu/UserMenu.styled";
import Button from '@mui/material/Button';


export const UserMenu = () => {
    // const name = useSelector(selectName);
    // const email = useSelector(selectEmail);
    const dispatch = useDispatch();

    return (
        
        <Wrapper>  
            <BackgroundLetterAvatars/>
            {/* <p>Welcome, {name}</p>
            <p>Your email, {email}</p> */}
            <Button type="button" variant="contained" onClick={() => dispatch(logOut())}>Log Out</Button>
        </Wrapper>
    )
}