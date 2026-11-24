/* MANOR — demo streetwear shop. Vanilla JS, no build step. */

const CURRENCY = "₿";
const FREE_SHIP = 5;
const STORE_KEY = "manor_bag_v1";

const SIZES = {
  apparel: ["S", "M", "L", "XL", "XXL"],
  waist: ["28", "30", "32", "34", "36"],
  os: ["OS"],
  deck: ["8.0", "8.25", "8.5"],
};

const CAT_LABEL = {
  tees: "T-Shirts",
  hoods: "Hoods & Crews",
  jackets: "Jackets",
  bottoms: "Bottoms",
  hats: "Hats",
  skate: "Skate",
};

// print: { kind: cube | word | stack | stripe | check, text?, lines? }
const PRODUCTS = [
  { id: "cube-tee-white", name: "Cube T-Shirt White", cat: "tees", type: "tee", color: "#f6f6f3", ink: "#111", price: 11.99, print: { kind: "cube" }, isNew: true, sizes: "apparel" },
  { id: "cube-tee-black", name: "Cube T-Shirt Black", cat: "tees", type: "tee", color: "#151515", ink: "#f6f6f3", price: 11.99, print: { kind: "cube" }, isNew: true, sizes: "apparel", gone: ["S"] },
  { id: "panic-tee", name: "Don't Panic T-Shirt Sky", cat: "tees", type: "tee", color: "#a6cdfa", ink: "#0d1b52", price: 11.99, print: { kind: "stack", lines: ["DON'T", "PANIC"] }, isNew: true, sizes: "apparel" },
  { id: "carpark-tee", name: "Car Park Crew T-Shirt Orange", cat: "tees", type: "tee", color: "#ff6a2b", ink: "#111", price: 11.99, print: { kind: "stack", lines: ["CAR", "PARK", "CREW"] }, sizes: "apparel", gone: ["XXL"] },
  { id: "band-tee", name: "Band T-Shirt Navy", cat: "tees", type: "tee", color: "#1b2547", ink: "#ff3b1f", price: 11.99, print: { kind: "stripe" }, sizes: "apparel" },
  { id: "cube-hood-grey", name: "Cube Hood Grey Marl", cat: "hoods", type: "hood", color: "#bdbdb7", ink: "#111", price: 12.99, print: { kind: "cube" }, isNew: true, sizes: "apparel" },
  { id: "cube-hood-forest", name: "Cube Hood Forest", cat: "hoods", type: "hood", color: "#1f4d36", ink: "#f2e8c9", price: 12.99, print: { kind: "cube" }, sizes: "apparel", gone: ["M", "L"] },
  { id: "checker-hood", name: "Checker Hood Black", cat: "hoods", type: "hood", color: "#141414", ink: "#f6f6f3", price: 12.99, print: { kind: "check" }, isNew: true, sizes: "apparel" },
  { id: "manor-crew", name: "Manor Crew Burgundy", cat: "hoods", type: "crew", color: "#6b1f2a", ink: "#f6e9d6", price: 12.99, print: { kind: "word", text: "MANOR" }, sizes: "apparel" },
  { id: "stripe-crew", name: "Stripe Crew Cream", cat: "hoods", type: "crew", color: "#efe6cf", ink: "#1b2547", price: 12.99, print: { kind: "stripe" }, soldOut: true, sizes: "apparel" },
  { id: "shell-jacket", name: "Shell Jacket Black", cat: "jackets", type: "jacket", color: "#101010", ink: "#f6f6f3", price: 13.99, print: { kind: "cube" }, isNew: true, sizes: "apparel" },
  { id: "coach-jacket", name: "Coach Jacket Royal", cat: "jackets", type: "jacket", color: "#2340c9", ink: "#ffffff", price: 13.99, print: { kind: "word", text: "MANOR" }, sizes: "apparel", gone: ["XL"] },
  { id: "cargo-khaki", name: "Cargo Pant Khaki", cat: "bottoms", type: "pants", color: "#8b8360", ink: "#111", price: 12.99, print: { kind: "cube" }, sizes: "waist" },
  { id: "track-black", name: "Track Pant Black", cat: "bottoms", type: "pants", color: "#151515", ink: "#f6f6f3", price: 12.99, print: { kind: "stripe" }, isNew: true, sizes: "waist" },
  { id: "cube-cap-black", name: "Cube 6-Panel Black", cat: "hats", type: "cap", color: "#161616", ink: "#f6f6f3", price: 11.99, print: { kind: "cube" }, isNew: true, sizes: "os" },
  { id: "cube-cap-pink", name: "Cube 6-Panel Pink", cat: "hats", type: "cap", color: "#f3a6c3", ink: "#111", price: 11.99, print: { kind: "cube" }, sizes: "os" },
  { id: "cuff-beanie", name: "Cuff Beanie Orange", cat: "hats", type: "beanie", color: "#ff6a2b", ink: "#111", price: 11.99, print: { kind: "word", text: "MANOR" }, soldOut: true, sizes: "os" },
  { id: "cube-deck", name: "Cube Deck Yellow", cat: "skate", type: "deck", color: "#ffd400", ink: "#111", price: 11.99, print: { kind: "cube" }, isNew: true, sizes: "deck" },
  { id: "checker-deck", name: "Checker Deck", cat: "skate", type: "deck", color: "#f6f6f3", ink: "#111", price: 11.99, print: { kind: "check" }, sizes: "deck", gone: ["8.0"] },
  { id: "panic-deck", name: "Don't Panic Team Deck", cat: "skate", type: "deck", color: "#a6cdfa", ink: "#0d1b52", price: 11.99, print: { kind: "stack", lines: ["DON'T", "PANIC"] }, sizes: "deck" },
];

