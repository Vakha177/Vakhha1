
//В файле accumulator-1.js создай массив с десятью элементами числового типа.

//Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.



let accumulator = [1,2,3,4,5,6,7,8,9,1]
let b = 0
for(let i = 0 ; i < accumulator.length ; i++)
  b+=accumulator[i]
console.log(b)