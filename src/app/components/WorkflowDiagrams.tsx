import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";
import { 
  ArrowRight, 
  ArrowDown, 
  Circle, 
  Database, 
  Smartphone,
  Server,
  Brain,
  Users,
  Activity,
  Eye,
  AlertCircle,
  Bell,
  CheckCircle,
  FileText,
  Pill,
  MapPin,
  Phone,
  Cpu,
  Zap,
  Network,
  GitBranch,
  MessageSquare,
  Shield,
  Target
} from "lucide-react";
import { AgenticAIDiagram } from "./AgenticAIDiagram";
import { AgenticAIModels } from "./AgenticAIModels";

export function WorkflowDiagrams() {
  const [selectedDiagram, setSelectedDiagram] = useState("system");

  return (
    <div className="size-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-y-auto p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1>Workflow Diagrams</h1>
          <p className="text-muted-foreground mt-1">
            Visual representation of system architecture and user journeys
          </p>
        </div>

        <Tabs value={selectedDiagram} onValueChange={setSelectedDiagram}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="caretaker">Caretaker</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="data">Data Flow</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="agentic">Agentic AI</TabsTrigger>
          </TabsList>

          {/* System Architecture */}
          <TabsContent value="system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture Overview</CardTitle>
                <CardDescription>
                  High-level system components and interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SystemArchitectureDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patient Workflow */}
          <TabsContent value="patient" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Daily Workflow</CardTitle>
                <CardDescription>
                  Typical patient journey through the application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PatientWorkflowDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Caretaker Workflow */}
          <TabsContent value="caretaker" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Caretaker Monitoring Workflow</CardTitle>
                <CardDescription>
                  How caretakers monitor and support patients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CaretakerWorkflowDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Healthcare Professional Workflow */}
          <TabsContent value="healthcare" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Professional Workflow</CardTitle>
                <CardDescription>
                  Physician and nurse daily workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HealthcareWorkflowDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Flow */}
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Flow & AI Integration</CardTitle>
                <CardDescription>
                  How data moves through the system and AI processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataFlowDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency Response */}
          <TabsContent value="emergency" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Response Workflow</CardTitle>
                <CardDescription>
                  Critical alert and emergency handling process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EmergencyWorkflowDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agentic AI */}
          <TabsContent value="agentic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agentic AI Workflow</CardTitle>
                <CardDescription>
                  How AI autonomously manages patient care
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AgenticAIWorkflowDiagram />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <Card>
          <CardHeader>
            <CardTitle>Diagram Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <span className="text-sm">User Action</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-sm">System Process</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500" />
                <span className="text-sm">AI/Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-sm">Critical/Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-orange-500" />
                <span className="text-sm">Database</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-500" />
                <span className="text-sm">External Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm">Data Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-border border-2 border-dashed" />
                <span className="text-sm">Optional Path</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// System Architecture Diagram Component
function SystemArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg width="800" height="600" viewBox="0 0 800 600" className="mx-auto">
        {/* Frontend Layer */}
        <g>
          <rect x="50" y="50" width="700" height="120" fill="rgba(59, 130, 246, 0.1)" stroke="rgb(59, 130, 246)" strokeWidth="2" rx="8" />
          <text x="400" y="75" textAnchor="middle" className="fill-foreground font-medium">Frontend Layer</text>
          
          {/* Role Components */}
          <rect x="80" y="90" width="120" height="60" fill="rgb(59, 130, 246)" rx="4" />
          <text x="140" y="115" textAnchor="middle" className="fill-white text-sm">Patient App</text>
          <text x="140" y="135" textAnchor="middle" className="fill-white text-xs">React/Mobile</text>
          
          <rect x="230" y="90" width="120" height="60" fill="rgb(59, 130, 246)" rx="4" />
          <text x="290" y="115" textAnchor="middle" className="fill-white text-sm">Caretaker</text>
          <text x="290" y="135" textAnchor="middle" className="fill-white text-xs">Dashboard</text>
          
          <rect x="380" y="90" width="120" height="60" fill="rgb(59, 130, 246)" rx="4" />
          <text x="440" y="115" textAnchor="middle" className="fill-white text-sm">Physician</text>
          <text x="440" y="135" textAnchor="middle" className="fill-white text-xs">Portal</text>
          
          <rect x="530" y="90" width="120" height="60" fill="rgb(59, 130, 246)" rx="4" />
          <text x="590" y="115" textAnchor="middle" className="fill-white text-sm">Nurse</text>
          <text x="590" y="135" textAnchor="middle" className="fill-white text-xs">Workstation</text>
        </g>

        {/* API Gateway */}
        <g>
          <rect x="250" y="220" width="300" height="60" fill="rgb(34, 197, 94)" rx="4" />
          <text x="400" y="245" textAnchor="middle" className="fill-white text-sm">API Gateway / Hono Server</text>
          <text x="400" y="265" textAnchor="middle" className="fill-white text-xs">Authentication | Rate Limiting | Routing</text>
        </g>

        {/* Service Layer */}
        <g>
          <rect x="50" y="330" width="700" height="140" fill="rgba(168, 85, 247, 0.1)" stroke="rgb(168, 85, 247)" strokeWidth="2" rx="8" />
          <text x="400" y="355" textAnchor="middle" className="fill-foreground font-medium">Service Layer</text>
          
          <rect x="80" y="370" width="130" height="80" fill="rgb(168, 85, 247)" rx="4" />
          <text x="145" y="395" textAnchor="middle" className="fill-white text-sm">Visual</text>
          <text x="145" y="415" textAnchor="middle" className="fill-white text-sm">Assistance</text>
          <text x="145" y="435" textAnchor="middle" className="fill-white text-xs">Voice | Vision</text>
          
          <rect x="235" y="370" width="130" height="80" fill="rgb(168, 85, 247)" rx="4" />
          <text x="300" y="395" textAnchor="middle" className="fill-white text-sm">Health</text>
          <text x="300" y="415" textAnchor="middle" className="fill-white text-sm">Monitoring</text>
          <text x="300" y="435" textAnchor="middle" className="fill-white text-xs">Vitals | Meds</text>
          
          <rect x="390" y="370" width="130" height="80" fill="rgb(168, 85, 247)" rx="4" />
          <text x="455" y="395" textAnchor="middle" className="fill-white text-sm">AI Analytics</text>
          <text x="455" y="415" textAnchor="middle" className="fill-white text-sm">Engine</text>
          <text x="455" y="435" textAnchor="middle" className="fill-white text-xs">Predictions</text>
          
          <rect x="545" y="370" width="130" height="80" fill="rgb(168, 85, 247)" rx="4" />
          <text x="610" y="395" textAnchor="middle" className="fill-white text-sm">Emergency</text>
          <text x="610" y="415" textAnchor="middle" className="fill-white text-sm">Response</text>
          <text x="610" y="435" textAnchor="middle" className="fill-white text-xs">Alerts | SOS</text>
        </g>

        {/* Data Layer */}
        <g>
          <rect x="150" y="520" width="200" height="60" fill="rgb(249, 115, 22)" rx="4" />
          <text x="250" y="545" textAnchor="middle" className="fill-white text-sm">PostgreSQL Database</text>
          <text x="250" y="565" textAnchor="middle" className="fill-white text-xs">Patient Records | Vitals</text>
          
          <rect x="450" y="520" width="200" height="60" fill="rgb(249, 115, 22)" rx="4" />
          <text x="550" y="545" textAnchor="middle" className="fill-white text-sm">Supabase Storage</text>
          <text x="550" y="565" textAnchor="middle" className="fill-white text-xs">Files | Media</text>
        </g>

        {/* Arrows - Frontend to API */}
        <path d="M 140 150 L 140 220" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowblue)" />
        <path d="M 290 150 L 290 220" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowblue)" />
        <path d="M 440 150 L 440 220" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowblue)" />
        <path d="M 590 150 L 590 220" stroke="rgb(59, 130, 246)" strokeWidth="2" markerEnd="url(#arrowblue)" />

        {/* Arrows - API to Services */}
        <path d="M 250 280 L 145 370" stroke="rgb(34, 197, 94)" strokeWidth="2" markerEnd="url(#arrowgreen)" />
        <path d="M 350 280 L 300 370" stroke="rgb(34, 197, 94)" strokeWidth="2" markerEnd="url(#arrowgreen)" />
        <path d="M 450 280 L 455 370" stroke="rgb(34, 197, 94)" strokeWidth="2" markerEnd="url(#arrowgreen)" />
        <path d="M 550 280 L 610 370" stroke="rgb(34, 197, 94)" strokeWidth="2" markerEnd="url(#arrowgreen)" />

        {/* Arrows - Services to Data */}
        <path d="M 145 450 L 200 520" stroke="rgb(168, 85, 247)" strokeWidth="2" markerEnd="url(#arrowpurple)" />
        <path d="M 300 450 L 250 520" stroke="rgb(168, 85, 247)" strokeWidth="2" markerEnd="url(#arrowpurple)" />
        <path d="M 455 450 L 500 520" stroke="rgb(168, 85, 247)" strokeWidth="2" markerEnd="url(#arrowpurple)" />
        <path d="M 610 450 L 600 520" stroke="rgb(168, 85, 247)" strokeWidth="2" markerEnd="url(#arrowpurple)" />

        {/* Arrow markers */}
        <defs>
          <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="rgb(59, 130, 246)" />
          </marker>
          <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="rgb(34, 197, 94)" />
          </marker>
          <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="rgb(168, 85, 247)" />
          </marker>
          <marker id="arroworange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="rgb(249, 115, 22)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// Patient Workflow Diagram Component
