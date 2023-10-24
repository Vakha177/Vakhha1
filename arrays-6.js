/*В файле arrays-6.js создай массив с десятью элементами числового типа.

Ниже напиши цикл for, который выводит в консоль всё четные числа.

Еще ниже напиши цикл while, который выводит в консоль все неч*/
let numbers = [1,2,3,4,5,6,7,8,9,10]
let a = []

for(let i = 0 ; i<numbers.length ; i++)
  if(numbers[i]%2==0)
    a.push(numbers[i])
 console.log(a)
   



 let arr3 = [1,2,3,4,5,6,7,8,9,10]
let i = 0;
while(i < arr3.length){
    i++
if(arr3[i]%2!==0)
console.log(arr3)
}
