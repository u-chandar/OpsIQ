import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Heart, 
  Eye, 
  Activity, 
  Users, 
  Shield, 
  Smartphone,
  Zap,
  Globe,
  Brain,
  MapPin,
  Video,
  Clock,
  CheckCircle2,
  Phone
} from "lucide-react";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";

export function ProductBrochure() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Cover Page */}
      <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white border-none shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <CardContent className="p-12 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <img src={logo} alt="Navilli Logo" className="h-20 w-auto drop-shadow-xl" />
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">
                HealthCare Companion
              </h1>
              <p className="text-2xl font-light text-blue-100">
                Unified Healthcare Ecosystem
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  IoT Connected
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  24 Languages
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  Multi-Role
                </Badge>
              </div>
            </div>
            <p className="text-lg text-blue-50 max-w-2xl leading-relaxed">
              Merging blind mobile assistance and patient remote monitoring into a comprehensive healthcare solution with AI-powered analytics, real-time monitoring, and integrated telehealth.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Core Features - Page 2 */}
      <Card className="shadow-xl border-2">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="h-7 w-7 text-blue-600" />
            Core Capabilities
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureItem
              icon={<Eye className="h-6 w-6" />}
              title="Visual Assistance"
              description="Smart Cane & Smart Glasses with object detection, voice guidance, and navigation support in 24 languages"
              color="text-blue-600"
            />
            <FeatureItem
              icon={<Activity className="h-6 w-6" />}
              title="Vital Signs Monitoring"
              description="Real-time tracking of heart rate, blood pressure, glucose, SpO2, and comprehensive fitness metrics"
              color="text-red-600"
            />
            <FeatureItem
              icon={<Brain className="h-6 w-6" />}
              title="Agentic AI System"
              description="Multi-agent AI architecture with 12 preventive models for diabetes, cardiac, respiratory, and lifestyle management"
              color="text-purple-600"
            />
            <FeatureItem
              icon={<Video className="h-6 w-6" />}
              title="Virtual Care Integration"
              description="Embedded telehealth with video consultations, appointment scheduling, secure messaging, and live vitals display"
              color="text-green-600"
            />
            <FeatureItem
              icon={<MapPin className="h-6 w-6" />}
              title="Location & Safety"
              description="GPS tracking, geo-fencing, emergency alerts, and accessible ride booking integration"
              color="text-orange-600"
            />
            <FeatureItem
              icon={<Smartphone className="h-6 w-6" />}
              title="Device Health"
              description="Comprehensive monitoring for Smart Canes, Glasses, Health Monitors, GPS Trackers, and Smart Watches"
              color="text-indigo-600"
            />
          </div>
        </CardContent>
      </Card>

      {/* Role-Based Dashboards - Page 3 */}
      <Card className="shadow-xl border-2">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Users className="h-7 w-7 text-purple-600" />
            Role-Based Dashboards
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            <RoleCard
              role="Patient"
              icon={<Heart className="h-8 w-8" />}
              features={[
                "Personal health dashboard with vitals tracking",
                "Medication reminders and adherence tracking",
                "Visual assistance for blind users",
                "Virtual care consultations",
                "Fitness module with goal tracking",
                "Emergency SOS button"
              ]}
              color="bg-blue-500"
            />
            <Separator />
            <RoleCard
              role="Caretaker"
              icon={<Shield className="h-8 w-8" />}
              features={[
                "Real-time patient monitoring",
                "Location tracking and geo-fence alerts",
                "Medication management oversight",
                "Direct communication with healthcare team",
                "Emergency notification system",
                "Activity and fitness monitoring"
              ]}
              color="bg-green-500"
            />
            <Separator />
            <RoleCard
              role="Healthcare Providers"
              icon={<Activity className="h-8 w-8" />}
              features={[
                "Multi-patient monitoring dashboard",
                "AI-powered clinical insights and alerts",
                "Virtual care consultation rooms",
                "CGM integration with real-time glucose data",
                "Treatment plan management",
                "Analytics and reporting tools"
              ]}
              color="bg-purple-500"
            />
            <Separator />
            <RoleCard
              role="AI Admin"
              icon={<Brain className="h-8 w-8" />}
              features={[
                "System-wide analytics and insights",
                "Patient & staff management",
                "Inventory & vendor management",
                "Edge AI architecture monitoring",
                "Agentic AI model orchestration",
                "Workflow automation"
              ]}
              color="bg-indigo-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack - Page 4 */}
      <Card className="shadow-xl border-2">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="h-7 w-7 text-indigo-600" />
            Technology & Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <TechCard
              title="AI & Analytics"
              items={[
                "Multi-agent agentic AI",
                "12 preventive models",
                "Real-time predictions",
                "Edge AI processing"
              ]}
            />
            <TechCard
              title="IoT Devices"
              items={[
                "Smart Canes",
                "Smart Glasses",
                "Health Monitors",
                "GPS Trackers"
              ]}
            />
            <TechCard
              title="Backend"
              items={[
                "Supabase database",
                "Edge functions",
                "OAuth 2.0 auth",
                "FHIR/HL7 v2"
              ]}
            />
          </div>
          
          <Separator className="my-6" />
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Key Integrations
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <IntegrationItem
                title="CGM Integration"
                description="OAuth 2.0 authenticated API with 3-minute sampling, alert thresholds, and FHIR compliance"
              />
              <IntegrationItem
                title="Telehealth Platform"
                description="Embedded video consultations with live vitals sharing and secure messaging"
              />
              <IntegrationItem
                title="Ride Booking"
                description="Comprehensive accessible transportation with real-time tracking"
              />
              <IntegrationItem
                title="Multi-Language Support"
                description="24 language support for visual assistance devices"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & CTA - Page 5 */}
      <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-none shadow-2xl">
        <CardContent className="p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Transform Healthcare Delivery</h2>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">
              Join us in revolutionizing patient care with AI-powered monitoring, visual assistance, and integrated telehealth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
              <ContactItem
                icon={<Phone className="h-8 w-8" />}
                title="Get in Touch"
                content="Contact our team"
              />
              <ContactItem
                icon={<Globe className="h-8 w-8" />}
                title="Learn More"
                content="www.navilli.com"
              />
              <ContactItem
                icon={<Clock className="h-8 w-8" />}
                title="Schedule Demo"
                content="Book a consultation"
              />
            </div>

            <div className="pt-8">
              <img src={logo} alt="Navilli Logo" className="h-12 w-auto mx-auto drop-shadow-xl" />
              <p className="text-sm text-blue-100 mt-4">© 2026 Navilli. All rights reserved.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper Components
function FeatureItem({ icon, title, description, color }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string;
}) {
  return (
    <div className="flex gap-4">
      <div className={`${color} flex-shrink-0 mt-1`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function RoleCard({ role, icon, features, color }: {
  role: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className={`${color} text-white p-3 rounded-lg`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{role}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-3 pl-16">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border">
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntegrationItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function ContactItem({ icon, title, content }: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-white/20 p-4 rounded-full">
        {icon}
      </div>
      <div className="text-center">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-blue-100">{content}</p>
      </div>
    </div>
  );
}
