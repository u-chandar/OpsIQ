import { UserCircle, Stethoscope, Heart, Brain, Activity } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

interface RoleSelectorProps {
  onSelectRole: (role: string) => void;
}

export function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  const outerRoles = [
    {
      id: "patient",
      name: "Patient",
      description: "Health monitoring and assistance",
      icon: <UserCircle className="w-10 h-10" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      position: "top" // 12 o'clock
    },
    {
      id: "physician",
      name: "Physician",
      description: "Patient records and care",
      icon: <Stethoscope className="w-10 h-10" />,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      position: "right" // 3 o'clock
    },
    {
      id: "nurse",
      name: "Nurse",
      description: "Patient care and medications",
      icon: <Activity className="w-10 h-10" />,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
      position: "bottom" // 6 o'clock
    },
    {
      id: "caretaker",
      name: "Caretaker",
      description: "Monitor and care for loved ones",
      icon: <Heart className="w-10 h-10" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      position: "left" // 9 o'clock
    }
  ];

  const centerRole = {
    id: "admin",
    name: "AI Admin",
    description: "System analytics and AI insights",
    icon: <Brain className="w-16 h-16" />,
    color: "bg-gradient-to-br from-orange-500 to-amber-500",
    hoverColor: "hover:from-orange-600 hover:to-amber-600"
  };

  const getPositionClass = (position: string) => {
    switch (position) {
      case "top":
        return "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2";
      case "right":
        return "right-0 top-1/2 translate-x-1/2 -translate-y-1/2";
      case "bottom":
        return "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2";
      case "left":
        return "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl space-y-12">
        {/* Logo and Branding */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Navilli" className="h-20 w-auto" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl">Welcome to Navilli</h1>
            <p className="text-lg text-muted-foreground">Healthcare Companion</p>
          </div>
          <p className="text-muted-foreground">Select your role to continue</p>
        </div>

        {/* Circular Layout */}
        <div className="relative w-full max-w-3xl mx-auto" style={{ aspectRatio: "1/1", minHeight: "600px" }}>
          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Top to Center */}
            <line x1="50%" y1="12%" x2="50%" y2="50%" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="8,4" />
            {/* Right to Center */}
            <line x1="88%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient2)" strokeWidth="2" strokeDasharray="8,4" />
            {/* Bottom to Center */}
            <line x1="50%" y1="88%" x2="50%" y2="50%" stroke="url(#lineGradient3)" strokeWidth="2" strokeDasharray="8,4" />
            {/* Left to Center */}
            <line x1="12%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient4)" strokeWidth="2" strokeDasharray="8,4" />
          </svg>

          {/* Outer Circle Container */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/20" style={{ margin: "10%" }}>
            {/* Outer Role Cards */}
            {outerRoles.map((role) => (
              <div
                key={role.id}
                className={`absolute ${getPositionClass(role.position)}`}
                style={{ zIndex: 10 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-2xl transition-all hover:scale-110 w-44 border-2"
                  onClick={() => onSelectRole(role.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={`${role.color} ${role.hoverColor} text-white p-3 rounded-full transition-colors shadow-lg`}>
                        {role.icon}
                      </div>
                      <div>
                        <h3 className="text-base mb-1">{role.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Center AI Admin Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
            <Card
              className="cursor-pointer hover:shadow-2xl transition-all hover:scale-110 w-56 border-4 border-orange-300 dark:border-orange-700"
              onClick={() => onSelectRole(centerRole.id)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${centerRole.color} ${centerRole.hoverColor} text-white p-5 rounded-full transition-all shadow-2xl animate-pulse`}>
                    {centerRole.icon}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{centerRole.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {centerRole.description}
                    </p>
                  </div>
                  <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                    Central Hub
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Decorative pulsing rings around center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}>
            <div className="w-64 h-64 rounded-full border-2 border-orange-300/30 dark:border-orange-700/30 animate-ping" style={{ animationDuration: "3s" }}></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}>
            <div className="w-72 h-72 rounded-full border-2 border-orange-300/20 dark:border-orange-700/20 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
          </div>
        </div>

        {/* Legend */}
        <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>The AI Admin serves as the central coordination hub, connecting all healthcare roles in the ecosystem</p>
        </div>
      </div>
    </div>
  );
}
