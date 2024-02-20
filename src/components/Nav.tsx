import styled from "styled-components";
import { cursor, Flex } from "../style/globalStyle";
import type { Styled } from "../model/style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface NavItemArray {
    name: string;
    path: string;
}

interface NavContainerStyleProps {
    width: number,
    show: boolean,
    navHeight: number
}

export default function Nav() {
    const navHeight: number = 60;
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const navItems: NavItemArray[] = [
        { name: "전기요금", path: "/calculator/electric" },
        { name: "수도요금", path: "/calculator/water" },
    ];

    // 브라우저 사이즈에 따른 넓이 지정
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

    const controlNavbar = () => {
        setScrollY(window.scrollY);
        setShowNav(window.scrollY < lastScrollY || window.scrollY <= navHeight);
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]); // `lastScrollY`에 의존하지 않는 것으로 수정

    return (
        <div style={{ height: "60px" }}>
            <NavContainer width={windowWidth} show={showNav} scrollY={scrollY} navHeight={navHeight}>
                <NavWrapper>
                    <div style={{ flex: "1 0 0px" }}>
                        <NavItemContainer>
                            {navItems.map((item: NavItemArray, index: number) => (
                                <Link to={item.path} key={index}>
                                    <NavItemWrapper>
                                        <NavItem>{item.name}</NavItem>
                                    </NavItemWrapper>
                                </Link>
                            ))}
                        </NavItemContainer>
                    </div>
                </NavWrapper>
            </NavContainer>
        </div>
    );
}

const NavContainer = styled.div<{ width: number, show: boolean, scrollY: number, navHeight: number }>`
    position: ${({ show, scrollY }) => (scrollY > 0 && scrollY < 60 && show ? "relative" : "fixed")};
    z-index: 111;
    border-bottom: 1px solid ${(props) => props.theme.color.ligthWestar};
    transition: top 0.5s ease 0s;
    top: ${({ show, scrollY }) => (scrollY > 0 && scrollY < 60 && show ? "80px" : "-30px")};
    background-color: white;
    width: ${({ width }) => `${width}px`};
`;


const NavWrapper = styled.div`
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const NavItemContainer = styled.nav`
    display: flex;
    align-items: stretch;
`;

const NavItemWrapper = styled.div<Partial<Styled>>`
    ${Flex};
    ${cursor};
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 1.5rem;
    margin: 12px 6px;
`;

const NavItem = styled.p`
    line-height: 1rem;
    position: relative;

`;