import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Video,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Bell,
  TrendingUp,
  FileText,
  Settings,
  Search,
  Filter,
  Send,
  Eye,
  Edit,
  X,
  CalendarCheck,
  Phone,
  MessageSquare,
  BarChart3,
  UserCheck,
  UserX,
  Activity,
  UserPlus,
  Shield,
  Lock,
  Share2,
  Paperclip
} from "lucide-react";

export function AIAdminVirtualCare() {
  const [activeTab, setActiveTab] = useState<"scheduling" | "oversight" | "analytics" | "alerts" | "chat">("scheduling");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [chatMessage, setChatMessage] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<string | null>("dr-wilson-office");

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-6 h-6 text-purple-600" />
                Virtual Care Administration - AI Admin Control Center
              </CardTitle>
              <CardDescription>
                Centralized scheduling, oversight, and monitoring of all telehealth appointments
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                System Active
              </Badge>
              <Badge variant="outline">234 Active Patients</Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* System-wide Alert Banner */}
      <Card className="border-orange-500 bg-orange-50 dark:bg-orange-950">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-orange-600 mt-0.5 animate-pulse" />
            <div className="flex-1">
              <p className="font-medium text-sm mb-1">System Alerts: 8 Items Require Attention</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• 3 appointment confirmation requests pending</p>
                <p>• 2 patient reschedule requests awaiting approval</p>
                <p>• 2 physician schedule conflicts detected</p>
                <p>• 1 urgent appointment request (within 24 hours)</p>
              </div>
              <Button size="sm" className="mt-2">Review All Alerts</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Tabs */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "scheduling" ? "default" : "outline"}
              onClick={() => setActiveTab("scheduling")}
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Appointment Scheduling
              <Badge className="ml-1 bg-red-600 text-white text-xs">5</Badge>
            </Button>
            <Button
              variant={activeTab === "oversight" ? "default" : "outline"}
              onClick={() => setActiveTab("oversight")}
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Live Oversight
              <Badge className="ml-1 bg-blue-600 text-white text-xs">3 Active</Badge>
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "outline"}
              onClick={() => setActiveTab("analytics")}
              className="flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </Button>
            <Button
              variant={activeTab === "alerts" ? "default" : "outline"}
              onClick={() => setActiveTab("alerts")}
              className="flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4" />
              Alert System
            </Button>
            <Button
              variant={activeTab === "chat" ? "default" : "outline"}
              onClick={() => setActiveTab("chat")}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Admin-Physician Chat
              <Badge className="ml-1 bg-green-600 text-white text-xs">
                <Lock className="w-2 h-2 mr-1" />
                Encrypted
              </Badge>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scheduling Tab */}
      {activeTab === "scheduling" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Pending Requests */}
            <Card className="border-yellow-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    Pending Appointment Requests (5)
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Filter className="w-4 h-4 mr-1" />
                      Filter
                    </Button>
                    <select className="text-sm p-2 border rounded" value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                      <option value="all">All Requests</option>
                      <option value="urgent">Urgent Only</option>
                      <option value="routine">Routine</option>
                      <option value="follow-up">Follow-ups</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Urgent Request */}
                  <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">Sarah Martinez (PT-2024-5847)</p>
                          <Badge variant="destructive">URGENT</Badge>
                          <Badge variant="outline" className="text-xs">Type 2 Diabetes</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Request submitted: Dec 23, 2024 - 9:45 AM</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div className="p-2 bg-background rounded">
                        <p className="text-xs text-muted-foreground">Requested Provider</p>
                        <p className="text-sm font-medium">Dr. James Wilson - Endocrinology</p>
                      </div>
                      <div className="p-2 bg-background rounded">
                        <p className="text-xs text-muted-foreground">Requested Format</p>
                        <p className="text-sm font-medium">Telehealth (Video)</p>
                      </div>
                      <div className="p-2 bg-background rounded">
                        <p className="text-xs text-muted-foreground">Appointment Type</p>
                        <p className="text-sm font-medium">Diabetes Management Review</p>
                      </div>
                      <div className="p-2 bg-background rounded">
                        <p className="text-xs text-muted-foreground">Preferred Time</p>
                        <p className="text-sm font-medium">Dec 25, 2024 - 10:00 AM</p>
                      </div>
                    </div>

                    <div className="p-3 bg-background rounded mb-3">
                      <p className="text-xs font-medium mb-1">Patient Reason:</p>
                      <p className="text-sm text-muted-foreground">"Need to discuss recent blood glucose readings which have been elevated (145-160 mg/dL fasting). Also experiencing increased fatigue."</p>
                    </div>

                    <div className="p-3 bg-purple-100 dark:bg-purple-950 rounded mb-3">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-xs font-medium">Caretaker Participation:</p>
                        <Badge variant="outline" className="text-xs">Available</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-background rounded">
                          <div className="flex items-center gap-2">
                            <UserPlus className="w-4 h-4 text-purple-600" />
                            <div className="text-sm">
                              <p className="font-medium">Maria Rodriguez</p>
                              <p className="text-xs text-muted-foreground">Primary Caretaker • Daughter</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="include-caretaker" className="rounded" defaultChecked />
                            <label htmlFor="include-caretaker" className="text-xs">Include in call</label>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 inline mr-1 text-green-600" />
                          Caretaker will receive separate video link and can join as observer/participant
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded mb-3">
                      <p className="text-xs font-medium mb-1">AI Recommendation:</p>
                      <div className="text-sm space-y-1">
                        <p>✓ Patient priority: HIGH (recent vitals show concerning trend)</p>
                        <p>✓ Dr. Wilson has availability: Dec 25, 10:00-10:30 AM</p>
                        <p>✓ Patient preference alignment: 100%</p>
                        <p>✓ Caretaker available for multi-party call</p>
                        <p>✓ Recommended action: APPROVE with priority scheduling + caretaker inclusion</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Approve & Schedule
                      </Button>
                      <Button variant="outline">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Manage Participants
                      </Button>
                      <Button variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Modify Time
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Request More Info
                      </Button>
                      <Button variant="destructive">
                        <X className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  </div>

                  {/* Regular Request */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">John Doe (PT-2024-3421)</p>
                          <Badge variant="secondary">Routine</Badge>
                          <Badge variant="outline" className="text-xs">Hypertension</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Request submitted: Dec 22, 2024 - 2:15 PM</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 text-xs">
                      <div className="p-2 bg-muted rounded">
                        <p className="text-muted-foreground">Provider</p>
                        <p className="font-medium">Dr. Sarah Chen</p>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <p className="text-muted-foreground">Format</p>
                        <p className="font-medium">In-Person</p>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <p className="text-muted-foreground">Type</p>
                        <p className="font-medium">Follow-up</p>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <p className="text-muted-foreground">Time</p>
                        <p className="font-medium">Jan 5, 2:00 PM</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>

                  {/* Reschedule Request */}
                  <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">Mary Smith (PT-2024-4782)</p>
                          <Badge className="bg-orange-100 text-orange-700">Reschedule Request</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Request submitted: Dec 23, 2024 - 11:20 AM</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-sm">
                      <div className="p-2 bg-background rounded">
                        <p className="text-xs text-muted-foreground">Current Appointment</p>
                        <p className="font-medium">Dec 26, 2024 - 9:00 AM</p>
                        <p className="text-xs">Dr. Michael Brown - Cardiology</p>
                      </div>
                      <div className="p-2 bg-background rounded">
                        <p className="text-xs text-muted-foreground">Requested New Time</p>
                        <p className="font-medium">Dec 27, 2024 - 2:00 PM</p>
                        <p className="text-xs">Same provider</p>
                      </div>
                    </div>

                    <div className="p-2 bg-background rounded mb-3 text-sm">
                      <p className="text-xs font-medium mb-1">Reason for Reschedule:</p>
                      <p className="text-muted-foreground">"Family emergency - need to travel out of state for 2 days"</p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Approve Reschedule
                      </Button>
                      <Button size="sm" variant="outline">Suggest Alternative</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confirmed Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-green-600" />
                  Confirmed Upcoming Appointments (Next 7 Days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-6 gap-2 p-3 bg-muted rounded font-medium text-xs">
                    <div>Patient</div>
                    <div>Provider</div>
                    <div>Date & Time</div>
                    <div>Format</div>
                    <div>Participants</div>
                    <div>Status</div>
                  </div>

                  <div className="grid grid-cols-6 gap-2 p-3 border rounded text-sm items-center">
                    <div>
                      <p className="font-medium">Sarah Martinez</p>
                      <p className="text-xs text-muted-foreground">PT-2024-5847</p>
                    </div>
                    <div>
                      <p>Dr. James Wilson</p>
                      <p className="text-xs text-muted-foreground">Endocrinology</p>
                    </div>
                    <div>
                      <p>Dec 25, 2024</p>
                      <p className="text-xs text-muted-foreground">10:00-10:30 AM</p>
                    </div>
                    <div>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Telehealth</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        3
                      </Badge>
                      <div className="group relative">
                        <Eye className="w-3 h-3 text-muted-foreground cursor-pointer" />
                        <div className="hidden group-hover:block absolute z-10 bg-popover border rounded p-2 text-xs whitespace-nowrap -left-20 top-5">
                          <p>• Patient: Sarah Martinez</p>
                          <p>• Physician: Dr. Wilson</p>
                          <p>• Caretaker: Maria Rodriguez</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Confirmed
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-2 p-3 border rounded text-sm items-center">
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">PT-2024-3421</p>
                    </div>
                    <div>
                      <p>Dr. Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">Cardiology</p>
                    </div>
                    <div>
                      <p>Dec 26, 2024</p>
                      <p className="text-xs text-muted-foreground">9:00-9:30 AM</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">In-Person</Badge>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        2
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Confirmed
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-2 p-3 border rounded text-sm items-center bg-yellow-50 dark:bg-yellow-950">
                    <div>
                      <p className="font-medium">Robert Johnson</p>
                      <p className="text-xs text-muted-foreground">PT-2024-6123</p>
                    </div>
                    <div>
                      <p>Dr. Michael Brown</p>
                      <p className="text-xs text-muted-foreground">Primary Care</p>
                    </div>
                    <div>
                      <p>Dec 27, 2024</p>
                      <p className="text-xs text-muted-foreground">11:00-11:45 AM</p>
                    </div>
                    <div>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Telehealth</Badge>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        4
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Awaiting Patient
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
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
                  <span className="text-muted-foreground">Pending Requests:</span>
                  <Badge variant="destructive">5</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Today's Appointments:</span>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">This Week:</span>
                  <span className="font-medium">87</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Confirmed:</span>
                  <span className="text-green-600">72 (83%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Awaiting Confirmation:</span>
                  <span className="text-yellow-600">15 (17%)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Provider Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                  <div>
                    <p className="font-medium">Dr. James Wilson</p>
                    <p className="text-muted-foreground">Endocrinology</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                  <div>
                    <p className="font-medium">Dr. Sarah Chen</p>
                    <p className="text-muted-foreground">Cardiology</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-950 rounded">
                  <div>
                    <p className="font-medium">Dr. Michael Brown</p>
                    <p className="text-muted-foreground">Primary Care</p>
                  </div>
                  <Badge variant="destructive" className="text-xs">Booked</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Settings className="w-4 h-4 text-blue-600" />
                  Automated Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Auto-reminders: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Conflict detection: Enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Priority routing: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Multi-role alerts: Enabled</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Live Oversight Tab */}
      {activeTab === "oversight" && (
        <div className="space-y-4">
          <Card className="border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Active Video Consultations (3)
              </CardTitle>
              <CardDescription>Real-time monitoring of ongoing telehealth sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">Sarah Martinez ↔ Dr. James Wilson</p>
                        <Badge className="bg-green-100 text-green-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-1 animate-pulse" />
                          In Progress
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Diabetes Management Review • Started: 10:02 AM</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="p-2 bg-background rounded text-center">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-lg font-medium">12:34</p>
                    </div>
                    <div className="p-2 bg-background rounded text-center">
                      <p className="text-xs text-muted-foreground">Connection</p>
                      <p className="text-sm font-medium text-green-600">Excellent</p>
                    </div>
                    <div className="p-2 bg-background rounded text-center">
                      <p className="text-xs text-muted-foreground">Audio/Video</p>
                      <p className="text-sm font-medium">Both Active</p>
                    </div>
                    <div className="p-2 bg-background rounded text-center">
                      <p className="text-xs text-muted-foreground">Recording</p>
                      <p className="text-sm font-medium text-red-600">Active</p>
                    </div>
                  </div>

                  <div className="p-3 bg-background rounded mb-3">
                    <p className="text-xs font-medium mb-2">Live Patient Vitals:</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span>HR: 72 bpm</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span>BP: 128/82</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-orange-600 rounded-full" />
                        <span>Glucose: 112 mg/dL</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-3 h-3 mr-1" />
                      Monitor Session
                    </Button>
                    <Button size="sm" variant="outline">View Patient Chart</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">John Doe ↔ Dr. Sarah Chen</p>
                        <Badge className="bg-green-100 text-green-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-1 animate-pulse" />
                          In Progress
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Cardiology Follow-up • Started: 10:15 AM</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs text-center">
                    <div className="p-2 bg-muted rounded">
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">8:12</p>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <p className="text-muted-foreground">Connection</p>
                      <p className="font-medium text-green-600">Good</p>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium">Normal</p>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <p className="text-muted-foreground">Recording</p>
                      <p className="font-medium text-red-600">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                Upcoming Sessions (Next 2 Hours)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Robert Johnson ↔ Dr. Michael Brown</p>
                    <p className="text-xs text-muted-foreground">Starts in 18 minutes (11:00 AM)</p>
                  </div>
                  <Badge variant="outline">Ready</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Lisa Anderson ↔ Dr. James Wilson</p>
                    <p className="text-xs text-muted-foreground">Starts in 45 minutes (11:30 AM)</p>
                  </div>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-medium mb-1">1,247</p>
              <p className="text-xs text-green-600">+12% vs last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Telehealth Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-medium mb-1">892</p>
              <p className="text-xs text-muted-foreground">71.5% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">No-show Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-medium mb-1">2.3%</p>
              <p className="text-xs text-green-600">↓0.8% improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Avg Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-medium mb-1">23 min</p>
              <p className="text-xs text-muted-foreground">Within target range</p>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Appointment Trends (Last 30 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-end justify-around gap-1">
                {Array.from({ length: 30 }).map((_, i) => {
                  const height = 30 + Math.random() * 70;
                  return (
                    <div
                      key={i}
                      className="w-full bg-blue-400 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Alerts System Tab */}
      {activeTab === "alerts" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-orange-600" />
                Multi-Role Alert Configuration
              </CardTitle>
              <CardDescription>Configure automated alerts sent to all system roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">Appointment Confirmation Alerts</p>
                      <p className="text-sm text-muted-foreground">Sent to: Patient, Physician, AI Admin</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>24 hours before appointment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>1 hour before appointment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Immediate confirmation upon scheduling</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">Reschedule Request Alerts</p>
                      <p className="text-sm text-muted-foreground">Sent to: AI Admin, Physician, Patient</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Immediate alert to AI Admin for approval</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Notification to physician of schedule change</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Confirmation to patient upon approval</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">No-show Alerts</p>
                      <p className="text-sm text-muted-foreground">Sent to: AI Admin, Physician, Caretaker</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Alert if patient doesn't join within 10 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Automated follow-up scheduling suggestion</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">Urgent Appointment Request Alerts</p>
                      <p className="text-sm text-muted-foreground">Sent to: AI Admin, Physician, Nurse</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span>Immediate push notification to all roles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span>Priority escalation if not addressed within 30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Alert Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                  <div>
                    <p className="font-medium">Appointment Confirmed</p>
                    <p className="text-muted-foreground">Sarah Martinez • Dec 25, 10:00 AM</p>
                  </div>
                  <span className="text-muted-foreground">2 min ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <div>
                    <p className="font-medium">24hr Reminder Sent</p>
                    <p className="text-muted-foreground">All parties notified</p>
                  </div>
                  <span className="text-muted-foreground">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-950 rounded">
                  <div>
                    <p className="font-medium">Reschedule Request</p>
                    <p className="text-muted-foreground">Mary Smith • Awaiting approval</p>
                  </div>
                  <span className="text-muted-foreground">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Encrypted Admin-Physician Chat Tab */}
      {activeTab === "chat" && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  Physician Offices
                </CardTitle>
                <CardDescription className="text-xs">
                  <Lock className="w-3 h-3 inline mr-1" />
                  End-to-end encrypted
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer ${selectedConversation === 'dr-wilson-office' ? 'bg-blue-100 dark:bg-blue-950 border border-blue-500' : 'bg-muted hover:bg-muted/80'}`}
                    onClick={() => setSelectedConversation('dr-wilson-office')}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium">Dr. Wilson's Office</p>
                      <Badge className="bg-green-600 text-white text-xs">2</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Endocrinology</p>
                    <p className="text-xs text-muted-foreground mt-1">Last: 15 min ago</p>
                  </div>

                  <div 
                    className={`p-3 rounded-lg cursor-pointer ${selectedConversation === 'dr-chen-office' ? 'bg-blue-100 dark:bg-blue-950 border border-blue-500' : 'bg-muted hover:bg-muted/80'}`}
                    onClick={() => setSelectedConversation('dr-chen-office')}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium">Dr. Chen's Office</p>
                      <Badge variant="outline" className="text-xs">0</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Cardiology</p>
                    <p className="text-xs text-muted-foreground mt-1">Last: 2 hours ago</p>
                  </div>

                  <div 
                    className={`p-3 rounded-lg cursor-pointer ${selectedConversation === 'dr-brown-office' ? 'bg-blue-100 dark:bg-blue-950 border border-blue-500' : 'bg-muted hover:bg-muted/80'}`}
                    onClick={() => setSelectedConversation('dr-brown-office')}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium">Dr. Brown's Office</p>
                      <Badge variant="outline" className="text-xs">0</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Primary Care</p>
                    <p className="text-xs text-muted-foreground mt-1">Last: Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  Security Status
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>HIPAA compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Audit logging enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Message retention: 7 years</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[700px] flex flex-col border-2 border-green-500">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      Dr. Wilson's Office - Endocrinology
                    </CardTitle>
                    <CardDescription className="text-xs mt-1">
                      <Lock className="w-3 h-3 inline mr-1" />
                      Encrypted Administrative Communication
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                      Online
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-4">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {/* Admin Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-sm">Need to confirm availability for urgent appointment request from Sarah Martinez (PT-2024-5847). Patient has elevated glucose readings. Requesting Dec 25, 10:00 AM slot.</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1">
                        <p className="text-xs text-muted-foreground">AI Admin</p>
                        <p className="text-xs text-muted-foreground">Today, 9:50 AM</p>
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Physician Office Response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Dr. Wilson confirms availability for Dec 25, 10:00 AM. Will allocate 30 minutes. Please include latest HbA1c and CGM data in patient chart before appointment.</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-muted-foreground">Office Manager - Dr. Wilson</p>
                        <p className="text-xs text-muted-foreground">Today, 9:55 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Admin Message with Health Records */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-sm mb-2">Appointment scheduled and confirmed. Patient notified. Health records attached:</p>
                        <div className="space-y-1 text-xs bg-blue-700 rounded p-2">
                          <div className="flex items-center gap-2">
                            <FileText className="w-3 h-3" />
                            <span>HbA1c_Results_Nov2024.pdf</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="w-3 h-3" />
                            <span>CGM_Data_30day_Summary.pdf</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="w-3 h-3" />
                            <span>Medication_History.pdf</span>
                          </div>
                        </div>
                        <p className="text-xs mt-2 opacity-80">Note: Caretaker (Maria Rodriguez) will join the video call</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1">
                        <p className="text-xs text-muted-foreground">AI Admin</p>
                        <p className="text-xs text-muted-foreground">Today, 10:05 AM</p>
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Physician Office Acknowledgment */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Records received and added to chart. Dr. Wilson has reviewed pre-appointment data. Noted caretaker participation.</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-muted-foreground">Office Manager - Dr. Wilson</p>
                        <p className="text-xs text-muted-foreground">Today, 10:15 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* System Message */}
                  <div className="flex justify-center">
                    <div className="bg-purple-100 dark:bg-purple-950 border border-purple-300 dark:border-purple-800 rounded-lg px-4 py-2 text-xs text-center">
                      <Shield className="w-3 h-3 inline mr-1" />
                      All messages are encrypted and archived for compliance
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-3 flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    Share Health Record
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    Request Availability
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    Discuss Patient Case
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <Paperclip className="w-3 h-3 mr-1" />
                    Attach File
                  </Button>
                </div>

                {/* Message Input */}
                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    <textarea
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type encrypted message to physician office..."
                      className="flex-1 p-3 border rounded-lg text-sm resize-none"
                      rows={3}
                    />
                    <div className="flex flex-col gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Send className="w-4 h-4" />
                      </Button>
                      <Button variant="outline">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">
                      <Lock className="w-3 h-3 inline mr-1 text-green-600" />
                      Messages are encrypted end-to-end and HIPAA compliant
                    </p>
                    <Badge variant="outline" className="text-xs">
                      <Shield className="w-3 h-3 mr-1 text-green-600" />
                      Secure Channel
                    </Badge>
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
