"""
Installation & Setup Guide for Agent Integration

This guide shows how to integrate the OpsIQ agents with the dashboard.
"""

# Step 1: Install API Dependencies
pip install flask flask-cors

# Step 2: Start the API Server
cd c:\Users\ramachandran\Python\figma-export
python api_server.py

# Server will start at http://localhost:5000

# Step 3: Update Dashboard React App

# Add to App.tsx imports:
# import { useState, useEffect } from "react";

# API Configuration at top of App.tsx:
# const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

# Fetch data example in App.tsx useEffect:
# useEffect(() => {
#   const fetchDashboardData = async () => {
#     try {
#       const response = await fetch(`${API_BASE_URL}/dashboard/overview`);
#       const data = await response.json();
#       setDashboardData(data);
#     } catch (error) {
#       console.error("API error:", error);
#     }
#   };
#   fetchDashboardData();
# }, []);

# Step 4: Update Chatbot Integration

# In Chatbot component, replace handleSend with:
# const handleSendMessage = async () => {
#   // ... existing code ...
#   try {
#     const response = await fetch(`${API_BASE_URL}/chatbot/query`, {
#       method: "POST",
#       headers: { "Content-Type": "application/json" },
#       body: JSON.stringify({ query: input }),
#     });
#     const data = await response.json();
#     // Add bot response with data.response
#   } catch (error) {
#     console.error("Chatbot error:", error);
#   }
# };

# Step 5: Start React Dev Server (in new terminal)
cd c:\Users\ramachandran\Python\figma-export
npm install
npm run dev

# Dashboard will be available at http://localhost:3000

# API Endpoints Available:

GET /health
  → Health check and agent count

GET /agents/list
  → Get all 12 agents metadata

GET /agents/status
  → Overall agents status and accuracy

GET /dashboard/overview
  → KPI cards for all 6 tabs

GET /dashboard/p2p
  → P2P optimization data

GET /dashboard/ap
  → AP aging and invoice anomalies

GET /dashboard/recruiting
  → Talent matching and candidates

GET /dashboard/vendor
  → Vendor scores and spend analysis

GET /dashboard/architecture
  → Tech stack overview

GET /agents/{agent-name}
  → Run specific agent:
    - p2p-optimizer
    - discount-agent
    - invoice-detector
    - ap-analyzer
    - talent-matcher
    - vendor-calculator
    - spend-analyzer
    - compliance-monitor
    - risk-predictor
    - performance-analyzer
    - document-processor
    - predictive-insights

POST /chatbot/query
  → Send chatbot query
  → Body: { "query": "user question" }
  → Returns: { "response", "agent", "topic", "accuracy" }

GET /chatbot/suggestions
  → Get suggested chatbot queries

# Environment Variables

Create .env file:

REACT_APP_API_URL=http://localhost:5000
FLASK_ENV=development
FLASK_DEBUG=True

# Troubleshooting

## API Server Won't Start
- Check Python 3.9+ installed: python --version
- Install requirements: pip install -r agents/requirements.txt
- Ensure port 5000 is free

## CORS Errors in React
- Flask CORS is enabled in api_server.py
- If issues persist, check browser console for CORS headers

## Chatbot Not Responding
- Check API server is running: curl http://localhost:5000/health
- Review browser network tab for failed requests
- Check chatbot/query endpoint receives POST correctly

## Dashboard Data Not Loading
- Open browser DevTools Network tab
- Check fetch requests to http://localhost:5000/dashboard/*
- Verify API returns valid JSON

# Integration Steps Summary

1. Terminal 1: python api_server.py (port 5000)
2. Terminal 2: cd figma-export && npm run dev (port 3000)
3. Open http://localhost:3000
4. Agents automatically provide data through API
5. Use chatbot to query agents naturally

# File Locations

- API Server: /figma-export/api_server.py
- React App: /figma-export/src/app/App.tsx
- Agents: /figma-export/agents/*.py
- Updated App with Integration: /figma-export/src/app/App-integrated.tsx

# Next Steps After Integration

1. Deploy API server to Azure (Azure Functions or Container Apps)
2. Update REACT_APP_API_URL environment variable in React build
3. Connect to real Databricks queries instead of mock data
4. Implement real Azure OpenAI integration for chatbot NLP
5. Add user authentication and role-based access
6. Set up monitoring with Application Insights
7. Configure CI/CD pipeline for automated deployments
