function Resultado() {
  var notaCampoA = parseFloat(document.getElementById("valorDoInputA").value);

  var notaCampoB = parseFloat(document.getElementById("valorDoInputB").value);

  var notaCampoC = parseFloat(document.getElementById("valorDoInputC").value);

  var notaCampoD = parseFloat(document.getElementById("valorDoInputD").value);

  var notaFinal = (notaCampoA + notaCampoB + notaCampoC + notaCampoD) / 4;

  var notaFixada = notaFinal.toFixed(1);
  var notaFixadaNumerico = parseFloat(notaFixada);

  var mensagemDaAprovacao = document.getElementById("mensagemAprovacao");
  console.log(notaFixadaNumerico);
  if (notaFixadaNumerico >= 7) {
    mensagemDaAprovacao.innerHTML = "Você foi aprovado(a) " + notaFixada;
  } else if (notaFixadaNumerico == 6 && notaFixadaNumerico < 7) {
    mensagemDaAprovacao.innerHTML = "Você foi para recuperação " + notaFixada;
  } else if (notaFixadaNumerico.value == NaN) {
    /mensagemDaAprovacao.innerHTML = "Você deve inserir uma nota entre 0 e 10";/;
  } else if (notaFixadaNumerico == 5 || notaFixadaNumerico < 5) {
    mensagemDaAprovacao.innerHTML = "Você foi reprovado(a) " + notaFixada;
  }
}
