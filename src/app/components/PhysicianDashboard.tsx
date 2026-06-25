import { useState } from "react";
import { Calendar, FileText, TrendingUp, Users, Clock, Activity, Pill, AlertCircle, MapPin, Smartphone, Dumbbell, Trophy, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LocationTracking } from "./LocationTracking";
import { DeviceHealth } from "./DeviceHealth";
import { VirtualCareIntegration } from "./VirtualCareIntegration";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

export function PhysicianDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const appointments = [
    { time: "9:00 AM", patient: "John Doe", type: "Follow-up", status: "completed" },
    { time: "10:30 AM", patient: "Mary Smith", type: "Consultation", status: "completed" },
    { time: "2:00 PM", patient: "Robert Johnson", type: "Check-up", status: "upcoming" },
    { time: "3:30 PM", patient: "Sarah Williams", type: "Review", status: "upcoming" }
  ];

  const patientList = [
    { 
      name: "John Doe", 
      age: 68, 
      condition: "Hypertension, Visual Impairment", 
      lastVisit: "Oct 10, 2025",
      status: "stable",
      priority: "normal"
    },
    { 
      name: "Mary Smith", 
      age: 72, 
      condition: "Type 2 Diabetes", 
      lastVisit: "Oct 12, 2025",
      status: "monitoring",
      priority: "high"
    },
    { 
      name: "Robert Johnson", 
      age: 65, 
      condition: "Cardiac Arrhythmia", 
      lastVisit: "Oct 8, 2025",
      status: "stable",
      priority: "normal"
    }
  ];

  const vitalTrends = [
    { date: "Oct 8", heartRate: 68, bp: 118, glucose: 95 },
    { date: "Oct 9", heartRate: 72, bp: 120, glucose: 98 },
    { date: "Oct 10", heartRate: 70, bp: 122, glucose: 102 },
    { date: "Oct 11", heartRate: 75, bp: 125, glucose: 105 },
    { date: "Oct 12", heartRate: 72, bp: 120, glucose: 100 },
    { date: "Oct 13", heartRate: 71, bp: 119, glucose: 97 },
    { date: "Today", heartRate: 72, bp: 120, glucose: 98 }
  ];

  const criticalAlerts = [
    { patient: "Mary Smith", alert: "Blood glucose elevated (145 mg/dL)", time: "15 min ago", severity: "high" },
    { patient: "Robert Johnson", alert: "Missed medication - Metoprolol", time: "2 hours ago", severity: "medium" }
  ];

  const recentNotes = [
    { patient: "John Doe", note: "Patient showing improvement with new medication dosage", date: "Oct 13, 2025" },
    { patient: "Mary Smith", note: "Recommend dietary consultation for glucose control", date: "Oct 12, 2025" }
  ];

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Navilli" className="h-10 w-auto" />
          <div>
            <h1>Physician Dashboard</h1>
            <p className="text-muted-foreground mt-1">Dr. Sarah Johnson - Cardiology</p>
          </div>
        </div>
        <Badge variant="secondary" className="h-8">
          <Users className="w-4 h-4 mr-1" />
          12 Patients
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">
            <Activity className="w-4 h-4 mr-2" />
            Medical
          </TabsTrigger>
          <TabsTrigger value="virtualcare">
            <Video className="w-4 h-4 mr-2" />
            Virtual Care
          </TabsTrigger>
          <TabsTrigger value="location">
            <MapPin className="w-4 h-4 mr-2" />
            Tracking
          </TabsTrigger>
          <TabsTrigger value="devices">
            <Smartphone className="w-4 h-4 mr-2" />
            Devices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-0">{/* Original content */}

      {/* Critical Alerts */}
      {criticalAlerts.length > 0 && (
        <Card className="border-red-500 bg-red-50 dark:bg-red-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5" />
              Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {criticalAlerts.map((alert, index) => (
              <div key={index} className="flex items-start justify-between p-3 bg-background rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p>{alert.patient}</p>
                    <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                      {alert.severity === "high" ? "High" : "Medium"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.alert}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
                <Button size="sm">Review</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Schedule
          </CardTitle>
          <CardDescription>Tuesday, October 14, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {appointments.map((apt, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  apt.status === "completed" 
                    ? "bg-muted" 
                    : "bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-center min-w-[60px]">
                    <p className="text-sm">{apt.time}</p>
                  </div>
                  <div>
                    <p>{apt.patient}</p>
                    <p className="text-sm text-muted-foreground">{apt.type}</p>
                  </div>
                </div>
                <Badge variant={apt.status === "completed" ? "secondary" : "default"}>
                  {apt.status === "completed" ? "Completed" : "Upcoming"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Patient Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Patient Overview
          </CardTitle>
          <CardDescription>Active patients under your care</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientList.map((patient, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div>
                      <p>{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.age} years</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{patient.condition}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last: {patient.lastVisit}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge variant={patient.priority === "high" ? "destructive" : "secondary"}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View Chart
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Vital Signs Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Patient Vital Trends - John Doe
          </CardTitle>
          <CardDescription>7-day overview</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm mb-2">Heart Rate (bpm)</p>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={vitalTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="date" style={{ fontSize: '12px' }} />
                <YAxis domain={[60, 80]} style={{ fontSize: '12px' }} />
                <Tooltip />
                <Line key="line-heart-rate" type="monotone" dataKey="heartRate" stroke="rgb(239, 68, 68)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <p className="text-sm mb-2">Blood Pressure (Systolic mmHg)</p>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={vitalTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="date" style={{ fontSize: '12px' }} />
                <YAxis domain={[110, 130]} style={{ fontSize: '12px' }} />
                <Tooltip />
                <Line key="line-bp" type="monotone" dataKey="bp" stroke="rgb(59, 130, 246)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <p className="text-sm mb-2">Blood Glucose (mg/dL)</p>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={vitalTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="date" style={{ fontSize: '12px' }} />
                <YAxis domain={[90, 110]} style={{ fontSize: '12px' }} />
                <Tooltip />
                <Line key="line-glucose" type="monotone" dataKey="glucose" stroke="rgb(34, 197, 94)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Patient Fitness & Wellness Monitoring */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5" />
              Patient Fitness & Wellness - John Doe
            </div>
            <Badge className="bg-green-500 text-white">
              <Trophy className="w-3 h-3 mr-1" />
              Active Program
            </Badge>
          </CardTitle>
          <CardDescription>Fitness activity and health improvements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Fitness Goals Overview */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-background border">
              <p className="text-xs text-muted-foreground mb-1">Daily Steps Goal</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl">8,234</span>
                <span className="text-xs text-muted-foreground">/ 10,000</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12% vs last week</p>
            </div>
            
            <div className="p-3 rounded-lg bg-background border">
              <p className="text-xs text-muted-foreground mb-1">Exercise Minutes</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl">35</span>
                <span className="text-xs text-muted-foreground">/ 45 min</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">+15% improvement</p>
            </div>

            <div className="p-3 rounded-lg bg-background border">
              <p className="text-xs text-muted-foreground mb-1">Calories Burned</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl">420</span>
                <span className="text-xs text-muted-foreground">kcal</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">Weekly average</p>
            </div>

            <div className="p-3 rounded-lg bg-background border">
              <p className="text-xs text-muted-foreground mb-1">Health Score</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl">82</span>
                <span className="text-xs text-muted-foreground">/ 100</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">+5 from last week</p>
            </div>
          </div>

          {/* Vitals Impact from Fitness */}
          <div className="p-4 rounded-lg bg-background border">
            <p className="font-medium mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Fitness Impact on Health Vitals
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Resting Heart Rate</span>
                <span className="text-green-600 dark:text-green-400">78 → 72 bpm (-6)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Weight Loss</span>
                <span className="text-green-600 dark:text-green-400">185 → 179 lbs (-6 lbs)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Blood Pressure</span>
                <span className="text-green-600 dark:text-green-400">135/85 → 120/80 mmHg</span>
              </div>
            </div>
          </div>

          {/* Clinical Notes on Fitness */}
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900">
            <p className="text-sm">
              <strong>Clinical Note:</strong> Patient shows excellent adherence to prescribed fitness program. 
              Cardiovascular health has improved by 8% over the past 4 weeks. Continue current regimen.
            </p>
          </div>

          <Button className="w-full" variant="outline">
            <Dumbbell className="w-4 h-4 mr-2" />
            View Detailed Fitness Report
          </Button>
        </CardContent>
      </Card>

      {/* Recent Clinical Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Recent Clinical Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentNotes.map((note, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p>{note.patient}</p>
                  <p className="text-xs text-muted-foreground">{note.date}</p>
                </div>
                <p className="text-sm text-muted-foreground">{note.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Add Note
            </Button>
            <Button variant="outline">
              <Pill className="w-4 h-4 mr-2" />
              Prescribe
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
            <Button variant="outline">
              <Activity className="w-4 h-4 mr-2" />
              Order Tests
            </Button>
          </div>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="virtualcare" className="mt-0">
          <VirtualCareIntegration />
        </TabsContent>

        <TabsContent value="location" className="mt-0">
          <LocationTracking />
        </TabsContent>

        <TabsContent value="devices" className="mt-0">
          <DeviceHealth />
        </TabsContent>
      </Tabs>
    </div>
  );
}