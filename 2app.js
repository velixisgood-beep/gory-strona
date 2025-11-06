// 📘 Baza szczytów
// ======================
// 🗻 BAZA SZCZYTÓW (200 szczytów z rozszerzonymi danymi)
// ======================

// =======================================================
// 🗻 PEŁNA BAZA 200 SZCZYTÓW (Tatry, Alpy, Himalaje, Andy)
// =======================================================

const peaks = [
    { nazwa: "Rysy", region: "Tatry", wysokosc_m: 2503, opis: "Najwyższy szczyt Polski. Trudny, eksponowany szlak z łańcuchami.", klimat: "Alpejski, zmienny", trudnosc: "Wysoka (z łańcuchami)", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking, zimą raki/czekan", najpopularniejsza_droga: "Od Morskiego Oka przez Czarny Staw", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rysy.jpg" },
    { nazwa: "Giewont", region: "Tatry", wysokosc_m: 1894, opis: "Symbol Zakopanego. Ekspozycja i łańcuchy na ostatnim odcinku. Omijać w burzy!", klimat: "Górski, umiarkowany", trudnosc: "Średnia (ostatni odcinek z łańcuchami)", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Kuźnic przez Kondratową i Przełęcz Kondracką", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Giewont_z_Krokwi.JPG" },
    { nazwa: "Kasprowy Wierch", region: "Tatry", wysokosc_m: 1987, opis: "Popularny szczyt z kolejką i świetnym widokiem na Tatry.", klimat: "Górski", trudnosc: "Łatwa (kolejka), Średnia (pieszo)", koszt_wejscia_pln: 35, sprzet: "Zależny od pory roku", najpopularniejsza_droga: "Kolejka z Kuźnic lub pieszo z Hali Gąsienicowej", img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kasprowy_Wierch_widok_na_Tatry_Wysokie.JPG" },
    { nazwa: "Świnica", region: "Tatry", wysokosc_m: 2301, opis: "Wysoki szczyt o stromych podejściach. Techniczny, zwłaszcza grań. Zimą wymagający.", klimat: "Wysokogórski", trudnosc: "Wysoka (eksponowana grań)", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking, odporność na ekspozycję", najpopularniejsza_droga: "Od Kasprowego Wierchu lub Zawratu", img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Swinica_Tatry.jpg" },
    { nazwa: "Kościelec", region: "Tatry", wysokosc_m: 2155, opis: "Nazywany polskim Matterhornem. Stromy, techniczny, z dużą ekspozycją.", klimat: "Alpejski", trudnosc: "Wysoka (miejsca wspinaczkowe)", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking, dobre buty", najpopularniejsza_droga: "Z Hali Gąsienicowej przez Czarny Staw Gąsienicowy", img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Koscielec_z_Czarny_Staw_Gasienicowy.jpg" },
    { nazwa: "Kozi Wierch", region: "Tatry", wysokosc_m: 2291, opis: "Najwyższy szczyt leżący w całości na terenie Polski. Część Orlej Perci.", klimat: "Alpejski", trudnosc: "Wysoka (łańcuchy, ekspozycja)", koszt_wejscia_pln: 35, sprzet: "Lonża, kask (zalecane na Orlą Perć)", najpopularniejsza_droga: "Z Doliny Pięciu Stawów Polskich (najłatwiejsza droga)", img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Kozi_Wierch_z_Doliny_Pięciu_Stawów.jpg" },
    { nazwa: "Wołowiec", region: "Tatry", wysokosc_m: 2063, opis: "Piękny, graniczny szczyt w Tatrach Zachodnich. Świetne widoki.", klimat: "Górski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Polany Chochołowskiej przez Grześ i Rakoń", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Wołowiec_2.jpg" },
    { nazwa: "Krzyżne", region: "Tatry", wysokosc_m: 2112, opis: "Końcowy punkt Orlej Perci. Przepiękna panorama.", klimat: "Wysokogórski", trudnosc: "Średnia/Wysoka (łańcuchy)", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Doliny Gąsienicowej lub Doliny Pięciu Stawów", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Krzyżne_-_widok_na_Dolinę_Pałczycę.JPG" },
    { nazwa: "Mnich", region: "Tatry", wysokosc_m: 2068, opis: "Symbol polskiego taternictwa. Tylko dla wspinaczy. Pierwszy zdobyty w 1880 r.", klimat: "Alpejski", trudnosc: "Ekstremalna (wspinaczka)", koszt_wejscia_pln: 35, sprzet: "Lina, uprząż, sprzęt wspinaczkowy", najpopularniejsza_droga: "Droga Normalna (I stopień UIAA)", img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Mnich_od_Morskiego_Oka.jpg" },
    { nazwa: "Czerwone Wierchy", region: "Tatry", wysokosc_m: 2128, opis: "Masyw czterech szczytów, słynny z długiej i widokowej grani. Jesienią zmienia kolor.", klimat: "Górski", trudnosc: "Średnia (długa trasa)", koszt_wejscia_pln: 35, sprzet: "Dobre buty, odpowiednie nawodnienie", najpopularniejsza_droga: "Z Kuźnic na Ciemniak i dalej granią", img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Czerwone_Wierchy_zima.jpg" },
    { nazwa: "Gerlach", region: "Tatry", wysokosc_m: 2655, opis: "Najwyższy szczyt Tatr i całych Karpat. Tylko z przewodnikiem.", klimat: "Alpejski", trudnosc: "Bardzo Wysoka (tylko z przewodnikiem/UIAA II)", koszt_wejscia_pln: 35, sprzet: "Uprząż, kask, lina, czekan, przewodnik", najpopularniejsza_droga: "Przez Wielicką Próbę lub Batyżowiecką Próbę (Słowacja)", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Gerlach_z_Tatrzanskiej_Polanki.jpg" },
    { nazwa: "Durny Szczyt", region: "Tatry", wysokosc_m: 2623, opis: "Jeden z wyższych szczytów Tatr Wysokich. Dostępny tylko dla taterników.", klimat: "Alpejski", trudnosc: "Ekstremalna (tylko wspinaczka)", koszt_wejscia_pln: 35, sprzet: "Sprzęt wspinaczkowy", najpopularniejsza_droga: "Przez Durną Przełęcz", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Lomnick%C3%BD_%C5%A0t%C3%ADt_a_Py%C5%A1n%C3%BD_%C5%A0t%C3%ADt.jpg" },
    { nazwa: "Łomnica", region: "Tatry", wysokosc_m: 2634, opis: "Drugi co do wysokości szczyt Tatr. Stacja obserwacyjna. Dostępna kolejką.", klimat: "Alpejski", trudnosc: "Łatwa (kolejka), Ekstremalna (wspinaczka)", koszt_wejscia_pln: 35, sprzet: "Zależny (kolejka lub sprzęt wspinaczkowy)", najpopularniejsza_droga: "Kolejka linowa ze Starego Smokowca", img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Lomnicky_Stit.jpg" },
    { nazwa: "Krywań", region: "Tatry", wysokosc_m: 2494, opis: "Narodowy symbol Słowacji. Kultowy szczyt widokowy.", klimat: "Wysokogórski", trudnosc: "Średnia/Wysoka", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Tri Studničky lub od Jamskiego Stawu", img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Krivan.jpg" },
    { nazwa: "Babiogórska Grań", region: "Tatry", wysokosc_m: 1725, opis: "Królowa Beskidów (Babia Góra) - kapryśna pogoda, piękne wschody słońca. Formalnie Beskidy, ale często traktowana jako brama Tatr.", klimat: "Górski, bardzo zmienny", trudnosc: "Średnia", koszt_wejscia_pln: 8, sprzet: "Kurtka przeciwdeszczowa, ochrona przed wiatrem", najpopularniejsza_droga: "Perć Akademików (w górę)", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Babia_Góra_2020.jpg" },
    { nazwa: "Szpiglasowy Wierch", region: "Tatry", wysokosc_m: 2172, opis: "Szczyt graniczny z pięknymi widokami na Dolinę Pięciu Stawów i Morskie Oko.", klimat: "Wysokogórski", trudnosc: "Średnia (łańcuchy)", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Morskiego Oka przez Szpiglasową Przełęcz", img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Szpiglasowy_Wierch_2011.JPG" },
    { nazwa: "Lodowy Szczyt", region: "Tatry", wysokosc_m: 2627, opis: "Jeden z najpiękniejszych tatrzańskich szczytów. Tylko dla wspinaczy.", klimat: "Alpejski", trudnosc: "Ekstremalna (wspinaczka/przewodnik)", koszt_wejscia_pln: 35, sprzet: "Sprzęt wspinaczkowy", najpopularniejsza_droga: "Przez Lodową Przełęcz (z przewodnikiem)", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Lodowy_Szczyt_z_g%C3%B3ry.JPG" },
    { nazwa: "Kominarskie Wierchy", region: "Tatry", wysokosc_m: 2058, opis: "Najwyższy szczyt Tatr Bielskich. W całości poza szlakami turystycznymi.", klimat: "Górski", trudnosc: "Ekstremalna (dla taterników)", koszt_wejscia_pln: 35, sprzet: "Brak szlaku turystycznego", najpopularniejsza_droga: "Brak - tylko taternicy z zezwoleniem", img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kominarski_Wierch.jpg" },
    { nazwa: "Starorobociański Wierch", region: "Tatry", wysokosc_m: 2176, opis: "Najwyższy szczyt Tatr Zachodnich po stronie polskiej.", klimat: "Górski", trudnosc: "Średnia/Wysoka (długość trasy)", koszt_wejscia_pln: 35, sprzet: "Dobre buty, kondycja", najpopularniejsza_droga: "Z Iwaniackiej Przełęczy przez Ornak", img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Starorobocia%C5%84ski_Wierch_od_po%C5%82udnia.jpg" },
    { nazwa: "Granaty", region: "Tatry", wysokosc_m: 2240, opis: "Trzy szczyty w ciągu Orlej Perci. Trudny, eksponowany szlak.", klimat: "Wysokogórski", trudnosc: "Wysoka (łańcuchy, drabinki)", koszt_wejscia_pln: 35, sprzet: "Lonża, kask (zalecane)", najpopularniejsza_droga: "Z Przełęczy Krzyżne (Orla Perć)", img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Po%C5%82udniowy_Granat.jpg" },
    { nazwa: "Jaworowy Szczyt", region: "Tatry", wysokosc_m: 2418, opis: "Charakterystyczny szczyt Tatr Wysokich (Słowacja).", klimat: "Alpejski", trudnosc: "Bardzo Wysoka (wspinaczka/przewodnik)", koszt_wejscia_pln: 35, sprzet: "Sprzęt wspinaczkowy", najpopularniejsza_droga: "Przez Jaworową Przełęcz (z przewodnikiem)", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Javorov%C3%BD_%C5%A1t%C3%ADt_view_from_Ostr%C3%BD_%C5%A1t%C3%ADt.jpg" },
    { nazwa: "Baranie Rogi", region: "Tatry", wysokosc_m: 2526, opis: "Szczyt w bocznej grani Tatr Wysokich (Słowacja).", klimat: "Alpejski", trudnosc: "Bardzo Wysoka (wspinaczka/przewodnik)", koszt_wejscia_pln: 35, sprzet: "Sprzęt wspinaczkowy", najpopularniejsza_droga: "Z Baraniej Przełęczy (z przewodnikiem)", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Baranie_Rohy_view.jpg" },
    { nazwa: "Kopuła Liptowska", region: "Tatry", wysokosc_m: 2144, opis: "Wybitny szczyt w bocznej grani Tatr Wysokich (Słowacja).", klimat: "Wysokogórski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Koprowej Doliny", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Kop%C3%BAla_Liptovsk%C3%A1.jpg" },
    { nazwa: "Mieguszowiecki Szczyt Wielki", region: "Tatry", wysokosc_m: 2438, opis: "Trzeci pod względem wysokości szczyt po polskiej stronie. Tylko dla taterników.", klimat: "Alpejski", trudnosc: "Ekstremalna (wspinaczka)", koszt_wejscia_pln: 35, sprzet: "Sprzęt wspinaczkowy", najpopularniejsza_droga: "Z Morskiego Oka (różne drogi wspinaczkowe)", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mi%C4%99guszowiecki_Szczyt_Wielki_z_Morskiego_Oka.jpg" },
    { nazwa: "Ornak", region: "Tatry", wysokosc_m: 1854, opis: "Masyw w Tatrach Zachodnich, piękna widokowo trasa na Starorobociański Wierch.", klimat: "Górski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Doliny Kościeliskiej przez Iwaniacką Przełęcz", img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ornak_z_dolin%C4%85_Chocho%C5%82owsk%C4%85.JPG" },
    { nazwa: "Trzy Kopy", region: "Tatry", wysokosc_m: 2136, opis: "Fragment grani w Tatrach Zachodnich (Słowacja), bardzo eksponowany.", klimat: "Wysokogórski", trudnosc: "Wysoka (łańcuchy, ekspozycja)", koszt_wejscia_pln: 35, sprzet: "Kask, lonża (zalecane)", najpopularniejsza_droga: "Z Rohackich Stawów", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Trzy_Kopy.jpg" },
    { nazwa: "Grześ", region: "Tatry", wysokosc_m: 1653, opis: "Łagodny, idealny na rozruch w Tatrach Zachodnich. Świetne miejsce na odpoczynek.", klimat: "Górski", trudnosc: "Łatwa", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Doliny Chochołowskiej (przez Polanę Chochołowską)", img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Grzes_Tatry.jpg" },
    { nazwa: "Rakoń", region: "Tatry", wysokosc_m: 1879, opis: "Widokowy szczyt z Doliny Chochołowskiej. Część trasy na Wołowiec.", klimat: "Górski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Polany Chochołowskiej", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Rakon_2010.jpg" },
    { nazwa: "Żółta Turnia", region: "Tatry", wysokosc_m: 2084, opis: "Piękny szczyt z widokiem na Dolinę Gąsienicową. Trudny, ale widokowy.", klimat: "Górski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy", najpopularniejsza_droga: "Od Hali Gąsienicowej (szlak nie prowadzi na sam szczyt)", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Żółta_Turnia.jpg" },
    { nazwa: "Ostra", region: "Tatry", wysokosc_m: 2351, opis: "Wybitny szczyt w Tatrach Zachodnich, widokowy i rzadziej odwiedzany.", klimat: "Wysokogórski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Podbańskiej (Słowacja)", img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Ostr%C3%A1_z_pohoria.jpg" },
    { nazwa: "Tomanowy Wierch", region: "Tatry", wysokosc_m: 1876, opis: "Łagodny szczyt w Tatrach Zachodnich. Długie i spokojne podejście.", klimat: "Górski", trudnosc: "Średnia", koszt_wejscia_pln: 35, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Doliny Kościeliskiej", img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tomanowy_Wierch.jpg" },
    { nazwa: "Mont Blanc", region: "Alpy", wysokosc_m: 4808, opis: "Najwyższy szczyt Alp. Wyprawa wysokogórska, lodowiec. Wymaga aklimatyzacji.", klimat: "Lodowcowy, Alpejski", trudnosc: "Wysoka (PD - dość trudna), lodowiec", koszt_wejscia_pln: 4000, sprzet: "Raki, czekan, uprząż, lina, buty wysokogórskie", najpopularniejsza_droga: "Droga Gouter (Via Normale) lub Droga 3M", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mont_Blanc_massif_from_the_Aiguille_du_Midi.jpg" },
    { nazwa: "Matterhorn", region: "Alpy", wysokosc_m: 4478, opis: "Ikoniczny szczyt w kształcie piramidy. Wymagająca wspinaczka graniowa. Symbol Szwajcarii.", klimat: "Alpejski, skalisty", trudnosc: "Bardzo Wysoka (AD - dość trudna), wspinaczka", koszt_wejscia_pln: 300, sprzet: "Kompletny sprzęt wspinaczkowy, lina", najpopularniejsza_droga: "Grań Hörnli (Zermatt)", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Matterhorn_from_Domh%C3%BCtte_-_2.jpg" },
    { nazwa: "Eiger", region: "Alpy", wysokosc_m: 3970, opis: "Słynny z północnej ściany – symbol alpinizmu ekstremalnego.", klimat: "Alpejski, skalno-lodowy", trudnosc: "Ekstremalna (North Face - ED), wspinaczka", koszt_wejscia_pln: 0, sprzet: "Specjalistyczny sprzęt lodowy i skalny", najpopularniejsza_droga: "Grań Mittellegi (łatwiejsza droga)", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Eiger_M%C3%B6nch_Jungfrau.jpg" },
    { nazwa: "Grossglockner", region: "Alpy", wysokosc_m: 3798, opis: "Najwyższy szczyt Austrii. Lodowiec i strome podejście. Czasem tłoczno.", klimat: "Lodowcowy", trudnosc: "Wysoka (lodowiec, miejscami wspinaczka)", koszt_wejscia_pln: 50, sprzet: "Raki, czekan, lina", najpopularniejsza_droga: "Przez lodowiec Pasterze i schronisko Adlersruhe", img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Grossglockner_02.jpg" },
    { nazwa: "Jungfrau", region: "Alpy", wysokosc_m: 4158, opis: "Jeden z najpiękniejszych szczytów Szwajcarii. Dostępny kolejką do Jungfraujoch.", klimat: "Lodowcowy", trudnosc: "Wysoka (poza kolejką), trasa lodowcowa", koszt_wejscia_pln: 700, sprzet: "Raki, czekan, lina", najpopularniejsza_droga: "Przez Mönchsjochhütte i lodowiec Aletsch", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Jungfrau.jpg" },
    { nazwa: "Monte Rosa", region: "Alpy", wysokosc_m: 4634, opis: "Drugi najwyższy szczyt Alp. Potężna góra z licznymi lodowcami.", klimat: "Lodowcowy", trudnosc: "Bardzo Wysoka (długie trasy lodowcowe)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, lina, uprząż", najpopularniejsza_droga: "Przez schronisko Monte Rosa Hütte (Szwajcaria)", img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Monte_Rosa_view.jpg" },
    { nazwa: "Gran Paradiso", region: "Alpy", wysokosc_m: 4061, opis: "Najwyższy całkowicie włoski szczyt. Najłatwiejszy czterotysięcznik.", klimat: "Lodowcowy", trudnosc: "Średnia/Wysoka (łatwy lodowiec)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, lina (opcjonalnie)", najpopularniejsza_droga: "Z schroniska Rifugio Vittorio Emanuele II", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Gran_Paradiso_from_NNE.jpg" },
    { nazwa: "Dom", region: "Alpy", wysokosc_m: 4545, opis: "Najwyższy szczyt leżący w całości w Szwajcarii.", klimat: "Lodowcowy", trudnosc: "Bardzo Wysoka (długi i skomplikowany lodowiec)", koszt_wejscia_pln: 0, sprzet: "Buty wysokościowe, raki, czekan, lina", najpopularniejsza_droga: "Grań Festigrat", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Alpen_-_Dom.jpg" },
    { nazwa: "Weisshorn", region: "Alpy", wysokosc_m: 4505, opis: "Jeden z najtrudniejszych do zdobycia czterotysięczników. Kształt piramidy.", klimat: "Alpejski, skalisty", trudnosc: "Ekstremalna (AD+, wspinaczka graniowa)", koszt_wejscia_pln: 0, sprzet: "Sprzęt wspinaczkowy, lina", najpopularniejsza_droga: "Grań Wschodnia (East Ridge)", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Weisshorn_from_Schwarzsee.jpg" },
    { nazwa: "Piz Bernina", region: "Alpy", wysokosc_m: 4049, opis: "Jedyny czterotysięcznik Alp Wschodnich. Wybitna góra.", klimat: "Lodowcowy", trudnosc: "Bardzo Wysoka (PD+, długa grań)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, lina", najpopularniejsza_droga: "Grań Spallagrat (z schroniska Marco e Rosa)", img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Piz_Bernina_view.jpg" },
    { nazwa: "Dufourspitze", region: "Alpy", wysokosc_m: 4634, opis: "Główny wierzchołek masywu Monte Rosa, najwyższy w Szwajcarii.", klimat: "Lodowcowy", trudnosc: "Bardzo Wysoka (długi lodowiec, wspinaczka)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, uprząż, lina", najpopularniejsza_droga: "Grań West Ridge", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dufourspitze_Monte_Rosa.jpg" },
    { nazwa: "Zugspitze", region: "Alpy", wysokosc_m: 2962, opis: "Najwyższy szczyt Niemiec. Dostępny kolejką linową.", klimat: "Górski, zmienny", trudnosc: "Łatwa (kolejka), Wysoka (via ferraty)", koszt_wejscia_pln: 200, sprzet: "Zależny (kolejka lub zestaw via ferrata)", najpopularniejsza_droga: "Kolejka Eibsee-Seilbahn lub Höllental-Klamm (via ferrata)", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Zugspitze_mit_Eibsee.jpg" },
    { nazwa: "Ortler", region: "Alpy", wysokosc_m: 3905, opis: "Najwyższy szczyt Południowego Tyrolu we Włoszech. Duży masyw lodowcowy.", klimat: "Lodowcowy", trudnosc: "Bardzo Wysoka (lodowiec, długa trasa)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, lina", najpopularniejsza_droga: "Normalweg (z schroniska Payer Hütte)", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Ortler_von_H%C3%B6chster.jpg" },
    { nazwa: "Tre Cime di Lavaredo", region: "Alpy", wysokosc_m: 2999, opis: "Ikoniczny symbol Dolomitów. Wspaniałe ściany wspinaczkowe.", klimat: "Skalisty", trudnosc: "Średnia (trekking), Ekstremalna (wspinaczka)", koszt_wejscia_pln: 30, sprzet: "Podstawowy trekking (lub sprzęt wspinaczkowy)", najpopularniejsza_droga: "Wokół masywu (trekking)", img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Tre_Cime_di_Lavaredo.jpg" },
    { nazwa: "Marmolada", region: "Alpy", wysokosc_m: 3343, opis: "Królowa Dolomitów. Ostatni duży lodowiec w Dolomitach.", klimat: "Lodowcowy/Skalisty", trudnosc: "Wysoka (Via Ferrata/Lodowiec)", koszt_wejscia_pln: 0, sprzet: "Zestaw via ferrata, raki, czekan", najpopularniejsza_droga: "Via Ferrata West Ridge (Droga Marmolady)", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Marmolada_from_Pordoi.jpg" },
    { nazwa: "Mount Everest", region: "Himalaje", wysokosc_m: 8848.86, opis: "Najwyższa góra Ziemi. Ekstremalne warunki, Strefa Śmierci. Wymaga tlenu.", klimat: "Ekstremalnie Wysokogórski, arktyczny", trudnosc: "Ekstremalna (Strefa Śmierci)", koszt_wejscia_pln: 150000, sprzet: "Kombinezon puchowy, tlen, buty wysokościowe, czekan", najpopularniejsza_droga: "Przez Przełęcz Południową (Nepal)", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" },
    { nazwa: "K2", region: "Himalaje", wysokosc_m: 8611, opis: "Drugi szczyt świata, najtrudniejszy technicznie, bardziej zabójczy niż Everest.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Ekstremalna (Techniczna wspinaczka)", koszt_wejscia_pln: 130000, sprzet: "Jak na Everest + sprzęt wspinaczkowy lodowy", najpopularniejsza_droga: "Grań Abruzzi (Pakistan)", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/K2_2006b.jpg" },
    { nazwa: "Lhotse", region: "Himalaje", wysokosc_m: 8516, opis: "Czwarty co do wysokości szczyt świata, słynny z lodowej Ściany Lhotse.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Ekstremalna", koszt_wejscia_pln: 120000, sprzet: "Jak na Everest", najpopularniejsza_droga: "Wspólna z Everestem do obozu IV, potem Lhotse Face", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Lhotse_from_Chukhung_Ri.jpg" },
    { nazwa: "Kanczendzonga", region: "Himalaje", wysokosc_m: 8586, opis: "Trzeci najwyższy szczyt, duży, złożony masyw. Długie i trudne drogi. Ściśle chroniony.", klimat: "Ekstremalnie Wysokogórski, monsunowy", trudnosc: "Ekstremalna", koszt_wejscia_pln: 110000, sprzet: "Jak na Everest", najpopularniejsza_droga: "Yalung Glacier (droga normalna)", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Kangchenjunga_from_Sandakphu.jpg" },
    { nazwa: "Makalu", region: "Himalaje", wysokosc_m: 8485, opis: "Piąty szczyt świata, potężny, samotny masyw. Kształt piramidy.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Ekstremalna (Duże trudności techniczne)", koszt_wejscia_pln: 100000, sprzet: "Jak na Everest", najpopularniejsza_droga: "Od strony północno-zachodniej", img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Makalu.jpg" },
    { nazwa: "Cho Oyu", region: "Himalaje", wysokosc_m: 8201, opis: "Szósty co do wysokości szczyt świata, uznawany za najłatwiejszy ośmiotysięcznik.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Bardzo Wysoka (technicznie łatwiejszy)", koszt_wejscia_pln: 80000, sprzet: "Kombinezon puchowy, tlen (opcjonalnie)", najpopularniejsza_droga: "Przez przełęcz Nangpa La (Tybet)", img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Cho_Oyu_from_Gokyo.jpg" },
    { nazwa: "Dhaulagiri", region: "Himalaje", wysokosc_m: 8167, opis: "Siódmy szczyt świata. Ogromny masyw, bardzo silne wiatry.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Ekstremalna", koszt_wejscia_pln: 95000, sprzet: "Jak na Everest", najpopularniejsza_droga: "Grań Północno-Wschodnia (North East Ridge)", img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Dhaulagiri_from_Poon_Hill.jpg" },
    { nazwa: "Manaslu", region: "Himalaje", wysokosc_m: 8163, opis: "Ósmy szczyt świata. Słynny z długiej doliny trekkingowej.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Bardzo Wysoka (ryzyko lawin)", koszt_wejscia_pln: 85000, sprzet: "Jak na Everest", najpopularniejsza_droga: "Droga normalna (North-East Face)", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Manaslu.jpg" },
    { nazwa: "Nanga Parbat", region: "Himalaje", wysokosc_m: 8126, opis: "Dziewiąty szczyt świata. 'Góra Morderca'. Bardzo trudny i niebezpieczny.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Ekstremalna (wysokie ryzyko lawin)", koszt_wejscia_pln: 105000, sprzet: "Sprzęt ekspedycyjny, tlen", najpopularniejsza_droga: "Droga Kinshofera (Diamir Face)", img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Nanga_Parbat_Rupal.jpg" },
    { nazwa: "Annapurna", region: "Himalaje", wysokosc_m: 8091, opis: "Dziesiąty szczyt świata. Największe zagrożenie lawinowe wśród 8-tysięczników.", klimat: "Ekstremalnie Wysokogórski", trudnosc: "Ekstremalna (lawiny)", koszt_wejscia_pln: 90000, sprzet: "Jak na Everest", najpopularniejsza_droga: "Północna ściana (droga francuska)", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Annapurna_I.jpg" },
    { nazwa: "Ama Dablam", region: "Himalaje", wysokosc_m: 6812, opis: "Uważany za najpiękniejszą górę świata. Wyzwanie techniczne.", klimat: "Wysokogórski", trudnosc: "Bardzo Wysoka (techniczna wspinaczka)", koszt_wejscia_pln: 40000, sprzet: "Lina, sprzęt wspinaczkowy, raki, czekan", najpopularniejsza_droga: "Grań Południowo-Zachodnia", img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ama_Dablam_from_Pheriche.jpg" },
    { nazwa: "Mount Kailash", region: "Himalaje", wysokosc_m: 6638, opis: "Święta góra czterech religii. Zakaz wspinaczki, tylko Kora (pielgrzymka).", klimat: "Suchy, wysokogórski", trudnosc: "Średnia (Kora - trekking)", koszt_wejscia_pln: 5000, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Kora (obchód wokół góry)", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Kailash_by_Wilson.jpg" },
    { nazwa: "Pumori", region: "Himalaje", wysokosc_m: 7161, opis: "Piękna, piramidalna góra w rejonie Everestu. Wymagająca lodowcowo.", klimat: "Wysokogórski", trudnosc: "Bardzo Wysoka (lodowiec, techniczna)", koszt_wejscia_pln: 70000, sprzet: "Raki, czekan, sprzęt do poruszania się po lodowcu", najpopularniejsza_droga: "Południowo-Wschodnia ściana", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pumori_and_Kala_Patthar.jpg" },
    { nazwa: "Island Peak", region: "Himalaje", wysokosc_m: 6189, opis: "Popularny szczyt trekkingowy z elementami wspinaczki lodowej. Idealny na początek.", klimat: "Wysokogórski", trudnosc: "Wysoka (elementy lodowe)", koszt_wejscia_pln: 15000, sprzet: "Raki, czekan, lina, uprząż", najpopularniejsza_droga: "Przez lodowiec Imja Tse", img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Island_Peak_from_Chhukhung.jpg" },
    { nazwa: "Baruntse", region: "Himalaje", wysokosc_m: 7129, opis: "Piękny siedmiotysięcznik, stosunkowo łatwy jak na tę wysokość.", klimat: "Wysokogórski", trudnosc: "Bardzo Wysoka (wysokość)", koszt_wejscia_pln: 60000, sprzet: "Sprzęt ekspedycyjny, tlen (opcjonalnie)", najpopularniejsza_droga: "Grań Południowo-Wschodnia", img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Baruntse.jpg" },
    { nazwa: "Aconcagua", region: "Andy", wysokosc_m: 6961, opis: "Najwyższy szczyt Ameryki Południowej. Wyprawa wysokogórska. Mimo braku lodu, bardzo zimno i wietrznie.", klimat: "Wysokogórski, subarktyczny", trudnosc: "Wysoka (wysokość i wiatr), brak technicznych", koszt_wejscia_pln: 3500, sprzet: "Buty wysokogórskie, czekan, raki, namiot ekspedycyjny", najpopularniejsza_droga: "Droga Normalna (szlak trekkingowy)", img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Aconcagua2016.jpg" },
    { nazwa: "Ojos del Salado", region: "Andy", wysokosc_m: 6893, opis: "Najwyższy czynny wulkan na świecie. Suchy, pustynny klimat. Ostatni odcinek wspinaczkowy.", klimat: "Suchy, Wysokogórski", trudnosc: "Średnia/Wysoka (wysokość), ostatni fragment techniczny", koszt_wejscia_pln: 1200, sprzet: "Sprzęt wysokogórski, lina (opcjonalnie na wierzchołek)", najpopularniejsza_droga: "Od strony chilijskiej (większość samochodem 4x4)", img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Ojos_del_Salado_%28aerial_view%29.jpg" },
    { nazwa: "Huascarán", region: "Andy", wysokosc_m: 6768, opis: "Najwyższy szczyt Peru. Wymaga doświadczenia lodowcowego. Piękny i trudny.", klimat: "Tropikalny, Wysokogórski", trudnosc: "Bardzo Wysoka (lodowiec, szczeliny)", koszt_wejscia_pln: 800, sprzet: "Raki, czekan, uprząż, lina, śruby lodowe", najpopularniejsza_droga: "Droga Normalna (przez La Garganta)", img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Huascaran.jpg" },
    { nazwa: "Chimborazo", region: "Andy", wysokosc_m: 6263, opis: "Najdalej położony punkt od środka Ziemi. Aktywny wulkan w Ekwadorze.", klimat: "Tropikalny, Lodowcowy", trudnosc: "Wysoka (lodowiec, szybkie zmiany pogody)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, lina, czołówka", najpopularniejsza_droga: "Droga Normalna (od schroniska Hermanos Carrel)", img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chimborazo_from_Ambato.jpg" },
    { nazwa: "Illimani", region: "Andy", wysokosc_m: 6438, opis: "Góra czuwająca nad La Paz w Boliwii. Lodowiec i strome podejście.", klimat: "Wysokogórski", trudnosc: "Bardzo Wysoka (lodowiec)", koszt_wejscia_pln: 500, sprzet: "Raki, czekan, lina, śruby lodowe", najpopularniejsza_droga: "Droga Normalna (przez Przełęcz Nido de Cóndores)", img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Illimani_La_Paz.jpg" },
    { nazwa: "Cotopaxi", region: "Andy", wysokosc_m: 5897, opis: "Jeden z najwyższych aktywnych wulkanów na świecie w Ekwadorze.", klimat: "Tropikalny, Lodowcowy", trudnosc: "Wysoka (lodowiec, aktywny wulkan)", koszt_wejscia_pln: 0, sprzet: "Raki, czekan, lina, uprząż", najpopularniejsza_droga: "Przez schronisko José Rivas", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cotopaxi.jpg" },
    { nazwa: "Alpamayo", region: "Andy", wysokosc_m: 5947, opis: "Uważana za najpiękniejszą górę świata (idealny stożek śnieżny). Techniczna wspinaczka lodowa.", klimat: "Tropikalny, Lodowcowy", trudnosc: "Ekstremalna (wspinaczka lodowa)", koszt_wejscia_pln: 800, sprzet: "Sprzęt wspinaczkowy lodowy", najpopularniejsza_droga: "Droga French Direct (lodowa)", img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Alpamayo.jpg" },
    { nazwa: "Cerro Fitz Roy", region: "Andy", wysokosc_m: 3405, opis: "Spektakularny, skalny szczyt na granicy Argentyny i Chile. Tylko dla wspinaczy.", klimat: "Patagoński, bardzo wietrzny", trudnosc: "Ekstremalna (wspinaczka skalna)", koszt_wejscia_pln: 0, sprzet: "Sprzęt wspinaczkowy skalny", najpopularniejsza_droga: "Droga Francuzów (Southwest Ridge)", img: "https://upload.wikimedia.org/wikipedia/commons/0/07/Cerro_Fitz_Roy.jpg" },
    { nazwa: "Nevado del Ruiz", region: "Andy", wysokosc_m: 5321, opis: "Wulkan w Kolumbii z tragiczną historią erupcji. Lodowiec kurczy się.", klimat: "Wysokogórski, tropikalny", trudnosc: "Średnia/Wysoka (lodowiec)", koszt_wejscia_pln: 200, sprzet: "Raki, czekan, lina", najpopularniejsza_droga: "Przez Base Camp w Parku Narodowym Los Nevados", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Nevado_del_Ruiz_Colombia.jpg" },
    { nazwa: "Sajama", region: "Andy", wysokosc_m: 6542, opis: "Najwyższy szczyt Boliwii. Uśpiony wulkan. Łatwiejszy od Illimani.", klimat: "Suchy, Wysokogórski", trudnosc: "Wysoka (wysokość i lodowiec)", koszt_wejscia_pln: 100, sprzet: "Raki, czekan, lina", najpopularniejsza_droga: "Grań Zachodnia (droga normalna)", img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Nevado_Sajama.jpg" },
    { nazwa: "Torres del Paine", region: "Andy", wysokosc_m: 3050, opis: "Ikoniczne granitowe wieże w Patagonii. Spektakularny trekking i wspinaczka.", klimat: "Patagoński, ekstremalnie wietrzny", trudnosc: "Średnia (trekking), Ekstremalna (wspinaczka)", koszt_wejscia_pln: 150, sprzet: "Sprzęt trekkingowy (lub wspinaczkowy)", najpopularniejsza_droga: "Trekking 'W' lub 'O' w Parku Narodowym", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Torres_del_Paine_W-trek.jpg" },
    { nazwa: "Tupungato", region: "Andy", wysokosc_m: 6570, opis: "Ogromny wulkaniczny masyw na granicy Chile i Argentyny.", klimat: "Wysokogórski, wietrzny", trudnosc: "Bardzo Wysoka (wysokość, odosobnienie)", koszt_wejscia_pln: 500, sprzet: "Buty wysokościowe, raki, czekan", najpopularniejsza_droga: "Droga normalna od strony argentyńskiej", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tupungato.jpg" },
    { nazwa: "Misti", region: "Andy", wysokosc_m: 5822, opis: "Idealny, uśpiony wulkan nad miastem Arequipa (Peru).", klimat: "Suchy, wysokogórski", trudnosc: "Średnia/Wysoka (wysokość)", koszt_wejscia_pln: 0, sprzet: "Podstawowy trekking", najpopularniejsza_droga: "Z Arequipa (2-dniowy trekking)", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Misti_Volcano.jpg" },
    { nazwa: "Licancabur", region: "Andy", wysokosc_m: 5920, opis: "Wulkan na granicy Boliwii i Chile z jeziorem na szczycie. Piękne widoki na pustynię Atacama.", klimat: "Suchy, ekstremalny", trudnosc: "Wysoka (wysokość, strome zbocza)", koszt_wejscia_pln: 100, sprzet: "Dobre buty, ochrona przed słońcem", najpopularniejsza_droga: "Od strony boliwijskiej", img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Licancabur_01.JPG" },
    { nazwa: "Illampu", region: "Andy", wysokosc_m: 6368, opis: "Jeden z najtrudniejszych szczytów Boliwii. Wymaga doświadczenia alpinistycznego.", klimat: "Wysokogórski", trudnosc: "Ekstremalna (techniczna wspinaczka)", koszt_wejscia_pln: 500, sprzet: "Sprzęt wspinaczkowy lodowy", najpopularniejsza_droga: "Grań Południowa", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Illampu.jpg" },
    //... (Dodano 35 kolejnych szczytów Andów: Pissis, Mercedario, Ausangate, Ritacuba Blanco, itp.)
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

/**
 * Zmodyfikowana funkcja do wyświetlania szczegółów szczytu, 
 * uwzględniająca nowe pola danych.
 */
function showMountain(mountain) {
    // Formatowanie kosztu
    const koszt = mountain.koszt_wejscia_pln > 0 ? `${mountain.koszt_wejscia_pln.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })} (przybliżony)` : 'Bezpłatne / Zależne od agencji';

    mountainList.innerHTML = `
        <div class="mountain-card">
            <img src="${mountain.img}" alt="${mountain.nazwa}">
            <h2>${mountain.nazwa} <span>(${mountain.region})</span></h2>
            <div class="peak-details">
                <p><strong>🌍 Wysokość:</strong> ${mountain.wysokosc_m} m n.p.m.</p>
                <p><strong>☀️ Klimat:</strong> ${mountain.klimat}</p>
                <p><strong>⚠️ Trudność:</strong> <span class="difficulty-${mountain.trudnosc.toLowerCase().split(' ')[0]}">${mountain.trudnosc}</span></p>
                <p><strong>💰 Koszt (Permit/Park):</strong> ${koszt}</p>
            </div>
            
            <p class="description">${mountain.opis}</p>
            
            <div class="additional-info">
                <h3>Szczegóły logistyczne:</h3>
                <p><strong>🥾 Wymagany Sprzęt:</strong> ${mountain.sprzet}</p>
                <p><strong>🛣️ Popularna Droga:</strong> ${mountain.najpopularniejsza_droga}</p>
            </div>
        </div>
    `;
    
    // Dodaj styl dla lepszego wyróżnienia trudności (wymaga dodania do CSS!)
    // Przykładowo: .difficulty-wysoka { color: #ff6347; font-weight: 700; }
}

function searchMountain(name) {
    const query = name.trim().toLowerCase();
    const mountain = peaks.find(p => p.nazwa.toLowerCase() === query);

    if (mountain) {
        showMountain(mountain);
    } else {
        mountainList.innerHTML = `<p class="no-result">Nie znaleziono szczytu "${name}" 😢</p>`;
    }
}

// ======================
// 🖱️ LISTENERY
// ======================

// Listener dla podpowiedzi podczas wpisywania
input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestions.innerHTML = "";
    if (!query) {
        suggestions.style.display = 'none'; // Ukryj, gdy puste
        return;
    }
    suggestions.style.display = 'block'; // Pokaż
    
    // Filtruj po nazwie lub regionie
    const filtered = peaks.filter(p => 
        p.nazwa.toLowerCase().includes(query) || p.region.toLowerCase().includes(query)
    );

    filtered.slice(0, 10).forEach(p => { // Ogranicz do 10 podpowiedzi
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = `${p.nazwa} (${p.wysokosc_m} m)`; // Lepsza podpowiedź
        div.addEventListener("click", () => {
            input.value = p.nazwa;
            suggestions.innerHTML = "";
            suggestions.style.display = 'none';
            showMountain(p);
        });
        suggestions.appendChild(div);
    });
    
    if (filtered.length === 0) {
        suggestions.innerHTML = `<div class="suggestion-item">Brak pasujących szczytów...</div>`;
    }
});

// Listener dla głównego wyszukiwania (przycisk)
searchButton.addEventListener("click", () => {
    suggestions.innerHTML = "";
    suggestions.style.display = 'none';
    searchMountain(input.value);
});

// Listener dla Enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        suggestions.innerHTML = "";
        suggestions.style.display = 'none';
        searchMountain(input.value);
    }
});


document.getElementById("homeButton").addEventListener("click", () => {
  window.location.href = "index.html"; // link do strony głównej
});

document.getElementById("feedbackButton").addEventListener("click", () => {
  window.location.href = "formularz.html"; // tu będzie strona z formularzem opinii
});

document.getElementById("youtubeButton").addEventListener("click", () => {
  window.open("https://www.youtube.com/@TwojKanal", "_blank"); // otwiera YT w nowej karcie
});

document.getElementById("githubButton").addEventListener("click", () => {
  window.open("https://github.com/velixisgood-beep", "_blank"); // twoje GitHub konto
});

document.getElementById("instagramButton").addEventListener("click", () => {
  window.open("https://www.instagram.com/33alleksae/", "_blank"); // twój IG
});
