type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber) : StringOrNumber {
    if (typeof input1 === typeof input2) {
        // @ts-ignore
        return input1 + input2;
    } else {
        return "Congrats! It is an error:)"
    }
}

console.log(combine(2, 3));
console.log(combine("2", "3"));