function PatientWorkflowDiagram() {
  const steps = [
    { icon: Smartphone, title: "Login", desc: "Select patient role", color: "bg-blue-500" },
    { icon: Activity, title: "Check Dashboard", desc: "View vitals & alerts", color: "bg-green-500" },
    { icon: Eye, title: "Use Assistance", desc: "Voice | Navigation | OCR", color: "bg-purple-500" },
    { icon: Pill, title: "Medication", desc: "Mark taken, set reminders", color: "bg-orange-500" },
    { icon: Activity, title: "Record Vitals", desc: "Sync wearable data", color: "bg-blue-500" },
    { icon: CheckCircle, title: "Review Trends", desc: "Check health charts", color: "bg-green-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${step.color} text-white p-3 rounded-lg shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{index + 1}</Badge>
                        <h3 className="text-sm">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Decision Points */}
      <Card className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
        <CardHeader>
          <CardTitle className="text-sm">Key Decision Points</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
              <span>If vitals abnormal → Alert caretaker & physician automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
              <span>If medication missed → System sends reminder every 15 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
              <span>If emergency → One-tap SOS triggers all response protocols</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Caretaker Workflow Diagram Component
function CaretakerWorkflowDiagram() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Morning Routine */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Circle className="w-4 h-4 fill-blue-500 text-blue-500" />
              Morning Routine (7:00 AM)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge>1</Badge>
              <div className="flex-1">
                <p className="text-sm">Review overnight vitals & activity</p>
                <p className="text-xs text-muted-foreground mt-1">Check for any alerts or anomalies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge>2</Badge>
              <div className="flex-1">
                <p className="text-sm">Verify morning medication taken</p>
                <p className="text-xs text-muted-foreground mt-1">Confirm via app tracker</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge>3</Badge>
              <div className="flex-1">
                <p className="text-sm">Review daily care task checklist</p>
                <p className="text-xs text-muted-foreground mt-1">Plan day's activities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continuous Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Circle className="w-4 h-4 fill-green-500 text-green-500" />
              Continuous Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Bell className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Receive real-time health alerts</p>
                <p className="text-xs text-muted-foreground mt-1">Push notifications for abnormal vitals</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Track patient location</p>
                <p className="text-xs text-muted-foreground mt-1">GPS updates during outings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Monitor assistance feature usage</p>
                <p className="text-xs text-muted-foreground mt-1">View activity logs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Protocol */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Circle className="w-4 h-4 fill-orange-500 text-orange-500" />
              Alert Response Protocol
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="destructive">!</Badge>
              <div className="flex-1">
                <p className="text-sm">Assess alert severity</p>
                <p className="text-xs text-muted-foreground mt-1">High/Medium/Low priority</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Contact patient to verify</p>
                <p className="text-xs text-muted-foreground mt-1">Quick call button</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Notify healthcare team if needed</p>
                <p className="text-xs text-muted-foreground mt-1">Share vitals with physician</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evening Review */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Circle className="w-4 h-4 fill-purple-500 text-purple-500" />
              Evening Review (8:00 PM)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Verify all medications taken</p>
                <p className="text-xs text-muted-foreground mt-1">Review adherence log</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Check daily vital trends</p>
                <p className="text-xs text-muted-foreground mt-1">Note any patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <p className="text-sm">Document observations</p>
                <p className="text-xs text-muted-foreground mt-1">Add notes for care team</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Healthcare Professional Workflow Diagram Component
function HealthcareWorkflowDiagram() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Physician Workflow */}
        <Card className="border-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Physician Workflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">1</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Review Critical Alerts (8:00 AM)</p>
                  <p className="text-xs text-muted-foreground mt-1">Prioritize high-risk patients</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">2</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Pre-Appointment Review</p>
                  <p className="text-xs text-muted-foreground mt-1">Check vitals, trends, medications</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">3</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Patient Consultations</p>
                  <p className="text-xs text-muted-foreground mt-1">In-person or virtual visits</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">4</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Clinical Documentation</p>
                  <p className="text-xs text-muted-foreground mt-1">Add notes, update treatment plans</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">5</div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">AI Insight Review (Weekly)</p>
                  <p className="text-xs text-muted-foreground mt-1">Analyze predictive alerts</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nurse Workflow */}
        <Card className="border-pink-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-pink-500" />
              Nurse Workflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm">1</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Shift Handoff (7:00 AM)</p>
                  <p className="text-xs text-muted-foreground mt-1">Review patient assignments</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm">2</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Morning Rounds</p>
                  <p className="text-xs text-muted-foreground mt-1">Check each patient, record vitals</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm">3</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Medication Administration</p>
                  <p className="text-xs text-muted-foreground mt-1">Follow scheduled rounds</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm">4</div>
                  <div className="w-0.5 h-full bg-border my-2" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">Alert Response</p>
                  <p className="text-xs text-muted-foreground mt-1">Address system notifications</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm">5</div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">Documentation & Handoff</p>
                  <p className="text-xs text-muted-foreground mt-1">Complete notes, prepare for next shift</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Data Flow Diagram Component
function DataFlowDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg width="900" height="700" viewBox="0 0 900 700" className="mx-auto">
        {/* Patient Device */}
        <rect x="50" y="50" width="180" height="100" fill="rgb(59, 130, 246)" rx="8" />
        <text x="140" y="85" textAnchor="middle" className="fill-white">Patient Device</text>
        <text x="140" y="105" textAnchor="middle" className="fill-white text-xs">Sensors | Wearables</text>
        <text x="140" y="125" textAnchor="middle" className="fill-white text-xs">Camera | GPS</text>

        {/* Data Collection */}
        <rect x="300" y="50" width="180" height="100" fill="rgb(34, 197, 94)" rx="8" />
        <text x="390" y="85" textAnchor="middle" className="fill-white">Data Collection</text>
        <text x="390" y="105" textAnchor="middle" className="fill-white text-xs">Vitals | Location</text>
        <text x="390" y="125" textAnchor="middle" className="fill-white text-xs">Activity | Voice</text>

        {/* API Gateway */}
        <rect x="550" y="50" width="180" height="100" fill="rgb(168, 85, 247)" rx="8" />
        <text x="640" y="85" textAnchor="middle" className="fill-white">API Gateway</text>
        <text x="640" y="105" textAnchor="middle" className="fill-white text-xs">Authentication</text>
        <text x="640" y="125" textAnchor="middle" className="fill-white text-xs">Data Validation</text>

        {/* Database */}
        <rect x="375" y="220" width="180" height="100" fill="rgb(249, 115, 22)" rx="8" />
        <text x="465" y="255" textAnchor="middle" className="fill-white">Database</text>
        <text x="465" y="275" textAnchor="middle" className="fill-white text-xs">PostgreSQL</text>
        <text x="465" y="295" textAnchor="middle" className="fill-white text-xs">Patient Records</text>

        {/* AI Processing */}
        <rect x="100" y="380" width="180" height="120" fill="rgb(147, 51, 234)" rx="8" />
        <text x="190" y="415" textAnchor="middle" className="fill-white">AI Processing</text>
        <text x="190" y="440" textAnchor="middle" className="fill-white text-xs">• Fall Risk Analysis</text>
        <text x="190" y="460" textAnchor="middle" className="fill-white text-xs">• Adherence Prediction</text>
        <text x="190" y="480" textAnchor="middle" className="fill-white text-xs">• Health Trends</text>

        {/* Alert Engine */}
        <rect x="350" y="380" width="180" height="120" fill="rgb(239, 68, 68)" rx="8" />
        <text x="440" y="415" textAnchor="middle" className="fill-white">Alert Engine</text>
        <text x="440" y="440" textAnchor="middle" className="fill-white text-xs">Threshold Monitoring</text>
        <text x="440" y="460" textAnchor="middle" className="fill-white text-xs">Smart Notifications</text>
        <text x="440" y="480" textAnchor="middle" className="fill-white text-xs">Priority Routing</text>

        {/* Analytics */}
        <rect x="600" y="380" width="180" height="120" fill="rgb(6, 182, 212)" rx="8" />
        <text x="690" y="415" textAnchor="middle" className="fill-white">Analytics</text>
        <text x="690" y="440" textAnchor="middle" className="fill-white text-xs">Trend Analysis</text>
        <text x="690" y="460" textAnchor="middle" className="fill-white text-xs">Reporting</text>
        <text x="690" y="480" textAnchor="middle" className="fill-white text-xs">Dashboards</text>

        {/* Output: Dashboards */}
        <rect x="100" y="560" width="140" height="80" fill="rgb(59, 130, 246)" rx="8" />
        <text x="170" y="590" textAnchor="middle" className="fill-white text-sm">Patient</text>
        <text x="170" y="610" textAnchor="middle" className="fill-white text-sm">Dashboard</text>

        <rect x="270" y="560" width="140" height="80" fill="rgb(34, 197, 94)" rx="8" />
        <text x="340" y="590" textAnchor="middle" className="fill-white text-sm">Caretaker</text>
        <text x="340" y="610" textAnchor="middle" className="fill-white text-sm">Dashboard</text>

        <rect x="440" y="560" width="140" height="80" fill="rgb(168, 85, 247)" rx="8" />
        <text x="510" y="590" textAnchor="middle" className="fill-white text-sm">Physician</text>
        <text x="510" y="610" textAnchor="middle" className="fill-white text-sm">Portal</text>

        <rect x="610" y="560" width="140" height="80" fill="rgb(249, 115, 22)" rx="8" />
        <text x="680" y="590" textAnchor="middle" className="fill-white text-sm">AI Admin</text>
        <text x="680" y="610" textAnchor="middle" className="fill-white text-sm">Console</text>

        {/* Arrows */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Data flow arrows */}
        <path d="M 230 100 L 300 100" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 480 100 L 550 100" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 640 150 L 465 220" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <path d="M 390 320 L 190 380" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 440 320 L 440 380" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 500 320 L 690 380" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />

        <path d="M 190 500 L 170 560" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 280 500 L 340 560" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 530 500 L 510 560" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 690 500 L 680 560" stroke="rgb(100, 100, 100)" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Labels */}
        <text x="265" y="90" className="fill-foreground text-xs">Collect</text>
        <text x="515" y="90" className="fill-foreground text-xs">Validate</text>
        <text x="500" y="200" className="fill-foreground text-xs">Store</text>
        <text x="280" y="355" className="fill-foreground text-xs">Process</text>
        <text x="140" y="540" className="fill-foreground text-xs">Display</text>
      </svg>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Real-Time Data Processing</CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-2">
            <p>• Vital signs processed every 5-15 minutes</p>
            <p>• Location updates every 30 seconds during navigation</p>
            <p>• Voice commands processed instantly</p>
            <p>• Alerts triggered within 1-2 seconds of threshold breach</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">AI Model Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-2">
            <p>• Data preprocessing and normalization</p>
            <p>• Feature extraction from time-series data</p>
            <p>• Model inference (predictions)</p>
            <p>• Confidence scoring and output validation</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Emergency Workflow Diagram Component
