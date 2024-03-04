// switch

// The switch statement is used to perform different actions based on different conditions.

// var place = 'first';

// switch (place) {
//   case 'first':
//     console.log('You\'re first!');
//     break;
//   case 'second':
//     console.log('You\'re second!');
//     break;
//   case 'third':
//     console.log('You\'re third!');
//     break;
//   default:
//     console.log('No ranking for you!');
// }

// // You're first!
//converting the previous if-else example with switch-case
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