// if, esle if, else

// var place = 'lost';

// if(place == 'first'){
//     console.log('Gold')
// }else if(place == 'second'){
//     console.log('Silver')
// }else if(place == 'third'){
//     console.log('Bronze')
// }else{
//     console.log('No medal')
// }
// //
//converting the previous if-else example with switch-case
var light = 'en';

switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }