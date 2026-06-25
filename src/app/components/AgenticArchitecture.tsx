import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Database,
  Zap,
  Brain,
  MessageSquare,
  Shield,
  Bell,
  Users,
  Activity,
  TrendingUp,
  Cog,
  ArrowRight
} from "lucide-react";

export function AgenticArchitecture() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cog className="w-6 h-6 text-purple-600" />
            Agentic AI Architecture for Healthcare Preventive Models
          </CardTitle>
          <CardDescription>
            Multi-agent system designed for wearable + chronic disease analytics with autonomous decision-making and coordinated responses
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Core Agents Overview */}
      <Card>
        <CardHeader>
          <CardTitle>A. Core Agent Components</CardTitle>
          <CardDescription>
            Six specialized agents working in coordination to provide comprehensive preventive healthcare
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Agent 1 */}
            <div className="p-4 border-2 border-blue-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Agent 1</Badge>
                  <h3 className="text-sm mt-1">Data Ingestion Agent</h3>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted-foreground mb-2">Real-time data collection and preprocessing</p>
                <div className="space-y-1">
                  <p>✓ Collects wearable data (HR, HRV, BP, CGM, movement)</p>
                  <p>✓ Cleans, normalizes timestamps</p>
                  <p>✓ Pushes to feature store & vector DB</p>
                  <p>✓ Handles missing data & outliers</p>
                </div>
                <div className="mt-3 p-2 bg-muted rounded">
                  <p className="font-medium text-xs mb-1">Data Sources:</p>
                  <p className="text-xs text-muted-foreground">Smart Watch, CGM, Smart Cane, Smart Glasses, Health Monitor</p>
                </div>
              </div>
            </div>

            {/* Agent 2 */}
            <div className="p-4 border-2 border-green-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">Agent 2</Badge>
                  <h3 className="text-sm mt-1">Feature Engineering Agent</h3>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted-foreground mb-2">Multi-modal feature extraction & transformation</p>
                <div className="space-y-1">
                  <p>✓ Vitals windows (5min, 30min, 24h)</p>
                  <p>✓ Sleep features (stages, efficiency)</p>
                  <p>✓ HRV frequency transforms (LF/HF ratio)</p>
                  <p>✓ Glucose trend deltas & derivatives</p>
                  <p>✓ Gait signatures & mobility patterns</p>
                </div>
                <div className="mt-3 p-2 bg-muted rounded">
                  <p className="font-medium text-xs mb-1">Feature Sets:</p>
                  <p className="text-xs text-muted-foreground">156 engineered features, 42 temporal, 28 frequency-domain</p>
                </div>
              </div>
            </div>

            {/* Agent 3 */}
            <div className="p-4 border-2 border-purple-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">Agent 3</Badge>
                  <h3 className="text-sm mt-1">Diagnostic AI Agent</h3>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted-foreground mb-2">Runs all 12 predictive models in parallel</p>
                <div className="space-y-1">
                  <p>✓ Cardiovascular risk (M1, M2, M9)</p>
                  <p>✓ Diabetes forecasting (M5, M6, M7, M8)</p>
                  <p>✓ Stress detection (M11)</p>
                  <p>✓ Sleep apnea detection (M3, M10)</p>
                  <p>✓ Fall risk assessment (M4)</p>
                  <p>✓ Metabolic tracking (M12)</p>
                </div>
                <div className="mt-3 p-2 bg-muted rounded">
                  <p className="font-medium text-xs mb-1">Processing:</p>
                  <p className="text-xs text-muted-foreground">Edge (78%) + Cloud (22%) hybrid inference</p>
                </div>
              </div>
            </div>

            {/* Agent 4 */}
            <div className="p-4 border-2 border-orange-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">Agent 4</Badge>
                  <h3 className="text-sm mt-1">Preventive Recommendation Agent</h3>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted-foreground mb-2">LLM-powered personalized interventions</p>
                <div className="space-y-1">
                  <p>✓ Dietary suggestions (food rankings)</p>
                  <p>✓ Activity recommendations (step goals)</p>
                  <p>✓ Alerts to caregiver (severity-based)</p>
                  <p>✓ Medication reminders (if authorized)</p>
                  <p>✓ Sleep hygiene coaching</p>
                </div>
                <div className="mt-3 p-2 bg-muted rounded">
                  <p className="font-medium text-xs mb-1">Personalization:</p>
                  <p className="text-xs text-muted-foreground">Adapts to user preferences, history, and response patterns</p>
                </div>
              </div>
            </div>

            {/* Agent 5 */}
            <div className="p-4 border-2 border-red-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-red-500 rounded-lg">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">Agent 5</Badge>
                  <h3 className="text-sm mt-1">Alert Escalation Agent</h3>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted-foreground mb-2">Intelligent alert routing & prioritization</p>
                <div className="space-y-1">
                  <p>✓ Anomaly score evaluation</p>
                  <p>✓ Multi-agent consensus voting</p>
                  <p>✓ Decides notification targets:</p>
                  <p className="ml-4">• User (low severity)</p>
                  <p className="ml-4">• Caregiver (medium)</p>
                  <p className="ml-4">• Clinician (high)</p>
                  <p className="ml-4">• Emergency protocol (critical)</p>
                </div>
                <div className="mt-3 p-2 bg-muted rounded">
                  <p className="font-medium text-xs mb-1">Response Time:</p>
                  <p className="text-xs text-muted-foreground">Critical alerts &lt;2s, High priority &lt;30s</p>
                </div>
              </div>
            </div>

            {/* Agent 6 */}
            <div className="p-4 border-2 border-cyan-500 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-cyan-500 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">Agent 6</Badge>
                  <h3 className="text-sm mt-1">Health Coach Agent</h3>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted-foreground mb-2">Conversational layer with natural language</p>
                <div className="space-y-1">
                  <p>✓ Explains vitals, glucose, sleep patterns</p>
                  <p>✓ Provides lifestyle coaching</p>
                  <p>✓ Daily health summaries</p>
                  <p>✓ Goal setting & tracking</p>
                  <p>✓ Answers health questions (24/7)</p>
                </div>
                <div className="mt-3 p-2 bg-muted rounded">
                  <p className="font-medium text-xs mb-1">Languages:</p>
                  <p className="text-xs text-muted-foreground">24 languages supported with medical vocabulary</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Agent Interaction Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>B. Agent Interaction Flow</CardTitle>
          <CardDescription>
            How agents collaborate to provide end-to-end preventive care
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <svg width="1000" height="600" viewBox="0 0 1000 600" className="mx-auto">
              {/* Title */}
              <text x="500" y="30" textAnchor="middle" className="fill-foreground text-lg font-medium">
                Multi-Agent System Data Flow
              </text>

              {/* Wearable Devices (Top) */}
              <g>
                <rect x="50" y="60" width="900" height="80" fill="rgba(59, 130, 246, 0.1)" stroke="rgb(59, 130, 246)" strokeWidth="2" rx="8" />
                <text x="500" y="85" textAnchor="middle" className="fill-foreground text-sm">Wearable Devices & Sensors</text>
                <rect x="100" y="100" width="120" height="30" fill="rgb(59, 130, 246)" rx="4" />
                <text x="160" y="120" textAnchor="middle" className="fill-white text-xs">Smart Watch</text>
                <rect x="250" y="100" width="120" height="30" fill="rgb(59, 130, 246)" rx="4" />
                <text x="310" y="120" textAnchor="middle" className="fill-white text-xs">CGM</text>
                <rect x="400" y="100" width="120" height="30" fill="rgb(59, 130, 246)" rx="4" />
                <text x="460" y="120" textAnchor="middle" className="fill-white text-xs">Smart Cane</text>
                <rect x="550" y="100" width="120" height="30" fill="rgb(59, 130, 246)" rx="4" />
                <text x="610" y="120" textAnchor="middle" className="fill-white text-xs">Smart Glasses</text>
                <rect x="700" y="100" width="140" height="30" fill="rgb(59, 130, 246)" rx="4" />
                <text x="770" y="120" textAnchor="middle" className="fill-white text-xs">Health Monitor</text>
              </g>

              {/* Agent 1: Data Ingestion */}
              <g>
                <rect x="350" y="180" width="300" height="60" fill="rgb(59, 130, 246)" rx="8" />
                <text x="500" y="205" textAnchor="middle" className="fill-white">Agent 1: Data Ingestion</text>
                <text x="500" y="225" textAnchor="middle" className="fill-white text-xs">Clean, Normalize, Store</text>
              </g>

              {/* Agent 2: Feature Engineering */}
              <g>
                <rect x="350" y="270" width="300" height="60" fill="rgb(34, 197, 94)" rx="8" />
                <text x="500" y="295" textAnchor="middle" className="fill-white">Agent 2: Feature Engineering</text>
                <text x="500" y="315" textAnchor="middle" className="fill-white text-xs">156 Features | Temporal | Frequency</text>
              </g>

              {/* Agent 3: Diagnostic AI */}
              <g>
                <rect x="100" y="370" width="800" height="80" fill="rgba(168, 85, 247, 0.1)" stroke="rgb(168, 85, 247)" strokeWidth="2" rx="8" />
                <text x="500" y="390" textAnchor="middle" className="fill-foreground text-sm">Agent 3: Diagnostic AI (12 Models Running in Parallel)</text>
                
                <rect x="120" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="165" y="427" textAnchor="middle" className="fill-white text-xs">Cardiac</text>
                
                <rect x="230" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="275" y="427" textAnchor="middle" className="fill-white text-xs">Diabetes</text>
                
                <rect x="340" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="385" y="427" textAnchor="middle" className="fill-white text-xs">Sleep</text>
                
                <rect x="450" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="495" y="427" textAnchor="middle" className="fill-white text-xs">Stress</text>
                
                <rect x="560" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="605" y="427" textAnchor="middle" className="fill-white text-xs">Fall Risk</text>
                
                <rect x="670" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="715" y="427" textAnchor="middle" className="fill-white text-xs">COPD</text>
                
                <rect x="780" y="405" width="90" height="35" fill="rgb(168, 85, 247)" rx="4" />
                <text x="825" y="427" textAnchor="middle" className="fill-white text-xs">Metabolic</text>
              </g>

              {/* Agent 4 & 5 (Parallel) */}
              <g>
                <rect x="100" y="480" width="350" height="60" fill="rgb(249, 115, 22)" rx="8" />
                <text x="275" y="505" textAnchor="middle" className="fill-white">Agent 4: Preventive Recommendations</text>
                <text x="275" y="525" textAnchor="middle" className="fill-white text-xs">LLM | Personalized Interventions</text>

                <rect x="550" y="480" width="350" height="60" fill="rgb(239, 68, 68)" rx="8" />
                <text x="725" y="505" textAnchor="middle" className="fill-white">Agent 5: Alert Escalation</text>
                <text x="725" y="525" textAnchor="middle" className="fill-white text-xs">Priority Routing | Multi-Agent Voting</text>
              </g>

              {/* Agent 6: Health Coach */}
              <g>
                <rect x="350" y="570" width="300" height="25" fill="rgb(6, 182, 212)" rx="4" />
                <text x="500" y="587" textAnchor="middle" className="fill-white text-xs">Agent 6: Health Coach (Conversational Layer)</text>
              </g>

              {/* Arrows */}
              <defs>
                <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="rgb(100, 100, 100)" />
                </marker>
              </defs>

              {/* Wearables to Agent 1 */}
              <path d="M 160 130 L 410 180" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowFlow)" />
              <path d="M 310 130 L 460 180" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowFlow)" />
              <path d="M 460 130 L 490 180" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowFlow)" />
              <path d="M 610 130 L 530 180" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowFlow)" />
              <path d="M 770 130 L 590 180" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowFlow)" />

              {/* Agent 1 to Agent 2 */}
              <path d="M 500 240 L 500 270" stroke="rgb(100, 100, 100)" strokeWidth="3" markerEnd="url(#arrowFlow)" />

              {/* Agent 2 to Agent 3 */}
              <path d="M 500 330 L 500 370" stroke="rgb(100, 100, 100)" strokeWidth="3" markerEnd="url(#arrowFlow)" />

              {/* Agent 3 to Agents 4 & 5 */}
              <path d="M 300 450 L 275 480" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowFlow)" />
              <path d="M 700 450 L 725 480" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowFlow)" />

              {/* Agents 4 & 5 to Agent 6 */}
              <path d="M 275 540 L 420 570" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowFlow)" />
              <path d="M 725 540 L 580 570" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowFlow)" />

              {/* Labels on arrows */}
              <text x="430" y="200" className="fill-foreground text-xs">Real-time data stream</text>
              <text x="520" y="260" className="fill-foreground text-xs">Raw data</text>
              <text x="520" y="355" className="fill-foreground text-xs">Features</text>
              <text x="200" y="470" className="fill-foreground text-xs">Risk scores</text>
              <text x="730" y="470" className="fill-foreground text-xs">Anomalies</text>
              <text x="320" y="560" className="fill-foreground text-xs">Actions</text>
              <text x="620" y="560" className="fill-foreground text-xs">Alerts</text>
            </svg>
          </div>

          {/* Timing Information */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-sm mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-600" />
                <strong>Data Processing Pipeline</strong>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Ingestion latency:</span>
                  <Badge variant="outline">&lt;100ms</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Feature engineering:</span>
                  <Badge variant="outline">&lt;50ms</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Model inference (avg):</span>
                  <Badge variant="outline">35ms</Badge>
                </div>
                <div className="flex justify-between">
                  <span>End-to-end (normal):</span>
                  <Badge className="bg-green-100 text-green-700">~185ms</Badge>
                </div>
                <div className="flex justify-between">
                  <span>End-to-end (critical):</span>
                  <Badge className="bg-red-100 text-red-700">&lt;1.2s</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="text-sm mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <strong>Throughput & Scalability</strong>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Data points/second:</span>
                  <Badge variant="outline">10,000+</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Concurrent patients:</span>
                  <Badge variant="outline">50,000</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Model runs/day/patient:</span>
                  <Badge variant="outline">~1,440</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Storage (per patient/month):</span>
                  <Badge variant="outline">~500 MB</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Scalability:</span>
                  <Badge className="bg-blue-100 text-blue-700">Horizontal</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="text-sm mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-600" />
                <strong>Reliability & Safety</strong>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>System uptime:</span>
                  <Badge className="bg-green-100 text-green-700">99.9%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Agent redundancy:</span>
                  <Badge variant="outline">2x failover</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Data backup:</span>
                  <Badge variant="outline">Real-time</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Alert delivery:</span>
                  <Badge className="bg-green-100 text-green-700">99.8%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>False positive rate:</span>
                  <Badge className="bg-blue-100 text-blue-700">4.2%</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Protocol */}
      <Card>
        <CardHeader>
          <CardTitle>Inter-Agent Communication Protocol</CardTitle>
          <CardDescription>
            How agents share information and coordinate decisions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                Message Passing Architecture
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm mb-1"><strong>Publish-Subscribe Model</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Agents subscribe to topics of interest</p>
                  <div className="text-xs space-y-1">
                    <p>• Topic: "vitals_anomaly" → Agents 3, 4, 5 subscribed</p>
                    <p>• Topic: "glucose_spike" → Agents 3, 4 subscribed</p>
                    <p>• Topic: "critical_alert" → All agents subscribed</p>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm mb-1"><strong>Message Queue (Redis)</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Guaranteed delivery with retry logic</p>
                  <div className="text-xs space-y-1">
                    <p>• Max retries: 3 attempts</p>
                    <p>• Timeout: 5 seconds</p>
                    <p>• Dead letter queue for failed messages</p>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm mb-1"><strong>Priority Levels</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Critical messages jump the queue</p>
                  <div className="text-xs space-y-1">
                    <p>• P0: Emergency (immediate processing)</p>
                    <p>• P1: High urgency (&lt;1s)</p>
                    <p>• P2: Medium (&lt;5s)</p>
                    <p>• P3: Low (&lt;30s)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                Consensus & Validation
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Multi-Agent Consensus</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Critical decisions require agreement</p>
                  <div className="text-xs space-y-1">
                    <p>• Emergency escalation: ≥2 agents agree (67% threshold)</p>
                    <p>• Medication interaction: All relevant agents must validate</p>
                    <p>• Fall risk alert: Gait + Vitals agents consensus</p>
                  </div>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Confidence Weighting</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Agents report confidence scores</p>
                  <div className="text-xs space-y-1">
                    <p>• Weighted voting: Score × Agent reliability weight</p>
                    <p>• Example: Agent3(0.92) × 1.2 + Agent5(0.85) × 1.0</p>
                    <p>• Decision threshold: Combined score ≥ 0.85</p>
                  </div>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Conflict Resolution</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">What happens when agents disagree?</p>
                  <div className="text-xs space-y-1">
                    <p>• Default: Err on side of caution (alert)</p>
                    <p>• Request human review if confidence low</p>
                    <p>• Log disagreement for model retraining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
