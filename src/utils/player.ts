import { BoardState } from "./types";
import { isTerminal, getAvailableMoves, printFormattedBoard } from "./board";

export const getBestMove = (state: BoardState, maximizing: boolean, depth = 0): number => {
    const terminalObject = isTerminal(state);

    // BASE CASE
    if (terminalObject) {
        if (terminalObject.winner === "x") {
            return 100 - depth;
        } else if (terminalObject.winner === "o") {
            return -100 + depth;
        }
        return 0;
    }

    if (maximizing) {
        let best = -100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardState = [...state];
            child[index] = "x";
            const childValue = getBestMove(child, false, depth + 1);
            best = Math.max(best, childValue);
        });
        return best;
    }

    if (!maximizing) {
        let best = 100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardState = [...state];
            child[index] = "o";
            const childValue = getBestMove(child, true, depth + 1);
            best = Math.min(best, childValue);
        });
        return best;
    }
};
