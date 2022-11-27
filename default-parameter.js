function add(num1, num2 = 32) {
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}

console.log(add(15));
