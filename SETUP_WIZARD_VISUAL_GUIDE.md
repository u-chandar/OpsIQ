# OpsIQ Admin Setup Wizard - Visual Guide

## Setup Wizard Flow

### First Launch
When you run `npm run dev`, the setup wizard appears:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         ╔════════════════════════╗              │
│         ║ O    OpsIQ             ║              │
│         ║      Operations        ║              │
│         ║      Intelligence      ║              │
│         ║      Platform          ║              │
│         ╚════════════════════════╝              │
│                                                 │
│         Welcome! Let's set up your              │
│         admin account.                          │
│                                                 │
│         ▓▓▓░░░░░  Progress: Step 1 of 3        │
│                                                 │
│         ╔════════════════════════════╗          │
│         ║ Admin Information           ║          │
│         ╠════════════════════════════╣          │
│         ║                            ║          │
│         ║ Full Name                  ║          │
│         ║ ┌──────────────────────┐   ║          │
│         ║ │ John Doe             │   ║          │
│         ║ └──────────────────────┘   ║          │
│         ║                            ║          │
│         ║ Email Address              ║          │
│         ║ ┌──────────────────────┐   ║          │
│         ║ │ admin@company.com    │   ║          │
│         ║ └──────────────────────┘   ║          │
│         ║                            ║          │
│         ║ [Back]  [Next] >           ║          │
│         ║                            ║          │
│         ║ Step 1 of 3                ║          │
│         ╚════════════════════════════╝          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Step 2: Organization Setup

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         ╔════════════════════════╗              │
│         ║ O    OpsIQ             ║              │
│         ║      Operations        ║              │
│         ║      Intelligence      ║              │
│         ║      Platform          ║              │
│         ╚════════════════════════╝              │
│                                                 │
│         Welcome! Let's set up your              │
│         admin account.                          │
│                                                 │
│         ▓▓▓▓▓▓░░  Progress: Step 2 of 3        │
│                                                 │
│         ╔════════════════════════════╗          │
│         ║ Organization Setup          ║          │
│         ╠════════════════════════════╣          │
│         ║                            ║          │
│         ║ Organization Name          ║          │
│         ║ ┌──────────────────────┐   ║          │
│         ║ │ Acme Corporation     │   ║          │
│         ║ └──────────────────────┘   ║          │
│         ║                            ║          │
│         ║ Your Role                  ║          │
│         ║ ┌──────────────────────┐   ║          │
│         ║ │ ▼ Operations Manager │   ║          │
│         ║ └──────────────────────┘   ║          │
│         ║  - VP Operations            ║          │
│         ║  - CFO                      ║          │
│         ║  - Procurement Manager      ║          │
│         ║  - Other                    ║          │
│         ║                            ║          │
│         ║ [Back]  [Next] >           ║          │
│         ║                            ║          │
│         ║ Step 2 of 3                ║          │
│         ╚════════════════════════════╝          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Step 3: API Configuration

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         ╔════════════════════════╗              │
│         ║ O    OpsIQ             ║              │
│         ║      Operations        ║              │
│         ║      Intelligence      ║              │
│         ║      Platform          ║              │
│         ╚════════════════════════╝              │
│                                                 │
│         Welcome! Let's set up your              │
│         admin account.                          │
│                                                 │
│         ▓▓▓▓▓▓▓▓░  Progress: Step 3 of 3       │
│                                                 │
│         ╔════════════════════════════╗          │
│         ║ API Configuration            ║          │
│         ╠════════════════════════════╣          │
│         ║                            ║          │
│         ║ API Endpoint               ║          │
│         ║ ┌──────────────────────┐   ║          │
│         ║ │ http://localhost:5000│   ║          │
│         ║ └──────────────────────┘   ║          │
│         ║ Leave as default for local ║          │
│         ║ development                ║          │
│         ║                            ║          │
│         ║ ╔════════════════════════╗ ║          │
│         ║ ║ ℹ️  Ready to launch!    ║ ║          │
│         ║ ║ After setup, the       ║ ║          │
│         ║ ║ dashboard will connect ║ ║          │
│         ║ ║ to your configured API ║ ║          │
│         ║ ║ to load live agent     ║ ║          │
│         ║ ║ data.                  ║ ║          │
│         ║ ╚════════════════════════╝ ║          │
│         ║                            ║          │
│         ║ [Back]  [✓ Complete Setup] ║          │
│         ║                            ║          │
│         ║ Step 3 of 3                ║          │
│         ╚════════════════════════════╝          │
│                                                 │
└─────────────────────────────────────────────────┘
```

## After Setup: Dashboard with Admin Info

```
┌─────────────────────────────────────────────────────────────────┐
│ OpsIQ                  5 AI Agents Live    John Doe    [Logout] │
│ Operations Intelligence                     Acme Corp          │
└─────────────────────────────────────────────────────────────────┘
│ Overview | Procure to Pay | AP & Invoicing | Recruiting | ...  │
└─────────────────────────────────────────────────────────────────┘
│                                                                 │
│ Key Performance Indicators                                      │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│ │ P2P Cycle    │ │ Recruiting   │ │ AP Aging     │            │
│ │ 68 days      │ │ 35 days      │ │ $332K        │            │
│ │ Target: 60d  │ │ Target: 28d  │ │ Target: <250K│            │
│ └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                 │
│ [Rest of dashboard content...]                                 │
│                                                                 │
│                              ┌─────────────┐                  │
│                              │ Ask OpsIQ 💬│                  │
│                              └─────────────┘                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Clicking Logout

```
┌─────────────────────────────────────────────────────────────────┐
│ OpsIQ                  5 AI Agents Live    John Doe    [Logout]◄─┐
│ Operations Intelligence                     Acme Corp           │
└─────────────────────────────────────────────────────────────────┘
                                                                    │
                    Click Logout button →→→
                                                                    │
┌─────────────────────────────────────────────────┐                │
│                                                 │                │
│         ╔════════════════════════╗              │                │
│         ║ O    OpsIQ             ║              │                │
│         ║      Operations        ║              │◄───────────────┘
│         ║      Intelligence      ║              │ Setup wizard
│         ║      Platform          ║              │ reappears
│         ╚════════════════════════╝              │
│                                                 │
│         Welcome! Let's set up your              │
│         admin account.                          │
│                                                 │
│         ▓░░░░░░░  Progress: Step 1 of 3        │
│         [Setup form resets]                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Key Features

✨ **Gradient Background**: Professional cyan-to-blue gradient
🎨 **Progress Indicator**: Visual 3-step progress bar
📝 **Form Validation**: Real-time validation with error messages
💾 **localStorage Persistence**: Configuration saved across sessions
🔐 **Type-Safe**: Full TypeScript support
📱 **Responsive**: Works on desktop and mobile
🔄 **Reconfigurable**: Logout anytime to change admin details

## Installation Commands

```bash
# Navigate to figma-export directory
cd figma-export

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# This will open the setup wizard automatically
```

## Configuration Saved

After completing setup, this data is saved to localStorage:

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

## Next: Backend Integration

To see the dashboard with live data:

1. Ensure Flask backend is running:
   ```bash
   python figma-export/api_server.py
   ```

2. The dashboard will use the configured API endpoint to fetch:
   - KPI data from agents
   - Dashboard tab content
   - Agent status and accuracy
   - Live operational intelligence

3. Try the Chatbot (💬 button) to query AI agents
