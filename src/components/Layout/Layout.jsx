import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Section,Link,  Header } from "components/Layout/Layout.styled";

const Layout = () => {
    return (
        <Section>
            <Header>
                <Link to='/' end>Home</Link>
                <Link to='/phonebook'>Phone Book</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/register'>Register</Link>
                <button type="submit">Log Out</button>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Section>
    )
}

export default Layout;
