(function () {
    'use strict';

    var LANGS = [
        ['bg', 'Български'], ['hr', 'Hrvatski'], ['cs', 'Čeština'],
        ['da', 'Dansk'], ['nl', 'Nederlands'], ['en', 'English'],
        ['et', 'Eesti'], ['fi', 'Suomi'], ['fr', 'Français'],
        ['de', 'Deutsch'], ['el', 'Ελληνικά'], ['hu', 'Magyar'],
        ['ga', 'Gaeilge'], ['it', 'Italiano'], ['lv', 'Latviešu'],
        ['lt', 'Lietuvių'], ['mt', 'Malti'], ['pl', 'Polski'],
        ['pt', 'Português'], ['ro', 'Română'], ['sk', 'Slovenčina'],
        ['sl', 'Slovenščina'], ['es', 'Español'], ['sv', 'Svenska']
    ];

    var VALID = {};
    for (var k = 0; k < LANGS.length; k++) VALID[LANGS[k][0]] = true;

    var T = {
        'title.about': {
            en: 'About GlyphClock',
            bg: 'За GlyphClock',
            hr: 'O GlyphClock',
            cs: 'O GlyphClock',
            da: 'Om GlyphClock',
            nl: 'Over GlyphClock',
            et: 'GlyphClock\u2019ist',
            fi: 'Tietoa GlyphClock',
            fr: 'À propos de GlyphClock',
            de: 'Über GlyphClock',
            el: 'Σχετικά με GlyphClock',
            hu: 'A GlyphClock-ról',
            ga: 'Maidir le GlyphClock',
            it: 'Informazioni su GlyphClock',
            lv: 'Par GlyphClock',
            lt: 'Apie GlyphClock',
            mt: 'Dwar GlyphClock',
            pl: 'O GlyphClock',
            pt: 'Sobre o GlyphClock',
            ro: 'Despre GlyphClock',
            sk: 'O GlyphClock',
            sl: 'O GlyphClock',
            es: 'Acerca de GlyphClock',
            sv: 'Om GlyphClock'
        },
        'index.intro': {
            en: 'About <a href="about.html">GlyphClock</a>.',
            bg: 'Относно <a href="about.html">GlyphClock</a>.',
            hr: 'O <a href="about.html">GlyphClock</a>.',
            cs: 'O <a href="about.html">GlyphClock</a>.',
            da: 'Om <a href="about.html">GlyphClock</a>.',
            nl: 'Over <a href="about.html">GlyphClock</a>.',
            et: '<a href="about.html">GlyphClock</a>\u2019i kohta.',
            fi: 'Tietoa <a href="about.html">GlyphClock</a>ista.',
            fr: 'À propos de <a href="about.html">GlyphClock</a>.',
            de: 'Über <a href="about.html">GlyphClock</a>.',
            el: 'Σχετικά με το <a href="about.html">GlyphClock</a>.',
            hu: 'A <a href="about.html">GlyphClock</a>ról.',
            ga: 'Faoi <a href="about.html">GlyphClock</a>.',
            it: 'Informazioni su <a href="about.html">GlyphClock</a>.',
            lv: 'Par <a href="about.html">GlyphClock</a>.',
            lt: 'Apie <a href="about.html">GlyphClock</a>.',
            mt: 'Dwar <a href="about.html">GlyphClock</a>.',
            pl: 'O <a href="about.html">GlyphClock</a>.',
            pt: 'Sobre o <a href="about.html">GlyphClock</a>.',
            ro: 'Despre <a href="about.html">GlyphClock</a>.',
            sk: 'O <a href="about.html">GlyphClock</a>.',
            sl: 'O <a href="about.html">GlyphClock</a>.',
            es: 'Acerca de <a href="about.html">GlyphClock</a>.',
            sv: 'Om <a href="about.html">GlyphClock</a>.'
        },
        'about.desc': {
            en: 'GlyphClock is a timezone and language free time system. The 24-hour day is divided into 16 blocks of 90 minutes, each block with a unique emoji. Each 90 minute period has 3 sub-periods of 30 minutes, shown by displaying one, two, or three copies of the glyph.',
            bg: 'GlyphClock е система за време, свободна от часови зони и език. 24-часовият ден е разделен на 16 блока от по 90 минути, всеки блок с уникално емоджи. Всеки 90-минутен период има 3 подпериода от 30 минути, показани чрез една, две или три копия на символа.',
            hr: 'GlyphClock je vremenski sustav slobodan od vremenskih zona i jezika. Dan od 24 sata podijeljen je u 16 blokova od 90 minuta, svaki blok s jedinstvenim emojijem. Svako 90-minutno razdoblje ima 3 podrazdoblja od 30 minuta, prikazana jednom, dvjema ili trima kopijama simbola.',
            cs: 'GlyphClock je časový systém bez časových pásem a jazyka. 24hodinový den je rozdělen na 16 bloků po 90 minutách, každý blok s jedinečným emoji. Každé 90minutové období má 3 podobdobí po 30 minutách, zobrazená jednou, dvěma nebo třemi kopiemi symbolu.',
            da: 'GlyphClock er et tidssystem frit for tidszoner og sprog. Døgnet er opdelt i 16 blokke à 90 minutter, hver blok med en unik emoji. Hver 90-minutters periode har 3 underperioder à 30 minutter, vist ved at vise én, to eller tre kopier af symbolet.',
            nl: 'GlyphClock is een tijdsysteem vrij van tijdzones en taal. De dag van 24 uur is verdeeld in 16 blokken van 90 minuten, elk blok met een unieke emoji. Elke periode van 90 minuten heeft 3 subperioden van 30 minuten, weergegeven door één, twee of drie kopieën van het symbool.',
            et: 'GlyphClock on ajavöönditest ja keelest vaba ajasüsteem. 24-tunnine päev on jagatud 16 plokiks, igaüks 90 minutit, iga plokk unikaalse emojiga. Igal 90-minutilisel perioodil on 3 alamperioodi à 30 minutit, mida kuvatakse ühe, kahe või kolme sümboli koopiaga.',
            fi: 'GlyphClock on aikavyöhykkeistä ja kielestä vapaa aikajärjestelmä. 24 tunnin vuorokausi on jaettu 16 lohkoon à 90 minuuttia, jokaisella lohkolla oma uniikki emoji. Jokaisella 90 minuutin jaksolla on 3 alajaksoa à 30 minuuttia, jotka esitetään näyttämällä yksi, kaksi tai kolme kopiota symbolista.',
            fr: 'GlyphClock est un système horaire libre de fuseaux horaires et de langue. La journée de 24 heures est divisée en 16 blocs de 90 minutes, chaque bloc avec un emoji unique. Chaque période de 90 minutes comporte 3 sous-périodes de 30 minutes, représentées par une, deux ou trois copies du glyphe.',
            de: 'GlyphClock ist ein zeitzonen- und sprachfreies Zeitsystem. Der 24-Stunden-Tag ist in 16 Blöcke zu je 90 Minuten unterteilt, jeder Block mit einem einzigartigen Emoji. Jede 90-Minuten-Periode hat 3 Unterperioden zu 30 Minuten, dargestellt durch eine, zwei oder drei Kopien des Symbols.',
            el: 'Το GlyphClock είναι ένα σύστημα χρόνου ελεύθερο από ζώνες ώρας και γλώσσα. Η ημέρα των 24 ωρών χωρίζεται σε 16 μπλοκ των 90 λεπτών, κάθε μπλοκ με ένα μοναδικό emoji. Κάθε περίοδος 90 λεπτών έχει 3 υποπεριόδους των 30 λεπτών, που εμφανίζονται με ένα, δύο ή τρία αντίγραφα του συμβόλου.',
            hu: 'A GlyphClock egy időzónáktól és nyelvtől mentes időrendszer. A 24 órás nap 16 blokkra van osztva, mindegyik 90 perces, egyedi emojival. Minden 90 perces időszaknak 3 alperiódusa van, egyenként 30 perc, amelyek a szimbólum egy, két vagy három példányával jelennek meg.',
            ga: 'Is córas ama saor ó chriosanna ama agus ó theanga é GlyphClock. Tá an lá 24 uair an chloig roinnte ina 16 bhloc 90 nóiméad, gach bloc le emoji uathúil. Tá 3 fho-thréimhse 30 nóiméad ag gach tréimhse 90 nóiméad, léirithe trí chóip amháin, dhá chóip nó trí chóip den ghliof a thaispeáint.',
            it: 'GlyphClock è un sistema orario libero da fusi orari e lingua. La giornata di 24 ore è divisa in 16 blocchi da 90 minuti, ogni blocco con un emoji unico. Ogni periodo di 90 minuti ha 3 sottoperiodi da 30 minuti, mostrati con una, due o tre copie del glifo.',
            lv: 'GlyphClock ir laika sistēma, brīva no laika joslām un valodas. 24 stundu diena ir sadalīta 16 blokos pa 90 minūtēm, katrs bloks ar unikālu emoji. Katram 90 minūšu periodam ir 3 apakšperiodi pa 30 minūtēm, attēloti ar vienu, divām vai trim simbola kopijām.',
            lt: 'GlyphClock yra laiko sistema, laisva nuo laiko juostų ir kalbos. 24 valandų diena suskirstyta į 16 blokų po 90 minučių, kiekvienas blokas su unikaliu emoji. Kiekvienas 90 minučių periodas turi 3 subperiodus po 30 minučių, rodomus viena, dviem arba trim simbolio kopijomis.',
            mt: 'GlyphClock huwa sistema ta\' ħin ħielsa miż-żoni tal-ħin u l-lingwa. Il-ġurnata ta\' 24 siegħa hija maqsuma fi 16-il blokka ta\' 90 minuta, kull blokka b\'emoji unika. Kull perjodu ta\' 90 minuta għandu 3 sotto-perjodi ta\' 30 minuta, murija billi jintwera kopja waħda, tnejn jew tlieta tas-simbolu.',
            pl: 'GlyphClock to system czasu wolny od stref czasowych i języka. Dzień 24-godzinny jest podzielony na 16 bloków po 90 minut, każdy blok z unikalnym emoji. Każdy 90-minutowy okres ma 3 podokresy po 30 minut, przedstawiane przez wyświetlanie jednej, dwóch lub trzech kopii symbolu.',
            pt: 'GlyphClock é um sistema de tempo livre de fusos horários e língua. O dia de 24 horas é dividido em 16 blocos de 90 minutos, cada bloco com um emoji único. Cada período de 90 minutos tem 3 subperíodos de 30 minutos, mostrados exibindo uma, duas ou três cópias do glifo.',
            ro: 'GlyphClock este un sistem de timp liber de fusuri orare și limbă. Ziua de 24 de ore este împărțită în 16 blocuri de 90 de minute, fiecare bloc cu un emoji unic. Fiecare perioadă de 90 de minute are 3 subperioade de 30 de minute, afișate prin una, două sau trei copii ale simbolului.',
            sk: 'GlyphClock je časový systém bez časových pásiem a jazyka. 24-hodinový deň je rozdelený na 16 blokov po 90 minútach, každý blok s jedinečným emoji. Každé 90-minútové obdobie má 3 podobdobia po 30 minútach, zobrazené jednou, dvoma alebo tromi kópiami symbolu.',
            sl: 'GlyphClock je časovni sistem, osvobojen časovnih pasov in jezika. 24-urni dan je razdeljen na 16 blokov po 90 minut, vsak blok z edinstvenim emojijem. Vsako 90-minutno obdobje ima 3 podobdobja po 30 minut, prikazana z eno, dvema ali tremi kopijami simbola.',
            es: 'GlyphClock es un sistema de tiempo libre de zonas horarias e idioma. El día de 24 horas se divide en 16 bloques de 90 minutos, cada bloque con un emoji único. Cada período de 90 minutos tiene 3 subperíodos de 30 minutos, mostrados con una, dos o tres copias del glifo.',
            sv: 'GlyphClock är ett tidssystem fritt från tidszoner och språk. Dygnet är uppdelat i 16 block om 90 minuter, varje block med en unik emoji. Varje 90-minutersperiod har 3 underperioder om 30 minuter, visade genom att visa en, två eller tre kopior av symbolen.'
        },
        'about.creator': {
            en: 'Created by <a href="https://bang-labs.eu">Bang Labs</a>.',
            bg: 'Създадено от <a href="https://bang-labs.eu">Bang Labs</a>.',
            hr: 'Izradio <a href="https://bang-labs.eu">Bang Labs</a>.',
            cs: 'Vytvořil <a href="https://bang-labs.eu">Bang Labs</a>.',
            da: 'Skabt af <a href="https://bang-labs.eu">Bang Labs</a>.',
            nl: 'Gemaakt door <a href="https://bang-labs.eu">Bang Labs</a>.',
            et: 'Loonud <a href="https://bang-labs.eu">Bang Labs</a>.',
            fi: 'Luonut <a href="https://bang-labs.eu">Bang Labs</a>.',
            fr: 'Créé par <a href="https://bang-labs.eu">Bang Labs</a>.',
            de: 'Erstellt von <a href="https://bang-labs.eu">Bang Labs</a>.',
            el: 'Δημιουργήθηκε από <a href="https://bang-labs.eu">Bang Labs</a>.',
            hu: 'Készítette a <a href="https://bang-labs.eu">Bang Labs</a>.',
            ga: 'Cruthaithe ag <a href="https://bang-labs.eu">Bang Labs</a>.',
            it: 'Creato da <a href="https://bang-labs.eu">Bang Labs</a>.',
            lv: 'Izveidoja <a href="https://bang-labs.eu">Bang Labs</a>.',
            lt: 'Sukūrė <a href="https://bang-labs.eu">Bang Labs</a>.',
            mt: 'Maħluq minn <a href="https://bang-labs.eu">Bang Labs</a>.',
            pl: 'Stworzone przez <a href="https://bang-labs.eu">Bang Labs</a>.',
            pt: 'Criado por <a href="https://bang-labs.eu">Bang Labs</a>.',
            ro: 'Creat de <a href="https://bang-labs.eu">Bang Labs</a>.',
            sk: 'Vytvoril <a href="https://bang-labs.eu">Bang Labs</a>.',
            sl: 'Ustvaril <a href="https://bang-labs.eu">Bang Labs</a>.',
            es: 'Creado por <a href="https://bang-labs.eu">Bang Labs</a>.',
            sv: 'Skapat av <a href="https://bang-labs.eu">Bang Labs</a>.'
        },
        'meta.description.index': {
            en: 'A timezone-free time system dividing the day into 16 symbolic blocks.',
            bg: 'Система за време без часови зони, разделяща деня на 16 символни блока.',
            hr: 'Sustav vremena bez vremenskih zona koji dijeli dan na 16 simboličnih blokova.',
            cs: 'Systém času bez časových pásem rozdělující den na 16 symbolických bloků.',
            da: 'Et tidszonefrit tidssystem der opdeler døgnet i 16 symbolske blokke.',
            nl: 'Een tijdzonevrij tijdsysteem dat de dag verdeelt in 16 symbolische blokken.',
            et: 'Ajavöönditeta ajasüsteem, mis jagab päeva 16 sümboolseks plokiks.',
            fi: 'Aikavyöhykkeetön aikajärjestelmä, joka jakaa vuorokauden 16 symboliseen lohkoon.',
            fr: 'Un système horaire sans fuseaux horaires divisant la journée en 16 blocs symboliques.',
            de: 'Ein zeitzonenfreies Zeitsystem, das den Tag in 16 symbolische Blöcke unterteilt.',
            el: 'Ένα σύστημα χρόνου χωρίς ζώνες ώρας που χωρίζει την ημέρα σε 16 συμβολικά μπλοκ.',
            hu: 'Időzóna-mentes időrendszer, amely a napot 16 szimbolikus blokkra osztja.',
            ga: 'Córas ama gan chriosanna ama a roinneann an lá ina 16 bhloc siombalach.',
            it: 'Un sistema orario senza fusi orari che divide la giornata in 16 blocchi simbolici.',
            lv: 'Laika sistēma bez laika joslām, kas sadala dienu 16 simboliskos blokos.',
            lt: 'Laiko sistema be laiko juostų, dalinanti dieną į 16 simbolinių blokų.',
            mt: 'Sistema ta\' ħin mingħajr żoni tal-ħin li taqsam il-ġurnata fi 16-il blokka simbolika.',
            pl: 'System czasu bez stref czasowych dzielący dzień na 16 symbolicznych bloków.',
            pt: 'Um sistema de tempo sem fusos horários que divide o dia em 16 blocos simbólicos.',
            ro: 'Un sistem de timp fără fusuri orare care împarte ziua în 16 blocuri simbolice.',
            sk: 'Systém času bez časových pásiem rozdeľujúci deň na 16 symbolických blokov.',
            sl: 'Časovni sistem brez časovnih pasov, ki deli dan na 16 simbolnih blokov.',
            es: 'Un sistema de tiempo sin zonas horarias que divide el día en 16 bloques simbólicos.',
            sv: 'Ett tidszonsfritt tidssystem som delar upp dygnet i 16 symboliska block.'
        },
        'meta.description.about': {
            en: 'Learn about GlyphClock, a timezone-free time system replacing conventional clocks with symbols.',
            bg: 'Научете за GlyphClock, система за време без часови зони, заменяща конвенционалните часовници със символи.',
            hr: 'Saznajte o GlyphClock, sustavu vremena bez vremenskih zona koji zamjenjuje konvencionalne satove simbolima.',
            cs: 'Zjistěte více o GlyphClock, systému času bez časových pásem nahrazujícím konvenční hodiny symboly.',
            da: 'Lær om GlyphClock, et tidszonefrit tidssystem der erstatter konventionelle ure med symboler.',
            nl: 'Leer over GlyphClock, een tijdzonevrij tijdsysteem dat conventionele klokken vervangt door symbolen.',
            et: 'Tutvu GlyphClock\'iga, ajavöönditeta ajasüsteemiga, mis asendab tavalised kellad sümbolitega.',
            fi: 'Tutustu GlyphClocken, aikavyöhykkeettömään aikajärjestelmään, joka korvaa perinteiset kellot symboleilla.',
            fr: 'Découvrez GlyphClock, un système horaire sans fuseaux horaires remplaçant les horloges conventionnelles par des symboles.',
            de: 'Erfahren Sie mehr über GlyphClock, ein zeitzonenfreies Zeitsystem, das herkömmliche Uhren durch Symbole ersetzt.',
            el: 'Μάθετε για το GlyphClock, ένα σύστημα χρόνου χωρίς ζώνες ώρας που αντικαθιστά τα συμβατικά ρολόγια με σύμβολα.',
            hu: 'Ismerje meg a GlyphClock-ot, egy időzóna-mentes időrendszert, amely szimbólumokkal váltja fel a hagyományos órákat.',
            ga: 'Foghlaim faoi GlyphClock, córas ama gan chriosanna ama a chuireann siombailí in ionad gnáthchloig.',
            it: 'Scopri GlyphClock, un sistema orario senza fusi orari che sostituisce gli orologi convenzionali con simboli.',
            lv: 'Uzziniet par GlyphClock, laika sistēmu bez laika joslām, kas aizstāj parastos pulksteņus ar simboliem.',
            lt: 'Sužinokite apie GlyphClock, laiko sistemą be laiko juostų, pakeičiančią įprastus laikrodžius simboliais.',
            mt: 'Tgħallem dwar GlyphClock, sistema ta\' ħin mingħajr żoni tal-ħin li tissostitwixxi l-arloġġi konvenzjonali b\'simboli.',
            pl: 'Poznaj GlyphClock, system czasu bez stref czasowych zastępujący konwencjonalne zegary symbolami.',
            pt: 'Conheça o GlyphClock, um sistema de tempo sem fusos horários que substitui relógios convencionais por símbolos.',
            ro: 'Află despre GlyphClock, un sistem de timp fără fusuri orare care înlocuiește ceasurile convenționale cu simboluri.',
            sk: 'Spoznajte GlyphClock, systém času bez časových pásiem nahrádzajúci konvenčné hodiny symbolmi.',
            sl: 'Spoznajte GlyphClock, časovni sistem brez časovnih pasov, ki nadomešča običajne ure s simboli.',
            es: 'Conoce GlyphClock, un sistema de tiempo sin zonas horarias que reemplaza los relojes convencionales con símbolos.',
            sv: 'Lär dig om GlyphClock, ett tidszonsfritt tidssystem som ersätter konventionella klockor med symboler.'
        },
        'meta.description.glyphclock': {
            en: 'See the current GlyphClock \u2014 a universal, timezone-free time shown as symbols.',
            bg: 'Вижте текущото GlyphClock \u2014 универсално време без часови зони, показано чрез символи.',
            hr: 'Pogledajte trenutno GlyphClock \u2014 univerzalno vrijeme bez vremenskih zona prikazano simbolima.',
            cs: 'Podívejte se na aktuální GlyphClock \u2014 univerzální čas bez časových pásem zobrazený jako symboly.',
            da: 'Se den aktuelle GlyphClock \u2014 en universel, tidszonefri tid vist som symboler.',
            nl: 'Bekijk de huidige GlyphClock \u2014 een universele, tijdzonevrije tijd weergegeven als symbolen.',
            et: 'Vaata praegust GlyphClock\'i \u2014 universaalne, ajavöönditeta aeg sümbolitena.',
            fi: 'Katso nykyinen GlyphClock \u2014 universaali, aikavyöhykkeetön aika symboleina.',
            fr: 'Voyez le GlyphClock actuel \u2014 un temps universel sans fuseaux horaires affiché sous forme de symboles.',
            de: 'Sieh die aktuelle GlyphClock \u2014 eine universelle, zeitzonenfreie Zeit als Symbole dargestellt.',
            el: 'Δείτε το τρέχον GlyphClock \u2014 ένας παγκόσμιος χρόνος χωρίς ζώνες ώρας με σύμβολα.',
            hu: 'Nézd meg az aktuális GlyphClock-ot \u2014 egy univerzális, időzóna-mentes idő szimbólumokkal.',
            ga: 'Féach ar an GlyphClock reatha \u2014 am uilíoch gan chriosanna ama le siombailí.',
            it: 'Guarda il GlyphClock attuale \u2014 un tempo universale senza fusi orari mostrato come simboli.',
            lv: 'Skatiet pašreizējo GlyphClock \u2014 universālu laiku bez laika joslām, attēlotu kā simbolus.',
            lt: 'Žiūrėkite dabartinį GlyphClock \u2014 universalų laiką be laiko juostų, rodomą simboliais.',
            mt: 'Ara l-GlyphClock attwali \u2014 ħin universali mingħajr żoni tal-ħin muri bħala simboli.',
            pl: 'Zobacz aktualny GlyphClock \u2014 uniwersalny czas bez stref czasowych pokazany jako symbole.',
            pt: 'Veja o GlyphClock atual \u2014 um tempo universal sem fusos horários mostrado como símbolos.',
            ro: 'Vezi GlyphClock-ul curent \u2014 un timp universal, fără fusuri orare, afișat ca simboluri.',
            sk: 'Pozrite si aktuálny GlyphClock \u2014 univerzálny čas bez časových pásiem zobrazený ako symboly.',
            sl: 'Oglejte si trenutni GlyphClock \u2014 univerzalni čas brez časovnih pasov, prikazan kot simboli.',
            es: 'Ve el GlyphClock actual \u2014 un tiempo universal sin zonas horarias mostrado como símbolos.',
            sv: 'Se den aktuella GlyphClock \u2014 en universell, tidszonsfri tid visad som symboler.'
        }
    };

    function detect() {
        try {
            var stored = localStorage.getItem('lang');
            if (stored && VALID[stored]) return stored;
        } catch (e) {}
        var candidates = navigator.languages || [navigator.language || 'en'];
        for (var i = 0; i < candidates.length; i++) {
            var code = candidates[i].split('-')[0].toLowerCase();
            if (VALID[code]) return code;
        }
        return 'en';
    }

    function apply(lang) {
        var els = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            var key = els[i].getAttribute('data-i18n');
            if (T[key] && T[key][lang]) {
                els[i].innerHTML = T[key][lang];
            }
        }

        document.documentElement.lang = lang;

        var page = document.body.getAttribute('data-page');
        var titleKey = 'title.' + page;
        if (T[titleKey] && T[titleKey][lang]) {
            document.title = T[titleKey][lang];
        }

        var metaDesc = document.querySelector('meta[name="description"]');
        var descKey = 'meta.description.' + page;
        if (metaDesc && T[descKey] && T[descKey][lang]) {
            metaDesc.setAttribute('content', T[descKey][lang]);
        }
    }

    function createSwitcher(lang) {
        if (document.body.getAttribute('data-page') === 'glyphclock') return;
        var toolbar = document.querySelector('.nav-actions');
        if (!toolbar) return;

        var div = document.createElement('div');
        div.className = 'lang-switcher';

        var btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = lang.toUpperCase();
        btn.setAttribute('aria-label', 'Change language');

        var list = document.createElement('div');
        list.className = 'lang-switcher__list';
        list.style.display = 'none';

        for (var i = 0; i < LANGS.length; i++) {
            var opt = document.createElement('button');
            opt.className = 'lang-switcher__option';
            opt.setAttribute('data-lang', LANGS[i][0]);
            opt.textContent = LANGS[i][1];
            if (LANGS[i][0] === lang) opt.classList.add('lang-switcher__option--active');
            list.appendChild(opt);
        }

        btn.addEventListener('click', function () {
            var visible = list.style.display !== 'none';
            list.style.display = visible ? 'none' : 'block';
        });

        list.addEventListener('click', function (e) {
            var target = e.target;
            if (!target.hasAttribute('data-lang')) return;
            var newLang = target.getAttribute('data-lang');
            try { localStorage.setItem('lang', newLang); } catch (ex) {}
            apply(newLang);
            btn.textContent = newLang.toUpperCase();
            var opts = list.querySelectorAll('.lang-switcher__option');
            for (var j = 0; j < opts.length; j++) {
                opts[j].classList.toggle('lang-switcher__option--active',
                    opts[j].getAttribute('data-lang') === newLang);
            }
            list.style.display = 'none';
        });

        document.addEventListener('click', function (e) {
            if (!div.contains(e.target)) list.style.display = 'none';
        });

        div.appendChild(btn);
        div.appendChild(list);
        toolbar.appendChild(div);
    }

    var lang = detect();
    apply(lang);
    createSwitcher(lang);
})();
