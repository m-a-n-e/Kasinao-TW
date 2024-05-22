document.querySelectorAll('.containerVez > button').forEach((botao) => {
    botao.vez = false;
  
    botao.addEventListener('click', (evento) => {
      let selectedButton = evento.target;
      let selectedVezValue = true;
  
      document.querySelectorAll('.containerVez > button').forEach((outroBotao) => {
        outroBotao.vez = false;
      });
      selectedButton.vez = selectedVezValue;
  
      document.querySelectorAll('.containerVez > button').forEach((button) => {
        if (button.vez) {
          button.classList.add('nm-inset-gray-800-lg', 'border-b-4', 'border-purple-500');
        } else {
          button.classList.remove('nm-inset-gray-800-lg', 'border-b-4', 'border-purple-500');
        }
      });
    });
  });
  
  
  




document.querySelectorAll('.selectable').forEach((section) => {
    section.addEventListener('click', (evento) => {
        evento.stopPropagation();
        document.querySelectorAll('.selectable').forEach((outraSection) => {
            outraSection.classList.remove('nm-inset-gray-800-lg', 'border-b-4', 'border-purple-500');
        });
        evento.currentTarget.classList.add('nm-inset-gray-800-lg', 'border-b-4', 'border-purple-500');
    });
});

document.body.addEventListener('click', () => {
    document.querySelectorAll('.selectable').forEach((section) => {
        section.classList.remove('nm-inset-gray-800-lg', 'border-b-4', 'border-purple-500');
    });
});


// Dropdown

// Pega os botões e os menus suspensos
var button1 = document.getElementById('dropdownButton1');
var dropdown1 = document.getElementById('dropdown1');
var button2 = document.getElementById('dropdownButton2');
var dropdown2 = document.getElementById('dropdown2');


// Adiciona o evento de clique aos botões
button1.addEventListener('click', function (event) {
    dropdown1.classList.toggle('hidden');
    dropdown2.classList.add('hidden');
    event.stopPropagation(); // Impede que o evento de clique se propague para o document
});

button2.addEventListener('click', function (event) {
    dropdown2.classList.toggle('hidden');
    dropdown1.classList.add('hidden');
    event.stopPropagation(); // Impede que o evento de clique se propague para o document
});

// Adiciona o evento de clique ao document
document.addEventListener('click', function () {
    dropdown1.classList.add('hidden');
    dropdown2.classList.add('hidden');
});

// Pega os botões do menu suspenso
var buttonPlus1 = dropdown1.querySelector('button:nth-child(1)');
var buttonPlus3 = dropdown1.querySelector('button:nth-child(2)');
var buttonMinus1 = dropdown1.querySelector('button:nth-child(3)');

// Adiciona o evento de clique aos botões do menu suspenso
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
    button1.innerHTML = Math.max(currentValue - 1, 0); // Não permitirá que o valor fique abaixo de 0
    verificarVencedor();
});

// Repita o processo para o segundo conjunto de botões
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
    button2.innerHTML = Math.max(currentValue - 1, 0); // Não permitirá que o valor fique abaixo de 0
    verificarVencedor();
});

// Função para verificar se uma dupla venceu
function verificarVencedor() {
    var pontosDupla1 = parseInt(button1.innerHTML);
    var pontosDupla2 = parseInt(button2.innerHTML);
    if (pontosDupla1 === 12) {
        alert("Dupla 1 venceu!");
    } else if (pontosDupla2 === 12) {
        alert("Dupla 2 venceu!");
    }
}


// Variáveis para armazenar os pontos atuais de cada sistema
var pontosSistema1 = parseInt(button1.innerHTML);
var pontosSistema2 = parseInt(button2.innerHTML);

// Função para armazenar os valores dos pontos no localStorage
function salvarPontosLocalStorage() {
    localStorage.setItem('pontosSistema1', pontosSistema1);
    localStorage.setItem('pontosSistema2', pontosSistema2);
}

// Função para preencher os pontos com os valores armazenados no localStorage
function preencherPontosLocalStorage() {
    pontosSistema1 = parseInt(localStorage.getItem('pontosSistema1')) || 0;
    pontosSistema2 = parseInt(localStorage.getItem('pontosSistema2')) || 0;
    button1.innerHTML = pontosSistema1;
    button2.innerHTML = pontosSistema2;
}

// Adicionar eventos de clique aos botões do menu suspenso
document.addEventListener('DOMContentLoaded', function () {
    // Preencher os pontos com os valores armazenados no localStorage ao carregar a página
    preencherPontosLocalStorage();

    // Adicionar eventos de clique aos botões de incremento e decremento
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


// Dupla 1 (Nomes)
let input1 = document.querySelector('#dupla1n1');
let input2 = document.querySelector('#dupla1n2');

// Vez
let vez1 = document.querySelector('#vez1');
let vez3 = document.querySelector('#vez3');

function handleInput() {
    let inicial1 = input1.value.charAt(0).toUpperCase();
    let inicial2 = input2.value.charAt(0).toUpperCase();

    // Atualiza o texto dos botões vez1 e vez3
    vez1.textContent = inicial1;
    vez3.textContent = inicial2;

    // Armazena os valores no localStorage
    localStorage.setItem('vez1', inicial1);
    localStorage.setItem('vez3', inicial2);

}

input1.oninput = handleInput;
input2.oninput = handleInput;


//-----------------------------

// Dupla 2 (Nomes)
let input3 = document.querySelector('#dupla2n1');
let input4 = document.querySelector('#dupla2n2');

let vez2 = document.querySelector('#vez2');
let vez4 = document.querySelector('#vez4');

function handleInput2() {
    let inicial3 = input3.value.charAt(0).toUpperCase();
    let inicial4 = input4.value.charAt(0).toUpperCase();

    // Atualiza o texto dos botões vez2 e vez4
    vez2.textContent = inicial3;
    vez4.textContent = inicial4;

    // Armazena os valores no localStorage
    localStorage.setItem('vez2', inicial3);
    localStorage.setItem('vez4', inicial4);
}

input3.oninput = handleInput2;
input4.oninput = handleInput2;

// Quando a página é carregada, recupera os valores do localStorage
window.onload = function () {
    vez1.textContent = localStorage.getItem('vez1') || '';
    vez3.textContent = localStorage.getItem('vez3') || '';
    vez2.textContent = localStorage.getItem('vez2') || '';
    vez4.textContent = localStorage.getItem('vez4') || '';
}

// Armazena os nomes dos inputs

// Função para armazenar os valores dos inputs no localStorage
function salvarInputLocalStorage(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        localStorage.setItem(inputId, input.value);
    }
}

// Função para preencher os inputs com os valores armazenados no localStorage
function preencherInputsLocalStorage(inputId) {
    const valorSalvo = localStorage.getItem(inputId);
    const input = document.getElementById(inputId);
    if (input && valorSalvo) {
        input.value = valorSalvo;
    }
}

// Adicionar eventos de escuta para detectar mudanças nos inputs e salvá-las no localStorage
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            salvarInputLocalStorage(input.id);
        });
        // Preencher os inputs com os valores armazenados no localStorage ao carregar a página
        preencherInputsLocalStorage(input.id);
    });
});




// Dropdown Curinga

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











