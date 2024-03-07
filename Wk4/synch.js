function simulateAsyncOperation(callback) {
    setTimeout(function (){
        callback("Data from asynch operation");

    }, 4000) ;

}
console.log("start the program");
simulateAsyncOperation(function (data) {
    console.log(" data received:", data);
  
    console.log("end the program");

});
console.log("Async operation in progress.....");



// console.log("start");
// setTimeout(function () {
//     console.log("timeout");
// }, 4000); // 10000 milliseconds = 1 second

// console.log("end");



// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// function askQuestion() {
//     console.log("how are you?");
// }

// function farewell(name) {
//     console.log("Goodbye, " + name + "!");
// }

// console.log("Start the program");
// greet("John");
// askQuestion();
// farewell("John");
// console.log("End the program");