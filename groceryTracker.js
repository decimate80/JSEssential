let amount1;
let amount2;
let amount3;



function Total() {
    amount1 = parseFloat(document.getElementById('amount1').value);
    amount2 = parseFloat(document.getElementById('amount2').value);
    amount3 = parseFloat(document.getElementById('amount3').value);

    let Total = amount1 + amount2 + amount3;
    document.getElementById('result').innerText = `The area of the rectangle is: ${Total}`;
   }
  