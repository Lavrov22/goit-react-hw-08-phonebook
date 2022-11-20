import { useDispatch, useSelector } from "react-redux";
import { selectName } from "redux/Auth/selectors";
import { logOut } from "redux/Auth/operations";


export const UserMenu = () => {
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    return (
        
        <>  
            <p>Welcome, {name }</p>
            <button type="submit" onClick={() => dispatch(logOut())}>Log Out</button>
        </>
    )
}