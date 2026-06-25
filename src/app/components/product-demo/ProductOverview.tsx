import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Lightbulb, Target, TrendingUp, Layers, Users, Eye, Heart, Stethoscope, Brain } from "lucide-react";

export function ProductOverview() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            What is HealthCare Companion?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            A unified mobile healthcare platform that merges <strong>blind mobile assistance</strong> and <strong>patient remote monitoring</strong> into a single comprehensive solution. The app provides role-based dashboards for patients, caretakers, physicians, nurses, and AI admins, each with customized interfaces specific to their needs.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-blue-500 bg-muted rounded-lg">
              <h4 className="mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-500" />
                Visual Assistance
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Smart Cane & Smart Glasses integration</li>
                <li>• Voice assistance with 24-language support</li>
                <li>• Object detection & navigation guidance</li>
                <li>• Accessible ride booking & tracking</li>
              </ul>
            </div>
            <div className="p-4 border-l-4 border-red-500 bg-muted rounded-lg">
              <h4 className="mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                Health Monitoring
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Vital signs tracking (HR, BP, SpO2, temp)</li>
                <li>• Medication adherence tracking</li>
                <li>• Emergency SOS alerts</li>
                <li>• AI-powered health analytics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-500" />
            Role-Based Dashboards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-3xl mb-2">👤</div>
              <p className="font-medium">Patient</p>
              <Badge className="mt-2" variant="outline">Self-Management</Badge>
            </div>
            <div className="text-center p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
              <div className="text-3xl mb-2">❤️</div>
              <p className="font-medium">Caretaker</p>
              <Badge className="mt-2" variant="outline">Remote Care</Badge>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-3xl mb-2">⚕️</div>
              <p className="font-medium">Physician</p>
              <Badge className="mt-2" variant="outline">Clinical View</Badge>
            </div>
            <div className="text-center p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
              <div className="text-3xl mb-2">👩‍⚕️</div>
              <p className="font-medium">Nurse</p>
              <Badge className="mt-2" variant="outline">Bedside Care</Badge>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="text-3xl mb-2">🤖</div>
              <p className="font-medium">AI Admin</p>
              <Badge className="mt-2" variant="outline">Analytics</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            Core Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="mb-2 font-medium flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-500" />
                AI-Powered Intelligence
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Predictive health analytics</li>
                <li>• Fall risk assessment</li>
                <li>• Medication adherence forecasting</li>
                <li>• Multi-agent AI system (12 models)</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-medium flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-red-500" />
                Comprehensive Monitoring
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Continuous glucose monitoring (CGM)</li>
                <li>• Device health tracking</li>
                <li>• Geo-fencing & GPS tracking</li>
                <li>• Fitness & activity modules</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-medium flex items-center gap-2">
                <Target className="w-4 h-4 text-green-500" />
                Embedded Virtual Care
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Video consultations</li>
                <li>• Secure messaging</li>
                <li>• Live vitals during calls</li>
                <li>• Unified scheduling system</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Technology Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="mb-2 font-medium">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>React + TypeScript</Badge>
                <Badge>Tailwind CSS v4</Badge>
                <Badge>ShadCN UI</Badge>
                <Badge>Motion (Framer)</Badge>
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Backend</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Supabase</Badge>
                <Badge variant="outline">Edge Functions</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Hono Server</Badge>
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-medium">AI/ML</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">TensorFlow</Badge>
                <Badge className="bg-purple-600">YOLOv5</Badge>
                <Badge className="bg-purple-600">12 Agentic Models</Badge>
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Integrations</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-600">CGM OAuth 2.0</Badge>
                <Badge className="bg-orange-600">FHIR/HL7</Badge>
                <Badge className="bg-orange-600">Uber/Lyft APIs</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
