# OpsIQ - Setup & Run Guide

## Prerequisites: Install Node.js

### Option 1: Download from nodejs.org (Recommended)
1. Go to https://nodejs.org/
2. Download **LTS version** (18.x or 20.x)
3. Run the installer and follow the steps
4. Accept all defaults
5. Restart PowerShell/Terminal after installation

### Option 2: Use Windows Package Manager (winget)
```powershell
winget install OpenJS.NodeJS
```

### Option 3: Use Chocolatey (if installed)
```powershell
choco install nodejs
```

## Verify Installation
```powershell
node --version
npm --version
```

You should see version numbers (e.g., v18.16.0, 9.6.7)

## Run the Application

### 1. Install Dependencies (first time only)
```powershell
cd "C:\Users\ramachandran\Python\figma-export"
npm install
```

### 2. Start Development Server
```powershell
npm run dev
```

The app will start on: **http://localhost:5173**

### 3. Open in Browser
- Manually: Open your browser and navigate to `http://localhost:5173`
- Or check the terminal output for the exact URL

## Build for Production
```powershell
npm run build
npm run preview
```

## What You'll See

**6 Main Tabs:**
- ✓ **Overview**: KPIs, charts, AI agents, initiatives
- ✓ **Procure to Pay**: P2P stages table + initiatives
- ✓ **AP & Invoicing**: Invoice tracking + aging analysis
- ✓ **Recruiting**: Top 5 AI-screened candidates
- ✓ **Vendor & Engineering**: Vendor scores + self-perform analysis
- ✓ **Architecture**: Tech stack (Azure services)

**Features:**
- Floating "Ask OpsIQ" chatbot (bottom-right)
- Real-time KPI cards
- Interactive charts
- Status badges and color-coded indicators
- Responsive mobile-friendly design

## Troubleshooting

### Port 5173 already in use?
```powershell
npm run dev -- --port 3000
```

### Clear cache and reinstall
```powershell
rm -r node_modules package-lock.json
npm install
```

### Build errors?
```powershell
npm run build 2>&1 | more
```

## Environment
- Node.js: 18+ (LTS recommended)
- npm: 9+
- Browser: Any modern browser (Chrome, Edge, Firefox, Safari)
