/**
 * Central content config for Baz International.
 * Edit this file to update copy, contact details, services, and imagery.
 */

export const site = {
  name: "Baz International",
  domain: "baz-international.com",
  tagline: "Freight that moves with clarity",
  description:
    "Baz International is a Jaipur-based freight forwarding partner for sea, air, and land shipments — with customs clearance and door-to-door inland connections.",
  phone: "8290439504",
  phoneHref: "tel:+918290439504",
  email: "salesbaz04@baz-international.com",
  emailHref: "mailto:salesbaz04@baz-international.com",
  address: {
    lines: [
      "Vinayak Apartment",
      "Plot no. 8, Second floor",
      "Vaishali Nagar, Gandhi Path",
      "Jaipur – 302021",
    ],
    city: "Jaipur",
    country: "India",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const images = {
  hero:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80",
  ocean:
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
  air: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
  road: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  customs:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1800&q=80",
} as const;

export const services = [
  {
    slug: "ocean-freight",
    title: "Ocean freight",
    short: "FCL & LCL at competitive sea rates with reliable sailing schedules.",
    body: "We organise domestic and international ocean shipments for full-container and less-than-container loads. Strong carrier relationships keep your cargo moving on dependable schedules with clear cost visibility.",
    image: images.ocean,
  },
  {
    slug: "air-freight",
    title: "Air freight",
    short: "Time-critical AIR cargo with careful handling from uplift to delivery.",
    body: "When transit time matters, our air freight desk books space, manages documentation, and coordinates uplift so high-value or urgent consignments reach destination without unnecessary delay.",
    image: images.air,
  },
  {
    slug: "road-rail",
    title: "Road & inland",
    short: "Door-to-door inland links by truck, rail, and barge connections.",
    body: "Origin-to-destination often needs more than one mode. We combine road, rail, and inland links into a practical door-to-door plan so first and last mile stay connected to the main haul.",
    image: images.road,
  },
  {
    slug: "customs-clearance",
    title: "Customs clearance",
    short: "Import-export formalities handled by people who know the rules.",
    body: "Our team works through customs rules, import-export policy, duty tariffs, and refund procedures so your cargo clears quickly and compliantly — with fewer surprises at the border.",
    image: images.customs,
  },
] as const;

export const cargoTypes = [
  "Wooden furniture",
  "Textiles",
  "Agro commodities",
  "Handicrafts",
  "Tyres",
  "Chemicals",
  "Plastics",
  "Machinery",
  "Food & liquids",
] as const;

export const pillars = [
  {
    title: "Trade-lane knowledge",
    body: "In-depth understanding of geographic trades and markets helps us recommend routes and modes that fit your cargo — not a one-size template.",
  },
  {
    title: "Carrier relationships",
    body: "Long-standing ties with reputable transportation partners mean more reliable space, smoother handoffs, and efficient delivery.",
  },
  {
    title: "Visibility & convenience",
    body: "You should never lose sight of your cargo. We keep information exchange simple so booking, updates, and coordination stay easy.",
  },
] as const;

export const homeCopy = {
  heroHeadline: "Global freight, grounded in Jaipur",
  heroSupport:
    "Sea, air, and land forwarding with customs clearance and door-to-door inland solutions — built for exporters and importers who need reliable movement.",
  heroCtaPrimary: "Request a quote",
  heroCtaSecondary: "Explore services",
  servicesIntro:
    "From FCL and LCL ocean moves to air uplift, inland haulage, and customs — one partner across the journey.",
  coverageTitle: "We cover the world",
  coverageBody:
    "Domestic and international deliveries by sea, air, and land. Competitive freight rates for furniture, liquids, food, heavy plant machinery, and more.",
  doorTitle: "Delivered to your door",
  doorBody:
    "Moving cargo from origin to destination often means multiple modes. We design door-to-door inland solutions that keep continental connections seamless.",
} as const;

export const aboutCopy = {
  title: "About Baz International",
  lead: "Baz International helps businesses move cargo with clarity — combining practical trade knowledge, dependable carrier networks, and attentive customs support from Jaipur.",
  story: [
    "What sets a forwarder apart is not a longer list of modes, but the ability to apply expert knowledge of individual geographic trades and markets. That focus shapes how we plan every shipment.",
    "Innovative, customised solutions remain central to how we work. With experience and careful execution, we support safe, efficient distribution across furniture, textiles, agro commodities, handicrafts, tyres, chemicals, plastics, and many other cargo types.",
    "Strong relationships with transportation partners underpin reliable, fast delivery. Customer convenience is the aim — clear communication, practical routing, and support that keeps your freight moving.",
  ],
} as const;
