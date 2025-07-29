// Application data
const appData = {
  company: "INSILICON Semiconductor",
  tagline: "India-UAE AI-Native GPU Powerhouse",
  subtitle: "Design → Fab → Automation — One Campus",
  sections: [
    {
      id: "market",
      title: "Market Opportunity",
      icon: "📈",
      summary: "$453B AI Chip Market by 2030 (14% CAGR)",
      details: {
        title: "Market Convergence - The Trillion-Dollar Opportunity",
        points: [
          "$453B Global AI Chip Market by 2030 (14% CAGR)",
          "$66.5B Edge AI Market growth at 21.7% CAGR", 
          "$85B+ India-UAE Trade Corridor bilateral opportunity",
          "US Tariff Impact: 25-100% creates massive displacement opportunity",
          "$100B VC Funding (33% of all global VC now goes to AI companies)",
          "Target 2% market share = $9B revenue potential by 2030"
        ]
      }
    },
    {
      id: "architecture", 
      title: "Technical Architecture",
      icon: "🔧",
      summary: "NVIDIA H100 vs INSILICON-1: 78% power reduction, 50% cost savings",
      details: {
        title: "Technical Architecture Deep-Dive",
        points: [
          "78% Power Reduction: 700W → 150W TDP",
          "50% Cost Savings: $30-40K → $15-20K manufacturing cost",
          "AI-Native Architecture: Custom Transformer Processing Units vs adapted CUDA cores",
          "Hardware-accelerated tokenization for multilingual AI (Hindi/Arabic/English)",
          "4nm process node with 90.7B transistors, 80GB HBM3 memory",
          "80GB HBM3 @ 3TB/s bandwidth for superior performance"
        ]
      }
    },
    {
      id: "manufacturing",
      title: "Manufacturing Revolution", 
      icon: "🏭",
      summary: "Phase-gate approach: Fabless → India-UAE → Full Integration",
      details: {
        title: "Manufacturing & Automation Revolution",
        points: [
          "Phase-Gate Approach: Fabless → India-UAE Manufacturing → Full Integration",
          "Karnataka 8 inch Wafer Fab: 50,000 wafers/month capacity",
          "Smart-Fab Integration: AI-driven automation with real-time yield optimization",
          "CEPA Benefits: 15-20% cost reduction through duty-free component flow",
          "Technical Specs: $30-50M mask costs, 95% yield targets, 15-week production cycles",
          "First silicon in 12 months, volume production in 18 months"
        ]
      }
    },
    {
      id: "geopolitical",
      title: "Geopolitical Advantages",
      icon: "🌍", 
      summary: "India-UAE corridor advantages, tariff arbitrage, strategic positioning",
      details: {
        title: "Geopolitical Positioning & Strategic Advantages",
        points: [
          "Tariff Arbitrage: Avoid 25-100% US tariffs on Chinese/Taiwanese chips",
          "India Advantages: ₹76,000 Cr PLI program, 300,000+ semiconductor engineers",
          "UAE Advantages: 0% corporate tax, $100B+ sovereign funds, strategic location",
          "Competitive Moats: First integrated design-fab-automation campus model",
          "Market Timing: China restrictions create $200B+ supply gap by 2027",
          "CEPA duty-free exports, Gateway to MENA/EU markets"
        ]
      }
    },
    {
      id: "investment",
      title: "Investment Thesis",
      icon: "💰",
      summary: "$50M Series A breakdown, $1B revenue by 2028, IPO readiness 2028",
      details: {
        title: "Investment Thesis & Financial Roadmap",
        points: [
          "$50M Series A Breakdown: 40% design team, 25% prototypes, 20% smart-fab, 15% operations",
          "Technical Milestones: First silicon in 12 months, volume production in 18 months",
          "Market Capture: Target 2% of $453B market = $9B revenue potential by 2030",
          "Financial Projections: $1B revenue by 2028, $10B by 2032, IPO readiness 2028",
          "Break-even: Year 4, IRR > 35%",
          "Exit paths: IPO or NVIDIA/AMD buyout"
        ]
      }
    },
    {
      id: "founder",
      title: "Founder's Edge",
      icon: "👨‍💼",
      summary: "22 years: ST Micro → FICO AI/Cloud Director, RTL + Kubernetes expertise", 
      details: {
        title: "Founder's Edge & Leadership Team",
        points: [
          "22 years experience: ST Microelectronics → FICO AI/Cloud Director",
          "Speaks both RTL and Kubernetes - rare dual-domain mastery",
          "Built $100M+ analytics P&Ls, led 200-person teams",
          "Backed by ex-NVIDIA principal architects (advisors)",
          "Mission: Bridge India's manufacturing with UAE's innovation ecosystem",
          "Cross-cultural leader: Indian talent + Global market access"
        ]
      }
    },
    {
      id: "problem",
      title: "Problem-Solution Gap",
      icon: "⚡",
      summary: "Current GPUs 700W impossible for edge, 6-month redesign too slow",
      details: {
        title: "Problem → Solution Gap Analysis",
        points: [
          "Current GPUs (H100) = 700W → impossible for edge & EVs",
          "6-month silicon redesign loop → too slow for LLM pace", 
          "Fab <7nm limited to Taiwan/US; heavy tariff exposure",
          "INSILICON-1 Solution: 150W TDP, 78% power reduction",
          "4nm transformer engines, FP4/INT4 native processing",
          "Hardware tokenizers for Hindi-Arabic-English multilingual AI"
        ]
      }
    },
    {
      id: "campus",
      title: "Integrated Campus Model",
      icon: "🏢",
      summary: "Design → Fab → Automation — One Campus in Dubai Silicon Oasis",
      details: {
        title: "Integrated Campus Model Innovation",
        points: [
          "Design Studio – Synopsys/Cadence cloud EDA tools",
          "Smart-Fab – Robotic 6 inch/8 inch pilot → 4nm full fab",
          "Automation Nerve-Center – AI-driven APC, digital twins",
          "Edge-to-Cloud Lab – Kubernetes GPU testbed",
          "All on a single secured site in Dubai Silicon Oasis",
          "Eliminates offshore logistics, reduces tape-out cycles to 3 months"
        ]
      }
    },
    {
      id: "roadmap",
      title: "Roadmap Timeline", 
      icon: "🗓️",
      summary: "M1-18: Fabless design → Y2: Pilot fab → Y5: Mega-fab",
      details: {
        title: "Strategic Roadmap & Timeline",
        points: [
          "M 1-18: Fabless design, first TSMC tape-out",
          "Y 2: 180nm micro-fab pilot (Dubai Silicon Oasis)",
          "Y 3-4: Karnataka 8 inch fab + CEPA duty-free flow",
          "Y 5: 4nm UAE mega-fab; Volume GPUs ship",
          "Milestones Achieved: RTL spec complete, Synopsys & AWS credits secured",
          "LOIs worth $12M GPU pre-orders already secured"
        ]
      }
    },
    {
      id: "moats",
      title: "Tech Moats",
      icon: "🛡️",
      summary: "AI-Native ISA, closed-loop DFM, sovereign compliance",
      details: {
        title: "Technical Moats & Competitive Advantages",
        points: [
          "AI-Native ISA — transformer ops in hardware",
          "Closed-Loop DFM — design ↔ fab ML feedback <24h",
          "Sovereign-Compliant Supply — India mask-sets, UAE fab, US-friendly IP",
          "Green-Fab — 30% less water & power via smart robotics",
          "Robotic wafer handling cuts particle defects by 32%",
          "Digital-twin simulations predict equipment faults and optimize scheduling"
        ]
      }
    },
    {
      id: "business",
      title: "Business Model",
      icon: "💼",
      summary: "4 revenue streams: Chip sales, IP licensing, Cloud GPU-aaS, Gov SKUs",
      details: {
        title: "Business Model & Revenue Streams",
        points: [
          "Chip Sales – Automotive, telco, data-center edge applications",
          "IP Licensing – Transformer engine blocks to ASIC houses",
          "Cloud GPU-aaS – Pay-per-use racks in UAE Tier-IV data centers", 
          "Gov-secure SKUs – Defense & space variants",
          "Target markets: Edge computing, autonomous vehicles, smart factories",
          "Premium pricing strategy for AI-native capabilities"
        ]
      }
    },
    {
      id: "gtm",
      title: "Go-to-Market Strategy",
      icon: "🚀",
      summary: "Anchor customers, strategic alliances, regulatory fast-track",
      details: {
        title: "Go-to-Market Strategy & Partnerships",
        points: [
          "Anchor Customers – Tata Elxsi, du, G42 Cloud partnerships",
          "Strategic Alliances – Synopsys, AWS ISV Accelerate, NVIDIA Inception",
          "Regulatory – Fast-track VEU clearance, UAE AI Council support",
          "Leadership Team: ex-FICO Cloud Director, 20yr NVIDIA architect, ex-GlobalFoundries GM",
          "Board Advisor – Former India Semiconductor Mission head",
          "ESG Impact: 40% renewable power, upskill 1,000 engineers in 5 years"
        ]
      }
    }
  ]
};

