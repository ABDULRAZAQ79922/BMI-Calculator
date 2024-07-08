function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Please enter valid numbers for height and weight.');
      return;
    }
    
    var bmi = weight / ((height / 100) ** 2);
    var bmiCategory = '';
  
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
  
    document.getElementById('bmiValue').innerText = bmi.toFixed(2);
    document.getElementById('bmiCategory').innerText = 'Category: ' + bmiCategory;
  }
  