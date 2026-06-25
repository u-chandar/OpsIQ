import { useState } from "react";
import { MapPin, Navigation, Shield, AlertTriangle, Clock, User, Map, Radio, CheckCircle, Settings, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Patient {
  id: number;
  name: string;
  status: "safe" | "warning" | "alert";
  location: string;
  lastUpdate: string;
  speed: string;
  battery: number;
  deviceType: string;
}

interface GeoFence {
  id: number;
  name: string;
  type: "home" | "medical" | "pharmacy" | "custom";
  radius: number;
  address: string;
  active: boolean;
  patients: string[];
}

interface RouteHistory {
  id: number;
  patient: string;
  from: string;
  to: string;
  startTime: string;
  endTime: string;
  duration: string;
  distance: string;
}

export function LocationTracking() {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);
  const [trackingEnabled, setTrackingEnabled] = useState(true);

  const patients: Patient[] = [
    {
      id: 1,
      name: "John Doe",
      status: "safe",
      location: "Home - 123 Main St",
      lastUpdate: "2 min ago",
      speed: "Stationary",
      battery: 87,
      deviceType: "Smart Cane"
    },
    {
      id: 2,
      name: "Mary Smith",
      status: "warning",
      location: "Near Pharmacy - 456 Oak Ave",
      lastUpdate: "1 min ago",
      speed: "Walking (2 mph)",
      battery: 45,
      deviceType: "Smart Glasses"
    },
    {
      id: 3,
      name: "Robert Johnson",
      status: "safe",
      location: "Medical Center - 789 Elm St",
      lastUpdate: "5 min ago",
      speed: "Stationary",
      battery: 92,
      deviceType: "Smart Cane + Watch"
    },
    {
      id: 4,
      name: "Alice Williams",
      status: "alert",
      location: "Unknown Location - Outside Safe Zone",
      lastUpdate: "Just now",
      speed: "Moving (3 mph)",
      battery: 23,
      deviceType: "Smart Glasses"
    }
  ];

  const geoFences: GeoFence[] = [
    {
      id: 1,
      name: "Home Zone",
      type: "home",
      radius: 500,
      address: "123 Main St",
      active: true,
      patients: ["John Doe", "Mary Smith"]
    },
    {
      id: 2,
      name: "Medical Center",
      type: "medical",
      radius: 200,
      address: "789 Elm St",
      active: true,
      patients: ["John Doe", "Robert Johnson", "Alice Williams"]
    },
    {
      id: 3,
      name: "Community Pharmacy",
      type: "pharmacy",
      radius: 150,
      address: "456 Oak Ave",
      active: true,
      patients: ["Mary Smith", "Alice Williams"]
    },
    {
      id: 4,
      name: "Safe Walking Route",
      type: "custom",
      radius: 100,
      address: "Main St to Park",
      active: true,
      patients: ["John Doe"]
    }
  ];

  const routeHistory: RouteHistory[] = [
    {
      id: 1,
      patient: "John Doe",
      from: "Home",
      to: "Medical Center",
      startTime: "Today, 9:00 AM",
      endTime: "Today, 9:45 AM",
      duration: "45 min",
      distance: "2.3 mi"
    },
    {
      id: 2,
      patient: "Mary Smith",
      from: "Home",
      to: "Pharmacy",
      startTime: "Today, 2:15 PM",
      endTime: "In Progress",
      duration: "25 min",
      distance: "1.1 mi"
    },
    {
      id: 3,
      patient: "Robert Johnson",
      from: "Home",
      to: "Medical Center",
      startTime: "Today, 11:00 AM",
      endTime: "Today, 12:30 PM",
      duration: "1h 30min",
      distance: "3.5 mi"
    }
  ];

  const alerts = [
    {
      id: 1,
      patient: "Alice Williams",
      type: "geo-fence",
      message: "Patient left safe zone - Home Zone",
      time: "2 min ago",
      severity: "high"
    },
    {
      id: 2,
      patient: "Mary Smith",
      type: "battery",
      message: "Device battery below 50%",
      time: "15 min ago",
      severity: "medium"
    },
    {
      id: 3,
      patient: "Alice Williams",
      type: "device",
      message: "No GPS signal detected",
      time: "5 min ago",
      severity: "high"
    }
  ];

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1>Patient Location Tracking</h1>
          <p className="text-muted-foreground mt-1">Real-time GPS monitoring & geo-fencing for blind assistance users</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="tracking-toggle">Live Tracking</Label>
            <Switch 
              id="tracking-toggle" 
              checked={trackingEnabled} 
              onCheckedChange={setTrackingEnabled}
            />
          </div>
          <Badge variant={trackingEnabled ? "secondary" : "outline"} className={trackingEnabled ? "bg-green-100 text-green-600 dark:bg-green-950" : ""}>
            <Radio className={`w-3 h-3 mr-1 ${trackingEnabled ? "animate-pulse" : ""}`} />
            {trackingEnabled ? "Active" : "Paused"}
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Patients Tracked</p>
                <p className="text-2xl mt-1">{patients.length}</p>
              </div>
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Safe Zones</p>
                <p className="text-2xl mt-1">{patients.filter(p => p.status === "safe").length}</p>
              </div>
              <Shield className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
                <p className="text-2xl mt-1">{alerts.filter(a => a.severity === "high").length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Geo-Fences</p>
                <p className="text-2xl mt-1">{geoFences.filter(g => g.active).length}</p>
              </div>
              <Map className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      {alerts.length > 0 && (
        <Card className="border-2 border-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-2 ${
                    alert.severity === "high"
                      ? "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900"
                      : "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{alert.patient}</p>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                    </div>
                    <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">View Location</Button>
                    <Button size="sm">Contact Patient</Button>
                    <Button size="sm" variant="outline">Dismiss</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Tracking Interface */}
      <Tabs defaultValue="live" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="live">Live Tracking</TabsTrigger>
          <TabsTrigger value="geofence">Geo-Fences</TabsTrigger>
          <TabsTrigger value="history">Route History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Live Tracking Tab */}
        <TabsContent value="live" className="space-y-4">
          {/* Map Placeholder */}
          <Card className="border-2 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                Live Map View
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg p-8 min-h-[400px] flex items-center justify-center border-2 border-dashed border-blue-300 dark:border-blue-700">
                <div className="text-center space-y-4">
                  <Map className="w-16 h-16 mx-auto text-blue-500" />
                  <div>
                    <p className="text-lg">Interactive Map Interface</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Real-time GPS tracking with live patient locations, geo-fence boundaries,
                      <br />
                      and route visualization would be displayed here.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {patients.map((patient) => (
                      <Badge
                        key={patient.id}
                        variant="outline"
                        className={`cursor-pointer ${
                          patient.status === "safe"
                            ? "border-green-500"
                            : patient.status === "warning"
                            ? "border-yellow-500"
                            : "border-red-500"
                        }`}
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        {patient.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Patient List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Patient Status
              </CardTitle>
              <CardDescription>Real-time location and device status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {patients.map((patient) => (
                  <div
                    key={patient.id}
                    className={`p-4 rounded-lg border-2 ${
                      patient.status === "safe"
                        ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900"
                        : patient.status === "warning"
                        ? "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900"
                        : "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{patient.name}</p>
                          <Badge
                            variant={
                              patient.status === "safe"
                                ? "secondary"
                                : patient.status === "warning"
                                ? "outline"
                                : "destructive"
                            }
                          >
                            {patient.status === "safe" ? (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Safe
                              </>
                            ) : patient.status === "warning" ? (
                              <>
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Warning
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Alert
                              </>
                            )}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{patient.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{patient.lastUpdate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Navigation className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{patient.speed}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">🔋 {patient.battery}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">📱 {patient.deviceType}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          Track
                        </Button>
                        <Button size="sm" variant="outline">
                          <Navigation className="w-3 h-3 mr-1" />
                          Navigate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Geo-Fences Tab */}
        <TabsContent value="geofence" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg">Geo-Fence Management</h3>
              <p className="text-sm text-muted-foreground">Configure safe zones and boundaries</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Geo-Fence
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Geo-Fence</DialogTitle>
                  <DialogDescription>Define a safe zone for patient monitoring</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="fence-name">Geo-Fence Name</Label>
                    <Input id="fence-name" placeholder="e.g., Home Zone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fence-type">Type</Label>
                    <Select defaultValue="home">
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">🏠 Home</SelectItem>
                        <SelectItem value="medical">🏥 Medical Center</SelectItem>
                        <SelectItem value="pharmacy">💊 Pharmacy</SelectItem>
                        <SelectItem value="custom">⚙️ Custom Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fence-address">Address</Label>
                    <Input id="fence-address" placeholder="123 Main Street" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fence-radius">Radius (meters)</Label>
                    <Input id="fence-radius" type="number" defaultValue="500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fence-patients">Assign to Patients</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select patients" />
                      </SelectTrigger>
                      <SelectContent>
                        {patients.map((patient) => (
                          <SelectItem key={patient.id} value={patient.name}>
                            {patient.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Create Geo-Fence</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {geoFences.map((fence) => (
              <Card key={fence.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {fence.type === "home" && "🏠"}
                        {fence.type === "medical" && "🏥"}
                        {fence.type === "pharmacy" && "💊"}
                        {fence.type === "custom" && "📍"}
                        {fence.name}
                      </CardTitle>
                      <CardDescription className="mt-1">{fence.address}</CardDescription>
                    </div>
                    <Switch checked={fence.active} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Radius</span>
                    <Badge variant="outline">{fence.radius}m</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Assigned Patients</p>
                    <div className="flex flex-wrap gap-1">
                      {fence.patients.map((patient, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {patient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Trash2 className="w-3 h-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Route History Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Route History
              </CardTitle>
              <CardDescription>Past navigation and movement patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {routeHistory.map((route) => (
                  <div key={route.id} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-medium">{route.patient}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{route.from}</span>
                          <Navigation className="w-4 h-4" />
                          <span>{route.to}</span>
                        </div>
                      </div>
                      <Badge variant={route.endTime === "In Progress" ? "secondary" : "outline"}>
                        {route.endTime === "In Progress" ? "Active" : "Completed"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Start</p>
                        <p>{route.startTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">End</p>
                        <p>{route.endTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p>{route.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Distance</p>
                        <p>{route.distance}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="mt-3">
                      View Route on Map
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Tracking Settings
              </CardTitle>
              <CardDescription>Configure location tracking preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p>Real-time GPS Tracking</p>
                  <p className="text-sm text-muted-foreground">Continuous location updates</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p>Geo-Fence Alerts</p>
                  <p className="text-sm text-muted-foreground">Notify when patients leave safe zones</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p>Low Battery Warnings</p>
                  <p className="text-sm text-muted-foreground">Alert when device battery is low</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p>Route History Recording</p>
                  <p className="text-sm text-muted-foreground">Save navigation paths</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p>Emergency Location Sharing</p>
                  <p className="text-sm text-muted-foreground">Auto-share location during SOS</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2 pt-4">
                <Label>Location Update Frequency</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">Every 10 seconds (High accuracy)</SelectItem>
                    <SelectItem value="30">Every 30 seconds (Balanced)</SelectItem>
                    <SelectItem value="60">Every 1 minute (Battery saver)</SelectItem>
                    <SelectItem value="300">Every 5 minutes (Low power)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Alert Recipients</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All caregivers and staff</SelectItem>
                    <SelectItem value="primary">Primary caregiver only</SelectItem>
                    <SelectItem value="emergency">Emergency contacts only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-4">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
