'use strict';

let info = {
    subject: 'JavaScript',
    credit: 3,
    days: 20,
    tuition: 100
    
}
/*
for(let i in 객체명){
    실행문;
}
*/
for(let i in info){
    console.log(`i=${i}, info[${i}]=${info[i]}`);
}

/*
i=subject, info[subject]=JavaScript
j03.js:16 i=credit, info[credit]=3
j03.js:16 i=days, info[days]=20
j03.js:16 i=tuition, info[tuition]=100
*/
