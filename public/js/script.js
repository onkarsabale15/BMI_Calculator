function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    
    if (height === '' || isNaN(height)) {
      alert("Please enter a valid height");
      return;
    }
    
    if (weight === '' || isNaN(weight)) {
      alert("Please enter a valid weight");
      return;
    }
    
    var bmi = weight / Math.pow(height/100, 2);
    
    document.getElementById("result").value = bmi.toFixed(2);
  }