/**
 * useAgentApi - React Hook for OpsIQ Agent API Integration
 *
 * Usage:
 * const { kpis, loading, error, fetchDashboard, queryAgent } = useAgentApi();
 *
 * useEffect(() => {
 *   fetchDashboard();
 * }, [fetchDashboard]);
 */

import { useState, useCallback } from "react";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export interface DashboardData {
  kpis: KPI[];
  agents: AgentStatus[];
  loading: boolean;
  error: string | null;
}

export interface KPI {
  label: string;
  value: number | string;
  unit: string;
  target: number;
  trend: string;
  status: "ON TRACK" | "AT RISK" | "EXCEEDING";
}

export interface AgentStatus {
  key: string;
  name: string;
  status: "LIVE" | "PLANNED";
  accuracy: number;
}

export interface AgentResult {
  agent_name: string;
  agent_status: string;
  accuracy: number;
  [key: string]: unknown;
}

export interface ChatbotResponse {
  response: string;
  agent: string;
  topic: string;
  accuracy: number;
  status: string;
}

export function useAgentApi() {
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [agents, setAgents] = useState<AgentStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch overview dashboard data (KPIs)
  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/dashboard/overview`);
      if (!response.ok) throw new Error("Failed to fetch dashboard data");
      const data = await response.json();
      setKpis(data.kpis || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch agents status
  const fetchAgents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/agents/status`);
      if (!response.ok) throw new Error("Failed to fetch agents");
      const data = await response.json();
      setAgents(data.agents || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      console.error("Agents fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch specific tab data
  const fetchTabData = useCallback(
    async (tab: "p2p" | "ap" | "recruiting" | "vendor" | "architecture") => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/dashboard/${tab}`);
        if (!response.ok) throw new Error(`Failed to fetch ${tab} data`);
        const data = await response.json();
        return data;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
        console.error(`Tab fetch error (${tab}):`, err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Query specific agent
  const queryAgent = useCallback(async (agentKey: string): Promise<AgentResult | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/agents/${agentKey}`);
      if (!response.ok) throw new Error(`Failed to query agent: ${agentKey}`);
      const data = await response.json();
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      console.error(`Agent query error (${agentKey}):`, err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Send chatbot query
  const chatbotQuery = useCallback(async (query: string): Promise<ChatbotResponse | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/chatbot/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) throw new Error("Failed to query chatbot");
      const data = await response.json();
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      console.error("Chatbot query error:", err);
      return null;
    }
  }, []);

  // Get chatbot suggestions
  const getChatbotSuggestions = useCallback(async (): Promise<string[] | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/chatbot/suggestions`);
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      const data = await response.json();
      return data.suggestions || [];
    } catch (err) {
      console.error("Suggestions fetch error:", err);
      return null;
    }
  }, []);

  // Health check
  const checkHealth = useCallback(async (): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return response.ok;
    } catch {
      return false;
    }
  }, []);

  return {
    kpis,
    agents,
    loading,
    error,
    fetchDashboard,
    fetchAgents,
    fetchTabData,
    queryAgent,
    chatbotQuery,
    getChatbotSuggestions,
    checkHealth,
  };
}

/**
 * Example Usage in Component:
 *
 * import { useAgentApi } from './hooks/useAgentApi';
 *
 * function Dashboard() {
 *   const { kpis, loading, error, fetchDashboard } = useAgentApi();
 *
 *   useEffect(() => {
 *     fetchDashboard();
 *   }, [fetchDashboard]);
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *
 *   return (
 *     <div>
 *       {kpis.map(kpi => (
 *         <KPICard key={kpi.label} kpi={kpi} />
 *       ))}
 *     </div>
 *   );
 * }
 */
