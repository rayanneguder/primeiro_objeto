function chama_aluno(){

    let aluno = {
        nome:'ray guder', 
        idade: 15,
        altura: 1.62,
        nota: 7.50
    };
//alert(aluno.nome);

document.getElementById('nome_aluno').textContent = 'nome: ' + aluno.nome;
document.getElementById('idade_aluno').textContent = 'idade: ' + aluno.idade; 
document.getElementById('altura_aluno').textContent = 'altura: ' + aluno.altura;
document.getElementById('nota_aluno').textContent = 'nota: ' + aluno.nota;
}