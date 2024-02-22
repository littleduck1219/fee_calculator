import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import type { Styled } from "../model/style";
import { Flex } from "../style/globalStyle";

export default function Header(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <HeaderLayout>
            <HeaderContainer width={windowWidth}>
                <HeaderWrapper>
                    <Link to="/">
                        <Title>Billify</Title>
                    </Link>
                </HeaderWrapper>
            </HeaderContainer>
            {/* <div>로그인</div> */}
        </HeaderLayout>
    );
}

const HeaderLayout = styled.div`
    height: 81px;
`;

const HeaderContainer = styled.div<{ width: number }>`
    position: fixed;
    z-index: 1102;
    transition: top 0.1s ease 0s;
    top: 0;
    width: ${({ width }) => `${width}px`};
    border-bottom: 1px solid ${(props) => props.theme.color.ligthWestar};
    background-color: white;
`;

const HeaderWrapper = styled.div`
    height: 80px;
    padding: 10px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    display: inline;
    color: ${({ theme }) => `${theme.color.mediumSlateBlue}`};
    font-size: 2rem;
    font-weight: 700;
`;
