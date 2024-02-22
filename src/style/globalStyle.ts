import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import type { Styled } from "../model/style";

/* About createGlobalStyle ---------------------------------------------- */
export const GlobalStyled = createGlobalStyle`
    ${reset}
    *, *::before, *::after {
        box-sizing: border-box;
        text-decoration: none;
        //color: #25272C; // shark
    }

    html, body, :root {
        height: 100%;
    }


    body {
        width: 100%;
        ${({ theme }) => theme.font.PretendardL}
    }

    div {
        display: block;
    }
`;

/* About css styled ---------------------------------------------- */
const Flex = css<Partial<Styled>>`
    display: flex;
    flex-direction: ${({ $fd }) => $fd ?? "row"};
    justify-content: ${({ $jc }) => $jc ?? "center"};
    align-items: ${({ $ai }) => $ai ?? "center"};
    gap: ${({ $gap }) => ($gap ? `${$gap}px` : "none")};
`;

const Grid = css<Partial<Styled>>`
    display: grid;
    grid-template-columns: ${({ $gtc }) => $gtc ?? "repeat(2, 1fr)"};
    // repeat(7, 1fr) ?? repeat(auto-fill, minmax(20%, auto));
    grid-template-rows: ${({ $gtr }) => $gtr ?? "none"};
    // 구체적인 row를 알고 있을 때 // auto ?? repeat(3, minmax(100px, auto));
    grid-auto-rows: ${({ $gar }) => $gar ?? "none"};
    // 구체적인 row를 모를 때 // //minmax(100px, auto);
    gap: ${({ $gap }) => ($gap ? `${$gap}px` : "none")};
    column-gap: ${({ $cgap }) => ($cgap ? `${$cgap}px` : "none")};
    row-gap: ${({ $rgap }) => ($rgap ? `${$rgap}px` : "none")};
`;

const cursor = css`
    cursor: pointer;
`;

/* About Div styled ---------------------------------------------- */
const FlexBox = styled.div<Partial<Styled>>`
    ${Flex}
`;

const GridBox = styled.div<Partial<Styled>>`
    ${Grid};
    width: 100%;
    background-color: ${({ $color }) => $color};
`;

const GridMergedSpace = styled.div<Partial<Styled>>`
    grid-column-start: ${({ $mergedgcs }) => $mergedgcs ?? "auto"};
    grid-column-end: ${({ $mergedgce }) => $mergedgce ?? "auto"}; // span 2;
    grid-row-start: ${({ $mergedgrs }) => $mergedgrs ?? "auto"};
    grid-row-end: ${({ $mergedgre }) => $mergedgre ?? "auto"}; // span 3;
`;

const GridMergedSpaceFlex = styled(GridMergedSpace)`
    ${Flex};
`;

const Figure = styled.figure<Partial<Styled>>`
    ${Flex};
    position: ${({ $position }) => $position ?? "relative"};
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    img {
        display: block;
        width: 100%;
    }

    ${({ $types }) =>
            $types === "cursor" &&
            css`
                ${cursor}
            `}

    ${({ $types }) =>
            $types === "innocar" &&
            css`
                transition: all 0.3s linear;

                @media (max-width: 1100px) {
                    transform: rotate(90deg);
                    img {
                        width: 80%;
                    }
                }
            `}
`;

const FigureObjectFit = styled.figure<Partial<Styled>>`
    position: relative;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    box-shadow: ${({ $shadow }) => $shadow};

    ${({ $types }) =>
            $types === "reviewBanner"
                    ? css`
                        z-index: 2;
                        height: 159px;
                        overflow: hidden;
                        border-radius: 10px;
                    `
                    : $types === "postInnerImg" &&
                    css`
                        overflow: hidden;
                        height: 11.18vw;
                        border-radius: 10px;

                        @media (min-width: 1440px) {
                            height: 161px;
                        }
                    `}
    ${({ $types }) =>
            $types === "prevImage"
                    ? css`
                        overflow: hidden;
                        border-radius: 4px;
                    `
                    : $types === "communityNewCar" &&
                    css`
                        overflow: hidden;
                        border-radius: 10px;
                    `}
    ${({ $types }) => $types === "cursor" && css`${cursor}`}
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    ${({ $types }) =>
            $types === "innoCarSection1Img" &&
            css`
                margin: 0 auto;
                @media (max-width: 1024px) {
                    width: 100%;

                    img {
                        /* width: 90%; */
                        height: 60%;
                    }
                }
            `}
`;

const RouterLayout = styled.div<Partial<Styled>>`
    ${Flex};
`;

const CustomH1 = styled.h1<Partial<Styled>>`
    font-size: ${({ $size }) => ($size ? `${$size}rem` : "1.25rem")};
    font-weight: bold;
    line-height: ${({ $height }) => $height};
    color: ${({ $color, theme }) => $color && theme.color[$color]};

    ${({ $types }) =>
            $types === "bottomLine" &&
            css`
                width: 100%;
                text-align: center;
                border-bottom: 1px solid ${({ theme }) => theme.color.blackM};
            `}
`;

const CustomH2 = styled.div`
    font-size: 1rem;
    color: #999999;
`;

const CustomH3 = styled.h3<Partial<Styled>>`

    font-size: ${({ $size }) => ($size ? `${$size}rem` : "1rem")};
    font-weight: 500;
    color: ${({ $color, theme }) => $color && theme.color[$color]};

    ${({ $types }) =>
            $types === "revisit" &&
            css`
                width: 105px;
                height: 36px;
                line-height: 36px;
            `}

    ${({ $types }) =>
            $types === "nickname" &&
            css`
                width: 105px;
                line-height: 22px;
            `}
`;

const CustomBtn = styled.div<Partial<Styled>>`
    ${({ theme }) => theme.btnSize.primary}
    ${cursor}
    color: ${({ $color }) => $color};
    border-radius: ${({ $borderR }) => $borderR};
    border: 1px solid ${({ $bColor }) => $bColor};
    ${({ $bColor, theme }) =>
            $bColor === "blue"
                    ? css`
                        background-color: ${theme.color[$bColor]};
                        color: ${theme.color.white};
                    `
                    : null}

    ${({ $types }) =>
            $types === "reviewForm"
                    ? css`
                        position: absolute;
                        top: 0;
                        right: 0;
                    `
                    : null}
`;

const PositionRelavite = styled.div<Partial<Styled>>`
    position: relative;

    ${({ $types }) => $types === "cursor" && css`${cursor}`}
`;

export {
    CustomBtn,
    CustomH1,
    CustomH2,
    CustomH3,
    Figure,
    FigureObjectFit,
    Flex,
    FlexBox,
    Grid,
    GridBox,
    GridMergedSpace,
    GridMergedSpaceFlex,
    PositionRelavite,
    RouterLayout,
    cursor,
};
