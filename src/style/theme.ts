import { css } from "styled-components";

const PretendardL = css`
    font-family: "Pretendard";
`;

const PretendardR = css`
    font-family: "Pretendard-Regular";
`;

const PretendardM = css`
    font-family: "Pretendard-Medium";
`;

const PretendardSB = css`
    font-family: "Pretendard-SemiBold";
`;

const PretendardB = css`
    font-family: "Pretendard-Bold";
`;

const PretendardEB = css`
    font-family: "Pretendard-ExtraBold";
`;

const color = {
    white: "#ffffff",
    black: "#000000",
    blue: "#0077cc",
    gray: "#f2f2f2",
    lightGray: "#f5f5f5",
    darkGray: "#999999",
    red: "#ff0000",
    green: "#00ff00",
    yellow: "#ffff00",

    // border color
    gray1: "#ab9190",
    ligthWestar: "#E3E1D9",

    // pastel color
    mediumSlateBlue: "#7B66FF",
    skyblue: "#5FBDFF",
    anakiwa: "#96EFFF",
    onahau: "#C5FFF8",
    shark: "#25272C",
    scampi: "#6962AD",
};

/* About theme ---------------------------------------------- */

export const theme = {
    color,
    font: {
        PretendardL,
        PretendardR,
        PretendardM,
        PretendardSB,
        PretendardB,
        PretendardEB,
    },


};