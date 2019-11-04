 let input = [1, 2];
    let [first, second] = input;
    first = input[0];
    second = input[1];
    [first, second] = [second, first];
    console.log(first);
    console.log(second);