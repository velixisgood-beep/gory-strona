// Baza szczytów
const mountains = [
  {
    id: "rysy",
    nazwa: "Rysy",
    wysokosc: "2499 m n.p.m.",
    pasmo: "Tatry",
    kraj: "Polska / Słowacja",
    opis: "Najwyższy punkt Polski — klasyk Tatr. Widoki jak jebany obraz, ale podejście konkretne.",
    sprzet: ["Buty trekkingowe z dobrą podeszwą", "Kurtka przeciwdeszczowa", "Kijki trekkingowe", "Softshell", "Mapa lub GPS"],
    umiejetnosci: ["Dobra kondycja", "Podstawy turystyki górskiej", "Rozsądne tempo", "Ocena pogody w górach"],
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rysy.jpg"
  },
  {
    id: "giewont",
    nazwa: "Giewont",
    wysokosc: "1894 m n.p.m.",
    pasmo: "Tatry",
    kraj: "Polska",
    opis: "Symbol Zakopanego. Łatwy, ale tłumy jak na koncercie Dawida Podsiadły.",
    sprzet: ["Buty trekkingowe", "Kurtka wiatrówka", "Plecak z wodą i prowiantem"],
    umiejetnosci: ["Podstawowa sprawność fizyczna", "Ostrożność przy łańcuchach"],
    img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Giewont_z_Krokwi.JPG"
  },
  {
    id: "montblanc",
    nazwa: "Mont Blanc",
    wysokosc: "4808 m n.p.m.",
    pasmo: "Alpy",
    kraj: "Francja / Włochy",
    opis: "Król Alp — technicznie i psychicznie wymagający, ale nagroda to dosłownie dach Europy.",
    sprzet: ["Raki", "Czekan", "Uprząż", "Kask", "Kurtka puchowa", "Czołówka", "Lina dynamiczna"],
    umiejetnosci: ["Wspinaczka lodowcowa", "Asekuracja linowa", "Nawigacja w trudnych warunkach"],
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mont_Blanc_from_Aiguille_du_Midi.jpg"
  },
  {
    id: "matterhorn",
    nazwa: "Matterhorn",
    wysokosc: "4478 m n.p.m.",
    pasmo: "Alpy",
    kraj: "Szwajcaria / Włochy",
    opis: "Legenda Alp. Charakterystyczny kształt, piękny i niebezpieczny jak modelka z temperamentem.",
    sprzet: ["Kask", "Lina", "Raki", "Czekan", "Buty wysokogórskie"],
    umiejetnosci: ["Wspinaczka skalna", "Poruszanie w eksponowanym terenie", "Znajomość asekuracji"],
    img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Matterhorn_Riffelhorn.jpg"
  },
  {
    id: "everest",
    nazwa: "Mount Everest",
    wysokosc: "8848 m n.p.m.",
    pasmo: "Himalaje",
    kraj: "Nepal / Chiny",
    opis: "Najwyższy szczyt świata — marzenie i piekło w jednym. To już nie góra, to styl życia.",
    sprzet: ["Maska tlenowa", "Kombinezon puchowy", "Raki wysokogórskie", "Czekan techniczny", "Namiot ekspedycyjny"],
    umiejetnosci: ["Wspinaczka wysokogórska", "Doświadczenie na 6000+ m", "Zarządzanie energią i tlenem"],
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
  },
  {
    id: "island_peak",
    nazwa: "Island Peak (Imja Tse)",
    wysokosc: "6189 m n.p.m.",
    pasmo: "Himalaje",
    kraj: "Nepal",
    opis: "Idealny pierwszy sześciotysięcznik. Daje przedsmak prawdziwej ekspedycji.",
    sprzet: ["Raki", "Czekan", "Uprząż", "Kask", "Lina", "Buty wysokogórskie"],
    umiejetnosci: ["Wspinaczka na lodowcu", "Podstawy asekuracji", "Dobra aklimatyzacja"],
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Island_Peak_from_Chhukung_Ri.jpg"
  },
  {
    id: "grossglockner",
    nazwa: "Grossglockner",
    wysokosc: "3798 m n.p.m.",
    pasmo: "Alpy (Austria)",
    kraj: "Austria",
    opis: "Najwyższy szczyt Austrii. Lodowiec, stalowy krzyż i czysta alpejska magia.",
    sprzet: ["Raki", "Czekan", "Uprząż", "Lina", "Kask", "Rękawiczki techniczne"],
    umiejetnosci: ["Poruszanie się po lodowcu", "Asekuracja", "Czytanie warunków pogodowych"],
    img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Grossglockner_panorama.jpg"
  }
];

// DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mountainList = document.getElementById('mountainList');

// Startowy tekst
mountainList.innerHTML = "<p style='text-align:center;opacity:0.7;'>Wpisz nazwę szczytu, np. <b>Rysy</b> lub <b>Everest</b></p>";

// Szukanie
function searchMountains(query) {
  const q = query.trim().toLowerCase();
  if (q === '') {
    mountainList.innerHTML = "<p style='text-align:center;opacity:0.7;'>Wpisz nazwę szczytu, np. <b>Rysy</b> lub <b>Everest</b></p>";
    return;
  }

  const result = mountains.find(m => m.nazwa.toLowerCase().includes(q));

  if (!result) {
    mountainList.innerHTML = `<div class="mountain-card"><h3>Nie znaleziono 😢</h3><p>Spróbuj innej nazwy — np. Tatry, Everest, Mont Blanc.</p></div>`;
    return;
  }

  // Tworzenie listy sprzętu i umiejętności
  const sprzetHTML = result.sprzet.map(s => `<li>${s}</li>`).join('');
  const umiejetnosciHTML = result.umiejetnosci.map(u => `<li>${u}</li>`).join('');

  // render jednego szczytu
  mountainList.innerHTML = `
    <div class="mountain-card">
      <img src="${result.img}" alt="${result.nazwa}" style="width:100%;max-height:250px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
      <h3>${result.nazwa}</h3>
      <p><strong>Wysokość:</strong> ${result.wysokosc}</p>
      <p><strong>Pasmo:</strong> ${result.pasmo}</p>
      <p><strong>Kraj:</strong> ${result.kraj}</p>
      <p style="margin-top:8px;">${result.opis}</p>
      <div style="margin-top:15px;">
        <h4>🧗‍♂️ Sprzęt potrzebny:</h4>
        <ul style="margin-left:20px;">${sprzetHTML}</ul>
      </div>
      <div style="margin-top:10px;">
        <h4>💪 Wymagane umiejętności:</h4>
        <ul style="margin-left:20px;">${umiejetnosciHTML}</ul>
      </div>
    </div>
  `;
}

// Obsługa kliknięcia
searchBtn.addEventListener('click', () => {
  searchMountains(searchInput.value);
});

// Obsługa Entera
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchMountains(searchInput.value);
  }
});