const BLURBS = {
  tee: "Heavyweight 240gsm cotton. Boxy fit, dropped shoulder. Screen printed by people who care far too much.",
  hood: "450gsm brushed-back fleece. Double-layer hood, kangaroo pocket, ribbed everything. Warm enough to skip a coat, not warm enough to skip a coat.",
  crew: "Loopback cotton crewneck with ribbed cuffs and hem. Goes with everything, including the other one.",
  jacket: "Water resistant shell with a full zip and a lining nobody will see. Packs into its own embarrassment.",
  pants: "Relaxed straight leg with a bit of room for falling over. Drawcord waist, deep pockets, sturdy knees.",
  cap: "Six-panel unstructured cap with an adjustable strap. Embroidered front. Pre-bent brim, you're welcome.",
  beanie: "Chunky rib-knit acrylic with a fold-over cuff. Fits all heads, including big ones.",
  deck: "7-ply Canadian maple, medium concave, steep kick. Comes with free grip if you ask nicely in shop.",
};

const TICKER = [
  "Drop 07 — 19.04.2077 11:00",
  "Sample work for CV of Yernur",
  "New shop opening in Tashkent",
  "Decks back in stock",
  "Lookbook out now",
  "Don't panic",
];

const TEAM = [
  { name: "Dougie R.", stance: "Regular", skin: "#f1c7a5", hair: "#2a1a10" },
  { name: "Ash Okafor", stance: "Goofy", skin: "#7a4a2c", hair: "#111" },
  { name: "Lulu Park", stance: "Regular", skin: "#f3d2b3", hair: "#1a1a1a" },
  { name: "Big Tim", stance: "Goofy", skin: "#e9b892", hair: "#c46a2b" },
  { name: "Sami K.", stance: "Regular", skin: "#c48a5d", hair: "#2b1d14" },
  { name: "Fred Hall", stance: "Mongo", skin: "#f5d9c0", hair: "#d8b35a" },
];

const LOOKS = [
  { id: "cube-hood-forest", bg: ["#ffcf3d", "#ff6a2b"], cap: "Fig. 1 — Forest hood, car park, 7am." },
  { id: "panic-tee", bg: ["#3a5bff", "#0d1b52"], cap: "Fig. 2 — Panicked. Briefly." },
  { id: "shell-jacket", bg: ["#ff3b1f", "#6b1f2a"], cap: "Fig. 3 — It rained. Jacket worked." },
  { id: "checker-deck", bg: ["#d7f0c2", "#1f4d36"], cap: "Fig. 4 — Board slipped. Ankle fine." },
  { id: "manor-crew", bg: ["#f3a6c3", "#b02e5a"], cap: "Fig. 5 — Nan approved this one." },
  { id: "cube-cap-black", bg: ["#a6cdfa", "#2340c9"], cap: "Fig. 6 — Head, with hat." },
  { id: "cargo-khaki", bg: ["#efe6cf", "#8b8360"], cap: "Fig. 7 — Pockets full of wax." },
];

/* ---------------- Helpers ---------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const money = (n) => `${CURRENCY}${n.toFixed(2)}`;
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let uid = 0;

/* ---------------- SVG garments ---------------- */

const STROKE = "rgba(0,0,0,.28)";

