// 📘 Baza szczytów
// ======================
// 🗻 BAZA SZCZYTÓW
// ======================
const peaks = [
  // --- Tatry ---
  { nazwa: "Rysy", opis: "Najwyższy szczyt Polski (2503 m). Trudny, ale majestatyczny.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rysy.jpg" },
  { nazwa: "Giewont", opis: "Symbol Zakopanego. Znany z krzyża i tłumów turystów.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Giewont_z_Krokwi.JPG" },
  { nazwa: "Kasprowy Wierch", opis: "Popularny szczyt z kolejką i świetnym widokiem na Tatry.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kasprowy_Wierch_widok_na_Tatry_Wysokie.JPG" },
  { nazwa: "Świnica", opis: "Wysoki szczyt o stromych podejściach. Dla doświadczonych.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Swinica_Tatry.jpg" },
  { nazwa: "Kościelec", opis: "Nazywany polskim Matterhornem. Techniczny i stromy.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Koscielec_z_Czarny_Staw_Gasienicowy.jpg" },
  { nazwa: "Babia Góra", opis: "Królowa Beskidów, kapryśna pogoda i piękne wschody słońca.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Babia_G%C3%B3ra_2020.jpg" },
  { nazwa: "Wołowiec", opis: "Piękny, graniczny szczyt między Polską a Słowacją.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Wo%C5%82owiec_2.jpg" },
  { nazwa: "Grześ", opis: "Łagodny, idealny na rozruch w Tatrach Zachodnich.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Grzes_Tatry.jpg" },
  { nazwa: "Rakoń", opis: "Świetny widokowy szczyt z Doliny Chochołowskiej.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Rakon_2010.jpg" },
  { nazwa: "Czerwone Wierchy", opis: "Cztery szczyty z charakterystycznym czerwonym kolorem traw.", region: "Tatry", img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Czerwone_Wierchy_zima.jpg" },

  // --- Alpy ---
  { nazwa: "Mont Blanc", opis: "Najwyższy szczyt Alp (4808 m). Marzenie wspinaczy.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mont_Blanc_massif_from_the_Aiguille_du_Midi.jpg" },
  { nazwa: "Matterhorn", opis: "Ikoniczny szczyt w kształcie piramidy. Symbol Szwajcarii.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Matterhorn_from_Domh%C3%BCtte_-_2.jpg" },
  { nazwa: "Eiger", opis: "Słynny ze swojej północnej ściany – wyzwanie dla twardzieli.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Eiger_M%C3%B6nch_Jungfrau.jpg" },
  { nazwa: "Grossglockner", opis: "Najwyższy szczyt Austrii (3798 m).", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Grossglockner_02.jpg" },
  { nazwa: "Jungfrau", opis: "Jeden z najpiękniejszych szczytów Szwajcarii.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Jungfrau.jpg" },
  { nazwa: "Monte Rosa", opis: "Drugi najwyższy szczyt Alp. Potężna góra z lodowcem.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Monte_Rosa_view.jpg" },
  { nazwa: "Weisshorn", opis: "Trudny technicznie, ale oferuje niesamowite panoramy.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Weisshorn_from_Schwarzsee.jpg" },
  { nazwa: "Dom", opis: "Najwyższy szczyt całkowicie w Szwajcarii.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Alpen_-_Dom.jpg" },
  { nazwa: "Gran Paradiso", opis: "Najwyższy całkowicie włoski szczyt (4061 m).", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Gran_Paradiso_from_NNE.jpg" },
  { nazwa: "Dufourspitze", opis: "Główny wierzchołek masywu Monte Rosa.", region: "Alpy", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dufourspitze_Monte_Rosa.jpg" },

  // --- Himalaje ---
  { nazwa: "Everest", opis: "Najwyższa góra świata. 8848 m czystej dominacji.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" },
  { nazwa: "Lhotse", opis: "Czwarty co do wysokości szczyt świata.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Lhotse_from_Chukhung_Ri.jpg" },
  { nazwa: "Makalu", opis: "Piąty co do wysokości szczyt świata – potężny i dziki.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Makalu.jpg" },
  { nazwa: "Annapurna", opis: "Szczyt o pięknie i grozie – jeden z najniebezpieczniejszych.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Annapurna_I.jpg" },
  { nazwa: "Manaslu", opis: "Osiemtyśięcznik z piękną doliną i lodowcami.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Manaslu.jpg" },
  { nazwa: "Cho Oyu", opis: "Szczyt blisko granicy z Tybetem, stosunkowo łatwy dla ośmiotysięcznika.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Cho_Oyu_from_Gokyo.jpg" },
  { nazwa: "K2", opis: "Drugi szczyt świata, ale najtrudniejszy technicznie.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/K2_2006b.jpg" },
  { nazwa: "Shishapangma", opis: "Jedyny ośmiotysięcznik w całości w Tybecie.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Shishapangma_west_face.jpg" },
  { nazwa: "Everest Base Camp", opis: "Popularna trasa trekkingowa w Himalajach Nepalu.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Everest_Base_Camp_Trek.jpg" },
  { nazwa: "Ama Dablam", opis: "Uważany za najpiękniejszą górę świata.", region: "Himalaje", img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ama_Dablam_from_Pheriche.jpg" },

  // --- Andy ---
  { nazwa: "Aconcagua", opis: "Najwyższy szczyt Ameryki Południowej (6961 m).", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Aconcagua2016.jpg" },
  { nazwa: "Ojos del Salado", opis: "Najwyższy czynny wulkan na świecie.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Ojos_del_Salado_%28aerial_view%29.jpg" },
  { nazwa: "Huascarán", opis: "Najwyższy szczyt Peru (6768 m).", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Huascaran.jpg" },
  { nazwa: "Chimborazo", opis: "Szczyt najdalej od środka Ziemi, mimo że niższy niż Everest!", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chimborazo_from_Ambato.jpg" },
  { nazwa: "Illimani", opis: "Góra czuwająca nad La Paz w Boliwii.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Illimani_La_Paz.jpg" },
  { nazwa: "Cotopaxi", opis: "Aktywny wulkan w Ekwadorze, majestatyczny i groźny.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cotopaxi.jpg" },
  { nazwa: "Alpamayo", opis: "Najpiękniejsza góra świata według wielu alpinistów.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Alpamayo.jpg" },
  { nazwa: "Nevado del Ruiz", opis: "Wulkan w Kolumbii z tragiczną historią erupcji.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Nevado_del_Ruiz_Colombia.jpg" },
  { nazwa: "Coropuna", opis: "Wulkaniczny masyw w Peru.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Coropuna_volcano.jpg" },
  { nazwa: "Pissis", opis: "Trzeci najwyższy szczyt Andów.", region: "Andy", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pissis.jpg" },
];

// ======================
// 🔍 ELEMENTY DOM
// ======================
const input = document.getElementById("peakInput");
const suggestions = document.getElementById("suggestions");
const searchButton = document.getElementById("searchButton");
const mountainList = document.getElementById("mountainList");

// ======================
// 🔥 FUNKCJE
// ======================
function showMountain(mountain) {
  mountainList.innerHTML = `
    <div class="mountain-card">
      <img src="${mountain.img}" alt="${mountain.nazwa}">
      <h2>${mountain.nazwa} <span>(${mountain.region})</span></h2>
      <p>${mountain.opis}</p>
    </div>
  `;
}

function searchMountain(name) {
  const query = name.trim().toLowerCase();
  const mountain = peaks.find(p => p.nazwa.toLowerCase() === query);

  if (mountain) {
    showMountain(mountain);
  } else {
    mountainList.innerHTML = `<p class="no-result">Nie znaleziono 😢</p>`;
  }
}

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  suggestions.innerHTML = "";
  if (!query) return;

  const filtered = peaks.filter(p => p.nazwa.toLowerCase().includes(query));

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");
    div.textContent = `${p.nazwa} (${p.region})`;
    div.addEventListener("click", () => {
      input.value = p.nazwa;
      suggestions.innerHTML = "";
      showMountain(p);
    });
    suggestions.appendChild(div);
  });
});

searchButton.addEventListener("click", () => {
  searchMountain(input.value);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchMountain(input.value);
  }
});
