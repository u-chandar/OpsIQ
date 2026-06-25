import { useState } from "react";
import { Brain, TrendingUp, Users, Activity, AlertTriangle, CheckCircle, BarChart3, UserPlus, UserCheck, Stethoscope, Heart, Eye, Plus, Edit, Package, MapPin, Smartphone, ShoppingCart, Truck, RefreshCw, MessageSquare, ClipboardList, DollarSign, Send, CheckCircle2, XCircle, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { LocationTracking } from "./LocationTracking";
import { DeviceHealth } from "./DeviceHealth";
import { AIAdminVirtualCare } from "./AIAdminVirtualCare";
import { AppointmentAlerts } from "./AppointmentAlerts";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

export function AdminDashboard() {
  const [activeManagementTab, setActiveManagementTab] = useState("overview");
  const [activeInventoryTab, setActiveInventoryTab] = useState("inventory");

  const systemStats = [
    { label: "Active Patients", value: "127", change: "+5%", trend: "up" },
    { label: "Healthcare Staff", value: "45", change: "+2", trend: "up" },
    { label: "AI Predictions Today", value: "342", change: "+12%", trend: "up" },
    { label: "System Uptime", value: "99.8%", change: "Stable", trend: "stable" }
  ];

  // Onboarding and Management Data
  const pendingOnboarding = [
    { id: 1, name: "Alice Williams", email: "alice.w@email.com", date: "Oct 14, 2025", status: "pending", visualImpairment: true },
    { id: 2, name: "David Brown", email: "david.b@email.com", date: "Oct 13, 2025", status: "pending", visualImpairment: false },
    { id: 3, name: "Emma Davis", email: "emma.d@email.com", date: "Oct 12, 2025", status: "in-progress", visualImpairment: true }
  ];

  const staffAssignments = [
    { patientId: 1, patient: "John Doe", physician: "Dr. Sarah Johnson", nurse: "Jennifer Carter", caregiver: "Mary Doe", status: "complete" },
    { patientId: 2, patient: "Mary Smith", physician: "Dr. Sarah Johnson", nurse: "Jennifer Carter", caregiver: "Unassigned", status: "partial" },
    { patientId: 3, patient: "Robert Johnson", physician: "Unassigned", nurse: "Jennifer Carter", caregiver: "Linda Johnson", status: "partial" }
  ];

  const deviceInventory = [
    { type: "Blood Pressure Monitor", total: 50, allocated: 35, available: 15 },
    { type: "Pulse Oximeter", total: 60, allocated: 42, available: 18 },
    { type: "Glucometer", total: 40, allocated: 28, available: 12 },
    { type: "Smart Watch", total: 80, allocated: 65, available: 15 },
    { type: "Smart Cane (Visual)", total: 30, allocated: 18, available: 12 },
    { type: "Voice Assistant Device", total: 40, allocated: 22, available: 18 },
    { type: "Smart Glasses (Visual)", total: 20, allocated: 8, available: 12 }
  ];

  const deviceAllocations = [
    { patient: "John Doe", devices: ["Blood Pressure Monitor", "Smart Watch", "Smart Cane", "Voice Assistant"], allocationDate: "Oct 1, 2025", status: "active" },
    { patient: "Mary Smith", devices: ["Blood Pressure Monitor", "Glucometer", "Smart Watch"], allocationDate: "Oct 5, 2025", status: "active" },
    { patient: "Alice Williams", devices: ["Pending Assignment"], allocationDate: "-", status: "pending" }
  ];

  // Inventory & Vendors Data
  const inventoryStock = [
    { id: 1, device: "Smart Cane (Visual)", sku: "SC-001", inStock: 12, reorderLevel: 10, unitPrice: 450, status: "low", lastRestocked: "Oct 1, 2025" },
    { id: 2, device: "Smart Glasses (Visual)", sku: "SG-002", inStock: 12, reorderLevel: 8, unitPrice: 850, status: "adequate", lastRestocked: "Oct 5, 2025" },
    { id: 3, device: "Blood Pressure Monitor", sku: "BPM-003", inStock: 15, reorderLevel: 12, unitPrice: 75, status: "low", lastRestocked: "Sep 28, 2025" },
    { id: 4, device: "Pulse Oximeter", sku: "PO-004", inStock: 18, reorderLevel: 15, unitPrice: 45, status: "adequate", lastRestocked: "Oct 10, 2025" },
    { id: 5, device: "Smart Watch", sku: "SW-005", inStock: 15, reorderLevel: 20, unitPrice: 299, status: "critical", lastRestocked: "Sep 20, 2025" },
    { id: 6, device: "Voice Assistant Device", sku: "VA-006", inStock: 18, reorderLevel: 15, unitPrice: 129, status: "adequate", lastRestocked: "Oct 8, 2025" },
    { id: 7, device: "GPS Tracker", sku: "GPS-007", inStock: 8, reorderLevel: 10, unitPrice: 99, status: "critical", lastRestocked: "Sep 15, 2025" }
  ];

  const pendingOrders = [
    { orderId: "ORD-2025-156", vendor: "MedTech Solutions", devices: ["Smart Watch (20 units)", "GPS Tracker (15 units)"], totalAmount: 7465, orderDate: "Oct 12, 2025", expectedDelivery: "Oct 20, 2025", status: "in-transit" },
    { orderId: "ORD-2025-157", vendor: "VisionAid Corp", devices: ["Smart Cane (15 units)", "Smart Glasses (10 units)"], totalAmount: 15250, orderDate: "Oct 13, 2025", expectedDelivery: "Oct 22, 2025", status: "processing" },
    { orderId: "ORD-2025-158", vendor: "HealthMonitor Inc", devices: ["Blood Pressure Monitor (25 units)", "Pulse Oximeter (30 units)"], totalAmount: 3225, orderDate: "Oct 14, 2025", expectedDelivery: "Oct 18, 2025", status: "confirmed" }
  ];

  const orderTracking = [
    { orderId: "ORD-2025-156", currentLocation: "Distribution Center - Chicago", estimatedArrival: "Oct 20, 2025", trackingNumber: "TRK789456123", carrier: "FedEx", status: "in-transit", progress: 65 },
    { orderId: "ORD-2025-155", currentLocation: "Delivered", estimatedArrival: "Oct 14, 2025 (Completed)", trackingNumber: "TRK789456122", carrier: "UPS", status: "delivered", progress: 100 },
    { orderId: "ORD-2025-154", currentLocation: "Origin Facility - California", estimatedArrival: "Oct 18, 2025", trackingNumber: "TRK789456121", carrier: "FedEx", status: "picked-up", progress: 25 }
  ];

  const refundRequests = [
    { refundId: "REF-2025-42", orderId: "ORD-2025-140", vendor: "MedTech Solutions", device: "Smart Watch (Defective)", quantity: 2, amount: 598, requestDate: "Oct 10, 2025", status: "approved", reason: "Device malfunction" },
    { refundId: "REF-2025-43", orderId: "ORD-2025-148", vendor: "VisionAid Corp", device: "Smart Glasses (Damaged)", quantity: 1, amount: 850, requestDate: "Oct 12, 2025", status: "pending", reason: "Shipping damage" },
    { refundId: "REF-2025-44", orderId: "ORD-2025-135", vendor: "HealthMonitor Inc", device: "Blood Pressure Monitor (Wrong model)", quantity: 5, amount: 375, requestDate: "Oct 8, 2025", status: "completed", reason: "Incorrect item" }
  ];

  const vendors = [
    { 
      id: 1, 
      name: "MedTech Solutions", 
      category: "Vital Monitoring Devices", 
      rating: 4.8, 
      activeOrders: 2, 
      totalOrders: 45, 
      reliability: 96, 
      contactPerson: "Sarah Chen", 
      email: "sarah.chen@medtech.com", 
      phone: "+1 (555) 234-5678",
      lastCommunication: "Oct 13, 2025"
    },
    { 
      id: 2, 
      name: "VisionAid Corp", 
      category: "Visual Assistance Devices", 
      rating: 4.9, 
      activeOrders: 1, 
      totalOrders: 32, 
      reliability: 98, 
      contactPerson: "Michael Rodriguez", 
      email: "m.rodriguez@visionaid.com", 
      phone: "+1 (555) 345-6789",
      lastCommunication: "Oct 14, 2025"
    },
    { 
      id: 3, 
      name: "HealthMonitor Inc", 
      category: "Health Monitoring Equipment", 
      rating: 4.7, 
      activeOrders: 1, 
      totalOrders: 38, 
      reliability: 94, 
      contactPerson: "Jennifer Park", 
      email: "j.park@healthmonitor.com", 
      phone: "+1 (555) 456-7890",
      lastCommunication: "Oct 11, 2025"
    }
  ];

  const vendorMessages = [
    { id: 1, vendor: "VisionAid Corp", subject: "Re: Smart Glasses Order Update", date: "Oct 14, 2025", preview: "Your order ORD-2025-157 has been confirmed and will ship tomorrow...", unread: true },
    { id: 2, vendor: "MedTech Solutions", subject: "Shipment Tracking - ORD-2025-156", date: "Oct 13, 2025", preview: "Your shipment is now in transit. Track your package using...", unread: false },
    { id: 3, vendor: "HealthMonitor Inc", subject: "New Product Catalog Available", date: "Oct 12, 2025", preview: "Check out our latest health monitoring devices with improved features...", unread: false }
  ];

  const aiInsights = [
    { 
      priority: "high",
      type: "Fall Risk Prediction",
      message: "Patient Mary Smith shows 78% fall risk based on mobility patterns",
      action: "Recommend preventive measures",
      confidence: 78
    },
    { 
      priority: "medium",
      type: "Medication Adherence",
      message: "John Doe medication compliance below 85% threshold",
      action: "Caretaker notification recommended",
      confidence: 92
    },
    { 
      priority: "high",
      type: "Health Deterioration",
      message: "Robert Johnson vital trends indicate potential cardiac event",
      action: "Physician review required",
      confidence: 85
    }
  ];

  const usageData = [
    { date: "Oct 8", assistance: 145, monitoring: 230, emergency: 3 },
    { date: "Oct 9", assistance: 152, monitoring: 245, emergency: 2 },
    { date: "Oct 10", assistance: 168, monitoring: 260, emergency: 4 },
    { date: "Oct 11", assistance: 175, monitoring: 255, emergency: 1 },
    { date: "Oct 12", assistance: 182, monitoring: 270, emergency: 2 },
    { date: "Oct 13", assistance: 190, monitoring: 285, emergency: 3 },
    { date: "Today", assistance: 198, monitoring: 295, emergency: 1 }
  ];

  const featureUsage = [
    { name: "Voice Assistant", value: 35, color: "#3b82f6" },
    { name: "Object Detection", value: 25, color: "#10b981" },
    { name: "Vital Monitoring", value: 30, color: "#f59e0b" },
    { name: "Medication Tracking", value: 10, color: "#8b5cf6" }
  ];

  const healthMetrics = [
    { metric: "Average Response Time", value: "1.2s", target: "< 2s", status: "good" },
    { metric: "AI Model Accuracy", value: "94.2%", target: "> 90%", status: "good" },
    { metric: "Alert Response Rate", value: "98.5%", target: "> 95%", status: "good" },
    { metric: "User Satisfaction", value: "4.7/5", target: "> 4.0", status: "good" }
  ];

  const userActivity = [
    { role: "Patients", active: 127, total: 150, percentage: 85 },
    { role: "Caretakers", active: 38, total: 45, percentage: 84 },
    { role: "Physicians", active: 12, total: 15, percentage: 80 },
    { role: "Nurses", active: 28, total: 30, percentage: 93 }
  ];

  const aiModelData = [
    { day: "Mon", accuracy: 92 },
    { day: "Tue", accuracy: 93 },
    { day: "Wed", accuracy: 91 },
    { day: "Thu", accuracy: 94 },
    { day: "Fri", accuracy: 95 },
    { day: "Sat", accuracy: 94 },
    { day: "Sun", accuracy: 94 }
  ];

  return (
    <div className="space-y-6 p-6 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Navilli" className="h-10 w-auto" />
          <div>
            <h1>AI Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">System analytics and unified healthcare management</p>
          </div>
        </div>
        <Badge variant="secondary" className="h-8 bg-orange-100 text-orange-600 dark:bg-orange-950">
          <Brain className="w-4 h-4 mr-1" />
          AI Active
        </Badge>
      </div>

      {/* ========== PATIENT & STAFF MANAGEMENT - TOP SECTION ========== */}
      <Card className="border-2 border-blue-500 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            🏥 Patient & Staff Management
          </CardTitle>
          <CardDescription>Unified onboarding, assignments, and device allocation for blind assistance & patient monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeManagementTab} onValueChange={setActiveManagementTab}>
            <TabsList className="grid w-full grid-cols-6 h-12 bg-white dark:bg-gray-800">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">📊 Overview</TabsTrigger>
              <TabsTrigger value="virtualcare" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <Video className="w-4 h-4 mr-1" />
                Virtual Care
              </TabsTrigger>
              <TabsTrigger value="onboarding" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">👤 Onboarding</TabsTrigger>
              <TabsTrigger value="assignments" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">👥 Assignments</TabsTrigger>
              <TabsTrigger value="devices" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">📱 Devices</TabsTrigger>
              <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">📦 Inventory</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4 mt-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Pending Onboarding</p>
                        <p className="text-2xl mt-1">{pendingOnboarding.filter(p => p.status === "pending").length}</p>
                      </div>
                      <UserPlus className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Incomplete Assignments</p>
                        <p className="text-2xl mt-1">{staffAssignments.filter(s => s.status !== "complete").length}</p>
                      </div>
                      <UserCheck className="w-8 h-8 text-orange-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Available Devices</p>
                        <p className="text-2xl mt-1">{deviceInventory.reduce((sum, d) => sum + d.available, 0)}</p>
                      </div>
                      <Package className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Recent Onboarding Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pendingOnboarding.slice(0, 3).map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-3">
                            <UserPlus className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm">{patient.name}</p>
                              <p className="text-xs text-muted-foreground">{patient.date}</p>
                            </div>
                          </div>
                          <Badge variant={patient.status === "pending" ? "secondary" : "outline"}>
                            {patient.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Device Allocation Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {deviceInventory.slice(0, 4).map((device, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">{device.type}</span>
                            <span className="text-sm text-muted-foreground">
                              {device.allocated}/{device.total}
                            </span>
                          </div>
                          <Progress value={(device.allocated / device.total) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Virtual Care Tab */}
            <TabsContent value="virtualcare" className="space-y-4 mt-4">
              <AppointmentAlerts role="admin" />
              <AIAdminVirtualCare />
            </TabsContent>

            {/* Onboarding Tab */}
            <TabsContent value="onboarding" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg">Patient Onboarding Queue</h3>
                  <p className="text-sm text-muted-foreground">Review and approve new patient registrations for blind assistance & monitoring</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Patient
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Patient</DialogTitle>
                      <DialogDescription>Enter patient information to begin onboarding</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="conditions">Medical Conditions</Label>
                        <Input id="conditions" placeholder="Hypertension, Diabetes" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="visualImpairment" className="rounded" />
                        <Label htmlFor="visualImpairment">Patient requires visual assistance (blind/low vision)</Label>
                      </div>
                      <Button className="w-full">Submit for Review</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Application Date</TableHead>
                        <TableHead>Visual Assistance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingOnboarding.map((patient) => (
                        <TableRow key={patient.id}>
                          <TableCell>{patient.name}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{patient.email}</TableCell>
                          <TableCell>{patient.date}</TableCell>
                          <TableCell>
                            {patient.visualImpairment ? (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-950">
                                <Eye className="w-3 h-3 mr-1" />
                                Required
                              </Badge>
                            ) : (
                              <Badge variant="outline">Not Required</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge variant={patient.status === "pending" ? "secondary" : "outline"}>
                              {patient.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Review</Button>
                              <Button size="sm">Approve</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments" className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg mb-2">Staff Assignments</h3>
                <p className="text-sm text-muted-foreground">Assign physicians, nurses, and caregivers to patients</p>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Physician</TableHead>
                        <TableHead>Nurse</TableHead>
                        <TableHead>Caregiver</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {staffAssignments.map((assignment, index) => (
                        <TableRow key={index}>
                          <TableCell>{assignment.patient}</TableCell>
                          <TableCell>
                            {assignment.physician !== "Unassigned" ? (
                              <div className="flex items-center gap-2">
                                <Stethoscope className="w-4 h-4 text-purple-500" />
                                <span className="text-sm">{assignment.physician}</span>
                              </div>
                            ) : (
                              <Badge variant="outline">Unassigned</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {assignment.nurse !== "Unassigned" ? (
                              <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-pink-500" />
                                <span className="text-sm">{assignment.nurse}</span>
                              </div>
                            ) : (
                              <Badge variant="outline">Unassigned</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {assignment.caregiver !== "Unassigned" ? (
                              <div className="flex items-center gap-2">
                                <Heart className="w-4 h-4 text-green-500" />
                                <span className="text-sm">{assignment.caregiver}</span>
                              </div>
                            ) : (
                              <Badge variant="outline">Unassigned</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge variant={assignment.status === "complete" ? "secondary" : "destructive"}>
                              {assignment.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-3 h-3 mr-1" />
                                  Edit
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Staff Assignment</DialogTitle>
                                  <DialogDescription>Assign healthcare staff to {assignment.patient}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="physician">Physician</Label>
                                    <Select defaultValue={assignment.physician}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select physician" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Dr. Sarah Johnson">Dr. Sarah Johnson</SelectItem>
                                        <SelectItem value="Dr. Michael Chen">Dr. Michael Chen</SelectItem>
                                        <SelectItem value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="nurse">Nurse</Label>
                                    <Select defaultValue={assignment.nurse}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select nurse" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Jennifer Carter">Jennifer Carter</SelectItem>
                                        <SelectItem value="Mark Thompson">Mark Thompson</SelectItem>
                                        <SelectItem value="Lisa Anderson">Lisa Anderson</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="caregiver">Caregiver</Label>
                                    <Select defaultValue={assignment.caregiver}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select caregiver" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Mary Doe">Mary Doe (Family)</SelectItem>
                                        <SelectItem value="Linda Johnson">Linda Johnson (Family)</SelectItem>
                                        <SelectItem value="Professional Caregiver">Professional Caregiver</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <Button className="w-full">Save Assignments</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Devices Tab */}
            <TabsContent value="devices" className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg mb-2">Device Management</h3>
                <p className="text-sm text-muted-foreground">Manage vital monitoring and visual assistance devices</p>
              </div>

              {/* Device Inventory */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Device Inventory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-3">Vital Monitoring Devices</h4>
                      <div className="space-y-3">
                        {deviceInventory.slice(0, 4).map((device, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center gap-3 flex-1">
                              <Activity className="w-5 h-5 text-blue-500" />
                              <div className="flex-1">
                                <p className="text-sm">{device.type}</p>
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-xs text-muted-foreground">
                                    Total: {device.total}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    Allocated: {device.allocated}
                                  </span>
                                  <span className="text-xs text-green-600">
                                    Available: {device.available}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">Allocate</Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3">Visual Assistance Devices (Blind/Low Vision)</h4>
                      <div className="space-y-3">
                        {deviceInventory.slice(4).map((device, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-900">
                            <div className="flex items-center gap-3 flex-1">
                              <Eye className="w-5 h-5 text-purple-500" />
                              <div className="flex-1">
                                <p className="text-sm">{device.type}</p>
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-xs text-muted-foreground">
                                    Total: {device.total}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    Allocated: {device.allocated}
                                  </span>
                                  <span className="text-xs text-purple-600">
                                    Available: {device.available}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">Allocate</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Device Allocations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Patient Device Allocations</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Allocated Devices</TableHead>
                        <TableHead>Allocation Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deviceAllocations.map((allocation, index) => (
                        <TableRow key={index}>
                          <TableCell>{allocation.patient}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {allocation.devices.map((device, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {device}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>{allocation.allocationDate}</TableCell>
                          <TableCell>
                            <Badge variant={allocation.status === "active" ? "secondary" : "outline"}>
                              {allocation.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline">Manage</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Manage Device Allocation</DialogTitle>
                                  <DialogDescription>Add or remove devices for {allocation.patient}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label>Current Devices</Label>
                                    <div className="flex flex-wrap gap-2">
                                      {allocation.devices.map((device, idx) => (
                                        <Badge key={idx} variant="secondary">
                                          {device}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="addDevice">Add Device</Label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select device to add" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="bp">Blood Pressure Monitor</SelectItem>
                                        <SelectItem value="pulse">Pulse Oximeter</SelectItem>
                                        <SelectItem value="glucose">Glucometer</SelectItem>
                                        <SelectItem value="watch">Smart Watch</SelectItem>
                                        <SelectItem value="cane">Smart Cane (Visual)</SelectItem>
                                        <SelectItem value="voice">Voice Assistant Device</SelectItem>
                                        <SelectItem value="glasses">Smart Glasses (Visual)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="voiceLanguage" className="flex items-center gap-2">
                                      🗣️ Voice Language (for Smart Cane & Glasses)
                                    </Label>
                                    <Select defaultValue="en-US">
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select language" />
                                      </SelectTrigger>
                                      <SelectContent className="max-h-[200px]">
                                        <SelectItem value="en-US">🇺🇸 English (US)</SelectItem>
                                        <SelectItem value="es-ES">🇪🇸 Spanish (Spain)</SelectItem>
                                        <SelectItem value="es-MX">🇲🇽 Spanish (Mexico)</SelectItem>
                                        <SelectItem value="fr-FR">🇫🇷 French</SelectItem>
                                        <SelectItem value="de-DE">🇩🇪 German</SelectItem>
                                        <SelectItem value="it-IT">🇮🇹 Italian</SelectItem>
                                        <SelectItem value="pt-BR">🇧🇷 Portuguese (Brazil)</SelectItem>
                                        <SelectItem value="zh-CN">🇨🇳 Chinese (Mandarin)</SelectItem>
                                        <SelectItem value="ja-JP">🇯🇵 Japanese</SelectItem>
                                        <SelectItem value="ko-KR">🇰🇷 Korean</SelectItem>
                                        <SelectItem value="hi-IN">🇮🇳 Hindi</SelectItem>
                                        <SelectItem value="te-IN">🇮🇳 Telugu</SelectItem>
                                        <SelectItem value="ta-IN">🇮🇳 Tamil</SelectItem>
                                        <SelectItem value="kn-IN">🇮🇳 Kannada</SelectItem>
                                        <SelectItem value="ml-IN">🇮🇳 Malayalam</SelectItem>
                                        <SelectItem value="ar-SA">🇸🇦 Arabic</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <Button className="w-full">Update Allocation</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tracking Tab */}
            <TabsContent value="tracking" className="space-y-4 mt-4">
              <LocationTracking />
            </TabsContent>

            {/* Device Health Tab */}
            <TabsContent value="health" className="space-y-4 mt-4">
              <DeviceHealth />
            </TabsContent>

            {/* Inventory & Vendors Tab */}
            <TabsContent value="inventory" className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg mb-2">Inventory & Vendor Management</h3>
                <p className="text-sm text-muted-foreground">
                  Complete device inventory, orders, tracking, refunds, and vendor communication
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Critical Stock</p>
                        <p className="text-2xl mt-1 text-red-600 dark:text-red-400">
                          {inventoryStock.filter(i => i.status === "critical").length}
                        </p>
                      </div>
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Orders</p>
                        <p className="text-2xl mt-1 text-blue-600 dark:text-blue-400">
                          {pendingOrders.length}
                        </p>
                      </div>
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-900">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">In Transit</p>
                        <p className="text-2xl mt-1 text-orange-600 dark:text-orange-400">
                          {orderTracking.filter(o => o.status === "in-transit").length}
                        </p>
                      </div>
                      <Truck className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Vendors</p>
                        <p className="text-2xl mt-1 text-green-600 dark:text-green-400">
                          {vendors.length}
                        </p>
                      </div>
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Nested Tabs for Inventory Management */}
              <Tabs value={activeInventoryTab} onValueChange={setActiveInventoryTab}>
                <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-gray-800">
                  <TabsTrigger value="inventory">📋 Stock</TabsTrigger>
                  <TabsTrigger value="orders">🛒 Orders</TabsTrigger>
                  <TabsTrigger value="tracking">🚚 Tracking</TabsTrigger>
                  <TabsTrigger value="refunds">💰 Refunds</TabsTrigger>
                  <TabsTrigger value="vendors">🤝 Vendors</TabsTrigger>
                </TabsList>

                {/* Stock Tab */}
                <TabsContent value="inventory" className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Real-time inventory levels connected to patient device assignments
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Stock
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Stock</DialogTitle>
                          <DialogDescription>Record new inventory received from vendor</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label>Device Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select device" />
                              </SelectTrigger>
                              <SelectContent>
                                {inventoryStock.map((item) => (
                                  <SelectItem key={item.id} value={item.sku}>
                                    {item.device} - {item.sku}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Quantity</Label>
                            <Input type="number" placeholder="10" />
                          </div>
                          <div className="space-y-2">
                            <Label>Order Reference</Label>
                            <Input placeholder="ORD-2025-XXX" />
                          </div>
                          <Button className="w-full">Add to Inventory</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Stock Level Cards */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-2">Critical Stock (Below Reorder Level)</p>
                        <p className="text-2xl mb-1 text-red-600 dark:text-red-400">
                          {inventoryStock.filter(i => i.status === "critical").length} Items
                        </p>
                        <p className="text-xs text-muted-foreground">Immediate reorder required</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-2">Low Stock (Near Reorder Level)</p>
                        <p className="text-2xl mb-1 text-yellow-600 dark:text-yellow-400">
                          {inventoryStock.filter(i => i.status === "low").length} Items
                        </p>
                        <p className="text-xs text-muted-foreground">Monitor closely</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-2">Adequate Stock</p>
                        <p className="text-2xl mb-1 text-green-600 dark:text-green-400">
                          {inventoryStock.filter(i => i.status === "adequate").length} Items
                        </p>
                        <p className="text-xs text-muted-foreground">Stock levels healthy</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Device Inventory Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Device Inventory (Connected to Patient Assignments)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Device</TableHead>
                            <TableHead>SKU</TableHead>
                            <TableHead>In Stock</TableHead>
                            <TableHead>Allocated</TableHead>
                            <TableHead>Available</TableHead>
                            <TableHead>Reorder Level</TableHead>
                            <TableHead>Unit Price</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Restocked</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inventoryStock.map((item) => {
                            const deviceInfo = deviceInventory.find(d => d.type === item.device);
                            const allocated = deviceInfo?.allocated || 0;
                            const available = item.inStock - allocated;
                            
                            return (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    {item.device.includes("Visual") || item.device.includes("Cane") || item.device.includes("Glasses") ? (
                                      <Eye className="w-4 h-4 text-purple-500" />
                                    ) : (
                                      <Activity className="w-4 h-4 text-blue-500" />
                                    )}
                                    <span>{item.device}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground">{item.sku}</TableCell>
                                <TableCell>
                                  <span className={`font-medium ${
                                    item.status === "critical" ? "text-red-600" :
                                    item.status === "low" ? "text-yellow-600" :
                                    "text-green-600"
                                  }`}>
                                    {item.inStock}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  <Badge variant="secondary">{allocated}</Badge>
                                </TableCell>
                                <TableCell>
                                  <Badge variant={available > 5 ? "outline" : "destructive"}>
                                    {available}
                                  </Badge>
                                </TableCell>
                                <TableCell>{item.reorderLevel}</TableCell>
                                <TableCell>${item.unitPrice}</TableCell>
                                <TableCell>
                                  <Badge variant={
                                    item.status === "critical" ? "destructive" :
                                    item.status === "low" ? "secondary" :
                                    "outline"
                                  }>
                                    {item.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground">{item.lastRestocked}</TableCell>
                                <TableCell>
                                  {item.status !== "adequate" && (
                                    <Button size="sm" variant="outline">
                                      <ShoppingCart className="w-3 h-3 mr-1" />
                                      Reorder
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Connection to Patient Allocations */}
                  <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900">
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Inventory Impact on Patient Assignments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Current inventory levels directly affect device availability for new patient assignments. 
                          Available stock = In Stock - Allocated to Patients.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <p className="text-sm font-medium mb-2">Visual Assistance Devices</p>
                            <div className="space-y-2 text-sm">
                              {inventoryStock.filter(i => i.device.includes("Visual") || i.device.includes("Cane") || i.device.includes("Glasses")).map((item) => {
                                const deviceInfo = deviceInventory.find(d => d.type === item.device);
                                const allocated = deviceInfo?.allocated || 0;
                                return (
                                  <div key={item.id} className="flex justify-between">
                                    <span>{item.device.split("(")[0].trim()}:</span>
                                    <span className="text-muted-foreground">
                                      {allocated} allocated / {item.inStock - allocated} available
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <p className="text-sm font-medium mb-2">Health Monitoring Devices</p>
                            <div className="space-y-2 text-sm">
                              {inventoryStock.filter(i => !i.device.includes("Visual") && !i.device.includes("Cane") && !i.device.includes("Glasses") && !i.device.includes("Voice")).map((item) => {
                                const deviceInfo = deviceInventory.find(d => d.type === item.device);
                                const allocated = deviceInfo?.allocated || 0;
                                return (
                                  <div key={item.id} className="flex justify-between">
                                    <span>{item.device}:</span>
                                    <span className="text-muted-foreground">
                                      {allocated} allocated / {item.inStock - allocated} available
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Manage device purchase orders from vendors</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Create Order
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Create New Purchase Order</DialogTitle>
                          <DialogDescription>Place an order for devices from a vendor</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label>Select Vendor</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose vendor" />
                              </SelectTrigger>
                              <SelectContent>
                                {vendors.map(vendor => (
                                  <SelectItem key={vendor.id} value={vendor.name}>
                                    {vendor.name} - {vendor.category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Device to Order</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select device" />
                              </SelectTrigger>
                              <SelectContent>
                                {inventoryStock.map(item => (
                                  <SelectItem key={item.id} value={item.sku}>
                                    {item.device} - {item.sku} (Current: {item.inStock})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Quantity</Label>
                              <Input type="number" placeholder="20" />
                            </div>
                            <div className="space-y-2">
                              <Label>Expected Delivery</Label>
                              <Input type="date" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Order Notes</Label>
                            <Input placeholder="Special instructions..." />
                          </div>
                          <Button className="w-full">Submit Order</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Order Summary */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Pending Orders</p>
                            <p className="text-2xl mt-1">{pendingOrders.length}</p>
                          </div>
                          <ClipboardList className="w-8 h-8 text-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Total Value</p>
                            <p className="text-2xl mt-1">
                              ${pendingOrders.reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString()}
                            </p>
                          </div>
                          <DollarSign className="w-8 h-8 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">In Transit</p>
                            <p className="text-2xl mt-1">
                              {pendingOrders.filter(o => o.status === "in-transit").length}
                            </p>
                          </div>
                          <Truck className="w-8 h-8 text-orange-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Orders Table */}
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Vendor</TableHead>
                            <TableHead>Devices</TableHead>
                            <TableHead>Total Amount</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Expected Delivery</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {pendingOrders.map((order) => (
                            <TableRow key={order.orderId}>
                              <TableCell className="font-medium">{order.orderId}</TableCell>
                              <TableCell>{order.vendor}</TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  {order.devices.map((device, idx) => (
                                    <div key={idx} className="text-xs text-muted-foreground">
                                      {device}
                                    </div>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell className="font-medium">${order.totalAmount.toLocaleString()}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">{order.orderDate}</TableCell>
                              <TableCell className="text-sm">{order.expectedDelivery}</TableCell>
                              <TableCell>
                                <Badge variant={
                                  order.status === "in-transit" ? "default" :
                                  order.status === "processing" ? "secondary" :
                                  "outline"
                                }>
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">View</Button>
                                  {order.status === "confirmed" && (
                                    <Button size="sm" variant="outline">
                                      <XCircle className="w-3 h-3 mr-1" />
                                      Cancel
                                    </Button>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tracking Tab */}
                <TabsContent value="tracking" className="space-y-4 mt-4">
                  <p className="text-sm text-muted-foreground">Real-time tracking of device shipments</p>

                  <div className="space-y-4">
                    {orderTracking.map((tracking) => (
                      <Card key={tracking.orderId} className={
                        tracking.status === "delivered" ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900" :
                        tracking.status === "in-transit" ? "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900" :
                        "bg-muted"
                      }>
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="font-medium">{tracking.orderId}</p>
                                  <Badge variant={
                                    tracking.status === "delivered" ? "secondary" :
                                    tracking.status === "in-transit" ? "default" :
                                    "outline"
                                  }>
                                    {tracking.status}
                                  </Badge>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <Truck className="w-4 h-4" />
                                    <span>Carrier: {tracking.carrier}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Location: {tracking.currentLocation}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Package className="w-4 h-4" />
                                    <span>Tracking #: {tracking.trackingNumber}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-medium">Estimated Arrival</p>
                                <p className="text-sm text-muted-foreground">{tracking.estimatedArrival}</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span>Progress</span>
                                <span className="font-medium">{tracking.progress}%</span>
                              </div>
                              <Progress value={tracking.progress} className="h-2" />
                            </div>

                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="outline">
                                <Truck className="w-3 h-3 mr-1" />
                                Track on {tracking.carrier}
                              </Button>
                              {tracking.status === "delivered" && (
                                <Button size="sm" variant="outline">
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  Confirm Receipt
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Refunds Tab */}
                <TabsContent value="refunds" className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Process refunds for defective or incorrect devices</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Request Refund
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request Refund</DialogTitle>
                          <DialogDescription>Submit a refund request for an order</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label>Order ID</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select order" />
                              </SelectTrigger>
                              <SelectContent>
                                {pendingOrders.map(order => (
                                  <SelectItem key={order.orderId} value={order.orderId}>
                                    {order.orderId} - {order.vendor}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Device</Label>
                            <Input placeholder="Smart Watch" />
                          </div>
                          <div className="space-y-2">
                            <Label>Quantity</Label>
                            <Input type="number" placeholder="1" />
                          </div>
                          <div className="space-y-2">
                            <Label>Reason</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select reason" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="defective">Device malfunction</SelectItem>
                                <SelectItem value="damaged">Shipping damage</SelectItem>
                                <SelectItem value="wrong">Incorrect item</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Description</Label>
                            <Input placeholder="Provide details..." />
                          </div>
                          <Button className="w-full">Submit Refund Request</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Refund Stats */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Pending Refunds</p>
                            <p className="text-2xl mt-1">
                              {refundRequests.filter(r => r.status === "pending").length}
                            </p>
                          </div>
                          <RefreshCw className="w-8 h-8 text-yellow-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Approved</p>
                            <p className="text-2xl mt-1">
                              {refundRequests.filter(r => r.status === "approved").length}
                            </p>
                          </div>
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Total Refund Amount</p>
                            <p className="text-2xl mt-1">
                              ${refundRequests.reduce((sum, r) => sum + r.amount, 0).toLocaleString()}
                            </p>
                          </div>
                          <DollarSign className="w-8 h-8 text-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Refunds Table */}
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Refund ID</TableHead>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Vendor</TableHead>
                            <TableHead>Device</TableHead>
                            <TableHead>Qty</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead>Request Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {refundRequests.map((refund) => (
                            <TableRow key={refund.refundId}>
                              <TableCell className="font-medium">{refund.refundId}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">{refund.orderId}</TableCell>
                              <TableCell>{refund.vendor}</TableCell>
                              <TableCell>{refund.device}</TableCell>
                              <TableCell>{refund.quantity}</TableCell>
                              <TableCell className="font-medium">${refund.amount}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">{refund.reason}</TableCell>
                              <TableCell className="text-sm text-muted-foreground">{refund.requestDate}</TableCell>
                              <TableCell>
                                <Badge variant={
                                  refund.status === "completed" ? "secondary" :
                                  refund.status === "approved" ? "default" :
                                  "outline"
                                }>
                                  {refund.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {refund.status === "pending" && (
                                  <Button size="sm" variant="outline">
                                    <CheckCircle2 className="w-3 h-3 mr-1" />
                                    Approve
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Vendors Tab */}
                <TabsContent value="vendors" className="space-y-4 mt-4">
                  <p className="text-sm text-muted-foreground">Manage vendor relationships and communications</p>

                  {/* Vendor Cards */}
                  <div className="space-y-4">
                    {vendors.map((vendor) => (
                      <Card key={vendor.id}>
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-medium">{vendor.name}</h4>
                                  <Badge variant="secondary">{vendor.category}</Badge>
                                  <Badge variant="outline" className="bg-yellow-50 text-yellow-600 dark:bg-yellow-950">
                                    ⭐ {vendor.rating}
                                  </Badge>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Active Orders</p>
                                    <p className="font-medium">{vendor.activeOrders}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Total Orders</p>
                                    <p className="font-medium">{vendor.totalOrders}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Reliability</p>
                                    <p className="font-medium text-green-600">{vendor.reliability}%</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Last Contact</p>
                                    <p className="font-medium">{vendor.lastCommunication}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="p-3 bg-muted rounded-lg">
                              <p className="text-sm font-medium mb-2">Contact Information</p>
                              <div className="grid md:grid-cols-3 gap-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Contact Person</p>
                                  <p>{vendor.contactPerson}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Email</p>
                                  <p>{vendor.email}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Phone</p>
                                  <p>{vendor.phone}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <Send className="w-3 h-3 mr-1" />
                                    Send Message
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Send Message to {vendor.name}</DialogTitle>
                                    <DialogDescription>Communicate with vendor about orders or inquiries</DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label>Subject</Label>
                                      <Input placeholder="Order inquiry..." />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Message</Label>
                                      <textarea
                                        className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background"
                                        placeholder="Type your message here..."
                                      />
                                    </div>
                                    <Button className="w-full">
                                      <Send className="w-4 h-4 mr-2" />
                                      Send Message
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button size="sm" variant="outline">
                                <ShoppingCart className="w-3 h-3 mr-1" />
                                New Order
                              </Button>
                              <Button size="sm" variant="outline">View History</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Vendor Messages */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Recent Vendor Communications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {vendorMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`p-4 rounded-lg border cursor-pointer transition-colors hover:bg-muted ${
                              message.unread ? "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900" : "bg-muted"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{message.vendor}</p>
                                {message.unread && (
                                  <Badge variant="default" className="text-xs">New</Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{message.date}</p>
                            </div>
                            <p className="text-sm mb-1">{message.subject}</p>
                            <p className="text-sm text-muted-foreground">{message.preview}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      {/* ========== END PATIENT & STAFF MANAGEMENT ========== */}

      {/* System Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl mt-1">{stat.value}</p>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className={`w-4 h-4 ${
                  stat.trend === "up" ? "text-green-600" : "text-muted-foreground"
                }`} />
                <span className="text-xs text-muted-foreground">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights */}
      <Card className="border-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-orange-600" />
            AI-Powered Insights
          </CardTitle>
          <CardDescription>Predictive analytics and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  insight.priority === "high" 
                    ? "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900" 
                    : "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={insight.priority === "high" ? "destructive" : "secondary"}>
                      {insight.priority.toUpperCase()}
                    </Badge>
                    <p>{insight.type}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{insight.message}</p>
                <Button size="sm" variant="outline">
                  {insight.action}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Feature Usage Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  key="pie-feature-usage"
                  data={featureUsage}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {featureUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userActivity.map((user, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{user.role}</span>
                    <span className="text-sm text-muted-foreground">
                      {user.active}/{user.total} active
                    </span>
                  </div>
                  <Progress value={user.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            7-Day Usage Trends
          </CardTitle>
          <CardDescription>Daily feature interactions across blind assistance & monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="date" style={{ fontSize: '12px' }} />
              <YAxis style={{ fontSize: '12px' }} />
              <Tooltip />
              <Bar key="bar-assistance" dataKey="assistance" fill="#3b82f6" name="Assistance" />
              <Bar key="bar-monitoring" dataKey="monitoring" fill="#10b981" name="Monitoring" />
              <Bar key="bar-emergency" dataKey="emergency" fill="#ef4444" name="Emergency" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* System Health Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            System Health Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm">{metric.metric}</p>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-xl">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">Target: {metric.target}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            System Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-900">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm">All systems operational</p>
                <p className="text-xs text-muted-foreground">Last checked: Just now</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900">
              <Activity className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm">Database backup completed</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Model Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            AI Model Performance
          </CardTitle>
          <CardDescription>Last 7 days accuracy metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={aiModelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="day" style={{ fontSize: '12px' }} />
              <YAxis domain={[85, 100]} style={{ fontSize: '12px' }} />
              <Tooltip />
              <Line
                key="line-accuracy"
                type="monotone"
                dataKey="accuracy"
                stroke="rgb(249, 115, 22)"
                strokeWidth={2}
                name="Accuracy %"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}