const GARMENTS = {
  tee: {
    body: "M150 62 Q200 94 250 62 L302 78 L354 140 L312 174 L286 152 L286 352 L114 352 L114 152 L88 174 L46 140 L98 78 Z",
    details: () => `<path d="M150 62 Q200 98 250 62" fill="none" stroke="${STROKE}" stroke-width="5"/>`,
    front: [200, 150, 36],
    back: [200, 205, 105],
    band: [182, 30],
  },
  crew: {
    body: "M150 78 Q200 104 250 78 L302 92 L340 318 L302 330 L278 190 L278 352 L122 352 L122 190 L98 330 L60 318 L98 92 Z",
    details: () => `<path d="M150 78 Q200 110 250 78" fill="none" stroke="${STROKE}" stroke-width="6"/>
      <path d="M124 338 L276 338 M64 306 L98 316 M336 306 L302 316" stroke="${STROKE}" stroke-width="2"/>`,
    front: [200, 165, 36],
    back: [200, 210, 100],
    band: [200, 30],
  },
  hood: {
    pre: (c) => `<path d="M138 98 Q132 26 200 26 Q268 26 262 98 Z" fill="${c}" stroke="${STROKE}" stroke-width="2"/>`,
    body: "M138 92 Q200 128 262 92 L302 104 L340 318 L302 330 L278 192 L278 352 L122 352 L122 192 L98 330 L60 318 L98 104 Z",
    details: (side) =>
      side === "front"
        ? `<path d="M160 96 Q160 52 200 52 Q240 52 240 96 Q200 124 160 96 Z" fill="rgba(0,0,0,.32)"/>
           <path d="M188 112 L186 160 M212 112 L214 160" stroke="${STROKE}" stroke-width="3" stroke-linecap="round"/>
           <path d="M146 272 L254 272 L268 336 L132 336 Z" fill="none" stroke="${STROKE}" stroke-width="2"/>
           <path d="M124 342 L276 342" stroke="${STROKE}" stroke-width="2"/>`
        : `<path d="M200 30 L200 112" stroke="${STROKE}" stroke-width="2"/><path d="M124 342 L276 342" stroke="${STROKE}" stroke-width="2"/>`,
    front: [200, 196, 36],
    back: [200, 222, 98],
    band: [220, 30],
  },
  jacket: {
    body: "M146 70 L254 70 L262 92 L302 102 L342 320 L304 332 L280 192 L280 354 L120 354 L120 192 L96 332 L58 320 L98 102 L138 92 Z",
    details: (side) =>
      side === "front"
        ? `<path d="M146 70 L200 104 L254 70" fill="none" stroke="${STROKE}" stroke-width="3"/>
           <path d="M200 104 L200 354" stroke="rgba(0,0,0,.45)" stroke-width="3"/>
           <path d="M140 250 L170 236 M260 250 L230 236" stroke="${STROKE}" stroke-width="3"/>
           <path d="M120 338 L280 338" stroke="${STROKE}" stroke-width="2"/>`
        : `<path d="M146 70 Q200 84 254 70" fill="none" stroke="${STROKE}" stroke-width="3"/><path d="M120 338 L280 338" stroke="${STROKE}" stroke-width="2"/>`,
    front: [246, 150, 26],
    back: [200, 200, 100],
    band: [210, 28],
  },
  pants: {
    body: "M128 46 L272 46 L292 356 L220 356 L200 144 L180 356 L108 356 Z",
    details: (side) =>
      `<path d="M128 70 L272 70" stroke="${STROKE}" stroke-width="2"/>` +
      (side === "front"
        ? `<path d="M140 70 Q150 110 128 120 M260 70 Q250 110 272 120" fill="none" stroke="${STROKE}" stroke-width="2"/>
           <path d="M200 70 L200 130" stroke="${STROKE}" stroke-width="2"/>
           <path d="M120 190 L162 190 L160 240 L118 240 Z M280 190 L238 190 L240 240 L282 240 Z" fill="none" stroke="${STROKE}" stroke-width="2"/>`
        : `<path d="M140 90 L182 90 L180 128 L142 128 Z M260 90 L218 90 L220 128 L258 128 Z" fill="none" stroke="${STROKE}" stroke-width="2"/>`),
    front: [158, 96, 22],
    back: null,
    legStripe: true,
  },
  cap: {
    body: "M108 236 Q104 108 200 106 Q296 108 292 236 Z",
    details: (side, c) =>
      side === "front"
        ? `<path d="M200 106 L200 236 M150 116 Q140 170 146 236 M250 116 Q260 170 254 236" fill="none" stroke="${STROKE}" stroke-width="2"/>
           <path d="M96 232 Q200 214 338 246 Q344 272 304 272 Q200 256 96 256 Z" fill="${c}" stroke="${STROKE}" stroke-width="2"/>
           <circle cx="200" cy="106" r="7" fill="${c}" stroke="${STROKE}" stroke-width="2"/>`
        : `<path d="M200 106 L200 180 M150 116 Q140 170 146 236 M250 116 Q260 170 254 236" fill="none" stroke="${STROKE}" stroke-width="2"/>
           <path d="M168 236 Q168 190 200 190 Q232 190 232 236 Z" fill="#f2f2ef" stroke="${STROKE}" stroke-width="2"/>
           <path d="M150 230 L250 230" stroke="rgba(0,0,0,.4)" stroke-width="6"/>
           <circle cx="200" cy="106" r="7" fill="${c}" stroke="${STROKE}" stroke-width="2"/>`,
    front: [200, 178, 40],
    back: null,
  },
  beanie: {
    body: "M122 300 L122 186 Q122 96 200 96 Q278 96 278 186 L278 300 Z",
    details: (side, c) => {
      let ribs = "";
      for (let x = 136; x < 278; x += 14) ribs += `M${x} 120 L${x} 228 `;
      return `<path d="${ribs}" stroke="rgba(0,0,0,.12)" stroke-width="2"/>
        <rect x="116" y="228" width="168" height="76" fill="${c}" stroke="${STROKE}" stroke-width="2"/>
        <rect x="116" y="228" width="168" height="76" fill="rgba(0,0,0,.08)"/>
        <circle cx="200" cy="86" r="22" fill="${c}" stroke="${STROKE}" stroke-width="2"/>`;
    },
    front: [200, 266, 30],
    back: null,
    printOnTop: true,
  },
  deck: {
    body: "M150 82 Q150 28 200 28 Q250 28 250 82 L250 318 Q250 372 200 372 Q150 372 150 318 Z",
    details: (side) =>
      side === "back"
        ? `<circle cx="184" cy="96" r="2.5" fill="#666"/><circle cx="216" cy="96" r="2.5" fill="#666"/><circle cx="184" cy="122" r="2.5" fill="#666"/><circle cx="216" cy="122" r="2.5" fill="#666"/>
           <circle cx="184" cy="278" r="2.5" fill="#666"/><circle cx="216" cy="278" r="2.5" fill="#666"/><circle cx="184" cy="304" r="2.5" fill="#666"/><circle cx="216" cy="304" r="2.5" fill="#666"/>`
        : "",
    front: [200, 200, 70],
    back: null,
    deck: true,
  },
};

