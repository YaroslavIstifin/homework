function welcome(greeting, name) {
    return greeting + name
}
const result = welcome('hello ', 'Max')
console.log(result)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function conclusion(numbers, item) {
    for (let i = 0; i < numbers.length; i = i++) {
        if (numbers[i] < item) {
            return 'Число больше 10'
        }
        
        return 'Число меньше 10'
        
        
    }
}

console.log(conclusion(numbers, 11))

function subtraction(firstNumber, signConclusion, secondNumber){
        return firstNumber - secondNumber
    }
console.log(subtraction(1 ,'minus', 2))



function addition(firstNumber, signAddition, secondNumber){
        return firstNumber + secondNumber
    }
console.log(addition(1 ,'plus', 2))


function multiplication(firstNumber, signMultiplication, secondNumber){
        return firstNumber * secondNumber
    }
console.log(multiplication(1 ,'multiplication', 2))


function Division(firstNumber, signDivision, secondNumber){
        return firstNumber / secondNumber
    }
console.log(Division(1 ,'Division', 2))


