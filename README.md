
# OpsIQ - Operations Intelligence Platform

AI-powered enterprise operations orchestration system for Procure-to-Pay, AP/Invoicing, Recruiting, Vendor Management, and Engineering workflows.

**Built from:** Figma Make project (AI-Powered Procurement Dashboard extended)  
**Tech Stack:** React 18 + TypeScript + Tailwind CSS + Recharts + Azure services  
**Features:** 6 dashboards, 12 AI agents, real-time KPIs, initiatives roadmap, AI chatbot

## Getting Started

```bash
npm install
npm run dev              # http://localhost:5173
npm run build
npm run preview
```

## System Overview

### 6 Primary Dashboards
- **Overview:** KPIs, trend charts, AI agent roster, initiatives
- **Procure to Pay:** P2P lifecycle, 25 initiatives, root cause analysis
- **AP & Invoicing:** Aging analysis, auto-pay agent, JV generator, compliance
- **Recruiting:** Candidate pipeline, AI screening, top 5 matches
- **Vendor & Engineering:** Vendor scores, self-perform analysis, skill gaps
- **Architecture:** Azure Blob → Document Intelligence → OpenAI → Databricks → Power BI

### 12 AI Agents (5 Live, 7 Planned)
Invoice Review, Resume Screening, Vendor Assessment, Compliance Check, Market Research, SOW Generator, Risk Assessment, and more.

### Ask OpsIQ Chatbot
Floating AI copilot with real-time data access to all dashboard metrics and initiatives.

## Key KPIs (Current)
- P2P Cycle: 68 days (target: 60)
- Recruiting: 35 days (target: 28)
- AP Aging: $332K
- Active Invoices: 196
- Active Vendors: 84
- Discount Capture: 4.5%

## Implementation Ready
All tabs, KPIs, charts, and chatbot are fully functional with mock data. See `PROCUREMENT_IMPLEMENTATION.md` for API integration plan.
  