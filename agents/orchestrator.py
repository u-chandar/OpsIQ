"""
OpsIQ Agent Orchestrator

Coordinates execution of all 12 AI agents and aggregates results for the
dashboard. Manages agent lifecycle, error handling, and result caching.
"""

import json
from typing import Dict, List, Optional, Any
from datetime import datetime

# Import all agents
from . import (
    p2p_optimizer,
    discount_agent,
    invoice_detector,
    ap_analyzer,
    talent_matcher,
    vendor_calculator,
    spend_analyzer,
    compliance_monitor,
    risk_predictor,
    performance_analyzer,
    document_processor,
    predictive_insights
)


class AgentOrchestrator:
    """Orchestrates all OpsIQ agents."""
    
    def __init__(self):
        self.agents = {
            "p2p_optimizer": p2p_optimizer.P2PCycleOptimizer(),
            "discount_agent": discount_agent.DiscountCaptureAgent(),
            "invoice_detector": invoice_detector.InvoiceAnomalyDetector(),
            "ap_analyzer": ap_analyzer.APAgingAnalyzer(),
            "talent_matcher": talent_matcher.TalentMatcher(),
            "vendor_calculator": vendor_calculator.VendorScoreCalculator(),
            "spend_analyzer": spend_analyzer.SpendAnalyzer(),
            "compliance_monitor": compliance_monitor.ComplianceMonitor(),
            "risk_predictor": risk_predictor.RiskPredictor(),
            "performance_analyzer": performance_analyzer.PerformanceAnalyzer(),
            "document_processor": document_processor.DocumentProcessor(),
            "predictive_insights": predictive_insights.PredictiveInsights()
        }
        self.results_cache = {}
    
    def run_all_agents(self, data: Optional[Dict[str, Any]] = None) -> Dict:
        """Run all agents and aggregate results."""
        results = {
            "timestamp": datetime.now().isoformat(),
            "total_agents": len(self.agents),
            "agents_live": sum(1 for a in self.agents.values() if a.status == "LIVE"),
            "agents_planned": sum(1 for a in self.agents.values() if a.status == "PLANNED"),
            "results": {}
        }
        
        # Run each agent
        for agent_key, agent in self.agents.items():
            try:
                if agent_key == "p2p_optimizer":
                    results["results"][agent_key] = p2p_optimizer.analyze_p2p_cycle()
                elif agent_key == "discount_agent":
                    results["results"][agent_key] = discount_agent.find_discounts()
                elif agent_key == "invoice_detector":
                    results["results"][agent_key] = invoice_detector.detect_anomalies()
                elif agent_key == "ap_analyzer":
                    results["results"][agent_key] = ap_analyzer.analyze_aging()
                elif agent_key == "talent_matcher":
                    results["results"][agent_key] = talent_matcher.screen_candidates()
                elif agent_key == "vendor_calculator":
                    results["results"][agent_key] = vendor_calculator.calculate_scores()
                elif agent_key == "spend_analyzer":
                    results["results"][agent_key] = spend_analyzer.analyze_spend()
                elif agent_key == "compliance_monitor":
                    results["results"][agent_key] = compliance_monitor.scan_compliance()
                elif agent_key == "risk_predictor":
                    results["results"][agent_key] = risk_predictor.predict_risks()
                elif agent_key == "performance_analyzer":
                    results["results"][agent_key] = performance_analyzer.analyze_performance()
                elif agent_key == "document_processor":
                    results["results"][agent_key] = document_processor.process_document()
                elif agent_key == "predictive_insights":
                    results["results"][agent_key] = predictive_insights.generate_insights()
                
                results["results"][agent_key]["status"] = "SUCCESS"
                results["results"][agent_key]["agent_name"] = agent.name
                results["results"][agent_key]["agent_status"] = agent.status
                results["results"][agent_key]["accuracy"] = agent.accuracy
                
            except Exception as e:
                results["results"][agent_key] = {
                    "status": "ERROR",
                    "agent_name": agent.name,
                    "error": str(e)
                }
        
        return results
    
    def run_agent(self, agent_key: str, data: Optional[Dict] = None) -> Dict:
        """Run single agent by key."""
        if agent_key not in self.agents:
            return {"error": f"Agent '{agent_key}' not found"}
        
        agent = self.agents[agent_key]
        
        try:
            if agent_key == "p2p_optimizer":
                result = p2p_optimizer.analyze_p2p_cycle()
            elif agent_key == "discount_agent":
                result = discount_agent.find_discounts()
            elif agent_key == "invoice_detector":
                result = invoice_detector.detect_anomalies()
            elif agent_key == "ap_analyzer":
                result = ap_analyzer.analyze_aging()
            elif agent_key == "talent_matcher":
                result = talent_matcher.screen_candidates()
            elif agent_key == "vendor_calculator":
                result = vendor_calculator.calculate_scores()
            elif agent_key == "spend_analyzer":
                result = spend_analyzer.analyze_spend()
            elif agent_key == "compliance_monitor":
                result = compliance_monitor.scan_compliance()
            elif agent_key == "risk_predictor":
                result = risk_predictor.predict_risks()
            elif agent_key == "performance_analyzer":
                result = performance_analyzer.analyze_performance()
            elif agent_key == "document_processor":
                result = document_processor.process_document()
            elif agent_key == "predictive_insights":
                result = predictive_insights.generate_insights()
            
            result["agent_name"] = agent.name
            result["agent_status"] = agent.status
            result["accuracy"] = agent.accuracy
            
            return result
            
        except Exception as e:
            return {"error": str(e), "agent_name": agent.name}
    
    def get_agent_list(self) -> List[Dict]:
        """Get list of all available agents."""
        return [
            {
                "key": k,
                "name": v.name,
                "status": v.status,
                "accuracy": v.accuracy
            }
            for k, v in self.agents.items()
        ]


def run_all() -> Dict:
    """Run all agents with default data."""
    orchestrator = AgentOrchestrator()
    return orchestrator.run_all_agents()


if __name__ == "__main__":
    result = run_all()
    print(json.dumps(result, indent=2))
