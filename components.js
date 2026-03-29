/**
 * Saboteur Components
 * Shared JavaScript components injected into every page.
 * Depends on site-config.js being loaded first (SITE_CONFIG, FREE_LIBRARY globals).
 */

/**
 * Get the correct base path for relative URLs based on current page location.
 * Returns '../' if we're in a subdirectory (vault/, shop/, publish/, contact/, free-library/),
 * or './' if at root.
 */
function getBasePath() {
  const path = window.location.pathname;
  if (path.match(/\/(vault|shop|publish|contact|free-library)\//)) {
    return '../';
  }
  return './';
}

/**
 * Build a correct relative href based on the target type and current page location.
 * @param {string} href - The href from config or components
 * @returns {string} - The correct relative path
 */
function buildHref(href) {
  const basePath = getBasePath();

  // Anchor links: need to point to index.html from subpages
  if (href.startsWith('#')) {
    return basePath + 'index.html' + href;
  }

  // Paths: prepend base path
  return basePath + href;
}

/**
 * renderHeader(containerSelector)
 * Injects the new centered header with navigation into the element matching containerSelector.
 */
function renderHeader(containerSelector = '#site-header') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Build nav items with separators (no trailing separator)
  const navItemsHtml = SITE_CONFIG.nav
    .map((item, index) => {
      const href = buildHref(item.href);
      const separator = index < SITE_CONFIG.nav.length - 1 ? '<span class="separator">Â·</span>' : '';
      return `<a href="${href}">${item.label}</a>${separator}`;
    })
    .join('');

  const html = `
    <header class="site-header">
      <div class="container">
        <h1 class="site-title">
          <a href="${buildHref('index.html')}">SABOTEUR COMICS</a>
        </h1>
        <nav class="site-nav">
          ${navItemsHtml}
        </nav>
      </div>
    </header>
  `;

  container.innerHTML = html;
}

/**
 * renderFileComplaint()
 * Creates the "File Complaint" link and overlay. Auto-called on every page.
 * Clicking the link shows a random complaint response in an overlay.
 */
function renderFileComplaint() {
  // Create complaint elements
  const complaintLink = document.createElement('a');
  complaintLink.className = 'file-complaint-link';
  complaintLink.id = 'file-complaint-trigger';
  complaintLink.href = '#';
  complaintLink.textContent = 'File Complaint';

  const overlay = document.createElement('div');
  overlay.className = 'complaint-overlay';
  overlay.id = 'complaint-overlay';
  overlay.innerHTML = `
    <div class="complaint-inner">
      <p class="complaint-text" id="complaint-text"></p>
      <button class="complaint-close" id="complaint-close">Thanks, asshole</button>
    </div>
  `;

  // Insert into document
  document.body.appendChild(complaintLink);
  document.body.appendChild(overlay);

  // Event handlers
  const trigger = document.getElementById('file-complaint-trigger');
  const closeBtn = document.getElementById('complaint-close');
  const complaintText = document.getElementById('complaint-text');

  const getRandomResponse = () => {
    const responses = SITE_CONFIG.complaintResponses;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const showComplaint = (e) => {
    e.preventDefault();
    complaintText.textContent = getRandomResponse();
    overlay.classList.add('active');
  };

  const hideComplaint = () => {
    overlay.classList.remove('active');
  };

  trigger.addEventListener('click', showComplaint);
  closeBtn.addEventListener('click', hideComplaint);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideComplaint();
  });
}

/**
 * renderFooter(containerSelector)
 * Injects the new footer with location bar and Stray into containerSelector.
 */
