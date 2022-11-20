import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Section, Link, Header } from "components/Layout/Layout.styled";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import {selectIsLoggedIn} from "redux/Auth/selectors"
import { useSelector } from "react-redux";

const Layout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Section>
            <Header>
                <Link to='/' end>Home</Link>
                {isLoggedIn && <Link to='/phonebook'>Phone Book</Link>}
                {!isLoggedIn ? <AuthNav /> : <UserMenu/>}
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Section>
    )
}

export default Layout;
