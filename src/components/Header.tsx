import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import type { Styled } from "../model/style";
import { Flex } from "../style/globalStyle";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Header(): JSX.Element {
    const { windowWidth } = useWindowWidth();

    return (
        <HeaderLayout>
            <HeaderContainer style={{ width: `${windowWidth}px` }}>
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

const HeaderContainer = styled.div`
    position: fixed;
    z-index: 1102;
    transition: top 0.1s ease 0s;
    top: 0;
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
