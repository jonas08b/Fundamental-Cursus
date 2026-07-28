'use strict';

/* ══════════════════════════════════════════════════════════
   COURSE DATA
══════════════════════════════════════════════════════════ */
const MODULES = [
{
  id: 1, emoji: '🔍', title: 'Introductie tot Fundamentele Analyse',
  tags: ['Basis', 'Strategie'], readTime: '15 min',
  sections: [
    { id: 's1-1', title: 'Wat is fundamentele analyse?', blocks: [
      { t:'p', html:'Fundamentele analyse (FA) is de methodologie waarbij je de <strong>intrinsieke waarde</strong> van een bedrijf bepaalt door zijn financiële gezondheid, businessmodel, sectorpositie en macro-economische context te onderzoeken. Het uitgangspunt: markten zijn op korte termijn irrationeel, maar op lange termijn weerspiegelen ze de werkelijke waarde.' },
      { t:'quote', text:'"Price is what you pay. Value is what you get." — Warren Buffett' },
      { t:'p', html:'De FA-belegger zoekt het <em>gat</em> tussen prijs (wat de markt vraagt) en waarde (wat het bedrijf werkelijk waard is). Dat gat wordt de <strong>veiligheidsmarge</strong> (margin of safety) genoemd.' },
      { t:'callout', s:'info', ico:'💡', html:'FA is geen kijken naar grafieken of patterns. Het is het bedrijf analyseren zoals een ondernemer een overname zou analyseren — met focus op businesskwaliteit, groeipotentieel en een redelijke prijs.' },
    ]},
    { id: 's1-2', title: 'FA versus Technische Analyse', blocks: [
      { t:'table', headers:['Aspect','Fundamentele Analyse','Technische Analyse'],
        rows:[
          ['Focus','Bedrijfswaarde (wat is het waard?)','Koerspatronen (waar gaat het naartoe?)'],
          ['Tijdshorizon','Maanden tot jaren','Minuten tot weken'],
          ['Input','Financiële statements, sector, macro','Koers, volume, technische indicatoren'],
          ['Aanname','Markt is soms irrationeel — pak dat voordeel','Alles staat al in de koers'],
          ['Beste voor','Langetermijn posities, stock picking','Timing, trading, korte termijn'],
        ]},
      { t:'p', html:'Veel professionele beleggers combineren beide disciplines: FA voor de <em>selectie</em> (welk bedrijf?), technische analyse voor de <em>timing</em> (wanneer instappen?).' },
    ]},
    { id: 's1-3', title: 'Waarde versus Prijs — Mr. Market', blocks: [
      { t:'p', html:'Benjamin Graham introduceerde de metafoor van <strong>Mr. Market</strong>: stel je voor dat je een bedrijf samen bezit met een emotionele medevennoot die je elke dag een prijs aanbiedt om zijn aandeel te kopen of te verkopen. Sommige dagen is hij euforisch en vraagt veel te veel; andere dagen is hij depressief en biedt hij voor een habbekrats aan.' },
      { t:'callout', s:'tip', ico:'🎯', html:'<strong>Kernprincipe:</strong> Je bent nooit <em>verplicht</em> te handelen. Als zijn prijs aantrekkelijk is, koop. Als hij te hoog vraagt, wacht of verkoop. Mr. Market is er om je te bedienen — niet om je te sturen.' },
      { t:'formula', label:'Margin of Safety',
        main:'MoS = (<span class="fv">Intrinsieke waarde</span> − <span class="fv">Koers</span>) / <span class="fv">Intrinsieke waarde</span> × <span class="fa">100%</span>',
        note:'• Graham: streef naar minimaal 50% MoS\n• Buffett: 25–40% is voldoende bij uitzonderlijke kwaliteit\n• Hogere onzekerheid over de waarde → meer MoS vereist' },
    ]},
    { id: 's1-4', title: 'Beleggingsstijlen', blocks: [
      { t:'h3', text:'Value Investing' },
      { t:'p', html:'Koop aandelen die <em>onder</em> hun intrinsieke waarde noteren. Focus op lage P/E, lage P/B, stevige dividenden. Graham en Dodd legden het fundament; Buffett perfectioneerde het door kwaliteit centraal te stellen.' },
      { t:'h3', text:'Growth Investing' },
      { t:'p', html:'Betaal een premium voor bedrijven met hoge, duurzame omzetgroei. Logica: de toekomstige kasstromen zijn veel groter dan de huidige. Risico: overpaying als de groei afzwakt of de rente stijgt.' },
      { t:'h3', text:'GARP — Growth at a Reasonable Price' },
      { t:'p', html:'Hybride aanpak: zoek groeibedrijven die niet extreem overgewaardeerd zijn. De PEG-ratio is de kernmetric.' },
      { t:'formula', label:'PEG Ratio',
        main:'PEG = <span class="fv">P/E Ratio</span> / <span class="fv">EPS-groeipercentage (jaarlijks, %)</span>',
        note:'PEG < 1: mogelijk ondergewaardeerd gezien de groei\nPEG ≈ 1: fair value\nPEG > 2: groei wordt al sterk ingeprijsd — wees voorzichtig' },
      { t:'h3', text:'Quality Investing' },
      { t:'p', html:'Focus op bedrijven met <strong>hoge ROIC, stabiele marges, sterke moat en weinig schuld</strong>. Betaal een eerlijke prijs voor uitzonderlijke kwaliteit en houd lang aan. Terry Smith (Fundsmith) en Nick Sleep zijn de bekendste propagandisten.' },
      { t:'table', headers:['Stijl','Kernratio','Typisch risico','Horizont'],
        rows:[
          ['Value','P/E, P/B laag','Value trap (bedrijf wordt terecht goedkoper)','3–5 jaar'],
          ['Growth','Omzetgroei >20%','Overpaying, multiple compression','5–10 jaar'],
          ['GARP','PEG < 1.5','Sectorrotatie, rentestijging','3–7 jaar'],
          ['Quality','ROIC > 15%, sterke FCF','Te duur betalen, trage start','5+ jaar'],
        ]},
    ]},
  ],
},

{
  id: 2, emoji: '🏢', title: 'Bedrijfsanalyse',
  tags: ['Businessmodel', 'Moat'], readTime: '20 min',
  sections: [
    { id: 's2-1', title: 'Het businessmodel begrijpen', blocks: [
      { t:'p', html:'Stap één van elke analyse: kun je in <strong>één zin</strong> uitleggen hoe dit bedrijf geld verdient? Zo niet, begrijp je het nog niet goed genoeg om erin te beleggen.' },
      { t:'callout', s:'tip', ico:'✏️', html:'<strong>Lynch\'s "cocktailparty"-test:</strong> Leg het businessmodel uit aan een 12-jarige. Als die het snapt, is het helder genoeg. Complexiteit is geen moat — het is vaak een rood signaal.' },
      { t:'p', html:'Analyseer systematisch: (1) hoe gaat geld het bedrijf in, (2) hoe gaat het eruit, en (3) wat beschermt deze geldstroom tegen concurrenten?' },
    ]},
    { id: 's2-2', title: 'Revenue Streams & kwaliteit', blocks: [
      { t:'p', html:'Niet alle omzet is gelijk. <strong>Terugkerende, contractueel vastgelegde omzet</strong> is structureel waardevoller dan eenmalige projectomzet. Analyseer elke omzetstroom apart.' },
      { t:'table', headers:['Omzettype','Voorbeeld','Predictabiliteit','Waardering'],
        rows:[
          ['SaaS / Abonnement','Microsoft 365, Salesforce','Zeer hoog — ARR/MRR zichtbaar','Hoogste multiple'],
          ['Transactioneel (toll road)','Visa, Mastercard, Booking.com','Hoog — groeit met economie','Hoge multiple'],
          ['Licenties / royalties','Qualcomm patenten, ARM Holdings','Hoog','Hoge multiple'],
          ['Herhaalaankopen (consumables)','Gillette scheermesjes, Nestlé','Gemiddeld–hoog','Gemiddelde multiple'],
          ['Projecten / opdrachten','Consulting, bouw','Laag — afhankelijk van pijplijn','Lage multiple'],
          ['Commodity verkoop','Staalbedrijf, olieproducent','Zeer laag — marktprijs bepaalt','Laagste multiple'],
        ]},
      { t:'formula', label:'Recurring Revenue Ratio',
        main:'RRR = <span class="fv">Terugkerende omzet</span> / <span class="fv">Totale omzet</span> × <span class="fa">100%</span>',
        note:'Microsoft: >75% | Consultancy: <15% | SaaS-bedrijven streven naar 90%+\nHogere RRR → hogere waardering gerechtvaardigd' },
    ]},
    { id: 's2-3', title: 'Kostenstructuur & Operating Leverage', blocks: [
      { t:'p', html:'De verhouding tussen <strong>vaste en variabele kosten</strong> bepaalt hoe snel de winst groeit bij stijgende omzet — dit heet operating leverage.' },
      { t:'bullets', items:[
        '<strong>Vaste kosten</strong>: R&D, huur, salarissen van vaste medewerkers. Stijgen niet evenredig mee met omzet. Hoge vaste kosten = hoge leverage.',
        '<strong>Variabele kosten</strong>: grondstoffen, commissies, logistiek. Schalen mee met omzet. Commodity-producenten leven hier.',
      ]},
      { t:'formula', label:'Degree of Operating Leverage (DOL)',
        main:'DOL = <span class="fv">% verandering EBIT</span> / <span class="fv">% verandering Omzet</span>\n\n  of:\n\nDOL = <span class="fv">Contributiemarge</span> / <span class="fv">EBIT</span>',
        note:'DOL = 4 → 10% omzetgroei resulteert in 40% EBIT-groei (en andersom bij krimp!)\nHoog DOL is een tweesnijdend zwaard: geweldig bij groei, pijnlijk bij recessie.' },
      { t:'callout', s:'warn', ico:'⚠️', html:'Bedrijven met hoge vaste kosten en lage variabele kosten (softwarebedrijven, luchthavens, glasvezelnetwerken) hebben enorme operating leverage. Zorg dat de groei ook echt materialiseert — bij omzetdaling vallen de marges hard.' },
    ]},
    { id: 's2-4', title: 'Economische Moat', blocks: [
      { t:'p', html:'Buffett\'s centrale concept: een <strong>duurzaam concurrentievoordeel</strong> dat de hoge winstgevendheid beschermt. Zonder moat trek je hogere winsten aan en eroderen die door concurrentie. Met een sterke moat compoundt de waarde decennia lang.' },
      { t:'bullets', items:[
        '<strong>Netwerkeffecten</strong>: elke nieuwe gebruiker maakt het product waardevoller voor alle anderen. Visa (meer merchants → meer kaarthouders → meer merchants), Meta, LinkedIn, Airbnb.',
        '<strong>Switching costs</strong>: wisselen van leverancier kost tijd, geld of risico. SAP ERP-systeem vervangen = multi-jaar migratie. Bloomberg Terminal: abonnees betalen liever $28k/jaar dan alles opnieuw te leren.',
        '<strong>Schaalvoordelen</strong>: lagere kosten per eenheid naarmate het volume stijgt. Amazon fulfilment, Walmart inkoopkracht, TSMC R&D gespreid over enorme volumes.',
        '<strong>Immateriële activa</strong>: merken (Coca-Cola, LVMH), patenten (Novo Nordisk insuline), licenties (ratingbureaus Moody\'s/S&P), regelgevende goedkeuringen (vergunningen).',
        '<strong>Efficiënte schaal</strong>: markt is groot genoeg voor slechts één speler. Een pijplijn of luchthaven in een kleine regio — een tweede bouwen is onrendabel.',
      ]},
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Pseudo-moats:</strong> "We zijn marktleider" is géén moat. "We hebben veel klanten" is géén moat. De test: wat houdt een gekapitaliseerd, competent concurrent concreet tegen om dit te kopiëren?' },
    ]},
  ],
},

{
  id: 3, emoji: '🏭', title: 'Sectoranalyse',
  tags: ['Sector', 'TAM', 'Porter'], readTime: '18 min',
  sections: [
    { id: 's3-1', title: 'TAM, SAM en SOM', blocks: [
      { t:'p', html:'Voordat je groeiprojecties maakt, moet je de marktomvang kennen. Bedrijven overdrijven hun TAM systematisch — wees kritisch.' },
      { t:'table', headers:['Concept','Definitie','Berekening'],
        rows:[
          ['TAM — Total Addressable Market','De totale markt als het bedrijf 100% marktaandeel zou hebben','Top-down: industrie-publicaties / Bottom-up: eenheden × prijs'],
          ['SAM — Serviceable Addressable Market','Deel van TAM dat het bedrijf realistisch kan bedienen (geografie, doelgroep)','TAM × realistisch bereikbaar deel'],
          ['SOM — Serviceable Obtainable Market','Realistisch te veroveren marktaandeel de komende 3–5 jaar','SAM × realistische penetratie'],
        ]},
      { t:'callout', s:'warn', ico:'⚠️', html:'Bedrijven claimen altijd een enorme TAM. Valideer altijd: (1) is de definitie realistisch?, (2) welk deel is echt addressable?, (3) welke penetratiesnelheid is historisch gezien normaal in deze sector?' },
    ]},
    { id: 's3-2', title: 'Sectorlevenscyclus', blocks: [
      { t:'p', html:'Elke sector doorloopt een levenscyclus. De fase bepaalt groeipercentages, marge-ontwikkeling en welke bedrijven het meest profiteren.' },
      { t:'table', headers:['Fase','Kenmerken','Kansen','Risico\'s'],
        rows:[
          ['Introductie','Hoge burn rate, klein, veel R&D, negatieve winst','Multi-bagger mogelijk','Meeste bedrijven overleven niet'],
          ['Groei','Omzetgroei 20–50%+, marges stijgen, consolidatie begint','Winnaars nemen het meest','Hoge waarderingen, disruptierisico'],
          ['Volwassenheid','Lage groei, stabiele marges, cashcow, dividenden','Dividend, buybacks, voorspelbaarheid','Disruptie door nieuwe technologie'],
          ['Neergang','Markt krimpt, prijsdruk, consolidatie','Short-opportuniteiten, waardevernietiging zichtbaar','Kapitaalvernietiging, schulden'],
        ]},
    ]},
    { id: 's3-3', title: 'Cyclisch versus Defensief', blocks: [
      { t:'bullets', items:[
        '<strong>Cyclische sectoren</strong>: sterk afhankelijk van de economische conjunctuur. Staal, auto\'s, chemiebedrijven, luchtvaart, grondstoffen, luxegoederen. Bij recessie: omzet daalt snel, bij herstel: groei explosiever.',
        '<strong>Defensieve sectoren</strong>: weinig conjunctuurgevoelig. Voedsel (Nestlé), farma, nutsbedrijven, basisconsumentengoederen. Mensen eten altijd brood en nemen hun pillen — ook in een recessie.',
        '<strong>Hybrid</strong>: bedrijven zoals Apple: deels cyclisch (hardware), deels defensief (services). Analyseer elke divisie apart.',
      ]},
      { t:'callout', s:'tip', ico:'🔄', html:'<strong>Beleggingstip:</strong> Koop cyclische bedrijven bij lage P/E (hoge winst op cyclische piek = verkeerd moment) en bij hoge P/E of negatieve winst (bodem = ideaal moment). Dit is contra-intuïtief maar bewezen effectief.' },
    ]},
    { id: 's3-4', title: 'Porter\'s Five Forces', blocks: [
      { t:'p', html:'Michael Porter\'s framework analyseert de <strong>aantrekkelijkheid</strong> van een sector aan de hand van vijf krachten. Hoe sterker de krachten, hoe meer winstgevendheid weggeconcurreerd wordt.' },
      { t:'table', headers:['Kracht','Wat meet het?','Hoge dreiging wanneer...'],
        rows:[
          ['Concurrentiedruk (rivaliteit)','Hoe hevig beconcurreren bestaande spelers elkaar?','Veel gelijke spelers, lage differentiatie, lage switching costs'],
          ['Dreiging nieuwe toetreders','Hoe makkelijk kan een concurrent de markt betreden?','Lage investeringsdrempel, geen schaalvoordeel vereist, geen licenties'],
          ['Onderhandelingsmacht leveranciers','Kunnen leveranciers prijzen opleggen?','Geconcentreerde leveranciers, unieke grondstoffen, weinig alternatieven'],
          ['Onderhandelingsmacht klanten','Kunnen klanten lage prijzen afdwingen?','Grote klanten, gestandaardiseerd product, lage switching costs'],
          ['Dreig. substituten','Kan een ander product dezelfde functie vervullen?','Technologische innovatie, andere industrie met zelfde nut'],
        ]},
      { t:'callout', s:'info', ico:'📌', html:'<strong>Toepassing:</strong> Analyseer ASML met Porter\'s Five Forces. Rivaliteit: monopolie. Nieuwe toetreders: tientallen miljarden R&D vereist. Leveranciers: ASML koopt componenten van gespecialiseerde nichebedrijven maar heeft lang-looptijdcontracten. Klanten: TSMC, Samsung, Intel zijn groot maar hebben géén alternatief voor EUV. Substituten: geen vergelijkbare lithografietechnologie. Conclusie: maximaal aantrekkelijke structuur.' },
    ]},
  ],
},

{
  id: 4, emoji: '🌍', title: 'Macro-economie & Aandelen',
  tags: ['Macro', 'Rente', 'Inflatie'], readTime: '22 min',
  sections: [
    { id: 's4-1', title: 'Inflatie & haar impact', blocks: [
      { t:'p', html:'Inflatie is de stijging van het algemeen prijspeil. Voor beleggers is ze relevant om twee redenen: (1) ze beïnvloedt de kosten en marges van bedrijven, en (2) ze stuurt het rentebeleid van centrale banken.' },
      { t:'table', headers:['Type inflatie','Oorzaak','Impact op aandelen'],
        rows:[
          ['Demand-pull','Vraag overtreft aanbod (sterke economie)','Initieel positief (groei), negatief als rente stijgt'],
          ['Cost-push','Stijgende input-kosten (olie, lonen)','Negatief: marges staan onder druk'],
          ['Stagflatie','Hoge inflatie + lage groei','Zeer negatief: slechtste omgeving'],
          ['Disinflatie','Inflatie daalt maar blijft positief','Positief: rente kan dalen'],
          ['Deflatie','Algemene prijsdaling','Gevaarlijk: consumenten stellen aankopen uit, schulden worden zwaarder'],
        ]},
      { t:'callout', s:'tip', ico:'🛡️', html:'<strong>Bescherming tegen inflatie:</strong> Bedrijven met <em>pricing power</em> — ze kunnen hogere kosten doorrekenen zonder volumeverlies. Hermes, LVMH, Visa, Moody\'s scoorden zelfs beter dan inflatie historisch.' },
    ]},
    { id: 's4-2', title: 'Rente & de discounted value link', blocks: [
      { t:'p', html:'Rentestijgingen zijn de grote vijand van hogere waarderingen. Het mechanisme: de <strong>risicovrije rente</strong> (staatsobligaties) is de bodem van elke discontovoet. Stijgt de risicovrije rente, stijgt de discontovoet, en daalt de contante waarde van toekomstige kasstromen.' },
      { t:'formula', label:'Verband rente–waardering',
        main:'Intrinsieke waarde = Σ <span class="fv">FCF_t</span> / <span class="fo">(1 + r)^t</span>\n\n  waarbij r = <span class="fv">risicovrij tarief</span> + <span class="fv">equity risk premium</span> + <span class="fv">bedrijfsspecifiek risico</span>',
        note:'Stelregel: als de rente 1% stijgt, dalen groeiaandelen (lange duration) meer dan value-aandelen (korte duration)\nGroeibedrijven: 30–40% van waarde zit in kasstromen >10 jaar → zeer rentegevoelig\nValue-bedrijven: meeste kasstroom is near-term → minder rentegevoelig' },
      { t:'table', headers:['Rentescenario','Impact','Sectoren die profiteren','Sectoren die lijden'],
        rows:[
          ['Rente stijgt','Hogere discontovoet, lagere multiples','Banken, verzekeraars, energie','Tech, biotech, utilities, groeibedrijven'],
          ['Rente daalt','Lagere discontovoet, hogere multiples','Tech, groeibedrijven, utilities, REITs','Banken (marge-druk)'],
          ['Stabiele rente','Fundamentals domineren','Kwaliteitsbedrijven','—'],
        ]},
    ]},
    { id: 's4-3', title: 'Centrale banken — ECB & Fed', blocks: [
      { t:'p', html:'De Federal Reserve (VS) en Europese Centrale Bank (EU) sturen de kortetermijnrente via hun beleidsrente. Beleggers letten op elke nuance in communicatie.' },
      { t:'bullets', items:[
        '<strong>Hawkish</strong>: centrale bank wil inflatie bestrijden → signaleert renteverhogingen → negatief voor aandelen op korte termijn.',
        '<strong>Dovish</strong>: centrale bank wil groei stimuleren → renteverlagingen verwacht → positief voor aandelen, met name groeiaandelen.',
        '<strong>Forward guidance</strong>: de bank communiceert de toekomstige beleidsrichting. Markt prijst dit al in vóórdat het beleid verandert.',
        '<strong>Kwantitatieve verruiming (QE)</strong>: centrale bank koopt obligaties, pompt liquiditeit in systeem, drukt rente kunstmatig laag → risicobeleggingen profiteren.',
        '<strong>Kwantitatieve verkrapping (QT)</strong>: obligaties worden afgestoten, liquiditeit krimpt → risicobeleggingen staan onder druk.',
      ]},
    ]},
    { id: 's4-4', title: 'BBP, werkloosheid & wisselkoersen', blocks: [
      { t:'h3', text:'BBP & bedrijfswinsten' },
      { t:'p', html:'Historisch correleren S&P 500-winsten sterk met het nominale BBP-groeipercentage (reëel BBP + inflatie). <em>Buffett-indicator</em>: totale beurswaarde / BBP. Boven 150% = historisch overgewaardeerd.' },
      { t:'h3', text:'Werkloosheid' },
      { t:'p', html:'Lage werkloosheid = loonstijgingen = hogere personeelskosten voor bedrijven. Tegelijk = sterke consumentenbestedingen. Het netto-effect verschilt per sector en bedrijf.' },
      { t:'h3', text:'Wisselkoersen' },
      { t:'p', html:'Exporterende bedrijven lijden onder een sterke eigen munt (export wordt duurder in het buitenland). ASML rapporteert in euro\'s maar verkoopt wereldwijd in USD — een stijgende euro is negatief voor de gerapporteerde winst.' },
      { t:'formula', label:'Translatie-effect (eenvoudig)',
        main:'Gerapporteerde omzet (EUR) = <span class="fv">Buitenlandse omzet (USD)</span> × <span class="fv">EUR/USD wisselkoers</span>',
        note:'Als EUR/USD stijgt van 1.00 naar 1.10 → dezelfde USD-omzet is in EUR 10% minder waard\nMultinationals hedgen deels, maar lange-termijn impact is structureel' },
    ]},
  ],
},

{
  id: 5, emoji: '📄', title: 'Financiële Staten — Overzicht',
  tags: ['Accounting', 'Statements'], readTime: '16 min',
  sections: [
    { id: 's5-1', title: 'De drie financiële overzichten', blocks: [
      { t:'p', html:'Elk beursgenoteerd bedrijf publiceert drie kernoverichten. Samen geven ze een compleet beeld van de financiële gezondheid. Ze zijn onderling verbonden — fouten of manipulatie in het ene overzicht laten sporen na in de andere.' },
      { t:'table', headers:['Overzicht','Wat het toont','Kernvraag','Tijdsperiode'],
        rows:[
          ['Resultatenrekening (P&L)','Omzet, kosten, winst','Is het bedrijf winstgevend?','Periode (kwartaal/jaar)'],
          ['Balans','Bezittingen, schulden, eigen vermogen','Wat bezit/schuldt het bedrijf?','Momentopname (einde periode)'],
          ['Kasstroomoverzicht','Cash in- en uitstromen','Genereert het bedrijf echt cash?','Periode (kwartaal/jaar)'],
        ]},
    ]},
    { id: 's5-2', title: 'Verbanden tussen de drie overzichten', blocks: [
      { t:'p', html:'De kracht van FA ligt in de <strong>samenhang</strong> begrijpen. Manipulatie in één overzicht laat altijd sporen na in de andere twee.' },
      { t:'bullets', items:[
        '<strong>Nettowinst (P&L)</strong> stroomt via "Retained Earnings" naar het <strong>eigen vermogen op de balans</strong>.',
        '<strong>Afschrijvingen (P&L)</strong> zijn een kostenpost maar géén cashuitstroom → worden teruggeteld in de <strong>operationele kasstroom</strong>.',
        '<strong>Werkkapitaalwijzigingen (balans)</strong> beïnvloeden de operationele kasstroom — een sterke omzetstijging met meer debiteuren = minder cash dan de P&L doet vermoeden.',
        '<strong>Eindkassaldo (kasstroomoverzicht)</strong> = liquiditeiten op de <strong>balans</strong>.',
        '<strong>Capex (kasstroomoverzicht)</strong> vergroot de materiële vaste activa op de balans, die vervolgens afgeschreven worden in de P&L.',
      ]},
      { t:'callout', s:'warn', ico:'🔍', html:'<strong>Rode vlag:</strong> Nettowinst groeit jaar na jaar, maar de operationele kasstroom stagneert of daalt. Dit betekent ofwel aggressieve boekhoudkeuzes ofwel een verslechtering van de werkkapitaalcyclus. Dit is een van de meest voorkomende vroege signalen van boekhoudproblemen.' },
    ]},
    { id: 's5-3', title: 'IFRS versus US GAAP — kernverschillen', blocks: [
      { t:'table', headers:['Onderwerp','IFRS (Europa, rest wereld)','US GAAP (beursgenoteerde VS-bedrijven)'],
        rows:[
          ['Voorraadboekhoudmethode','FIFO of gewogen gemiddelde','FIFO of LIFO toegestaan'],
          ['Vastgoed (investment property)','Fair value-herwaardering toegestaan','Kostprijs verplicht'],
          ['Goodwill afschrijving','Niet automatisch — jaarlijkse impairmenttest','Zelfde (post-2002)'],
          ['Ontwikkelingskosten','Kapitaliseerbaar indien aan criteria voldaan','Altijd direct als kost'],
          ['Lease (IFRS 16/ASC 842)','Vrijwel alle leases op balans','Vergelijkbaar na 2019'],
        ]},
      { t:'callout', s:'info', ico:'📌', html:'Vergelijk nooit blind een Europees bedrijf met een Amerikaans bedrijf op basis van P/E of EV/EBITDA zonder te kijken naar boekhoudverschillen. IFRS-bedrijven die R&D kapitaliseren rapporteren hogere winsten maar niet noodzakelijk meer cash.' },
    ]},
  ],
},

{
  id: 6, emoji: '📊', title: 'Resultatenrekening — Diepgaand',
  tags: ['P&L', 'Marges', 'EBITDA'], readTime: '25 min',
  sections: [
    { id: 's6-1', title: 'Van omzet naar nettowinst', blocks: [
      { t:'p', html:'De resultatenrekening is gelaagd opgebouwd. Elke laag toont een andere winstdefinitie. Elke laag heeft zijn eigen analytische waarde.' },
      { t:'formula', label:'Opbouw resultatenrekening',
        main:'<span class="fv">Omzet (Revenue)</span>\n− <span class="fo">Kosten van verkochte goederen (COGS)</span>\n<span class="fa">= Brutomarge (Gross Profit)</span>\n\n− <span class="fo">Operationele kosten (Opex: R&D, Sales, G&A)</span>\n<span class="fa">= EBIT (Operating Profit / EBIT)</span>\n\n+ <span class="fv">Afschrijvingen & amortisatie (D&A)</span>\n<span class="fa">= EBITDA</span>\n\n− <span class="fo">Rentekosten (Interest expense)</span>\n+ <span class="fv">Rente-inkomsten</span>\n<span class="fa">= EBT (Earnings Before Tax)</span>\n\n− <span class="fo">Belastingen</span>\n<span class="fa">= Nettowinst (Net Income)</span>',
        note:'EPS = Nettowinst / Gewogen gemiddeld aantal aandelen\nDiluted EPS = Nettowinst / (aandelen + opties + convertibles)' },
    ]},
    { id: 's6-2', title: 'Brutomarge & COGS-analyse', blocks: [
      { t:'p', html:'De brutomarge = omzet minus de directe productiekosten. Het toont de <strong>kern-pricing power</strong> van het bedrijf. Een hoge, stabiele of stijgende brutomarge is een teken van concurrentievoordeel.' },
      { t:'formula', label:'Brutomarge',
        main:'Brutomarge % = (<span class="fv">Omzet</span> − <span class="fv">COGS</span>) / <span class="fv">Omzet</span> × <span class="fa">100%</span>',
        note:'Software/SaaS: 60–80%+ (bijna geen marginale kosten)\nFarmacie: 70–80%\nConsumentengoederen: 40–60%\nRetail: 25–40%\nCommodityproducent: 5–20%\nEen stijgende brutomarge = schaalvoordelen of betere pricing power' },
      { t:'callout', s:'tip', ico:'💡', html:'<strong>COGS red flag:</strong> Als COGS sneller stijgt dan omzet (dalende brutomarge) terwijl de sector goed presteert, betaalt het bedrijf meer voor inputs of verliest het pricing power. Graaf hierop in.' },
    ]},
    { id: 's6-3', title: 'EBITDA — voordelen & valkuilen', blocks: [
      { t:'p', html:'EBITDA (Earnings Before Interest, Taxes, Depreciation & Amortization) wordt vaak gebruikt als proxy voor operationele cashflow. Maar het is een <em>boekhoudkundige</em> maatstaf, geen cash-maatstaf.' },
      { t:'table', headers:['EBITDA','Vrije Kasstroom (FCF)'],
        rows:[
          ['Omvat geen werkkapitaalwijzigingen','Wel — negatief als debiteuren stijgen'],
          ['Omvat geen capex','Wel — investeringen worden afgetrokken'],
          ['Vergelijkbaar over sectoren','Minder vergelijkbaar maar reëler'],
          ['Makkelijk te manipuleren via timing','Moeilijker te manipuleren'],
          ['Veel gebruikt bij M&A (EV/EBITDA)','Gebruikt bij DCF-waardering'],
        ]},
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Charley Munger:</strong> "Every time you see the word EBITDA, substitute \'bullshit earnings\'." Overdreven, maar het punt is geldig: een bedrijf dat $100M EBITDA rapporteert maar $80M capex heeft, genereert slechts $20M echte kasstroom.' },
    ]},
    { id: 's6-4', title: 'Marges interpreteren & benchmarken', blocks: [
      { t:'p', html:'Marges zeggen niets zonder context. Vergelijk altijd: (1) historisch (trend), (2) met sector-peers, (3) met de eigen guidance.' },
      { t:'table', headers:['Marge','Formule','Wat het meet'],
        rows:[
          ['Brutomarge','(Omzet − COGS) / Omzet','Kern-productprofitabiliteit, pricing power'],
          ['EBITDA-marge','EBITDA / Omzet','Operationeel resultaat voor kapitaalstructuur'],
          ['EBIT-marge','EBIT / Omzet','Operationeel resultaat na D&A'],
          ['Nettomarge','Nettowinst / Omzet','Eindresultaat na rente en belasting'],
          ['FCF-marge','FCF / Omzet','Echte cash-generatie per euro omzet'],
        ]},
      { t:'callout', s:'info', ico:'📈', html:'<strong>Margeverbetering</strong> is een van de krachtigste winstdrijvers. Als omzet 10% groeit en de EBIT-marge stijgt van 15% naar 18%, stijgt de EBIT met 32% (niet 10%). Zoek naar bedrijven die structureel marges kunnen verbeteren via schaal of mix-shift naar hogere-marge producten.' },
    ]},
  ],
},

{
  id: 7, emoji: '⚖️', title: 'Balansanalyse',
  tags: ['Balans', 'Schulden', 'Werkkapitaal'], readTime: '22 min',
  sections: [
    { id: 's7-1', title: 'De structuur van de balans', blocks: [
      { t:'formula', label:'Basisidentiteit balans',
        main:'<span class="fv">Activa (Assets)</span> = <span class="fv">Schulden (Liabilities)</span> + <span class="fv">Eigen vermogen (Equity)</span>',
        note:'Deze identiteit geldt altijd — de balans balanceert altijd.\nActiva = wat het bedrijf bezit of controleert\nSchulden = externe financiering (crediteuren, obligaties, leningen)\nEigen vermogen = residuwaarde voor aandeelhouders' },
      { t:'table', headers:['Activa (links)','Passiva (rechts)'],
        rows:[
          ['Vlottende activa (current assets)','Kortetermijnschulden (<1 jaar)'],
          ['  - Liquide middelen (cash)','  - Crediteuren (AP)'],
          ['  - Debiteuren (accounts receivable)','  - Kortlopende leningen'],
          ['  - Voorraden (inventory)','  - Nog te betalen kosten'],
          ['Vaste activa (non-current assets)','Langetermijnschulden (>1 jaar)'],
          ['  - Materiële vaste activa (PP&E)','  - Obligaties, bankschulden'],
          ['  - Immateriële activa (IP, merken)','  - Uitgestelde belastingen'],
          ['  - Goodwill','Eigen vermogen'],
          ['  - Financiële vaste activa','  - Aandelenkapitaal + reserves'],
        ]},
    ]},
    { id: 's7-2', title: 'Goodwill & immateriële activa', blocks: [
      { t:'p', html:'Goodwill ontstaat bij overnames: het bedrag dat boven de boekwaarde van het overgenomen bedrijf betaald wordt. Het <em>oogt</em> als een actief maar is in werkelijkheid een historisch overname-premium dat niets zegt over toekomstige waarde.' },
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Goodwill red flag:</strong> Goodwill > 40% van totale activa betekent dat het bedrijf veel overnames gedaan heeft tegen hoge premies. Als deze bedrijven tegenvallen, volgen impairments (afschrijvingen van goodwill) die de nettowinst decimeren maar géén impact hebben op de kasstroom. Let hier op!' },
      { t:'p', html:'Immateriële activa (patenten, merken, licenties) zijn waardevol maar deels willekeurig gewaardeerd. Intern gecreëerde merken (Coca-Cola) staan <em>niet</em> op de balans — alleen aangekochte.' },
    ]},
    { id: 's7-3', title: 'Werkkapitaal & liquiditeit', blocks: [
      { t:'formula', label:'Netto Werkkapitaal',
        main:'NWC = <span class="fv">Vlottende activa</span> − <span class="fv">Kortlopende schulden</span>\n\nof preciezer:\n\nNWC = <span class="fv">Debiteuren</span> + <span class="fv">Voorraden</span> − <span class="fv">Crediteuren</span>',
        note:'Positief NWC = bedrijf heeft kapitaal vastgebonden in operaties → cash-intensief\nNegatief NWC = bedrijf werkt met klantengeld vóór betaling aan leveranciers → cash-generatief\nVoorbeelden met negatief NWC: Amazon (betaald na levering), supermarkten (contant bij aankoop)' },
      { t:'formula', label:'Current Ratio & Quick Ratio',
        main:'Current Ratio = <span class="fv">Vlottende activa</span> / <span class="fv">Kortlopende schulden</span>\n\nQuick Ratio = (<span class="fv">Cash</span> + <span class="fv">Debiteuren</span>) / <span class="fv">Kortlopende schulden</span>',
        note:'Current Ratio > 1.5 = comfortabel\nQuick Ratio < 1 = potentieel liquiditeitsprobleem\nContext is alles: retailer heeft lage ratio normaal; industriebedrijf met lage ratio = gevaar' },
    ]},
    { id: 's7-4', title: 'Schuldanalyse & solvabiliteit', blocks: [
      { t:'formula', label:'Debt/Equity & Net Debt/EBITDA',
        main:'D/E = <span class="fv">Totale schulden</span> / <span class="fv">Eigen vermogen</span>\n\nNet Debt = <span class="fv">Totale schulden</span> − <span class="fv">Cash & equivalenten</span>\n\nNet Debt / EBITDA = <span class="fv">Net Debt</span> / <span class="fv">EBITDA</span>',
        note:'Net Debt/EBITDA < 2x = comfortabel voor stabiel bedrijf\nNet Debt/EBITDA > 4x = hoge leverage, verhoogd risico bij omzetdaling\nCyclische bedrijven: houd leverage lager, ze zijn kwetsbaarder in recessie' },
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Interest Coverage Ratio (ICR) = EBIT / Rentekosten.</strong> Wettelijk minimum voor covenant is vaak 2x. Onder 1.5x dreigt herfinanciering. Controleer dit ALTIJD voor leveraged bedrijven.' },
    ]},
  ],
},

{
  id: 8, emoji: '💰', title: 'Kasstroomanalyse',
  tags: ['FCF', 'CapEx', 'Cashflow'], readTime: '20 min',
  sections: [
    { id: 's8-1', title: 'De drie kasstroomcategorieën', blocks: [
      { t:'table', headers:['Categorie','Inhoud','Positief = goed?'],
        rows:[
          ['Operationele kasstroom (CFO)','Cash uit kernactiviteiten. Inclusief werkkapitaalwijzigingen.','Ja — dit is de motor'],
          ['Investeringskasstroom (CFI)','CapEx, overnames, desinvesteringen, financiële beleggingen','Negatief is normaal bij groeiend bedrijf'],
          ['Financieringskasstroom (CFF)','Dividenden, aandelenemissies, terugkopen, leningen','Afhankelijk van strategie'],
        ]},
      { t:'p', html:'<strong>Gouden regel:</strong> op lange termijn moet CFO positief en groeiend zijn. Bedrijven die chronisch negatieve CFO hebben terwijl ze winst rapporteren, zijn een rode vlag.' },
    ]},
    { id: 's8-2', title: 'Operationele kasstroom vs nettowinst', blocks: [
      { t:'formula', label:'Indirecte methode — CFO opbouw',
        main:'<span class="fv">Nettowinst</span>\n+ <span class="fv">Afschrijvingen & amortisatie (D&A)</span>  ← non-cash kosten\n+ <span class="fv">Stock-based compensation (SBC)</span>  ← non-cash\n± <span class="fv">Werkkapitaalwijzigingen</span>\n  − Stijging debiteuren (meer geld buiten)\n  − Stijging voorraden\n  + Stijging crediteuren (meer geld binnen)\n<span class="fa">= Operationele kasstroom (CFO)</span>',
        note:'CFO / Nettowinst = accrual ratio. Dicht bij 1.0 = gezond. Ver eronder = agressieve boekhoudkeuzes.' },
    ]},
    { id: 's8-3', title: 'Vrije Kasstroom (FCF)', blocks: [
      { t:'p', html:'FCF is de meest relevante cash-maatstaf voor de aandeelhouder — het is wat er écht overblijft na alle investeringen.' },
      { t:'formula', label:'Vrije Kasstroom — twee definities',
        main:'FCF (basic) = <span class="fv">CFO</span> − <span class="fv">CapEx</span>\n\nFCF to Equity (FCFE) = <span class="fv">FCF</span> − <span class="fv">Netto schuld terugbetaling</span> + <span class="fv">Netto nieuwe leningen</span>',
        note:'FCF is de cash beschikbaar voor: dividenden, buybacks, schuld aflossen, overnames\nFCF yield = FCF / Marktkapitalisatie. >5% is aantrekkelijk bij stabiel bedrijf.' },
      { t:'h3', text:'Maintenance CapEx vs Growth CapEx' },
      { t:'p', html:'CapEx bestaat uit twee componenten: <strong>maintenance capex</strong> (om bestaande activa operationeel te houden) en <strong>growth capex</strong> (uitbreiding van capaciteit). Bedrijven rapporteren dit zelden apart — je moet het zelf schatten.' },
      { t:'callout', s:'tip', ico:'💡', html:'<strong>Buffett\'s trick:</strong> Een bedrijf dat 10% van zijn waarde jaarlijks in maintenance capex moet steken om op dezelfde plek te blijven is fundamenteel slechter dan een bedrijf met 2% maintenance capex. Dit is de kern van het "capital-light" businessmodel-voordeel.' },
    ]},
    { id: 's8-4', title: 'Cash Conversion & kwaliteit van winst', blocks: [
      { t:'formula', label:'Cash Conversion Ratio',
        main:'CCR = <span class="fv">Operationele kasstroom</span> / <span class="fv">EBITDA</span>\n\nof:\n\nCCR = <span class="fv">FCF</span> / <span class="fv">Nettowinst</span>',
        note:'CCR > 0.9 = hoge kwaliteitswinst (weinig verschil boekhouding vs cash)\nCCR < 0.6 = agressieve accruals — graaf hierop in\nSaaS-bedrijven met deferred revenue hebben soms CCR > 1 (cash ontvangen vóór omzet erkend)' },
    ]},
  ],
},

{
  id: 9, emoji: '📐', title: 'Financiële Ratio\'s',
  tags: ['Ratio\'s', 'ROE', 'Liquiditeit'], readTime: '28 min',
  sections: [
    { id: 's9-1', title: 'Winstgevendheidsratio\'s', blocks: [
      { t:'formula', label:'Return on Equity (ROE)',
        main:'ROE = <span class="fv">Nettowinst</span> / <span class="fv">Gemiddeld eigen vermogen</span> × <span class="fa">100%</span>',
        note:'ROE > 15% = sterk. ROE > 20% = uitzonderlijk.\nPROBLEEM: hoge schulden blazen ROE kunstmatig op — check altijd ook ROIC' },
      { t:'formula', label:'Return on Invested Capital (ROIC)',
        main:'ROIC = <span class="fv">NOPAT</span> / <span class="fv">Geïnvesteerd Kapitaal</span> × <span class="fa">100%</span>\n\nwaar NOPAT = <span class="fv">EBIT</span> × <span class="fo">(1 − belastingpercentage)</span>\nGeïnvesteerd Kapitaal = <span class="fv">Eigen Vermogen</span> + <span class="fv">Netto Schuld</span>',
        note:'ROIC > WACC = het bedrijf créeert waarde\nROIC < WACC = het bedrijf vernietigt waarde (ook bij positieve winst!)\nDe absolute benchmark voor kwaliteitsanalyse. Zoek ROIC > 15% structureel.' },
      { t:'formula', label:'Return on Assets (ROA)',
        main:'ROA = <span class="fv">Nettowinst</span> / <span class="fv">Gemiddeld totale activa</span> × <span class="fa">100%</span>',
        note:'Minder vertekend door leverage dan ROE, maar minder relevant dan ROIC\nBank: ROA van 1% is al sterk. Industrieel: 5%+ verwacht.' },
      { t:'p', html:'<strong>DuPont-decompositie van ROE</strong> — begrijp wáár de ROE vandaan komt:' },
      { t:'formula', label:'DuPont Analyse',
        main:'ROE = <span class="fv">Nettomarge</span> × <span class="fv">Asset Turnover</span> × <span class="fv">Leverage (A/E)</span>\n\n   = (<span class="fv">NI/Omzet</span>) × (<span class="fv">Omzet/Activa</span>) × (<span class="fv">Activa/EV</span>)',
        note:'Drie routes naar hoge ROE:\n1. Hoge nettomarge (premium brands: LVMH, Hermes)\n2. Hoge asset turnover (lage marges, hoog volume: Walmart, Aldi)\n3. Hoge leverage (banken, private equity — hogere risico)' },
    ]},
    { id: 's9-2', title: 'Liquiditeitsratio\'s', blocks: [
      { t:'table', headers:['Ratio','Formule','Benchmark','Interpretatie'],
        rows:[
          ['Current Ratio','Vlottende activa / Kortlopende schulden','1.5 – 3.0','< 1 = mogelijke liquiditeitsproblemen'],
          ['Quick Ratio','(Cash + Debiteuren) / Kortlopende schulden','1.0 – 2.0','Sluit voorraden uit — conservatiever'],
          ['Cash Ratio','Cash / Kortlopende schulden','0.5 – 1.0','Absolute minimum liquiditeit'],
          ['Operating Cash Ratio','CFO / Kortlopende schulden','>1.0','Beste maatstaf: gebruik werkelijke cash'],
        ]},
      { t:'callout', s:'info', ico:'📌', html:'Context is alles bij liquiditeit. Een supermarkt met een Current Ratio van 0.8 kan perfect gezond zijn (snelle voorraadomzet, contante betalingen). Een industriebedrijf met Current Ratio van 0.9 kan in ernstige problemen verkeren.' },
    ]},
    { id: 's9-3', title: 'Solvabiliteitsratio\'s', blocks: [
      { t:'table', headers:['Ratio','Formule','Benchmark'],
        rows:[
          ['Debt/Equity ratio','Totale schulden / Eigen vermogen','< 1.0 voor stabiel bedrijf'],
          ['Net Debt/EBITDA','(Schulden − Cash) / EBITDA','< 2x comfortabel, >4x gevaarlijk'],
          ['Interest Coverage Ratio','EBIT / Rentekosten','> 3x veilig, < 1.5x gevaarlijk'],
          ['Equity ratio','Eigen vermogen / Totale activa','> 40% solide; banken uitzonderlijk'],
        ]},
    ]},
    { id: 's9-4', title: 'Efficiëntieratio\'s', blocks: [
      { t:'formula', label:'Asset Turnover & Inventory Turnover',
        main:'Asset Turnover = <span class="fv">Omzet</span> / <span class="fv">Gem. totale activa</span>\n\nInventory Turnover = <span class="fv">COGS</span> / <span class="fv">Gem. voorraden</span>\n\nDays Inventory Outstanding (DIO) = <span class="fa">365</span> / <span class="fv">Inventory Turnover</span>',
        note:'DIO = 10 → voorraden roteren elke 10 dagen. DIO = 120 → lang gebonden kapitaal\nRetail: DIO 20–30. Vliegtuigbouwer: DIO 300+ (normaal voor grote projecten)' },
      { t:'formula', label:'DSO & DPO — Cash Conversion Cycle',
        main:'DSO = <span class="fv">Debiteuren</span> / (<span class="fv">Omzet</span> / <span class="fa">365</span>)  ← hoe snel betalen klanten?\n\nDPO = <span class="fv">Crediteuren</span> / (<span class="fv">COGS</span> / <span class="fa">365</span>)  ← hoe lang uitstellen we betaling?\n\nCCC = <span class="fv">DIO</span> + <span class="fv">DSO</span> − <span class="fv">DPO</span>',
        note:'CCC < 0 → negatief werkkapitaal (Amazon, Walmart) = groei zichzelf financiert\nCCC > 60 → significant kapitaal vastzittend in operaties' },
    ]},
  ],
},

{
  id: 10, emoji: '💎', title: 'Waardering — Intrinsieke Waarde',
  tags: ['DCF', 'Waardering', 'DDM'], readTime: '30 min',
  sections: [
    { id: 's10-1', title: 'DCF — Discounted Cash Flow', blocks: [
      { t:'p', html:'De DCF is de theoretisch meest correcte waarderingsmethode: de waarde van een bedrijf is gelijk aan de contante waarde van alle toekomstige vrije kasstromen. Ze vereist echter toekomstschattingen, waardoor kleine aannames grote waarde-impact hebben.' },
      { t:'formula', label:'DCF Basisformule',
        main:'Intrinsieke waarde = Σ <span class="fv">FCF_t</span> / <span class="fo">(1 + WACC)^t</span>  (t=1→n)\n\n            + <span class="fv">Terminal Value</span> / <span class="fo">(1 + WACC)^n</span>\n\nTerminal Value = <span class="fv">FCF_{n+1}</span> / (<span class="fv">WACC</span> − <span class="fv">g</span>)\n\nAandelenwaarde = <span class="fv">Enterprise Value</span> − <span class="fv">Net Debt</span>',
        note:'WACC = gewogen gemiddelde kapitaalkost (cost of equity + cost of debt)\ng = eeuwigdurende groeivoet (realistisch: 2–3%, = langetermijn BBP-groei)\nn = expliciete projectieperiode (typisch 5–10 jaar)' },
      { t:'h3', text:'Stap-voor-stap DCF' },
      { t:'num', items:[
        '<strong>FCF projecteren:</strong> Schat omzetgroei, marges, capex en werkkapitaalvereisten voor 5–10 jaar.',
        '<strong>WACC berekenen:</strong> Cost of Equity (CAPM) + Cost of Debt × (1 − belasting), gewogen naar kapitaalstructuur.',
        '<strong>Terminal Value berekenen:</strong> FCF in jaar n+1 / (WACC − g). TV = vaak 60–80% van totale waarde — wees hier kritisch.',
        '<strong>Alles disconteren:</strong> Elk jaar-FCF terugrekenen naar vandaag met factor 1/(1+WACC)^t.',
        '<strong>Enterprise Value → Equity Value:</strong> Trek Net Debt af; deel door aandelen voor intrinsieke waarde per aandeel.',
        '<strong>Sensitivity analyse:</strong> Varieer WACC ±1% en groei ±1% om het waardebereik te kennen.',
      ]},
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Garbage in, garbage out.</strong> Een DCF geeft je precieze zekerheid over een onzekere toekomst. Gebruik hem als denkraam, niet als calculator van de "exacte" waarde. De terminal value maakt >60% van de waarde uit — kleine aanpassingen = grote uitkomstverschillen.' },
    ]},
    { id: 's10-2', title: 'WACC Berekening', blocks: [
      { t:'formula', label:'WACC',
        main:'WACC = <span class="fv">E/(E+D)</span> × <span class="fv">Ke</span> + <span class="fv">D/(E+D)</span> × <span class="fv">Kd</span> × <span class="fo">(1 − t)</span>\n\nKe (CAPM) = <span class="fv">Rf</span> + <span class="fv">β</span> × (<span class="fv">Rm</span> − <span class="fv">Rf</span>)',
        note:'Rf = risicovrije rente (10-jaars staatsobligatie)\nβ = bèta (gevoeligheid voor marktbewegingen; >1 = meer volatiel dan markt)\nRm − Rf = equity risk premium (historisch ~5–6% in Europa)\nKd = gemiddelde rentekost op schuld (na belastingvoordeel)' },
    ]},
    { id: 's10-3', title: 'Dividend Discount Model (DDM)', blocks: [
      { t:'p', html:'Het DDM waardeert een aandeel op basis van de contante waarde van alle toekomstige dividenden. Geschikt voor stabiele dividendbetaalde bedrijven (utilities, verzekeringsmaatschappijen, rijpe consumentengoederen).' },
      { t:'formula', label:'Gordon Growth Model (DDM)',
        main:'P = <span class="fv">D₁</span> / (<span class="fv">Ke</span> − <span class="fv">g</span>)\n\nwaar D₁ = <span class="fv">D₀</span> × <span class="fo">(1 + g)</span>',
        note:'D₀ = huidig dividend per aandeel\ng = verwachte dividendgroei (perpetueel)\nKe = vereist rendement aandeelhouder\nBeperking: alleen bruikbaar als g < Ke (anders oneindig!)\nBruikbaar voor: utilities, REITs, rijpe consumentengoederen' },
    ]},
    { id: 's10-4', title: 'Earnings Power Value & Sum-of-Parts', blocks: [
      { t:'h3', text:'Earnings Power Value (EPV)' },
      { t:'p', html:'EPV = duurzame, genormaliseerde winst / WACC. Geen groei ingeprijsd — ideaal als conservatieve bodem.' },
      { t:'formula', label:'EPV',
        main:'EPV = <span class="fv">Genormaliseerd EBIT</span> × <span class="fo">(1 − belasting)</span> / <span class="fv">WACC</span>',
        note:'Als marktwaarde < EPV → markt geeft groei een negatieve waarde = potentieel koopmoment\nGebruikt door Bruce Greenwald (Columbia) als conservatieve waarderingsanker' },
      { t:'h3', text:'Sum-of-the-Parts (SOTP)' },
      { t:'p', html:'Waardeer elke divisie of segment apart (met eigen multiple of DCF) en tel ze op. Ideaal voor conglomeraten (Berkshire, Alphabet, Samsung). Onthult "hidden value" als de markt het geheel goedkoper waardeert dan de som der delen.' },
    ]},
  ],
},

{
  id: 11, emoji: '🔢', title: 'Multiple-analyse',
  tags: ['Multiples', 'P/E', 'EV/EBITDA'], readTime: '24 min',
  sections: [
    { id: 's11-1', title: 'Enterprise Value vs Marktkapitalisatie', blocks: [
      { t:'formula', label:'Enterprise Value',
        main:'EV = <span class="fv">Marktkapitalisatie</span> + <span class="fv">Netto Schuld</span> + <span class="fv">Minderheidsbelangen</span> − <span class="fv">Associates</span>\n\n   = <span class="fv">Market Cap</span> + <span class="fv">Schulden</span> − <span class="fv">Cash</span>',
        note:'EV = de prijs die een koper voor het gehele bedrijf (inclusief schulden) betaalt\nGebruik EV voor multiples die schuld-neutraal zijn (EV/EBIT, EV/EBITDA, EV/FCF)\nGebruik Market Cap voor equity-multiples (P/E, P/B, P/FCF)' },
    ]},
    { id: 's11-2', title: 'Prijs-gebaseerde multiples', blocks: [
      { t:'table', headers:['Multiple','Formule','Voordeel','Nadeel / Let op'],
        rows:[
          ['P/E','Koers / EPS','Meest gebruikt, makkelijk vergelijkbaar','Kan negatief zijn. Erg gevoelig voor boekhoudkeuzes.'],
          ['P/E Forward','Koers / Verwacht EPS volgend jaar','Toekomstgericht','Gebaseerd op analisten-consensus — kan fout zijn'],
          ['PEG','P/E / EPS-groeipercentage','Corrigeert P/E voor groei','Gevoelig voor groei-aanname, zegt niets over kwaliteit'],
          ['P/B','Koers / Boekwaarde per aandeel','Goed voor banken, waardediepe sectoren','Waardeloos voor asset-light bedrijven (software)'],
          ['P/S','Koers / Omzet per aandeel','Bruikbaar als bedrijf verlieslatend is','Geen rekening met marges — gevaarlijk op zichzelf'],
          ['P/FCF','Koers / FCF per aandeel','Kasstroom-gebaseerd, moeilijker te manipuleren','FCF volatiel door capex-timing'],
        ]},
    ]},
    { id: 's11-3', title: 'EV-gebaseerde multiples', blocks: [
      { t:'table', headers:['Multiple','Formule','Wanneer gebruiken'],
        rows:[
          ['EV/EBITDA','EV / EBITDA','M&A, kapitaal-intensieve sectoren, vergelijking over kapitaalstructuren'],
          ['EV/EBIT','EV / EBIT','Beter dan EV/EBITDA als capex significant is (telecom, industrie)'],
          ['EV/FCF','EV / Vrije kasstroom','Beste cash-gebaseerde multiple; gebruik voor kwaliteitsbedrijven'],
          ['EV/Sales','EV / Omzet','Verlieslatende groeibedrijven; riskant'],
          ['EV/NOPAT','EV / NOPAT','Schuld-neutrale return-maatstaf'],
        ]},
      { t:'callout', s:'tip', ico:'🎯', html:'<strong>EV/FCF is de superieure multiple</strong> voor kwaliteitsanalyse. FCF is moeilijker te manipuleren dan winst. Een bedrijf met EV/FCF van 20x = 5% FCF-yield. Vergelijk met de risicovrije rente om te beoordelen of dat redelijk is.' },
    ]},
    { id: 's11-4', title: 'Comparable Company Analysis (ComparCo)', blocks: [
      { t:'p', html:'Multiples zijn relatief — je vergelijkt met <em>gelijkwaardige</em> bedrijven (peers). Stel een peer group op van bedrijven met vergelijkbaar businessmodel, groeiprofiel en risicoklasse.' },
      { t:'num', items:[
        'Selecteer 5–10 echte peers (zelfde sector, vergelijkbare marge- en groeiprofiel).',
        'Bereken trailing en forward multiples voor elk (P/E, EV/EBITDA, EV/FCF).',
        'Bepaal de mediaan van de peer group.',
        'Beoordeel of het doelbedrijf boven of onder de mediaan noteert, en waarom.',
        'Rechtvaardigt de kwaliteitsdifferentiëring de premium of discount?',
      ]},
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Relatieve waardering valt of staat met je peer-selectie.</strong> Als de hele sector overgewaardeerd is, lijkt een relatief goedkoop aandeel aantrekkelijk — maar beide zijn duur. Combineer altijd met absolute waardering (DCF, EPV).' },
    ]},
  ],
},

{
  id: 12, emoji: '📈', title: 'Groei Analyseren',
  tags: ['Groei', 'CAGR', 'Compounders'], readTime: '20 min',
  sections: [
    { id: 's12-1', title: 'Organische groei vs acquisities', blocks: [
      { t:'table', headers:['Type groei','Kwaliteit','Signalen'],
        rows:[
          ['Organisch — volumes','Hoog: meer eenheden verkocht','Market share gains, nieuwe markten'],
          ['Organisch — prijs','Hoog: pricing power','Inflatie doorberekend + volumebehoud'],
          ['Acquisities — bolt-on','Gemiddeld: kleine aanvulling','Synergierealisatie controleren'],
          ['Acquisities — transformatief','Laag-gemiddeld: hoog integratierisico','Goodwill stijging, integratieproblemen'],
          ['Valuta-effect','Niet duurzaam: wisselkoers effect','Kijk altijd naar constant-currency groei'],
        ]},
      { t:'callout', s:'tip', ico:'💡', html:'Rapportage-tip: Bedrijven vermelden vaak "organic growth" in hun earnings release. Vergelijk altijd reported growth met organic growth. Groot verschil = acquisitie-afhankelijke groei — beoordeel de overnamehistorie kritisch.' },
    ]},
    { id: 's12-2', title: 'Operating Leverage & Margeverbetering', blocks: [
      { t:'p', html:'Een van de krachtigste groeimechanismen: omzetgroei die sneller winst oplevert dan ze kosten verhoogt. Dit heet operating leverage — bij vaste kostenstructuur daalt de kostenratio als omzet stijgt.' },
      { t:'formula', label:'Incremental Operating Margin',
        main:'Incremental Margin = Δ<span class="fv">EBIT</span> / Δ<span class="fv">Omzet</span> × <span class="fa">100%</span>',
        note:'Als een SaaS-bedrijf bij 30% omzetgroei een incremental margin van 45% heeft:\n→ elke extra €100 omzet levert €45 extra EBIT op\n→ de EBIT groeit sneller dan de omzet → multiple expansion + absolute winstgroei' },
    ]},
    { id: 's12-3', title: 'Compounders & CAGR', blocks: [
      { t:'p', html:'Een <strong>compounder</strong> is een bedrijf dat jaar na jaar zijn intrinsieke waarde duurzaam laat groeien via hoge ROIC op ingezet kapitaal. Het compound-effect werkt exponentieel over lange perioden.' },
      { t:'formula', label:'CAGR — Compound Annual Growth Rate',
        main:'CAGR = (<span class="fv">Eindwaarde</span> / <span class="fv">Beginwaarde</span>)<span class="fa">^(1/n)</span> − 1',
        note:'CAGR van 15% over 10 jaar → waarde verviervoudigt (1.15^10 = 4.05)\nCAGR van 20% over 10 jaar → waarde × 6.2\nRegel van 72: 72 / groeipercentage = jaren om te verdubbelen' },
      { t:'callout', s:'ok', ico:'🚀', html:'<strong>Compounders identificeren:</strong> ROIC > 20% structureel, FCF conversie > 80%, uitbreidbare moat, managementteam met lange termijn visie, reinvestering in de business i.p.v. destructieve overnames.' },
    ]},
    { id: 's12-4', title: 'Rule of 40 — SaaS-specifiek', blocks: [
      { t:'formula', label:'Rule of 40 (SaaS)',
        main:'Rule of 40 = <span class="fv">Omzetgroei %</span> + <span class="fv">EBIT-marge %</span>\n\n  of:\n\nRule of 40 = <span class="fv">Omzetgroei %</span> + <span class="fv">FCF-marge %</span>',
        note:'> 40 = gezond SaaS-bedrijf\n> 60 = top-tier kwaliteit (Veeva, HubSpot historisch)\n< 40 = groei en/of winstgevendheid onvoldoende\nWoW: bij hoge groei telt de groeibijdrage meer; bij volwassenheid telt FCF-marge meer' },
    ]},
  ],
},

{
  id: 13, emoji: '👔', title: 'Managementanalyse',
  tags: ['Management', 'Capital Allocation', 'Insider'], readTime: '18 min',
  sections: [
    { id: 's13-1', title: 'Capital Allocation — de cruciale skill', blocks: [
      { t:'p', html:'Een CEO\'s primaire job is <strong>kapitaalallocatie</strong>: de cash die het bedrijf genereert zo inzetten dat het de hoogste waarde per aandeel creëert. Slechte allocatoren vernietigen waarde; goede compounderen ze.' },
      { t:'table', headers:['Kapitaalbestemming','Wanneer waarde-creatief','Wanneer waarde-vernietigend'],
        rows:[
          ['Organische R&D / investeringen','ROIC op investering > WACC','Laag-return projecten "empire building"'],
          ['Acquisities','Goede prijs, strategische fit, integratiekracht','Trofee-overnames, goodwill-opblazen'],
          ['Dividenden','Wanneer reinvestering niet beter kan','Dividend bij hoge schuld of slechte cash generatie'],
          ['Aandeleninkoop','Koers < intrinsieke waarde','Inkoop bij overgewaardeerde koers'],
          ['Schuld aflossen','Bij hoge leverage of rentedaling','Wanneer ROIC op reinvestering hoger is'],
        ]},
      { t:'callout', s:'tip', ico:'💡', html:'<strong>De beste CEO-test:</strong> lees 5 jaar aan aandeelhoudersletters terug. Kijkt hij eerlijk naar mislukkingen? Geeft hij toe dat hij te veel betaald heeft bij een overname? Communiceert hij consistent over zijn langetermijnstrategie? Eerlijkheid en consistentie zijn zeldzame deugden.' },
    ]},
    { id: 's13-2', title: 'Insider Ownership & transacties', blocks: [
      { t:'p', html:'Wanneer de CEO significant bezit in het bedrijf, zijn belangen veel beter gealigneerd met aandeelhouders. Insiders kennen het bedrijf het best — hun aankopen en verkopen zijn informatief.' },
      { t:'table', headers:['Signaal','Interpretatie'],
        rows:[
          ['CEO bezit > 5–10% aandelen','Sterke alignment; motivatie om lange termijn te denken'],
          ['Meerdere insiders kopen open markt aandelen','Sterk positief signaal — niemand koopt "voor het dividend"'],
          ['Insider verkoopt kleine hoeveelheid','Normaal — diversificatie, belastingen, persoonlijke noden'],
          ['Grote insider verkoopgolf door meerdere executives','Rode vlag — mogelijk overgewaardeerd of problemen in aantocht'],
          ['Opties maar geen gewone aandelen','Slechtere alignment — opties profiteren van koersstijging maar niet van daling'],
        ]},
    ]},
    { id: 's13-3', title: 'Beloning & CEO-beoordeling', blocks: [
      { t:'bullets', items:[
        '<strong>Eenvoudige, heldere beloningsstructuur</strong>: bonus gekoppeld aan ROIC, FCF per aandeel of intrinsieke-waardecreatie — niet aan EPS of revenue (te makkelijk te manipuleren).',
        '<strong>Long-term orientation</strong>: zijn aandelenbeloningen (RSU/opties) geclifd over 4–5 jaar? Of incasseerbaar na 1 jaar?',
        '<strong>CEO-duur</strong>: beoordelingen op 5–10 jaar track record, niet op 1 kwartaal earnings. Hoe presteert het team door cycli heen?',
        '<strong>Aanwervingshistorie</strong>: bouwt de CEO een sterk team of omringt hij zich met ja-knikkers?',
        '<strong>Externe vs interne CEO</strong>: industriestudies tonen dat interne CEO\'s gemiddeld beter presteren — kennen de cultuur en operaties.',
      ]},
    ]},
  ],
},

{
  id: 14, emoji: '🏰', title: 'Concurrentievoordeel (Moats)',
  tags: ['Moat', 'Netwerkeffecten', 'Switching costs'], readTime: '22 min',
  sections: [
    { id: 's14-1', title: 'Netwerkeffecten — de krachtigste moat', blocks: [
      { t:'p', html:'Netwerkeffecten treden op wanneer een product waardevoller wordt naarmate meer mensen het gebruiken. Ze creëren een self-reinforcing loop die extreem moeilijk te doorbreken is.' },
      { t:'table', headers:['Type netwerk','Hoe werkt het?','Voorbeeld'],
        rows:[
          ['Direct (2-sided)','Meer gebruikers = meer waarde voor alle gebruikers','WhatsApp, Telefoon'],
          ['Platform / marktplaats','Meer kopers trekt meer verkopers; omgekeerd','Airbnb, eBay, Visa'],
          ['Data-netwerk','Meer gebruikers = meer data = beter product','Google Search, Spotify Discover'],
          ['Werkplek-netwerk','Collega\'s gebruiken = jij moet ook','Slack, LinkedIn, Excel'],
        ]},
      { t:'callout', s:'ok', ico:'✅', html:'<strong>Sterkste netwerkeffecten:</strong> platforms waar de waarde exponentieel (niet lineair) stijgt met netwerkomvang. WhatsApp: elke nieuwe gebruiker maakt het nuttig voor alle bestaande gebruikers. Bij Airbnb stijgt de waarde voor huurders naarmate het aanbod stijgt — en omgekeerd.' },
    ]},
    { id: 's14-2', title: 'Switching Costs', blocks: [
      { t:'p', html:'Switching costs zijn de (directe of indirecte) kosten die een klant maakt bij het wisselen van leverancier. Ze beschermen de klantenbasis ook als de concurrent goedkoper of beter is.' },
      { t:'bullets', items:[
        '<strong>Financieel</strong>: contractuele boetes, implementatiekosten nieuwe systemen. SAP ERP-migratie: miljoenen euro\'s.',
        '<strong>Tijdsinvestering / leercurve</strong>: medewerkers opnieuw trainen, workflows aanpassen. Bloomberg Terminal: 6 maanden leertraject.',
        '<strong>Data lock-in</strong>: historische data, formats, integraties. Salesforce CRM: 5 jaar historische klantdata.',
        '<strong>Procesinbedding</strong>: product is verweven in kritische processen. ASML machines: complete fab is rondom hun systemen gebouwd.',
      ]},
      { t:'formula', label:'Switching Cost meten — Churn Rate',
        main:'Churn Rate = <span class="fv">Verloren klanten (periode)</span> / <span class="fv">Totale klanten (begin periode)</span> × <span class="fa">100%</span>',
        note:'Churn < 5% per jaar = hoge switching costs\nChurn > 15% = zwakke klantenbinding\nNet Revenue Retention (NRR) > 120% = klanten groeien méér dan ze churnen → zeer sterk signaal' },
    ]},
    { id: 's14-3', title: 'Schaalvoordelen & Cost Leadership', blocks: [
      { t:'p', html:'Schaalvoordelen betekenen dat kosten per eenheid dalen naarmate het volume stijgt. Ze ontstaan door vaste-kostenspreiding, inkoopkracht en leereffecten.' },
      { t:'table', headers:['Type schaalvoordeel','Hoe werkt het?','Voorbeeld'],
        rows:[
          ['Productie-schaal','Hogere volumes → lagere vaste kosten per eenheid','TSMC-chips, Boeing vliegtuigen'],
          ['Inkoopkracht','Groot volume → lager inkooptarief','Walmart, Amazon'],
          ['Netwerk-schaal','Distributie-infrastructuur amortiseert over meer volume','UPS, FedEx'],
          ['R&D-schaal','Hoge R&D-investering gespreid over meer omzet','ASML, Qualcomm'],
          ['Marketing-schaal','Merkbekendheid opgebouwd → lager CAC per klant','Coca-Cola, Apple'],
        ]},
    ]},
    { id: 's14-4', title: 'Duurzaamheid van de moat', blocks: [
      { t:'p', html:'Een moat is niet statisch. Technologie, regulering en gedragsverandering kunnen een moat erosie geven. Vraag jezelf altijd: is de moat over 10 jaar nog even sterk?' },
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Moat erosie signalen:</strong> stijgende churn rate, dalende ROIC over meerdere jaren, marktaandaalsverlies, verhoogde R&D van concurrenten, prijserosie in kernproduct, nieuwe technologie die het businessmodel disrupts (Kodak vs digitaal, Nokia vs smartphone).' },
      { t:'callout', s:'ok', ico:'🏰', html:'<strong>Sterkste moats over tijd:</strong> netwerkeffecten + switching costs tegelijk (Microsoft Office: iedereen gebruikt het, en je data zit erin), of immateriële activa + regulering (ratingbureaus Moody\'s en S&P: regulatoor verplicht gebruik ervan).' },
    ]},
  ],
},

{
  id: 15, emoji: '⭐', title: 'Kwaliteit van een Bedrijf',
  tags: ['Kwaliteit', 'ROIC', 'FCF'], readTime: '18 min',
  sections: [
    { id: 's15-1', title: 'De kwaliteitsscore opbouwen', blocks: [
      { t:'p', html:'Kwaliteitsbeleggen draait om het vinden van bedrijven die structureel superieur zijn aan hun concurrenten — en dit <em>lang</em> kunnen volhouden. De kwaliteitsscore combineert meerdere dimensies.' },
      { t:'table', headers:['Kwaliteitsdimensie','Hoe meten','Benchmark'],
        rows:[
          ['Hoge ROIC','NOPAT / Geïnvesteerd kapitaal','>15% structureel (>20% = uitzonderlijk)'],
          ['Hoge FCF-conversie','FCF / Nettowinst','>80% (FCF ≈ gerapporteerde winst)'],
          ['Pricing power','Bruto-marge stabiliteit in inflatietijd','Brutomarge stabiel of stijgend'],
          ['Lage kapitaalintensiteit','CapEx / Omzet','<5% voor asset-light; >15% = kapitaalintensief'],
          ['Recurrente omzet','Recurring Revenue / Totale omzet','>50% als sterk, >70% als excellent'],
          ['Lage schuld','Net Debt / EBITDA','<2x bij stabiele bedrijven'],
          ['Consistente margeverbetering','Marge-trend over 5 jaar','Stijgende trend zonder grote outliers'],
        ]},
    ]},
    { id: 's15-2', title: 'ROIC > WACC — de enige relevante test', blocks: [
      { t:'p', html:'Een bedrijf creëert economische waarde als en alleen als het rendement op geïnvesteerd kapitaal (ROIC) hoger is dan de kosten van dat kapitaal (WACC). Elk euro extra investering is waardecreërend als ROIC > WACC.' },
      { t:'formula', label:'Economic Profit / EVA',
        main:'Economic Profit = (<span class="fv">ROIC</span> − <span class="fv">WACC</span>) × <span class="fv">Geïnvesteerd Kapitaal</span>',
        note:'ROIC = 18%, WACC = 10% → Economic Profit = 8% op het geïnvesteerde kapitaal\nEen bedrijf met 5% winstmarge maar ROIC < WACC vernietigt aandeelhouderswaarde\nDit is waarom groei zonder kwaliteitsrendement schadelijk is' },
      { t:'callout', s:'ok', ico:'⭐', html:'<strong>De gouden combinatie:</strong> Hoge ROIC + groot herinvesteringspotentieel (grote reinvestment rate) = explosieve waardecreatie. Dit zijn de echte compounders: bedrijven die elke jaar hun voerafdruk uitbreiden tegen hoge ROIC. Microsoft, ASML, Visa, Moody\'s zijn historische voorbeelden.' },
    ]},
    { id: 's15-3', title: 'Lage kapitaalintensiteit als voordeel', blocks: [
      { t:'p', html:'Asset-light bedrijven (software, platforms, licenties) kunnen groeien zonder evenredige investeringen. Dit verhoogt FCF-conversie dramatisch.' },
      { t:'table', headers:['Model','Omzetgroei','CapEx vereist','FCF-expansie'],
        rows:[
          ['SaaS (bijv. Salesforce)','30%','Laag (servers, cloud)','Sterk',''],
          ['Platform (bijv. Airbnb)','25%','Minimaal (geen vastgoed)','Zeer sterk',''],
          ['Halffabrikant (bijv. ASML)','20%','Middelmatig (R&D)','Sterk',''],
          ['Staalproducent','10%','Hoog (fabrieken, onderhoud)','Zwak',''],
          ['Luchthaven','5%','Extreem hoog','Minimaal',''],
        ]},
    ]},
  ],
},

{
  id: 16, emoji: '⚡', title: 'Risicoanalyse',
  tags: ['Risico', 'Zwarte Zwanen', 'ESG'], readTime: '16 min',
  sections: [
    { id: 's16-1', title: 'Risicocategorieën', blocks: [
      { t:'table', headers:['Risicoklasse','Beschrijving','Voorbeeld','Mitigatie'],
        rows:[
          ['Operationeel risico','Operationele storingen, kwaliteitsproblemen','Boeing 737 MAX-crisis','Diversificatie productlijn, kwaliteitscontrole'],
          ['Financieel risico','Hoge schulden, liquiditeitsproblemen','Evergrande','Houd schuld laag; beoordeel interest coverage'],
          ['Politiek/regulatoir risico','Regelgeving wijzigt, nationaliseringen','EU-antitrustboetes op Google','Spreid geopolitiek; follow regulatory trends'],
          ['Concentratierisico','Afhankelijkheid van 1 klant of leverancier','Apple → TSMC','Check revenue by customer; zoek alternatieven'],
          ['Valutarisico','Wisselkoersschommelingen','ASML EUR vs USD-inkomsten','Hedging-strategie; natural hedge'],
          ['Disruptierisico','Nieuwe technologie maakt model obsoleet','Kodak, Blockbuster','Beoordeel technologische kwetsbaarheid'],
          ['ESG-risico','Milieu, sociaal of governance-problemen','Tabaksindustrie, fossiele brandstof','Integreer ESG in analyse'],
        ]},
    ]},
    { id: 's16-2', title: 'Zwarte zwanen & staartrisico\'s', blocks: [
      { t:'p', html:'Zwarte zwanen zijn extreme, moeilijk voorspelbare gebeurtenissen met grote impact. Nassim Taleb populariseerde het concept. Als belegger kun je ze niet voorspellen, maar je kunt ze wél weerstaan door robuuste portfolio-opbouw.' },
      { t:'bullets', items:[
        '<strong>Margin of Safety</strong>: koop ruim onder intrinsieke waarde. Als de analyse wrong is, verlies je minder.',
        '<strong>Diversificatie</strong>: spreiding over sectoren, geografieën, munteenheden vermindert staartrisico.',
        '<strong>Schuld vermijden</strong>: bedrijven met lage schuld overleven crises beter dan gehevende bedrijven.',
        '<strong>Kwaliteitsfilter</strong>: sterke moat + hoge FCF + lage schuld = defensief profiel ook in zwarte zwaan-scenario\'s.',
      ]},
      { t:'callout', s:'warn', ico:'🦢', html:'<strong>Robuust portfolio-denken:</strong> Stel je voor dat de markt 50% daalt morgen. Zijn al je bedrijven sterk genoeg om dit te overleven? Hebben ze genoeg cash? Zijn hun schulden beheersbaar? Zo niet — herbalanceer richting kwaliteit.' },
    ]},
  ],
},

{
  id: 17, emoji: '📚', title: 'Jaarverslagen Lezen',
  tags: ['10-K', 'Annual Report', 'MD&A'], readTime: '20 min',
  sections: [
    { id: 's17-1', title: 'Structuur van een jaarverslag', blocks: [
      { t:'table', headers:['Sectie','Inhoud','Prioriteit'],
        rows:[
          ['Letter to Shareholders','CEO\'s visie op het jaar, eerlijk of verkooppraat?','🔴 Hoog — onthult managementkwaliteit'],
          ['Business Description','Businessmodel, producten, markten','🔴 Hoog — begrijp het bedrijf'],
          ['Risk Factors','Alle risico\'s die het bedrijf vermeldt','🟡 Middel — let op nieuwe risico\'s vs vorig jaar'],
          ['MD&A (Management Discussion & Analysis)','Gedetailleerde bespreking resultaten + outlook','🔴 Hoog — kernanalyse'],
          ['Financial Statements','P&L, balans, kasstroomoverzicht','🔴 Hoog — de cijfers'],
          ['Notes to Financial Statements','Boekhoudkeuzes, details, off-balance','🔴 Hoog — hier verstopt zich de fraude'],
          ['Auditor\'s Report','Onafhankelijk oordeel accountant','🟡 Middel — check voor "going concern"'],
          ['Proxy Statement (DEF 14A)','CEO-beloning, bestuurssamenstellig','🟡 Middel — corporate governance'],
        ]},
    ]},
    { id: 's17-2', title: 'MD&A lezen als een detective', blocks: [
      { t:'p', html:'De MD&A is waar management de resultaten bespreekt in eigen woorden. Lees het kritisch — managers framen slecht nieuws altijd zo positief mogelijk.' },
      { t:'bullets', items:[
        '<strong>Vergelijk met vorig jaar:</strong> zijn dezelfde zinnen copy-paste van vorig jaar? Geen verandering in toon bij verslechterd resultaat?',
        '<strong>Let op taalverschuiving:</strong> vorig jaar "sterk groeiend", nu "solide prestaties", volgend jaar "uitdagende marktomstandigheden"?',
        '<strong>Zoek verklaringen voor margin-wijzigingen:</strong> als brutomarge daalde, wat was de oorzaak? Aanvaardbaar of structureel?',
        '<strong>Non-GAAP metrics:</strong> bedrijven definiëren hun eigen "adjusted" metrics. Controleer wat ze uitsluiten — zijn het écht eenmalige posten?',
        '<strong>Guidance:</strong> worden targets herhaald, verhoogd of discreet verminderd? Herhaaldelijk verlaagde targets = vertrouwen verliezen.',
      ]},
    ]},
    { id: 's17-3', title: 'Notes to Financial Statements — hier zit de informatie', blocks: [
      { t:'callout', s:'warn', ico:'🔍', html:'<strong>Professionele analysts lezen de notes als eerste.</strong> Hier staan: afschrijvingsbeleid, revenue recognition-methode, pensioenverplichtingen, operationele leases, off-balance entiteiten, garantieverplichtingen, litigatie-risico\'s en gerelateerde-partij transacties.' },
      { t:'bullets', items:[
        '<strong>Revenue recognition:</strong> wanneer erkent het bedrijf omzet? Agressieve erkenning = rode vlag.',
        '<strong>Segmentinformatie:</strong> winstverdeling per divisie. Welk segment groeit, welk krimpt?',
        '<strong>Off-balance verplichtingen:</strong> operating leases, take-or-pay contracten, garanties. Kunnen significante cashuitstromen vertegenwoordigen.',
        '<strong>Pensioenverplichtingen:</strong> underfunded pensioen = verborgen schuld. Tel dit bij de netto schuld op.',
        '<strong>Gerelateerde-partij transacties:</strong> verkoopt het bedrijf aan eigen management of familiebedrijven tegen marktprijzen?',
      ]},
    ]},
  ],
},

{
  id: 18, emoji: '📞', title: 'Earnings Calls Analyseren',
  tags: ['Earnings', 'Guidance', 'Tone'], readTime: '14 min',
  sections: [
    { id: 's18-1', title: 'Structuur van een earnings call', blocks: [
      { t:'num', items:[
        '<strong>Opening statement (CFO/CEO):</strong> kwartaalresultaten samengevat, key metrics. Altijd positief geframed.',
        '<strong>Financial details (CFO):</strong> gedetailleerde bespreking P&L, balans, cash.',
        '<strong>Guidance:</strong> verwachting voor volgend kwartaal of jaar. Cruciaal.',
        '<strong>Q&A sessie:</strong> analisten stellen vragen. Hier onthult management zich echt — let op ontwijking of ongemakkelijke antwoorden.',
      ]},
    ]},
    { id: 's18-2', title: 'Guidance interpreteren', blocks: [
      { t:'p', html:'Guidance is de toekomstverwachting die management geeft. Begrijp de dynamiek: managers geven liever lage guidance om te "beaten" dan hoge guidance om "te missen".' },
      { t:'table', headers:['Guidancetype','Wat het zegt','Hoe interpreteren'],
        rows:[
          ['Verhoging guidance','Business presteert beter dan verwacht','Positief signaal'],
          ['Bevestiging guidance','On track','Neutraal'],
          ['Verlaging guidance bij goede Q-cijfers','Toekomstig probleem in aantocht?','Red flag — graaf in'],
          ['Intrekking guidance','Grote onzekerheid — kán management niet voorspellen','Analyseer oorzaak'],
          ['Conservatieve initial guidance','Verwachten te beaten — management stijl','Normaal voor conservatieve bedrijven'],
        ]},
    ]},
    { id: 's18-3', title: 'Managementtoon & rode vlaggen in Q&A', blocks: [
      { t:'callout', s:'tip', ico:'👂', html:'<strong>Luister naar de toon, niet alleen de woorden.</strong> Wordt een simpele vraag lang en vaag beantwoord? Verwijzen ze naar "unique industry headwinds" voor iets wat een bedrijfsspecifiek probleem is? Zeggen ze "we\'re not going to comment on that" bij een legitieme vraag?' },
      { t:'bullets', items:[
        '<strong>Rode vlag — ontwijking:</strong> "We kijken naar alle strategische alternatieven" = vaak verkoop of herstructurering in aantocht.',
        '<strong>Rode vlag — terminologiewijziging:</strong> vroeger spraken ze over "omzetgroei", nu over "customer engagement metrics". Waarom de shift?',
        '<strong>Rode vlag — analisten-downgrade vlak na call:</strong> analisten horen soms nuances die retail-beleggers missen.',
        '<strong>Positief signaal:</strong> CEO erkent een fout openlijk en legt uit hoe het gecorrigeerd wordt. Eerlijkheid is zeldzaam en waardevol.',
        '<strong>Positief signaal:</strong> management verhoogt guidance na een uitdagend kwartaal. Vertrouwen in de pijplijn.',
      ]},
    ]},
  ],
},

{
  id: 19, emoji: '🚩', title: 'Red Flags & Boekhoudkundige Fraude',
  tags: ['Fraude', 'Red Flags', 'Wirecard'], readTime: '22 min',
  sections: [
    { id: 's19-1', title: 'De meest voorkomende red flags', blocks: [
      { t:'table', headers:['Red Flag','Wat het signaleert','Voorbeeld'],
        rows:[
          ['Winst groeit, CFO stagneert','Agressieve accruals, omzetmanipulatie','Enron, Luckin Coffee'],
          ['Sterk oplopende goodwill','Overnamedrang, empire building, latere impairments','WeWork, Steinhoff'],
          ['Hoge en stijgende SBC (stock-based comp.)','Verwatering aandeelhouders; échte kosten worden "adjusted away"','Veel techbedrijven'],
          ['Frequent wisselen van auditor','Conflicten over boekhoudkeuzes','Wirecard (EY jarenlang)'],
          ['Gerelateerde-partij transacties','Zelfverrijking management','Wirecard, PATISSERIE VALERIE'],
          ['Off-balance verplichtingen','Verborgen schuld en risico','Enron Special Purpose Entities'],
          ['Agressieve revenue recognition','Omzet te vroeg erkend','AOL Time Warner, Symbol Tech.'],
          ['CEO verkoopt massaal aandelen','Weet iets wat de markt niet weet','Diverse tech-zeepbellen'],
        ]},
    ]},
    { id: 's19-2', title: 'Casestudy: Wirecard — fraude tot het einde', blocks: [
      { t:'p', html:'Wirecard AG was een Duits fintech-bedrijf dat jarenlang groeide tot DAX-component (€25 miljard marktwaarde). In juni 2020 stortte het in: €1.9 miljard "trustrekening" bleek te bestaan — nooit te worden bevestigd door de Filipijnse banken die ze zogenaamd aanhielden.' },
      { t:'bullets', items:[
        '<strong>Red flag 1:</strong> Financial Times rapporteerde al jaren over boekhoudproblemen — management ontkende alles en dreigde met rechtszaken.',
        '<strong>Red flag 2:</strong> EY (auditor) faalde 10 jaar lang om de bankrekeningen te verifiëren. Vraag altijd: hoe controleert de auditor de cash?',
        '<strong>Red flag 3:</strong> Hoge debiteurengroei in obscure Aziatische markten — moeilijk te verifiëren op afstand.',
        '<strong>Red flag 4:</strong> Complexe corporate structuur met tientallen rechtspersonen over meerdere jurisdicties.',
        '<strong>Red flag 5:</strong> CEO Markus Braun had een financierings-incentive via persoonlijke schulden gedekt door Wirecard-aandelen.',
      ]},
      { t:'callout', s:'warn', ico:'🚨', html:'<strong>Lessen Wirecard:</strong> (1) Geloof nooit blind de auditor — stel zelf vragen over cash-verificatie. (2) Journalistieke due diligence (FT) is soms beter dan sell-side analyse. (3) Regelgeving-druk (DAX-vereiste) beschermt niet automatisch aandeelhouders. (4) Complexe structuren zijn altijd een risico.' },
    ]},
    { id: 's19-3', title: 'Boekhoudtrucs detecteren', blocks: [
      { t:'bullets', items:[
        '<strong>Channel stuffing:</strong> product wordt aan distributeurs geduwd om kwartaalcijfers op te krikken. Signaal: debiteuren stijgen sneller dan omzet, DIO stijgt.',
        '<strong>Bill-and-hold:</strong> omzet erkend op gefactureerde maar nog niet geleverde goederen. Legitimiteit is smal.',
        '<strong>Lease operationalisering vs kapitalisatie:</strong> vóór IFRS 16 verstopten bedrijven schuld als operationele lease. Nu verplicht op balans.',
        '<strong>R&D kapitalisatie vs expensing:</strong> R&D als actief capitaliseren verhoogt winst en activa — maar is het gerechtvaardigd?',
        '<strong>Impairment-uitstel:</strong> goodwill afschrijven uitstellen terwijl de business al verslechtert. Grote impairment na jaren = rode vlag die al eerder aanwezig was.',
      ]},
    ]},
  ],
},

{
  id: 20, emoji: '⚔️', title: 'Waarde versus Groei',
  tags: ['Value', 'Growth', 'GARP'], readTime: '16 min',
  sections: [
    { id: 's20-1', title: 'Wanneer werkt value investing het best?', blocks: [
      { t:'bullets', items:[
        '<strong>Stijgende rente:</strong> hogere discontovoet treft langdurige kasstromen hard (= groeiaandelen). Value heeft kortere duration — minder rentegevoelig.',
        '<strong>Economisch herstel na recessie:</strong> cyclische value-aandelen (energie, financieel, industrie) presteren het best in de vroege cyclus.',
        '<strong>Hoge waarderingspremiums:</strong> als growth-aandelen zeer hoge multiples dragen, biedt de ingebouwde margin of safety van value meer bescherming.',
        '<strong>Inflatoire omgeving:</strong> bedrijven met real assets (grondstoffen, vastgoed) beschermen beter tegen inflatie dan groeibedrijven met intangible assets.',
      ]},
    ]},
    { id: 's20-2', title: 'Wanneer werkt growth investing het best?', blocks: [
      { t:'bullets', items:[
        '<strong>Dalende rente:</strong> lagere discontovoet → hogere contante waarde van verre kasstromen → groeiaandelen profiteren het meest.',
        '<strong>Technologische disruptiegolven:</strong> structural growth wins, zelfs bij hoge multiples, als het marktaandeel snel vergroot.',
        '<strong>Lage inflatie, hoge liquiditeit:</strong> beleggers zoeken rendement → accepteren hogere multiples voor groei.',
        '<strong>Winnaar-neemt-alles-markten:</strong> platformeconomieën met sterke netwerkeffecten rechtvaardigen premiumwaardering.',
      ]},
    ]},
    { id: 's20-3', title: 'GARP & Deep Value', blocks: [
      { t:'h3', text:'GARP — Growth at a Reasonable Price' },
      { t:'p', html:'GARP combineert disciplinaire waardebeoordeling met groeipotentieel. De PEG-ratio (P/E / groei%) is de kernmaatstaf. Peter Lynch populariseerde dit.' },
      { t:'callout', s:'info', ico:'📌', html:'<strong>GARP-check:</strong> Is de PEG < 1.5? Is de groei organisch en duurzaam? Heeft het bedrijf een minimale moat? Is de schuld draagbaar? Zo ja: mogelijke GARP-kandidaat.' },
      { t:'h3', text:'Deep Value' },
      { t:'p', html:'Deep value (Ben Graham-stijl) zoekt aandelen onder liquidatiewaarde. Net-nets: Market Cap < Netto Vlottende Activa (current assets minus alle schulden). Zeldzaam in moderne markten, maar bestaat nog in vergeten small-caps of opkomende markten.' },
    ]},
  ],
},

{
  id: 21, emoji: '🗺️', title: 'Praktische Analysemethode — Stappenplan',
  tags: ['Checklist', 'Proces', 'Methode'], readTime: '15 min',
  sections: [
    { id: 's21-1', title: 'De 10 stappen van een volledige analyse', blocks: [
      { t:'num', items:[
        '<strong>Begrijp het bedrijf</strong> — In één zin: hoe verdient het geld? Lees de "About" pagina, laatste annual report openingssectie en een recente investor presentation.',
        '<strong>Begrijp de sector</strong> — Hoe aantrekkelijk is de industrie structureel? Porter\'s Five Forces. Cyclisch of defensief? Welke fase van de levenscyclus?',
        '<strong>Lees het meest recente jaarverslag</strong> — Letter to shareholders, MD&A, notes. Let op toonverschillen met vorig jaar.',
        '<strong>Analyseer de financiële trends (5 jaar)</strong> — Omzetgroei, margeontwikkeling, ROIC-trend, FCF-conversie. Zijn de trends consistent en in de goede richting?',
        '<strong>Bereken de kernratio\'s</strong> — ROIC, FCF-yield, Net Debt/EBITDA, Interest Coverage, Brutomarge. Vergelijk met 3 jaar geleden en met peers.',
        '<strong>Beoordeel het concurrentievoordeel</strong> — Welke moat heeft het bedrijf? Is het aantoonbaar en duurzaam? Hoe scoort het op de 5 moat-categorieën?',
        '<strong>Analyseer het management</strong> — Capital allocation track record. Insider ownership. Beloning gekoppeld aan juiste KPI\'s? Eerlijk in communicatie?',
        '<strong>Waardeer het bedrijf</strong> — DCF (basisscenario + bears/bulls). Comparable multiples vs peers. EPV als bodem. Wat is de range van intrinsieke waarde?',
        '<strong>Bepaal de veiligheidsmarge</strong> — Koers vs jouw intrinsieke waarde-schatting. Voldoende margin of safety gegeven de onzekerheden?',
        '<strong>Neem de beleggingsbeslissing</strong> — Kopen, wachten of passen? Waarom nu en niet later? Wat is je exit-criterium?',
      ]},
    ]},
    { id: 's21-2', title: 'Snelle kwaliteitschecklist', blocks: [
      { t:'p', html:'Gebruik deze checklist als eerste filter vóór de diepgaande analyse:' },
      { t:'bullets', items:[
        '☐ Kan ik het businessmodel in één zin uitleggen?',
        '☐ ROIC > 15% de afgelopen 5 jaar?',
        '☐ FCF positief en consistent (niet alleen incidenteel)?',
        '☐ Net Debt/EBITDA < 3x?',
        '☐ Marge stabiel of stijgend?',
        '☐ Is er een aantoonbare economische moat?',
        '☐ Insider ownership > 5% of significant buying?',
        '☐ Geen grote accounting rode vlaggen?',
        '☐ Huidige waardering aantrekkelijk vs historisch en peers?',
        '☐ Begrijp ik de top-3 risico\'s duidelijk?',
      ]},
      { t:'callout', s:'tip', ico:'🎯', html:'Als je meer dan 3 vragen met "nee" beantwoordt: pas of houd het als watchlist-kandidaat tot je meer overtuiging hebt. Onzekerheid is niet per definitie slecht — soms is het de bron van de opportunity.' },
    ]},
  ],
},

{
  id: 22, emoji: '🔬', title: 'Casestudy\'s',
  tags: ['ASML', 'Apple', 'Wirecard'], readTime: '35 min',
  sections: [
    { id: 's22-1', title: 'ASML — het perfecte monopolie', blocks: [
      { t:'p', html:'ASML Holding NV is 's werelds enige producent van EUV-lithografiemachines — de machines waarmee chipmakers de meest geavanceerde chips produceren. Zonder ASML geen TSMC-chips, geen Apple Silicon, geen Nvidia GPU\'s.' },
      { t:'h3', text:'Moat-analyse' },
      { t:'bullets', items:[
        '<strong>Technologisch monopolie:</strong> EUV is 30+ jaar R&D; geen concurrent is ook maar in de buurt. TSMC-COO: "ASML is de meest kritieke leverancier die we hebben."',
        '<strong>Hoge switching costs:</strong> een volledige fab is rondom ASML-machines gebouwd. Een alternatief vergt een herontwerp van de complete productielijn.',
        '<strong>Schaalvoordelen in R&D:</strong> ASML investeert €3-4 miljard per jaar in R&D, gespreid over een relatief kleine customer base (TSMC, Samsung, Intel).',
        '<strong>Hechte ecosysteemintegratie:</strong> ASML bezit minderheidsbelangen in kritische leveranciers (Carl Zeiss optica, Cymer lasers).',
      ]},
      { t:'h3', text:'Financiële kwaliteit (2023-niveaus)' },
      { t:'table', headers:['Metric','ASML','Sector benchmark'],
        rows:[
          ['ROIC','~30%','>15% = excellent'],
          ['Brutomarge','~52%','Industrieel gemiddeld: 30%'],
          ['EBIT-marge','~32%','Industrieel gemiddeld: 12%'],
          ['Net Debt/EBITDA','<0x (netto cash)','Comfortabel < 2x'],
          ['FCF-yield (op EV)','~3–4%','Redelijk bij hoge kwaliteit'],
        ]},
      { t:'callout', s:'ok', ico:'💎', html:'<strong>Waarom ASML werkt als long-term holding:</strong> secular groeitrend (AI-chips, advanced nodes), monopoliepositie, pricing power, lage capex (asset-light in relatie tot omzet), sterk FCF, en management met lange-termijn R&D-focus.' },
    ]},
    { id: 's22-2', title: 'Apple — het premium ecosysteem', blocks: [
      { t:'p', html:'Apple is een meesterklasse in het combineren van hardware (iPhone, Mac, iPad), services (App Store, Apple Music, iCloud) en een ondoordringbaar ecosysteem.' },
      { t:'bullets', items:[
        '<strong>Moat:</strong> Merk (premium pricing, loyaliteit) + Ecosysteem switching costs (iMessage, iCloud, AirPlay, app-library).',
        '<strong>Transitie naar services:</strong> Services (App Store, Apple TV+, iCloud) groeien sneller dan hardware, hogere marges (~70% vs ~36% hardware).',
        '<strong>Capital allocation:</strong> Buffett investeerde voor zijn historically meest succesvolle positie in Apple — de inkoop-machine (>$100 miljard per jaar buybacks) verhoogt EPS exponentieel.',
        '<strong>Risico:</strong> Hardware-afhankelijkheid (iPhone = ~50% omzet), Chinese productie-concentratie, antitrust-druk App Store.',
      ]},
    ]},
    { id: 's22-3', title: 'Wirecard — de slechte investering', blocks: [
      { t:'p', html:'Wirecard was een Duits payment-bedrijf dat groeide tot DAX-component met een marktwaarde van €25 miljard — voordat bleek dat €1,9 miljard aan "cash" nooit bestaan had.' },
      { t:'table', headers:['Red Flag','Wanneer zichtbaar','Hoe detecteren'],
        rows:[
          ['FT-rapporten over fraude','2019, eerder','Lees onafhankelijke investigatieve journalistiek'],
          ['Onverklaarbare Aziatische groeicijfers','2016–2019','Vergelijk segment-marges met peers'],
          ['EY faalde cash-verificatie 10 jaar','Achteraf duidelijk','Vraag: hoe verifieer de auditor de kas?'],
          ['Complex corporate web','Altijd zichtbaar','Wees sceptisch bij ondoorzichtige structuren'],
          ['CEO insider trading risico','Bekend na collapse','Check CEO-persoonlijke schulden gedekt door aandelen'],
        ]},
      { t:'callout', s:'warn', ico:'🚨', html:'<strong>Wirecard-les voor elke analyst:</strong> Wanneer een gerenommeerd medium (FT) jarenlang fraudevermoedens publiceert en het management reageert met juridische aanvallen i.p.v. transparantie — is dit zelf al een enorm rode vlag. Smoke = vuur, totdat het tegendeel is bewezen.' },
    ]},
  ],
},

{
  id: 23, emoji: '🧭', title: 'Een Eigen Beleggingsproces Bouwen',
  tags: ['Portfolio', 'Proces', 'Position Sizing'], readTime: '20 min',
  sections: [
    { id: 's23-1', title: 'Checklists & Scorecards', blocks: [
      { t:'p', html:'Een systematisch proces beschermt je tegen emotionele fouten. Gebruik een standaard scorecard voor elke analyse, zodat je appels met appels vergelijkt over tijd.' },
      { t:'table', headers:['Dimensie','Vragen','Score (1–5)'],
        rows:[
          ['Businesskwaliteit','Begrijp ik het? Sterke moat? Hoge FCF?','—'],
          ['Managementkwaliteit','Eerlijk? Goed allocator? Aligned?','—'],
          ['Financiële kwaliteit','ROIC > 15%? Lage schuld? FCF-conversie?','—'],
          ['Groeipotentieel','Grote SAM? Organische groei? Scalable?','—'],
          ['Waardering','Margin of safety? Goedkoop vs peers?','—'],
          ['Risicoprofiel','Acceptabele risico\'s? Geen fraude-signalen?','—'],
        ]},
      { t:'p', html:'Totaalscore bepaalt prioriteit voor verdere analyse en eventuele positiegrootte. Lage score = passen of kleinere positie.' },
    ]},
    { id: 's23-2', title: 'Position Sizing', blocks: [
      { t:'p', html:'<strong>Position sizing</strong> is hoeveel je van elke positie koopt. Het is de meest onderschatte discipline in beleggen.' },
      { t:'bullets', items:[
        '<strong>Convictie-gewogen:</strong> grotere positie = hogere overtuiging (kwaliteits-scorecard) + hogere veiligheidsmarge. Niet gelijkgewogen per definitie.',
        '<strong>Kelly Criterion:</strong> mathematisch optimaliseert positiegrootte op basis van verwachte return en winst-kans. In de praktijk: gebruik halve Kelly om catastrophisch verlies te vermijden.',
        '<strong>Concentratie vs diversificatie:</strong> Buffett/Munger: 5–10 posities is optimaal voor kenners. Graham: 30+ posities voor veiligheid. Kies bewust.',
        '<strong>Maximumpositie:</strong> stel een harde grens (bijv. max 15% per positie). Geen enkele analyse is zo zeker dat je alles erop inzet.',
      ]},
      { t:'formula', label:'Kelly Criterion (vereenvoudigd)',
        main:'f* = (<span class="fv">p × b</span> − <span class="fv">q</span>) / <span class="fv">b</span>\n\nwaar: p = kans op winst, q = 1−p (kans op verlies)\nb = winst/verlies-verhouding',
        note:'Gebruik in praktijk: half-Kelly (f*/2) om drawdowns te beperken\nKelly geeft een mathematische bovengrens — overschrijd nooit' },
    ]},
    { id: 's23-3', title: 'Wanneer Kopen & Verkopen', blocks: [
      { t:'h3', text:'Wanneer kopen?' },
      { t:'bullets', items:[
        'Voldoende margin of safety (koers ruim onder intrinsieke waarde).',
        'Catalysator aanwezig of in aantocht (turnaround, management change, spin-off, sector re-rating).',
        'Marktbrede correctie die ook kwaliteitsbedrijven meeneemt — "all boats go down in a storm".',
        'Nieuws-gedreven overreactie op iets tijdelijks (kwartaalmiss door éénmalige factor).',
      ]},
      { t:'h3', text:'Wanneer verkopen?' },
      { t:'bullets', items:[
        '<strong>De investeriingsthesis is onjuist gebleken</strong> — niet een dalende koers, maar een feit dat de analyse weerlegt. Verkoop onmiddellijk.',
        '<strong>Koers bereikt of overtreft intrinsieke waarde</strong> — veiligheidsmarge is weg. Overweeg gedeeltelijke verkoop.',
        '<strong>Fundamentals verslechteren structureel</strong> — dalende ROIC, toenemende schuld, moat-erosie.',
        '<strong>Betere opportuniteit beschikbaar</strong> — opportunity cost is een legitieme reden.',
        '<strong>Positie te groot geworden</strong> — koersstijging maakt positie >20% van portfolio → gedeeltelijke verkoop voor risicobeheer.',
      ]},
      { t:'callout', s:'warn', ico:'⚠️', html:'<strong>Grootste fout:</strong> Verkopen omdat de koers gedaald is (terwijl de thesis intact is) OF vasthouden omdat de koers gestegen is (terwijl de koers ver boven intrinsieke waarde ligt). Koers is nooit de reden — de fundamentals zijn de reden.' },
    ]},
    { id: 's23-4', title: 'Portfolio-opbouw & herbalanceren', blocks: [
      { t:'p', html:'Een goed samengesteld portfolio bestaat uit bedrijven die niet allemaal dezelfde risico\'s dragen.' },
      { t:'bullets', items:[
        '<strong>Sectorbalans:</strong> vermijd >40% in één sector (concentratierisico).',
        '<strong>Geografische spreiding:</strong> EU, VS, Azië — wisselkoers- en politiek-diversificatie.',
        '<strong>Cyclisch/defensief mix:</strong> defensieve namen beschermen in recessie; cyclische profiteren in herstel.',
        '<strong>Herbalanceren:</strong> geen vaste kalender, maar op basis van waardering. Als positie A te duur en B te goedkoop is → switch gedeeltelijk.',
        '<strong>Cash als wapen:</strong> 5–20% cash houden geeft flexibiliteit bij correcties. Niet altijd volledig geïnvesteerd zijn is een strategie, geen fout.',
      ]},
    ]},
  ],
},
];

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
let currentId = null;
const STORAGE_KEY = 'fa_course_done';

