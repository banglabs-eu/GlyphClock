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
            en: 'The start of <a href="about.html">GlyphClock</a>.',
            bg: 'Началото на <a href="about.html">GlyphClock</a>.',
            hr: 'Početak <a href="about.html">GlyphClock</a>.',
            cs: 'Začátek <a href="about.html">GlyphClock</a>.',
            da: 'Starten på <a href="about.html">GlyphClock</a>.',
            nl: 'Het begin van <a href="about.html">GlyphClock</a>.',
            et: '<a href="about.html">GlyphClock</a>\u2019i algus.',
            fi: '<a href="about.html">GlyphClock</a>n alku.',
            fr: 'Le début de <a href="about.html">GlyphClock</a>.',
            de: 'Der Anfang von <a href="about.html">GlyphClock</a>.',
            el: 'Η αρχή του <a href="about.html">GlyphClock</a>.',
            hu: 'A <a href="about.html">GlyphClock</a> kezdete.',
            ga: 'Tús <a href="about.html">GlyphClock</a>.',
            it: 'L\'inizio di <a href="about.html">GlyphClock</a>.',
            lv: '<a href="about.html">GlyphClock</a> sākums.',
            lt: '<a href="about.html">GlyphClock</a> pradžia.',
            mt: 'Il-bidu ta\' <a href="about.html">GlyphClock</a>.',
            pl: 'Początek <a href="about.html">GlyphClock</a>.',
            pt: 'O início do <a href="about.html">GlyphClock</a>.',
            ro: 'Începutul <a href="about.html">GlyphClock</a>.',
            sk: 'Začiatok <a href="about.html">GlyphClock</a>.',
            sl: 'Začetek <a href="about.html">GlyphClock</a>.',
            es: 'El comienzo de <a href="about.html">GlyphClock</a>.',
            sv: 'Början av <a href="about.html">GlyphClock</a>.'
        },
        'about.p1': {
            en: 'We all live in and share the same time. The clock is always ticking, GlyphClock was made with the intent to separate us from the constant count.',
            bg: 'Всички живеем и споделяме едно и също време. Часовникът винаги тиктака, GlyphClock беше създаден с намерението да ни отдели от постоянното броене.',
            hr: 'Svi živimo i dijelimo isto vrijeme. Sat uvijek otkucava, GlyphClock je napravljen s namjerom da nas odvoji od stalnog brojanja.',
            cs: 'Všichni žijeme a sdílíme stejný čas. Hodiny stále tikají, GlyphClock byl vytvořen s úmyslem oddělit nás od neustálého počítání.',
            da: 'Vi lever alle i og deler den samme tid. Uret tikker altid, GlyphClock blev skabt med hensigten om at adskille os fra den konstante optælling.',
            nl: 'We leven allemaal in en delen dezelfde tijd. De klok tikt altijd, GlyphClock is gemaakt met de bedoeling ons te scheiden van het constante tellen.',
            et: 'Me kõik elame ja jagame sama aega. Kell tiksub alati, GlyphClock loodi eesmärgiga eraldada meid pidevast loendamisest.',
            fi: 'Me kaikki elämme ja jaamme saman ajan. Kello tikittää aina, GlyphClock luotiin tarkoituksena erottaa meidät jatkuvasta laskemisesta.',
            fr: 'Nous vivons tous dans le même temps et le partageons. L\'horloge tourne sans cesse, GlyphClock a été créé dans le but de nous séparer du décompte constant.',
            de: 'Wir alle leben in und teilen dieselbe Zeit. Die Uhr tickt immer, GlyphClock wurde mit der Absicht geschaffen, uns vom ständigen Zählen zu trennen.',
            el: 'Όλοι ζούμε και μοιραζόμαστε τον ίδιο χρόνο. Το ρολόι χτυπά πάντα, το GlyphClock δημιουργήθηκε με σκοπό να μας χωρίσει από τη συνεχή μέτρηση.',
            hu: 'Mindannyian ugyanabban az időben élünk és osztozunk rajta. Az óra mindig ketyeg, a GlyphClock azzal a szándékkal készült, hogy elválasszon minket az állandó számlálástól.',
            ga: 'Maireann muid go léir san am céanna agus roinneann muid é. Bíonn an clog ag ticáil i gcónaí, rinneadh GlyphClock leis an aidhm muid a scaradh ón gcomhaireamh leanúnach.',
            it: 'Viviamo tutti nello stesso tempo e lo condividiamo. L\'orologio ticchetta sempre, GlyphClock è stato creato con l\'intento di separarci dal conteggio costante.',
            lv: 'Mēs visi dzīvojam un dalāmies vienā un tajā pašā laikā. Pulkstenis vienmēr tikšķ, GlyphClock tika radīts ar nolūku atdalīt mūs no pastāvīgās skaitīšanas.',
            lt: 'Mes visi gyvename ir dalijamės tuo pačiu laiku. Laikrodis visada tiksi, GlyphClock buvo sukurtas siekiant atskirti mus nuo nuolatinio skaičiavimo.',
            mt: 'Ilkoll ngħixu fi u naqsmu l-istess ħin. L-arloġġ dejjem itektek, GlyphClock sar biex jisseparana mill-għadd kostanti.',
            pl: 'Wszyscy żyjemy w tym samym czasie i dzielimy go. Zegar zawsze tyka, GlyphClock został stworzony z zamiarem oddzielenia nas od ciągłego liczenia.',
            pt: 'Todos vivemos e partilhamos o mesmo tempo. O relógio está sempre a contar, GlyphClock foi criado com a intenção de nos separar da contagem constante.',
            ro: 'Cu toții trăim și împărtășim același timp. Ceasul mereu ticăie, GlyphClock a fost creat cu intenția de a ne separa de numărătoarea constantă.',
            sk: 'Všetci žijeme a zdieľame rovnaký čas. Hodiny stále tikajú, GlyphClock bol vytvorený s úmyslom oddeliť nás od neustáleho počítania.',
            sl: 'Vsi živimo in si delimo isti čas. Ura vedno tiktaka, GlyphClock je bil ustvarjen z namenom, da nas loči od nenehnega štetja.',
            es: 'Todos vivimos y compartimos el mismo tiempo. El reloj siempre está en marcha, GlyphClock fue creado con la intención de separarnos del conteo constante.',
            sv: 'Vi lever alla i och delar samma tid. Klockan tickar alltid, GlyphClock skapades med avsikten att skilja oss från den ständiga räkningen.'
        },
        'about.p2': {
            en: 'The 24-hour day is divided into 16, 90 minute blocks. Each block is then divided into 30 minute blocks of 一, 二 and 三.',
            bg: '24-часовият ден е разделен на 16 блока от по 90 минути. Всеки блок е разделен на 30-минутни части от 一, 二 и 三.',
            hr: 'Dan od 24 sata podijeljen je u 16 blokova od 90 minuta. Svaki blok je zatim podijeljen u 30-minutne dijelove 一, 二 i 三.',
            cs: '24hodinový den je rozdělen na 16 bloků po 90 minutách. Každý blok je pak rozdělen na 30minutové části 一, 二 a 三.',
            da: 'Døgnet er opdelt i 16 blokke à 90 minutter. Hver blok er derefter opdelt i 30-minutters dele af 一, 二 og 三.',
            nl: 'De dag van 24 uur is verdeeld in 16 blokken van 90 minuten. Elk blok is vervolgens verdeeld in 30-minuten delen van 一, 二 en 三.',
            et: '24-tunnine päev on jagatud 16-ks 90-minutiliseks plokiks. Iga plokk on omakorda jagatud 30-minutilisteks osadeks 一, 二 ja 三.',
            fi: '24 tunnin vuorokausi on jaettu 16:een 90 minuutin lohkoon. Jokainen lohko on jaettu 30 minuutin osiin 一, 二 ja 三.',
            fr: 'La journée de 24 heures est divisée en 16 blocs de 90 minutes. Chaque bloc est ensuite divisé en parties de 30 minutes de 一, 二 et 三.',
            de: 'Der 24-Stunden-Tag ist in 16 Blöcke zu je 90 Minuten unterteilt. Jeder Block ist dann in 30-Minuten-Teile von 一, 二 und 三 unterteilt.',
            el: 'Η ημέρα των 24 ωρών χωρίζεται σε 16 μπλοκ των 90 λεπτών. Κάθε μπλοκ χωρίζεται σε τμήματα των 30 λεπτών σε 一, 二 και 三.',
            hu: 'A 24 órás nap 16 darab 90 perces blokkra van osztva. Minden blokk ezután 30 perces részekre oszlik: 一, 二 és 三.',
            ga: 'Tá an lá 24 uair an chloig roinnte ina 16 bhloc 90 nóiméad. Tá gach bloc roinnte ina chodanna 30 nóiméad de 一, 二 agus 三.',
            it: 'La giornata di 24 ore è divisa in 16 blocchi da 90 minuti. Ogni blocco è poi diviso in parti da 30 minuti di 一, 二 e 三.',
            lv: '24 stundu diena ir sadalīta 16 blokos pa 90 minūtēm. Katrs bloks ir sadalīts 30 minūšu daļās pa 一, 二 un 三.',
            lt: '24 valandų diena padalinta į 16 blokų po 90 minučių. Kiekvienas blokas padalintas į 30 minučių dalis 一, 二 ir 三.',
            mt: 'Il-ġurnata ta\' 24 siegħa hija maqsuma fi 16-il blokka ta\' 90 minuta. Kull blokka hija mbagħad maqsuma fi partijiet ta\' 30 minuta ta\' 一, 二 u 三.',
            pl: '24-godzinny dzień jest podzielony na 16 bloków po 90 minut. Każdy blok jest następnie podzielony na 30-minutowe części 一, 二 i 三.',
            pt: 'O dia de 24 horas é dividido em 16 blocos de 90 minutos. Cada bloco é depois dividido em partes de 30 minutos de 一, 二 e 三.',
            ro: 'Ziua de 24 de ore este împărțită în 16 blocuri de 90 de minute. Fiecare bloc este apoi împărțit în părți de 30 de minute de 一, 二 și 三.',
            sk: '24-hodinový deň je rozdelený na 16 blokov po 90 minútach. Každý blok je potom rozdelený na 30-minútové časti 一, 二 a 三.',
            sl: '24-urni dan je razdeljen na 16 blokov po 90 minut. Vsak blok je nato razdeljen na 30-minutne dele 一, 二 in 三.',
            es: 'El día de 24 horas se divide en 16 bloques de 90 minutos. Cada bloque se divide luego en partes de 30 minutos de 一, 二 y 三.',
            sv: 'Dygnet är uppdelat i 16 block om 90 minuter. Varje block är sedan uppdelat i 30-minutersdelar av 一, 二 och 三.'
        },
        'about.p3': {
            en: 'There are no time zones in GlyphClock, as we travel the world we develop new relationships to the symbols. 🦋 may go from being the middle of the night to when we wake up. The <a href="glyphclock.html">🕰️</a> will show you the current GlyphClock.',
            bg: 'В GlyphClock няма часови зони, докато пътуваме по света, ние развиваме нови отношения към символите. 🦋 може да премине от средата на нощта до момента, в който се събуждаме. <a href="glyphclock.html">🕰️</a> ще ви покаже текущото GlyphClock.',
            hr: 'U GlyphClock nema vremenskih zona, dok putujemo svijetom razvijamo nove odnose prema simbolima. 🦋 može prijeći od sredine noći do trenutka buđenja. <a href="glyphclock.html">🕰️</a> će vam pokazati trenutno GlyphClock.',
            cs: 'V GlyphClock neexistují časová pásma, při cestování světem si vytváříme nové vztahy k symbolům. 🦋 se může změnit z půlnoci na čas probuzení. <a href="glyphclock.html">🕰️</a> vám ukáže aktuální GlyphClock.',
            da: 'Der er ingen tidszoner i GlyphClock, når vi rejser verden rundt udvikler vi nye forhold til symbolerne. 🦋 kan gå fra at være midt om natten til det tidspunkt vi vågner. <a href="glyphclock.html">🕰️</a> viser dig den aktuelle GlyphClock.',
            nl: 'Er zijn geen tijdzones in GlyphClock, terwijl we de wereld rondreizen ontwikkelen we nieuwe relaties met de symbolen. 🦋 kan veranderen van midden in de nacht naar het moment dat we wakker worden. <a href="glyphclock.html">🕰️</a> toont je de huidige GlyphClock.',
            et: 'GlyphClock\u2019is pole ajavööndeid, maailma reisides arendame uusi suhteid sümbolitega. 🦋 võib muutuda südaööst ärkamisajaks. <a href="glyphclock.html">🕰️</a> näitab sulle praegust GlyphClock\u2019i.',
            fi: 'GlyphClockssa ei ole aikavyöhykkeitä, matkustaessamme maailmassa kehitämme uusia suhteita symboleihin. 🦋 voi muuttua keskiyöstä heräämisajaksi. <a href="glyphclock.html">🕰️</a> näyttää sinulle nykyisen GlyphClockn.',
            fr: 'Il n\'y a pas de fuseaux horaires dans GlyphClock, en voyageant à travers le monde nous développons de nouvelles relations avec les symboles. 🦋 peut passer du milieu de la nuit au moment du réveil. <a href="glyphclock.html">🕰️</a> vous montrera le GlyphClock actuel.',
            de: 'Es gibt keine Zeitzonen in GlyphClock, wenn wir die Welt bereisen, entwickeln wir neue Beziehungen zu den Symbolen. 🦋 kann sich von Mitternacht zur Aufwachzeit wandeln. <a href="glyphclock.html">🕰️</a> zeigt dir die aktuelle GlyphClock.',
            el: 'Δεν υπάρχουν ζώνες ώρας στο GlyphClock, καθώς ταξιδεύουμε στον κόσμο αναπτύσσουμε νέες σχέσεις με τα σύμβολα. 🦋 μπορεί να αλλάξει από μέσα νύχτα σε ώρα αφύπνισης. Το <a href="glyphclock.html">🕰️</a> θα σας δείξει το τρέχον GlyphClock.',
            hu: 'A GlyphClock-ban nincsenek időzónák, ahogy utazzuk a világot, új kapcsolatokat alakítunk ki a szimbólumokkal. 🦋 az éjszaka közepéből az ébredés idejévé válhat. A <a href="glyphclock.html">🕰️</a> megmutatja a jelenlegi GlyphClock-ot.',
            ga: 'Níl aon chriosanna ama i GlyphClock, agus muid ag taisteal an domhain forbraímid caidrimh nua leis na siombailí. 🦋 d\'fhéadfadh athrú ó lár na hoíche go ham múscailte. Taispeánfaidh an <a href="glyphclock.html">🕰️</a> an GlyphClock reatha duit.',
            it: 'Non ci sono fusi orari in GlyphClock, viaggiando per il mondo sviluppiamo nuove relazioni con i simboli. 🦋 può passare dall\'essere mezzanotte al momento del risveglio. <a href="glyphclock.html">🕰️</a> ti mostrerà il GlyphClock attuale.',
            lv: 'GlyphClock nav laika joslu, ceļojot pa pasauli mēs veidojam jaunas attiecības ar simboliem. 🦋 var pārvērsties no pusnakts par pamošanās laiku. <a href="glyphclock.html">🕰️</a> parādīs jums pašreizējo GlyphClock.',
            lt: 'GlyphClock neturi laiko juostų, keliaujant po pasaulį mes kuriame naujus ryšius su simboliais. 🦋 gali pasikeisti nuo vidurnakčio iki pabudimo laiko. <a href="glyphclock.html">🕰️</a> parodys jums dabartinį GlyphClock.',
            mt: 'M\'hemmx żoni tal-ħin fi GlyphClock, hekk kif nivvjaġġaw id-dinja niżviluppaw relazzjonijiet ġodda mas-simboli. 🦋 jista\' jinbidel minn nofs il-lejl għal meta nqumu. <a href="glyphclock.html">🕰️</a> jurik il-GlyphClock attwali.',
            pl: 'W GlyphClock nie ma stref czasowych, podróżując po świecie rozwijamy nowe relacje z symbolami. 🦋 może zmienić się z środka nocy na czas przebudzenia. <a href="glyphclock.html">🕰️</a> pokaże ci aktualny GlyphClock.',
            pt: 'Não existem fusos horários no GlyphClock, ao viajarmos pelo mundo desenvolvemos novas relações com os símbolos. 🦋 pode passar de ser o meio da noite para a hora de acordar. O <a href="glyphclock.html">🕰️</a> mostrará o GlyphClock atual.',
            ro: 'Nu există fusuri orare în GlyphClock, pe măsură ce călătorim prin lume dezvoltăm noi relații cu simbolurile. 🦋 poate trece de la miezul nopții la momentul trezirii. <a href="glyphclock.html">🕰️</a> îți va arăta GlyphClock-ul curent.',
            sk: 'V GlyphClock neexistujú časové pásma, pri cestovaní svetom si vytvárame nové vzťahy k symbolom. 🦋 sa môže zmeniť z polnoci na čas prebudenia. <a href="glyphclock.html">🕰️</a> vám ukáže aktuálny GlyphClock.',
            sl: 'V GlyphClock ni časovnih pasov, ko potujemo po svetu, razvijamo nove odnose s simboli. 🦋 se lahko spremeni iz sredi noči v čas prebujenja. <a href="glyphclock.html">🕰️</a> vam bo pokazal trenutni GlyphClock.',
            es: 'No hay zonas horarias en GlyphClock, al viajar por el mundo desarrollamos nuevas relaciones con los símbolos. 🦋 puede pasar de ser medianoche a la hora de despertar. El <a href="glyphclock.html">🕰️</a> te mostrará el GlyphClock actual.',
            sv: 'Det finns inga tidszoner i GlyphClock, när vi reser världen utvecklar vi nya relationer till symbolerna. 🦋 kan gå från att vara mitt i natten till när vi vaknar. <a href="glyphclock.html">🕰️</a> visar dig den aktuella GlyphClock.'
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
        var toolbar = document.querySelector('.toolbar');
        if (!toolbar) return;

        var div = document.createElement('div');
        div.className = 'lang-switcher';

        var btn = document.createElement('button');
        btn.className = 'toolbar-btn';
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
