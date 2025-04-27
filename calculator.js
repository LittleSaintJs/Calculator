function calculatorActions(value) {
  document.getElementById('display').value += value;
}

function clearValue() {
  document.getElementById('display').value = '';
}
function deleteValue() {
  document.getElementById('display').value = '' ;
}


function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}