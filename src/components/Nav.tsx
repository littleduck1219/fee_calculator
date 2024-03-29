import styled from "styled-components";
import { cursor, Flex } from "../style/globalStyle";
import type { Styled } from "../model/style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

interface NavItemArray {
    name: string;
    path: string;
}

interface NavContainerProps {
    scroll: number;
    height: number;
    scrollstate: boolean;
}

export default function Nav() {
    const navHeight: number = 60;
    const [showNav, setShowNav] = useState(true);
    const [lastScrollState, setLastScrollState] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const navItems: NavItemArray[] = [
        { name: "전기요금", path: "/calculator/electric" },
        { name: "수도요금", path: "/calculator/water" },
    ];
    const { windowWidth } = useWindowWidth();

    const controlNavbar = () => {
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            const direction = window.scrollY > lastScrollY ? "down" : "up";
            lastScrollY = window.scrollY;

            if (direction === "up") {
                setLastScrollState(true);
            } else {
                setLastScrollState(false);
            }
        });

        setScrollY(window.scrollY);
        setShowNav(window.scrollY < lastScrollY || window.scrollY <= navHeight);
    };


    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return (
        <NavLayout scroll={scrollY}>
            <NavContainer style={{ width: `${windowWidth}px` }} scroll={scrollY} height={navHeight}
                          scrollstate={lastScrollState}>
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
        </NavLayout>
    );
}

const NavLayout = styled.div<{ scroll: number }>`
    height: ${({ scroll }) => (scroll > 0 && scroll < 60 ? null : "60px")};`;

const NavContainer = styled.div<NavContainerProps>`
    position: ${({ scroll }) => (scroll > 0 && scroll < 60 ? "relative" : "fixed")};
    z-index: 111;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.ligthWestar}`};
    transition: ${({ scroll }) => (scroll > 60 ? "top 0.5s ease 0s" : null)};
    top: ${({ scroll, scrollstate, height }) => {
        if (scroll > height) return scrollstate ? "80px" : "-100px";
        return "0";
    }};
    background-color: white;
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
    border: ${({ theme }) => `1px solid ${theme.color.mediumSlateBlue}`};
    background-color: ${({ theme }) => `${theme.color.white}`};

    border-radius: 1.5rem;
    margin: 12px 6px;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => `${theme.color.mediumSlateBlue}`};
        font-weight: 700;
        box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    }
`;

const NavItem = styled.p`
    line-height: 1rem;
    position: relative;
`;