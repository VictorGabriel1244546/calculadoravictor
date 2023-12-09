function calcular() {
	// Recupera os valores dos inputs
	let comprimento = parseFloat(document.getElementById("comprimento").value);
	let largura = parseFloat(document.getElementById("largura").value);
	let altura = parseFloat(document.getElementById("altura").value);

	// Converte as dimensões para metros
	comprimento = comprimento / 100;
	largura = largura / 100;
	altura = altura / 100;

	// Calcula o volume em metros cúbicos
	let volume = comprimento * largura * altura;

	// Converte o volume para litros
	let litros = volume * 1000;

	// Exibe o resultado na página
	document.getElementById("resultado").innerHTML = "O aquário tem " + litros + " litros de capacidade.";

	// Desenha o aquário no canvas
	desenharAquario(comprimento, largura, altura);
}

