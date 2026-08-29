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
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Autowerkstätten in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "autowerkstatt-philipp"),
      buildEntry(2, "roro-reifenservice-werkstatt"),
      buildEntry(3, "volkswagen"),
      buildEntry(4, "autoservice-tuekeler"),
      buildEntry(5, "agm-autoglas"),
      buildEntry(6, "atu"),
      buildEntry(7, "boxenstop-ostalb-ug"),
      buildEntry(8, "auto-pohl"),
      buildEntry(9, "rieger-und-ludwig-gmbh"),
      buildEntry(10, "auto-stegmeier-ford"),
    ],
  },
  {
    slug: "top-10-friseure-in-aalen",
    title: "Top 10 Friseure in Aalen",
    categorySlug: "dienstleister",
    subcategorySlug: "friseure",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Friseure in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "haarstudio-annero"),
      buildEntry(2, "megastyle-haarstudio"),
      buildEntry(3, "styleinartists"),
      buildEntry(4, "b-styled-hairdressing"),
      buildEntry(5, "megastyle"),
      buildEntry(6, "salon-meralemir"),
      buildEntry(7, "hair-concept"),
      buildEntry(8, "kat-und-more"),
      buildEntry(9, "salon-mangold"),
      buildEntry(10, "enjoyhairstyling"),
    ],
  },
  {
    slug: "top-10-sehenswuerdigkeiten-in-aalen",
    title: "Top 10 Sehenswürdigkeiten in Aalen",
    categorySlug: "freizeit",
    subcategorySlug: "sehenswurdigkeiten",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Sehenswürdigkeiten in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "explorhino-science-center-schuelerlabor"),
      buildEntry(2, "urweltmuseum"),
      buildEntry(3, "besucherbergwerk-tiefer-stollen"),
      buildEntry(4, "limesmuseum"),
      buildEntry(5, "schloss-fachsenfeld"),
      buildEntry(6, "eisenbahnfreunde-aalen-e-v"),
      buildEntry(7, "sammelsurium-museum"),
      buildEntry(8, "haus-der-stadtgeschichte"),
      buildEntry(9, "kunstverein-galerie"),
      buildEntry(10, "ebnater-schaettere-club"),
    ],
  },
  {
    slug: "top-10-sportangebote-in-aalen",
    title: "Top 10 Sportangebote in Aalen",
    categorySlug: "freizeit",
    subcategorySlug: "sportangebote",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Sportangebote in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "activated-lasertag"),
      buildEntry(2, "active-gym-aalen"),
      buildEntry(3, "vitasports"),
      buildEntry(4, "galgenberghalle"),
      buildEntry(5, "schuetzenkameradschaft-dewangen-1934"),
      buildEntry(6, "dirtline-duerrwiesen"),
      buildEntry(7, "petro-pawlidis-gmbh"),
      buildEntry(8, "pilates-und-more"),
      buildEntry(9, "thomas-zander-halle"),
      buildEntry(10, "karl-weiland-halle"),
    ],
  },
  {
    slug: "top-10-bars-in-aalen",
    title: "Top 10 Bars in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "bars",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Bars in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "cafe-und-bar-zum-brezga-blase"),
      buildEntry(2, "havanna-bar"),
      buildEntry(3, "cafe-luther"),
      buildEntry(4, "westside"),
      buildEntry(5, "cafe-frape"),
      buildEntry(6, "bar-und-restaurant-spion"),
      buildEntry(7, "alter-hobel"),
      buildEntry(8, "maverick-s-irish-pub"),
      buildEntry(9, "olamer-schachtel"),
      buildEntry(10, "verry"),
    ],
  },
  {
    slug: "top-10-cafes-in-aalen",
    title: "Top 10 Cafés in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "cafes",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Cafés in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "rino"),
      buildEntry(2, "cafe-podium"),
      buildEntry(3, "eiscafe-venezia"),
      buildEntry(4, "samocca-integratives-cafe"),
      buildEntry(5, "rosmarie"),
      buildEntry(6, "liberty"),
      buildEntry(7, "konrad"),
      buildEntry(8, "stadthoefle"),
      buildEntry(9, "cafe-puccini"),
      buildEntry(10, "cafe-schieber"),
    ],
  },
  {
    slug: "top-10-italiener-in-aalen",
    title: "Top 10 Italiener in Aalen",
    categorySlug: "gastro",
    subcategorySlug: "italiener",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Italiener in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "l-osteria"),
      buildEntry(2, "aposto"),
      buildEntry(3, "trattoria-buongiorno"),
      buildEntry(4, "pizza-bakery"),
      buildEntry(5, "la-rustica"),
      buildEntry(6, "ristorante-pizzeria-incontro"),
      buildEntry(7, "ristorante-pizzeria-zinella"),
      buildEntry(8, "ristorante-da-vito"),
      buildEntry(9, "rauchfang-pizzeria"),
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
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Restaurants in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "enchilada"),
      buildEntry(2, "bierhalle"),
      buildEntry(3, "nieu-37"),
      buildEntry(4, "split"),
      buildEntry(5, "asia-gourmet"),
      buildEntry(6, "indisches-restaurant-ganesha"),
      buildEntry(7, "taverna-dionysos"),
      buildEntry(8, "wilhelmshoehe"),
      buildEntry(9, "3reak"),
      buildEntry(10, "yuma-sushi-und-tapas"),
    ],
  },
  {
    slug: "top-10-apotheken-in-aalen",
    title: "Top 10 Apotheken in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "apotheken",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Apotheken in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "stern-apotheke"),
      buildEntry(2, "apotheke-im-facharztzentrum"),
      buildEntry(3, "apotheke-dr-jaeger"),
      buildEntry(4, "hofherrn-apotheke"),
      buildEntry(5, "adler-apotheke"),
      buildEntry(6, "apotheke-im-kaufland-birgit-hoelzer"),
      buildEntry(7, "apotheke-am-zob"),
      buildEntry(8, "limes-apotheke"),
      buildEntry(9, "marien-apotheke"),
      buildEntry(10, "stadt-apotheke"),
    ],
  },
  {
    slug: "top-10-hausarztpraxen-in-aalen",
    title: "Top 10 Hausarztpraxen in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "hausarztpraxen",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Hausarztpraxen in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "kinderwunsch-zentrum-aalen"),
      buildEntry(2, "dr-ursula-boesl-allgemeinmedizin-innere-medizin"),
      buildEntry(3, "frauenaerztin-n-kornelsen"),
      buildEntry(4, "augenkompetenz-zentren-aalen"),
      buildEntry(5, "dr-med-k-d-gaerisch-hals-nasen-ohrenarzt"),
      buildEntry(6, "dres-dieter-christian-rathgeber"),
      buildEntry(7, "gemeinschaftspraxis-dr-med-kolb-und-dr-medic-frankowski"),
      buildEntry(8, "s-triebner-j-tobuschat"),
      buildEntry(9, "mvz-augenheilkunde"),
      buildEntry(10, "dirk-paetzmann-hno-dr-josef-zech-hno"),
    ],
  },
  {
    slug: "top-10-physiotherapie-in-aalen",
    title: "Top 10 Physiotherapie in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "physiotherapie",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Physiotherapie in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "physiowelt-aalen"),
      buildEntry(2, "physiotherapie-in-den-limes-thermen"),
      buildEntry(3, "ergo-aktiv"),
      buildEntry(4, "rosemarie-haegele"),
      buildEntry(5, "michael-harner"),
      buildEntry(6, "dietmar-romer"),
      buildEntry(7, "thomas-kiesling"),
      buildEntry(8, "juergen-muehlbacher"),
      buildEntry(9, "physiotherapie-axel-staudenmaier"),
      buildEntry(10, "aktivital-physio"),
    ],
  },
  {
    slug: "top-10-zahnaerzte-in-aalen",
    title: "Top 10 Zahnärzte in Aalen",
    categorySlug: "gesundheit",
    subcategorySlug: "zahnarzte",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Zahnärzte in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "simone-nagel"),
      buildEntry(2, "zahnarztpraxis-dr-alisa-stegmeier"),
      buildEntry(3, "lve"),
      buildEntry(4, "dr-eva-krauss"),
      buildEntry(5, "nikolaus-kuschill-andreas-stegmeier"),
      buildEntry(6, "kuhnert-rainer"),
      buildEntry(7, "dr-med-dent-werner-baur"),
      buildEntry(8, "wellanddent"),
      buildEntry(9, "jana-renee-ceylan"),
      buildEntry(10, "dr-med-dent-armin-buresch"),
    ],
  },
  {
    slug: "top-10-baeckereien-in-aalen",
    title: "Top 10 Bäckereien in Aalen",
    categorySlug: "shopping",
    subcategorySlug: "backereien",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Bäckereien in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "baeckerei-gnaier"),
      buildEntry(2, "baeckerei-und-stehcafe-eymann"),
      buildEntry(3, "backparadies-und-cafe-berroth"),
      buildEntry(4, "konditorei-ammann"),
      buildEntry(5, "baeckerei-walter"),
      buildEntry(6, "baeckerei-und-cafe-eymann"),
      buildEntry(7, "baeckerei-schmid-kuhn"),
      buildEntry(8, "munz"),
      buildEntry(9, "handwerksbaeckerei-mack"),
      buildEntry(10, "das-macks"),
    ],
  },
  {
    slug: "top-10-boutiquen-in-aalen",
    title: "Top 10 Boutiquen in Aalen",
    categorySlug: "shopping",
    subcategorySlug: "boutiquen",
    updatedAt: "2026-08",
    lastReviewedAt: "2026-08",
    intro: "Diese Liste bündelt zehn Adressen aus dem Bereich Boutiquen in Aalen. Die Reihenfolge ist eine redaktionelle Einschätzung von AA Listen nach den Kriterien auf unserer Methodik-Seite: Erreichbarkeit und gepflegter Außenauftritt, Klarheit des Angebots, Lage im Stadtgebiet sowie Umfang der hinterlegten Leistungen. Kundenbewertungen fließen ausdrücklich nicht ein — dafür liegen uns keine belastbaren Daten vor. Ein objektives Qualitätsurteil ist damit nicht verbunden. Datenbasis: OpenStreetMap, Stand 2026-08.",
    entries: [
      buildEntry(1, "la-boutique"),
      buildEntry(2, "rot-couture"),
      buildEntry(3, "betty-barclay"),
      buildEntry(4, "gieggi-dessous"),
      buildEntry(5, "la-vie"),
      buildEntry(6, "bonita"),
      buildEntry(7, "h-und-m"),
      buildEntry(8, "kinzler"),
      buildEntry(9, "mango"),
      buildEntry(10, "c-und-a"),
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
