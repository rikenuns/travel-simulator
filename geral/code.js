document.addEventListener('DOMContentLoaded', function () {
    // Botão voltar
    var btnVoltar = document.getElementById('btn-voltar');
    if (btnVoltar) {
        btnVoltar.onclick = function () {
            window.location.href = 'index.html';
        };
    }

    // Botão simular
    var btnSimular = document.getElementById('btn-simular');
    if (btnSimular) {
        btnSimular.onclick = function () {
            window.location.href = 'voos.html';
        };
    }

    // Selects
    var selectSaida = document.getElementById('saida');
    var selectDestino = document.getElementById('Destino');
    var selectPassageiros = document.getElementById('passageiros');

    if (selectSaida && selectDestino && selectPassageiros) {
        selectSaida.addEventListener('change', function () {
            if (this.value !== "") {
                selectDestino.disabled = false;
            } else {
                selectDestino.disabled = true;
                selectDestino.value = "";
                selectPassageiros.disabled = true;
                selectPassageiros.value = "";
            }
        });

        selectDestino.addEventListener('change', function () {
            if (this.value !== "") {
                selectPassageiros.disabled = false;
            } else {
                selectPassageiros.disabled = true;
                selectPassageiros.value = "";
            }
        });
    }
});