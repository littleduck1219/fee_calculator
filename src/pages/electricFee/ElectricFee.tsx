import { Calendar as CalendarButton } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import useWindowWidth from "../../hooks/useWindowWidth";
import { FlexBox } from "../../style/globalStyle";
import ContractSection from "./components/ContractSection";
import Modal from "./components/Modal";
import { useHousingModal } from "./hooks/useHousingModal";
import * as Style from "./style/ElectricFeeStyle";

export default function ElectricFee() {
    const [option, setOption] = useState("");
    const [houseSelection, setHouseSelection] = useState<null | boolean>(null);
    const [familyDiscount, setFamilyDiscount] = useState("");
    const housingModal = useHousingModal();
    const { windowWidth } = useWindowWidth();

    const handleFamilyDiscountSelect = (contract: string) => () => {
        setFamilyDiscount(familyDiscount);
    };

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
                        <ContractSection />
                        <Style.ContentContainer>
                            <Style.OptionWrapper>
                                <Style.Title>조건선택</Style.Title>
                                <div>
                                    <Style.HousingTitle>
                                        주거구분
                                    </Style.HousingTitle>
                                    <Style.OptionSelector>
                                        <Style.HousingSelection
                                            onClick={() => {
                                                setHouseSelection(true);
                                            }}
                                            selected={houseSelection === true}
                                        >
                                            <Style.Text>주거용</Style.Text>
                                        </Style.HousingSelection>
                                        <Style.HousingSelection
                                            onClick={() => {
                                                setHouseSelection(false);
                                            }}
                                            selected={houseSelection === false}
                                        >
                                            <Style.Text>비주거용</Style.Text>
                                        </Style.HousingSelection>
                                    </Style.OptionSelector>
                                </div>
                            </Style.OptionWrapper>
                            <Style.ContractOption
                                open={housingModal.isOpen}
                                $fd="column"
                            >
                                {houseSelection && housingModal.isOpen && (
                                    <>
                                        <FlexBox $jc="space-between">
                                            <Style.HousingTitle>
                                                대가족/생명유지장치 요금
                                            </Style.HousingTitle>
                                            <Style.ContractSelector>
                                                <Style.SelectContract
                                                    hidden={housingModal.isOpen}
                                                    onClick={
                                                        housingModal.onOpen
                                                    }
                                                >
                                                    {familyDiscount === ""
                                                        ? "선택"
                                                        : familyDiscount}
                                                </Style.SelectContract>
                                            </Style.ContractSelector>
                                        </FlexBox>

                                        <Modal
                                            content={familyDiscountList}
                                            hidden={!housingModal.isOpen}
                                            handleContractSelect={
                                                handleFamilyDiscountSelect
                                            }
                                        />
                                    </>
                                )}
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
