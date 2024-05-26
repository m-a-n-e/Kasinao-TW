


document.querySelectorAll('.selectable').forEach((section) => {
    section.addEventListener('click', (evento) => {
        evento.stopPropagation();
        document.querySelectorAll('.selectable').forEach((outraSection) => {
            outraSection.classList.remove('nm-inset-gray-900-lg', 'border-b-2', 'border-gray-400');
        });
        evento.currentTarget.classList.add('nm-inset-gray-900-lg', 'border-b-2', 'border-gray-400');
    });
});

document.body.addEventListener('click', () => {
    document.querySelectorAll('.selectable').forEach((section) => {
        section.classList.remove('nm-inset-gray-900-lg', 'border-b-2', 'border-gray-400');
    });
});





var button1 = document.getElementById('dropdownButton1');
var dropdown1 = document.getElementById('dropdown1');
var button2 = document.getElementById('dropdownButton2');
var dropdown2 = document.getElementById('dropdown2');



button1.addEventListener('click', function (event) {
    dropdown1.classList.toggle('hidden');
    dropdown2.classList.add('hidden');
    event.stopPropagation();
});

button2.addEventListener('click', function (event) {
    dropdown2.classList.toggle('hidden');
    dropdown1.classList.add('hidden');
    event.stopPropagation();
});


document.addEventListener('click', function () {
    dropdown1.classList.add('hidden');
    dropdown2.classList.add('hidden');
});


var buttonPlus1 = dropdown1.querySelector('button:nth-child(1)');
var buttonPlus3 = dropdown1.querySelector('button:nth-child(2)');
var buttonMinus1 = dropdown1.querySelector('button:nth-child(3)');


buttonPlus1.addEventListener('click', function () {
    var currentValue = parseInt(button1.innerHTML);
    if (currentValue < 12) {
        button1.innerHTML = Math.min(currentValue + 1, 12);
        verificarVencedor();
    }
});

buttonPlus3.addEventListener('click', function () {
    var currentValue = parseInt(button1.innerHTML);
    if (currentValue < 12) {
        button1.innerHTML = Math.min(currentValue + 3, 12);
        verificarVencedor();
    }
});

buttonMinus1.addEventListener('click', function () {
    var currentValue = parseInt(button1.innerHTML);
    button1.innerHTML = Math.max(currentValue - 1, 0);
    verificarVencedor();
});


var buttonPlus1_2 = dropdown2.querySelector('button:nth-child(1)');
var buttonPlus3_2 = dropdown2.querySelector('button:nth-child(2)');
var buttonMinus1_2 = dropdown2.querySelector('button:nth-child(3)');

buttonPlus1_2.addEventListener('click', function () {
    var currentValue = parseInt(button2.innerHTML);
    if (currentValue < 12) {
        button2.innerHTML = Math.min(currentValue + 1, 12);
        verificarVencedor();
    }
});

buttonPlus3_2.addEventListener('click', function () {
    var currentValue = parseInt(button2.innerHTML);
    if (currentValue < 12) {
        button2.innerHTML = Math.min(currentValue + 3, 12);
        verificarVencedor();
    }
});

buttonMinus1_2.addEventListener('click', function () {
    var currentValue = parseInt(button2.innerHTML);
    button2.innerHTML = Math.max(currentValue - 1, 0);
    verificarVencedor();
});



function determineWinningTeam() {
    var pontosDupla1 = parseInt(button1.innerHTML);
    var pontosDupla2 = parseInt(button2.innerHTML);

    if (pontosDupla1 === 12) {
        return "dupla1";
    } else if (pontosDupla2 === 12) {
        return "dupla2";
    } else {
        return null;
    }
}


function showModal(winningTeam = null, title = "Vencedores!", message = null) {

    if (message) {
        document.getElementById('modalVencedorTitle').textContent = message;
    } else {
        document.getElementById('modalVencedorTitle').textContent = title;
    }

    const corDupla1 = 'text-purple-500';
    const corDupla2 = 'text-teal-500';

    if (winningTeam) {
        let dupla1Nome1 = input1.value;
        let dupla1Nome2 = input2.value;
        let dupla2Nome1 = input3.value;
        let dupla2Nome2 = input4.value;

        if (winningTeam === "dupla1") {

            document.getElementById('vencedor1').classList.remove(corDupla1, corDupla2);
            document.getElementById('vencedor2').classList.remove(corDupla1, corDupla2);

            document.getElementById('vencedor1').textContent = dupla1Nome1;
            document.getElementById('vencedor1').classList.add(corDupla1);
            document.getElementById('vencedor2').textContent = dupla1Nome2;
            document.getElementById('vencedor2').classList.add(corDupla1);
        } else if (winningTeam === "dupla2") {

            document.getElementById('vencedor1').classList.remove(corDupla1, corDupla2);
            document.getElementById('vencedor2').classList.remove(corDupla1, corDupla2);

            document.getElementById('vencedor1').textContent = dupla2Nome1;
            document.getElementById('vencedor1').classList.add(corDupla2);
            document.getElementById('vencedor2').textContent = dupla2Nome2;
            document.getElementById('vencedor2').classList.add(corDupla2);
        }

    }


    document.getElementById('modalVencedor').classList.remove('hidden');
    document.getElementById('modalFundo').classList.remove('hidden');
}


