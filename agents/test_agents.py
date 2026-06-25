"""
Tests for OpsIQ AI Agents

Run with: pytest agents/test_agents.py -v
"""

import pytest
from agents.orchestrator import AgentOrchestrator
from agents import (
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


class TestAgentOrchestrator:
    """Test agent orchestration."""
    
    def test_orchestrator_init(self):
        """Test orchestrator initialization."""
        orchestrator = AgentOrchestrator()
        assert len(orchestrator.agents) == 12
    
    def test_get_agent_list(self):
        """Test getting agent list."""
        orchestrator = AgentOrchestrator()
        agents = orchestrator.get_agent_list()
        assert len(agents) == 12
        assert all(a["name"] for a in agents)
        assert all(a["status"] in ["LIVE", "PLANNED"] for a in agents)
    
    def test_run_all_agents(self):
        """Test running all agents."""
        orchestrator = AgentOrchestrator()
        results = orchestrator.run_all_agents()
        assert "timestamp" in results
        assert "results" in results
        assert len(results["results"]) == 12
    
    def test_run_single_agent(self):
        """Test running single agent."""
        orchestrator = AgentOrchestrator()
        result = orchestrator.run_agent("p2p_optimizer")
        assert "agent_name" in result


class TestP2POptimizer:
    """Test P2P Cycle Optimizer agent."""
    
    def test_analyze_cycle_time(self):
        """Test cycle time analysis."""
        result = p2p_optimizer.analyze_p2p_cycle()
        assert result["current_cycle_time"] == 68
        assert result["target_cycle_time"] == 45
        assert "bottlenecks" in result
        assert "recommendations" in result
    
    def test_stages_analysis(self):
        """Test stages analysis."""
        optimizer = p2p_optimizer.P2PCycleOptimizer()
        stages = optimizer._analyze_stages([])
        assert len(stages) == 8


class TestDiscountAgent:
    """Test Discount Capture Agent."""
    
    def test_find_discounts(self):
        """Test finding discounts."""
        result = discount_agent.find_discounts()
        assert "opportunities" in result
        assert "total_potential_savings" in result
        assert result["current_capture_rate"] == 4.5


class TestInvoiceDetector:
    """Test Invoice Anomaly Detector."""
    
    def test_detect_anomalies(self):
        """Test anomaly detection."""
        result = invoice_detector.detect_anomalies()
        assert "anomalies" in result
        assert "estimated_fraud_amount" in result
    
    def test_risk_score(self):
        """Test risk score calculation."""
        detector = invoice_detector.InvoiceAnomalyDetector()
        score = detector.calculate_risk_score({"id": "INV-001"})
        assert "risk_score" in score
        assert "risk_level" in score


class TestAPAnalyzer:
    """Test AP Aging Analyzer."""
    
    def test_analyze_aging(self):
        """Test aging analysis."""
        result = ap_analyzer.analyze_aging()
        assert "aging_buckets" in result
        assert "days_payable_outstanding" in result
        assert "recommendations" in result


class TestTalentMatcher:
    """Test Talent Matcher Agent."""
    
    def test_screen_candidates(self):
        """Test candidate screening."""
        result = talent_matcher.screen_candidates()
        assert "top_match" in result
        assert "all_ranked" in result


class TestVendorCalculator:
    """Test Vendor Score Calculator."""
    
    def test_calculate_scores(self):
        """Test vendor scoring."""
        result = vendor_calculator.calculate_scores()
        assert "vendor_scores" in result
        assert len(result["vendor_scores"]) > 0


class TestSpendAnalyzer:
    """Test Spend Analyzer."""
    
    def test_analyze_spend(self):
        """Test spend analysis."""
        result = spend_analyzer.analyze_spend()
        assert "by_category" in result
        assert "total_potential_savings" in result


class TestComplianceMonitor:
    """Test Compliance Monitor."""
    
    def test_scan_compliance(self):
        """Test compliance scanning."""
        result = compliance_monitor.scan_compliance()
        assert "compliance_score" in result
        assert "violations" in result


class TestRiskPredictor:
    """Test Risk Predictor."""
    
    def test_predict_risks(self):
        """Test risk prediction."""
        result = risk_predictor.predict_risks()
        assert "risk_predictions" in result
        assert "overall_risk_level" in result


class TestPerformanceAnalyzer:
    """Test Performance Analyzer."""
    
    def test_analyze_performance(self):
        """Test performance analysis."""
        result = performance_analyzer.analyze_performance()
        assert "performance_summary" in result
        assert "overall_status" in result


class TestDocumentProcessor:
    """Test Document Processor."""
    
    def test_process_document(self):
        """Test document processing."""
        result = document_processor.process_document()
        assert "extracted_data" in result
        assert "validation" in result


class TestPredictiveInsights:
    """Test Predictive Insights."""
    
    def test_generate_insights(self):
        """Test insight generation."""
        result = predictive_insights.generate_insights()
        assert "predictions" in result
        assert "strategic_recommendations" in result


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
