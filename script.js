document.addEventListener("DOMContentLoaded", function () {
    function criarCampos() {
        const quantidadeCampos = parseInt(document.getElementById("quantidade").value);
        const camposContainer = document.getElementById("campos-container");
        camposContainer.innerHTML = ""; 

        for (let i = 1; i <= quantidadeCampos; i++) {
            const novoCampo = document.createElement("div");
            novoCampo.classList.add("campo");
            
            const label = document.createElement("label");
            label.setAttribute("for", "campo" + i);
            label.textContent = "Campo " + i;

            const input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("id", "campo" + i);
            input.setAttribute("name", "campo" + i);

            novoCampo.appendChild(label);
            novoCampo.appendChild(input);
            camposContainer.appendChild(novoCampo);
        }
    }

    // ---------------------Função para obter os valores dos campos----------------------

    //---------------------Função para obter os valores dos campos----------------------
    function obterValores() {
        const quantidadeCampos = parseInt(document.getElementById("quantidade").value);
        const valores = [];

        for (let i = 1; i <= quantidadeCampos; i++) {
            const campo = document.getElementById("campo" + i);
            valores.push(parseFloat(campo.value) || 0);
        }

        return valores;
    }

    // -----------------------Função para realizar a soma----------------------
    function realizarSoma() {
        const valores = obterValores();
        const resultado = valores.reduce((total, valor) => total + valor, 0);

        document.getElementById("resultado").value = resultado;
    }

    // ----------------Função para realizar a subtração-----------------
    function realizarSubtracao() {
        const valores = obterValores();
        const resultado = valores.reduce((total, valor) => total - valor);

        document.getElementById("resultado").value = resultado;
    }

    // ------------------------------Função para limpar os campos--------------------------
    function limparCampos() {
        const quantidadeCampos = parseInt(document.getElementById("quantidade").value);

        for (let i = 1; i <= quantidadeCampos; i++) {
            const campo = document.getElementById("campo" + i);
            campo.value = "";
        }

        document.getElementById("resultado").value = "";
    }

    document.getElementById("quantidade").addEventListener("change", criarCampos);
    document.getElementById("soma").addEventListener("click", realizarSoma);
    document.getElementById("subtracao").addEventListener("click", realizarSubtracao);
    document.getElementById("limpar").addEventListener("click", limparCampos);
});