function cubePath(cx, cy, r, ink, sw) {
  const h = r * 0.866;
  return `<path d="M${cx} ${cy - r} L${cx + h} ${cy - r / 2} L${cx + h} ${cy + r / 2} L${cx} ${cy + r} L${cx - h} ${cy + r / 2} L${cx - h} ${cy - r / 2} Z M${cx} ${cy} L${cx} ${cy + r} M${cx} ${cy} L${cx + h} ${cy - r / 2} M${cx} ${cy} L${cx - h} ${cy - r / 2}" fill="none" stroke="${ink}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"/>`;
}

function textBlock(lines, cx, cy, size, ink, rotate = 0) {
  const W = size * 2.3;
  const fs = Math.min(...lines.map((l) => Math.min(size * 0.62, W / (l.length * 0.72))));
  const lh = fs * 0.92;
  const top = cy - ((lines.length - 1) * lh) / 2;
  const tspans = lines
    .map((l, i) => `<text x="${cx}" y="${top + i * lh}" text-anchor="middle" dominant-baseline="central">${esc(l)}</text>`)
    .join("");
  return `<g font-family="Archivo Black, Arial Black, sans-serif" font-size="${fs}" fill="${ink}" letter-spacing="-0.5" ${rotate ? `transform="rotate(${rotate} ${cx} ${cy})"` : ""}>${tspans}</g>`;
}

