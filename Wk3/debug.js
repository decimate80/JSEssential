const obj = undefined;
try {
    const propertyValue = obj.propertyValue;

    console.log("property Value: " + propertyValue);
    console.log("never be reached.");
}
catch (error) {
    console.error("an error occured", error.message);
    

}
console.log("TypeError: Cannot read property 'propertyValue' of undefined");



// const obj = undefined;
// const propertyValue = obj.propertyValue;

// console.log(propertyValue);
// console.log("never be reached.");

// // TypeError: Cannot read property 'propertyValue' of undefined
// // never be reached.