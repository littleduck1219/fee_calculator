import styled from "styled-components";
import type { ContractOptionProps } from "../model/type";

export const SectionContainer = styled.div`
    display: flex;
    height: 100dvh;
    gap: 20px;
`;


export const PageTitle = styled.h2`
    font-size: 2rem;
    margin: 0 auto;
    max-width: 1256px;
    padding: 20px 60px;
`;

// LeftSection
export const LeftSectionWrapper = styled.div`
    flex: 1;
`;

export const LeftSection = styled.section`
    height: 100dvh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 20px;
    transition: padding 0.3s ease, max-width 0.3s ease;

    &:hover {
        padding: 30px;
        max-width: 600px;
    }
`;

export const ContractSelectOptionWrapper = styled.div<{ hidden: boolean, windowWidth: number }>`
    position: absolute;
    inset: 0 auto auto 0;
    transform: ${({ windowWidth }) => `translate3d( ${windowWidth / 2.05 - 150}px, 250px, 0px)`};
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    flex-direction: column;
    padding: 10px 5px;
    background: ${({ theme }) => `${theme.color.scampi}`};
    border-radius: 10px;
    visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    transition: opacity 0.5s ease, visibility 0.5s ease;
    max-height: ${({ hidden }) => (hidden ? "0" : "auto")};
    overflow: hidden;
    z-index: 100; // 확실히 최상위에 위치하도록 z-index 설정
`;

export const ContractSelectOption = styled.div`
    color: ${({ theme }) => theme.color.white};
    padding: 5px 20px;

    &:hover {
        background: ${({ theme }) => theme.color.mediumSlateBlue};
    }
`;


export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.p`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 700;
    text-align: left;
    position: relative;
    height: 100%;
`;

export const ContractContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContractSelector = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const SelectorWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const SelectContract = styled.div<{ hidden: boolean }>`
    display: flex;
    padding: 10px 20px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ hidden, theme }) => hidden ? null : `${theme.color.scampi}`};
    border-radius: 20px;
`;

export const ContractOption = styled.div<ContractOptionProps>`
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${({ isOpen }) => isOpen && `
        opacity: 1;
        transform: translateY(0);
    `}
`;

export const RotateCcwContainer = styled.div<{ hideIcon: boolean }>`
    display: ${({ hideIcon }) => (hideIcon ? "none" : "flex")};
    align-items: center;
`;

export const OptionSelector = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    padding: 10px 30px;
`;

export const HousingSelection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    transition: background-color 0.3s ease;
    color: ${({ theme }) => theme.color.white};
    background: ${({ hidden, theme }) => hidden ? null : `${theme.color.scampi}`};

    &:hover {
        background-color: ${({ theme }) => theme.color.mediumSlateBlue};
        color: ${({ theme }) => theme.color.white};
    }
`;

export const HousingTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0 0 10px;
`;


// RightSection
export const RightSectionWrapper = styled.div`
    display: flex;
    flex: 1;
`;

export const RightSection = styled.section`
    display: flex;
    width: 100%;
    max-width: 500px;
    height: 100dvh;
`;


export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export const StartDate = styled.div`
    width: 100%;
`;

export const Text = styled.p`
    font-weight: 500;
    line-height: 20px;
    text-align: center;
`;
