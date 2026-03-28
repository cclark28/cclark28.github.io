/**
 * SABOTEUR â Site Configuration
 * ============================================================
 * All settings, social links, contact info, and resource data
 * in one place. Update here, propagates everywhere.
 * ============================================================
 */

const SITE_CONFIG = {

  /* ---- Brand ---- */
  name: 'Saboteur',
  tagline: 'Analog damage for digital work.',
  description: 'An experimental studio built for comics, textures, and physical goods. Everything starts analog, is destroyed on purpose, then scanned and prepared for digital use.',
  manifesto: 'Saboteur is a small independent studio making analog-damaged assets and horror-adjacent comics. We turn real-world damageâstains, tears, newsprint, old postcardsâinto high-resolution tools for designers, illustrators, and comic artists. Built by hand. Destroyed on purpose.',

  /* ---- Contact ---- */
  contactEmail: 'saboteurcomics@gmail.com',

  /* ---- Social Links ---- */
  social: {
    instagram: 'https://instagram.com/saboteurcomics',
    biosite: 'https://bio.site/saboteurcomics',
    gumroad: 'https://saboteurcomics.gumroad.com',
    twitter: 'https://x.com/saboteurcomics',
  },

  /* ---- Newsletter ---- */
  newsletter: {
    // Switch provider by changing 'provider' and updating the relevant config.
    // Supported: 'mailchimp', 'convertkit', 'buttondown', 'custom'
    provider: 'custom',

    // Mailchimp config (uncomment and fill in when ready)
    // mailchimp: {
    //   formAction: 'https://YOUR_MAILCHIMP_FORM_ACTION_URL',
    //   hiddenFieldName: 'b_XXXXX_XXXXX',
    // },

    // ConvertKit config (uncomment and fill in when ready)
    // convertkit: {
    //   formId: 'YOUR_FORM_ID',
    //   apiKey: 'YOUR_API_KEY',
    // },

    // Buttondown config (uncomment and fill in when ready)
    // buttondown: {
    //   username: 'saboteurcomics',
    // },

    // Custom / fallback: just mailto link
    custom: {
      fallbackMessage: 'Email us to join the list.',
    },
  },

  /* ---- Navigation ---- */
  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'Vault', href: 'vault/' },
    { label: 'Shop', href: 'shop/' },
    { label: 'Publish', href: 'publish/' },
    { label: 'Contact', href: 'contact/' },
  ],

  /* ---- Footer ---- */
  footerYear: new Date().getFullYear(),

  /* ---- Footer Location Bar (manual update) ---- */
  footerLocation: {
    city: 'Indianapolis',
    state: 'Indiana',
    time: '04:00 PM CDT',
    temp: '62Â°F / 17Â°C',
    conditions: 'Partly Cloudy',
    lastBreathed: 'March 28, 2026',
  },

  /* ---- File Complaint Responses ---- */
  complaintResponses: [
    "Your complaint has been logged and immediately shredded.",
    "HR has reviewed your case. Verdict: skill issue.",
    "We've forwarded this to someone who cares. They don't work here.",
    "This complaint has been classified as 'not our problem.'",
    "A representative will reach out to you never.",
    "Your feedback is important to us. Just kidding.",
    "We've investigated your complaint and found you guilty.",
    "Complaint received. Your case number is #000000. Don't call us.",
    "Our records show you signed a waiver. You didn't? Too bad.",
    "This has been escalated to the department of nobody asked.",
    "Thank you for your complaint. It has been composted.",
    "A trained professional reviewed this. They laughed.",
  ],

  /* ---- Stray (pixel cat) config ---- */
  stray: {
    enabled: true,
    creepInterval: 15000, // ms between movements
    sleepHourStart: 2,    // 2 AM
    wakeHourStart: 6,     // 6 AM (dawn)
    moods: ['curious', 'sleepy', 'grumpy', 'playful', 'indifferent'],
  },
};


/**
 * FREE LIBRARY RESOURCES
 * ============================================================
 * Each entry drives: the library landing grid, the individual
 * resource page, and the cross-promo carousel.
 *
 * To add a new resource: push an object to this array.
 * It will auto-appear everywhere.
 * ============================================================
 */

