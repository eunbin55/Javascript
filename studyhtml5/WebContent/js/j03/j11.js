'use strict';
//1~20사이 홀수만 출력

for(let i=1;i<=20;i++){
    if((i%2)==0){
        continue;
    }else{
        console.log(`i=${i}`)
    }
}