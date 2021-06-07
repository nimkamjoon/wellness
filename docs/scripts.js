
function calculateBMI(height, weight) {
    height = document.querySelector('#height').value;
    weight = document.querySelector('#weight').value;

    let bmi = 0;

    bmi = Math.abs((weight / (height ** 2)) * 10000);

    let bmiRounded = bmi.toFixed(1);

    return bmiRounded;
}


function result() {
    height = document.querySelector('#height').value;
    weight = document.querySelector('#weight').value;
    
    let bmi = calculateBMI();

    document.getElementById("bmiResult").innerText = "BMI: " + bmi;
}

function status() {
    document.getElementById('weightStatus').style.visibility = "visible";

    let bmi = calculateBMI();

    if (bmi < 18.5) {
        document.getElementsByClassName('resultWrapper')[0].style.backgroundColor = "#ff7a7a";
        document.getElementById('weightStatus').style.backgroundColor = "#ff7a7a";
        document.getElementById('weightStatus').innerText = "(underweight)";
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementsByClassName('resultWrapper')[0].style.backgroundColor = "#7aff81";
        document.getElementById('weightStatus').style.backgroundColor = "#7aff81";
        document.getElementById('weightStatus').innerText = "(normal or healthy weight)";
    }
    else if (bmi >= 24.9 && bmi < 29.9) {
        document.getElementsByClassName('resultWrapper')[0].style.backgroundColor = "#fff67a";
        document.getElementById('weightStatus').style.backgroundColor = "#fff67a";
        document.getElementById('weightStatus').innerText = "(overweight)";
    }
    else if (bmi > 30) {
        document.getElementsByClassName('resultWrapper')[0].style.backgroundColor = "#ff7a7a";
        document.getElementById('weightStatus').style.backgroundColor = "#ff7a7a";
        document.getElementById('weightStatus').innerText = "(obese)";
    }
}

function show() {
    let show = true;

    show &= result();
    show &= status();
}