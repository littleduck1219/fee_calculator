import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function ElectricFee() {
    const [contractModal, setContractModal] = useState(false);
    const contractModalRef = useRef<HTMLDivElement>(null);

    const contractList: string[] = ["주택용 저압", "주택용 고압"];

    const handleContractSelect = () => {
        setContractModal(!contractModal);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                contractModalRef.current &&
                !contractModalRef.current.contains(e.target as Node)
            ) {
                setContractModal(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [contractModalRef, contractModal]);

    return (
        <form>
            <div>계약종별</div>
            <ContractSelector
                ref={contractModalRef}
                onClick={handleContractSelect}
            >
                버튼
                {contractModal &&
                    contractList.map((contract, index) => (
                        <div key={index}>{contract}</div>
                    ))}
            </ContractSelector>
            <div>조건선택</div>
        </form>
    );
}

const ContractSelector = styled.div``;
