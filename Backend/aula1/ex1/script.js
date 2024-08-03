function cadastrar() {
    var nome = document.getElementById("nome").value;
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let media;
    let situacao;
    var tabela_resultado = document.querySelector("#tabela_resultado");

    media = (n1 + n2 + n3) / 3;

    if (media >= 50) {
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }

    tabela_resultado.innerHTML += `
  
            <tbody>
                <tr>
                    <td>${nome}</td>
                    <td>${n1}</td>
                    <td>${n2}</td>
                    <td>${n3}</td>
                    <td>${media.toFixed(2)}</td>
                    <td>${situacao}</td>
                </tr>

            </tbody>
    
    `

}