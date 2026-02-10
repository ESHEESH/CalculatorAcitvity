let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let history = [];

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        addToHistory(expression, result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}
function clearHistory() {
    history = [];
    renderHistory();
}


function addToHistory(expression, result) {
    history.unshift(`${expression} = ${result}`);

    if (history.length > 8) {
        history.pop();
    }

    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
