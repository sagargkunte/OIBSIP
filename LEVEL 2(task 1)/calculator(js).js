addToDisplay = (value) => {
    document.getElementById('display-Input').value+=value;
  }
  
  
clearDisplay = () => {
    document.getElementById('display-Input').value = "";
  }
  
  
  function calculateResult() {
    let displayValue = document.getElementById('display-Input').value;
    try {
      document.getElementById('display-Input').value = eval(displayValue);
    } catch (error) {
      document.getElementById('display-Input').value = 'Error';
    }
  }
  