function printArt(p, side, G, clipId) {
  const pr = p.print;
  const spot = side === "back" ? G.back : G.front;

  // Patterns that fill a band (or whole deck) clipped to the body
  if (pr.kind === "stripe" || pr.kind === "check") {
    let fill = "";
    if (G.deck) {
      if (pr.kind === "check") {
        for (let y = 28, r = 0; y < 372; y += 25, r++)
          for (let x = 150 + (r % 2) * 25; x < 250; x += 50) fill += `<rect x="${x}" y="${y}" width="25" height="25" fill="${p.ink}"/>`;
      } else {
        for (let y = 40; y < 372; y += 40) fill += `<rect x="150" y="${y}" width="100" height="16" fill="${p.ink}"/>`;
      }
    } else if (G.legStripe) {
      fill = `<path d="M114 46 L124 46 L140 356 L128 356 Z M286 46 L276 46 L260 356 L272 356 Z" fill="${p.ink}"/>`;
    } else if (G.band) {
      const [y, h] = G.band;
      if (pr.kind === "check") {
        for (let r = 0; r < 2; r++)
          for (let x = 40 + (r % 2) * (h / 2); x < 360; x += h) fill += `<rect x="${x}" y="${y + (r * h) / 2}" width="${h / 2}" height="${h / 2}" fill="${p.ink}"/>`;
      } else {
        fill = `<rect x="0" y="${y}" width="400" height="${h * 0.38}" fill="${p.ink}"/><rect x="0" y="${y + h * 0.62}" width="400" height="${h * 0.38}" fill="${p.ink}"/>`;
      }
    }
    // Patterned garments still get a small cube on the front chest
    const mark = !G.deck && side === "front" && spot && !G.legStripe ? cubePath(spot[0], spot[1] - 40, 13, p.ink, 3) : "";
    const big = !G.deck && side === "back" && spot ? cubePath(spot[0], spot[1] - 50, 40, p.ink, 6) : "";
    return `<g clip-path="url(#${clipId})">${fill}</g>${mark}${big}`;
  }

  if (!spot) return "";
  const [x, y, s] = spot;
  if (pr.kind === "cube") return cubePath(x, y, s * 0.55, p.ink, Math.max(3, s / 12));
  const lines = pr.kind === "word" ? [pr.text] : pr.lines;
  return textBlock(lines, x, y, s, p.ink, G.deck && pr.kind === "word" ? -90 : 0);
}

function garmentSVG(p, side = "front") {
  const G = GARMENTS[p.type];
  const clipId = `clip-${++uid}`;
  const isGrip = G.deck && side === "back";
  const c = isGrip ? "#1a1a1a" : p.color;
  const art = isGrip ? "" : printArt(p, side, G, clipId);
  return `<svg class="${side}" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><clipPath id="${clipId}"><path d="${G.body}"/></clipPath></defs>
    <ellipse cx="200" cy="378" rx="${G.deck ? 60 : 130}" ry="8" fill="rgba(0,0,0,.08)"/>
    ${G.pre ? G.pre(c) : ""}
    <path d="${G.body}" fill="${c}" stroke="${STROKE}" stroke-width="2" stroke-linejoin="round"/>
    ${G.printOnTop ? "" : art}
    ${G.details(side, c)}
    ${G.printOnTop ? art : ""}
  </svg>`;
}

/* ---------------- State ---------------- */

const state = {
  cat: "all",
  sort: "featured",
  bag: loadBag(),
  qv: null, // { product, size, side }
};

function loadBag() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((l) => byId(l.id)) : [];
  } catch {
    return [];
  }
}

function saveBag() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state.bag));
  } catch {
    /* storage unavailable — bag just won't persist */
  }
}

/* ---------------- Ticker ---------------- */

function renderTicker() {
  const items = [...TICKER, ...TICKER].map((t) => `<span>${esc(t)}</span>`).join("");
  $("#ticker").innerHTML = items + items;
}

/* ---------------- Countdown ---------------- */

const DROP_DATE = new Date(2077, 3, 19, 11, 0, 0); // 19 April 2077, 11:00 local

function nextDrop() {
  return DROP_DATE;
}

