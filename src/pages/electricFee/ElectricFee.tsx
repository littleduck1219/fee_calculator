import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Flex, FlexBox } from "../../style/globalStyle";
import { Calendar as CalendarButton, RotateCcw } from "lucide-react";
import { useContractModal } from "./hooks/useContractModal";
import type { Styled } from "../../model/style";
import { useOptionModal } from "./hooks/useOptionModal";
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

    return (
        <>
            <PageTitle>전기요금 계산기</PageTitle>
            <SectionContainer>
                <LeftSectionWrapper>
                    <LeftSection>
                        <ContentContainer>
                            <ContentWrapper>
                                <Title>계약종별</Title>

                                <ContractContainer>
                                    <ContractSelectOptionWrapper
                                        hidden={!contractModal.isOpen}
                                    >
                                        {contractModal.isOpen &&
                                            contractList.map(
                                                (contract, index) => (
                                                    <ContractSelectOption
                                                        key={index}
                                                        onClick={handleContractSelect(
                                                            contract,
                                                        )}
                                                    >
                                                        <p>{contract}</p>
                                                    </ContractSelectOption>
                                                ),
                                            )}
                                    </ContractSelectOptionWrapper>
                                    <SelectorWrapper>
                                        <ContractSelector>
                                            <SelectContract
                                                hidden={!contractModal.isOpen}
                                            >
                                                {`${contract} == "" ? "선택" : ${contract} :`}
                                            </SelectContract>
                                        </ContractSelector>
                                        {contract && !contractModal.isOpen && (
                                            <RotateCcwContainer
                                                onClick={contractModal.onOpen}
                                                hideIcon={!contract}
                                            >
                                                <RotateCcw size={15} />
                                            </RotateCcwContainer>
                                        )}
                                    </SelectorWrapper>
                                </ContractContainer>
                            </ContentWrapper>
                        </ContentContainer>
                        <OptionWrapper>
                            <ContentWrapper>
                                <Title>조건선택</Title>
                                {option && !optionModal.isOpen && (
                                    <div onClick={optionModal.onOpen}>
                                        <RotateCcw size={15} />
                                    </div>
                                )}
                            </ContentWrapper>
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
                                <Calendar
                                    onChange={handleDateChange}
                                    value={date}
                                />
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


const SectionContainer = styled.div`
    display: flex;
    height: 100dvh;
    gap: 20px;
`;


const PageTitle = styled.h2`
    font-size: 2rem;
    margin: 0 auto;
    max-width: 1256px;
    padding: 20px 60px;
`;

// LeftSection
const LeftSectionWrapper = styled.div`
    flex: 1;
`;

const LeftSection = styled.section`
    height: 100dvh;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
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

const ContractSelectOptionWrapper = styled.div<{ hidden: boolean }>`
    position: fixed;
    top: 260px;
    left: 350px;
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
    background: ${({ hidden, theme }) => hidden ? null : `${theme.color.scampi}`};
    border-radius: 10px;
    visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    transition: opacity 0.5s ease;
    max-height: ${({ hidden }) => (hidden ? "0" : "auto")};
    overflow: hidden;
`;

const ContractSelectOption = styled.div``;


const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.p`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 700;
    text-align: left;
    position: relative;
    height: 100%;
`;

const ContractContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContractSelector = styled.div`
    display: flex;
    align-items: flex-end;
`;

const SelectorWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const SelectContract = styled.div<{ hidden: boolean }>`
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    padding: 10px 20px;
    background: ${({ hidden, theme }) => hidden ? null : `${theme.color.scampi}`};
    border-radius: 20px;
`;

const ContractOption = styled.div<ContractOptionProps>`
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${({ isOpen }) => isOpen && `
        opacity: 1;
        transform: translateY(0);
    `}
`;

const RotateCcwContainer = styled.div<{ hideIcon: boolean }>`
    display: ${({ hideIcon }) => (hideIcon ? "none" : "flex")};
    align-items: center;
`;

// RightSection
const RightSectionWrapper = styled.div`
    display: flex;
    flex: 1;
`;

const RightSection = styled.section`
    display: flex;
    width: 100%;
    max-width: 500px;
    height: 100dvh;
`;


const OptionWrapper = styled.div`
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


const OptionSelector = styled.div`
    width: 100%;
`;

const StartDate = styled.div`
    width: 100%;
`;