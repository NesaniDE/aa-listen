import { top10Lists } from '@/data/lists'

export interface Category {
  slug: string
  label: string
  emoji: string
  description: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  slug: string
  label: string
  listSlug: string
}

const rawCategories: Category[] = [
  {
    slug: 'gastro',
    label: 'Gastro',
    emoji: '',
    description: 'Restaurants, Cafés, Bars und mehr in Aalen.',
    subcategories: [
      { slug: 'restaurants', label: 'Restaurants', listSlug: 'top-10-restaurants-in-aalen' },
      { slug: 'cafes', label: 'Cafés', listSlug: 'top-10-cafes-in-aalen' },
      { slug: 'fruehstueck', label: 'Frühstück & Brunch', listSlug: 'top-10-fruehstueck-brunch-in-aalen' },
      { slug: 'burger', label: 'Burgerläden', listSlug: 'top-10-burgerladen-in-aalen' },
      { slug: 'italiener', label: 'Italiener', listSlug: 'top-10-italiener-in-aalen' },
      { slug: 'pizzerien', label: 'Pizzerien', listSlug: 'top-10-pizzerien-in-aalen' },
      { slug: 'doener', label: 'Dönerläden', listSlug: 'top-10-doenerlaeden-in-aalen' },
      { slug: 'bars', label: 'Bars', listSlug: 'top-10-bars-in-aalen' },
      { slug: 'cocktailbars', label: 'Cocktailbars', listSlug: 'top-10-cocktailbars-in-aalen' },
      { slug: 'lieferdienste', label: 'Lieferdienste', listSlug: 'top-10-lieferdienste-in-aalen' },
    ],
  },
  {
    slug: 'freizeit',
    label: 'Freizeit',
    emoji: '',
    description: 'Sport, Erholung und Freizeitaktivitäten in Aalen.',
    subcategories: [
      { slug: 'kultur', label: 'Kultur & Museen', listSlug: 'top-10-kultur-und-museen-in-aalen' },
      { slug: 'parks', label: 'Parks & Grünanlagen', listSlug: 'top-10-parks-und-gruenanlagen-in-aalen' },
      { slug: 'fitnessstudios', label: 'Fitnessstudios', listSlug: 'top-10-fitnessstudios-in-aalen' },
      { slug: 'schwimmbader', label: 'Freibäder / Schwimmbäder', listSlug: 'top-10-schwimmbaeder-in-aalen' },
      { slug: 'saunen', label: 'Saunen', listSlug: 'top-10-saunen-in-aalen' },
      { slug: 'kletterhallen', label: 'Kletterhallen', listSlug: 'top-10-kletterhallen-in-aalen' },
      { slug: 'ausflugsziele', label: 'Ausflugsziele', listSlug: 'top-10-ausflugsziele-in-aalen' },
      { slug: 'freizeitaktivitaten', label: 'Freizeitaktivitäten', listSlug: 'top-10-freizeitaktivitaten-in-aalen' },
      { slug: 'familien', label: 'Orte für Familien', listSlug: 'top-10-orte-familien-in-aalen' },
      { slug: 'sportangebote', label: 'Sportangebote', listSlug: 'top-10-sportangebote-in-aalen' },
      { slug: 'date-spots', label: 'Date-Spots', listSlug: 'top-10-date-spots-in-aalen' },
      { slug: 'sehenswurdigkeiten', label: 'Sehenswürdigkeiten', listSlug: 'top-10-sehenswuerdigkeiten-in-aalen' },
    ],
  },
  {
    slug: 'dienstleister',
    label: 'Dienstleister',
    emoji: '',
    description: 'Professionelle Dienstleister und Experten in Aalen.',
    subcategories: [
      { slug: 'versicherungen', label: 'Versicherungen', listSlug: 'top-10-versicherungen-in-aalen' },
      { slug: 'banken', label: 'Banken', listSlug: 'top-10-banken-in-aalen' },
      { slug: 'friseure', label: 'Friseure', listSlug: 'top-10-friseure-in-aalen' },
      { slug: 'barbiere', label: 'Barbiere', listSlug: 'top-10-barbiere-in-aalen' },
      { slug: 'reinigungsfirmen', label: 'Reinigungsfirmen', listSlug: 'top-10-reinigungsfirmen-in-aalen' },
      { slug: 'steuerberater', label: 'Steuerberater', listSlug: 'top-10-steuerberater-in-aalen' },
      { slug: 'fotografen', label: 'Fotografen', listSlug: 'top-10-fotografen-in-aalen' },
      { slug: 'webagenturen', label: 'Webagenturen', listSlug: 'top-10-webagenturen-in-aalen' },
      { slug: 'werbeagenturen', label: 'Werbeagenturen', listSlug: 'top-10-werbeagenturen-in-aalen' },
      { slug: 'unternehmensberater', label: 'Unternehmensberater', listSlug: 'top-10-unternehmensberater-in-aalen' },
      { slug: 'it-dienstleister', label: 'IT-Dienstleister', listSlug: 'top-10-it-dienstleister-in-aalen' },
      { slug: 'social-media-beratung', label: 'Social-Media-Beratung', listSlug: 'top-10-social-media-beratung-in-aalen' },
      { slug: 'social-media', label: 'Social-Media-Agenturen', listSlug: 'top-10-social-media-agenturen-in-aalen' },
    ],
  },
  {
    slug: 'beauty-wellness',
    label: 'Beauty & Wellness',
    emoji: '',
    description: 'Schönheit, Pflege und Wellness in Aalen.',
    subcategories: [
      { slug: 'kosmetikstudios', label: 'Kosmetikstudios', listSlug: 'top-10-kosmetikstudios-in-aalen' },
      { slug: 'nagelstudios', label: 'Nagelstudios', listSlug: 'top-10-nagelstudios-in-aalen' },
      { slug: 'massagestudios', label: 'Massagestudios', listSlug: 'top-10-massagestudios-in-aalen' },
      { slug: 'wellnessanbieter', label: 'Wellnessanbieter', listSlug: 'top-10-wellnessanbieter-in-aalen' },
      { slug: 'spas', label: 'Spas', listSlug: 'top-10-spas-in-aalen' },
      { slug: 'tattoostudios', label: 'Tattoostudios', listSlug: 'top-10-tattoostudios-in-aalen' },
    ],
  },
  {
    slug: 'gesundheit',
    label: 'Gesundheit',
    emoji: '',
    description: 'Ärzte, Therapeuten und Gesundheitszentren in Aalen.',
    subcategories: [
      { slug: 'optiker', label: 'Optiker', listSlug: 'top-10-optiker-in-aalen' },
      { slug: 'zahnarzte', label: 'Zahnärzte', listSlug: 'top-10-zahnaerzte-in-aalen' },
      { slug: 'physiotherapie', label: 'Physiotherapie', listSlug: 'top-10-physiotherapie-in-aalen' },
      { slug: 'orthopaden', label: 'Orthopäden', listSlug: 'top-10-orthopaden-in-aalen' },
      { slug: 'hausarztpraxen', label: 'Hausarztpraxen', listSlug: 'top-10-hausarztpraxen-in-aalen' },
      { slug: 'apotheken', label: 'Apotheken', listSlug: 'top-10-apotheken-in-aalen' },
      { slug: 'gesundheitszentren', label: 'Gesundheitszentren', listSlug: 'top-10-gesundheitszentren-in-aalen' },
    ],
  },
  {
    slug: 'handwerk',
    label: 'Handwerk',
    emoji: '',
    description: 'Handwerker und Fachbetriebe in Aalen.',
    subcategories: [
      { slug: 'elektriker', label: 'Elektriker', listSlug: 'top-10-elektriker-in-aalen' },
      { slug: 'sanitarbetriebe', label: 'Sanitärbetriebe', listSlug: 'top-10-sanitarbetriebe-in-aalen' },
      { slug: 'malerbetriebe', label: 'Malerbetriebe', listSlug: 'top-10-malerbetriebe-in-aalen' },
      { slug: 'umzugsfirmen', label: 'Umzugsfirmen', listSlug: 'top-10-umzugsfirmen-in-aalen' },
      { slug: 'schreinereien', label: 'Schreinereien', listSlug: 'top-10-schreinereien-in-aalen' },
      { slug: 'dachdecker', label: 'Dachdecker', listSlug: 'top-10-dachdecker-in-aalen' },
    ],
  },
  {
    slug: 'wohnen-immobilien',
    label: 'Wohnen & Immobilien',
    emoji: '',
    description: 'Immobilien, Einrichtung und Wohnen in Aalen.',
    subcategories: [
      { slug: 'immobilienmakler', label: 'Immobilienmakler', listSlug: 'top-10-immobilienmakler-in-aalen' },
      { slug: 'kuchenstudios', label: 'Küchenstudios', listSlug: 'top-10-kuchenstudios-in-aalen' },
      { slug: 'innenausbauer', label: 'Innenausbauer', listSlug: 'top-10-innenausbauer-in-aalen' },
      { slug: 'mobelhauser', label: 'Möbelhäuser', listSlug: 'top-10-mobelhauser-in-aalen' },
      { slug: 'hausverwaltungen', label: 'Hausverwaltungen', listSlug: 'top-10-hausverwaltungen-in-aalen' },
    ],
  },
  {
    slug: 'auto-mobilitat',
    label: 'Auto & Mobilität',
    emoji: '',
    description: 'Kfz-Betriebe, Fahrschulen und Mobilität in Aalen.',
    subcategories: [
      { slug: 'tankstellen', label: 'Tankstellen', listSlug: 'top-10-tankstellen-in-aalen' },
      { slug: 'autowerkstatten', label: 'Autowerkstätten', listSlug: 'top-10-autowerkstaetten-in-aalen' },
      { slug: 'fahrschulen', label: 'Fahrschulen', listSlug: 'top-10-fahrschulen-in-aalen' },
      { slug: 'autohauser', label: 'Autohäuser', listSlug: 'top-10-autohauser-in-aalen' },
      { slug: 'reifenservices', label: 'Reifenservices', listSlug: 'top-10-reifenservices-in-aalen' },
      { slug: 'aufbereitungsdienste', label: 'Aufbereitungsdienste', listSlug: 'top-10-aufbereitungsdienste-in-aalen' },
    ],
  },
  {
    slug: 'hochzeit-events',
    label: 'Hochzeit & Events',
    emoji: '',
    description: 'Hochzeitslocations, Fotografen und Events in Aalen.',
    subcategories: [
      { slug: 'hochzeitslocations', label: 'Hochzeitslocations', listSlug: 'top-10-hochzeitslocations-in-aalen' },
      { slug: 'hochzeitsfotografen', label: 'Hochzeitsfotografen', listSlug: 'top-10-hochzeitsfotografen-in-aalen' },
      { slug: 'caterer', label: 'Caterer', listSlug: 'top-10-caterer-in-aalen' },
      { slug: 'djs', label: 'DJs', listSlug: 'top-10-djs-in-aalen' },
      { slug: 'eventlocations', label: 'Eventlocations', listSlug: 'top-10-eventlocations-in-aalen' },
      { slug: 'floristen', label: 'Floristen', listSlug: 'top-10-floristen-in-aalen' },
    ],
  },
  {
    slug: 'shopping',
    label: 'Shopping',
    emoji: '',
    description: 'Lokale Geschäfte, Boutiquen und Shopping in Aalen.',
    subcategories: [
      { slug: 'elektronikmaerkte', label: 'Elektronik & Technik', listSlug: 'top-10-elektronik-und-technik-in-aalen' },
      { slug: 'fahrradlaeden', label: 'Fahrradläden', listSlug: 'top-10-fahrradlaeden-in-aalen' },
      { slug: 'supermaerkte', label: 'Supermärkte', listSlug: 'top-10-supermaerkte-in-aalen' },
      { slug: 'metzgereien', label: 'Metzgereien', listSlug: 'top-10-metzgereien-in-aalen' },
      { slug: 'boutiquen', label: 'Boutiquen', listSlug: 'top-10-boutiquen-in-aalen' },
      { slug: 'backereien', label: 'Bäckereien', listSlug: 'top-10-baeckereien-in-aalen' },
      { slug: 'feinkostladen', label: 'Feinkostläden', listSlug: 'top-10-feinkostladen-in-aalen' },
      { slug: 'juweliere', label: 'Juweliere', listSlug: 'top-10-juweliere-in-aalen' },
      { slug: 'geschenkeshops', label: 'Geschenkeshops', listSlug: 'top-10-geschenkeshops-in-aalen' },
    ],
  },
  {
    slug: 'familie',
    label: 'Familie & Kinder',
    emoji: '',
    description: 'Spielplätze, Kinderbetreuung und Orte für Familien in Aalen.',
    subcategories: [
      { slug: 'kindergaerten', label: 'Kindergärten', listSlug: 'top-10-kindergaerten-in-aalen' },
      { slug: 'spielplaetze', label: 'Spielplätze', listSlug: 'top-10-spielplaetze-in-aalen' },
    ],
  },
  {
    slug: 'uebernachten',
    label: 'Übernachten',
    emoji: '',
    description: 'Hotels, Pensionen und Unterkünfte in Aalen.',
    subcategories: [
      { slug: 'hotels', label: 'Hotels', listSlug: 'top-10-hotels-in-aalen' },
    ],
  },
]

const listSlugs = new Set(top10Lists.map((list) => list.slug))

/**
 * Nur Subkategorien ausliefern, fuer die es tatsaechlich eine Liste gibt.
 * Sonst verlinken Kategorieseiten auf Unterseiten, die es nicht gibt.
 * Kategorien ohne verbleibende Subkategorie fallen ganz raus.
 */
export const categories: Category[] = rawCategories
  .map((category) => ({
    ...category,
    subcategories: category.subcategories.filter((sub) => listSlugs.has(sub.listSlug)),
  }))
  .filter((category) => category.subcategories.length > 0)

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
