import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Nav from "./Nav";
import { useEffect, useState } from "react";

export default function RootLayout(): JSX.Element {
    const [navHidden, setNavHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setNavHidden(true);
            } else {
                setNavHidden(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <>
            <Header />
            <Nav hidden={navHidden} />
            <SiteLayout>
                <OutletWrapper>
                    <Outlet />
                </OutletWrapper>
            </SiteLayout>
        </>
    );
}

const SiteLayout = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const OutletWrapper = styled.div`
    margin: 0 auto;
    max-width: 1256px;
    padding: 20px 60px;
`;
