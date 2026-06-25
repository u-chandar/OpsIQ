import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageSquare,
  Calendar,
  FileText,
  Activity,
  Heart,
  Droplet,
  Wind,
  Footprints,
  Brain,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Clock,
  Users,
  Share2,
  Download,
  Upload,
  Send,
  Maximize2,
  Settings,
  ChevronRight,
  User,
  Stethoscope,
  Pill,
  ClipboardList,
  BarChart3,
  Phone
} from "lucide-react";

interface VirtualCareIntegrationProps {
  patientName?: string;
  patientId?: string;
}

export function VirtualCareIntegration({
  patientName = "Sarah Martinez",
  patientId = "PT-2024-5847"
}: VirtualCareIntegrationProps) {
  const [activeTab, setActiveTab] = useState<"video" | "schedule" | "records" | "chat">("video");
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [inCall, setInCall] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-6 h-6 text-purple-600" />
                Embedded Virtual Care - Telehealth Integration
              </CardTitle>
              <CardDescription>
                Video consultation, scheduling, and patient records - all powered by your existing healthcare data
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                System Connected
              </Badge>
              <Badge variant="outline">Patient ID: {patientId}</Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Navigation Tabs */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "video" ? "default" : "outline"}
              onClick={() => setActiveTab("video")}
              className="flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Video Consultation
            </Button>
            <Button
              variant={activeTab === "schedule" ? "default" : "outline"}
              onClick={() => setActiveTab("schedule")}
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Appointments
            </Button>
            <Button
              variant={activeTab === "records" ? "default" : "outline"}
              onClick={() => setActiveTab("records")}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Patient Records
            </Button>
            <Button
              variant={activeTab === "chat" ? "default" : "outline"}
              onClick={() => setActiveTab("chat")}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Secure Chat
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Video Consultation Tab */}
      {activeTab === "video" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Video Interface */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Room */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-600" />
                    Virtual Consultation Room
                  </span>
                  <div className="flex items-center gap-2">
                    {inCall && (
                      <>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          15:42
                        </Badge>
                        <Badge className="bg-red-100 text-red-700 animate-pulse">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                          Recording
                        </Badge>
                      </>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Video Display Area */}
                <div className="space-y-4">
                  {/* Main Video Feed */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden aspect-video">
                    {inCall ? (
                      <>
                        {/* Simulated Video Feed */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <User className="w-24 h-24 mx-auto mb-4 opacity-50" />
                            <p className="text-lg">{patientName}</p>
                            <p className="text-sm text-gray-400">Patient Video Feed</p>
                          </div>
                        </div>
                        
                        {/* Picture-in-Picture (Physician) */}
                        <div className="absolute bottom-4 right-4 w-48 h-32 bg-gray-700 rounded-lg border-2 border-white overflow-hidden">
                          <div className="h-full flex items-center justify-center">
                            <Stethoscope className="w-12 h-12 text-white opacity-50" />
                          </div>
                        </div>

                        {/* Caretaker View (Additional PIP) */}
                        <div className="absolute bottom-4 left-4 w-40 h-28 bg-gray-700 rounded-lg border-2 border-purple-400 overflow-hidden">
                          <div className="h-full flex flex-col items-center justify-center text-white">
                            <Users className="w-8 h-8 mb-1 opacity-50" />
                            <p className="text-xs">Caretaker</p>
                          </div>
                          <div className="absolute top-1 left-1">
                            <Badge className="bg-purple-600 text-white text-xs">
                              <Users className="w-2 h-2 mr-1" />
                              Observer
                            </Badge>
                          </div>
                        </div>

                        {/* Patient Info Overlay */}
                        <div className="absolute top-4 left-4 bg-black bg-opacity-70 rounded-lg p-3 text-white">
                          <p className="text-sm font-medium">{patientName}</p>
                          <p className="text-xs text-gray-300">Age: 58 | Type 2 Diabetes</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Users className="w-3 h-3 text-purple-400" />
                            <span className="text-xs text-purple-300">+ Caretaker: Maria Rodriguez</span>
                          </div>
                        </div>

                        {/* Real-time Vitals Overlay */}
                        <div className="absolute top-4 right-4 space-y-2">
                          <div className="bg-green-600 bg-opacity-90 rounded-lg px-3 py-2 text-white text-xs">
                            <Heart className="w-3 h-3 inline mr-1" />
                            HR: 72 bpm
                          </div>
                          <div className="bg-blue-600 bg-opacity-90 rounded-lg px-3 py-2 text-white text-xs">
                            <Activity className="w-3 h-3 inline mr-1" />
                            BP: 128/82
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg mb-2">Consultation Room Ready</p>
                          <p className="text-sm">Click "Start Call" to begin video consultation</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Video Controls */}
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      variant={videoEnabled ? "default" : "destructive"}
                      size="lg"
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      className="rounded-full w-14 h-14"
                    >
                      {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                    </Button>
                    
                    <Button
                      variant={audioEnabled ? "default" : "destructive"}
                      size="lg"
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      className="rounded-full w-14 h-14"
                    >
                      {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </Button>

                    {inCall ? (
                      <Button
                        variant="destructive"
                        size="lg"
                        onClick={() => setInCall(false)}
                        className="rounded-full w-14 h-14"
                      >
                        <PhoneOff className="w-5 h-5" />
                      </Button>
                    ) : (
                      <Button
                        variant="default"
                        size="lg"
                        onClick={() => setInCall(true)}
                        className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700"
                      >
                        <Phone className="w-5 h-5" />
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full w-14 h-14"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full w-14 h-14"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full w-14 h-14"
                    >
                      <Settings className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visit Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Visit Summary & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Chief Complaint</label>
                    <textarea
                      className="w-full p-3 border rounded-lg text-sm"
                      rows={2}
                      placeholder="Patient reports increased fatigue and difficulty controlling blood glucose..."
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Assessment & Plan</label>
                    <textarea
                      className="w-full p-3 border rounded-lg text-sm"
                      rows={3}
                      placeholder="Adjust metformin dosage, recommend increased physical activity..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Prescriptions</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="Metformin 1000mg BID"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Follow-up</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="2 weeks - telehealth"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Upload to EHR
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send to Patient
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Patient Context from System */}
          <div className="space-y-4">
            {/* Call Participants */}
            <Card className="border-purple-500">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  Call Participants (3)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="font-medium">{patientName}</p>
                        <p className="text-muted-foreground">Patient</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      <Video className="w-2 h-2 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-950 rounded">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="font-medium">Maria Rodriguez</p>
                        <p className="text-muted-foreground">Caretaker (Daughter)</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      <Video className="w-2 h-2 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-medium">Dr. James Wilson</p>
                        <p className="text-muted-foreground">Physician</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      <Video className="w-2 h-2 mr-1" />
                      Active
                    </Badge>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t text-xs">
                  <p className="text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    All participants connected • Scheduled by AI Admin
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Vitals from Devices */}
            <Card className="border-blue-500">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  Live Device Vitals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>Heart Rate</span>
                    </div>
                    <span className="font-medium">72 bpm</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      <span>Blood Pressure</span>
                    </div>
                    <span className="font-medium">128/82 mmHg</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-950 rounded">
                    <div className="flex items-center gap-2">
                      <Droplet className="w-4 h-4 text-orange-500" />
                      <span>Glucose (Fasting)</span>
                    </div>
                    <span className="font-medium">112 mg/dL</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-cyan-50 dark:bg-cyan-950 rounded">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-cyan-500" />
                      <span>SpO₂</span>
                    </div>
                    <span className="font-medium">97%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-950 rounded">
                    <div className="flex items-center gap-2">
                      <Footprints className="w-4 h-4 text-green-500" />
                      <span>Steps Today</span>
                    </div>
                    <span className="font-medium">8,420</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                  <p className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    Last sync: 2 min ago (Smart Watch)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="border-purple-500">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-600" />
                  AI Clinical Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-xs">
                  <div className="p-2 bg-green-50 dark:bg-green-950 rounded border-l-4 border-green-600">
                    <p className="font-medium mb-1">✓ Glucose Control Improving</p>
                    <p className="text-muted-foreground">30-day avg: 118 mg/dL (↓12 mg/dL). Current medication regimen effective.</p>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded border-l-4 border-blue-600">
                    <p className="font-medium mb-1">Activity Trend Positive</p>
                    <p className="text-muted-foreground">Avg 8,200 steps/day (↑45% vs. last month). Metabolic risk reduced 18%.</p>
                  </div>
                  <div className="p-2 bg-yellow-50 dark:bg-yellow-950 rounded border-l-4 border-yellow-600">
                    <p className="font-medium mb-1">⚠ Sleep Quality Declining</p>
                    <p className="text-muted-foreground">Sleep score: 68/100 (↓8 pts). SpO₂ dips detected 5x/night.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Medications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Pill className="w-4 h-4 text-green-600" />
                  Active Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <div>
                      <p className="font-medium">Metformin</p>
                      <p className="text-muted-foreground">1000mg BID</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">95% adherent</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <div>
                      <p className="font-medium">Lisinopril</p>
                      <p className="text-muted-foreground">10mg QD</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">98% adherent</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <div>
                      <p className="font-medium">Atorvastatin</p>
                      <p className="text-muted-foreground">20mg QHS</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700 text-xs">82% adherent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  Recent Alerts (7 days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-orange-50 dark:bg-orange-950 rounded">
                    <p className="font-medium text-orange-700">Glucose spike detected</p>
                    <p className="text-muted-foreground">Yesterday, 8:45 PM - 245 mg/dL</p>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <p className="font-medium text-blue-700">Medication taken late</p>
                    <p className="text-muted-foreground">3 days ago - Metformin (3hr delay)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Appointments Tab */}
      {activeTab === "schedule" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar/Scheduling Interface */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Appointment Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Quick Schedule */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Appointment Type</label>
                      <select className="w-full p-2 border rounded-lg text-sm">
                        <option>Follow-up Consultation</option>
                        <option>Diabetes Management Review</option>
                        <option>Medication Adjustment</option>
                        <option>Routine Check-up</option>
                        <option>Urgent Care</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Duration</label>
                      <select className="w-full p-2 border rounded-lg text-sm">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>45 minutes</option>
                        <option>60 minutes</option>
                      </select>
                    </div>
                  </div>

                  {/* Available Slots */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Available Time Slots (This Week)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Mon, Dec 25</p>
                        <p className="text-sm font-medium">10:00 AM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Mon, Dec 25</p>
                        <p className="text-sm font-medium">2:00 PM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Tue, Dec 26</p>
                        <p className="text-sm font-medium">9:00 AM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Tue, Dec 26</p>
                        <p className="text-sm font-medium">3:30 PM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Wed, Dec 27</p>
                        <p className="text-sm font-medium">11:00 AM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Wed, Dec 27</p>
                        <p className="text-sm font-medium">1:00 PM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Thu, Dec 28</p>
                        <p className="text-sm font-medium">10:30 AM</p>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3">
                        <p className="text-xs text-muted-foreground">Thu, Dec 28</p>
                        <p className="text-sm font-medium">4:00 PM</p>
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule Appointment
                    </Button>
                    <Button variant="outline">View Full Calendar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Diabetes Management Review</p>
                        <p className="text-sm text-muted-foreground">Dr. James Wilson</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Telehealth</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Mon, Dec 25, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        10:00 AM - 10:30 AM
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        <Video className="w-3 h-3 mr-1" />
                        Join Call
                      </Button>
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm" variant="outline">Cancel</Button>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Follow-up Consultation</p>
                        <p className="text-sm text-muted-foreground">Dr. James Wilson</p>
                      </div>
                      <Badge variant="outline">In-Person</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Wed, Jan 8, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        2:00 PM - 2:30 PM
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="outline">Reschedule</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Patient Schedule Summary */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Patient Visit History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-xs">
                  <div className="p-2 bg-muted rounded">
                    <p className="font-medium">Last Visit</p>
                    <p className="text-muted-foreground">Nov 28, 2024 - Telehealth</p>
                    <p className="text-muted-foreground">Duration: 25 min</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="font-medium">Total Visits (2024)</p>
                    <p className="text-muted-foreground">12 visits (8 telehealth, 4 in-person)</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="font-medium">No-show Rate</p>
                    <p className="text-green-600">0% - Excellent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Appointment Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Time:</span>
                    <span className="font-medium">Morning (9-11 AM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Type:</span>
                    <span className="font-medium">Telehealth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reminders:</span>
                    <span className="font-medium">SMS + Email</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Patient Records Tab */}
      {activeTab === "records" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Health Analytics Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Health Analytics & Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg text-center">
                      <p className="text-2xl font-medium">7.8%</p>
                      <p className="text-xs text-muted-foreground">HbA1c (Last)</p>
                      <p className="text-xs text-green-600">↓0.6% (3 months)</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                      <p className="text-2xl font-medium">128/82</p>
                      <p className="text-xs text-muted-foreground">Avg BP (30d)</p>
                      <p className="text-xs text-green-600">↓8/4 mmHg</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                      <p className="text-2xl font-medium">8,200</p>
                      <p className="text-xs text-muted-foreground">Avg Steps</p>
                      <p className="text-xs text-green-600">↑45%</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg text-center">
                      <p className="text-2xl font-medium">-12 lbs</p>
                      <p className="text-xs text-muted-foreground">Weight (90d)</p>
                      <p className="text-xs text-green-600">BMI: 28.2</p>
                    </div>
                  </div>

                  {/* Glucose Trend Chart (Simplified) */}
                  <div className="border rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">30-Day Glucose Trend</h3>
                    <div className="h-48 flex items-end justify-around gap-1">
                      {Array.from({ length: 30 }).map((_, i) => {
                        const height = 40 + Math.random() * 60;
                        const isHigh = height > 75;
                        return (
                          <div
                            key={i}
                            className={`w-full ${isHigh ? 'bg-orange-400' : 'bg-green-400'} rounded-t`}
                            style={{ height: `${height}%` }}
                          />
                        );
                      })}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>30 days ago</span>
                      <span>Target: 70-140 mg/dL</span>
                      <span>Today</span>
                    </div>
                  </div>

                  {/* Activity Chart */}
                  <div className="border rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">7-Day Activity Summary</h3>
                    <div className="h-32 flex items-end justify-around gap-2">
                      {[6200, 7800, 8400, 7200, 9100, 8600, 8800].map((steps, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div
                            className="w-full bg-blue-400 rounded-t"
                            style={{ height: `${(steps / 10000) * 100}%` }}
                          />
                          <span className="text-xs mt-1 text-muted-foreground">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center mt-2 text-muted-foreground">Average: 8,014 steps/day</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clinical Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Clinical Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Active Diagnoses</h3>
                    <div className="space-y-1 text-xs">
                      <div className="p-2 bg-muted rounded flex justify-between items-center">
                        <span>Type 2 Diabetes Mellitus (E11.9)</span>
                        <Badge variant="outline">Primary</Badge>
                      </div>
                      <div className="p-2 bg-muted rounded flex justify-between items-center">
                        <span>Hypertension, Essential (I10)</span>
                        <Badge variant="outline">Controlled</Badge>
                      </div>
                      <div className="p-2 bg-muted rounded flex justify-between items-center">
                        <span>Hyperlipidemia (E78.5)</span>
                        <Badge variant="outline">Managed</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Recent Lab Results</h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span>HbA1c</span>
                        <span className="font-medium">7.8% (Nov 15, 2024)</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span>LDL Cholesterol</span>
                        <span className="font-medium">98 mg/dL (Nov 15, 2024)</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span>eGFR</span>
                        <span className="font-medium">78 mL/min (Nov 15, 2024)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Allergies</h3>
                    <div className="text-xs p-2 bg-red-50 dark:bg-red-950 rounded border-l-4 border-red-600">
                      <p className="font-medium">Penicillin - Severe Reaction</p>
                      <p className="text-muted-foreground">Hives, difficulty breathing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Device Integration Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  Connected Devices & Data Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                          <Activity className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Smart Watch (Apple Watch Series 9)</p>
                          <p className="text-muted-foreground">HR, Steps, Sleep, ECG</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-1" />
                        Connected
                      </Badge>
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                      <span>Last sync: 2 min ago</span>
                      <span>•</span>
                      <span>Data points: 45,230</span>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded flex items-center justify-center">
                          <Droplet className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">CGM (Dexcom G7)</p>
                          <p className="text-muted-foreground">Continuous Glucose</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                      <span>Last reading: 1 min ago</span>
                      <span>•</span>
                      <span>Current: 112 mg/dL</span>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                          <Heart className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">BP Monitor (Omron Evolv)</p>
                          <p className="text-muted-foreground">Blood Pressure</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-1" />
                        Paired
                      </Badge>
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                      <span>Last reading: 4 hours ago</span>
                      <span>•</span>
                      <span>132/84 mmHg</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Health Improvement Tracking */}
          <div className="space-y-4">
            <Card className="border-green-500">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  Health Improvement Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Diabetes Control</span>
                      <span className="text-green-600">+32%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }} />
                    </div>
                    <p className="text-muted-foreground mt-1">Target HbA1c: &lt;7.0%</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Activity Goal</span>
                      <span className="text-green-600">+45%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }} />
                    </div>
                    <p className="text-muted-foreground mt-1">Target: 10,000 steps/day</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Weight Management</span>
                      <span className="text-green-600">+28%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <p className="text-muted-foreground mt-1">Target: -18 lbs (current: -12 lbs)</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Medication Adherence</span>
                      <span className="text-green-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                    <p className="text-muted-foreground mt-1">92% adherence rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Care Plan Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950 rounded">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Achieve 8,000 steps daily</p>
                      <p className="text-muted-foreground">Completed 24/30 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Reduce HbA1c to &lt;7.0%</p>
                      <p className="text-muted-foreground">In progress (7.8% → 7.0%)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950 rounded">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Take medications as prescribed</p>
                      <p className="text-muted-foreground">92% adherence achieved</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Recent Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Lab Results - Nov 15</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Visit Summary - Nov 28</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Care Plan - Dec 2024</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Secure Chat Tab */}
      {activeTab === "chat" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Secure Patient Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Hi Dr. Wilson, I've been experiencing some dizziness in the mornings. Should I be concerned?</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 3:45 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-sm">Thanks for reaching out. I see your morning blood pressure readings have been slightly low. Are you taking your BP medication before breakfast?</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">Yesterday, 4:12 PM</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Yes, I take it right when I wake up, around 7 AM.</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 5:20 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-sm">Let's try taking it after breakfast instead. Your blood sugar might be dropping overnight. I'm scheduling a quick telehealth check-in for Monday to monitor this. In the meantime, eat something light before standing up in the morning.</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">Yesterday, 6:05 PM</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Thank you! I'll try that. Looking forward to Monday's call.</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 6:42 PM</p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type a secure message..."
                      className="flex-1 p-3 border rounded-lg"
                    />
                    <Button className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    🔒 HIPAA-compliant encrypted messaging
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Share Lab Results
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Pill className="w-4 h-4 mr-2" />
                  Update Prescription
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Video className="w-4 h-4 mr-2" />
                  Start Video Call
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Chat History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-muted rounded">
                    <p className="font-medium">Dizziness concern</p>
                    <p className="text-muted-foreground">Yesterday • 5 messages</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="font-medium">Medication refill request</p>
                    <p className="text-muted-foreground">Dec 18 • 3 messages</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="font-medium">Lab results question</p>
                    <p className="text-muted-foreground">Nov 28 • 7 messages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
