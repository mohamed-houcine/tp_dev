const STORAGE_KEY = "taches";


let taches = []; 

const zoneSaisie = document.getElementById("zone_saisie");
const ajouterBtn = document.getElementById("Ajouter");
const list = document.getElementById("list");
const container = document.getElementById("taches_container");
const errorMsg = document.getElementById("error_msg");
const suppTout = document.getElementById("SupprimerTout");
const pas = document.getElementById("pas");
const nbCounter = document.getElementById("nbCounter");
const searchInput = document.getElementById("search");


function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(taches));
}

function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
    const arr = JSON.parse(raw);

    if (Array.isArray(arr)) {
      taches = [];
      for (let i = 0; i < arr.length; i++) {
        const o = arr[i];
        taches.push({ text: String(o.text || ""), etat: !!o.etat });
      }
    }
}


function renderTasks(filterText = "") {
  list.innerHTML = "";

  if (taches.length === 0) {
    container.style.display = "none";
    pas.style.display = "block";
    suppTout.style.display = "none";
    nbCounter.textContent = "";
    return;
  } else {
    container.style.display = "block";
    pas.style.display = "none";
    suppTout.style.display = "inline-block";
  }

  let nbTermine = 0;
  taches.forEach((tache, index) => {

    if (!tache.text.toLowerCase().includes(filterText.toLowerCase())) return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tache.text;
    if (tache.etat) {
      span.style.textDecoration = "line-through";
    }

    const actions = document.createElement("div");
    actions.id = "actions";

    const termBtn = document.createElement("button");
    termBtn.className = "Terminer";
    termBtn.type = "button";
    termBtn.textContent = tache.etat ? "Annuler" : "Terminer";
    termBtn.addEventListener("click", () => terminerTache(index));

    const suppBtn = document.createElement("button");
    suppBtn.className = "Supprimer";
    suppBtn.type = "button";
    suppBtn.textContent = "Supprimer";
    suppBtn.addEventListener("click", () => supprimerTache(index));

    actions.append(termBtn, suppBtn);
    li.append(span, actions);
    list.appendChild(li);

    if (tache.etat) nbTermine++;
  });

  nbCounter.textContent = `Terminées : ${nbTermine} / ${taches.length}`;
}


function ajouterTache() {
  const content = zoneSaisie.value.trim();
  if (content === "") {
    errorMsg.textContent = "Vous devez saisir une chaîne valide !";
    return;
  }
  errorMsg.textContent = "";

  const nouvelle = { text: content, etat: false };
  taches.push(nouvelle);
  saveTasks();
  renderTasks(searchInput.value);
  zoneSaisie.value = "";
  zoneSaisie.focus();
}

function supprimerTache(index) {
  if (index < 0 || index >= taches.length) return;
  taches.splice(index, 1);
  saveTasks();
  renderTasks(searchInput.value);
}

function terminerTache(index) {
  if (index < 0 || index >= taches.length) return;
  taches[index].etat = !taches[index].etat;
  saveTasks();
  renderTasks(searchInput.value);
}

ajouterBtn.addEventListener("click", () => ajouterTache());

zoneSaisie.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    ajouterTache();
  }
});

suppTout.addEventListener("click", () => {
  if (!confirm("Supprimer toutes les tâches ?")) return;
  taches = [];
  saveTasks();
  renderTasks();
});

searchInput.addEventListener("input", (e) => {
  renderTasks(e.target.value);
});

window.addEventListener("load", () => {
  loadTasks();
  renderTasks();
});
