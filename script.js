function showSection(sec) {
  document.querySelectorAll('.sec').forEach(s => s.style.display = 'none');
  document.getElementById(sec).style.display = 'block';
}

function confirmarPresenca() {
  let nome = document.getElementById('nome').value;
  if (!nome) return alert('Digite seu nome');
  alert('Presença confirmada: ' + nome);
}

function entrarOrg() {
  let senha = document.getElementById('senha').value;
  if (senha === 'Os Melhores') {
    document.getElementById('orgArea').style.display = 'block';
  } else {
    alert('Senha incorreta');
  }
}

let totalArrecadado = 0;
let totalGasto = 0;

function atualizarFinanceiro() {
  document.getElementById('totArrec').innerText = totalArrecadado;
  document.getElementById('totGasto').innerText = totalGasto;
  document.getElementById('saldo').innerText = totalArrecadado - totalGasto;
}

function addPagamento() {
  let nome = document.getElementById('pagNome').value;
  let valor = Number(document.getElementById('pagValor').value);
  if (!nome || !valor) return alert('Preencha tudo');

  totalArrecadado += valor;
  document.getElementById('listaPag').innerHTML += `<li>${nome}: R$${valor}</li>`;
  atualizarFinanceiro();
}

function addGasto() {
  let desc = document.getElementById('gastoDesc').value;
  let valor = Number(document.getElementById('gastoValor').value);
  if (!desc || !valor) return alert('Preencha tudo');

  totalGasto += valor;
  document.getElementById('listaGasto').innerHTML += `<li>${desc}: R$${valor}</li>`;
  atualizarFinanceiro();
}