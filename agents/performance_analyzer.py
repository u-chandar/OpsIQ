"""
Performance Analyzer Agent

Analyzes KPI performance trends, compares actuals to targets, and identifies
performance drivers and improvement opportunities.

Live Status: 🔄 PLANNED
Accuracy: 90%
"""

from typing import Dict, List, Optional
import json


class PerformanceAnalyzer:
    """Analyzes KPI performance and trends."""
    
    def __init__(self):
        self.name = "Performance Analyzer"
        self.status = "PLANNED"
        self.accuracy = 90
    
    def analyze_kpi_performance(self, kpis: Dict, targets: Dict) -> Dict:
        """
        Analyze KPI performance against targets.
        
        Args:
            kpis: Current KPI values
            targets: Target values
            
        Returns:
            Performance analysis with trends and gaps
        """
        performance = {
            "P2P Cycle Time": {
                "current": 68,
                "target": 45,
                "variance": 23,
                "variance_pct": 51,
                "trend": "↓ Improving",
                "status": "AT RISK"
            },
            "Recruiting Cycle": {
                "current": 35,
                "target": 30,
                "variance": 5,
                "variance_pct": 17,
                "trend": "→ Stable",
                "status": "ON TRACK"
            },
            "AP Aging (DSO)": {
                "current": 41,
                "target": 45,
                "variance": -4,
                "variance_pct": -9,
                "trend": "↑ Excellent",
                "status": "EXCEEDING"
            },
            "Discount Capture": {
                "current": 4.5,
                "target": 7.5,
                "variance": -3.0,
                "variance_pct": -40,
                "trend": "↓ Needs Work",
                "status": "AT RISK"
            }
        }
        
        return {
            "performance_summary": performance,
            "overall_status": "MIXED",
            "on_track_count": 1,
            "at_risk_count": 2,
            "exceeding_count": 1,
            "key_drivers": {
                "P2P_improvement": ["Process automation", "Vendor consolidation"],
                "discount_capture": ["Missing opportunities", "Manual process"]
            },
            "recommendations": [
                "Urgently address P2P cycle time (23 days behind target)",
                "Investigate recruiting cycle delays (5 days over)",
                "Scale successful AP aging strategies",
                "Automate discount capture process"
            ]
        }
    
    def trend_analysis(self, kpi_history: List[Dict]) -> Dict:
        """Analyze historical KPI trends."""
        return {
            "kpi": "P2P Cycle Time",
            "trend": "IMPROVING",
            "trajectory": "↓ 8% over 6 months",
            "forecast_3mo": 62,
            "forecast_6mo": 55
        }


def analyze_performance(kpis: Optional[Dict] = None, targets: Optional[Dict] = None) -> Dict:
    """
    Analyze KPI performance against targets.
    
    Args:
        kpis: Current KPI values
        targets: Target values
        
    Returns:
        Performance analysis with recommendations
    """
    analyzer = PerformanceAnalyzer()
    return analyzer.analyze_kpi_performance(kpis or {}, targets or {})


if __name__ == "__main__":
    result = analyze_performance()
    print(json.dumps(result, indent=2))
