'use strict';

//forEach()                           
//    배열 요소에 순차적으로 접근하여 필요한 값을 만들때 사용하는 메서드                       

let numArray = [10, 20, 30,40, 50, 60, 70];
let sum = 0;

numArray.forEach(function(value, index, array) {
    console.log(`value:${value}`);
    //console.log(`index:${index}`);
    //console.log(`index:${index},${array}`);
    sum += value;
});
console.log(`sum= ${sum}`);

/*
map()
    기존 배열을 이용해 새로운 배열을 생성
*/

console.clear();

let base = [1, 2, 3];
let newArray = base.map(function(value, index, array) {
    console.log(`value:${value}, index:${index}, array:${array}`);
    return value * 2;
});

console.log(`newArray:${newArray.toString()}`);

/*
filter()
    조건에 맞는 배열의 요소들만 걸러 새로운 배열 생성
*/
let data = ['JAVASCRIPT',20,30,'JQUERY'];

let numArray02 = data.filter(function(value,index,array){
    console.log(`type:${typeof value}, value:${value}, index:${index}, array:${array}`);
    return typeof value === 'string';
});

console.log(`numArray02.toString():${numArray02.toString()}`);



