// Datos de ejemplo (10 localidades)
const localidades = [
  { nombre: "Iquique", temp: "26°C", estado: "Soleado", icono: "☀️" },
  { nombre: "Alto Hospicio", temp: "24°C", estado: "Despejado", icono: "🌤️" },
  { nombre: "Pozo Almonte", temp: "28°C", estado: "Caluroso", icono: "☀️" },
  { nombre: "Huara", temp: "27°C", estado: "Soleado", icono: "☀️" },
  { nombre: "Pica", temp: "30°C", estado: "Caluroso", icono: "🔥" },
  { nombre: "Camiña", temp: "25°C", estado: "Nublado", icono: "☁️" },
  { nombre: "Colchane", temp: "18°C", estado: "Frío", icono: "❄️" },
  { nombre: "La Tirana", temp: "29°C", estado: "Soleado", icono: "☀️" },
  { nombre: "Mamiña", temp: "26°C", estado: "Despejado", icono: "🌤️" },
  { nombre: "Matilla", temp: "28°C", estado: "Soleado", icono: "☀️" }
];

const contenedor = document.getElementById("localidades");

localidades.forEach((loc, index) => {
  const card = document.createElement("div");
  card.className = "col-12 col-md-4 col-lg-3 mb-4";
  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body text-center">
        <h5 class="card-title">${loc.nombre}</h5>
        <p class="display-6">${loc.icono}</p>
        <p class="card-text">${loc.temp} - ${loc.estado}</p>
        <button class="btn btn-primary ver-detalle" data-index="${index}">Ver detalle</button>
      </div>
    </div>
  `;
  contenedor.appendChild(card);
});

// Evento click para navegar a detalle
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ver-detalle")) {
    const index = e.target.getAttribute("data-index");
    localStorage.setItem("localidadSeleccionada", index);
    window.location.href = "detalle.html";
  }
});