const FREE_LIBRARY = [
  {
    id: 'screen-tone-scrap',
    title: 'Screen Tone Scrap',
    shortDescription: 'High-contrast screen tone fragments. Sharp halftone patterns for collage and overlay work.',
    longDescription: 'A collection of scanned, hand-cut screen tone fragments pulled from vintage print material. Each texture delivers raw halftone energy â sharp dot patterns, torn edges, and natural print artifacts at full resolution. Ideal for collage, zine work, comic overlays, and gritty graphic design.',
    audience: 'Comic artists, zine makers, collage artists, and graphic designers looking for authentic analog print texture.',
    whatsInside: '15 high-resolution PNG files at 300 DPI. Transparent backgrounds. Instant layer-and-go for Photoshop, Procreate, Illustrator, or any image editor.',
    fileInfo: { format: 'PNG', size: '~85 MB', count: '15 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/screentone',
    tags: ['texture', 'halftone', 'screen tone', 'print'],
    featured: true,
  },
  {
    id: 'coffee-stains-textures',
    title: 'Coffee Stains & Textures',
    shortDescription: '15 organic coffee ring stains and splash textures at 300 DPI.',
    longDescription: 'Real coffee, real mugs, real damage. Every stain in this pack was made by hand â cups dragged across paper, drips left to dry overnight, splashes caught mid-fall. Scanned at high resolution and cleaned up just enough to be useful while keeping every imperfection intact.',
    audience: 'Designers, illustrators, and photographers who want organic, warm-toned overlay textures that feel lived-in.',
    whatsInside: '15 high-resolution TIFF/PNG files. Mix of ring stains, drip marks, splash patterns, and pooled coffee textures. Transparent and opaque versions included.',
    fileInfo: { format: 'PNG / TIFF', size: '~120 MB', count: '15 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/coffeestains',
    tags: ['texture', 'stain', 'coffee', 'organic'],
    featured: true,
  },
  {
    id: 'newsprint-texture-pack',
    title: 'Newsprint Texture Pack',
    shortDescription: 'Aged newsprint surfaces with natural grain and ink bleed.',
    longDescription: 'Sourced from deteriorating newspapers and old broadsheets. These textures capture the full character of aging newsprint â yellowed fibers, ink bleed-through, fold lines, and the faint ghost of reversed type. Layer them over flat designs to add decades of wear in seconds.',
    audience: 'Editorial designers, brand studios, and anyone building vintage, lo-fi, or distressed aesthetics.',
    whatsInside: '12 high-resolution scans of real newsprint surfaces. A mix of clean sheets, heavy-ink pages, and crumpled stock.',
    fileInfo: { format: 'PNG', size: '~95 MB', count: '12 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/newsprint',
    tags: ['texture', 'newsprint', 'paper', 'vintage'],
    rating: 5.0,
    reviews: 2,
    featured: true,
  },
  {
    id: 'stains-texture-pack',
    title: 'Stains â Texture Pack',
    shortDescription: '15 high-res stain overlays. Water damage, ring marks, and chemical burns.',
    longDescription: 'Not just coffee â this pack goes further. Water damage, chemical spills, rust runoff, and mystery stains from found materials. Every mark was scanned from real-world surfaces and isolated for easy layering. These are the textures that make clean work feel dangerous.',
    audience: 'Horror and grunge designers, packaging artists, anyone who wants their work to look like it survived something.',
    whatsInside: '15 isolated stain textures at 300 DPI. Includes water rings, chemical burns, rust streaks, and unidentified organic marks.',
    fileInfo: { format: 'PNG', size: '~110 MB', count: '15 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/stains',
    tags: ['texture', 'stain', 'grunge', 'damage'],
    featured: true,
  },
  {
    id: 'forgotten-texture-pack',
    title: 'Forgotten Texture Pack',
    shortDescription: 'Faded city ephemera. Peeling posters, weathered signage, and layered decay.',
    longDescription: 'Shot and scanned from decaying urban surfaces â peeling wheat-paste posters, sun-bleached signage, layers of torn flyers on construction walls. Every texture tells a small story about time, weather, and neglect. Use them as backgrounds, overlays, or source material for collage.',
    audience: 'Urban photographers, mixed-media artists, poster designers, and anyone drawn to the texture of decay.',
    whatsInside: '10 high-resolution texture scans. A mix of poster remnants, wall surfaces, and layered paper decay.',
    fileInfo: { format: 'JPG / PNG', size: '~75 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/forgotten',
    tags: ['texture', 'urban', 'decay', 'poster'],
    featured: true,
  },
  {
    id: 'plain-white-paper-vol-2',
    title: 'Plain White Paper Vol. 2',
    shortDescription: 'Clean paper textures with subtle fiber and crease detail.',
    longDescription: 'Sometimes you just need paper that looks like paper. This second volume delivers clean, subtle paper surfaces â visible fiber grain, gentle creases, and the kind of surface texture that makes digital work feel tangible. Not distressed, not grunge. Just honest paper.',
    audience: 'Print designers, stationery brands, and anyone who needs a clean analog surface under their digital work.',
    whatsInside: '10 high-resolution paper surface scans. Ranges from smooth bond to textured watercolor stock.',
    fileInfo: { format: 'PNG', size: '~70 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/plainpaper2',
    tags: ['texture', 'paper', 'clean', 'subtle'],
    rating: 5.0,
    reviews: 3,
    featured: true,
  },
  {
    id: 'grunge-decay',
    title: 'Grunge & Decay',
    shortDescription: 'Heavy grunge surfaces. Rust, corrosion, and industrial breakdown.',
    longDescription: 'The heavy stuff. Rust eating through metal, concrete crumbling at the edges, paint peeling off industrial walls. These textures bring raw, aggressive surface quality to any project. Layer them for subtle grit or use them at full opacity for maximum destruction.',
    audience: 'Music industry designers, horror and metal artists, anyone who wants their work to feel heavy and corroded.',
    whatsInside: '12 extreme-detail texture scans. Rust, corrosion, chipped paint, cracked concrete, and industrial decay.',
    fileInfo: { format: 'PNG / JPG', size: '~130 MB', count: '12 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/grungedecay',
    tags: ['texture', 'grunge', 'rust', 'industrial'],
    featured: true,
  },
  {
    id: 'transparent-plastic-wrap',
    title: 'Transparent Plastic Wrap',
    shortDescription: 'Crinkled plastic wrap overlays with realistic light refraction.',
    longDescription: 'Real plastic wrap, stretched and crinkled over a light table, then scanned at high resolution. The result: overlays that add instant depth, distortion, and a sealed-in-plastic aesthetic to any design. These are the textures behind that "shrink-wrapped" look trending in editorial and fashion design.',
    audience: 'Fashion designers, editorial layouts, album art, and packaging concepts.',
    whatsInside: '8 high-resolution plastic wrap scans with transparent backgrounds. Ready to overlay.',
    fileInfo: { format: 'PNG', size: '~60 MB', count: '8 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/plasticwrap',
    tags: ['texture', 'plastic', 'overlay', 'transparent'],
    rating: 5.0,
    reviews: 2,
    featured: true,
  },
  {
    id: 'torn-copy-paper',
    title: 'Torn Copy Paper',
    shortDescription: 'Ripped and torn copy paper edges. Raw, uneven tears at high resolution.',
    longDescription: 'Hand-torn copy paper, scanned edge-on. Every rip is unique â jagged tears, peeled layers, curled fibers. Use these as border elements, masks, or collage material. They bring a raw, physical quality that\'s impossible to fake digitally.',
    audience: 'Collage artists, zine designers, social media creators, and anyone building analog-feeling layouts.',
    whatsInside: '12 high-resolution torn paper edge scans. Isolated on transparent backgrounds for instant use.',
    fileInfo: { format: 'PNG', size: '~55 MB', count: '12 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/torncopy',
    tags: ['texture', 'paper', 'torn', 'edges'],
    rating: 5.0,
    reviews: 1,
    featured: true,
  },
  {
    id: 'city-texture-athens-v2',
    title: 'City Texture Pack â Athens V2',
    shortDescription: 'Updated Athens street textures. Graffiti, stickers, and weathered concrete.',
    longDescription: 'A second pass through the streets of Athens, capturing fresher layers of graffiti, newer sticker bombs, and different wall surfaces. This volume expands on the original with wider shots, tighter detail crops, and a broader range of surface types.',
    audience: 'Urban designers, streetwear brands, and artists looking for authentic Mediterranean city grit.',
    whatsInside: '15 high-resolution photos and scans from Athens streets. Wall textures, graffiti layers, and urban decay.',
    fileInfo: { format: 'JPG', size: '~140 MB', count: '15 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/athensv2',
    tags: ['texture', 'city', 'athens', 'graffiti', 'urban'],
    featured: false,
  },
  {
    id: 'city-texture-athens',
    title: 'City Texture Pack â Athens',
    shortDescription: 'Original Athens collection. Sun-bleached walls, layered graffiti, cracked plaster.',
    longDescription: 'The original Athens city texture set. Shot on foot through Exarchia, Psyrri, and the old town. Captures the unique layering of Greek street art â political stencils under wheat-paste posters under spray paint, all baking in Mediterranean sun.',
    audience: 'Designers and photographers seeking warm-toned urban textures with character.',
    whatsInside: '12 high-resolution street-level texture photographs from Athens, Greece.',
    fileInfo: { format: 'JPG', size: '~110 MB', count: '12 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/athens',
    tags: ['texture', 'city', 'athens', 'graffiti'],
    featured: false,
  },
  {
    id: 'city-texture-budapest-v2',
    title: 'City Texture Pack â Budapest V2',
    shortDescription: 'Expanded Budapest set. Ruin bar walls, peeling facades, Danube-side decay.',
    longDescription: 'Volume two from Budapest. This time deeper into the ruin bar district and along the Danube embankment. More chipped tile, more corroded ironwork, and the particular patina of Central European neglect that gives Budapest its visual edge.',
    audience: 'Travel designers, editorial photographers, and texture collectors who want European urban surfaces.',
    whatsInside: '14 high-resolution photographs of Budapest walls, doorways, and architectural surfaces.',
    fileInfo: { format: 'JPG', size: '~125 MB', count: '14 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/budapestv2',
    tags: ['texture', 'city', 'budapest', 'urban'],
    featured: false,
  },
  {
    id: 'city-texture-prague',
    title: 'City Texture Pack â Prague',
    shortDescription: 'Prague edition. Gothic stonework, industrial yards, and painted tunnels.',
    longDescription: 'Prague through a texture lens. Gothic stone surfaces meet industrial rail yards and painted pedestrian tunnels. This pack captures the collision of old-world masonry and modern street culture that defines the city\'s visual identity.',
    audience: 'Dark aesthetic designers, game artists, and anyone who wants textures with a gothic-industrial mood.',
    whatsInside: '12 high-resolution texture photographs from Prague, Czech Republic.',
    fileInfo: { format: 'JPG', size: '~105 MB', count: '12 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/prague',
    tags: ['texture', 'city', 'prague', 'gothic'],
    featured: false,
  },
  {
    id: 'city-texture-budapest-v1',
    title: 'City Texture Pack â Budapest V1',
    shortDescription: 'First Budapest collection. Thermal bath tiles, ruin bar grime, and peeling stucco.',
    longDescription: 'The original Budapest set. Thermal bath tiles with decades of mineral buildup, ruin bar walls layered in posters and paint, and the flaking stucco facades of the Jewish Quarter. Warm, gritty, and distinctly Central European.',
    audience: 'Designers, illustrators, and photographers looking for warm-toned European urban textures.',
    whatsInside: '10 high-resolution photographs of Budapest surfaces and architectural details.',
    fileInfo: { format: 'JPG', size: '~90 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/budapest',
    tags: ['texture', 'city', 'budapest'],
    featured: false,
  },
  {
    id: 'glued-paper-overlays',
    title: 'Glued Paper Overlays',
    shortDescription: 'Wheat-pasted paper textures. Bubbles, wrinkles, and adhesive residue.',
    longDescription: 'Paper glued to surfaces and left to weather. The result: bubbled surfaces, trapped air pockets, adhesive seeping through fiber, and the warped, wrinkled texture of wheat-paste gone wrong (or right). These overlays add an unmistakable street-poster quality to any flat design.',
    audience: 'Poster designers, street art enthusiasts, and branding studios going for a raw, pasted-up look.',
    whatsInside: '10 high-resolution glued paper texture scans. A mix of fresh paste and weathered, peeling layers.',
    fileInfo: { format: 'PNG', size: '~80 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/gluedpaper',
    tags: ['texture', 'paper', 'glue', 'overlay', 'poster'],
    featured: false,
  },
  {
    id: 'bad-photocopy',
    title: 'Bad Photocopy',
    shortDescription: 'Degraded photocopy textures. Toner smears, line artifacts, and generation loss.',
    longDescription: 'The aesthetic of a copy of a copy of a copy. Each texture in this pack was created by running images through old photocopiers multiple times until the toner started breaking down, lines blurred, and artifacts accumulated. The result is pure analog degradation â perfect for punk, DIY, and lo-fi design.',
    audience: 'Punk and DIY designers, zine makers, musicians, and anyone chasing the Xerox aesthetic.',
    whatsInside: '10 high-resolution photocopy texture scans showing progressive degradation.',
    fileInfo: { format: 'PNG', size: '~65 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/badphotocopy',
    tags: ['texture', 'photocopy', 'xerox', 'lo-fi'],
    featured: false,
  },
  {
    id: 'transparent-plastic-overlays',
    title: 'Transparent Plastic Overlays & Textures',
    shortDescription: 'Plastic bag textures, crinkled sheeting, and sealed-edge overlays.',
    longDescription: 'An extended set of transparent plastic textures â bags, sheeting, heat-sealed edges, and crinkled layers. Where the Plastic Wrap pack focused on cling film, this one covers the full spectrum of clear and semi-opaque plastic materials.',
    audience: 'Fashion and beauty designers, packaging mockup artists, and editorial creatives.',
    whatsInside: '10 high-resolution transparent plastic scans. Variety of plastic types and distortion levels.',
    fileInfo: { format: 'PNG', size: '~55 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/plastictextures',
    tags: ['texture', 'plastic', 'transparent', 'overlay'],
    featured: false,
  },
  {
    id: 'black-paper-textures',
    title: 'Black Paper Textures',
    shortDescription: 'Dark paper surfaces. Charcoal stock, blackened kraft, and dyed fiber.',
    longDescription: 'For when your background needs to be dark but still feel physical. These textures capture the surface of black paper â visible fiber, subtle sheen variations, and the imperfections that separate real paper from a flat #000 fill.',
    audience: 'Dark-mode designers, luxury brand studios, and anyone working with black backgrounds who wants them to feel real.',
    whatsInside: '8 high-resolution black paper surface scans. Ranges from smooth to heavily textured.',
    fileInfo: { format: 'PNG', size: '~50 MB', count: '8 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/blackpaper',
    tags: ['texture', 'paper', 'black', 'dark'],
    featured: false,
  },
  {
    id: 'plain-paper-textures',
    title: 'Plain Paper Textures',
    shortDescription: 'The original plain paper set. Simple, honest paper surfaces.',
    longDescription: 'The pack that started the paper series. Clean, no-frills paper surfaces scanned from everyday stock â printer paper, packing paper, manila folders. Subtle but essential textures for adding tactile quality to digital layouts.',
    audience: 'Anyone who works digitally and wants their designs to feel like they exist in the real world.',
    whatsInside: '10 high-resolution paper texture scans. Basic, versatile, and endlessly useful.',
    fileInfo: { format: 'PNG', size: '~60 MB', count: '10 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/plainpaper',
    tags: ['texture', 'paper', 'clean', 'basic'],
    featured: false,
  },
  {
    id: 'plastic-overlays-textures',
    title: 'Plastic Overlays & Textures',
    shortDescription: 'Heavier plastic textures. Bubble wrap, shipping material, and industrial film.',
    longDescription: 'The industrial side of plastic. Bubble wrap, thick shipping film, vacuum-sealed surfaces, and heavy-gauge industrial plastic. These textures are chunkier and more opaque than the transparent sets â good for bold, tactile overlay effects.',
    audience: 'Packaging designers, e-commerce brands, and experimental graphic artists.',
    whatsInside: '8 high-resolution plastic surface and overlay scans.',
    fileInfo: { format: 'PNG', size: '~45 MB', count: '8 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/plasticoverlays',
    tags: ['texture', 'plastic', 'industrial', 'overlay'],
    featured: false,
  },
  {
    id: 'dry-brushes',
    title: 'Dry Brushes (Image Pack)',
    shortDescription: 'Dry brush strokes captured at high resolution. Raw, gestural marks.',
    longDescription: 'Real brush, minimal paint, maximum texture. Each stroke was made with near-dry brushes on heavy paper and scanned at extreme detail. You get the skip, the drag, the individual bristle marks. Use as overlays, masks, or design elements.',
    audience: 'Illustrators, hand-lettering artists, and designers who want authentic brush texture without picking up a brush.',
    whatsInside: '15 high-resolution dry brush stroke scans on transparent backgrounds.',
    fileInfo: { format: 'PNG', size: '~70 MB', count: '15 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/drybrushes',
    tags: ['texture', 'brush', 'stroke', 'gestural'],
    featured: false,
  },
  {
    id: 'cyanotype-textures',
    title: 'Cyanotype Textures',
    shortDescription: 'Sun-printed cyanotype surfaces. Deep blue, chemical reactions, and light bleeds.',
    longDescription: 'Made using the actual cyanotype process â UV-sensitive chemistry on paper, exposed under sunlight. The results are rich, unpredictable blue surfaces with natural light bleeds, chemical reactions, and the organic imperfections that only a 170-year-old photographic process can produce.',
    audience: 'Fine art printmakers, alternative process photographers, and designers who want something genuinely unique.',
    whatsInside: '8 high-resolution cyanotype surface scans.',
    fileInfo: { format: 'PNG / TIFF', size: '~65 MB', count: '8 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/cyanotype',
    tags: ['texture', 'cyanotype', 'blue', 'chemical'],
    featured: false,
  },
  {
    id: 'numbers-random-shapes',
    title: 'Numbers + Random Shapes',
    shortDescription: 'Hand-painted numbers and abstract shapes. Raw gestural elements.',
    longDescription: 'Loose, hand-painted numbers and abstract shapes created with thick paint on newsprint. Not precise â intentionally rough, gestural, and imperfect. These work as graphic elements, overlays, or starting points for custom typographic treatments.',
    audience: 'Graphic designers, editorial layout artists, and anyone building custom compositions from raw elements.',
    whatsInside: '20+ individual hand-painted number and shape scans on transparent backgrounds.',
    fileInfo: { format: 'PNG', size: '~40 MB', count: '20+ images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/numbersshapes',
    tags: ['elements', 'numbers', 'shapes', 'gestural'],
    featured: false,
  },
  {
    id: 'thin-letter-forms',
    title: 'Thin Letter Forms + Numbers',
    shortDescription: 'Delicate hand-drawn letterforms and numerals. Thin, elegant strokes.',
    longDescription: 'A set of hand-drawn letters and numbers made with fine-point tools on smooth paper. These are the delicate counterpart to the gestural shapes pack â precise, thin, and almost fragile. Use them for custom headlines, monograms, or decorative type treatments.',
    audience: 'Typographers, branding designers, and artists who want hand-drawn type elements with a refined quality.',
    whatsInside: 'Full alphabet (uppercase) plus numerals 0â9. Individual high-res scans on transparent backgrounds.',
    fileInfo: { format: 'PNG', size: '~35 MB', count: '36 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/thinletters',
    tags: ['elements', 'letters', 'typography', 'hand-drawn'],
    featured: false,
  },
  {
    id: 'letter-assets-numbers',
    title: 'Letter Assets + Numbers',
    shortDescription: 'Bold, painted letterforms and numbers. Thick strokes, heavy weight.',
    longDescription: 'The bold sibling of the Thin Letter Forms pack. Thick, heavy paint strokes forming uppercase letters and numbers. Made with wide brushes and acrylic on heavy stock. Each character has weight, presence, and unmistakable hand-made character.',
    audience: 'Poster designers, album art artists, and anyone who wants type that feels like it was painted on a wall.',
    whatsInside: 'Full alphabet (uppercase) plus numerals 0â9. Individual high-res scans on transparent backgrounds.',
    fileInfo: { format: 'PNG', size: '~50 MB', count: '36 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/letterassets',
    tags: ['elements', 'letters', 'typography', 'painted'],
    featured: false,
  },
  {
    id: 'saboteur-torn-copy-paper',
    title: 'Â®Saboteur Torn Copy Paper',
    shortDescription: 'The signature Saboteur torn paper set. Definitive rips, tears, and peels.',
    longDescription: 'The original, definitive Saboteur torn paper pack. Hand-torn copy paper in every possible way â clean rips, jagged tears, peeled layers, and folded-then-torn edges. This is the pack that defined the Saboteur aesthetic. Every tear is real, every edge is unique.',
    audience: 'The Saboteur community. Designers, collage artists, and creators who want the definitive torn paper toolkit.',
    whatsInside: '15 signature torn paper scans. The best tears from the archive, carefully selected and processed.',
    fileInfo: { format: 'PNG', size: '~75 MB', count: '15 images', dpi: '300' },
    gumroadUrl: 'https://saboteurcomics.gumroad.com/l/torncopy-signature',
    tags: ['texture', 'paper', 'torn', 'signature'],
    rating: 5.0,
    reviews: 1,
    featured: false,
  },
];
