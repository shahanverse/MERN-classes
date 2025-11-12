let first = parse(Floatdocument.getElementById("first").value);
let second = parse(Floatdocument.getElementById("second").value);
let result = 0 

if (isNaN(first) || isNaN(second)){
  document.getElementById('result').innerText = 'please enter valid numbers '
  return;
}

if (operator === '+') result = first + second;
else if (operator === '-') result = first - second;
else if (operator === '*') result = first * second;

document.getElementById('result').innerText = ` Result: ${result}`