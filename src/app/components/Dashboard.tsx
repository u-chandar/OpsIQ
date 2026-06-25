import { Heart, Eye, Activity, Pill, Bell, TrendingUp, Dumbbell, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FitnessModule } from "./FitnessModule";
import { PatientVirtualCare } from "./PatientVirtualCare";
import { AppointmentAlerts } from "./AppointmentAlerts";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

interface QuickStat {
  label: string;
  value: string;
  status: "normal" | "warning" | "critical";
  icon: React.ReactNode;
}

export function Dashboard() {
  const vitalStats: QuickStat[] = [
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: <Heart className="w-5 h-5" /> },
    { label: "Blood Pressure", value: "120/80", status: "normal", icon: <Activity className="w-5 h-5" /> },
    { label: "O2 Saturation", value: "98%", status: "normal", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Temperature", value: "98.6°F", status: "normal", icon: <Activity className="w-5 h-5" /> },
  ];

  const recentActivities = [
    { time: "2 min ago", text: "Object detected: Door ahead", type: "assistance" },
    { time: "15 min ago", text: "Blood pressure recorded", type: "monitoring" },
    { time: "30 min ago", text: "Completed 30-min walk - 150 cal burned", type: "fitness" },
    { time: "45 min ago", text: "Accessible ride completed to pharmacy", type: "ride" },
    { time: "1 hour ago", text: "Medication taken: Aspirin", type: "medication" },
    { time: "2 hours ago", text: "Navigation: Arrived at destination", type: "assistance" },
  ];

  const upcomingReminders = [
    { time: "3:00 PM", text: "Take afternoon medication", type: "medication" },
    { time: "5:00 PM", text: "Doctor appointment reminder", type: "appointment" },
  ];

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center gap-4 mb-2">
        <img src={logo} alt="Navilli" className="h-12 w-auto" />
        <div className="flex-1">
          <h1>Health & Assistance Dashboard</h1>
          <p className="text-muted-foreground mt-1">Your complete care companion</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">
            <Activity className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="virtualcare">
            <Video className="w-4 h-4 mr-2" />
            Virtual Care
          </TabsTrigger>
          <TabsTrigger value="fitness">
            <Dumbbell className="w-4 h-4 mr-2" />
            Fitness & Wellness
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Appointment Alerts */}
          <AppointmentAlerts role="patient" />

          {/* Quick Vitals Overview */}
          <div className="grid grid-cols-2 gap-4">
            {vitalStats.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-2 rounded-lg ${
                      stat.status === "normal" ? "bg-green-100 text-green-600" :
                      stat.status === "warning" ? "bg-yellow-100 text-yellow-600" :
                      "bg-red-100 text-red-600"
                    }`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Assistance Features Quick Access */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Visual Assistance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Voice Guide</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Object Detection</span>
                <Badge variant="secondary">Ready</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Navigation Mode</span>
                <Badge variant="outline">Off</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-900">
                <span className="text-sm flex items-center gap-2">
                  🗣️ Voice Language
                </span>
                <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900">
                  🇺🇸 English (US)
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-900">
                <span className="text-sm flex items-center gap-2">
                  🚗 Accessible Rides
                </span>
                <Badge variant="secondary" className="bg-green-100 text-green-600 dark:bg-green-900">
                  Available
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest events and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex gap-3 items-start pb-3 border-b border-border last:border-0 last:pb-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === "assistance" ? "bg-blue-500" :
                      activity.type === "monitoring" ? "bg-green-500" :
                      activity.type === "fitness" ? "bg-purple-500" :
                      activity.type === "ride" ? "bg-teal-500" :
                      "bg-purple-500"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{activity.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Reminders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Upcoming Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingReminders.map((reminder, index) => (
                  <div key={index} className="flex gap-3 items-center p-3 bg-muted rounded-lg">
                    <Pill className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm">{reminder.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{reminder.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="virtualcare" className="space-y-6">
          <PatientVirtualCare />
        </TabsContent>

        <TabsContent value="fitness" className="space-y-6">
          <FitnessModule 
            vitalsData={{
              heartRate: 72,
              bloodPressure: "120/80",
              oxygen: 98,
              weight: 179
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}