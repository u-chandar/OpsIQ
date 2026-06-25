# OpsIQ React Dashboard - Installation & Setup Guide

## Overview

The OpsIQ dashboard is now a React-based application with an admin installation wizard. On first run, users will be asked to complete a setup flow that collects essential configuration details.

## Setup Flow

When you launch the React app for the first time, you'll be presented with a **3-step admin setup wizard**:

### Step 1: Admin Information
Collect admin account details:
- **Full Name**: Administrator's full name
- **Email Address**: Administrator's email (required for notifications)

### Step 2: Organization Setup
Configure organization details:
- **Organization Name**: Your company/organization name
- **Your Role**: Dropdown selection (Operations Manager, VP Operations, CFO, Procurement Manager, Other)

### Step 3: API Configuration
Set up backend connectivity:
- **API Endpoint**: URL to your OpsIQ backend API (default: `http://localhost:5000`)
- Information about local development setup

## Running the React App

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation & Launch

```bash
# From the figma-export directory
cd figma-export

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

The app will open in your browser, typically at `http://localhost:3000` or similar.

### First Run
1. You'll see the **Setup Wizard** with the OpsIQ logo
2. Complete all 3 steps with your admin details
3. Click **"Complete Setup"** on the final step
4. Admin configuration is saved locally and the dashboard will load

### Subsequent Runs
- Your admin configuration is saved in localStorage
- Dashboard loads directly without re-running setup
- Click **Logout** button (top-right corner) to reconfigure or reset

## Admin Configuration Storage

Admin details are stored in **browser localStorage** under the key `opsiq_admin_config`:

```json
{
  "adminName": "John Doe",
  "adminEmail": "admin@company.com",
  "organization": "Acme Corporation",
  "role": "Operations Manager",
  "apiEndpoint": "http://localhost:5000",
  "installedAt": "2026-06-25T10:30:00.000Z"
}
```

### Clearing Configuration
To reset the setup:
1. Click **Logout** button in the top-right corner
2. Re-run setup with new details
3. Or manually delete `opsiq_admin_config` from browser localStorage (DevTools → Application → Local Storage)

## Dashboard Features After Setup

Once setup is complete, the dashboard provides:
- **6 Tabbed Interface**: Overview, Procure to Pay, AP & Invoicing, Recruiting, Vendor & Engineering, Architecture
- **Real-time KPIs**: P2P Cycle, Recruiting Cycle, AP Aging, Active Invoices, Active Vendors, Discount Capture
- **Interactive Charts**: Using Recharts (Line, Bar, Area charts)
- **12 AI Agents**: Live and planned operational intelligence agents
- **Admin Info Display**: Shows your name and organization in the header
- **Chatbot**: Floating chat interface for queries about operations

## API Integration

The dashboard is configured to connect to the OpsIQ backend API:

### Default Configuration
- **API Endpoint**: `http://localhost:5000`
- **CORS**: Enabled for localhost:3000

### Updating API Endpoint
1. Click **Logout** in the top-right corner
2. Complete setup again with your new API endpoint
3. Configuration will be updated and saved

### Backend API Requirements
The backend should provide:
- `/health` - Health check endpoint
- `/agents/list` - List of available agents
- `/dashboard/*` - Tab-specific dashboard data
- `/tracker/action` - Action task creation (for status tracker)

## Troubleshooting

### Setup Won't Complete
- Ensure all fields in each step are filled correctly
- Check that email format is valid (contains @)
- API endpoint should be a valid URL

### Dashboard Won't Load After Setup
- Verify the API endpoint is correct and the backend is running
- Check browser console for errors
- Try logging out and reconfiguring with correct API endpoint

### Configuration Lost
- Local configuration is stored in browser localStorage
- Clearing browser data will remove the configuration
- You'll need to re-run setup

## Development Notes

- **Setup State**: Managed by `setupComplete` state in App component
- **Admin Config**: TypeScript interface `AdminConfig` defined at top of App.tsx
- **Persistence**: Uses browser localStorage for client-side storage
- **Logout Function**: `handleLogout()` clears localStorage and returns to setup wizard

## Next Steps

1. Ensure Flask backend is running: `python api_server.py`
2. Start React dev server: `npm run dev`
3. Complete admin setup wizard
4. Dashboard will display with your configuration and live data from agents