// DOM elements
let sectionsGrid;
let detailView;
let dashboardView;
let detailIcon;
let detailTitle;
let detailPoints;
let backButton;

// Initialize the application
function init() {
  // Get DOM elements
  sectionsGrid = document.getElementById('sectionsGrid');
  detailView = document.getElementById('detailView');
  dashboardView = document.getElementById('dashboard');
  detailIcon = document.getElementById('detailIcon');
  detailTitle = document.getElementById('detailTitle');
  detailPoints = document.getElementById('detailPoints');
  backButton = document.getElementById('backButton');

  // Set up event listeners
  backButton.addEventListener('click', function(e) {
    e.preventDefault();
    showDashboard();
  });

  // Render dashboard
  renderDashboard();
}

// Render the dashboard grid
function renderDashboard() {
  sectionsGrid.innerHTML = '';
  
  appData.sections.forEach((section, index) => {
    const sectionCard = createSectionCard(section, index);
    sectionsGrid.appendChild(sectionCard);
  });
}

// Create a section card element
function createSectionCard(section, index) {
  const card = document.createElement('div');
  card.className = 'section-card';
  card.setAttribute('data-section-id', section.id);
  
  card.innerHTML = `
    <div>
      <span class="section-icon">${section.icon}</span>
      <h3 class="section-title">${section.title}</h3>
    </div>
    <p class="section-summary">${section.summary}</p>
  `;
  
  // Add click event listener
  card.addEventListener('click', function(e) {
    e.preventDefault();
    showSectionDetail(section);
  });
  
  return card;
}

// Show section detail view
function showSectionDetail(section) {
  // Populate detail content
  detailIcon.textContent = section.icon;
  detailTitle.textContent = section.details.title;
  
  // Clear and populate points
  detailPoints.innerHTML = '';
  section.details.points.forEach(point => {
    const pointElement = document.createElement('div');
    pointElement.className = 'detail-point';
    pointElement.textContent = point;
    detailPoints.appendChild(pointElement);
  });
  
  // Hide dashboard and show detail view
  dashboardView.classList.add('hidden');
  detailView.classList.remove('hidden');
  
  // Smooth scroll to top
  detailView.scrollTop = 0;
}

// Show dashboard view
function showDashboard() {
  // Hide detail view and show dashboard
  detailView.classList.add('hidden');
  dashboardView.classList.remove('hidden');
  
  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle escape key to go back to dashboard
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !detailView.classList.contains('hidden')) {
    showDashboard();
  }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);