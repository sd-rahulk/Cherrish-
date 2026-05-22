import wedding from "@/assets/service-wedding.jpg";
import prewedding from "@/assets/service-prewedding.jpg";
import maternity from "@/assets/service-maternity.jpg";
import newborn from "@/assets/service-newborn.jpg";
import family from "@/assets/service-family.jpg";
import corporate from "@/assets/service-corporate.jpg";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  priceFrom: string;
  overview: string[];
  durations: { label: string; price: string }[];
  included: string[];
  experience: { step: string; title: string; copy: string }[];
  benefits: { title: string; copy: string }[];
  forYou: string[];
  notForYou: string[];
  faqs: { q: string; a: string }[];
  forWho: string;
};

export const services: Service[] = [
  {
    slug: "weddings",
    name: "Weddings",
    tagline: "Heirloom storytelling for the most important day of your life.",
    image: wedding,
    priceFrom: "From ₹1,25,000",
    overview: [
      "A wedding is not a content shoot. It is an heirloom — something your grandchildren will hold. Our wedding coverage is built around presence, restraint, and the kind of patience that catches the in-between moments most cameras miss.",
      "From the haldi at dawn to the last sparkler of the reception, we move quietly through your day, photographing what is honest and beautiful in equal measure.",
    ],
    durations: [
      { label: "Single Day — Up to 10 hours", price: "₹1,25,000" },
      { label: "Two Day — Ceremony + Reception", price: "₹2,25,000" },
      { label: "Complete — Haldi to Reception", price: "₹3,50,000" },
    ],
    included: [
      "Two lead photographers and one assistant",
      "Cinematic film highlight reel (3–5 minutes)",
      "Hand-edited gallery of 600–1,200 images",
      "Heirloom album in premium silk linen",
      "Online private gallery for sharing",
      "Pre-wedding planning consultation",
    ],
    experience: [
      { step: "01", title: "Discovery call", copy: "We meet over coffee or video to understand your story, your families, and the rhythm of your day." },
      { step: "02", title: "Planning visit", copy: "A walkthrough of venues and timeline so nothing on the day is improvised." },
      { step: "03", title: "The day itself", copy: "Calm, present, almost invisible. We document — we never direct." },
      { step: "04", title: "Curated edit", copy: "Six weeks of careful selection, colour grading, and album design." },
      { step: "05", title: "Heirloom delivery", copy: "Your album arrives hand-bound, with a private viewing in our studio." },
    ],
    benefits: [
      { title: "Documentary first", copy: "Real moments, never staged. Posed portraits are kept brief." },
      { title: "Cinematic film", copy: "A short film you will actually watch — and rewatch." },
      { title: "Heirloom album", copy: "Printed in Italy on fine art paper, made to outlast trends." },
    ],
    forYou: [
      "Couples who want honest, lived-in photographs",
      "Families that value craft over volume",
      "Weddings where presence matters more than performance",
    ],
    notForYou: [
      "Couples seeking heavily posed, conveyor-belt coverage",
      "Same-day social media edits as the primary deliverable",
    ],
    faqs: [
      { q: "Do you travel for destination weddings?", a: "Yes. We shoot across India and abroad. Travel and stay are billed at cost." },
      { q: "When do we receive the final gallery?", a: "Highlights within ten days. Full gallery in six weeks. Albums in twelve." },
      { q: "Can we customise the package?", a: "Always. Tell us what you actually need and we will build it around you." },
    ],
    forWho: "Couples planning a wedding in Bengaluru, Karnataka, or beyond who want photography that feels honest, beautiful, and built to last generations.",
  },
  {
    slug: "pre-wedding",
    name: "Pre-Wedding",
    tagline: "A quiet afternoon that becomes the first chapter of your story.",
    image: prewedding,
    priceFrom: "From ₹35,000",
    overview: [
      "Before the wedding circus begins, there is a softer, smaller story worth telling — the two of you, in love, in a place that means something.",
      "We shoot pre-weddings as if they were short films. A morning at a coffee estate, a walk through Cubbon Park at first light, an afternoon in the Nilgiris. We bring location ideas. You bring yourselves.",
    ],
    durations: [
      { label: "Half Day — One location", price: "₹35,000" },
      { label: "Full Day — Two locations", price: "₹60,000" },
      { label: "Destination — Travel inclusive", price: "From ₹95,000" },
    ],
    included: [
      "Concept and location planning call",
      "Up to 8 hours of on-location coverage",
      "Wardrobe and styling guidance",
      "120–250 hand-edited images",
      "Short reel for social",
      "Online private gallery",
    ],
    experience: [
      { step: "01", title: "Concept call", copy: "We talk about who you are and where you feel like yourselves." },
      { step: "02", title: "Location scout", copy: "We send you three location options with reference moodboards." },
      { step: "03", title: "Shoot day", copy: "Unhurried, mostly walking, occasional gentle direction." },
      { step: "04", title: "Edit & deliver", copy: "Two weeks from shoot to gallery." },
    ],
    benefits: [
      { title: "Natural direction", copy: "No awkward poses. We give you something to do, not something to perform." },
      { title: "Cinematic locations", copy: "Curated spots you would not find on a checklist." },
      { title: "Wardrobe styling", copy: "Help with palette, fabric, and pairing — at no extra cost." },
    ],
    forYou: ["Couples who feel awkward in front of a camera", "Anyone planning save-the-dates or wedding invites"],
    notForYou: ["Couples wanting a heavily themed studio concept shoot"],
    faqs: [
      { q: "How early should we book?", a: "Six to eight weeks ahead, especially for outdoor light windows." },
      { q: "Do you provide outfits?", a: "We don't, but we share a styling guide and trusted rental partners." },
      { q: "Can we do an indoor studio shoot instead?", a: "Yes — our HSR Layout studio is available year-round." },
    ],
    forWho: "Couples engaged or soon-to-be, who want a relaxed, cinematic afternoon together before the wedding rush begins.",
  },
  {
    slug: "maternity",
    name: "Maternity",
    tagline: "A portrait of becoming — softly lit, slowly made.",
    image: maternity,
    priceFrom: "From ₹18,000",
    overview: [
      "Maternity portraits are quiet work. We shoot them slowly, in soft window light, in our HSR Layout studio or in your home — wherever you feel most yourself.",
      "Expect long pauses, gentle music, tea, and a session that feels nothing like a transaction.",
    ],
    durations: [
      { label: "Studio Session — 90 minutes", price: "₹18,000" },
      { label: "Luxury Session — wardrobe + hair", price: "₹32,000" },
      { label: "At-Home Session — within Bengaluru", price: "₹28,000" },
    ],
    included: [
      "Pre-session styling consultation",
      "Use of studio wardrobe (luxury)",
      "Professional hair and makeup (luxury)",
      "30–60 hand-edited images",
      "Five fine art prints",
      "Online private gallery",
    ],
    experience: [
      { step: "01", title: "Styling chat", copy: "Palette, silhouette, what feels right at this stage." },
      { step: "02", title: "Arrive & settle", copy: "Tea, music, no rush." },
      { step: "03", title: "Quiet shoot", copy: "Window light, simple poses, lots of space to breathe." },
      { step: "04", title: "Prints in hand", copy: "Fine art prints delivered to your door in two weeks." },
    ],
    benefits: [
      { title: "Soft and unhurried", copy: "We work at your pace, with frequent breaks." },
      { title: "Studio wardrobe", copy: "Curated maternity gowns in earth tones and neutrals." },
      { title: "Heirloom prints", copy: "Archival fine art paper, ready to frame." },
    ],
    forYou: ["Expecting mothers in their second or third trimester", "Anyone wanting an intimate, art-led portrait"],
    notForYou: ["High-concept themed maternity shoots with elaborate props"],
    faqs: [
      { q: "When is the best time to book?", a: "Between 28 and 34 weeks for the most flattering silhouette." },
      { q: "Can my partner or older children join?", a: "Of course. We love family maternity sessions." },
      { q: "Do you photograph men's pregnancy reveals?", a: "We photograph all kinds of families. Just ask." },
    ],
    forWho: "Mothers-to-be in Bengaluru wanting a calm, beautifully lit portrait session that honours this brief, important season.",
  },
  {
    slug: "newborn",
    name: "Newborn & Baby",
    tagline: "Tiny hands, sleeping faces — held still for a moment.",
    image: newborn,
    priceFrom: "From ₹15,000",
    overview: [
      "We photograph newborns in the first three weeks of life, when they still curl, sleep, and exist in a world of their own. Sessions are slow, warm, and led entirely by the baby.",
      "Our HSR Layout studio is heated, sanitised, and stocked with everything we need so parents can simply rest.",
    ],
    durations: [
      { label: "Newborn Session — up to 4 hours", price: "₹15,000" },
      { label: "Baby Milestone — 3, 6, 9 months", price: "₹12,000" },
      { label: "First Year Package — 4 sessions", price: "₹48,000" },
    ],
    included: [
      "Heated, sanitised studio",
      "All wraps, baskets, and props",
      "Up to 4 hours, feeds and naps included",
      "30 hand-edited images",
      "Three fine art prints",
      "Online private gallery",
    ],
    experience: [
      { step: "01", title: "Pre-session call", copy: "We talk through sleep, feeding, and any preferences." },
      { step: "02", title: "Arrive and settle", copy: "Warm room, soft music, no clock." },
      { step: "03", title: "Slow shoot", copy: "Baby leads. We follow." },
      { step: "04", title: "Prints delivered", copy: "Editing within two weeks, prints within four." },
    ],
    benefits: [
      { title: "Newborn-safe", copy: "Trained in newborn handling and posing safety." },
      { title: "Heated studio", copy: "Always 26°C, so baby stays comfortable." },
      { title: "Parents-included", copy: "We always make time for family portraits." },
    ],
    forYou: ["Newborns aged 5–21 days", "Babies between 3 and 12 months for milestones"],
    notForYou: ["High-concept themed newborn shoots with elaborate digital composites"],
    faqs: [
      { q: "When should we book?", a: "During the second trimester. We hold a tentative date around your due date." },
      { q: "What if baby is fussy?", a: "We have all day. We pause, feed, soothe, and resume." },
      { q: "Do you do at-home sessions?", a: "Yes, within Bengaluru, for a small travel fee." },
    ],
    forWho: "Parents of newborns and babies in their first year, looking for a calm, safe, and beautifully made portrait session.",
  },
  {
    slug: "family-portraits",
    name: "Family Portraits",
    tagline: "The people you love, the way you see them.",
    image: family,
    priceFrom: "From ₹20,000",
    overview: [
      "Family portraits should not feel like a hostage situation. Ours don't. We photograph multiple generations the way they actually exist together — talking, laughing, occasionally arguing about where to stand.",
      "Indoors or outdoors, in your home or in a quiet park, we work with the energy in the room rather than against it.",
    ],
    durations: [
      { label: "Studio Session — 1 hour", price: "₹20,000" },
      { label: "Outdoor Session — 2 hours", price: "₹28,000" },
      { label: "Extended Family — up to 12 people", price: "₹40,000" },
    ],
    included: [
      "Pre-session styling guide",
      "Up to 2 hours of coverage",
      "40 hand-edited images",
      "One framed 12x16 print",
      "Online private gallery",
    ],
    experience: [
      { step: "01", title: "Plan together", copy: "We pick the place, the palette, and the time of day." },
      { step: "02", title: "Warm-up", copy: "Five minutes of walking and talking before any camera comes out." },
      { step: "03", title: "Real moments", copy: "We mix candid coverage with a few classic family portraits." },
      { step: "04", title: "Delivery", copy: "Edited gallery within two weeks." },
    ],
    benefits: [
      { title: "Multigenerational", copy: "We are experienced with grandparents, toddlers, and everyone in between." },
      { title: "Real moments", copy: "Candid first, posed second." },
      { title: "Print-ready", copy: "Every image is colour-graded for fine art print." },
    ],
    forYou: ["Multi-generational families", "Anniversary or milestone celebrations", "Families with young children"],
    notForYou: ["Single-subject corporate headshots — see our Corporate package"],
    faqs: [
      { q: "What should we wear?", a: "We send a curated styling guide once you book." },
      { q: "How long is the session?", a: "Studio one hour, outdoors two. Extended family can run longer." },
      { q: "Can we bring our dog?", a: "Always." },
    ],
    forWho: "Families in Bengaluru wanting honest, beautifully made portraits to mark a milestone or simply this stage of life.",
  },
  {
    slug: "corporate-headshots",
    name: "Corporate & Headshots",
    tagline: "Editorial portraits for founders, teams, and the people who lead them.",
    image: corporate,
    priceFrom: "From ₹8,000",
    overview: [
      "Most corporate headshots look like they were taken at a passport counter. Ours don't. We light each subject individually, direct gently, and produce portraits that actually look like the human being you would meet at a meeting.",
      "We shoot in our studio or on-site at your office, with full team coordination for groups of any size.",
    ],
    durations: [
      { label: "Individual Headshot — 30 minutes", price: "₹8,000" },
      { label: "Team Session — up to 10 people", price: "₹45,000" },
      { label: "On-site Half Day", price: "₹65,000" },
    ],
    included: [
      "Studio or on-site shoot",
      "Professional lighting and backdrop",
      "Light retouching on selected images",
      "3 final images per individual",
      "Web and print-ready files",
      "48-hour turnaround available",
    ],
    experience: [
      { step: "01", title: "Brief", copy: "We talk about brand, tone, and how the portraits will be used." },
      { step: "02", title: "Shoot", copy: "30 minutes per person, with light direction and posing." },
      { step: "03", title: "Selection", copy: "You pick your favourites from a private gallery." },
      { step: "04", title: "Retouch & deliver", copy: "Final edits within five working days." },
    ],
    benefits: [
      { title: "Consistent look", copy: "Every team member shot under identical conditions." },
      { title: "Editorial direction", copy: "Portraits that look human, not template." },
      { title: "Fast turnaround", copy: "48-hour rush available for launches and PR." },
    ],
    forYou: ["Startups and growing teams", "Founders refreshing their brand", "Anyone with a Notion page that still has placeholder avatars"],
    notForYou: ["High-volume passport / visa shoots — we do those too, separately"],
    faqs: [
      { q: "Can you shoot at our office?", a: "Yes. We carry a full mobile studio kit." },
      { q: "Do you offer monthly retainers?", a: "We do, for growing teams. Ask for our retainer brief." },
      { q: "Will the team's photos look consistent?", a: "Yes — same light, same crop, same colour grade." },
    ],
    forWho: "Founders, leadership teams, and growing companies in Bengaluru who need portraits that look as considered as their brand.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
