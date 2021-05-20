function convertFahrToCelcius(F) {
    let C;
    if(typeof F === 'number') {
        C = ((F - 32) * 5/9).toFixed(4);
        return C;
    }
    if(typeof F === 'string') {
        const strNumber = parseFloat(F);
        if (isNaN(strNumber)) return (`${F} is not a valid number but a string.`);
        C = ((parseFloat(F) - 32) * 5/9).toFixed(4); 
        return C;
    }
    if(Array.isArray(F)) {
        return (`${JSON.stringify(F)} is not a valid number but an array.`)
    }
    if(typeof F === 'boolean'){
        return (`${F} is not a valid number but a boolean`)
    }
    return (`${JSON.stringify(F)} is not a valid number but an ${typeof F}.`)
}

console.log(convertFahrToCelcius(true));


/* 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

Note:

- for numbers that have multiple factors, use hyphens as separators
e.g 10 === "yu-oh", 30 === "yu-gi-oh"
- perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
Use the following cases as guides:

- checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
- checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
- checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"` */



function checkYuGiOh(n) {
    const nNum = Number(n);
    if (isNaN(nNum)) return (`invalid parameter: ${JSON.stringify(n)}`);
    const result = [];
    for (var i = 1; i <= n; i++){
        if ((i % 30) == 0) result.push('yu-gi-oh');
        else if ((i % 15) == 0) result.push('gi-oh');
        else if ((i % 10) == 0) result.push('yu-oh');
        else if ((i % 6) == 0) result.push('yu-gi');
        else if ((i % 5) == 0) result.push("oh");
        else if ((i % 3) == 0) result.push("gi");
        else if ((i % 2) == 0) result.push("yu");
        else result.push(i);
    }
    return result;
}

console.log(checkYuGiOh("fizzbuzz is meh"));