function hideModal() {

    document.getElementById('modalVencedor').classList.add('hidden');
    document.getElementById('modalFundo').classList.add('hidden');
}


document.querySelector('#modalVencedor button[data-dismiss="modal"]').addEventListener('click', hideModal);


function verificarVencedor() {
    let winningTeam = determineWinningTeam();
    if (winningTeam) {
        showModal(winningTeam);
    }
}



var pontosSistema1 = parseInt(button1.innerHTML);
var pontosSistema2 = parseInt(button2.innerHTML);


function salvarPontosLocalStorage() {
    localStorage.setItem('pontosSistema1', pontosSistema1);
    localStorage.setItem('pontosSistema2', pontosSistema2);
}


function preencherPontosLocalStorage() {
    pontosSistema1 = parseInt(localStorage.getItem('pontosSistema1')) || 0;
    pontosSistema2 = parseInt(localStorage.getItem('pontosSistema2')) || 0;
    button1.innerHTML = pontosSistema1;
    button2.innerHTML = pontosSistema2;
}


document.addEventListener('DOMContentLoaded', function () {

    preencherPontosLocalStorage();


    buttonPlus1.addEventListener('click', function () {
        if (pontosSistema1 < 12) {
            pontosSistema1 = Math.min(pontosSistema1 + 1, 12);
            button1.innerHTML = pontosSistema1;
            salvarPontosLocalStorage();
        }
    });

    buttonPlus3.addEventListener('click', function () {
        if (pontosSistema1 < 12) {
            pontosSistema1 = Math.min(pontosSistema1 + 3, 12);
            button1.innerHTML = pontosSistema1;
            salvarPontosLocalStorage();
        }
    });

    buttonMinus1.addEventListener('click', function () {
        pontosSistema1 = Math.max(pontosSistema1 - 1, 0);
        button1.innerHTML = pontosSistema1;
        salvarPontosLocalStorage();
    });

    buttonPlus1_2.addEventListener('click', function () {
        if (pontosSistema2 < 12) {
            pontosSistema2 = Math.min(pontosSistema2 + 1, 12);
            button2.innerHTML = pontosSistema2;
            salvarPontosLocalStorage();
        }
    });

    buttonPlus3_2.addEventListener('click', function () {
        if (pontosSistema2 < 12) {
            pontosSistema2 = Math.min(pontosSistema2 + 3, 12);
            button2.innerHTML = pontosSistema2;
            salvarPontosLocalStorage();
        }
    });

    buttonMinus1_2.addEventListener('click', function () {
        pontosSistema2 = Math.max(pontosSistema2 - 1, 0);
        button2.innerHTML = pontosSistema2;
        salvarPontosLocalStorage();
    });
});


var resetButton = document.getElementById("recomecarJogo");


resetButton.addEventListener('click', function () {

    localStorage.removeItem('pontosSistema1');
    localStorage.removeItem('pontosSistema2');


    button1.innerHTML = 0;
    button2.innerHTML = 0;
});




let input1 = document.querySelector('#dupla1n1');
let input2 = document.querySelector('#dupla1n2');


let vez1 = document.querySelector('#vez0');
let vez3 = document.querySelector('#vez2');

function handleInput() {
    let inicial1 = input1.value.charAt(0).toUpperCase();
    let inicial2 = input2.value.charAt(0).toUpperCase();


    vez1.textContent = inicial1;
    vez3.textContent = inicial2;


    localStorage.setItem('vez1', inicial1);
    localStorage.setItem('vez3', inicial2);

}

input1.oninput = handleInput;
input2.oninput = handleInput;





let input3 = document.querySelector('#dupla2n1');
let input4 = document.querySelector('#dupla2n2');

let vez2 = document.querySelector('#vez1');
let vez4 = document.querySelector('#vez3');

