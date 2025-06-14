document.addEventListener('DOMContentLoaded', function () {
    var btnVoltar = document.getElementById('btn-voltar');
    // Voltar para o início na tela de voos.html
    if (btnVoltar && window.location.pathname.includes('voos.html')) {
        btnVoltar.onclick = function () {
            window.location.href = 'index.html';
        };
    }
    // Voltar para o início na tela index.html (caso exista)

    if (btnVoltar && window.location.pathname.includes('index.html')) {
        btnVoltar.onclick = function () {
            window.location.href = 'index.html';
        };
    }

    // Botão simular (index)

    var btnSimular = document.getElementById('btn-simular');
    if (btnSimular) {
        btnSimular.onclick = function () {
            window.location.href = 'voos.html';
        };
    }

    // Lógica dos selects (voos)

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

        // Botão simular (voos)
        var btnSimularVoos = document.querySelector('.btn-simular');
        if (btnSimularVoos) {
            btnSimularVoos.onclick = function () {
                var valorSaida = Number(selectSaida.value);
                var valorDestino = Number(selectDestino.value);
                var qtdPassageiros = Number(selectPassageiros.value);

                var nomeSaida = selectSaida.options[selectSaida.selectedIndex].text;
                var nomeDestino = selectDestino.options[selectDestino.selectedIndex].text;

                if (!valorSaida || !valorDestino || !qtdPassageiros) {
                    alert('Selecione todas as opções!');
                    return;
                }

                var valorTotal = (valorSaida + valorDestino) * qtdPassageiros;

                localStorage.setItem('origem', nomeSaida);
                localStorage.setItem('destino', nomeDestino);
                localStorage.setItem('qtdPassageiros', qtdPassageiros);
                localStorage.setItem('valorTotal', valorTotal);

                window.location.href = 'resultado.html';
            };
        }
    }

    // Preencher resultado (resultado.html)
    if (document.getElementById('origem') && document.getElementById('destino')) {
        document.getElementById('origem').textContent = localStorage.getItem('origem') || '-';
        document.getElementById('destino').textContent = localStorage.getItem('destino') || '-';
        document.getElementById('qtd-passageiros').textContent = localStorage.getItem('qtdPassageiros') || '-';

        var valor = localStorage.getItem('valorTotal');
        if (valor) {
            document.getElementById('valor-total').textContent = Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        } else {
            document.getElementById('valor-total').textContent = '-';
        }

        // Botão voltar na tela de resultado
        var btnVoltarResultado = document.getElementById('btn-voltar');
        if (btnVoltarResultado) {
            btnVoltarResultado.onclick = function () {
                window.location.href = 'voos.html';
            };
        }
    }
});