function tickCountdown() {
  const diff = Math.max(0, nextDrop() - new Date());
  const s = Math.floor(diff / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  $("#cdD").textContent = pad(Math.floor(s / 86400));
  $("#cdH").textContent = pad(Math.floor((s % 86400) / 3600));
  $("#cdM").textContent = pad(Math.floor((s % 3600) / 60));
  $("#cdS").textContent = pad(s % 60);
}

/* ---------------- Grid ---------------- */

function visibleProducts() {
  let list = PRODUCTS.filter((p) => state.cat === "all" || (state.cat === "new" ? p.isNew : p.cat === state.cat));
  if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function cardHTML(p) {
  const badge = p.soldOut
    ? `<span class="card__badge card__badge--sold">Sold out</span>`
    : p.isNew
      ? `<span class="card__badge card__badge--new">New</span>`
      : "";
  return `<article class="card${p.soldOut ? " is-sold" : ""}" data-id="${p.id}" tabindex="0" aria-label="${esc(p.name)}">
    <div class="card__img">
      ${badge}
      ${garmentSVG(p, "front")}
      ${garmentSVG(p, "back")}
      <span class="card__quick">${p.soldOut ? "View" : "Quick add"}</span>
    </div>
    <h3 class="card__name">${esc(p.name)}</h3>
    <p class="card__price">${money(p.price)}</p>
  </article>`;
}

function renderGrid() {
  const list = visibleProducts();
  $("#grid").innerHTML = list.length ? list.map(cardHTML).join("") : `<p class="empty">Nothing here. Try another category.</p>`;
  $("#count").textContent = `${list.length} item${list.length === 1 ? "" : "s"} — ${state.cat === "all" ? "Everything" : state.cat === "new" ? "This week" : CAT_LABEL[state.cat]}`;
  $$("#filters button").forEach((b) => b.classList.toggle("is-active", b.dataset.cat === state.cat));
}

function setFilter(cat) {
  state.cat = cat;
  renderGrid();
}

/* ---------------- Quick view ---------------- */

function openQV(id) {
  const p = byId(id);
  if (!p) return;
  state.qv = { product: p, size: null, side: "front" };
  $("#qvCat").textContent = `${CAT_LABEL[p.cat]}${p.isNew ? " — New this week" : ""}`;
  $("#qvName").textContent = p.name;
  $("#qvPrice").textContent = money(p.price);
  $("#qvDesc").textContent = BLURBS[p.type];
  $("#qvMeta").innerHTML = [
    "Sample work for CV of Yernur",
    "Returns within 14 days, unworn, tags on",
    `Style code MNR-${p.id.toUpperCase().slice(0, 10)}`,
  ]
    .map((t) => `<li>${esc(t)}</li>`)
    .join("");
  renderQVMedia();
  renderQVSizes();
  openLayer($("#modal"));
}

function renderQVMedia() {
  const { product: p, side } = state.qv;
  $("#qvImg").innerHTML = garmentSVG(p, side);
  $("#qvThumbs").innerHTML = ["front", "back"]
    .map((s) => `<button data-side="${s}" class="${s === side ? "is-active" : ""}" aria-label="${s} view">${garmentSVG(p, s)}</button>`)
    .join("");
}

function renderQVSizes() {
  const p = state.qv.product;
  const sizes = SIZES[p.sizes];
  if (sizes.length === 1 && !p.soldOut) state.qv.size = sizes[0];
  $("#qvSizes").innerHTML = sizes
    .map((s) => {
      const out = p.soldOut || (p.gone || []).includes(s);
      return `<button data-size="${s}" ${out ? "disabled" : ""} class="${state.qv.size === s ? "is-active" : ""}">${s}</button>`;
    })
    .join("");
  const btn = $("#qvAdd");
  btn.disabled = !!p.soldOut;
  btn.textContent = p.soldOut ? "Sold out" : "Add to bag";
  $("#qvNote").textContent = p.soldOut ? "Gone. Might come back. Probably won't." : "";
}

function addFromQV() {
  const { product: p, size } = state.qv;
  if (p.soldOut) return;
  if (!size) {
    $("#qvNote").textContent = "Pick a size first.";
    return;
  }
  addToBag(p.id, size);
  closeLayer($("#modal"));
  openCart();
}

/* ---------------- Bag ---------------- */

function addToBag(id, size) {
  const line = state.bag.find((l) => l.id === id && l.size === size);
  if (line) line.qty = Math.min(line.qty + 1, 3);
  else state.bag.push({ id, size, qty: 1 });
  saveBag();
  renderBag();
  toast(`Added ${byId(id).name} (${size})`);
}

function bagTotal() {
  return state.bag.reduce((sum, l) => sum + byId(l.id).price * l.qty, 0);
}

function renderBag() {
  const count = state.bag.reduce((n, l) => n + l.qty, 0);
  $("#cartCount").textContent = count;
  const total = bagTotal();
  $("#cartSubtotal").textContent = money(total);
  $("#checkoutBtn").disabled = !count;

  const left = FREE_SHIP - total;
  $("#shipBar").innerHTML = `${left > 0 ? `Spend ${money(left)} more for free UK shipping.` : "You've got free UK shipping. Nice."}
    <div class="bar"><i style="width:${Math.min(100, (total / FREE_SHIP) * 100)}%"></i></div>`;

  $("#cartItems").innerHTML = state.bag.length
    ? state.bag
        .map((l, i) => {
          const p = byId(l.id);
          return `<li class="line">
            <div class="line__img">${garmentSVG(p, "front")}</div>
            <div>
              <p class="line__name">${esc(p.name)}</p>
              <p class="line__size">Size ${esc(l.size)}</p>
              <div class="qty">
                <button data-qty="-1" data-i="${i}" aria-label="Decrease">−</button>
                <span>${l.qty}</span>
                <button data-qty="1" data-i="${i}" aria-label="Increase">+</button>
              </div>
            </div>
            <div class="line__right">
              <b>${money(p.price * l.qty)}</b>
              <button class="linkish line__remove" data-remove="${i}">Remove</button>
            </div>
          </li>`;
        })
        .join("")
    : `<li class="empty">Your bag is empty.<br/>Bold move.</li>`;
}

function openCart() {
  const d = $("#drawer");
  d.classList.add("is-open");
  d.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
}

function closeCart() {
  const d = $("#drawer");
  d.classList.remove("is-open");
  d.setAttribute("aria-hidden", "true");
  syncLock();
}

/* ---------------- Checkout (demo — no payment collected) ---------------- */

function openCheckout() {
  if (!state.bag.length) return;
  closeCart();
  const sub = bagTotal();
  $("#coBody").innerHTML = `<div class="co">
    <h2 id="coTitle">Checkout</h2>
    <p>Demo shop — no payment is taken and nothing will ship.</p>
    <form id="coForm">
      <label>Full name<input name="name" required autocomplete="name"/></label>
      <label>Email<input name="email" type="email" required autocomplete="email"/></label>
      <label>Address<input name="addr" required autocomplete="street-address"/></label>
      <div class="row2">
        <label>City<input name="city" required autocomplete="address-level2"/></label>
        <label>Postcode<input name="zip" required autocomplete="postal-code"/></label>
      </div>
      <label>Delivery
        <select name="ship" id="coShip">
          <option value="std">Standard (3–5 days) — ${sub >= FREE_SHIP ? "Free" : money(1)}</option>
          <option value="exp">Express (next day) — ${money(2)}</option>
        </select>
      </label>
      <div class="co__sum" id="coSum"></div>
      <button class="btn btn--block" type="submit">Place order</button>
    </form>
  </div>`;
  const sum = () => {
    const ship = $("#coShip").value === "exp" ? 2 : sub >= FREE_SHIP ? 0 : 1;
    $("#coSum").innerHTML = `<div><span>Subtotal</span><span>${money(sub)}</span></div>
      <div><span>Shipping</span><span>${ship ? money(ship) : "Free"}</span></div>
      <div class="total"><span>Total</span><span>${money(sub + ship)}</span></div>`;
  };
  sum();
  $("#coShip").addEventListener("change", sum);
  $("#coForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = new FormData(e.target).get("name").toString().split(" ")[0];
    const order = "MNR" + Math.floor(100000 + Math.random() * 900000);
    state.bag = [];
    saveBag();
    renderBag();
    $("#coBody").innerHTML = `<div class="co co__done">
      <svg viewBox="-12 -12 24 24"><path d="M0 -10 L8.66 -5 L8.66 5 L0 10 L-8.66 5 L-8.66 -5 Z M0 0 L0 10 M0 0 L8.66 -5 M0 0 L-8.66 -5"/></svg>
      <h2 id="coTitle">Cheers, ${esc(name)}.</h2>
      <p>Order <code>${order}</code> is in. Well — it would be, if this were a real shop.</p>
      <button class="btn" data-close>Keep shopping</button>
    </div>`;
  });
  openLayer($("#checkout"));
}

/* ---------------- Search ---------------- */

function openSearch() {
  const s = $("#search");
  s.hidden = false;
  document.body.classList.add("is-locked");
  $("#searchInput").value = "";
  renderSearch("");
  setTimeout(() => $("#searchInput").focus(), 30);
}

function closeSearch() {
  $("#search").hidden = true;
  syncLock();
}

function renderSearch(q) {
  const term = q.trim().toLowerCase();
  const list = term
    ? PRODUCTS.filter((p) => `${p.name} ${CAT_LABEL[p.cat]} ${p.type}`.toLowerCase().includes(term))
    : PRODUCTS.filter((p) => p.isNew);
  $("#searchResults").innerHTML =
    `<p class="shop__count">${term ? `${list.length} result${list.length === 1 ? "" : "s"}` : "Trending this week"}</p>` +
    `<div class="grid">${list.length ? list.map(cardHTML).join("") : `<p class="empty">No luck. Try "hood" or "deck".</p>`}</div>`;
}

/* ---------------- Lookbook & team ---------------- */

function renderLookbook() {
  $("#lookstrip").innerHTML = LOOKS.map((l, i) => {
    const p = byId(l.id);
    const tilt = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.2, -2][i % 7];
    return `<figure class="polaroid" data-id="${p.id}" style="--tilt:${tilt}deg; margin:0">
      <div class="polaroid__img" style="background:linear-gradient(160deg, ${l.bg[0]}, ${l.bg[1]})">${garmentSVG(p, "front")}</div>
      <p>${esc(l.cap)}</p>
    </figure>`;
  }).join("");
}

