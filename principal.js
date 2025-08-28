//muda o nome a partir do seletor de classe
var pacientes = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Henrique Nutriçao";
pacientes.textContent = "Meus pacientes";

//acesar a tag tr - paciente Paulo
var paciente = document.querySelector ("#primeiro-paciente");
//seleciona o conteudo da tag
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;
//seleciona o conteudo altura da tag
var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;
//calcula o imc
var imc = peso / (altura * altura);
// acessa e altera imc
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
//define limites de peso e altura
if(peso < 0 || peso > 1000){
    alert("peso duzao");
}

if(altura < 0 || altura > 3.0){
    alert("altura invalida");
}


