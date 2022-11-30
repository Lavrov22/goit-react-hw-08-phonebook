import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Link} from "components/Layout/Layout.styled";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import {selectIsLoggedIn} from "redux/Auth/selectors"
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Container, Box  } from '@mui/material';

export const Layout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Link to='/' end >Home</Link>
                        {isLoggedIn && <Link to='/phonebook'>Phone Book</Link>}
                        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Container>
        </Box>
    )
};

// export default Layout;
