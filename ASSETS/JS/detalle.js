const localidades = JSON.parse(localStorage.getItem("localidades")) || [
  { nombre: "Iquique",
    temp: "23°C", 
    humedad: "70%", 
    viento: "15 km/h", 
    pronostico: ["☀️", "☀️", "🌤️", "☁️", "☀️", "☀️", "🌤️"],
    descripción: "En verano, Iquique disfruta de temperaturas cálidas y agradables, ideales para pasar el día en sus playas. Durante la noche, el clima se mantiene templado, perfecto para paseos costeros." 
  },

  { nombre: "Alto Hospicio", 
    temp: "24°C", 
    humedad: "60%", 
    viento: "18 km/h", 
    pronostico: ["☀️", "☀️", "🌤️", "☁️", "☀️", "☀️", "🌤️"],
    descripción: "En esta comuna de la Región de Tarapacá, las temperaturas suelen ser moderadas todo el año, con máximas cercanas a los 20–22 °C y mínimas alrededor de los 12–16 °C."
  },

  { nombre: "Pozo Almonte", 
    temp: "28°C", 
    humedad: "40%", 
    viento: "20 km/h", 
    pronostico: ["☀️", "☁️", "🌤️", "☁️", "☀️", "☁️", "🌤️"],
    descripción: "El clima de Pozo Almonte es árido, las temperaturas suelen oscilar entre máximas de 26–30 °C durante el día y mínimas de 7–13 °C en la noche, lo que genera una marcada diferencia térmica."
   },
  { nombre: "Huara",
    temp: "27°C", 
    humedad: "50%", 
    viento: "18 km/h", 
    pronostico: ["☀️", "🌤️", "🌤️", "☁️", "☀️", "🌤️", "🌤️"],
    descripción: "Durante el día suele ser caluroso, con temperaturas que pueden superar los 25–30 °C, mientras que en la noche descienden bastante, llegando a valores cercanos a los 5–10 °C."
   },
  { nombre: "Pica", 
    temp: "30°C", 
    humedad: "40%", 
    viento: "20 km/h", 
    pronostico: ["☀️", "☀️", "🌤️", "☀️", "🌤️", "☀️", "🌤️"],
    descripción:"En general, las temperaturas son altas durante el día, superando los 25–30 °C, mientras que en la noche bajan bastante, alrededor de 10–15 °C."
  },
  { nombre: "Camiña", 
    temp: "25°C", 
    humedad: "60%", 
    viento: "22 km/h", 
    pronostico: ["☀️", "☀️", "🌤️", "🌤️", "☀️", "☁️", "🌤️"],
    descripción:"El clima de Camiña es desértico cálido, las temperaturas suelen ser altas durante el día, cercanas a los 25–30 °C, mientras que en la noche bajan bastante, llegando a unos 10–15 °C."
  },
  { nombre: "Colchane", 
    temp: "18°C", humedad: "80%", 
    viento: "18 km/h", 
    pronostico: ["❄️", "☁️", "🌤️", "☁️", "🌤️", "❄️", "🌤️"],
    descripción:"El clima de Colchane es altiplánico, frío y seco. En general, los días pueden ser soleados y templados, pero las noches son muy frías, con temperaturas que suelen bajar bajo cero."
  },
  { nombre: "La Tirana", 
    temp: "29°C", 
    humedad: "30%", 
    viento: "15 km/h", 
    pronostico: ["☀️", "☀️", "🌤️", "☀️", "☀️", "🌤️", "🌤️"],
    descripción:"En general, las temperaturas son altas durante el día, cercanas a los 25–30 °C, mientras que en la noche bajan bastante, alrededor de 10–15 °C."
  },
  { nombre:"Mamiña", 
    temp: "29°C", 
    humedad: "30%", 
    viento: "15 km/h", 
    pronostico: ["🌤️", "☀️", "🌤️", "🌤️", "☀️", "☀️", "🌤️"],
    descripción:"Durante el día suele ser soleado y caluroso, con temperaturas que pueden superar los 25–30 °C, mientras que en la noche bajan bastante, llegando a unos 10–12 °C."
  },
  { nombre: "Matilla", 
    temp: "28°C", 
    humedad: "40%", 
    viento: "19 km/h", 
    pronostico: ["☀️", "☀️", "☁️", "☁️", "☀️", "☁️", "🌤️"],
    descripción:"El clima de Matilla es desértico cálido, seco y con noches frescas, con temperaturas que pueden superar los 25–30 °C, mientras que en la noche bajan bastante, llegando a unos 10–15 °C."
  },
];

const index = localStorage.getItem("localidadSeleccionada");
const loc = localidades[index];

const detalle = document.getElementById("detalle");
detalle.innerHTML = `
  <h2>${loc.nombre}</h2>
  <p><strong>Temperatura:</strong> ${loc.temp}</p>
  <p><strong>Humedad:</strong> ${loc.humedad}</p>
  <p><strong>Viento:</strong> ${loc.viento}</p>
  <p class="mt-3"><em>${loc.descripción}</em></p>
  <h3 class="mt-4">Pronóstico semanal</h3>
  <div class="d-flex justify-content-around flex-wrap">
    ${loc.pronostico.map(dia => `<span class="badge bg-info fs-4 m-1">${dia}</span>`).join("")}
  </div>
`;


