//acessa o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//executa os codigos ao clicar no botao
botaoAdicionar.addEventListener('click',function(event){
 event.preventDefault();

 //acessa o formulario
var formulario = document.querySelector("#form-adiciona");

//captura os dados inseridos
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//criar a tag, <tr>
var pacienteTr = document.createElement("tr");

//cria as tags <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//adicona valor as tags criadas
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularIMC(peso,altura);

//adicionar as tags na tela do usuario
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

//variavel para acessar tdBody
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);



});