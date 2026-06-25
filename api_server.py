"""
OpsIQ Dashboard API Server

Flask API that exposes the 12 AI agents as REST endpoints for the React dashboard.
Run: python api_server.py
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
from agents.orchestrator import AgentOrchestrator
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Initialize agent orchestrator
orchestrator = AgentOrchestrator()
tracker_action_log = []


# ============================================================================
# Health & Status Endpoints
# ============================================================================

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "agents_count": len(orchestrator.agents)
    })


@app.route('/agents/list', methods=['GET'])
def list_agents():
    """Get list of all available agents."""
    return jsonify(orchestrator.get_agent_list())


@app.route('/agents/status', methods=['GET'])
def agents_status():
    """Get overall agents status."""
    agents = orchestrator.get_agent_list()
    live_count = sum(1 for a in agents if a["status"] == "LIVE")
    planned_count = sum(1 for a in agents if a["status"] == "PLANNED")
    avg_accuracy = sum(a["accuracy"] for a in agents) / len(agents)
    
    return jsonify({
        "total_agents": len(agents),
        "live": live_count,
        "planned": planned_count,
        "average_accuracy": round(avg_accuracy, 1),
        "agents": agents
    })


# ============================================================================
# Dashboard Tab Data Endpoints
# ============================================================================

@app.route('/dashboard/overview', methods=['GET'])
def dashboard_overview():
    """Get overview tab KPIs from all agents."""
    p2p_result = orchestrator.run_agent('p2p_optimizer')
    recruiting_result = orchestrator.run_agent('talent_matcher')
    ap_result = orchestrator.run_agent('ap_analyzer')
    discount_result = orchestrator.run_agent('discount_agent')
    vendor_result = orchestrator.run_agent('vendor_calculator')
    
    return jsonify({
        "kpis": [
            {
                "label": "P2P Cycle Time",
                "value": p2p_result.get("current_cycle_time", 68),
                "unit": "days",
                "target": p2p_result.get("target_cycle_time", 45),
                "trend": "↓ Improving",
                "status": "AT RISK"
            },
            {
                "label": "Recruiting Cycle",
                "value": recruiting_result.get("average_match_score", 35),
                "unit": "days",
                "target": 30,
                "trend": "→ Stable",
                "status": "ON TRACK"
            },
            {
                "label": "AP Aging",
                "value": ap_result.get("total_ap_balance", 332_000),
                "unit": "$K",
                "target": 300_000,
                "trend": "↑ Excellent",
                "status": "EXCEEDING"
            },
            {
                "label": "Invoices Processed",
                "value": 196,
                "unit": "count",
                "target": 200,
                "trend": "→ Stable",
                "status": "ON TRACK"
            },
            {
                "label": "Vendor Score Avg",
                "value": 84,
                "unit": "score",
                "target": 80,
                "trend": "↑ Improving",
                "status": "ON TRACK"
            },
            {
                "label": "Discount Capture",
                "value": discount_result.get("current_capture_rate", 4.5),
                "unit": "%",
                "target": 7.5,
                "trend": "↓ Below Target",
                "status": "AT RISK"
            }
        ]
    })


@app.route('/dashboard/p2p', methods=['GET'])
def dashboard_p2p():
    """Get Procure-to-Pay tab data."""
    p2p_result = orchestrator.run_agent('p2p_optimizer')
    performance_result = orchestrator.run_agent('performance_analyzer')
    
    return jsonify({
        "cycle_analysis": p2p_result,
        "performance": performance_result,
        "stages": p2p_result.get("stages_analysis", []),
        "bottlenecks": p2p_result.get("bottlenecks", []),
        "recommendations": p2p_result.get("recommendations", [])
    })


@app.route('/dashboard/ap', methods=['GET'])
def dashboard_ap():
    """Get AP & Invoicing tab data."""
    ap_result = orchestrator.run_agent('ap_analyzer')
    invoice_result = orchestrator.run_agent('invoice_detector')
    discount_result = orchestrator.run_agent('discount_agent')
    
    return jsonify({
        "aging_analysis": ap_result,
        "anomalies": invoice_result,
        "discounts": discount_result,
        "aging_buckets": ap_result.get("aging_buckets", {}),
        "recommendations": ap_result.get("recommendations", [])
    })


@app.route('/dashboard/recruiting', methods=['GET'])
def dashboard_recruiting():
    """Get Recruiting Lifecycle tab data."""
    talent_result = orchestrator.run_agent('talent_matcher')
    performance_result = orchestrator.run_agent('performance_analyzer')
    
    return jsonify({
        "candidates": talent_result.get("all_ranked", []),
        "top_match": talent_result.get("top_match"),
        "performance": performance_result,
        "recommendations": talent_result.get("recommendations", [])
    })


@app.route('/dashboard/vendor', methods=['GET'])
def dashboard_vendor():
    """Get Vendor & Engineering tab data."""
    vendor_result = orchestrator.run_agent('vendor_calculator')
    spend_result = orchestrator.run_agent('spend_analyzer')
    risk_result = orchestrator.run_agent('risk_predictor')
    
    return jsonify({
        "vendor_scores": vendor_result.get("vendor_scores", []),
        "spend_analysis": spend_result,
        "risks": risk_result,
        "recommendations": vendor_result.get("recommendations", [])
    })


@app.route('/dashboard/architecture', methods=['GET'])
def dashboard_architecture():
    """Get Architecture tab data."""
    return jsonify({
        "tech_stack": [
            {"icon": "☁️", "name": "Azure Blob Storage", "description": "Data ingestion & file storage"},
            {"icon": "📄", "name": "Document Intelligence", "description": "AI-powered extraction"},
            {"icon": "⚡", "name": "Azure OpenAI", "description": "12 AI agents & NLP"},
            {"icon": "💎", "name": "Databricks", "description": "Compute & data warehouse"},
            {"icon": "📊", "name": "Power BI", "description": "Analytics & reporting"},
            {"icon": "🎨", "name": "OpsIQ App", "description": "React + TypeScript UI"}
        ]
    })


# ============================================================================
# Individual Agent Endpoints
# ============================================================================

@app.route('/agents/p2p-optimizer', methods=['GET'])
def agent_p2p_optimizer():
    """Run P2P Cycle Optimizer."""
    result = orchestrator.run_agent('p2p_optimizer')
    return jsonify(result)


@app.route('/agents/discount-agent', methods=['GET'])
def agent_discount():
    """Run Discount Capture Agent."""
    result = orchestrator.run_agent('discount_agent')
    return jsonify(result)


@app.route('/agents/invoice-detector', methods=['GET'])
def agent_invoice_detector():
    """Run Invoice Anomaly Detector."""
    result = orchestrator.run_agent('invoice_detector')
    return jsonify(result)


@app.route('/agents/ap-analyzer', methods=['GET'])
def agent_ap_analyzer():
    """Run AP Aging Analyzer."""
    result = orchestrator.run_agent('ap_analyzer')
    return jsonify(result)


@app.route('/agents/talent-matcher', methods=['GET'])
def agent_talent_matcher():
    """Run Talent Matcher."""
    result = orchestrator.run_agent('talent_matcher')
    return jsonify(result)


@app.route('/agents/vendor-calculator', methods=['GET'])
def agent_vendor_calculator():
    """Run Vendor Score Calculator."""
    result = orchestrator.run_agent('vendor_calculator')
    return jsonify(result)


@app.route('/agents/spend-analyzer', methods=['GET'])
def agent_spend_analyzer():
    """Run Spend Analyzer."""
    result = orchestrator.run_agent('spend_analyzer')
    return jsonify(result)


@app.route('/agents/compliance-monitor', methods=['GET'])
def agent_compliance_monitor():
    """Run Compliance Monitor."""
    result = orchestrator.run_agent('compliance_monitor')
    return jsonify(result)


@app.route('/agents/risk-predictor', methods=['GET'])
def agent_risk_predictor():
    """Run Risk Predictor."""
    result = orchestrator.run_agent('risk_predictor')
    return jsonify(result)


@app.route('/agents/performance-analyzer', methods=['GET'])
def agent_performance_analyzer():
    """Run Performance Analyzer."""
    result = orchestrator.run_agent('performance_analyzer')
    return jsonify(result)


@app.route('/agents/document-processor', methods=['GET'])
def agent_document_processor():
    """Run Document Processor."""
    result = orchestrator.run_agent('document_processor')
    return jsonify(result)


@app.route('/agents/predictive-insights', methods=['GET'])
def agent_predictive_insights():
    """Run Predictive Insights."""
    result = orchestrator.run_agent('predictive_insights')
    return jsonify(result)


# ============================================================================
# Chatbot Integration Endpoints
# ============================================================================

@app.route('/chatbot/query', methods=['POST'])
def chatbot_query():
    """Process chatbot query and route to appropriate agent."""
    data = request.json
    query = data.get('query', '').lower()
    
    # Route to appropriate agent based on query keywords
    if 'p2p' in query or 'cycle' in query or 'procurement' in query:
        result = orchestrator.run_agent('p2p_optimizer')
        topic = 'P2P Cycle Optimization'
    elif 'discount' in query or 'savings' in query:
        result = orchestrator.run_agent('discount_agent')
        topic = 'Discount Capture'
    elif 'invoice' in query or 'anomal' in query or 'fraud' in query:
        result = orchestrator.run_agent('invoice_detector')
        topic = 'Invoice Anomaly Detection'
    elif 'aging' in query or 'payment' in query or 'ap' in query:
        result = orchestrator.run_agent('ap_analyzer')
        topic = 'AP Aging Analysis'
    elif 'candidate' in query or 'recruiting' in query or 'hire' in query:
        result = orchestrator.run_agent('talent_matcher')
        topic = 'Talent Matching'
    elif 'vendor' in query or 'supplier' in query:
        result = orchestrator.run_agent('vendor_calculator')
        topic = 'Vendor Management'
    elif 'spend' in query or 'cost' in query or 'budget' in query:
        result = orchestrator.run_agent('spend_analyzer')
        topic = 'Spend Analysis'
    elif 'compliance' in query or 'risk' in query or 'violation' in query:
        result = orchestrator.run_agent('compliance_monitor')
        topic = 'Compliance Monitoring'
    elif 'predict' in query or 'forecast' in query or 'trend' in query:
        result = orchestrator.run_agent('predictive_insights')
        topic = 'Predictive Insights'
    elif 'performance' in query or 'kpi' in query:
        result = orchestrator.run_agent('performance_analyzer')
        topic = 'Performance Analysis'
    else:
        # Default: return helpful message
        return jsonify({
            "response": "I can help you with: P2P cycles, discounts, invoices, AP aging, recruiting, vendors, spend, compliance, risks, performance, documents, and predictions. What would you like to know?",
            "agent": "General",
            "topic": "Help"
        })
    
    return jsonify({
        "response": json.dumps(result, indent=2),
        "agent": result.get("agent_name", "Unknown"),
        "topic": topic,
        "accuracy": result.get("accuracy"),
        "status": result.get("status")
    })


@app.route('/chatbot/suggestions', methods=['GET'])
def chatbot_suggestions():
    """Get suggested chatbot queries."""
    return jsonify({
        "suggestions": [
            "How can we reduce P2P cycle time?",
            "What discount opportunities are available?",
            "Are there any suspicious invoices?",
            "What's our AP aging status?",
            "Show me the top recruiting candidates",
            "Which vendors have the best scores?",
            "What are our spend trends?",
            "Are we compliant with policies?",
            "What risks should we watch?",
            "How are we performing on KPIs?"
        ]
    })


# ============================================================================
# Status Tracker Action Endpoints
# ============================================================================

@app.route('/tracker/action', methods=['POST'])
def tracker_action_create():
    """Create a status-tracker action task from dashboard button clicks."""
    data = request.json or {}
    status_group = data.get('status_group')
    action_label = data.get('action_label')
    source = data.get('source', 'dashboard')

    if not status_group or not action_label:
        return jsonify({"error": "status_group and action_label are required"}), 400

    task_id = f"ACT-{len(tracker_action_log) + 1:04d}"
    task = {
        "task_id": task_id,
        "status_group": status_group,
        "action_label": action_label,
        "source": source,
        "created_at": datetime.now().isoformat(),
        "state": "OPEN"
    }
    tracker_action_log.append(task)

    return jsonify({
        "message": "Tracker action created",
        "task": task,
        "open_actions": len([item for item in tracker_action_log if item["state"] == "OPEN"])
    }), 201


@app.route('/tracker/actions', methods=['GET'])
def tracker_action_list():
    """List all tracker action tasks created from the dashboard."""
    return jsonify({
        "count": len(tracker_action_log),
        "actions": tracker_action_log
    })


# ============================================================================
# Error Handling
# ============================================================================

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors."""
    return jsonify({"error": "Endpoint not found"}), 404


@app.errorhandler(500)
def server_error(error):
    """Handle 500 errors."""
    return jsonify({"error": "Internal server error"}), 500


if __name__ == '__main__':
    print("=" * 60)
    print("OpsIQ Dashboard API Server")
    print("=" * 60)
    print(f"Starting at http://localhost:5000")
    print(f"Available agents: {len(orchestrator.agents)}")
    print(f"Dashboard URL: http://localhost:3000")
    print("=" * 60)
    
    # Run Flask server
    app.run(debug=True, host='0.0.0.0', port=5000)