function renderTeam() {
  $("#team").innerHTML = TEAM.map(
    (t) => `<li>
      <svg class="team__face" viewBox="0 0 100 100" aria-hidden="true">
        <rect width="100" height="100" fill="#fff"/>
        <path d="M18 100 Q18 72 50 72 Q82 72 82 100 Z" fill="#111"/>
        <circle cx="50" cy="44" r="22" fill="${t.skin}"/>
        <path d="M28 40 Q28 18 50 18 Q72 18 72 40 Q60 30 50 32 Q40 30 28 40 Z" fill="${t.hair}"/>
        <circle cx="42" cy="46" r="2.2" fill="#111"/><circle cx="58" cy="46" r="2.2" fill="#111"/>
        <path d="M43 55 Q50 59 57 55" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <b>${esc(t.name)}</b><span>${esc(t.stance)}</span>
    </li>`
  ).join("");
}

/* ---------------- Layers & UI ---------------- */

function openLayer(el) {
  el.hidden = false;
  document.body.classList.add("is-locked");
}

function closeLayer(el) {
  el.hidden = true;
  syncLock();
}

function syncLock() {
  const anyOpen = !$("#modal").hidden || !$("#checkout").hidden || !$("#search").hidden || $("#drawer").classList.contains("is-open");
  document.body.classList.toggle("is-locked", anyOpen);
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-on"), 2200);
}