function renderFooter(containerSelector = '#site-footer') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const loc = SITE_CONFIG.footerLocation;
  const html = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-left">
            Last breathed: ${loc.lastBreathed} Â· Saboteur Comics Â· Underground grit
          </div>
          <div class="footer-right">
            LOC: ${loc.city} Â· ${loc.state} | TIME: ${loc.time} | TEMP: ${loc.temp} Â· ${loc.conditions}
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-links">
            <a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span class="separator">Â·</span>
            <a href="${SITE_CONFIG.social.biosite}" target="_blank" rel="noopener noreferrer">BioSite</a>
            <span class="separator">Â·</span>
            <a href="mailto:${SITE_CONFIG.contactEmail}">Contact</a>
          </div>
          <div class="stray-container" id="stray-container">
            <!-- Stray will be rendered here -->
          </div>
        </div>
      </div>
    </footer>
  `;

  container.innerHTML = html;
}

/**
 * initStray()
 * Creates and animates the pixel cat (Stray) in the footer.
 * The cat responds to mood based on time of day.
 */
function initStray() {
  if (!SITE_CONFIG.stray || !SITE_CONFIG.stray.enabled) return;

  const container = document.getElementById('stray-container');
  if (!container) return;

  // Determine mood based on time
  const hour = new Date().getHours();
  let mood;
  if (hour >= SITE_CONFIG.stray.sleepHourStart && hour < SITE_CONFIG.stray.wakeHourStart) {
    mood = 'sleepy';
  } else {
    const moods = SITE_CONFIG.stray.moods.filter(m => m !== 'sleepy');
    mood = moods[Math.floor(Math.random() * moods.length)];
  }

  // Create stray wrapper and house
  const strayEl = document.createElement('div');
  strayEl.className = 'stray-wrapper';
  strayEl.setAttribute('data-mood', mood);
  strayEl.title = `Stray is feeling ${mood}`;

  strayEl.innerHTML = `
    <div class="stray-house" id="stray-house">
      <svg viewBox="0 0 24 20" width="24" height="20" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
        <!-- Tiny house roof -->
        <polygon points="12,0 24,8 0,8" fill="#1a1a1a"/>
        <!-- House body -->
        <rect x="2" y="8" width="20" height="12" fill="#1a1a1a"/>
        <!-- Door -->
        <rect x="9" y="10" width="6" height="10" fill="#333" class="stray-door"/>
        <!-- Cat eyes (peek) -->
        <rect x="10" y="13" width="2" height="1" fill="#FF3000" class="stray-eye stray-eye-left"/>
        <rect x="13" y="13" width="2" height="1" fill="#FF3000" class="stray-eye stray-eye-right"/>
      </svg>
      <div class="stray-bubble" id="stray-bubble"></div>
      <div class="stray-menu" id="stray-menu">
        <button class="stray-action" data-action="feed">Feed Me</button>
        <button class="stray-action" data-action="pet">Pet Me</button>
      </div>
    </div>
  `;

  container.appendChild(strayEl);

  // Get references
  const house = document.getElementById('stray-house');
  const bubble = document.getElementById('stray-bubble');
  const menu = document.getElementById('stray-menu');

  // State for movement
  let strayPosition = 0;

  // Hover: door swings, cat peeks more
  house.addEventListener('mouseenter', () => {
    house.classList.add('peeking');
  });

  house.addEventListener('mouseleave', () => {
    house.classList.remove('peeking');
    menu.classList.remove('visible');
  });

  // Click: show purr bubble + menu
  house.addEventListener('click', (e) => {
    e.stopPropagation();
    bubble.textContent = 'Prr...';
    bubble.classList.add('visible');
    setTimeout(() => bubble.classList.remove('visible'), 2000);
    menu.classList.toggle('visible');
  });

  // Feed/Pet actions
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('stray-action')) {
      const action = e.target.getAttribute('data-action');
      bubble.textContent = action === 'feed' ? 'Nom nom...' : '*purrs*';
      bubble.classList.add('visible');
      setTimeout(() => bubble.classList.remove('visible'), 2000);
      menu.classList.remove('visible');
    }
  });

  // Creep left every interval (desktop only, not when sleepy)
  if (window.innerWidth >= 768 && mood !== 'sleepy') {
    setInterval(() => {
      strayPosition += Math.random() * 3 + 1; // 1-4px
      if (strayPosition > 200) strayPosition = 0; // reset
      strayEl.style.transform = `translateX(-${strayPosition}px)`;
    }, SITE_CONFIG.stray.creepInterval);
  }
}

/**
 * renderSubscribeBlock(containerSelector)
 * Injects a newsletter subscribe section into containerSelector.
 */
function renderSubscribeBlock(containerSelector = '#subscribe-block') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const html = `
    <section class="subscribe-block">
      <div class="container">
        <div class="subscribe-content">
          <h2>Stay Updated</h2>
          <p>New packs, comics, and experiments. No spam.</p>
          <form class="subscribe-form" onsubmit="return false;">
            <input type="email" placeholder="Your email" required aria-label="Newsletter email">
            <button type="submit">Join</button>
          </form>
          <p class="subscribe-contact">Questions? <a href="mailto:${SITE_CONFIG.contactEmail}">${SITE_CONFIG.contactEmail}</a></p>
        </div>
      </div>
    </section>
  `;

  container.innerHTML = html;

  // Attach form handler
  const form = container.querySelector('.subscribe-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    handleSubscribe(input.value);
  });
}

/**
 * renderVaultGrid(containerSelector, options)
 * Renders the full Vault card grid with optional tag filtering.
 */
function renderVaultGrid(containerSelector = '#vault-grid', options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container || !FREE_LIBRARY) return;

  const { showFilter = true } = options;

  // Collect all unique tags
  const allTags = new Set();
  FREE_LIBRARY.forEach(resource => {
    if (resource.tags && Array.isArray(resource.tags)) {
      resource.tags.forEach(tag => allTags.add(tag));
    }
  });
  const uniqueTags = Array.from(allTags).sort();

  // Build filter buttons
  let filterHtml = '';
  if (showFilter) {
    filterHtml = `
      <div class="tag-filter" id="tag-filter">
        <button class="active" data-tag="all">All</button>
        ${uniqueTags.map(tag => `<button data-tag="${tag}">${capitalizeTag(tag)}</button>`).join('')}
      </div>
    `;
  }

  // Build card grid
  const cardsHtml = FREE_LIBRARY
    .map(resource => {
      const tagsStr = resource.tags ? resource.tags.join(',') : '';
      const href = buildHref(`vault/resource.html?id=${resource.id}`);
      return `
        <a href="${href}" class="vault-card fade-in" data-tags="${tagsStr}">
          <div class="card-preview">
            <span class="card-preview-text">${escapeHtml(resource.title)}</span>
          </div>
          <h3 class="card-title">${escapeHtml(resource.title)}</h3>
          <p class="card-description">${escapeHtml(resource.shortDescription)}</p>
          <span class="card-link">View Resource â</span>
        </a>
      `;
    })
    .join('');

  const html = `
    ${filterHtml}
    <div class="vault-grid grid">
      ${cardsHtml}
    </div>
  `;

  container.innerHTML = html;

  // Attach filter handlers
  if (showFilter) {
    const filterBtns = container.querySelectorAll('#tag-filter button');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        const selectedTag = btn.getAttribute('data-tag');
        const cards = container.querySelectorAll('.vault-card');

        cards.forEach(card => {
          const cardTags = card.getAttribute('data-tags').split(',').filter(t => t);
          const shouldShow = selectedTag === 'all' || cardTags.includes(selectedTag);
          card.style.display = shouldShow ? '' : 'none';
        });
      });
    });
  }

  // Initialize fade-in observer
  initFadeIn();
}

/**
 * renderResourcePage(containerSelector)
 * Reads ?id= from URL, finds matching resource, and renders full product page.
 */
function renderResourcePage(containerSelector = '#resource-content') {
  const container = document.querySelector(containerSelector);
  if (!container || !FREE_LIBRARY) return;

  // Get resource ID from URL
  const params = new URLSearchParams(window.location.search);
  const resourceId = params.get('id');

  if (!resourceId) {
    container.innerHTML = `
      <section class="resource-not-found">
        <div class="container">
          <h1>Resource Not Found</h1>
          <p>Sorry, we couldn't find that resource.</p>
          <a href="${buildHref('vault/')}">Back to Vault</a>
        </div>
      </section>
    `;
    return;
  }

  // Find resource
  const resource = FREE_LIBRARY.find(r => r.id === resourceId);

  if (!resource) {
    container.innerHTML = `
      <section class="resource-not-found">
        <div class="container">
          <h1>Resource Not Found</h1>
          <p>Sorry, we couldn't find that resource.</p>
          <a href="${buildHref('vault/')}">Back to Vault</a>
        </div>
      </section>
    `;
    return;
  }

  // Update page title
  document.title = `${resource.title} â Saboteur`;

  // Truncate manifesto to ~2 sentences for creator section
  const manifestoTrunc = truncateSentences(SITE_CONFIG.manifesto, 2);

  const html = `
    <!-- HERO -->
    <section class="resource-hero fade-in">
      <div class="container">
        <div class="resource-hero-inner">
          <div class="resource-cover">
            <span class="card-preview-text">${escapeHtml(resource.title)}</span>
          </div>
          <div class="resource-info">
            <h1>${escapeHtml(resource.title)}</h1>
            <p class="resource-pitch">${escapeHtml(resource.shortDescription)}</p>
            <ul class="resource-benefits">
              <li>${resource.fileInfo.count} at ${resource.fileInfo.dpi} DPI</li>
              <li>${resource.fileInfo.format} format, ${resource.fileInfo.size}</li>
              <li>Free download â no strings attached</li>
            </ul>
            <div class="resource-cta">
              <a href="${resource.gumroadUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Download Free</a>
            </div>
            <div class="resource-file-info">
              <span>Format: ${resource.fileInfo.format}</span>
              <span>Size: ${resource.fileInfo.size}</span>
              <span>Files: ${resource.fileInfo.count}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAILS -->
    <section class="resource-details fade-in">
      <div class="container">
        <div class="resource-details-inner">
          <h2>Details</h2>
          <p>${escapeHtml(resource.longDescription)}</p>
          <h2>Who It's For</h2>
          <p class="audience">${escapeHtml(resource.audience)}</p>
          <h2>What's Inside</h2>
          <p>${escapeHtml(resource.whatsInside)}</p>
        </div>
      </div>
    </section>

    <!-- CREATOR -->
    <section class="resource-creator fade-in">
      <div class="container">
        <div class="resource-creator-inner">
          <div class="creator-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-label="Saboteur logo" width="56" height="56">
              <defs><clipPath id="creator-logo-clip"><circle cx="50" cy="50" r="50"/></clipPath></defs>
              <circle cx="50" cy="50" r="50" fill="#000"/>
              <g clip-path="url(#creator-logo-clip)">
                <path d="M80.69,76.32c-.92-2.83-1.51-5.76-1.76-8.73l-.08-.89c-.23-2.73-.65-5.45-1.25-8.13l-3.55-15.85c-.34-1.52-2.23-2.07-3.33-.96l-12.22,12.37c-.87.89-2.06,1.38-3.31,1.37-1.3,0-3.14-.02-5.19,0-2.05-.02-3.89,0-5.19,0-1.24,0-2.43-.48-3.31-1.37l-12.22-12.37c-1.1-1.11-2.99-.57-3.33.96l-3.55,15.85c-.6,2.68-1.02,5.39-1.25,8.13l-.08.89c-.25,2.97-.84,5.89-1.76,8.73l-7.76,23.93v5.78h76.9v-5.78l-7.76-23.93Z"/>
                <path fill="#fff" d="M43.83,82.52l-.68-5.15c-.26-1.97-1.44-3.7-3.17-4.66l-2.02-1.12c-1.62-.9-3.58-.97-5.26-.18l-5.01,2.35,1.24,5.16c.46,1.9,1.78,3.48,3.58,4.25l.94.41c2.2.95,4.66,1.09,6.95.4l3.11-.94c.21-.06.35-.28.32-.5Z"/>
                <ellipse cx="35.76" cy="77.62" rx="3.52" ry="2.76" transform="translate(-45.69 103.5) rotate(-82.89)"/>
                <path fill="#fff" d="M56.17,82.52l.68-5.15c.26-1.97,1.44-3.7,3.17-4.66l2.02-1.12c1.62-.9,3.58-.97,5.26-.18l5.01,2.35-1.24,5.16c-.46,1.9-1.78,3.48-3.58,4.25l-.94.41c-2.2.95-4.66,1.09-6.95.4l-3.11-.94c-.21-.06-.35-.28.32-.5Z"/>
                <ellipse cx="64.24" cy="77.62" rx="2.76" ry="3.52" transform="translate(-9.12 8.55) rotate(-7.11)"/>
              </g>
            </svg>
          </div>
          <div class="creator-text">
            <h3>Saboteur</h3>
            <p>${escapeHtml(manifestoTrunc)}</p>
          </div>
        </div>
      </div>
    </section>
  `;

  container.innerHTML = html;

  // Initialize fade-in observer
  initFadeIn();
}

/**
 * renderCarousel(containerSelector, excludeId)
 * Renders a horizontal carousel of resources, excluding the one with excludeId.
 * Links point to vault/resource.html.
 */
function renderCarousel(containerSelector = '#resource-carousel', excludeId = null) {
  const container = document.querySelector(containerSelector);
  if (!container || !FREE_LIBRARY) return;

  // Filter and shuffle resources
  let resources = FREE_LIBRARY.filter(resource => resource.id !== excludeId);
  resources = shuffleArray(resources).slice(0, 12);

  const carouselItemsHtml = resources
    .map(resource => {
      const href = buildHref(`vault/resource.html?id=${resource.id}`);
      return `
        <a href="${href}" class="carousel-item">
          <div class="card-preview">
            <span class="card-preview-text">${escapeHtml(resource.title)}</span>
          </div>
          <h3 class="card-title">${escapeHtml(resource.title)}</h3>
          <span class="card-link">View Resource â</span>
        </a>
      `;
    })
    .join('');

  const html = `
    <section class="carousel-section">
      <div class="container">
        <h2>More Resources</h2>
        <div class="carousel-track">
          ${carouselItemsHtml}
        </div>
      </div>
    </section>
  `;

  container.innerHTML = html;
}

/**
 * handleSubscribe(email)
 * Handles the subscribe action based on SITE_CONFIG.newsletter.provider.
 */
function handleSubscribe(email) {
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  const provider = SITE_CONFIG.newsletter.provider || 'custom';

  switch (provider) {
    case 'mailchimp':
      // TODO: Submit to Mailchimp action URL
      console.log('Mailchimp subscription (TODO):', email);
      break;

    case 'convertkit':
      // TODO: POST to ConvertKit API
      console.log('ConvertKit subscription (TODO):', email);
      break;

    case 'buttondown':
      // TODO: POST to Buttondown API
      console.log('Buttondown subscription (TODO):', email);
      break;

    case 'custom':
    default:
      // Show confirmation message
      alert('Thanks! We\'ll be in touch.');
      // Open mailto with subscriber email in body for manual handling
      const subject = encodeURIComponent('New Newsletter Subscriber');
      const body = encodeURIComponent(`Email: ${email}`);
      window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
      break;
  }
}

/**
 * initFadeIn()
 * Observes .fade-in elements and adds .visible class when they come into view.
 */
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/**
 * UTILITY FUNCTIONS
 */

/**
 * Escape HTML special characters to prevent XSS.
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Shuffle an array using Fisher-Yates algorithm.
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Capitalize tag names for display.
 */
function capitalizeTag(tag) {
  return tag
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Truncate text to N sentences.
 */
function truncateSentences(text, numSentences = 2) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  return sentences
    .slice(0, numSentences)
    .map(s => s.trim())
    .join('. ') + '.';
}

/**
 * AUTO-INITIALIZATION
 * Run on DOMContentLoaded to inject components into existing placeholders.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Render header if placeholder exists
  if (document.getElementById('site-header')) {
    renderHeader('#site-header');
  }

  // Render File Complaint on every page
  renderFileComplaint();

  // Render footer if placeholder exists
  if (document.getElementById('site-footer')) {
    renderFooter('#site-footer');
  }

  // Initialize Stray
  initStray();

  // Render subscribe block if placeholder exists
  if (document.getElementById('subscribe-block')) {
    renderSubscribeBlock('#subscribe-block');
  }

  // Render vault grid if placeholder exists
  if (document.getElementById('vault-grid')) {
    renderVaultGrid('#vault-grid', { showFilter: true });
  }

  // Render resource page if placeholder exists
  if (document.getElementById('resource-content')) {
    renderResourcePage('#resource-content');
  }

  // Render carousel if placeholder exists
  if (document.getElementById('resource-carousel')) {
    const params = new URLSearchParams(window.location.search);
    renderCarousel('#resource-carousel', params.get('id'));
  }

  // Initialize fade-in observer
  initFadeIn();
});
