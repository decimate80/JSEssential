for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}



// for (var i = 1; i <= 10; i++) {
//     if(i == 1) {
//         console.log("Gold medal")
//     } else if (i == 2) {
//         console.log("Silver medal")
//     } else if (i == 3) {
//         console.log("Bronze medal")
//     } else {
//         //this block will run if no condition matches
//         console.log(i)
//     }
// }








// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }



// //nested loops - one inside another 
// for (var i = 100; i > 10; i = i - 10) {
//     for (var j = 10; j > 4; j = j - 5) {
//         console.log(i + " divided by " + j + " equals " + i / j);
//     }
// }


// //nested loops - one inside another
// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     for (var secondNum = 0; secondNum < 10; secondNum++) {
//         console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
//     }
// }





// //nested loops - one inside another
// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     for (var secondNum = 0; secondNum < 10; secondNum++) {
//         console.log(firstNum + ", " + secondNum);
//     }
// }



// for (var i = 2023; i < 2025; i++) {
//     console.log(i);
//     for (var j = 6; j < 9; j++) {
//         console.log("---------", j)
//     }
// }




// for (var year = 2023; year < 2025; year++) {
//     console.log(year);
//     for (var month = 6; month < 9; month++) {
//         console.log("---------", month)

//     }
// }



// for (var m = 1; m <= 12; m++) {
//     for (var i = 1; i <= 4; i++) {
//         for (var j = 1; j <=7; j++) {
//             console.log("Month " + m + ", Week " + i + ", Day " + j)
//         }
//     }
// }



// var counter = 3
// while (counter > 0) {
//     console.log(counter);
//     counter = counter - 1;
// }
// console.log('Happy New Year');



// for (var i = 12; i > 0; i--){
//     console.log(i);
// }
// console.log('Happy New Year');


// for (var i = 10; i > 3; i++) {
//     console.log(i);
// }
// console.log('G')


//  var keys = '10';

//  if (keys >= 65) {
//      console.log("you get income from pension");
//  }else if(keys < 18){
//      console.log("you get no income from pension");
//  }else if(keys >18 && keys < 65){
//      console.log("you get a monthly salary");
//  }else{
//     console.log("you get no income");
// }


// var day = 'Sunday';

// switch (day) {
//     case 'Monday':
//         console.log("Today is Monday");
//         break;
//     case 'Tuesday':
//         console.log("Today is Tuesday");
//         break;
//     case 'Wednesday':
//         console.log("Today is Wednesday");
//         break;
//     case 'Thursday':
//         console.log("Today is Thursday");
//         break;
//     case 'Friday':
//         console.log("Today is Friday");
//         break;
//     case 'Saturday':
//         console.log("Today is Saturday");
//         break;
//     case 'Sunday':
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
