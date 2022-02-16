export type EquationParams = {
    a: number,
    b: number,
    c: number
};

export type EquationResult = {
    root1: string,
    root2: string
};

export type Solution = EquationParams & EquationResult;

export type SolverState = {
    solutions: Solution[]
};
