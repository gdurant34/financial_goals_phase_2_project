import bigDecimal from 'js-big-decimal';


/* Number Processing Funcs */
// nums are represented as strings
export const addNumbers = (num1, num2) => {
    const sum = bigDecimal.add(num1, num2);
    return sum;
}

export const subNumbers = (num1, num2) => {
    const diff = bigDecimal.subtract(num1, num2);
    return diff;
}

export const multiplyNum = (num1, num2) => {
    const product = bigDecimal.multiply(num1, num2);
    return product;
}

export const divNum = (num1, num2) => {
    const quotient = bigDecimal.divide(num1, num2, 2);
    return quotient;
}