function closeMenu() {
  $("#nav").classList.remove("is-open");
  $("#burger").classList.remove("is-open");
}

/* ---------------- Events ---------------- */

function bind() {
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-cat]");
    if (b) setFilter(b.dataset.cat);
  });

  $("#sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderGrid();
  });

  // Any link with data-filter jumps to the shop with that category
  $$("[data-filter]").forEach((a) =>
    a.addEventListener("click", () => {
      setFilter(a.dataset.filter);
      closeMenu();
    })
  );
  $$("#nav a").forEach((a) => a.addEventListener("click", closeMenu));

  // Product cards anywhere (grid, search)
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card, .polaroid");
    if (card) {
      if (!$("#search").hidden) closeSearch();
      openQV(card.dataset.id);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.classList?.contains("card")) openQV(e.target.dataset.id);
    if (e.key === "Escape") {
      if (!$("#search").hidden) closeSearch();
      else if (!$("#checkout").hidden) closeLayer($("#checkout"));
      else if (!$("#modal").hidden) closeLayer($("#modal"));
      else closeCart();
    }
  });

  // Quick view
  $("#modal").addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeLayer($("#modal"));
    const s = e.target.closest("button[data-size]");
    if (s && !s.disabled) {
      state.qv.size = s.dataset.size;
      $("#qvNote").textContent = "";
      renderQVSizes();
    }
    const side = e.target.closest("button[data-side]");
    if (side) {
      state.qv.side = side.dataset.side;
      renderQVMedia();
    }
  });
  $("#qvAdd").addEventListener("click", addFromQV);

  // Bag
  $("#cartBtn").addEventListener("click", openCart);
  $("#drawer").addEventListener("click", (e) => {
    if (e.target.closest("[data-close-cart]")) return closeCart();
    const q = e.target.closest("[data-qty]");
    if (q) {
      const line = state.bag[+q.dataset.i];
      line.qty = Math.max(0, Math.min(3, line.qty + +q.dataset.qty));
      if (!line.qty) state.bag.splice(+q.dataset.i, 1);
      if (+q.dataset.qty > 0 && line.qty === 3) toast("Max 3 per person. Leave some for the rest of us.");
      saveBag();
      renderBag();
    }
    const r = e.target.closest("[data-remove]");
    if (r) {
      state.bag.splice(+r.dataset.remove, 1);
      saveBag();
      renderBag();
    }
  });
  $("#checkoutBtn").addEventListener("click", openCheckout);
  $("#checkout").addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeLayer($("#checkout"));
  });

  // Search
  $("#searchBtn").addEventListener("click", openSearch);
  $("#searchClose").addEventListener("click", closeSearch);
  $("#searchInput").addEventListener("input", (e) => renderSearch(e.target.value));

  // Mobile menu
  $("#burger").addEventListener("click", () => {
    $("#nav").classList.toggle("is-open");
    $("#burger").classList.toggle("is-open");
  });

  // Newsletter
  $("#newsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#newsMsg").textContent = "You're on the list. See you Thursday.";
    e.target.reset();
  });
}

/* ---------------- Init ---------------- */

renderTicker();
renderGrid();
renderLookbook();
renderTeam();
renderBag();
tickCountdown();
setInterval(tickCountdown, 1000);
bind();
