/* INSILICON Investor Deck – Interactive Logic */

// ===================== DATA DEFINITIONS ===================== //
const gridSections = [
  {
    title: 'Vision & Opportunity',
    content: `
      <p>The global AI semiconductor market is projected to grow from <strong>$118B</strong> in 2024 to <strong>$453B</strong> by 2030 (CAGR 14%). INSILICON is positioned as <em>Asia’s NVIDIA</em>, building AI-native chips and systems for hyperscale and edge workloads.</p>
    `,
  },
  {
    title: 'Geopolitical Advantage',
    content: `
      <p>Leveraging the India–UAE economic corridor (>$85B annual trade), INSILICON gains tariff-free access to key markets, trusted supply chains, and sovereign financing.</p>
    `,
  },
  {
    title: 'Technical Disruption',
    content: `
      <p>Custom transformer engines, 4 nm process, and 208B+ transistors enable unmatched performance per-watt for AI inference and training.</p>
    `,
  },
  {
    title: 'Founder Expertise',
    content: `
      <p>22 years in semiconductor and cloud architecture. Dual-domain mastery spanning chip design and hyperscale AI deployments.</p>
    `,
  },
  {
    title: 'Fabless Strategy',
    content: `
      <p>Design-first model with TSMC as manufacturing partner ensures rapid tape-outs, low cap-ex, and state-of-the-art nodes.</p>
    `,
  },
  {
    title: 'Manufacturing Transition',
    content: `
      <p>Karnataka smart-fab (2028) – $500M investment for 50k wafers/month, 95% yield target, enabling vertical integration.</p>
    `,
  },
  {
    title: 'AI Architecture',
    content: `
      <p>Transformer-native cores, 3.0 TB/s memory bandwidth, and on-chip sparsity engines deliver 78% lower power than NVIDIA H100.</p>
    `,
  },
  {
    title: 'Cloud Integration',
    content: `
      <p>Single-channel AI platform integrates with AWS, Azure, and private clouds via standard Kubernetes operators.</p>
    `,
  },
  {
    title: 'Competitive Advantage',
    content: `
      <p>Up to 78% power reduction and 50% lower TCO vs NVIDIA, with unit cost US$15-20K.</p>
    `,
  },
  {
    title: 'Target Markets',
    content: `
      <p>Hyperscale data centers, edge inference clusters, and enterprise AI appliances across finance, healthcare, and smart-cities.</p>
    `,
  },
  {
    title: 'Financial Projections',
    content: `
      <p>Series A: $50M → Series B: $200M → Revenue $1B (2028), $10B (2032) capturing 2% global AI silicon share.</p>
    `,
  },
  {
    title: 'Funding & Partnerships',
    content: `
      <p>Backed by sovereign funds, strategic alliances with AWS, TSMC, and Karnataka Govt. Secured $100B global VC pipeline.</p>
    `,
  },
];

