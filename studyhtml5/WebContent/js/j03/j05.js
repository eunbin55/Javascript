'use strict';

const brower = 'Chrome';

switch(brower){
    case 'IE':
        console.log('go away!');
    break;
    
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
    break;
    
    default:
        console.log('same all');
    break;
}