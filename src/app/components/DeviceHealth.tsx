import { useState } from "react";
import { Smartphone, Wifi, Battery, AlertTriangle, CheckCircle, RefreshCw, Radio, Zap, Clock, Settings, Eye, Heart, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface Device {
  id: number;
  name: string;
  type: "Smart Cane" | "Smart Glasses" | "Health Monitor" | "Smart Watch" | "GPS Tracker";
  patient: string;
  battery: number;
  status: "online" | "offline" | "warning" | "error";
  lastSync: string;
  connection: "excellent" | "good" | "poor" | "disconnected";
  firmware: string;
  signalStrength: number;
  temperature?: number;
  issues?: string[];
}

export function DeviceHealth() {
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const devices: Device[] = [
    {
      id: 1,
      name: "Smart Cane - JD001",
      type: "Smart Cane",
      patient: "John Doe",
      battery: 87,
      status: "online",
      lastSync: "2 min ago",
      connection: "excellent",
      firmware: "v2.3.1",
      signalStrength: 95,
      temperature: 23
    },
    {
      id: 2,
      name: "Smart Glasses - MS002",
      type: "Smart Glasses",
      patient: "Mary Smith",
      battery: 45,
      status: "warning",
      lastSync: "1 min ago",
      connection: "good",
      firmware: "v2.3.1",
      signalStrength: 78,
      temperature: 25,
      issues: ["Low battery - charge soon"]
    },
    {
      id: 3,
      name: "Health Monitor - RJ003",
      type: "Health Monitor",
      patient: "Robert Johnson",
      battery: 92,
      status: "online",
      lastSync: "5 min ago",
      connection: "excellent",
      firmware: "v3.1.0",
      signalStrength: 88,
      temperature: 22
    },
    {
      id: 4,
      name: "Smart Glasses - AW004",
      type: "Smart Glasses",
      patient: "Alice Williams",
      battery: 23,
      status: "error",
      lastSync: "15 min ago",
      connection: "poor",
      firmware: "v2.2.8",
      signalStrength: 42,
      temperature: 28,
      issues: ["Critical battery level", "Weak signal", "Firmware update available"]
    },
    {
      id: 5,
      name: "GPS Tracker - SW005",
      type: "GPS Tracker",
      patient: "Sarah Williams",
      battery: 68,
      status: "online",
      lastSync: "3 min ago",
      connection: "good",
      firmware: "v1.5.2",
      signalStrength: 72
    },
    {
      id: 6,
      name: "Smart Watch - JD006",
      type: "Smart Watch",
      patient: "John Doe",
      battery: 55,
      status: "online",
      lastSync: "1 min ago",
      connection: "excellent",
      firmware: "v4.0.1",
      signalStrength: 91,
      temperature: 24
    }
  ];

  const deviceStats = {
    total: devices.length,
    online: devices.filter(d => d.status === "online").length,
    warning: devices.filter(d => d.status === "warning").length,
    error: devices.filter(d => d.status === "error").length,
    avgBattery: Math.round(devices.reduce((acc, d) => acc + d.battery, 0) / devices.length)
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "Smart Cane":
        return "🦯";
      case "Smart Glasses":
        return "👓";
      case "Health Monitor":
        return "📱";
      case "Smart Watch":
        return "⌚";
      case "GPS Tracker":
        return "📍";
      default:
        return "📱";
    }
  };

  const getBatteryColor = (battery: number) => {
    if (battery >= 70) return "text-green-600";
    if (battery >= 30) return "text-yellow-600";
    return "text-red-600";
  };

  const getConnectionBadge = (connection: string) => {
    switch (connection) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-600 dark:bg-green-950">Excellent</Badge>;
      case "good":
        return <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-950">Good</Badge>;
      case "poor":
        return <Badge className="bg-yellow-100 text-yellow-600 dark:bg-yellow-950">Poor</Badge>;
      case "disconnected":
        return <Badge variant="destructive">Disconnected</Badge>;
    }
  };

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1>Device Health Monitoring</h1>
          <p className="text-muted-foreground mt-1">Monitor assistive device status and diagnostics</p>
        </div>
        <Button onClick={handleRefresh} variant="outline" disabled={refreshing}>
          <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Devices</p>
                <p className="text-2xl mt-1">{deviceStats.total}</p>
              </div>
              <Smartphone className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Online</p>
                <p className="text-2xl mt-1">{deviceStats.online}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warnings</p>
                <p className="text-2xl mt-1">{deviceStats.warning}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Errors</p>
                <p className="text-2xl mt-1">{deviceStats.error}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Battery</p>
                <p className="text-2xl mt-1">{deviceStats.avgBattery}%</p>
              </div>
              <Battery className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Alerts */}
      {devices.filter(d => d.status === "error").length > 0 && (
        <Card className="border-2 border-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              Critical Device Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {devices
                .filter(d => d.status === "error")
                .map((device) => (
                  <div key={device.id} className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-2 border-red-200 dark:border-red-900">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{device.name}</p>
                        <p className="text-sm text-muted-foreground">Patient: {device.patient}</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    {device.issues && (
                      <ul className="space-y-1 mt-3">
                        {device.issues.map((issue, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex gap-2 mt-3">
                      <Button size="sm">Troubleshoot</Button>
                      <Button size="sm" variant="outline">Contact Patient</Button>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Device List */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Devices ({devices.length})</TabsTrigger>
          <TabsTrigger value="cane">Smart Cane</TabsTrigger>
          <TabsTrigger value="glasses">Smart Glasses</TabsTrigger>
          <TabsTrigger value="monitors">Health Monitors</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Device Overview</CardTitle>
              <CardDescription>All registered devices and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className={`p-4 rounded-lg border-2 ${
                      device.status === "online"
                        ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900"
                        : device.status === "warning"
                        ? "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900"
                        : device.status === "error"
                        ? "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900"
                        : "bg-muted border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{getDeviceIcon(device.type)}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{device.name}</p>
                            <Badge variant={device.status === "online" ? "secondary" : device.status === "warning" ? "outline" : "destructive"}>
                              {device.status === "online" ? (
                                <>
                                  <Radio className="w-3 h-3 mr-1 animate-pulse" />
                                  Online
                                </>
                              ) : device.status === "warning" ? (
                                <>
                                  <AlertTriangle className="w-3 h-3 mr-1" />
                                  Warning
                                </>
                              ) : device.status === "error" ? (
                                <>
                                  <AlertTriangle className="w-3 h-3 mr-1" />
                                  Error
                                </>
                              ) : (
                                "Offline"
                              )}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {device.type} • Patient: {device.patient}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Battery Level</p>
                        <div className="flex items-center gap-2">
                          <Battery className={`w-4 h-4 ${getBatteryColor(device.battery)}`} />
                          <Progress value={device.battery} className="h-2 flex-1" />
                          <span className="text-sm">{device.battery}%</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Signal Strength</p>
                        <div className="flex items-center gap-2">
                          <Wifi className="w-4 h-4 text-muted-foreground" />
                          <Progress value={device.signalStrength} className="h-2 flex-1" />
                          <span className="text-sm">{device.signalStrength}%</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Connection</p>
                        {getConnectionBadge(device.connection)}
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Last Sync</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{device.lastSync}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Firmware: {device.firmware}</span>
                        {device.temperature && <span>Temp: {device.temperature}°C</span>}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Settings className="w-3 h-3 mr-1" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          <Activity className="w-3 h-3 mr-1" />
                          Diagnostics
                        </Button>
                      </div>
                    </div>

                    {device.issues && device.issues.length > 0 && (
                      <div className="mt-3 p-3 bg-background rounded border border-border">
                        <p className="text-sm font-medium mb-2">Issues:</p>
                        <ul className="space-y-1">
                          {device.issues.map((issue, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cane">
          <Card>
            <CardHeader>
              <CardTitle>Smart Cane Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Battery</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.filter(d => d.type === "Smart Cane").map((device) => (
                    <TableRow key={device.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>🦯</span>
                          <span>{device.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{device.patient}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Battery className={`w-4 h-4 ${getBatteryColor(device.battery)}`} />
                          {device.battery}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={device.status === "online" ? "secondary" : "destructive"}>
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="glasses">
          <Card>
            <CardHeader>
              <CardTitle>Smart Glasses Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Battery</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.filter(d => d.type === "Smart Glasses").map((device) => (
                    <TableRow key={device.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>👓</span>
                          <span>{device.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{device.patient}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Battery className={`w-4 h-4 ${getBatteryColor(device.battery)}`} />
                          {device.battery}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={device.status === "online" ? "secondary" : device.status === "warning" ? "outline" : "destructive"}>
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitors">
          <Card>
            <CardHeader>
              <CardTitle>Health Monitor Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Battery</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.filter(d => d.type === "Health Monitor" || d.type === "Smart Watch" || d.type === "GPS Tracker").map((device) => (
                    <TableRow key={device.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{getDeviceIcon(device.type)}</span>
                          <span>{device.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{device.patient}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Battery className={`w-4 h-4 ${getBatteryColor(device.battery)}`} />
                          {device.battery}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={device.status === "online" ? "secondary" : "destructive"}>
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            System Health
          </CardTitle>
          <CardDescription>Overall device ecosystem status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p>Device Connectivity</p>
                <p className="text-sm text-muted-foreground">
                  {deviceStats.online} of {deviceStats.total} devices connected
                </p>
              </div>
              <Badge className="bg-green-100 text-green-600 dark:bg-green-950">
                {Math.round((deviceStats.online / deviceStats.total) * 100)}%
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p>Average Battery Health</p>
                <p className="text-sm text-muted-foreground">Fleet-wide battery status</p>
              </div>
              <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-950">{deviceStats.avgBattery}%</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p>Firmware Updates</p>
                <p className="text-sm text-muted-foreground">Devices requiring updates</p>
              </div>
              <Badge variant="outline">1 pending</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p>Data Sync Status</p>
                <p className="text-sm text-muted-foreground">Last system-wide sync</p>
              </div>
              <Badge className="bg-green-100 text-green-600 dark:bg-green-950">
                <CheckCircle className="w-3 h-3 mr-1" />
                Synced
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
