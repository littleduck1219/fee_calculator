import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { GlobalStyled } from "./style/globalStyle";

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <GlobalStyled />

            <Routes>
                <Route path="/" element={<RootLayout />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
