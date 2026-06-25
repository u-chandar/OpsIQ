import { useState } from "react";
import { Heart, Activity, Thermometer, Droplets, Pill, Calendar, TrendingUp, AlertCircle, Dumbbell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FitnessModule } from "./FitnessModule";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function PatientMonitoring() {
  const [selectedMetric, setSelectedMetric] = useState<string>("heart-rate");
  const [activeTab, setActiveTab] = useState<string>("vitals");
  
  // Mock vital signs data
  const vitals = [
    { 
      id: "heart-rate",
      label: "Heart Rate", 
      value: "72", 
      unit: "bpm", 
      status: "normal" as const,
      icon: <Heart className="w-5 h-5" />,
      range: "60-100 bpm",
      lastUpdated: "2 min ago"
    },
    { 
      id: "blood-pressure",
      label: "Blood Pressure", 
      value: "120/80", 
      unit: "mmHg", 
      status: "normal" as const,
      icon: <Activity className="w-5 h-5" />,
      range: "90/60 - 120/80",
      lastUpdated: "15 min ago"
    },
    { 
      id: "oxygen",
      label: "O2 Saturation", 
      value: "98", 
      unit: "%", 
      status: "normal" as const,
      icon: <Droplets className="w-5 h-5" />,
      range: "95-100%",
      lastUpdated: "5 min ago"
    },
    { 
      id: "temperature",
      label: "Temperature", 
      value: "98.6", 
      unit: "°F", 
      status: "normal" as const,
      icon: <Thermometer className="w-5 h-5" />,
      range: "97.0-99.0°F",
      lastUpdated: "1 hour ago"
    },
  ];

  // Mock chart data
  const heartRateData = [
    { time: "8:00", value: 68 },
    { time: "10:00", value: 72 },
    { time: "12:00", value: 75 },
    { time: "2:00", value: 70 },
    { time: "4:00", value: 72 },
    { time: "Now", value: 72 },
  ];

  // Mock medications
  const medications = [
    { name: "Aspirin", dosage: "81mg", time: "8:00 AM", taken: true, nextDose: "Tomorrow 8:00 AM" },
    { name: "Lisinopril", dosage: "10mg", time: "9:00 AM", taken: true, nextDose: "Tomorrow 9:00 AM" },
    { name: "Metformin", dosage: "500mg", time: "3:00 PM", taken: false, nextDose: "Today 3:00 PM" },
    { name: "Vitamin D", dosage: "2000 IU", time: "8:00 PM", taken: false, nextDose: "Today 8:00 PM" },
  ];

  const todayProgress = (medications.filter(m => m.taken).length / medications.length) * 100;

  return (
    <div className="space-y-6 p-6 pb-24">
      <div>
        <h1>Health Monitoring</h1>
        <p className="text-muted-foreground mt-1">Track your vital signs, medications, and fitness</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vitals">
            <Activity className="w-4 h-4 mr-2" />
            Vitals & Meds
          </TabsTrigger>
          <TabsTrigger value="fitness">
            <Dumbbell className="w-4 h-4 mr-2" />
            Fitness
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vitals" className="space-y-6">
          {/* Vital Signs Cards */}
          <div className="grid grid-cols-2 gap-4">
            {vitals.map((vital) => (
              <Card 
                key={vital.id} 
                className={`cursor-pointer transition-all ${
                  selectedMetric === vital.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedMetric(vital.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${
                      vital.status === "normal" ? "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400" :
                      vital.status === "warning" ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400" :
                      "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
                    }`}>
                      {vital.icon}
                    </div>
                    <Badge variant={vital.status === "normal" ? "secondary" : "destructive"}>
                      {vital.status === "normal" ? "Normal" : "Alert"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{vital.label}</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl">{vital.value}</span>
                    <span className="text-sm text-muted-foreground">{vital.unit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{vital.lastUpdated}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Heart Rate Trend
              </CardTitle>
              <CardDescription>Last 8 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis 
                    dataKey="time" 
                    style={{ fontSize: '12px' }}
                    stroke="rgba(0,0,0,0.5)"
                  />
                  <YAxis 
                    domain={[60, 85]} 
                    style={{ fontSize: '12px' }}
                    stroke="rgba(0,0,0,0.5)"
                  />
                  <Tooltip />
                  <Line
                    key="line-value"
                    type="monotone"
                    dataKey="value"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth={2}
                    dot={{ fill: "rgb(34, 197, 94)", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Medication Tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Pill className="w-5 h-5" />
                  Medications
                </div>
                <Badge variant="secondary">{Math.round(todayProgress)}% Complete</Badge>
              </CardTitle>
              <CardDescription>Today's medication schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={todayProgress} className="h-2" />
              
              <div className="space-y-3">
                {medications.map((med, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      med.taken 
                        ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900" 
                        : "bg-muted border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p>{med.name}</p>
                          {med.taken && (
                            <Badge variant="secondary" className="bg-green-500 text-white">
                              ✓ Taken
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {med.dosage} at {med.time}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Next: {med.nextDose}
                        </p>
                      </div>
                      {!med.taken && (
                        <Button size="sm" variant="outline">
                          Mark Taken
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p>Dr. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground mt-1">Cardiology Checkup</p>
                    <p className="text-sm text-muted-foreground">Oct 18, 2025 at 10:00 AM</p>
                  </div>
                  <Badge>In 4 days</Badge>
                </div>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p>Dr. Michael Chen</p>
                    <p className="text-sm text-muted-foreground mt-1">Ophthalmology</p>
                    <p className="text-sm text-muted-foreground">Oct 25, 2025 at 2:30 PM</p>
                  </div>
                  <Badge variant="outline">In 11 days</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health Alerts */}
          <Card className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                Health Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>Stay hydrated - aim for 8 glasses of water today</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>Take a 10-minute walk after meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>Remember to take your 3:00 PM medication</span>
                </li>
              </ul>
            </CardContent>
          </Card>
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