const slideDeck = [
  {
    title: '1. Market Opportunity',
    body: `
      <p>The AI chip TAM is accelerating toward <strong>$453B</strong> by 2030, driven by data-center and edge deployments.</p>
      <div class="chart-container" style="position: relative; height: 300px;">
        <canvas id="marketChart"></canvas>
      </div>
      <p class="mt-8">Tariff realignments and supply-chain shifts unlock regional opportunities worth <strong>$85B+</strong>.</p>
    `,
    onMount: renderMarketChart,
  },
  {
    title: '2. Technical Architecture',
    body: `
      <p>Comparison of NVIDIA H100 vs INSILICON-1:</p>
      <table class="comparison-table mt-8">
        <thead>
          <tr><th>Metric</th><th>NVIDIA H100</th><th>INSILICON-1</th></tr>
        </thead>
        <tbody>
          <tr><td>Process Node</td><td>5 nm</td><td>4 nm</td></tr>
          <tr><td>Transistor Count</td><td>80 B</td><td>208 B+</td></tr>
          <tr><td>Power Draw</td><td>700 W</td><td>150 W</td></tr>
          <tr><td>Memory BW</td><td>3.35 TB/s</td><td>3.0 TB/s</td></tr>
          <tr><td>Unit Cost</td><td>$30-35K</td><td>$15-20K</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    title: '3. Smart-Fab Manufacturing',
    body: `
      <p>Phase-gate roadmap toward vertical manufacturing:</p>
      <ol class="mt-8">
        <li>Fabless 2025-2027: TSMC 4 nm production</li>
        <li>Smart-Fab build 2026-2028: $500M cap-ex</li>
        <li>Pilot runs Q3-2028 – 50K wafers/month</li>
        <li>Full ramp 2029 – 95% yield, <strong>$1.5B</strong> annual cost savings</li>
      </ol>
    `,
  },
  {
    title: '4. India-UAE Corridor',
    body: `
      <p>Strategic moats unlocked:</p>
      <ul class="mt-8">
        <li>Tariff-free component flow between Asia, EMEA, and Americas</li>
        <li>Sovereign co-investment &amp; debt financing</li>
        <li>Resilient supply chain amid geo-political tensions</li>
      </ul>
    `,
  },
  {
    title: '5. Series A Funding',
    body: `
      <p>Use of proceeds:</p>
      <ul class="mt-8">
        <li>Silicon tape-out &amp; validation: $20M</li>
        <li>Software stack &amp; SDK: $8M</li>
        <li>Team expansion (R&amp;D &amp; Sales): $12M</li>
        <li>Working capital &amp; ops: $10M</li>
      </ul>
      <p class="mt-8">Milestones: A0 silicon Q1-2026, revenue run-rate $120M 2027.</p>
    `,
  },
];

// ===================== DOM ELEMENTS ===================== //
const gridContainer = document.getElementById('grid-container');
const slideContainer = document.getElementById('slide-container');
const gridView = document.getElementById('grid-view');
const slideView = document.getElementById('slide-view');
const btnGrid = document.getElementById('btn-grid');
const btnSlides = document.getElementById('btn-slides');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');

// ===================== GRID RENDER ===================== //
function buildGrid() {
  gridContainer.innerHTML = '';
  gridSections.forEach(({ title, content }, idx) => {
    const item = document.createElement('div');
    item.className = 'grid-item';

    const header = document.createElement('div');
    header.className = 'grid-item__header';
    header.textContent = `${idx + 1}. ${title}`;

    const body = document.createElement('div');
    body.className = 'grid-item__content';
    body.innerHTML = content;

    item.appendChild(header);
    item.appendChild(body);

    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });

    gridContainer.appendChild(item);
  });
}

// ===================== SLIDE RENDER ===================== //
let currentSlide = 0;
let currentChart = null; // Hold chart instance to destroy between slides

function buildSlide(index) {
  const slide = slideDeck[index];
  slideContainer.innerHTML = `
    <h2>${slide.title}</h2>
    <div class="slide-body">${slide.body}</div>
  `;

  // Clean up previous chart if exists
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }

  // If slide defines an onMount callback, execute it now
  if (typeof slide.onMount === 'function') {
    slide.onMount();
  }

  // Disable/enable nav buttons
  prevSlideBtn.disabled = index === 0;
  nextSlideBtn.disabled = index === slideDeck.length - 1;
}

function renderMarketChart() {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  currentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2024', '2030'],
      datasets: [
        {
          label: 'AI Chip Market (USD B)',
          data: [118, 453],
          backgroundColor: ['#1FB8CD', '#5D878F'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          ticks: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
          },
          grid: { color: 'rgba(255,255,255,0.05)' },
        },
        x: {
          ticks: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
          },
          grid: { display: false },
        },
      },
    },
  });
}

// ===================== EVENT BINDINGS ===================== //
btnGrid.addEventListener('click', () => {
  btnGrid.classList.add('btn--primary');
  btnGrid.classList.remove('btn--outline');
  btnSlides.classList.add('btn--outline');
  btnSlides.classList.remove('btn--primary');
  slideView.classList.add('hidden');
  gridView.classList.remove('hidden');
});

btnSlides.addEventListener('click', () => {
  btnSlides.classList.add('btn--primary');
  btnSlides.classList.remove('btn--outline');
  btnGrid.classList.add('btn--outline');
  btnGrid.classList.remove('btn--primary');
  gridView.classList.add('hidden');
  slideView.classList.remove('hidden');
  buildSlide(currentSlide);
});

prevSlideBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    buildSlide(currentSlide);
  }
});

nextSlideBtn.addEventListener('click', () => {
  if (currentSlide < slideDeck.length - 1) {
    currentSlide += 1;
    buildSlide(currentSlide);
  }
});
card.addEventListener("click", () => {
  const detail = document.getElementById(card.dataset.target);
  detail.style.display = "block";
  document.body.classList.add("no-scroll");
});
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
  document.body.classList.remove("no-scroll");
});


// ===================== INITIALISE ===================== //
buildGrid();
