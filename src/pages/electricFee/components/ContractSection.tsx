import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { useContractModal } from "../hooks/useContractModal";
import * as Style from "../style/ElectricFeeStyle";
import Modal from "./Modal";

function ContractSection() {
    const contractModal = useContractModal();
    const [contract, setContract] = useState("");
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

    const handleContractSelect = (contract: string) => () => {
        setContract(contract);
        contractModal.onClose();
    };

    return (
        <Style.ContentContainer>
            <Style.ContentWrapper>
                <Style.Title>계약종별</Style.Title>
                <Style.ContractContainer>
                    {/* 모달 */}
                    <Modal
                        content={contractList}
                        hidden={!contractModal.isOpen}
                        handleContractSelect={handleContractSelect}
                    />
                    <Style.SelectorWrapper>
                        <Style.ContractSelector>
                            <Style.SelectContract
                                hidden={contractModal.isOpen}
                                onClick={contractModal.onOpen}
                            >
                                {contract === "" ? "선택" : contract}
                            </Style.SelectContract>
                        </Style.ContractSelector>
                        {contract && !contractModal.isOpen && (
                            <Style.RotateCcwContainer
                                onClick={contractModal.onOpen}
                                style={{
                                    display: contract ? "flex" : "none",
                                }}
                            >
                                <RotateCcw size={15} />
                            </Style.RotateCcwContainer>
                        )}
                    </Style.SelectorWrapper>
                </Style.ContractContainer>
            </Style.ContentWrapper>
        </Style.ContentContainer>
    );
}

export default ContractSection;
