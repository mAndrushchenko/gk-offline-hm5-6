function isPrime(number) {
    if (number === 2 || number === 3) {
        return true
    }
    let count = 2

    const onCheck = (value) => {
        count++
        value % count !== 0 && count < value ? onCheck(number) : false
        if (value === count) {
            return true
        }
    }
    return number / number === 1 &&
        number / 1 === number &&
        number % 2 !== 0 &&
        onCheck(number)
}

function factorial(number) {
    if (number === 0) return 1

    let count = 1
    for (let i = 1; i <= number; i++) {
        count *= i
    }
    return count
}

function fib(number) {
    if (number === 0) return 0

    let arrOfFibNumbers = []
    let fibPrev1 = 1, fibPrev2 = 0

    for (let i = 0; i <= number; i++) {
        if (typeof arrOfFibNumbers[i - 1] === 'number') {
            fibPrev1 = arrOfFibNumbers[i - 1]
        }
        typeof arrOfFibNumbers[i - 2] === 'number' ? fibPrev2 = arrOfFibNumbers[i - 2] : arrOfFibNumbers[0] = 0

        arrOfFibNumbers[i] = fibPrev1 + fibPrev2
    }
    return arrOfFibNumbers[number]
}

function isSorted(arr) {
    if (arr.length === 0) {
        return true
    }

    arr = arr.filter(el => typeof el === 'number' || typeof el === 'boolean')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false
        }
        if (!arr[i + 1] && arr[i + 1] !== 0) {
            return true
        }
    }
}

function reverse(str) {
    let reverseStr = []

    if (str.length > 0) {
        str = str.split('')
        for (let i = 0; i < str.length; i++) {
            reverseStr[i] = str[str.length - 1 - i]
        }
    } else {
        reverseStr = str
    }
    return reverseStr.join('')
}

function indexOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

function isPalindrome(str) {
    str = str
        .trim()
        .toLowerCase()
        .split('')
        .filter(el => el !== ' ')
        .join('')
    return str === str.split('').reverse().join('')
}

function missing(arr) {
    let missingNumbers = [], i = 1
    const addMissingNumbers = () => {
        if (arr.length !== 0 && !arr.some(el => el === i)) {
            missingNumbers.push(i)
        }
        i++
        if (i < Math.max(...arr)) {
            addMissingNumbers()
        }
    }
    addMissingNumbers()
    return missingNumbers.length > 0 ? missingNumbers.join(' ') : undefined
}

function isBalanced(str) {
    str = str.split('').filter(el => el.match(/[{|}]/g))
    return str.slice(0, str.length / 2).join('') === str.slice(str.length / 2).join('').replaceAll('}', '{')
}
