const searchVerification = {
  google:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    process.env.GOOGLE_SITE_VERIFICATION ||
    '',
  bing:
    process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
    process.env.BING_SITE_VERIFICATION ||
    '',
}

export const siteConfig = {
  name: 'AA Listen',
  shortName: 'AA Listen',
  description:
    'Redaktionelle Top-10-Listen und lokale Empfehlungen für Aalen — eingeordnet für Gastro, Freizeit, Dienstleister, Beauty und Gesundheit.',
  shortDescription: 'Redaktionelle lokale Empfehlungen für Aalen.',
  url: 'https://www.aa-listen.de',
  city: 'Aalen',
  cityShort: 'AA',
  region: 'Baden-Württemberg',
  postalCode: '73430',
  country: 'DE',
  language: 'de',
  locale: 'de_DE',
  publisher: {
    name: 'Nesani UG (haftungsbeschränkt)',
    url: 'https://www.nesani.de',
    address: 'Basilikumweg 8, 73527 Schwäbisch Gmünd',
    email: 'info@nesani.de',
  },
  twitter: '@nesani_de',
  ogImage: '/opengraph-image',
  themeColor: '#f7f3ea',
  verification: searchVerification,
  keywords: [
    'Aalen',
    'AA Listen',
    'Top 10 Aalen',
    'lokale Empfehlungen',
    'beste Restaurants Aalen',
    'beste Cafés Aalen',
    'Branchenverzeichnis Aalen',
    'lokale Anbieter AA',
    'Aalen Tipps',
  ],
} as const

export const navLinks = [
  { label: 'Kategorien', href: '/kategorie' },
  { label: 'Top 10 Listen', href: '/top10' },
  { label: 'Blog', href: '/blog' },
  { label: 'Für Unternehmen', href: '/fuer-unternehmen' },
  { label: 'Über uns', href: '/ueber-aa-listen' },
]

export const footerLinks = {
  platform: [
    { label: 'Kategorien', href: '/kategorie' },
    { label: 'Methodik', href: '/methodik' },
    { label: 'Blog', href: '/blog' },
    { label: 'Über AA Listen', href: '/ueber-aa-listen' },
  ],
  unternehmen: [
    { label: 'Für Unternehmen', href: '/fuer-unternehmen' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
}

// Schwesterportale. Jede Seite verlinkt im Footer auf die beiden anderen
// Staedte, damit Besucher und Suchmaschinen das Netz als zusammengehoerig
// erkennen. Das eigene Portal steht bewusst nicht in der Liste.
export const sisterSites = [
  { brand: 'GD Listen', city: 'Schwäbisch Gmünd', url: 'https://www.gd-listen.de' },
  { brand: 'S Listen', city: 'Stuttgart', url: 'https://www.s-listen.de' },
]
