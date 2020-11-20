function arraysMax(numbers) {

    for(let i = 1; i < numbers.length; i++) {
        if (numbers[0] < numbers[i]) {
            numbers[0] = numbers[i];
        }
    }
         return numbers[0];
}

console.log(arraysMin([1, 5, 2, 0]));
