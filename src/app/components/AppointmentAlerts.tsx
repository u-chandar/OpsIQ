import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Bell,
  Calendar,
  Clock,
  Video,
  CheckCheck,
  X,
  AlertCircle,
  Users,
  MessageSquare
} from "lucide-react";

interface AppointmentAlert {
  id: string;
  type: "reminder" | "confirmation" | "reschedule" | "urgent" | "noshow";
  patientName?: string;
  providerName?: string;
  appointmentType: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "action_required";
  role: "patient" | "physician" | "nurse" | "caretaker" | "admin";
  message: string;
  priority: "low" | "medium" | "high" | "urgent";
}

interface AppointmentAlertsProps {
  role: "patient" | "physician" | "nurse" | "caretaker" | "admin";
  alerts?: AppointmentAlert[];
}

export function AppointmentAlerts({ role, alerts }: AppointmentAlertsProps) {
  // Sample alerts based on role
  const defaultAlerts: AppointmentAlert[] = role === "patient" ? [
    {
      id: "1",
      type: "reminder",
      providerName: "Dr. James Wilson",
      appointmentType: "Diabetes Management Review",
      date: "Monday, Dec 25, 2024",
      time: "10:00 AM - 10:30 AM",
      status: "confirmed",
      role: "patient",
      message: "Your telehealth appointment is confirmed for tomorrow",
      priority: "high"
    }
  ] : role === "physician" ? [
    {
      id: "2",
      type: "reminder",
      patientName: "Sarah Martinez",
      appointmentType: "Diabetes Management Review",
      date: "Monday, Dec 25, 2024",
      time: "10:00 AM - 10:30 AM",
      status: "confirmed",
      role: "physician",
      message: "Upcoming telehealth appointment tomorrow",
      priority: "medium"
    }
  ] : role === "admin" ? [
    {
      id: "3",
      type: "confirmation",
      patientName: "Sarah Martinez",
      providerName: "Dr. James Wilson",
      appointmentType: "Diabetes Management Review",
      date: "Monday, Dec 25, 2024",
      time: "10:00 AM - 10:30 AM",
      status: "action_required",
      role: "admin",
      message: "New appointment request awaiting approval",
      priority: "urgent"
    },
    {
      id: "4",
      type: "reschedule",
      patientName: "Mary Smith",
      providerName: "Dr. Michael Brown",
      appointmentType: "Cardiology Follow-up",
      date: "Dec 27, 2024",
      time: "2:00 PM",
      status: "action_required",
      role: "admin",
      message: "Patient requested to reschedule from Dec 26 to Dec 27",
      priority: "high"
    }
  ] : [];

  const activeAlerts = alerts || defaultAlerts;

  if (activeAlerts.length === 0) {
    return null;
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "border-red-500 bg-red-50 dark:bg-red-950";
      case "high":
        return "border-orange-500 bg-orange-50 dark:bg-orange-950";
      case "medium":
        return "border-blue-500 bg-blue-50 dark:bg-blue-950";
      default:
        return "border-gray-500 bg-gray-50 dark:bg-gray-950";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertCircle className="w-5 h-5 text-red-600 animate-pulse" />;
      case "reschedule":
        return <Calendar className="w-5 h-5 text-orange-600" />;
      case "confirmation":
        return <CheckCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <Bell className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-3">
      {activeAlerts.map((alert) => (
        <Card key={alert.id} className={getPriorityColor(alert.priority)}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getIcon(alert.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <p className="font-medium text-sm">
                    {alert.message}
                  </p>
                  <Badge 
                    variant={alert.priority === "urgent" ? "destructive" : "secondary"}
                    className="ml-2"
                  >
                    {alert.priority.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="space-y-1 text-sm text-muted-foreground mb-3">
                  {role === "patient" && alert.providerName && (
                    <p className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {alert.providerName}
                    </p>
                  )}
                  {(role === "physician" || role === "nurse" || role === "admin") && alert.patientName && (
                    <p className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Patient: {alert.patientName}
                      {role === "admin" && alert.providerName && ` • Provider: ${alert.providerName}`}
                    </p>
                  )}
                  <p>{alert.appointmentType}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {alert.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {alert.time}
                    </span>
                  </div>
                </div>

                {/* Role-specific actions */}
                {role === "patient" && alert.status === "confirmed" && (
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCheck className="w-3 h-3 mr-1" />
                      Confirm Attendance
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="w-3 h-3 mr-1" />
                      Reschedule
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="w-3 h-3 mr-1" />
                      Test Video
                    </Button>
                  </div>
                )}

                {role === "physician" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Users className="w-3 h-3 mr-1" />
                      View Patient Chart
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Message Patient
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="w-3 h-3 mr-1" />
                      Reschedule
                    </Button>
                  </div>
                )}

                {role === "nurse" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Users className="w-3 h-3 mr-1" />
                      Patient Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Contact Patient
                    </Button>
                  </div>
                )}

                {role === "admin" && alert.status === "action_required" && (
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCheck className="w-3 h-3 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="w-3 h-3 mr-1" />
                      Modify Time
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Request Info
                    </Button>
                    <Button size="sm" variant="destructive">
                      <X className="w-3 h-3 mr-1" />
                      Decline
                    </Button>
                  </div>
                )}

                {role === "caretaker" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <CheckCheck className="w-3 h-3 mr-1" />
                      Acknowledge
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Contact Care Team
                    </Button>
                  </div>
                )}
              </div>
              
              <Button size="sm" variant="ghost">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
