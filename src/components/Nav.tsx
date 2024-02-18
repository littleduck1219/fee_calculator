import styled from "styled-components";
import { cursor, Flex } from "../style/globalStyle";
import type { Styled } from "../model/style";
import { Link } from "react-router-dom";
import { useContractModal } from "../hooks/useContractModal";

interface NavProps {
    hidden: boolean;
}

interface NavItemArray {
    name: string;
    path: string;
}

export default function Nav({ hidden }: NavProps) {
    const navItems: NavItemArray[] = [
        { name: "전기요금", path: "/calculator/electric" },
        { name: "수도요금", path: "/calculator/water" },
    ];

    return (
        <NavContainer hidden={hidden}>
            <NavWrapper>
                <NavItemContainer>
                    {navItems.map((item: NavItemArray, index: number) => (
                        <Link to={item.path} key={index}>
                            <NavItemWrapper>
                                <NavItem>{item.name}</NavItem>
                            </NavItemWrapper>
                        </Link>
                    ))}
                </NavItemContainer>
            </NavWrapper>
        </NavContainer>
    );
}

const NavContainer = styled.div<{ hidden: boolean }>`
    position: relative;
    z-index: 1111;
    border-bottom: 1px solid ${(props) => props.theme.color.borderColor1};
    margin-top: ${(props) => (props.hidden ? "-100px" : "0")};
    transition: margin-top 0.3s; // 부드러운 전환 효과
`;

const NavWrapper = styled.div`
    max-width: 1256px;
    margin: 0 auto;
    padding: 10px 60px;

`;

const NavItemContainer = styled.nav`
    margin: 0 auto;
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