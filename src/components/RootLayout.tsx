import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout(): JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
