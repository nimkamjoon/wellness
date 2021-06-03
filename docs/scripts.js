let height = document.getElementByName('height').value;
let weight = document.getElementByName('weight').value;

function calculateBMI(height, weight) {
    let unitType = document.getElementsByName('radio').value;

    if ( unitType === "metric") {
        let bmi = weight / (height ** 2);
    }
    else if (unitType === "imperial") {
        let bmi = (weight / (height ** 2)) * 703;
    }

    return bmi;
}

console.log(calculateBMI(157, 80))

let bmi = calculateBMI(height, weight);

function showResult() {
    document.getElementsById("bmiResult").innerText = "BMI: " + bmi;
}

function showStatus() {
    if (bmi < 18.5) {
        return document.getElementsByName('weightStatus').item = "(underweight)";
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        return document.getElementsByName('weightStatus').item = "(normal or healthy weight)";
    }
    else if (bmi >= 24.9 && bmi < 29.9) {
        return document.getElementsByName('weightStatus').item = "(overweight)";
    }
    else if (bmi > 30) {
        return document.getElementsByName('weightStatus').item = "(obese)";
    }
}

