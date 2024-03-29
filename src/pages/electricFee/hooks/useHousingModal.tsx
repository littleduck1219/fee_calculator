import { create } from "zustand";

interface StateContractModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useHousingModal = create<StateContractModal>((set) => ({
    isOpen: true,
    onOpen: () => {
        set({ isOpen: true });
    },
    onClose: () => {
        set({ isOpen: false });
    },
}));
