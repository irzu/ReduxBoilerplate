import { EquationResult } from '../../types';

export const solveEquation = (a: number, b: number, c: number): EquationResult => {
    const delta = b * b - 4 * a * c;

    if (delta === 0) return {
        root1: (-b / (2 * a)).toString(),
        root2: ''
    };

    if (delta > 0) return { 
        root1: ((-b + Math.sqrt(delta)) / (2 * a)).toString(), 
        root2: ((-b - Math.sqrt(delta)) / (2 * a)).toString()
    };
    
    const realPart = (-b / (2 * a)).toFixed(2);
    const imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(2);
    return {
        root1: `${realPart} + ${imagPart}i`,
        root2: `${realPart} - ${imagPart}i`
    }; 
};

export const solveEquationAsync = (a: number, b: number, c: number) => { 
    return new Promise<EquationResult>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) reject(new Error('Could not solve it. Gived up'))

            const result = solveEquation(a,b,c);
            return resolve(result);
        }, 2000);
    });
};

