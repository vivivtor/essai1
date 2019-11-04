function ex1() {
    var _a;
    var _b = [7, 9], a = _b[0], b = _b[1];
    console.log("a : " + a + " b : " + b);
    _a = [b, a], a = _a[0], b = _a[1];
    console.log('permutation');
    console.log("a : " + a + " b : " + b);
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
