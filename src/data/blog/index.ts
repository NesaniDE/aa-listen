export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readingTime: string
  relatedCategorySlug?: string
  relatedSubcategorySlug?: string
  relatedListSlugs?: string[]
  relatedCompanySlugs?: string[]
  /** Absätze; ein Eintrag mit "## " am Anfang wird als Zwischenüberschrift dargestellt. */
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hausarzt-in-aalen-finden",
    title: "Hausarzt in Aalen finden: So klappt die Suche",
    excerpt: "Neu in Aalen oder die Praxis schließt? Worauf es bei der Hausarztsuche ankommt und welche Fragen du vorab klären solltest.",
    category: "Gesundheit",
    publishedAt: "2026-10-08",
    readingTime: "4 Min",
    relatedCategorySlug: "gesundheit",
    relatedSubcategorySlug: "hausarztpraxen",
    relatedListSlugs: ["top-10-hausarztpraxen-in-aalen", "top-10-arztpraxen-mit-website-in-aalen", "top-10-barrierefreie-arztpraxen-in-aalen"],
    content: [
      "Eine feste Hausarztpraxis ist mehr als eine Adresse für den Krankenschein. Sie kennt deine Vorgeschichte, koordiniert Überweisungen und ist erste Anlaufstelle, wenn etwas unklar ist. Gerade nach einem Umzug nach Aalen lohnt es sich deshalb, die Suche nicht erst zu beginnen, wenn du krank bist.",
      "## Erst klären, dann anrufen",
      "Bevor du Praxen abtelefonierst, hilft eine kurze Liste mit deinen Anforderungen: Wie weit darf der Weg sein, mit Auto, Bus oder zu Fuß? Brauchst du Termine am frühen Morgen oder nach Feierabend? Ist ein barrierefreier Zugang wichtig, etwa für Eltern mit Kinderwagen oder ältere Angehörige? Und gibt es Schwerpunkte, die zu dir passen, zum Beispiel Innere Medizin, Diabetologie oder Naturheilverfahren?",
      "Viele Praxen nehmen nicht unbegrenzt neue Patientinnen und Patienten auf. Frag beim ersten Anruf deshalb direkt nach, ob eine Aufnahme möglich ist und ob es dafür einen eigenen Ersttermin gibt.",
      "## Woran du eine passende Praxis erkennst",
      "Eine gepflegte Praxiswebsite ist kein Qualitätsurteil, spart aber Zeit: Sprechzeiten, Schwerpunkte, Hinweise zur Terminvergabe und Vertretungsregelungen im Urlaub stehen dort im besten Fall auf einen Blick. Achte auch darauf, ob Rezepte oder Überweisungen telefonisch, per Formular oder über eine App angefragt werden können — im Alltag macht das einen großen Unterschied.",
      "Für die erste Orientierung bündelt AA Listen Hausarztpraxen in Aalen, Praxen mit eigener Website und Praxen mit hinterlegtem barrierefreiem Zugang. Die Angaben stammen aus offenen Kartendaten; bei Barrierefreiheit lohnt sich vor dem ersten Besuch eine kurze Rückfrage in der Praxis.",
      "## Wenn es abends oder am Wochenende dringend wird",
      "Außerhalb der Sprechzeiten ist der ärztliche Bereitschaftsdienst unter der bundesweiten Nummer 116 117 erreichbar. Bei lebensbedrohlichen Notfällen gilt immer der Notruf 112. Beide Nummern ersetzen keine Hausarztpraxis, gehören aber in jedes Handy.",
    ],
  },
  {
    slug: "zahnarztpraxis-in-aalen-waehlen",
    title: "Zahnarztpraxis in Aalen wählen: worauf es wirklich ankommt",
    excerpt: "Kontrolle, Prophylaxe, Angstpatient oder Kinderbehandlung: Mit diesen Kriterien findest du schneller die passende Zahnarztpraxis in Aalen.",
    category: "Gesundheit",
    publishedAt: "2026-10-08",
    readingTime: "4 Min",
    relatedCategorySlug: "gesundheit",
    relatedSubcategorySlug: "zahnarzte",
    relatedListSlugs: ["top-10-zahnaerzte-in-aalen", "top-10-barrierefreie-arztpraxen-in-aalen"],
    content: [
      "Die richtige Zahnarztpraxis hängt stark davon ab, was du brauchst. Für die halbjährliche Kontrolle zählen andere Dinge als für eine größere Behandlung, für Kinder andere als für Menschen mit Angst vor dem Zahnarztstuhl.",
      "## Vier Fragen für die Vorauswahl",
      "Erstens: Bietet die Praxis eine professionelle Zahnreinigung an, und wie läuft die Terminvergabe dafür? Zweitens: Gibt es Schwerpunkte wie Kinderzahnheilkunde, Implantologie oder ausdrücklich die Behandlung von Angstpatienten? Drittens: Wie gut ist die Praxis erreichbar, auch mit Blick auf Parkplätze und Bushaltestellen? Viertens: Werden Kosten für Leistungen, die die Krankenkasse nicht vollständig übernimmt, vorab verständlich erklärt?",
      "Die letzte Frage ist wichtiger, als sie klingt. Ein Heil- und Kostenplan vor größeren Behandlungen ist üblich — und eine Praxis, die ihn ruhig und nachvollziehbar erklärt, nimmt dir viel Unsicherheit.",
      "## Was eine Website verrät — und was nicht",
      "Praxiswebsites zeigen Schwerpunkte, Team und Ausstattung. Sie sagen aber wenig darüber, wie du dich in der Behandlung fühlst. Ein erster Termin zur Kontrolle ist deshalb oft der beste Test: Wird erklärt, was gemacht wird? Bleibt Zeit für Fragen?",
      "In der Liste der Zahnarztpraxen in Aalen findest du eine Vorauswahl mit Adressen und Kontaktwegen. Die Reihenfolge ist eine Orientierung nach den Kriterien unserer Methodik-Seite, kein medizinisches Qualitätsurteil.",
      "## Bei Zahnschmerzen am Wochenende",
      "Für akute Beschwerden außerhalb der Sprechzeiten gibt es einen zahnärztlichen Notdienst. Welche Praxis gerade Dienst hat, veröffentlicht die Kassenzahnärztliche Vereinigung Baden-Württemberg; häufig nennt auch die Bandansage der eigenen Praxis den aktuellen Notdienst.",
    ],
  },
  {
    slug: "autowerkstatt-in-aalen-finden",
    title: "Autowerkstatt in Aalen: So findest du eine verlässliche Werkstatt",
    excerpt: "Inspektion, Reifenwechsel oder unklares Geräusch: Worauf du bei der Wahl einer Werkstatt in Aalen achten solltest.",
    category: "Auto & Mobilität",
    publishedAt: "2026-10-08",
    readingTime: "4 Min",
    relatedCategorySlug: "auto-mobilitat",
    relatedSubcategorySlug: "autowerkstatten",
    relatedListSlugs: ["top-10-autowerkstaetten-in-aalen", "top-10-autohauser-in-aalen", "top-10-tankstellen-in-aalen"],
    content: [
      "Eine gute Werkstatt merkt man selten im Alltag, aber sofort, wenn etwas schiefgeht. Wer schon vor dem ersten Problem eine Werkstatt seines Vertrauens hat, spart im Ernstfall Zeit, Nerven und oft auch Geld.",
      "## Freie Werkstatt oder Vertragshändler?",
      "Freie Werkstätten sind häufig günstiger und arbeiten markenübergreifend. Vertragswerkstätten im Autohaus haben dafür direkten Zugriff auf Herstellerdaten und Software — das kann bei neueren Fahrzeugen, Rückrufen oder Garantiefällen ein Vorteil sein. Gut zu wissen: Auch eine freie Werkstatt darf Inspektionen nach Herstellervorgaben durchführen, ohne dass die Herstellergarantie dadurch automatisch erlischt, sofern Vorgaben und Teilequalität eingehalten werden.",
      "## Woran du eine verlässliche Werkstatt erkennst",
      "Ein schriftlicher Kostenvoranschlag vor größeren Arbeiten sollte selbstverständlich sein. Gute Werkstätten rufen an, bevor sie zusätzliche Arbeiten ausführen, erklären ausgetauschte Teile und zeigen sie auf Wunsch auch. Achte außerdem darauf, ob die Werkstatt auf deine Fahrzeugart eingestellt ist, etwa bei Elektro- oder Hybridautos.",
      "Praktisch im Alltag: feste Ansprechpartner, Online- oder Telefontermine ohne lange Wartezeit und eine klare Absprache, wann das Auto wieder abholbereit ist.",
      "## Vorauswahl in Aalen",
      "AA Listen bündelt Autowerkstätten, Autohäuser und Tankstellen in Aalen mit Adresse und Kontaktdaten aus offenen Kartendaten. Damit hast du schnell zwei, drei Kandidaten für einen Vergleich — die eigentliche Entscheidung triffst du am besten nach einem ersten kleineren Auftrag wie einem Reifenwechsel.",
    ],
  },
  {
    slug: "essen-gehen-in-aalen",
    title: "Essen gehen in Aalen: Restaurant, Pizzeria oder Terrasse?",
    excerpt: "Vom schnellen Mittagessen bis zum Abend mit Freunden: Wie du in Aalen das passende Lokal für den Anlass findest.",
    category: "Gastro",
    publishedAt: "2026-10-08",
    readingTime: "4 Min",
    relatedCategorySlug: "gastro",
    relatedListSlugs: ["top-10-restaurants-in-aalen", "top-10-italiener-in-aalen", "top-10-pizzerien-in-aalen", "top-10-terrassenlokale-in-aalen"],
    content: [
      "„Wo gehen wir essen?“ ist selten eine Frage nach dem besten Restaurant der Stadt, sondern nach dem passenden für den Moment. Ein schnelles Mittagessen, ein entspannter Abend zu zweit und ein Treffen mit der ganzen Familie stellen ganz unterschiedliche Anforderungen.",
      "## Erst der Anlass, dann die Adresse",
      "Für den Abend mit Freunden zählen Platz, Lautstärke und die Möglichkeit, länger sitzen zu bleiben. Mit Kindern sind kurze Wartezeiten, eine Kinderkarte und ein unkomplizierter Service wichtiger als ein ausgefallenes Menü. Und beim Geschäftsessen zählen Ruhe, Reservierbarkeit und ein gut erreichbarer Standort.",
      "Im Sommer kommt die Terrasse dazu: Lokale mit Außenbereich sind an warmen Abenden schnell voll. Wer ohne Reservierung kommt, hat am frühen Abend die besten Chancen.",
      "## Italienisch, Pizza oder lieber etwas anderes?",
      "Italienische Küche ist in Aalen breit vertreten — vom klassischen Ristorante bis zur Pizzeria mit Abholung. Für eine schnelle Pizza zum Mitnehmen lohnt der Blick auf Take-away-Angebote, für ein längeres Essen eher auf Lokale mit Reservierung. Wer Abwechslung sucht, findet in den Listen auch asiatische Küche sowie vegetarische und vegane Adressen.",
      "## So nutzt du die Listen",
      "Die Gastro-Listen von AA Listen sind nach Anlass und Küche sortiert, nicht nach Bewertungen. Sie geben dir eine schnelle Vorauswahl mit Adresse und Kontakt. Öffnungszeiten ändern sich gerade in der Gastronomie häufig — ein kurzer Blick auf die Website oder ein Anruf vor dem Losgehen erspart Enttäuschungen.",
    ],
  },
  {
    slug: "barrierefrei-in-aalen",
    title: "Barrierefrei unterwegs in Aalen: Lokale, Praxen und Geschäfte",
    excerpt: "Stufenloser Zugang, rollstuhlgerechte Toilette, Parkplatz vor der Tür: Wie du barrierefreie Orte in Aalen findest und was du vorher prüfen solltest.",
    category: "Alltag",
    publishedAt: "2026-10-08",
    readingTime: "4 Min",
    relatedListSlugs: ["top-10-barrierefreie-lokale-in-aalen", "top-10-barrierefreie-arztpraxen-in-aalen", "top-10-barrierefreies-einkaufen-in-aalen", "top-10-barrierefreie-freizeitorte-in-aalen"],
    content: [
      "Für viele Menschen entscheidet nicht die Speisekarte oder das Sortiment darüber, ob sie einen Ort besuchen können, sondern eine einzige Stufe am Eingang. Rollstuhlnutzerinnen und -nutzer, ältere Menschen mit Rollator und Eltern mit Kinderwagen planen ihre Wege deshalb oft genauer als andere.",
      "## Was „barrierefrei“ in den Listen bedeutet",
      "Die barrierefreien Listen von AA Listen stützen sich auf Angaben aus OpenStreetMap. Dort tragen Freiwillige ein, ob ein Ort mit dem Rollstuhl zugänglich ist — vollständig, eingeschränkt oder gar nicht. Diese Angaben sind wertvoll, aber nicht amtlich geprüft und können veralten, etwa nach einem Umbau.",
      "Unser Rat: Nutze die Listen als Vorauswahl und ruf vor einem wichtigen Termin kurz an. Frag gezielt nach dem Eingang, nach Türbreiten, einer barrierefreien Toilette und Parkmöglichkeiten in der Nähe.",
      "## Arztpraxen und Einkaufen",
      "Bei Arztpraxen lohnt sich die Frage, ob es einen Aufzug gibt und ob dieser während der Sprechzeiten zuverlässig erreichbar ist. Beim Einkaufen helfen breite Gänge, ebenerdige Eingänge und Kassen, an denen man mit Rollstuhl oder Rollator gut vorbeikommt.",
      "## Selbst mithelfen",
      "Wer einen Ort gut kennt, kann die Angaben in OpenStreetMap selbst ergänzen oder korrigieren — davon profitieren alle, die nach dir suchen. Und wenn dir in unseren Listen ein Fehler auffällt, freuen wir uns über einen Hinweis über die Kontaktseite.",
    ],
  },
  {
    slug: "mit-kindern-in-aalen",
    title: "Mit Kindern in Aalen: Spielplätze, Parks und Kita-Suche",
    excerpt: "Wo Kinder in Aalen toben können, welche Grünanlagen sich für einen Nachmittag eignen und was bei der Kita-Suche hilft.",
    category: "Familie",
    publishedAt: "2026-10-08",
    readingTime: "3 Min",
    relatedCategorySlug: "familie",
    relatedListSlugs: ["top-10-spielplaetze-in-aalen", "top-10-parks-und-gruenanlagen-in-aalen", "top-10-kindergaerten-in-aalen"],
    content: [
      "Ein freier Nachmittag mit Kindern braucht nicht viel: einen Ort zum Toben, etwas Schatten und im besten Fall eine Bank für die Erwachsenen. In Aalen gibt es dafür Spielplätze in vielen Stadtteilen und Grünanlagen, die sich gut mit einem Spaziergang verbinden lassen.",
      "## Spielplatz nach Alter wählen",
      "Für Kleinkinder sind Sandbereiche, niedrige Rutschen und eingezäunte Flächen ideal. Ältere Kinder suchen eher Kletterlandschaften, Seilbahnen oder Bolzplätze. In der Spielplatz-Liste findest du Adressen aus offenen Kartendaten — ein Blick auf die Karte zeigt schnell, was in deiner Nähe liegt.",
      "## Parks für längere Nachmittage",
      "Grünanlagen eignen sich für Picknick, Laufrad-Runden und erste Fahrradübungen. Plane bei längeren Ausflügen Wasser, Sonnenschutz und eine Toilettenpause ein; nicht jede Anlage hat öffentliche Toiletten.",
      "## Kita-Suche: früh anfangen",
      "Bei der Suche nach einem Kita-Platz gilt fast überall: so früh wie möglich anmelden. Wie die Anmeldung in Aalen genau läuft und welche Fristen gelten, erfährst du bei der Stadtverwaltung. Die Liste der Kindergärten hilft dir, Einrichtungen in deiner Nähe zu finden und einen Besichtigungstermin zu vereinbaren.",
    ],
  },
  {
    slug: "sonntags-und-spaet-in-aalen",
    title: "Sonntags, abends, nachts: Was in Aalen geöffnet hat",
    excerpt: "Brötchen am Sonntag, Essen nach 22 Uhr oder Tanken in der Nacht — und was du über Apotheken- und Ärztenotdienst wissen solltest.",
    category: "Alltag",
    publishedAt: "2026-10-08",
    readingTime: "3 Min",
    relatedListSlugs: ["top-10-sonntags-geoeffnet-in-aalen", "top-10-spaet-geoeffnet-in-aalen", "top-10-rund-um-die-uhr-geoeffnet-in-aalen", "top-10-apotheken-in-aalen"],
    content: [
      "Sonntags ist in Deutschland vieles geschlossen — aber längst nicht alles. Bäckereien, Cafés, Restaurants, Tankstellen und Freizeitangebote haben oft auch am Wochenende geöffnet. Die Kunst ist, sie zu finden, bevor man vor verschlossener Tür steht.",
      "## Wie die Listen entstehen",
      "Die Listen „Sonntags geöffnet“, „Spät geöffnet“ und „Rund um die Uhr“ stützen sich auf die Öffnungszeiten in offenen Kartendaten. Diese werden von Freiwilligen gepflegt und sind nicht immer aktuell — besonders an Feiertagen und in den Ferien weichen Betriebe gern ab. Vor dem Losgehen lohnt deshalb ein Blick auf die Website oder ein kurzer Anruf.",
      "## Apotheke am Wochenende",
      "Irgendeine Apotheke in der Umgebung hat immer Notdienst. Welche das gerade ist, steht als Aushang an jeder Apotheke und in der Notdienstsuche der Landesapothekerkammer. Für die Inanspruchnahme des Notdienstes fällt eine kleine Gebühr an.",
      "## Ärztliche Hilfe außerhalb der Sprechzeiten",
      "Der ärztliche Bereitschaftsdienst ist bundesweit unter 116 117 erreichbar und hilft bei Beschwerden, mit denen du sonst in die Hausarztpraxis gehen würdest. Bei Lebensgefahr gilt immer der Notruf 112.",
    ],
  },
  {
    slug: "friseur-in-aalen-online-buchen",
    title: "Friseur in Aalen: online buchen oder spontan vorbeikommen?",
    excerpt: "Online-Termin, Walk-in oder Stammsalon: Wie du in Aalen den passenden Friseur findest und was ein gutes Beratungsgespräch ausmacht.",
    category: "Dienstleister",
    publishedAt: "2026-10-08",
    readingTime: "3 Min",
    relatedCategorySlug: "dienstleister",
    relatedSubcategorySlug: "friseure",
    relatedListSlugs: ["top-10-friseure-in-aalen", "top-10-friseure-mit-online-termin-in-aalen", "top-10-friseure-und-beauty-mit-website-in-aalen"],
    content: [
      "Manche Menschen gehen seit Jahren zum selben Friseur, andere entscheiden spontan, wo gerade ein Stuhl frei ist. Beides hat seine Berechtigung — wichtig ist, dass der Salon zu deinem Alltag und zu deinem Haar passt.",
      "## Online-Termin: bequem und planbar",
      "Salons mit Online-Buchung zeigen freie Zeiten rund um die Uhr. Das ist praktisch, wenn du tagsüber nicht telefonieren kannst. Achte bei der Buchung darauf, die richtige Leistung auszuwählen: Ein Färbetermin braucht deutlich mehr Zeit als ein Schnitt, und falsch gebuchte Termine sorgen vor Ort schnell für Stress.",
      "## Spontan vorbeikommen",
      "Viele Barbershops und manche Salons arbeiten auch ohne Termin. Am Vormittag unter der Woche sind die Wartezeiten meist kürzer als am Samstag.",
      "## Woran du einen guten Salon erkennst",
      "Ein gutes Beratungsgespräch vor dem ersten Schnitt ist das wichtigste Signal: Wird nach deinem Alltag, deiner Pflegeroutine und deinem Haar gefragt, bevor es losgeht? Transparente Preise — am besten schon auf der Website — ersparen unangenehme Überraschungen an der Kasse.",
    ],
  },
  {
    slug: "warum-lokale-top-10-listen-aalen",
    title: "Warum lokale Top-10-Listen für Aalen sinnvoll sind",
    excerpt: "Wie AA Listen entsteht, woher die Daten kommen und warum eine kuratierte Vorauswahl oft mehr hilft als eine endlose Trefferliste.",
    category: "AA Listen",
    publishedAt: "2026-10-08",
    readingTime: "3 Min",
    content: [
      "Wer in einer Suchmaschine nach einem Café, einer Werkstatt oder einer Arztpraxis sucht, bekommt schnell Dutzende Treffer — aber selten eine Antwort auf die eigentliche Frage: Wo fange ich an?",
      "## Vorauswahl statt Trefferflut",
      "AA Listen sortiert Adressen in Aalen nach Themen und Anlässen und stellt pro Liste zehn Einträge vor. Das ersetzt keine eigene Entscheidung, verkürzt aber den Weg dorthin deutlich.",
      "## Woher die Daten kommen",
      "Die Grundlage der meisten Listen sind offene Kartendaten aus OpenStreetMap. Daraus übernehmen wir Name, Adresse, Kontaktwege und Merkmale wie Außenbereich oder Barrierefreiheit. Die Reihenfolge ergibt sich aus den Kriterien unserer Methodik-Seite, etwa Erreichbarkeit, gepflegter Außenauftritt und Vollständigkeit der Angaben. Kundenbewertungen fließen nicht ein, weil uns dafür keine belastbaren Daten vorliegen.",
      "## Transparenz",
      "AA Listen wird von der Nesani UG aus Schwäbisch Gmünd betrieben. In einzelnen Dienstleisterlisten ist Nesani selbst vertreten; das ist dort jeweils ausgewiesen. Fehler, veraltete Angaben oder fehlende Betriebe kannst du uns jederzeit über die Kontaktseite melden.",
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
