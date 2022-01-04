import { BoardState } from "@utils";

export const printFormattedBoard = (state: BoardState): void => {
    let formattedString = "";
    state.forEach((cell, i) => {
        formattedString += cell ? ` ${cell} |` : "  |";
        if ((i + 1) % 3 === 0) {
            formattedString = formattedString.slice(0, -1);
            if (i < 8) {
                formattedString += "\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n";
            }
        }
    });
    console.log(formattedString);
};

export const isEmpty = (state: BoardState): boolean => {
    return state.every(cell => cell === null);
};
