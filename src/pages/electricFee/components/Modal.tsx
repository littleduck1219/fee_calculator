import useWindowWidth from "../../../hooks/useWindowWidth";
import * as Style from "../style/ElectricFeeStyle";

export default function Modal({
    content,
    hidden,
    handleContractSelect,
}: {
    content: string[];
    hidden: boolean;
    handleContractSelect: (contract: string) => () => void;
}) {
    const { windowWidth } = useWindowWidth();

    return (
        <>
            <Style.ContractSelectOptionWrapper
                hidden={hidden}
                window={windowWidth}
            >
                {/* 모달 */}
                {content.map((contract, index) => (
                    <Style.ContractSelectOption
                        key={index}
                        onClick={handleContractSelect(contract)}
                    >
                        <p>{contract}</p>
                    </Style.ContractSelectOption>
                ))}
            </Style.ContractSelectOptionWrapper>
        </>
    );
}
