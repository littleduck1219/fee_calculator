import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ElectricFee from "./pages/ElectricFee";
import Landing from "./pages/Landing";
import WaterFee from "./pages/WaterFee";
import { GlobalStyled } from "./style/globalStyle";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyled />
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Landing />} />
                    <Route
                        path="calculator/electric"
                        element={<ElectricFee />}
                    />
                    <Route path="calculator/water" element={<WaterFee />} />
                </Route>
                <Route path="*" element={<div>Not Found</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
