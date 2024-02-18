import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(): JSX.Element {
    return (
        <Logo>
            <Link to="/">요금계산기</Link>
        </Logo>
    );
}

const Logo = styled.div`
    padding: 20px 60px;
    border-bottom: 1px solid ${(props) => props.theme.color.borderColor1};
    font-weight: bold;
`;
