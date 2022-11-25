let num = 123456789


function makeArr(number){
    let arr = []
    for(let i = 0; i < 9; i++){
        let last = Math.floor(number % 10)
        arr.push(last)
        number = (number - last) / 10

    }
    return arr
}

console.log(makeArr(num))