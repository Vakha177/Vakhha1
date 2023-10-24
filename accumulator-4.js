/*В файле accumulator-4.js создай массив с десятью элементами строкового типа. 
Перечисли в них имена (без фамилий) своих одногруппников и преподавателей.

Создай переменную accumulator и собери в ней все имена, которые начинаются на букву "а".*/

let a = ['ahmad' , 'vakha' ,'valid', 'ansar']
let b = [] ; 
for(let i = 0 ; i<a.length ; i++)
  if(a[i].startsWith('a'))
    b.push(a[i])
console.log(b)