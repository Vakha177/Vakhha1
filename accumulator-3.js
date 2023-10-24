//В файле accumulator-3.js создай массив с десятью элементами строкового типа.
 //Перечисли в них известные тебе названия языков программирования.

/*Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов.
 (accumulator будет массивом, вспомни про .push()).*/
 let kalam = ['Матрица' , 'intocode' , 'level' , 'men', 'nem']
 accumulator = []
 for(let i = 0 ; i < kalam.length ; i++)
   if(kalam[i].length > 3)
 accumulator.push(kalam[i])
 console.log(accumulator)
