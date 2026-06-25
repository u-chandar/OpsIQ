import { useState } from "react";
import { MapPin, Bell, CheckSquare, Activity, Phone, Clock, AlertTriangle, Eye, Navigation, Shield, Smartphone, Dumbbell, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LocationTracking } from "./LocationTracking";
import { DeviceHealth } from "./DeviceHealth";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

export function CaretakerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const patients = [
    { name: "John Doe", relationship: "Father", status: "stable", location: "Home - Living Room" },
    { name: "Mary Smith", relationship: "Mother", status: "needs-attention", location: "Home - Bedroom" }
  ];

  const dailyTasks = [
    { task: "Morning medication", time: "8:00 AM", completed: true, patient: "John Doe" },
    { task: "Blood pressure check", time: "9:00 AM", completed: true, patient: "John Doe" },
    { task: "Lunch medication", time: "12:00 PM", completed: false, patient: "John Doe" },
    { task: "Physical therapy", time: "2:00 PM", completed: false, patient: "John Doe" },
    { task: "Evening medication", time: "6:00 PM", completed: false, patient: "John Doe" },
    { task: "Blood glucose check", time: "7:00 PM", completed: false, patient: "Mary Smith" }
  ];

  const completedTasks = dailyTasks.filter(t => t.completed).length;
  const progressPercent = (completedTasks / dailyTasks.length) * 100;

  const recentAlerts = [
    { 
      type: "warning", 
      message: "Mary Smith heart rate elevated (95 bpm)", 
      time: "10 min ago",
      patient: "Mary Smith"
    },
    { 
      type: "info", 
      message: "John Doe took afternoon medication", 
      time: "1 hour ago",
      patient: "John Doe"
    },
    { 
      type: "success", 
      message: "John Doe completed navigation to kitchen", 
      time: "2 hours ago",
      patient: "John Doe"
    }
  ];

  const assistanceActivity = [
    { action: "Voice command used", detail: "Where is the bathroom?", time: "5 min ago", patient: "John Doe" },
    { action: "Object detected", detail: "Chair in path", time: "20 min ago", patient: "John Doe" },
    { action: "Navigation started", detail: "To bedroom", time: "45 min ago", patient: "John Doe" }
  ];

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Navilli" className="h-10 w-auto" />
          <div>
            <h1>Caretaker Dashboard</h1>
            <p className="text-muted-foreground mt-1">Monitor and support your loved ones</p>
          </div>
        </div>
        <Badge variant="secondary" className="h-8">
          <Clock className="w-4 h-4 mr-1" />
          Live
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">
            <Activity className="w-4 h-4 mr-2" />
            Care Overview
          </TabsTrigger>
          <TabsTrigger value="location">
            <MapPin className="w-4 h-4 mr-2" />
            Location
          </TabsTrigger>
          <TabsTrigger value="devices">
            <Smartphone className="w-4 h-4 mr-2" />
            Devices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-0">{/* Original dashboard content */}

      {/* Patient Status Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {patients.map((patient, index) => (
          <Card key={index} className={patient.status === "needs-attention" ? "border-yellow-500" : ""}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.relationship}</p>
                </div>
                <Badge variant={patient.status === "stable" ? "secondary" : "destructive"}>
                  {patient.status === "stable" ? "Stable" : "Attention"}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{patient.location}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1">
                  <Activity className="w-4 h-4 mr-1" />
                  Vitals
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily Care Tasks */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5" />
              Daily Care Tasks
            </CardTitle>
            <Badge variant="secondary">
              {completedTasks}/{dailyTasks.length} Complete
            </Badge>
          </div>
          <CardDescription>Track daily care activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progressPercent} className="h-2" />
          
          <div className="space-y-2">
            {dailyTasks.map((task, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  task.completed 
                    ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900" 
                    : "bg-muted border-border"
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    task.completed ? "bg-green-500 border-green-500" : "border-muted-foreground"
                  }`}>
                    {task.completed && <span className="text-white text-xs">✓</span>}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                      {task.task}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {task.patient} • {task.time}
                    </p>
                  </div>
                </div>
                {!task.completed && (
                  <Button size="sm" variant="ghost">
                    Mark Done
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Alerts
          </CardTitle>
          <CardDescription>Important notifications and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <div
                key={index}
                className={`flex gap-3 p-3 rounded-lg ${
                  alert.type === "warning" ? "bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-900" :
                  alert.type === "success" ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900" :
                  "bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900"
                }`}
              >
                <div className={`mt-0.5 ${
                  alert.type === "warning" ? "text-yellow-600" :
                  alert.type === "success" ? "text-green-600" :
                  "text-blue-600"
                }`}>
                  {alert.type === "warning" ? <AlertTriangle className="w-5 h-5" /> :
                   alert.type === "success" ? <CheckSquare className="w-5 h-5" /> :
                   <Bell className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assistance Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Visual Assistance Activity
          </CardTitle>
          <CardDescription>Recent assistance features used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {assistanceActivity.map((activity, index) => (
              <div key={index} className="flex gap-3 items-start pb-3 border-b last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.detail}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.patient} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fitness & Wellness Monitoring */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5" />
            Fitness & Wellness Tracking
          </CardTitle>
          <CardDescription>Monitor daily activity and health improvements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* John Doe Fitness Summary */}
          <div className="p-4 rounded-lg bg-background border">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium">John Doe - Today's Activity</p>
              <Badge className="bg-green-500 text-white">Active</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Steps</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg">8,234</span>
                  <span className="text-xs text-muted-foreground">/ 10,000</span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">82% of goal</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Exercise</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg">35</span>
                  <span className="text-xs text-muted-foreground">min</span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Walking completed</p>
              </div>
            </div>
          </div>

          {/* Mary Smith Fitness Summary */}
          <div className="p-4 rounded-lg bg-background border">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium">Mary Smith - Today's Activity</p>
              <Badge variant="secondary">Moderate</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Steps</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg">5,120</span>
                  <span className="text-xs text-muted-foreground">/ 8,000</span>
                </div>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">64% of goal</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Exercise</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg">20</span>
                  <span className="text-xs text-muted-foreground">min</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Light stretching</p>
              </div>
            </div>
          </div>

          {/* Health Improvements */}
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
              <p className="text-sm font-medium">Weekly Health Improvements</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">John's Resting Heart Rate</span>
                <span className="text-green-600 dark:text-green-400">↓ 6 bpm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Mary's Blood Pressure</span>
                <span className="text-green-600 dark:text-green-400">↓ 5 mmHg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Combined Activity Time</span>
                <span className="text-green-600 dark:text-green-400">↑ 45 min/week</span>
              </div>
            </div>
          </div>

          <Button className="w-full" variant="outline">
            <Dumbbell className="w-4 h-4 mr-2" />
            View Detailed Fitness Reports
          </Button>
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
              <Phone className="w-4 h-4 mr-2" />
              Call Patient
            </Button>
            <Button variant="outline" onClick={() => setActiveTab("location")}>
              <MapPin className="w-4 h-4 mr-2" />
              Track Location
            </Button>
            <Button variant="outline">
              <Activity className="w-4 h-4 mr-2" />
              View Vitals
            </Button>
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Set Reminder
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