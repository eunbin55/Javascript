'use strict';
/*
function 함수명 (매개변수1, 매개변수2, ..) {                                   
    실행문;                                
}                                   
                                    
함수명(매개변수1, 매개변수2, ...);                                 

파람: 학생이름, html, css, javascript
각 60점 이상이면 pass
60점 이하면 재시험

*/

function isPath(name, htmlScore, cssScore, jsScore){
    let comment = name + ' 학생은 ';
    if(htmlScore>=60 && cssScore>=60 && jsScore>=60){
        comment += '전 과목 pass';
    }else{
        if(htmlScore<60){
            comment += 'html 재시험';
        }
        if(htmlScore<60){
            comment += 'css 재시험';
        }
        if(htmlScore<60){
            comment += 'javascript 재시험';
        }
    }
    return comment;
}
console.log(isPath('이상무',80,90,95));
console.log(isPath('이상무',59,40,95));





