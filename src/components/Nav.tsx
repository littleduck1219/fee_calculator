import styled from "styled-components";
import { cursor, Flex } from "../style/globalStyle";
import type { Styled } from "../model/style";
import { Link } from "react-router-dom";

export default function Nav() {
    const navItems: string[] = ["전기요금", "수도요금"];
    return (
        <NavContainer>
            <NavWrapper>
                <NavItemContainer>
                    {navItems.map((item: string, index: number) => (
                        <Link to="/calculator/electric" key={index}>
                            <NavItemWrapper>
                                <NavItem>{item}</NavItem>
                            </NavItemWrapper>
                        </Link>
                    ))}
                </NavItemContainer>
            </NavWrapper>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    position: relative;
    z-index: 1111;
`;

const NavWrapper = styled.div`
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;
    border-bottom: 1px solid black;
`;

const NavItemContainer = styled.nav`
    margin: 0 auto;
    width: 1300px;
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
`;

const NavItemWrapper = styled.div<Partial<Styled>>`
    ${Flex};
    ${cursor};
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 1.5rem;
`;

const NavItem = styled.p`
    line-height: 1rem;
    position: relative;
`;