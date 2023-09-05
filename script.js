let result = document.getElementById("result");

function getResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    let calculation = eval(result.value);
    result.value = calculation;
}
