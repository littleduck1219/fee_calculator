import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(): JSX.Element {
    return (
        <Logo>
            <Link to="/">통합요금계산기</Link>
        </Logo>
    );
}

const Logo = styled.div`
    padding:10px;
    border-bottom: 1px solid black
`;
