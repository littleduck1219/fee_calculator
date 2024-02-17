import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Nav from "./Nav";

export default function RootLayout(): JSX.Element {
    return (
        <>
            <Header />
            <Nav />
            <SiteLayout>
                <OutletWrapper><Outlet /></OutletWrapper>
            </SiteLayout>
        </>
    );
}

const SiteLayout = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const OutletWrapper = styled.div`
    margin: 0 auto;
    max-width: 1256px;
    padding: 0 60px;
`;
