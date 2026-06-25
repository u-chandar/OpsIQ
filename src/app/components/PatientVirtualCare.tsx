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
  CheckCircle2,
  Clock,
  User,
  Stethoscope,
  Phone,
  Bell,
  AlertCircle,
  Download,
  Share2,
  Settings,
  Maximize2,
  Send,
  CalendarCheck,
  X,
  CheckCheck
} from "lucide-react";

interface PatientVirtualCareProps {
  patientName?: string;
  patientId?: string;
}

export function PatientVirtualCare({
  patientName = "Sarah Martinez",
  patientId = "PT-2024-5847"
}: PatientVirtualCareProps) {
  const [activeTab, setActiveTab] = useState<"video" | "schedule" | "messages" | "records">("schedule");
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
                Virtual Care - Telehealth
              </CardTitle>
              <CardDescription>
                Connect with your healthcare team from anywhere
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                Online
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Alert Notifications */}
      <Card className="border-blue-500 bg-blue-50 dark:bg-blue-950">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-sm mb-1">Upcoming Appointment Reminder</p>
              <p className="text-sm text-muted-foreground mb-2">
                Diabetes Management Review with Dr. James Wilson
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Monday, Dec 25, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  10:00 AM - 10:30 AM
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <CheckCheck className="w-3 h-3 mr-1" />
                  Confirm Attendance
                </Button>
                <Button size="sm" variant="outline">
                  Reschedule
                </Button>
              </div>
            </div>
            <Button size="sm" variant="ghost">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Tabs */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "schedule" ? "default" : "outline"}
              onClick={() => setActiveTab("schedule")}
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              My Appointments
            </Button>
            <Button
              variant={activeTab === "video" ? "default" : "outline"}
              onClick={() => setActiveTab("video")}
              className="flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Video Call
            </Button>
            <Button
              variant={activeTab === "messages" ? "default" : "outline"}
              onClick={() => setActiveTab("messages")}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Messages
              <Badge className="ml-1 bg-red-600 text-white text-xs">2</Badge>
            </Button>
            <Button
              variant={activeTab === "records" ? "default" : "outline"}
              onClick={() => setActiveTab("records")}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Visit History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Tab */}
      {activeTab === "schedule" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-green-600" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Diabetes Management Review</p>
                        <p className="text-sm text-muted-foreground">Dr. James Wilson - Endocrinology</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Telehealth</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Monday, Dec 25, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        10:00 AM - 10:30 AM (30 min)
                      </span>
                    </div>
                    <div className="p-3 bg-background rounded-lg mb-3">
                      <p className="text-sm font-medium mb-1">Appointment Purpose:</p>
                      <p className="text-sm text-muted-foreground">Follow-up on recent HbA1c results and medication adjustment review</p>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-950 rounded-lg mb-3">
                      <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                        <CheckCircle2 className="w-4 h-4 inline mr-1" />
                        Confirmed by AI Admin
                      </p>
                      <p className="text-xs text-muted-foreground">Scheduled by: Admin System • Nov 28, 2024</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                        <Video className="w-4 h-4" />
                        Join Video Call
                      </Button>
                      <Button variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Reschedule
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message Doctor
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Routine Physical Exam</p>
                        <p className="text-sm text-muted-foreground">Dr. James Wilson - Primary Care</p>
                      </div>
                      <Badge variant="outline">In-Person</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Wednesday, Jan 8, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        2:00 PM - 3:00 PM (60 min)
                      </span>
                    </div>
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-950 rounded-lg mb-3">
                      <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-1">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Pending Confirmation
                      </p>
                      <p className="text-xs text-muted-foreground">Awaiting physician availability confirmation</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">View Details</Button>
                      <Button variant="outline">Cancel Request</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Request New Appointment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Request New Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Provider</label>
                    <select className="w-full p-2 border rounded-lg text-sm">
                      <option>Dr. James Wilson - Endocrinology</option>
                      <option>Dr. Sarah Chen - Cardiology</option>
                      <option>Dr. Michael Brown - Primary Care</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Appointment Type</label>
                    <select className="w-full p-2 border rounded-lg text-sm">
                      <option>Follow-up Visit</option>
                      <option>New Problem</option>
                      <option>Medication Review</option>
                      <option>Lab Results Discussion</option>
                      <option>Urgent Care</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Visit Format</label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Video className="w-4 h-4 mr-2" />
                        Telehealth
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <User className="w-4 h-4 mr-2" />
                        In-Person
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Reason for Visit</label>
                    <textarea
                      className="w-full p-2 border rounded-lg text-sm"
                      rows={3}
                      placeholder="Please describe your symptoms or reason for visit..."
                    />
                  </div>
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Submit Appointment Request
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your request will be reviewed by AI Admin and confirmed within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Visits (2024):</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Telehealth Visits:</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">In-Person Visits:</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Visit:</span>
                  <span className="font-medium">Nov 28, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Appointment:</span>
                  <span className="font-medium text-blue-600">Dec 25, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Your Care Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium">Dr. James Wilson</p>
                    <p className="text-xs text-muted-foreground">Endocrinologist</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium">Nurse Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Care Coordinator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Bell className="w-4 h-4 text-blue-600" />
                  Appointment Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Email reminders: Enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>SMS reminders: Enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>App notifications: Enabled</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  You'll receive reminders 24 hours and 1 hour before appointments
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Video Call Tab */}
      {activeTab === "video" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-600" />
                    Video Consultation Room
                  </span>
                  {inCall && (
                    <Badge className="bg-red-100 text-red-700 animate-pulse">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                      In Call
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Video Display */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden aspect-video">
                    {inCall ? (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Stethoscope className="w-24 h-24 mx-auto mb-4 opacity-50" />
                            <p className="text-lg">Dr. James Wilson</p>
                            <p className="text-sm text-gray-400">Endocrinologist</p>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-4 right-4 w-48 h-32 bg-gray-700 rounded-lg border-2 border-white overflow-hidden">
                          <div className="h-full flex items-center justify-center">
                            <User className="w-12 h-12 text-white opacity-50" />
                          </div>
                        </div>

                        <div className="absolute top-4 left-4 bg-black bg-opacity-70 rounded-lg p-3 text-white">
                          <p className="text-sm font-medium">Dr. James Wilson</p>
                          <p className="text-xs text-gray-300">Endocrinology</p>
                        </div>

                        <div className="absolute top-4 right-4">
                          <div className="bg-green-600 bg-opacity-90 rounded-lg px-3 py-2 text-white text-xs">
                            <Clock className="w-3 h-3 inline mr-1" />
                            10:42
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg mb-2">Waiting Room</p>
                          <p className="text-sm">Your appointment will start at 10:00 AM</p>
                          <p className="text-sm">Please wait for your doctor to join</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Controls */}
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
                      <Settings className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Today's Visit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div>
                  <p className="text-muted-foreground">Provider:</p>
                  <p className="font-medium">Dr. James Wilson</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Appointment Type:</p>
                  <p className="font-medium">Diabetes Management Review</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Time:</p>
                  <p className="font-medium">10:00 AM - 10:30 AM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  Your Current Vitals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-muted rounded">
                  <span>Heart Rate:</span>
                  <span className="font-medium">72 bpm</span>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <span>Blood Pressure:</span>
                  <span className="font-medium">128/82 mmHg</span>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <span>Glucose:</span>
                  <span className="font-medium">112 mg/dL</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Your doctor can see these vitals during the visit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === "messages" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Messages with Dr. James Wilson
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  <div className="flex gap-2 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-sm">Hi Dr. Wilson, I've been experiencing some dizziness in the mornings. Should I be concerned?</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">Yesterday, 3:45 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Thanks for reaching out. I see your morning blood pressure readings have been slightly low. Are you taking your BP medication before breakfast?</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 4:12 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-sm">Yes, I take it right when I wake up, around 7 AM.</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">Yesterday, 5:20 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Let's try taking it after breakfast instead. Your blood sugar might be dropping overnight. I'm scheduling a quick telehealth check-in for Monday to monitor this. In the meantime, eat something light before standing up in the morning.</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 6:05 PM</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 p-3 border rounded-lg"
                    />
                    <Button>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    🔒 Secure HIPAA-compliant messaging
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Recent Conversations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded border-l-4 border-blue-500">
                  <p className="font-medium">Dr. James Wilson</p>
                  <p className="text-muted-foreground">Dizziness concern</p>
                  <p className="text-muted-foreground">2 new messages</p>
                </div>
                <div className="p-2 bg-muted rounded">
                  <p className="font-medium">Nurse Emily Rodriguez</p>
                  <p className="text-muted-foreground">Lab results ready</p>
                  <p className="text-muted-foreground">Dec 18</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Visit History Tab */}
      {activeTab === "records" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Visit History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Diabetes Management Review</p>
                        <p className="text-sm text-muted-foreground">Dr. James Wilson</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Telehealth</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Nov 28, 2024 • 25 minutes</p>
                    <div className="p-2 bg-muted rounded text-sm">
                      <p className="font-medium mb-1">Visit Summary:</p>
                      <p className="text-muted-foreground">Patient showing improvement with current medication regimen. HbA1c decreased from 8.2% to 7.8%. Continue current medications. Follow-up in 4 weeks.</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        <FileText className="w-3 h-3 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Routine Follow-up</p>
                        <p className="text-sm text-muted-foreground">Dr. James Wilson</p>
                      </div>
                      <Badge variant="outline">In-Person</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Oct 15, 2024 • 45 minutes</p>
                    <div className="p-2 bg-muted rounded text-sm">
                      <p className="font-medium mb-1">Visit Summary:</p>
                      <p className="text-muted-foreground">Comprehensive exam completed. Blood work ordered. Patient educated on diet modifications and increased physical activity.</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        <FileText className="w-3 h-3 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">2024 Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Visits:</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Telehealth:</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">In-Person:</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">No-shows:</span>
                  <span className="font-medium text-green-600">0</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
