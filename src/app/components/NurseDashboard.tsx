import { useState } from "react";
import { ClipboardCheck, Pill, Activity, Users, Clock, AlertCircle, CheckCircle, Plus, MapPin, Smartphone, Dumbbell, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LocationTracking } from "./LocationTracking";
import { DeviceHealth } from "./DeviceHealth";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

export function NurseDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const patientQueue = [
    { 
      room: "101", 
      name: "John Doe", 
      priority: "normal", 
      status: "stable",
      nextTask: "Medication - 2:00 PM",
      lastVitals: "1 hour ago"
    },
    { 
      room: "102", 
      name: "Mary Smith", 
      priority: "high", 
      status: "monitoring",
      nextTask: "Blood glucose check - 2:30 PM",
      lastVitals: "30 min ago"
    },
    { 
      room: "103", 
      name: "Robert Johnson", 
      priority: "urgent", 
      status: "alert",
      nextTask: "BP check - Now",
      lastVitals: "3 hours ago"
    },
    { 
      room: "104", 
      name: "Sarah Williams", 
      priority: "normal", 
      status: "stable",
      nextTask: "Evening rounds - 6:00 PM",
      lastVitals: "2 hours ago"
    }
  ];

  const medicationRounds = [
    { time: "2:00 PM", patient: "John Doe", room: "101", medication: "Lisinopril 10mg", status: "pending" },
    { time: "2:30 PM", patient: "Sarah Williams", room: "104", medication: "Metformin 500mg", status: "pending" },
    { time: "3:00 PM", patient: "Mary Smith", room: "102", medication: "Insulin", status: "pending" },
    { time: "3:30 PM", patient: "Robert Johnson", room: "103", medication: "Metoprolol 50mg", status: "pending" }
  ];

  const completedTasks = [
    { task: "Morning vital signs", patient: "All patients", time: "8:00 AM", completed: true },
    { task: "Medication round", patient: "All patients", time: "9:00 AM", completed: true },
    { task: "John Doe - Blood pressure", patient: "John Doe", time: "1:00 PM", completed: true }
  ];

  const vitalsDue = [
    { patient: "Robert Johnson", room: "103", type: "Blood Pressure", status: "overdue", dueTime: "Now" },
    { patient: "Mary Smith", room: "102", type: "Blood Glucose", status: "due-soon", dueTime: "In 15 min" },
    { patient: "John Doe", room: "101", type: "Temperature", status: "scheduled", dueTime: "In 2 hours" }
  ];

  const alerts = [
    { severity: "high", message: "Robert Johnson BP check overdue", time: "Just now" },
    { severity: "medium", message: "Mary Smith requested assistance", time: "5 min ago" }
  ];

  const taskProgress = (completedTasks.length / (completedTasks.length + medicationRounds.length)) * 100;

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Navilli" className="h-10 w-auto" />
          <div>
            <h1>Nurse Dashboard</h1>
            <p className="text-muted-foreground mt-1">Nurse Jennifer Carter - Floor 3</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="h-8">
            <Clock className="w-4 h-4 mr-1" />
            Day Shift
          </Badge>
          <Badge variant="secondary" className="h-8">
            <Users className="w-4 h-4 mr-1" />
            4 Patients
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">
            <Activity className="w-4 h-4 mr-2" />
            Care
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

      {/* Active Alerts */}
      {alerts.length > 0 && (
        <Card className="border-orange-500 bg-orange-50 dark:bg-orange-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <AlertCircle className="w-5 h-5" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start justify-between p-3 bg-background rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                      {alert.severity === "high" ? "High" : "Medium"}
                    </Badge>
                    <p className="text-sm">{alert.message}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
                <Button size="sm">Respond</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Task Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              Today's Progress
            </CardTitle>
            <Badge variant="secondary">
              {completedTasks.length}/{completedTasks.length + medicationRounds.length} Tasks
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={taskProgress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            {Math.round(taskProgress)}% of scheduled tasks completed
          </p>
        </CardContent>
      </Card>

      {/* Patient Queue */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Patient Queue
          </CardTitle>
          <CardDescription>Current patient assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Room</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Task</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientQueue.map((patient, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge variant="outline">{patient.room}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p>{patient.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Vitals: {patient.lastVitals}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant={
                        patient.priority === "urgent" ? "destructive" :
                        patient.priority === "high" ? "secondary" :
                        "outline"
                      }>
                        {patient.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{patient.nextTask}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Vitals Due */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Vital Signs Schedule
          </CardTitle>
          <CardDescription>Upcoming vital sign checks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {vitalsDue.map((vital, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  vital.status === "overdue" 
                    ? "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900" 
                    : vital.status === "due-soon"
                    ? "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900"
                    : "bg-muted border-border"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline">{vital.room}</Badge>
                    <p>{vital.patient}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{vital.type}</p>
                  <p className="text-xs text-muted-foreground mt-1">Due: {vital.dueTime}</p>
                </div>
                <Button size="sm" variant={vital.status === "overdue" ? "destructive" : "outline"}>
                  <Plus className="w-4 h-4 mr-1" />
                  Record
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medication Rounds */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="w-5 h-5" />
            Medication Administration
          </CardTitle>
          <CardDescription>Upcoming medication rounds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {medicationRounds.map((med, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-center min-w-[60px]">
                    <p className="text-sm">{med.time}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline">{med.room}</Badge>
                      <p className="text-sm">{med.patient}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{med.medication}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Administer
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Completed Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Completed Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {completedTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-900">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm">{task.task}</p>
                  <p className="text-xs text-muted-foreground">
                    {task.patient} • {task.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Patient Fitness Overview */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5" />
            Patient Fitness & Activity
          </CardTitle>
          <CardDescription>Monitor patient physical activity and wellness</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 rounded-lg bg-background border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">101</Badge>
                <p className="text-sm font-medium">John Doe</p>
              </div>
              <Badge className="bg-green-500 text-white">Active</Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Steps</p>
                <p className="font-medium">8,234</p>
              </div>
              <div>
                <p className="text-muted-foreground">Exercise</p>
                <p className="font-medium">35 min</p>
              </div>
              <div>
                <p className="text-muted-foreground">HR Improvement</p>
                <p className="font-medium text-green-600 dark:text-green-400">↓ 6 bpm</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-background border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">102</Badge>
                <p className="text-sm font-medium">Mary Smith</p>
              </div>
              <Badge variant="secondary">Moderate</Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Steps</p>
                <p className="font-medium">5,120</p>
              </div>
              <div>
                <p className="text-muted-foreground">Exercise</p>
                <p className="font-medium">20 min</p>
              </div>
              <div>
                <p className="text-muted-foreground">BP Improvement</p>
                <p className="font-medium text-green-600 dark:text-green-400">↓ 5 mmHg</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
              <p className="text-sm font-medium">Overall Patient Wellness Trends</p>
            </div>
            <p className="text-xs text-muted-foreground">
              75% of patients meeting daily activity goals. Average vital improvements: HR -4 bpm, BP -6 mmHg.
            </p>
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
              <Activity className="w-4 h-4 mr-2" />
              Record Vitals
            </Button>
            <Button variant="outline">
              <Pill className="w-4 h-4 mr-2" />
              Give Med
            </Button>
            <Button variant="outline">
              <ClipboardCheck className="w-4 h-4 mr-2" />
              Add Note
            </Button>
            <Button variant="outline">
              <AlertCircle className="w-4 h-4 mr-2" />
              Report Issue
            </Button>
          </div>
        </CardContent>
      </Card>
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