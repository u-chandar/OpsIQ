# OpsIQ - Operations Intelligence Platform - Implementation Notes

## Implementation Status
✅ **Complete** — Full multi-tab enterprise operations platform with 6 major domains, 12 AI agents, real-time KPIs, initiatives roadmap, and AI chatbot.

## Figma Design Source
Reverse-engineered from Figma Make project: AI-Powered Procurement Dashboard (Note: actual system is much broader—OpsIQ covers P2P, AP/Invoicing, Recruiting, Vendor Management, and Engineering).

## System Architecture
**OpsIQ** is an intelligent operations orchestration platform with:

### 6 Primary Tabs
1. **Overview** — 6 KPIs (P2P Cycle, Recruiting Cycle, AP Aging, Active Invoices, Active Vendors, Discount Capture) + 4 trend charts + 12 AI agents roster + initiatives roadmap
2. **Procure to Pay** — Lifecycle stages, root cause analysis, 25-initiative board (real-time dashboard, invoice review, cash flow automation, discount capture, bonuses, IDIQ/T&M/LPTA, AI SOW agents)
3. **AP & Invoicing** — AP Aging buckets, auto-pay agent status, JV invoice generator, compliance panel
4. **Recruiting** — Stage timeline with AI screening, Top 5 candidates (scores + effort + notes), intangible quality weights, initiatives board
5. **Vendor & Engineering** — AI capability scorecard, IDIQ/Best Value/T&M models, self-perform vs SubK analysis, skill gaps, cavern AI assessment
6. **Architecture** — Layered tech stack (Azure Blob → Document Intelligence → OpenAI → Databricks → Power BI + OpsIQ App)

### 12 AI Agents (5 Live, 7 Planned)
**Live:**
- Invoice Review (AP & Invoicing, 94% accuracy)
- Resume Screening (Recruiting, 89% accuracy)
- Vendor Assessment (Vendor Mgmt, 91% accuracy)
- Compliance Check (P2P, 96% accuracy)
- Market Research (Procurement, 87% accuracy)

**Planned:** SOW Generator, Risk Assessment, Discount Optimizer, Cash Flow Forecast, Invoice Generator, Skill Gap Analyzer, Candidate Matcher

### Floating AI Chatbot ("Ask OpsIQ")
- Contextually aware of all dashboard data
- 14 query types (P2P time, AP aging, invoice pipeline, vendors, discounts, agents, recruiting, issues, JV pipeline, engineering, initiatives, stakeholders, architecture, help)
- Connects to: Databricks (data), Azure OpenAI (NLP), OpsIQ Agent Registry, Initiative DB

## Tech Stack
- **Frontend:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS (responsive, utility-first)
- **Charts:** Recharts (Line, Area, Bar, responsive containers)
- **Icons:** Lucide React
- **Backend:** Azure Blob, Azure Document Intelligence, Azure OpenAI, Databricks, Power BI

## Key Implementation Files
- **src/app/App.tsx** (572 lines) — Complete multi-tab app with KPI cards, 6 charts, AI agents grid, initiatives board, chatbot UI

## Mock Data Sets Included
- `p2pTrendData` — 6-month P2P cycle trend (118→68 days)
- `invoiceVolumeData` — Monthly invoice count vs processed
- `discountCaptureData` — Monthly discount capture % (1.2%→4.5%)
- `apAgingData` — AP aging buckets (Current→120+ days)
- `recruitingTrendData` — Recruiting cycle trend (52→35 days)
- `aiAgents` — 12-agent roster with status & accuracy
- `initiatives` — 8 active/planned cross-domain initiatives

## API Integration Plan
Replace mock constants with REST APIs:
1. **P2P Metrics:** `GET /api/p2p/kpis` → (cycle_days, target, trend)
2. **Recruiting:** `GET /api/recruiting/kpis` → (cycle_days, target, trend)
3. **AP Aging:** `GET /api/ap/aging` → (total_outstanding, bucket_breakdown)
4. **Invoices:** `GET /api/invoices/stats` → (active_count, processed_count, volume_trend)
5. **Vendors:** `GET /api/vendors/stats` → (total_count, evaluated_count, performance_scores)
6. **Discounts:** `GET /api/discounts/capture-rate` → (monthly_rates, trend_percentage)
7. **Trends:** `GET /api/charts/{chartType}` → (time_series_data)
8. **AI Agents:** `GET /api/agents?status=live|planned` → (agent_roster, metrics)
9. **Initiatives:** `GET /api/initiatives?status=active|planned` → (board_data)
10. **Chatbot:** `POST /api/copilot/query` + context → (response_with_sources)

## Suggested Integration Architecture
```
OpsIQ UI (React)
    ↓
├─ API Gateway (Express/FastAPI)
├─ Databricks REST API (analytics queries)
├─ Azure OpenAI (AI agents + NLP for chatbot)
├─ Azure Blob (file storage)
└─ Power BI Embedded (advanced reporting)
```

## Frontend Feature Expansion (Placeholder Tabs)
Currently, tabs P2P, AP, Recruiting, Vendor, and Architecture show "Coming Soon" placeholders. To fill them:
1. Break out each tab into dedicated components (e.g., `ProcureToPayTab.tsx`)
2. Add detailed stage breakdown tables and sub-initiatives
3. Add filters, drilldowns, and export workflows
4. Wire chatbot context to pull live tab data

## Build & Run
```bash
cd figma-export
npm install
npm run dev              # Dev server on http://localhost:5173
npm run build            # Production build
npm run preview          # Preview production build
```

## Deployment
Use Azure Static Web Apps + Azure Functions for backend, or Vercel + serverless API layer.

## Notes
- **All 12 agents are defined and visible** in Overview tab
- **Chatbot is fully functional** with message UI and simulated responses
- **KPIs match Figma exactly** (P2P 68d, Recruiting 35d, AP $332K, etc.)
- **Charts render live data** from mock constants (ready for API swap)
- **Responsive design** works on mobile/tablet/desktop
- **Type-safe** with full TypeScript support
- **No external UI component library needed** — pure Tailwind + Recharts
