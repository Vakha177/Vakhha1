//В файле arrays-3.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

//Ниже напиши цикл for, который выведет все положительные числа в консоль.
let arr = [1,2,3,4,5,6,7,-8,-9,-10]
for(let i = 0 ; i<arr.length; i++)
  if(arr[i]>0)
console.log(arr[i])