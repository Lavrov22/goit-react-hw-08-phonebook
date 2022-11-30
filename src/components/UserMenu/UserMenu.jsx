import { useDispatch } from "react-redux";
import { logOut } from "redux/Auth/operations";
import BackgroundLetterAvatars from "components/Avatar/Avatar";
import { Wrapper } from "components/UserMenu/UserMenu.styled";
import {Button} from '@mui/material';


export const UserMenu = () => {
    const dispatch = useDispatch();

    return (
        
        <Wrapper>
            
            <BackgroundLetterAvatars/>
            <Button type="button" variant="contained" onClick={() => dispatch(logOut())}>Log Out</Button>
        </Wrapper>
    )
}