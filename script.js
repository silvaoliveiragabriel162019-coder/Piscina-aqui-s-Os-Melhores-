// ===== TROCAR SEÇÕES =====
function showSection(sec) {
  document.querySelectorAll('.sec').forEach(s => s.style.display = 'none');
  document.getElementById(sec).style.display = 'block';
}

// ===== CONFIRMAR PRESENÇA =====
function confirmarPresenca() {
  let nome = document.getElementById('nome').value;
  if (!nome) return alert('Digite seu nome');
  alert('Presença confirmada: ' + nome);
}

// ===== LOGIN ORGANIZADORES =====
function entrarOrg() {
  let senha = document.getElementById('senha').value;
  if (senha === 'Os Melhores') {
    document.getElementById('orgArea').style.display = 'block';
  } else {
    alert('Senha incorreta');
  }
}

// ===== FINANCEIRO =====
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

// ===== CAROUSEL =====
let slideIndex = 0;

function iniciarCarrossel() {
    const container = document.querySelector(".carrossel-container");
    const imagens = document.querySelectorAll(".carrossel-container img");
    const total = imagens.length;

    setInterval(() => {
        slideIndex = (slideIndex + 1) % total;
        container.style.transform = `translateX(-${slideIndex * 100}%)`;
    }, 5000); // 5 segundos
}

document.addEventListener("DOMContentLoaded", iniciarCarrossel);

function copiarPix() {
  const codigo = "00020126580014BR.GOV.BCB.PIX0136silvaoliveiragabriel162019@gmail.com520400005303986540517.505802BR5922Gabriel Silva Oliveira6009SAO PAULO62140510OVQJOLKNyY63043C3E";
  navigator.clipboard.writeText(codigo).then(() => {
    alert("✅ Código PIX copiado!");
  });
}