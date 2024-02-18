import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Flex } from "../style/globalStyle";
import { RotateCcw } from "lucide-react";
import { useContractModal } from "../hooks/useContractModal";
import type { Styled } from "../model/style";

interface ContractOptionProps extends Partial<Styled> {
    isOpen: boolean;
}

export default function ElectricFee() {
    const [contract, setContract] = useState("");
    const contractModalRef = useRef<HTMLDivElement>(null);
    const { isOpen, onOpen, onClose } = useContractModal();
    const contractList: string[] = ["주택용 저압", "주택용 고압", "일반용(갑)Ⅰ", "일반용(갑)Ⅱ", "일반용(을)", "1주택 수 가구", "교육용(갑)", "교육용(을)", "산업용(갑)Ⅰ", "산업용(갑)Ⅱ", "산업용(을)", "임시(갑)", "임시(을)", "가로등(을)", "심야전력(갑)", "농사용(갑)", "농사용(을)"];

    console.log(isOpen);

    const handleContractSelect = (contract: string) => () => {
        setContract(contract);
        onClose();
    };

    useEffect(() => {
        onOpen();
    }, []);


    return (git
        <>
            <PageTitle>전기요금 계산기</PageTitle>
            <SectionContainer>
                <LeftSectionWrapper>
                    <LeftSection>
                        <ContentWrapper $fd="column" $ai="flex-start">
                            <TitleWrapper $jc="space-between">
                                <Title>계약종별</Title>
                                {contract && !isOpen && (
                                    <div onClick={onOpen}>
                                        <RotateCcw size={15} />
                                    </div>
                                )}
                            </TitleWrapper>
                            <ContractSelector
                                ref={contractModalRef}
                                $jc="space-between"
                            >
                                <div>{isOpen || contract}</div>

                            </ContractSelector>
                            {/* Contract 모달 */}
                            <ContractOption isOpen={isOpen} $fd="column">
                                {isOpen &&
                                    contractList.map((contract, index) => (
                                        <div key={index} onClick={handleContractSelect(contract)}>
                                            {contract}
                                        </div>
                                    ))}
                            </ContractOption>
                        </ContentWrapper>
                        <OptionWrapper>
                            <TitleWrapper $jc="flex-start">
                                <Title>조건선택</Title>
                            </TitleWrapper>
                            <OptionSelector
                                ref={contractModalRef}
                                onClick={onOpen}
                            >
                            </OptionSelector>
                        </OptionWrapper>
                    </LeftSection>
                </LeftSectionWrapper>
                <RightSectionWrapper>
                    <RightSection></RightSection>
                </RightSectionWrapper>
            </SectionContainer>
        </>
    );
}


const SectionContainer = styled.div<Partial<Styled>>`
    ${Flex};
    height: 100dvh;
    gap: 20px;
`;


const PageTitle = styled.h2`
    font-size: 2rem;
    margin: 0 auto;
    max-width: 1256px;
    padding: 20px 60px;
`;


const LeftSectionWrapper = styled.div<Partial<Styled>>`
    flex: 1;
`;

const LeftSection = styled.section`
    height: 100dvh;
`;

const RightSectionWrapper = styled.div<Partial<Styled>>`
    ${Flex};
    flex: 1;
`;

const RightSection = styled.section<Partial<Styled>>`
    ${Flex};
    width: 100%;
    max-width: 500px;
    height: 100dvh;
`;

const ContentWrapper = styled.div<Partial<Styled>>`
    ${Flex};
    max-width: 500px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 20px;
    transition: padding 0.3s ease, max-width 0.3s ease;

    &:hover {
        padding: 30px;
        max-width: 520px;
    }
`;

const TitleWrapper = styled.div<Partial<Styled>>`
    ${Flex};
    width: 100%;
`;

const Title = styled.p`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 700;
    text-align: left;
    position: relative;
    height: 100%;
    margin-bottom: 10px;
`;

const ContractSelector = styled.div<Partial<Styled>>`
    ${Flex};
    width: 100%;
`;

const ContractOption = styled.div<ContractOptionProps>`
    ${Flex};
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${({ isOpen }) => isOpen && `
        opacity: 1;
        transform: translateY(0);
    `}
`;
const OptionWrapper = styled.div<Partial<Styled>>`
    ${Flex};
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 10px;
    width: inherit;
`;

const OptionSelector = styled.div<Partial<Styled>>``;