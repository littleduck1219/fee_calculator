import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Flex } from "../style/globalStyle";
import { Calendar as CalendarButton, RotateCcw } from "lucide-react";
import { useContractModal } from "../hooks/useContractModal";
import type { Styled } from "../model/style";
import { useOptionModal } from "../hooks/useOptionModal";
import Calendar from "react-calendar";

interface ContractOptionProps extends Partial<Styled> {
    isOpen: boolean;
}

export default function ElectricFee() {
    const [contract, setContract] = useState("");
    const [option, setOption] = useState("");
    const contractModal = useContractModal();
    const optionModal = useOptionModal();
    const contractList: string[] = ["주택용 저압", "주택용 고압", "일반용(갑)Ⅰ", "일반용(갑)Ⅱ", "일반용(을)", "1주택 수 가구", "교육용(갑)", "교육용(을)", "산업용(갑)Ⅰ", "산업용(갑)Ⅱ", "산업용(을)", "임시(갑)", "임시(을)", "가로등(을)", "심야전력(갑)", "농사용(갑)", "농사용(을)"];
    const familyDiscountList: string[] = ["해당없음", "5인이상 가구", "출산가구", "3자녀이상 가구", "생명유지장치"];
    const welfareDiscountList = ["해당없음", "장애인", "국가유공자", "독립유공자", "기초생활(생계, 의료)", "사회복지시설", "5.18 민주유공자", "차상위계층", "기초생활(주거, 교육)"];
    const [date, setDate] = useState<Date | null>(null);


    const handleContractSelect = (contract: string) => () => {
        setContract(contract);
        contractModal.onClose();
        optionModal.onOpen();
    };

    const handleOptionSelect = (option: string) => () => {
    };

    const handleDateChange = (value: any, event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("날짜", value);
        if (Array.isArray(value)) {
            const [startDate] = value;
            setDate(startDate);
        } else if (value) {
            setDate(value);
        }
    };

    useEffect(() => {
        contractModal.onOpen();
    }, []);


    return (
        <>
            <PageTitle>전기요금 계산기</PageTitle>
            <SectionContainer>
                <LeftSectionWrapper>
                    <LeftSection>
                        <ContentWrapper $fd="column" $ai="flex-start">
                            <TitleWrapper $jc="space-between">
                                <Title>계약종별</Title>
                                {contract && !contractModal.isOpen && (
                                    <div onClick={contractModal.onOpen}>
                                        <RotateCcw size={15} />
                                    </div>
                                )}
                            </TitleWrapper>
                            <ContractSelector $jc="space-between">
                                <div>{contractModal.isOpen || contract}</div>
                            </ContractSelector>
                            {/* Contract 모달 */}
                            <ContractOption
                                isOpen={contractModal.isOpen}
                                $fd="column"
                            >
                                {contractModal.isOpen &&
                                    contractList.map((contract, index) => (
                                        <div
                                            key={index}
                                            onClick={handleContractSelect(
                                                contract,
                                            )}
                                        >
                                            {contract}
                                        </div>
                                    ))}
                            </ContractOption>
                        </ContentWrapper>
                        <OptionWrapper $fd="column" $ai="flex-start">
                            <TitleWrapper $jc="flex-start">
                                <Title>조건선택</Title>
                                {option && !optionModal.isOpen && (
                                    <div onClick={optionModal.onOpen}>
                                        <RotateCcw size={15} />
                                    </div>
                                )}
                            </TitleWrapper>
                            <OptionSelector>
                                <div style={{ width: "50%" }}>주거용</div>
                                <div style={{ width: "50%" }}>비주거용</div>
                            </OptionSelector>
                            {}
                            <ContractOption
                                isOpen={optionModal.isOpen}
                                $fd="column"
                            >
                                {optionModal.isOpen &&
                                    familyDiscountList.map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={handleOptionSelect(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                            </ContractOption>
                            <StartDate>
                                <div>시작날짜</div>
                                <CalendarButton />
                            </StartDate>
                            <div className="calendar-container">
                                <Calendar onChange={handleDateChange} value={date} />
                            </div>
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


const OptionSelector = styled.div<Partial<Styled>>`
    ${Flex};
    width: 100%;
`;

const StartDate = styled.div<Partial<Styled>>`
    ${Flex};
    width: 100%;
`;