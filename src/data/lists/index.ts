import { companies } from '@/data/companies'
import type { FAQItem } from '@/lib/content-types'

export interface RankingEntry {
  rank: number
  name: string
  description: string
  tags: string[]
  slug: string
  website?: string
  logo?: string
}

export interface Top10List {
  slug: string
  title: string
  categorySlug: string
  subcategorySlug: string
  updatedAt: string
  intro: string
  seoIntro?: string
  whyItMatters?: string
  faq?: FAQItem[]
  lastReviewedAt?: string
  sponsoredEntry?: RankingEntry
  entries: RankingEntry[]
}

const companyMap = new Map(companies.map((company) => [company.slug, company]))

export function buildEntry(rank: number, slug: string): RankingEntry {
  const company = companyMap.get(slug)

  if (!company) {
    throw new Error(`Company with slug ${slug} not found for ranking list.`)
  }

  return {
    rank,
    name: company.name,
    description: company.description,
    tags: company.tags.slice(0, 3),
    slug: company.slug,
    website: company.website,
    logo: company.logo,
  }
}

export function buildSponsoredEntry(slug: string): RankingEntry {
  return buildEntry(0, slug)
}

export const top10Lists: Top10List[] = [
  {
    slug: "top-10-autowerkstaetten-in-aalen",
    title: "Top 10 Autowerkstätten in Aalen",
    categorySlug: "auto-mobilitat",
    subcategorySlug: "autowerkstatten",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Autowerkstätten in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "autowerkstatt-philipp"),
      buildEntry(2, "autoservice-tuekeler"),
      buildEntry(3, "volkswagen"),
      buildEntry(4, "boxenstop-ostalb-ug"),
      buildEntry(5, "roro-reifenservice-werkstatt"),
      buildEntry(6, "agm-autoglas"),
      buildEntry(7, "abschleppdienst-rueckert"),
      buildEntry(8, "auto-sauer"),
      buildEntry(9, "auto-stegmeier-ford"),
      buildEntry(10, "weisshaar-karosserie-und-fahrzeugbau"),
    ],
  },
  {
    slug: "top-10-friseure-in-aalen",
    title: "Top 10 Friseure in Aalen",
    categorySlug: "dienstleister",
    subcategorySlug: "friseure",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Friseure in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "haarstudio-annero"),
      buildEntry(2, "megastyle"),
      buildEntry(3, "salon-mangold"),
      buildEntry(4, "b-styled-hairdressing"),
      buildEntry(5, "hair-concept"),
      buildEntry(6, "hairstyle-la-vista"),
      buildEntry(7, "kat-und-more"),
      buildEntry(8, "megastyle-haarstudio"),
      buildEntry(9, "profi-cut"),
      buildEntry(10, "salon-meralemir"),
    ],
  },
  {
    slug: "top-10-sehenswuerdigkeiten-in-aalen",
    title: "Top 10 Sehenswürdigkeiten in Aalen",
    categorySlug: "freizeit",
    subcategorySlug: "sehenswurdigkeiten",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Sehenswürdigkeiten in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "explorhino-science-center-schuelerlabor"),
      buildEntry(2, "besucherbergwerk-tiefer-stollen"),
      buildEntry(3, "schloss-fachsenfeld"),
      buildEntry(4, "urweltmuseum"),
      buildEntry(5, "limesmuseum"),
      buildEntry(6, "sammelsurium-museum"),
      buildEntry(7, "ebnater-schaettere-club"),
      buildEntry(8, "eisenbahnfreunde-aalen-e-v"),
      buildEntry(9, "haus-der-stadtgeschichte"),
      buildEntry(10, "kunstverein-galerie"),
    ],
  },
  {
    slug: "top-10-sportangebote-in-aalen",
    title: "Top 10 Sportangebote in Aalen",
    categorySlug: "freizeit",
    subcategorySlug: "sportangebote",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Sportangebote in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "activated-lasertag"),
      buildEntry(2, "vitasports"),
      buildEntry(3, "active-gym-aalen"),
      buildEntry(4, "galgenberghalle"),
      buildEntry(5, "schuetzenkameradschaft-dewangen-1934"),
      buildEntry(6, "freibad-spiesel"),
      buildEntry(7, "glueck-auf-halle"),
      buildEntry(8, "jurahalle"),
      buildEntry(9, "max-eyth-halle"),
      buildEntry(10, "ulrich-pfeifle-halle"),
    ],
  },
  {
    slug: "top-10-bars-in-aalen",
    title: "Top 10 Bars in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "bars",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Bars in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "cafe-und-bar-zum-brezga-blase"),
      buildEntry(2, "havanna-bar"),
      buildEntry(3, "bar-und-restaurant-spion"),
      buildEntry(4, "cafe-frape"),
      buildEntry(5, "musikerheim-mv-fachsenfeld"),
      buildEntry(6, "brezge"),
      buildEntry(7, "olamer-schachtel"),
      buildEntry(8, "bistro-schlepper"),
      buildEntry(9, "cafe-luther"),
      buildEntry(10, "rock-kneipe-zb"),
    ],
  },
  {
    slug: "top-10-cafes-in-aalen",
    title: "Top 10 Cafés in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "cafes",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Cafés in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "rino"),
      buildEntry(2, "cafe-podium"),
      buildEntry(3, "eiscafe-venezia"),
      buildEntry(4, "samocca-integratives-cafe"),
      buildEntry(5, "liberty"),
      buildEntry(6, "anja-s-cafe"),
      buildEntry(7, "rosmarie"),
      buildEntry(8, "cafe-bistro"),
      buildEntry(9, "cafe-schieber"),
      buildEntry(10, "konrad"),
    ],
  },
  {
    slug: "top-10-doenerlaeden-in-aalen",
    title: "Top 10 Dönerläden in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "doener",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Dönerläden in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "carisma-imbiss"),
      buildEntry(2, "ali-baba"),
      buildEntry(3, "ali-baba-doener-pide-pizza"),
      buildEntry(4, "the-daltons-kebab"),
      buildEntry(5, "benizza-pizza-und-kebap"),
      buildEntry(6, "oez-antep-sofras"),
      buildEntry(7, "the-daltons-kebab-2"),
      buildEntry(8, "duran-imbiss"),
      buildEntry(9, "marmaris-imbiss"),
      buildEntry(10, "defne"),
    ],
  },
  {
    slug: "top-10-italiener-in-aalen",
    title: "Top 10 Italiener in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "italiener",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Italiener in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "aposto"),
      buildEntry(2, "l-osteria"),
      buildEntry(3, "ristorante-pizzeria-incontro"),
      buildEntry(4, "rauchfang-pizzeria"),
      buildEntry(5, "ristorante-da-vito"),
      buildEntry(6, "ristorante-pizzeria-zinella"),
      buildEntry(7, "la-rustica"),
      buildEntry(8, "pizza-bakery"),
      buildEntry(9, "trattoria-buongiorno"),
      buildEntry(10, "pizzeria-italia"),
    ],
  },
  {
    slug: "top-10-restaurants-in-aalen",
    title: "Top 10 Restaurants in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "restaurants",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Restaurants in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "gasthaus-zum-roessle"),
      buildEntry(2, "landgasthof-laeuterhaeusle"),
      buildEntry(3, "3reak"),
      buildEntry(4, "asia-gourmet"),
      buildEntry(5, "bierhalle"),
      buildEntry(6, "enchilada"),
      buildEntry(7, "hotel-grauleshof"),
      buildEntry(8, "naturfreundehaus-am-brand"),
      buildEntry(9, "nieu-37"),
      buildEntry(10, "restaurant-eichenhof"),
    ],
  },
  {
    slug: "top-10-apotheken-in-aalen",
    title: "Top 10 Apotheken in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "apotheken",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Apotheken in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "haertsfeld-apotheke"),
      buildEntry(2, "limes-apotheke"),
      buildEntry(3, "marien-apotheke"),
      buildEntry(4, "stadt-apotheke"),
      buildEntry(5, "apotheke-dr-jaeger"),
      buildEntry(6, "apotheke-im-facharztzentrum"),
      buildEntry(7, "hofherrn-apotheke"),
      buildEntry(8, "stern-apotheke"),
      buildEntry(9, "aala-apotheke"),
      buildEntry(10, "aeskulap-apotheke"),
    ],
  },
  {
    slug: "top-10-hausarztpraxen-in-aalen",
    title: "Top 10 Hausarztpraxen in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "hausarztpraxen",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Hausarztpraxen in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "gemeinschaftspraxis-dr-med-kolb-und-dr-medic-frankowski"),
      buildEntry(2, "dr-med-k-d-gaerisch-hals-nasen-ohrenarzt"),
      buildEntry(3, "dr-ursula-boesl-allgemeinmedizin-innere-medizin"),
      buildEntry(4, "dres-dieter-christian-rathgeber"),
      buildEntry(5, "kinderwunsch-zentrum-aalen"),
      buildEntry(6, "s-triebner-j-tobuschat"),
      buildEntry(7, "amplifon-deutschland-gmbh"),
      buildEntry(8, "augenkompetenz-zentren-aalen"),
      buildEntry(9, "dirk-paetzmann-hno-dr-josef-zech-hno"),
      buildEntry(10, "dr-andrea-schmetzer-dr-thilo-heising"),
    ],
  },
  {
    slug: "top-10-physiotherapie-in-aalen",
    title: "Top 10 Physiotherapie in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "physiotherapie",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Physiotherapie in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "physiotherapie-in-den-limes-thermen"),
      buildEntry(2, "physiowelt-aalen"),
      buildEntry(3, "ergo-aktiv"),
      buildEntry(4, "rosemarie-haegele"),
      buildEntry(5, "dietmar-romer"),
      buildEntry(6, "juergen-muehlbacher"),
      buildEntry(7, "michael-harner"),
      buildEntry(8, "thomas-kiesling"),
      buildEntry(9, "aktivital-physio"),
      buildEntry(10, "prophysio"),
    ],
  },
  {
    slug: "top-10-zahnaerzte-in-aalen",
    title: "Top 10 Zahnärzte in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "zahnarzte",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Zahnärzte in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "simone-nagel"),
      buildEntry(2, "zahnarztpraxis-dr-alisa-stegmeier"),
      buildEntry(3, "kuhnert-rainer"),
      buildEntry(4, "dr-karl-garzorz-zahnarzt"),
      buildEntry(5, "dr-med-dent-armin-buresch"),
      buildEntry(6, "lve"),
      buildEntry(7, "nikolaus-kuschill-andreas-stegmeier"),
      buildEntry(8, "dr-eva-krauss"),
      buildEntry(9, "jana-renee-ceylan"),
      buildEntry(10, "wellanddent"),
    ],
  },
  {
    slug: "top-10-baeckereien-in-aalen",
    title: "Top 10 Bäckereien in Aalen",
    categorySlug: "shopping",
    subcategorySlug: "backereien",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Bäckereien in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "baeckerei-gnaier"),
      buildEntry(2, "baeckerei-k-und-u"),
      buildEntry(3, "baeckerei-schmid-kuhn"),
      buildEntry(4, "baeckerei-und-cafe-eymann"),
      buildEntry(5, "baeckerei-und-stehcafe-eymann"),
      buildEntry(6, "baeckerei-walter"),
      buildEntry(7, "handwerksbaeckerei-mack"),
      buildEntry(8, "konditorei-ammann"),
      buildEntry(9, "welland-cafe"),
      buildEntry(10, "backparadies-und-cafe-berroth"),
    ],
  },
  {
    slug: "top-10-boutiquen-in-aalen",
    title: "Top 10 Boutiquen in Aalen",
    categorySlug: "shopping",
    subcategorySlug: "boutiquen",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Boutiquen in Aalen. Grundlage ist ein strukturierter Datenstand aus offenen Kartendaten (OpenStreetMap, Stand 2026-08); sortiert ist nach Vollständigkeit der hinterlegten Angaben — es handelt sich noch nicht um eine redaktionelle Qualitätsbewertung. AA Listen baut die Einordnung schrittweise aus.",
    entries: [
      buildEntry(1, "la-boutique"),
      buildEntry(2, "la-vie"),
      buildEntry(3, "rot-couture"),
      buildEntry(4, "gieggi-dessous"),
      buildEntry(5, "kinzler"),
      buildEntry(6, "c-und-a"),
      buildEntry(7, "mode-funk-kg"),
      buildEntry(8, "oui"),
      buildEntry(9, "betty-barclay"),
      buildEntry(10, "bonita"),
    ],
  },
]

export function getListBySlug(slug: string): Top10List | undefined {
  return top10Lists.find((list) => list.slug === slug)
}

export function getListsByCategory(categorySlug: string): Top10List[] {
  return top10Lists.filter((list) => list.categorySlug === categorySlug)
}

export const featuredLists = top10Lists.slice(0, 4)
