import { Calendar as CalendarButton, RotateCcw } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import useWindowWidth from "../../hooks/useWindowWidth";
import UseModal from "./components/useModal";
import { useContractModal } from "./hooks/useContractModal";
import { useOptionModal } from "./hooks/useOptionModal";
import * as Style from "./style/ElectricFeeStyle";

export default function ElectricFee() {
    const [contract, setContract] = useState("");
    const [option, setOption] = useState("");
    const [houseSelection, setHouseSelection] = useState("");
    const contractModal = useContractModal();
    const optionModal = useOptionModal();
    const { windowWidth } = useWindowWidth();
    const contractList: string[] = [
        "주택용 저압",
        "주택용 고압",
        "일반용(갑)Ⅰ",
        "일반용(갑)Ⅱ",
        "일반용(을)",
        "1주택 수 가구",
        "교육용(갑)",
        "교육용(을)",
        "산업용(갑)Ⅰ",
        "산업용(갑)Ⅱ",
        "산업용(을)",
        "임시(갑)",
        "임시(을)",
        "가로등(을)",
        "심야전력(갑)",
        "농사용(갑)",
        "농사용(을)",
    ];
    const familyDiscountList: string[] = [
        "해당없음",
        "5인이상 가구",
        "출산가구",
        "3자녀이상 가구",
        "생명유지장치",
    ];
    const welfareDiscountList = [
        "해당없음",
        "장애인",
        "국가유공자",
        "독립유공자",
        "기초생활(생계, 의료)",
        "사회복지시설",
        "5.18 민주유공자",
        "차상위계층",
        "기초생활(주거, 교육)",
    ];
    const [date, setDate] = useState<Date | null>(null);

    const handleContractSelect = (contract: string) => () => {
        setContract(contract);
        contractModal.onClose();
        optionModal.onOpen();
    };

    const handleOptionSelect = (option: string) => () => {};

    const handleDateChange = (
        value: any,
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
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
            <Style.PageTitle>전기요금 계산기</Style.PageTitle>
            <Style.SectionContainer>
                <Style.LeftSectionWrapper>
                    <Style.LeftSection>
                        <Style.ContentContainer>
                            <Style.ContentWrapper>
                                <Style.Title>계약종별</Style.Title>
                                <Style.ContractContainer>
                                    {/* 모달 */}
                                    <UseModal
                                        content={contractList}
                                        hidden={!contractModal.isOpen}
                                        handleContractSelect={
                                            handleContractSelect
                                        }
                                    />
                                    <Style.SelectorWrapper>
                                        <Style.ContractSelector>
                                            <Style.SelectContract
                                                hidden={contractModal.isOpen}
                                                onClick={contractModal.onOpen}
                                            >
                                                {contract === ""
                                                    ? "선택"
                                                    : contract}
                                            </Style.SelectContract>
                                        </Style.ContractSelector>
                                        {contract && !contractModal.isOpen && (
                                            <Style.RotateCcwContainer
                                                onClick={contractModal.onOpen}
                                                hideIcon={!contract}
                                            >
                                                <RotateCcw size={15} />
                                            </Style.RotateCcwContainer>
                                        )}
                                    </Style.SelectorWrapper>
                                </Style.ContractContainer>
                            </Style.ContentWrapper>
                        </Style.ContentContainer>
                        <Style.ContentContainer>
                            <Style.OptionWrapper>
                                <Style.Title>조건선택</Style.Title>
                                <div>
                                    <Style.HousingTitle>
                                        주거구분
                                    </Style.HousingTitle>
                                    <Style.OptionSelector>
                                        <Style.HousingSelection>
                                            <Style.Text>주거용</Style.Text>
                                        </Style.HousingSelection>
                                        <Style.HousingSelection>
                                            <Style.Text>비주거용</Style.Text>
                                        </Style.HousingSelection>
                                    </Style.OptionSelector>
                                </div>
                            </Style.OptionWrapper>
                            <Style.ContractOption
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
                            </Style.ContractOption>
                            <Style.StartDate>
                                <div>시작날짜</div>
                                <CalendarButton />
                            </Style.StartDate>
                            <div className="calendar-container">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={date}
                                />
                            </div>
                        </Style.ContentContainer>
                    </Style.LeftSection>
                </Style.LeftSectionWrapper>
                <Style.RightSectionWrapper>
                    <Style.RightSection></Style.RightSection>
                </Style.RightSectionWrapper>
            </Style.SectionContainer>
        </>
    );
}