function EmergencyWorkflowDiagram() {
  return (
    <div className="space-y-6">
      {/* Emergency Trigger */}
      <Card className="border-red-500 bg-red-50 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5" />
            Emergency Trigger Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm mb-2">Manual SOS</p>
              <p className="text-xs text-muted-foreground">Patient presses emergency button</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm mb-2">Critical Vitals</p>
              <p className="text-xs text-muted-foreground">Automatic alert when threshold exceeded</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-sm mb-2">Fall Detection</p>
              <p className="text-xs text-muted-foreground">AI detects sudden position change</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Response Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* 0 seconds */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <span className="text-xs">0s</span>
                </div>
                <div className="w-0.5 h-full bg-border my-2" />
              </div>
              <div className="flex-1 pb-6">
                <Badge variant="destructive" className="mb-2">Emergency Detected</Badge>
                <p className="text-sm">System immediately initiates emergency protocol</p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• Capture current location (GPS)</li>
                  <li>• Record vital signs snapshot</li>
                  <li>• Activate audio/video recording (if enabled)</li>
                </ul>
              </div>
            </div>

            {/* 2 seconds */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center">
                  <span className="text-xs">2s</span>
                </div>
                <div className="w-0.5 h-full bg-border my-2" />
              </div>
              <div className="flex-1 pb-6">
                <Badge className="mb-2 bg-orange-600">Notification Sent</Badge>
                <p className="text-sm">Push notifications to emergency contacts</p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• Caretaker receives high-priority alert</li>
                  <li>• Physician notified via app</li>
                  <li>• Nurse station alerted (if in facility)</li>
                </ul>
              </div>
            </div>

            {/* 5 seconds */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                  <span className="text-xs">5s</span>
                </div>
                <div className="w-0.5 h-full bg-border my-2" />
              </div>
              <div className="flex-1 pb-6">
                <Badge className="mb-2 bg-yellow-600">Call Initiated</Badge>
                <p className="text-sm">Automatic call sequence begins</p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• Attempt to call caretaker (first priority)</li>
                  <li>• If no answer in 15s, call next contact</li>
                  <li>• Continue through contact list</li>
                </ul>
              </div>
            </div>

            {/* 30 seconds */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <span className="text-xs">30s</span>
                </div>
                <div className="w-0.5 h-full bg-border my-2" />
              </div>
              <div className="flex-1 pb-6">
                <Badge className="mb-2 bg-blue-600">Data Shared</Badge>
                <p className="text-sm">Medical information transmitted</p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• Send location to all contacts</li>
                  <li>• Share vital signs history</li>
                  <li>• Provide medication list & allergies</li>
                </ul>
              </div>
            </div>

            {/* If no response */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <span className="text-xs">2m</span>
                </div>
              </div>
              <div className="flex-1">
                <Badge variant="destructive" className="mb-2">911 Escalation</Badge>
                <p className="text-sm">If no contact responds, call emergency services</p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• Automatic 911 call with location</li>
                  <li>• Pre-recorded message with patient info</li>
                  <li>• Continue trying to reach contacts</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decision Tree */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Decision Tree</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-red-500">
              <p className="font-medium">Critical Alert (Immediate Action)</p>
              <p className="text-xs text-muted-foreground mt-1">
                Heart rate &gt;150 or &lt;40 | BP &gt;180/120 | O2 &lt;85% | SOS button | Fall detected
              </p>
            </div>

            <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-500">
              <p className="font-medium">Warning Alert (Monitor Closely)</p>
              <p className="text-xs text-muted-foreground mt-1">
                Heart rate 120-150 | BP 140-180/90-120 | O2 85-90% | Medication missed 2+ times
              </p>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium">Info Alert (Routine Follow-up)</p>
              <p className="text-xs text-muted-foreground mt-1">
                Minor vital fluctuation | Medication reminder | Appointment reminder | Activity update
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Agentic AI Workflow Diagram Component
function AgenticAIWorkflowDiagram() {
  return (
    <div className="space-y-6">
      <AgenticAIDiagram />
      <AgenticAIModels />
    </div>
  );
}