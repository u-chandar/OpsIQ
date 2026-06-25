import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Brain,
  Cpu,
  Network,
  Zap,
  AlertCircle,
  CheckCircle,
  Bell,
  GitBranch,
  MessageSquare,
  Shield,
  Target
} from "lucide-react";
import { PreventiveAIModels } from "./PreventiveAIModels";
import { AgenticArchitecture } from "./AgenticArchitecture";

export function AgenticAIDiagram() {
  return (
    <div className="space-y-6">
      {/* First show Preventive AI Models */}
      <PreventiveAIModels />
      
      {/* Then show Agentic Architecture */}
      <AgenticArchitecture />
      
      {/* Original content follows */}
      <Card className="border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Agentic AI Architecture Overview
          </CardTitle>
          <CardDescription>
            Autonomous AI agents that proactively manage patient care, predict health events, and coordinate responses across the healthcare ecosystem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                <h3 className="text-sm">Edge AI Processing</h3>
              </div>
              <p className="text-xs text-muted-foreground">Real-time inference on-device for latency-critical tasks</p>
            </div>
            <div className="p-4 bg-background rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm">Multi-Agent System</h3>
              </div>
              <p className="text-xs text-muted-foreground">Specialized AI agents collaborating to provide holistic care</p>
            </div>
            <div className="p-4 bg-background rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600" />
                <h3 className="text-sm">Predictive Analytics</h3>
              </div>
              <p className="text-xs text-muted-foreground">Anticipate health events before they become critical</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* UML Component Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>UML Component Diagram: AI Agent Architecture</CardTitle>
          <CardDescription>
            High-level component structure showing AI agent interactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <svg width="1000" height="800" viewBox="0 0 1000 800" className="mx-auto">
              {/* Title */}
              <text x="500" y="30" textAnchor="middle" className="fill-foreground text-lg font-medium">
                Agentic AI Component Architecture
              </text>

              {/* Data Collection Layer */}
              <g>
                <rect x="50" y="60" width="900" height="120" fill="rgba(59, 130, 246, 0.1)" stroke="rgb(59, 130, 246)" strokeWidth="2" rx="8" />
                <text x="500" y="85" textAnchor="middle" className="fill-foreground">Data Collection Layer</text>
                
                <rect x="80" y="100" width="160" height="60" fill="rgb(59, 130, 246)" rx="4" />
                <text x="160" y="125" textAnchor="middle" className="fill-white text-sm">Sensors & IoT</text>
                <text x="160" y="145" textAnchor="middle" className="fill-white text-xs">Vitals | GPS | Activity</text>
                
                <rect x="270" y="100" width="160" height="60" fill="rgb(59, 130, 246)" rx="4" />
                <text x="350" y="125" textAnchor="middle" className="fill-white text-sm">Smart Devices</text>
                <text x="350" y="145" textAnchor="middle" className="fill-white text-xs">Cane | Glasses | Watch</text>
                
                <rect x="460" y="100" width="160" height="60" fill="rgb(59, 130, 246)" rx="4" />
                <text x="540" y="125" textAnchor="middle" className="fill-white text-sm">User Interactions</text>
                <text x="540" y="145" textAnchor="middle" className="fill-white text-xs">Voice | Touch | Vision</text>
                
                <rect x="650" y="100" width="160" height="60" fill="rgb(59, 130, 246)" rx="4" />
                <text x="730" y="125" textAnchor="middle" className="fill-white text-sm">EHR Integration</text>
                <text x="730" y="145" textAnchor="middle" className="fill-white text-xs">Medical History</text>
              </g>

              {/* AI Agent Orchestrator */}
              <g>
                <rect x="350" y="230" width="300" height="80" fill="rgb(147, 51, 234)" rx="8" />
                <text x="500" y="260" textAnchor="middle" className="fill-white">AI Agent Orchestrator</text>
                <text x="500" y="280" textAnchor="middle" className="fill-white text-xs">Coordinates multi-agent system</text>
                <text x="500" y="295" textAnchor="middle" className="fill-white text-xs">Task distribution | Priority management</text>
              </g>

              {/* Specialized AI Agents */}
              <g>
                <rect x="50" y="360" width="900" height="260" fill="rgba(168, 85, 247, 0.1)" stroke="rgb(168, 85, 247)" strokeWidth="2" rx="8" />
                <text x="500" y="385" textAnchor="middle" className="fill-foreground">Specialized AI Agents</text>
                
                {/* Health Monitor Agent */}
                <rect x="80" y="400" width="170" height="200" fill="rgb(34, 197, 94)" rx="4" />
                <text x="165" y="420" textAnchor="middle" className="fill-white text-sm">Health Monitor</text>
                <text x="165" y="435" textAnchor="middle" className="fill-white text-sm">Agent</text>
                <text x="165" y="460" textAnchor="middle" className="fill-white text-xs">• Vital analysis</text>
                <text x="165" y="480" textAnchor="middle" className="fill-white text-xs">• Trend detection</text>
                <text x="165" y="500" textAnchor="middle" className="fill-white text-xs">• Anomaly alerts</text>
                <text x="165" y="520" textAnchor="middle" className="fill-white text-xs">• Pattern recognition</text>
                <text x="165" y="540" textAnchor="middle" className="fill-white text-xs">• Risk scoring</text>
                <rect x="90" y="555" width="150" height="35" fill="rgba(255,255,255,0.2)" rx="3" />
                <text x="165" y="570" textAnchor="middle" className="fill-white text-xs font-medium">Edge AI: LSTM</text>
                <text x="165" y="583" textAnchor="middle" className="fill-white text-xs">Time-series forecasting</text>

                {/* Medication Agent */}
                <rect x="270" y="400" width="170" height="200" fill="rgb(249, 115, 22)" rx="4" />
                <text x="355" y="420" textAnchor="middle" className="fill-white text-sm">Medication</text>
                <text x="355" y="435" textAnchor="middle" className="fill-white text-sm">Adherence Agent</text>
                <text x="355" y="460" textAnchor="middle" className="fill-white text-xs">• Schedule tracking</text>
                <text x="355" y="480" textAnchor="middle" className="fill-white text-xs">• Smart reminders</text>
                <text x="355" y="500" textAnchor="middle" className="fill-white text-xs">• Interaction checks</text>
                <text x="355" y="520" textAnchor="middle" className="fill-white text-xs">• Refill predictions</text>
                <text x="355" y="540" textAnchor="middle" className="fill-white text-xs">• Adherence scoring</text>
                <rect x="280" y="555" width="150" height="35" fill="rgba(255,255,255,0.2)" rx="3" />
                <text x="355" y="570" textAnchor="middle" className="fill-white text-xs font-medium">ML: Random Forest</text>
                <text x="355" y="583" textAnchor="middle" className="fill-white text-xs">Adherence prediction</text>

                {/* Behavior Agent */}
                <rect x="460" y="400" width="170" height="200" fill="rgb(239, 68, 68)" rx="4" />
                <text x="545" y="420" textAnchor="middle" className="fill-white text-sm">Behavioral</text>
                <text x="545" y="435" textAnchor="middle" className="fill-white text-sm">Analysis Agent</text>
                <text x="545" y="460" textAnchor="middle" className="fill-white text-xs">• Activity patterns</text>
                <text x="545" y="480" textAnchor="middle" className="fill-white text-xs">• Sleep quality</text>
                <text x="545" y="500" textAnchor="middle" className="fill-white text-xs">• Mood detection</text>
                <text x="545" y="520" textAnchor="middle" className="fill-white text-xs">• Fall risk assessment</text>
                <text x="545" y="540" textAnchor="middle" className="fill-white text-xs">• Social engagement</text>
                <rect x="470" y="555" width="150" height="35" fill="rgba(255,255,255,0.2)" rx="3" />
                <text x="545" y="570" textAnchor="middle" className="fill-white text-xs font-medium">Deep Learning: CNN</text>
                <text x="545" y="583" textAnchor="middle" className="fill-white text-xs">Activity classification</text>

                {/* Vision Agent */}
                <rect x="650" y="400" width="170" height="200" fill="rgb(6, 182, 212)" rx="4" />
                <text x="735" y="420" textAnchor="middle" className="fill-white text-sm">Vision Assistance</text>
                <text x="735" y="435" textAnchor="middle" className="fill-white text-sm">Agent</text>
                <text x="735" y="460" textAnchor="middle" className="fill-white text-xs">• Object detection</text>
                <text x="735" y="480" textAnchor="middle" className="fill-white text-xs">• Scene understanding</text>
                <text x="735" y="500" textAnchor="middle" className="fill-white text-xs">• OCR & text reading</text>
                <text x="735" y="520" textAnchor="middle" className="fill-white text-xs">• Navigation guidance</text>
                <text x="735" y="540" textAnchor="middle" className="fill-white text-xs">• Hazard detection</text>
                <rect x="660" y="555" width="150" height="35" fill="rgba(255,255,255,0.2)" rx="3" />
                <text x="735" y="570" textAnchor="middle" className="fill-white text-xs font-medium">Edge AI: YOLO v8</text>
                <text x="735" y="583" textAnchor="middle" className="fill-white text-xs">Real-time detection</text>
              </g>

              {/* Decision & Action Layer */}
              <g>
                <rect x="50" y="670" width="900" height="100" fill="rgba(249, 115, 22, 0.1)" stroke="rgb(249, 115, 22)" strokeWidth="2" rx="8" />
                <text x="500" y="695" textAnchor="middle" className="fill-foreground">Decision & Action Layer</text>
                
                <rect x="120" y="710" width="180" height="45" fill="rgb(249, 115, 22)" rx="4" />
                <text x="210" y="730" textAnchor="middle" className="fill-white text-sm">Alert Generation</text>
                <text x="210" y="745" textAnchor="middle" className="fill-white text-xs">Priority routing</text>

                <rect x="340" y="710" width="180" height="45" fill="rgb(249, 115, 22)" rx="4" />
                <text x="430" y="730" textAnchor="middle" className="fill-white text-sm">Care Coordination</text>
                <text x="430" y="745" textAnchor="middle" className="fill-white text-xs">Team notifications</text>

                <rect x="560" y="710" width="180" height="45" fill="rgb(249, 115, 22)" rx="4" />
                <text x="650" y="730" textAnchor="middle" className="fill-white text-sm">Autonomous Actions</text>
                <text x="650" y="745" textAnchor="middle" className="fill-white text-xs">System responses</text>
              </g>

              {/* Arrows */}
              <defs>
                <marker id="arrowAgentic" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="rgb(100, 100, 100)" />
                </marker>
              </defs>

              {/* Data to Orchestrator */}
              <path d="M 160 160 L 400 230" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
              <path d="M 350 160 L 450 230" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
              <path d="M 540 160 L 530 230" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
              <path d="M 730 160 L 600 230" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />

              {/* Orchestrator to Agents */}
              <path d="M 400 310 L 165 400" stroke="rgb(100, 100, 100)" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowAgentic)" />
              <path d="M 450 310 L 355 400" stroke="rgb(100, 100, 100)" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowAgentic)" />
              <path d="M 530 310 L 545 400" stroke="rgb(100, 100, 100)" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowAgentic)" />
              <path d="M 600 310 L 735 400" stroke="rgb(100, 100, 100)" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowAgentic)" />

              {/* Agents to Decision Layer */}
              <path d="M 165 600 L 210 710" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
              <path d="M 355 600 L 370 710" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
              <path d="M 545 600 L 480 710" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
              <path d="M 735 600 L 650 710" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowAgentic)" />
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* UML Sequence Diagram - Continuing in next section */}
      <Card>
        <CardHeader>
          <CardTitle>UML Sequence Diagram: Anomaly Detection & Response</CardTitle>
          <CardDescription>
            Agent collaboration flow when detecting abnormal health patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <svg width="1100" height="700" viewBox="0 0 1100 700" className="mx-auto">
              {/* Title */}
              <text x="550" y="30" textAnchor="middle" className="fill-foreground text-lg font-medium">
                AI Agent Sequence: Health Anomaly Response
              </text>

              {/* Actors */}
              <g>
                {/* Patient Device */}
                <rect x="50" y="60" width="120" height="50" fill="rgb(59, 130, 246)" rx="4" />
                <text x="110" y="90" textAnchor="middle" className="fill-white text-sm">Patient Device</text>
                <line x1="110" y1="110" x2="110" y2="670" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Health Monitor Agent */}
                <rect x="210" y="60" width="140" height="50" fill="rgb(34, 197, 94)" rx="4" />
                <text x="280" y="85" textAnchor="middle" className="fill-white text-sm">Health Monitor</text>
                <text x="280" y="100" textAnchor="middle" className="fill-white text-xs">Agent</text>
                <line x1="280" y1="110" x2="280" y2="670" stroke="rgb(34, 197, 94)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Orchestrator */}
                <rect x="390" y="60" width="140" height="50" fill="rgb(147, 51, 234)" rx="4" />
                <text x="460" y="85" textAnchor="middle" className="fill-white text-sm">AI Orchestrator</text>
                <line x1="460" y1="110" x2="460" y2="670" stroke="rgb(147, 51, 234)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Behavior Agent */}
                <rect x="570" y="60" width="140" height="50" fill="rgb(239, 68, 68)" rx="4" />
                <text x="640" y="85" textAnchor="middle" className="fill-white text-sm">Behavioral</text>
                <text x="640" y="100" textAnchor="middle" className="fill-white text-xs">Agent</text>
                <line x1="640" y1="110" x2="640" y2="670" stroke="rgb(239, 68, 68)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Med Agent */}
                <rect x="750" y="60" width="140" height="50" fill="rgb(249, 115, 22)" rx="4" />
                <text x="820" y="85" textAnchor="middle" className="fill-white text-sm">Medication</text>
                <text x="820" y="100" textAnchor="middle" className="fill-white text-xs">Agent</text>
                <line x1="820" y1="110" x2="820" y2="670" stroke="rgb(249, 115, 22)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Care Team */}
                <rect x="930" y="60" width="140" height="50" fill="rgb(168, 85, 247)" rx="4" />
                <text x="1000" y="85" textAnchor="middle" className="fill-white text-sm">Care Team</text>
                <line x1="1000" y1="110" x2="1000" y2="670" stroke="rgb(168, 85, 247)" strokeWidth="2" strokeDasharray="5,5" />
              </g>

              {/* Interactions */}
              <defs>
                <marker id="arrowSeq" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="rgb(100, 100, 100)" />
                </marker>
              </defs>

              {/* 1. Data Stream */}
              <g>
                <path d="M 110 140 L 280 160" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="180" y="135" className="fill-foreground text-xs">1. Stream vitals data</text>
                <text x="180" y="150" className="fill-muted-foreground text-xs">(Heart rate: 145 bpm)</text>
              </g>

              {/* 2. Analysis */}
              <g>
                <rect x="260" y="175" width="40" height="50" fill="rgb(34, 197, 94)" />
                <text x="25" y="195" className="fill-foreground text-xs">2. Analyze pattern</text>
                <text x="25" y="210" className="fill-muted-foreground text-xs">LSTM model detects anomaly</text>
              </g>

              {/* 3. Report to Orchestrator */}
              <g>
                <path d="M 280 225 L 460 245" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="350" y="220" className="fill-foreground text-xs">3. Report anomaly</text>
                <text x="350" y="235" className="fill-muted-foreground text-xs">(Severity: HIGH)</text>
              </g>

              {/* 4. Query Behavior Agent */}
              <g>
                <path d="M 460 265 L 640 285" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="520" y="260" className="fill-foreground text-xs">4. Query recent activity</text>
              </g>

              {/* 5. Behavior Analysis */}
              <g>
                <rect x="620" y="295" width="40" height="50" fill="rgb(239, 68, 68)" />
                <text x="690" y="310" className="fill-foreground text-xs">5. Analyze context</text>
                <text x="690" y="325" className="fill-muted-foreground text-xs">No unusual activity detected</text>
              </g>

              {/* 6. Response */}
              <g>
                <path d="M 640 345 L 460 365" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="520" y="340" className="fill-foreground text-xs">6. Return analysis</text>
              </g>

              {/* 7. Query Medication */}
              <g>
                <path d="M 460 385 L 820 405" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="600" y="380" className="fill-foreground text-xs">7. Check medication status</text>
              </g>

              {/* 8. Med Analysis */}
              <g>
                <rect x="800" y="415" width="40" height="50" fill="rgb(249, 115, 22)" />
                <text x="870" y="430" className="fill-foreground text-xs">8. Check adherence</text>
                <text x="870" y="445" className="fill-muted-foreground text-xs">Missed beta blocker dose</text>
              </g>

              {/* 9. Response */}
              <g>
                <path d="M 820 465 L 460 485" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="600" y="460" className="fill-foreground text-xs">9. Medication alert</text>
              </g>

              {/* 10. Decision */}
              <g>
                <rect x="440" y="495" width="40" height="50" fill="rgb(147, 51, 234)" />
                <text x="25" y="510" className="fill-foreground text-xs">10. Correlate data</text>
                <text x="25" y="525" className="fill-muted-foreground text-xs">High HR due to missed med</text>
              </g>

              {/* 11. Alert Care Team */}
              <g>
                <path d="M 460 545 L 1000 565" stroke="rgb(239, 68, 68)" strokeWidth="3" markerEnd="url(#arrowSeq)" />
                <text x="680" y="540" className="fill-destructive text-xs">11. ALERT: Urgent notification</text>
                <text x="680" y="555" className="fill-destructive text-xs">"Patient missed medication + elevated HR"</text>
              </g>

              {/* 12. Alert Patient */}
              <g>
                <path d="M 460 585 L 110 605" stroke="rgb(239, 68, 68)" strokeWidth="3" markerEnd="url(#arrowSeq)" />
                <text x="220" y="580" className="fill-destructive text-xs">12. Send medication reminder</text>
                <text x="220" y="595" className="fill-destructive text-xs">"Please take your beta blocker now"</text>
              </g>

              {/* 13. Monitor */}
              <g>
                <path d="M 280 625 L 280 650" stroke="rgb(34, 197, 94)" strokeWidth="2" markerEnd="url(#arrowSeq)" />
                <text x="25" y="640" className="fill-foreground text-xs">13. Continue monitoring</text>
                <text x="25" y="655" className="fill-muted-foreground text-xs">Track resolution</text>
              </g>
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* AI Models & Techniques - Continued in next message due to length */}
    </div>
  );
}