const amigos = [];

const $input = document.getElementById("amigo");
const $lista = document.getElementById("listaAmigos");
const $resultado = document.getElementById("resultado");

// --- utilidades ---
function limpiarResultado() {
  
  $resultado.innerHTML = "";
}

function renderLista() {
  
  $lista.innerHTML = "";
  for (const nombre of amigos) {
    const li = document.createElement("li");
    li.textContent = nombre;
    $lista.appendChild(li);
  }
}

// --- funcionalidad principal ---

function agregarAmigo() {
  const nombre = $input.value.trim();

  if (nombre.length === 0) {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  amigos.push(nombre);
  renderLista();
  limpiarResultado();

  // Reset de UI
  $input.value = "";
  $input.focus();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe ingresar al menos un nombre antes de sortear.");
    return;
  }

  const idx = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[idx];

  // Mostrar en la lista de resultados
  $resultado.innerHTML = ""; // limpio para no acumular
  const li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${elegido}`;
  $resultado.appendChild(li);
}


window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;


$input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarAmigo();
});