function loadDone() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveDone(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}
let doneSet = loadDone();

/* ══════════════════════════════════════════════════════════
   RENDER HELPERS
══════════════════════════════════════════════════════════ */
function block(b) {
  switch (b.t) {
    case 'p':
      return `<p class="b-p">${b.html}</p>`;
    case 'h2':
      return `<h2 class="b-h2" id="${slug(b.text)}">${b.text}</h2>`;
    case 'h3':
      return `<h3 class="b-h3">${b.text}</h3>`;
    case 'div':
      return `<hr class="b-div">`;
    case 'quote':
      return `<blockquote class="b-quote">${b.text}</blockquote>`;
    case 'callout':
      return `<div class="callout ${b.s}"><span class="callout-ico">${b.ico}</span><div class="callout-body">${b.html}</div></div>`;
    case 'formula':
      return `<div class="formula-card"><div class="formula-label">${b.label}</div><div class="formula-main">${b.main}</div>${b.note ? `<div class="formula-note">${b.note.replace(/\n/g,'<br>')}</div>` : ''}</div>`;
    case 'bullets':
      return `<ul class="b-list">${b.items.map(i=>`<li><span>${i}</span></li>`).join('')}</ul>`;
    case 'num':
      return `<ol class="b-list num">${b.items.map(i=>`<li><span>${i}</span></li>`).join('')}</ol>`;
    case 'table':
      return `<div class="b-table-wrap"><table class="b-table"><thead><tr>${b.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    default: return '';
  }
}

function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g,'-'); }

/* ══════════════════════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════════════════════ */
function buildSidebar(filter='') {
  const nav = document.getElementById('moduleNav');
  const q = filter.toLowerCase();
  const filtered = MODULES.filter(m => !q || m.title.toLowerCase().includes(q));
  nav.innerHTML = filtered.length === 0
    ? '<div style="padding:16px 12px;font-size:13px;color:var(--muted)">Geen resultaten</div>'
    : filtered.map(m => `
        <div class="mod-item ${m.id === currentId?'active':''} ${doneSet.has(m.id)?'done':''}" data-id="${m.id}">
          <div class="mod-check"></div>
          <span class="mod-emoji">${m.emoji}</span>
          <span class="mod-title">${m.title}</span>
          <span class="mod-num">${m.id}</span>
        </div>`).join('');
  updateProgress();
}

function updateProgress() {
  const count = doneSet.size;
  const total = MODULES.length;
  document.getElementById('progressText').textContent = `${count} / ${total}`;
  document.getElementById('progressBar').style.width = `${(count/total)*100}%`;
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
function renderHome() {
  const page = document.getElementById('pageContent');
  const nav = document.getElementById('pageNav');
  const toc = document.getElementById('tocPanel');
  const completeBtn = document.getElementById('completeBtn');
  nav.style.display = 'none';
  toc.style.display = 'none';
  completeBtn.style.display = 'none';
  document.getElementById('breadcrumb').innerHTML = `<span class="bc-current">📈 Fundamentele Analyse</span>`;
  page.innerHTML = `
    <span class="page-emoji">📈</span>
    <h1 class="page-title">Fundamentele Analyse</h1>
    <p class="home-intro">Een verdiepende cursus over het analyseren van bedrijven, sectoren en markten om de intrinsieke waarde van een aandeel te bepalen. 23 modules van introductie tot eigen beleggingsproces.</p>
    <div class="home-stats">
      <div class="home-stat"><div class="home-stat-val">23</div><div class="home-stat-label">Modules</div></div>
      <div class="home-stat"><div class="home-stat-val">${doneSet.size}</div><div class="home-stat-label">Voltooid</div></div>
      <div class="home-stat"><div class="home-stat-val">~8u</div><div class="home-stat-label">Totale leestijd</div></div>
    </div>
    <div class="home-section-label">Alle modules</div>
    <div class="home-grid">
      ${MODULES.map(m=>`
        <div class="home-card ${doneSet.has(m.id)?'done':''}" data-id="${m.id}">
          <span class="home-card-emoji">${m.emoji}</span>
          <div class="home-card-title">${m.title}</div>
          <div class="home-card-meta">${m.readTime || ''} ${(m.tags||[]).map(t=>`<span style="background:var(--hover);padding:1px 6px;border-radius:99px;font-size:10px">${t}</span>`).join(' ')}</div>
        </div>`).join('')}
    </div>`;

  page.querySelectorAll('.home-card').forEach(el => {
    el.addEventListener('click', () => navigate(+el.dataset.id));
  });
}

/* ══════════════════════════════════════════════════════════
   MODULE PAGE
══════════════════════════════════════════════════════════ */
function renderModule(id) {
  const mod = MODULES.find(m => m.id === id);
  if (!mod) return;
  currentId = id;

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML = `
    <span class="bc-seg" data-home>📈 Fundamentele Analyse</span>
    <span class="bc-sep" style="color:var(--muted)">›</span>
    <span class="bc-current">${mod.title}</span>`;
  document.querySelector('.bc-seg[data-home]')?.addEventListener('click', () => navigate(null));

  // Complete button
  const btn = document.getElementById('completeBtn');
  btn.style.display = 'flex';
  updateCompleteBtn(btn, id);
  btn.onclick = () => {
    if (doneSet.has(id)) doneSet.delete(id); else doneSet.add(id);
    saveDone(doneSet);
    updateCompleteBtn(btn, id);
    buildSidebar(document.getElementById('searchInput').value);
    // refresh home stat
  };

  // Build page HTML
  let html = `
    <span class="page-emoji">${mod.emoji}</span>
    <h1 class="page-title">${mod.title}</h1>
    <div class="page-meta">
      <span>Module ${mod.id}</span>
      ${mod.readTime ? `<span>⏱ ${mod.readTime}</span>` : ''}
      ${(mod.tags||[]).map(t=>`<span class="page-tag">${t}</span>`).join('')}
    </div>
    <hr class="page-divider">`;

  mod.sections.forEach(sec => {
    html += `<h2 class="b-h2" id="${sec.id}">${sec.title}</h2>`;
    sec.blocks.forEach(b => { html += block(b); });
  });

  const page = document.getElementById('pageContent');
  page.innerHTML = html;

  // TOC
  buildTOC(mod);

  // Nav
  const nav = document.getElementById('pageNav');
  nav.style.display = 'flex';
  const idx = MODULES.findIndex(m => m.id === id);
  document.getElementById('prevBtn').disabled = idx <= 0;
  document.getElementById('nextBtn').disabled = idx >= MODULES.length - 1;
  document.getElementById('prevBtn').onclick = () => { if (idx > 0) navigate(MODULES[idx-1].id); };
  document.getElementById('nextBtn').onclick = () => { if (idx < MODULES.length-1) navigate(MODULES[idx+1].id); };

  // Sidebar active
  buildSidebar(document.getElementById('searchInput').value);

  // Scroll to top
  document.getElementById('contentScroll').scrollTo(0, 0);

  // Mobile close sidebar
  if (window.innerWidth < 900) closeSidebar();
}

function updateCompleteBtn(btn, id) {
  const done = doneSet.has(id);
  btn.classList.toggle('done', done);
  document.getElementById('completeBtnText').textContent = done ? '✓ Voltooid' : 'Markeer voltooid';
}

/* ══════════════════════════════════════════════════════════
   TOC
══════════════════════════════════════════════════════════ */
function buildTOC(mod) {
  const panel = document.getElementById('tocPanel');
  const list = document.getElementById('tocList');
  panel.style.display = 'block';
  list.innerHTML = mod.sections.map(s => `
    <div class="toc-item" data-target="${s.id}">${s.title}</div>`).join('');
  list.querySelectorAll('.toc-item').forEach(el => {
    el.addEventListener('click', () => {
      const target = document.getElementById(el.dataset.target);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  // Scroll spy
  const scroll = document.getElementById('contentScroll');
  scroll.onscroll = () => {
    const items = list.querySelectorAll('.toc-item');
    let active = null;
    mod.sections.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top < 120) active = i;
    });
    items.forEach((item, i) => item.classList.toggle('active', i === active));
  };
}

/* ══════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════ */
function navigate(id) {
  if (id === null || id === undefined) {
    currentId = null;
    renderHome();
    buildSidebar();
    document.getElementById('tocPanel').style.display = 'none';
  } else {
    renderModule(id);
  }
}

/* ══════════════════════════════════════════════════════════
   SIDEBAR TOGGLE
══════════════════════════════════════════════════════════ */
function openSidebar() {
  document.getElementById('sidebar').classList.remove('hidden');
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar events
  document.getElementById('moduleNav').addEventListener('click', e => {
    const item = e.target.closest('.mod-item');
    if (item) navigate(+item.dataset.id);
  });
  document.getElementById('searchInput').addEventListener('input', e => {
    buildSidebar(e.target.value);
  });
  document.getElementById('sidebarClose').addEventListener('click', () => {
    if (window.innerWidth < 900) closeSidebar();
    else document.getElementById('sidebar').classList.toggle('hidden');
  });
  document.getElementById('menuBtn').addEventListener('click', () => {
    if (window.innerWidth < 900) openSidebar();
    else document.getElementById('sidebar').classList.toggle('hidden');
  });
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  // Init
  buildSidebar();
  renderHome();
});
