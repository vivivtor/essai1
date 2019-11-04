function ex1() {
    let [a, b]=[7, 9];
    console.log(`a : ${a} b : ${b}`);
    [a,b] = [b,a];
    console.log('permutation');
    console.log(`a : ${a} b : ${b}`);
}
ex1();

/*
 let input = [1, 2];
    let [first, second] = input;
    first = input[0];
    second = input[1];
    [first, second] = [second, first];
    
	console.log(first);
    console.log(second);
	*/