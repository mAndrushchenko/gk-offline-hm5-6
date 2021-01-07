function perform(...args) {
    let arrOfArgs = [...args].slice(0, [...args].length - 1);
    const fn = [...args].find(el => typeof el === "function");
    arrOfArgs = fn(parseInt(arrOfArgs));
    return {
        arrOfArgs,
        fn,
        then(...args) {
            const newArgs = [...args].slice(0, [...args].length - 1)
            this.fn = [...args].find(el => typeof el === "function");
            this.arrOfArgs = this.fn(...newArgs, this.arrOfArgs);
            return this;
        }
    }
}
/* Task
perform(20, function(value) {
    console.log(value) // 20
    let param = 1;
    console.log(param); // 1
    return param;
})
    .then('a', 'b', function(a, b, param) {
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param;
    })
*/