function handleInput2() {
    let inicial3 = input3.value.charAt(0).toUpperCase();
    let inicial4 = input4.value.charAt(0).toUpperCase();


    vez2.textContent = inicial3;
    vez4.textContent = inicial4;


    localStorage.setItem('vez2', inicial3);
    localStorage.setItem('vez4', inicial4);
}

input3.oninput = handleInput2;
input4.oninput = handleInput2;


window.onload = function () {
    vez1.textContent = localStorage.getItem('vez1') || '';
    vez3.textContent = localStorage.getItem('vez3') || '';
    vez2.textContent = localStorage.getItem('vez2') || '';
    vez4.textContent = localStorage.getItem('vez4') || '';
}




function salvarInputLocalStorage(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        localStorage.setItem(inputId, input.value);
    }
}


function preencherInputsLocalStorage(inputId) {
    const valorSalvo = localStorage.getItem(inputId);
    const input = document.getElementById(inputId);
    if (input && valorSalvo) {
        input.value = valorSalvo;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            salvarInputLocalStorage(input.id);
        });

        preencherInputsLocalStorage(input.id);
    });
});






var curingaAtualButton = document.getElementById('curingaAtual');
var curingaAnteriorButton = document.getElementById('curingaAnterior');
var curingaDropdown1 = document.getElementById('curingaAtualDropdown');

var currentValue;
var previousValue;

loadValuesFromLocalStorage();

function loadValuesFromLocalStorage() {
    currentValue = localStorage.getItem('curingaAtualValue');
    previousValue = localStorage.getItem('curingaAnteriorValue');

    if (currentValue) curingaAtualButton.innerHTML = currentValue;
    if (previousValue) curingaAnteriorButton.innerHTML = previousValue;
}

curingaAtualButton.addEventListener('click', function (event) {
    curingaDropdown1.classList.toggle('hidden');
    event.stopPropagation();
});

var curingaDropdown1Buttons = curingaDropdown1.querySelectorAll('button');
curingaDropdown1Buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        previousValue = currentValue;
        currentValue = button.textContent;
        curingaAtualButton.innerHTML = currentValue;
        curingaDropdown1.classList.add('hidden');

        localStorage.setItem('curingaAtualValue', currentValue);
        localStorage.setItem('curingaAnteriorValue', previousValue);
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('curinga-atual-dropdown')) {
        curingaDropdown1.classList.add('hidden');
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('curinga-atual-dropdown')) {
        if (previousValue) {
            curingaAnteriorButton.innerHTML = previousValue;
        }
    }
});


let currentPlayer = 0;

const trocaVezButtons = document.querySelectorAll('.trocaVez');

if (trocaVezButtons && trocaVezButtons.length > 0) {
    trocaVezButtons.forEach(button => {
        button.addEventListener('click', () => changeTurn('proximaVez'));
    });
} else {
    console.warn("No buttons found with class 'trocaVez'.");
}

function changeTurn(direction) {
    console.log("Current player before change:", currentPlayer);


    if (direction === 'proximaVez') {
        currentPlayer = (currentPlayer + 1) % 4;
    } else if (direction === 'anteriorVez') {
        currentPlayer = (currentPlayer - 1 + 4) % 4;
    } else {
        console.warn("Invalid direction passed to changeTurn:", direction);
        return;
    }

    console.log("Current player after change:", currentPlayer);


    updateTurnDisplay();


    localStorage.setItem('currentPlayer', currentPlayer);
}

function updateTurnDisplay() {

    document.querySelectorAll('.containerVez > button').forEach((button) => {
        button.classList.remove('nm-inset-gray-900-lg', 'border-b-2', 'border-gray-400');
    });


    const activeButton = document.getElementById(`vez${currentPlayer}`);
    console.log("Trying to access button with ID:", `vez${currentPlayer}`);

    if (activeButton) {
        activeButton.classList.add('nm-inset-gray-900-lg', 'border-b-2', 'border-gray-400');
    }
}


const proximaVezButton = document.getElementById('proximaVez');
const anteriorVezButton = document.getElementById('anteriorVez');

if (proximaVezButton) {
    proximaVezButton.addEventListener('click', () => changeTurn('proximaVez'));
} else {
    console.warn("Button with ID 'proximaVez' not found.");
}

if (anteriorVezButton) {
    anteriorVezButton.addEventListener('click', () => changeTurn('anteriorVez'));
} else {
    console.warn("Button with ID 'anteriorVez' not found.");
}


const savedCurrentPlayer = localStorage.getItem('currentPlayer');
if (savedCurrentPlayer) {
    currentPlayer = parseInt(savedCurrentPlayer);
}


updateTurnDisplay();
