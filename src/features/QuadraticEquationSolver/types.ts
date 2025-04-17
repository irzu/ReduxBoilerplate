export interface EquationParams {
    a: number,
    b: number,
    c: number
}

export interface EquationResult {
    root1: string,
    root2: string
}

export interface Solution extends EquationParams, EquationResult {
    index: number;
}

export interface SolverState {
    solutions: Solution[];
    error: string;
}
