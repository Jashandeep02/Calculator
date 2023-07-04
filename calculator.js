function handleClick(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  var expression = document.getElementById('display').value;

  try {
    var result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

document.onkeydown = function(event) {
  var key = event.key;

  if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
    document.getElementById('display').value += key;
  } else if (key === '=') {
    calculate();
  } else if (key === 'C' || key === 'c'){
    clearDisplay();
  } else if(key === 'Backspace'){
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
}