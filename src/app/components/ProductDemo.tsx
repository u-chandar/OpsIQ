import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";
import { CGMIntegration } from "./CGMIntegration";
import { ProductOverview } from "./product-demo/ProductOverview";
import { ProductBrochure } from "./ProductBrochure";

// Problem Statement Component
function ProblemStatement() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          Healthcare Challenges We Address
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Visual Impairment Challenges */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span className="text-2xl">👁️</span>
              Visual Impairment Challenges
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Navigation & Mobility:</strong> 285 million visually impaired individuals worldwide struggle with independent navigation and obstacle detection
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Object Recognition:</strong> Difficulty identifying objects, reading text, and recognizing faces in daily activities
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Transportation Access:</strong> Limited accessible ride-booking options with proper visual/audio guidance
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Language Barriers:</strong> Most assistive technologies support limited languages, excluding diverse global populations
                </div>
              </li>
            </ul>
          </div>

          {/* Remote Patient Monitoring Challenges */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              Remote Patient Monitoring Gaps
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Fragmented Systems:</strong> Healthcare providers struggle with disconnected monitoring tools and manual data collection
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Delayed Interventions:</strong> Lack of real-time vital signs monitoring leads to preventable health complications
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Medication Non-Adherence:</strong> 50% of chronic disease patients don't take medications as prescribed, leading to $290B annual costs
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Emergency Response:</strong> Delayed emergency detection and slow response times for critical health events
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <div>
                  <strong>Device Management:</strong> No unified platform to monitor health of multiple IoT devices (Smart Canes, Glasses, Monitors, GPS Trackers)
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">285M</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Visually Impaired</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$290B</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Medication Non-Adherence Cost</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Medication Non-Adherence Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">24</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Language Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Solution Benefits Component
function SolutionBenefits() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          HealthCare Companion Solution
        </h2>

        <div className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A unified mobile healthcare platform merging <strong>blind mobile assistance</strong> and <strong>remote patient monitoring</strong>
            into a single comprehensive product with role-based dashboards, AI-powered analytics, and multi-device integration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Visual Assistance Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
            <div className="text-3xl mb-3">🦯</div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Visual Assistance</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Voice-guided navigation</li>
              <li>✓ Real-time object detection</li>
              <li>✓ Smart Cane & Glasses integration</li>
              <li>✓ 24-language support</li>
              <li>✓ Accessible ride booking</li>
              <li>✓ Geo-fencing & tracking</li>
            </ul>
          </div>

          {/* Health Monitoring Benefits */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">Health Monitoring</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Real-time vital signs tracking</li>
              <li>✓ Medication management</li>
              <li>✓ CGM API integration</li>
              <li>✓ Emergency alert system</li>
              <li>✓ Virtual care telehealth</li>
              <li>✓ Device health monitoring</li>
            </ul>
          </div>

          {/* AI & Analytics Benefits */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">AI-Powered Intelligence</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Edge AI Architecture</li>
              <li>✓ 12 preventive AI models</li>
              <li>✓ Agentic AI system</li>
              <li>✓ Predictive analytics</li>
              <li>✓ Automated insights</li>
              <li>✓ Fitness optimization</li>
            </ul>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">For Patients & Users</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Enhanced independence through AI-powered visual assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Proactive health monitoring with 24/7 vital signs tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Automated medication reminders and adherence tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Emergency SOS with GPS location sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Comprehensive fitness & wellness modules</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">For Healthcare Providers</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Unified dashboard for multi-patient monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Real-time alerts for critical health events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>AI-powered predictive analytics for early intervention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Embedded virtual care telehealth integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Inventory & vendor management for supplies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Technical Architecture Component
function TechnicalArchitecture() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Architecture
        </h2>

        {/* Architecture Diagram */}
        <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">System Architecture Overview</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Frontend Layer */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS v4</li>
                <li>• Role-based Dashboards</li>
                <li>• Responsive Mobile UI</li>
                <li>• Voice Assistant UI</li>
                <li>• Real-time Charts (Recharts)</li>
              </ul>
            </div>

            {/* Backend Layer */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• Supabase Edge Functions</li>
                <li>• Hono Web Server</li>
                <li>• PostgreSQL Database</li>
                <li>• Key-Value Store</li>
                <li>• Authentication & Auth</li>
                <li>• Blob Storage</li>
              </ul>
            </div>

            {/* IoT & AI Layer */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">IoT & AI Layer</h4>
              <ul className="space-y-2 text-sm">
                <li>• Edge AI Processing</li>
                <li>• Smart Cane Devices</li>
                <li>• Smart Glasses</li>
                <li>• Health Monitors</li>
                <li>• GPS Trackers</li>
                <li>• Smart Watches</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Core Technologies</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <strong className="text-blue-600 dark:text-blue-400">Mobile Framework:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">React Native / Progressive Web App</span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <strong className="text-purple-600 dark:text-purple-400">Backend:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Supabase (PostgreSQL + Edge Functions)</span>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong className="text-green-600 dark:text-green-400">AI/ML:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">TensorFlow Lite, Edge AI, Agentic AI Models</span>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                <strong className="text-orange-600 dark:text-orange-400">Real-time:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">WebSockets, Supabase Realtime</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Integration APIs</h3>
            <div className="space-y-3">
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <strong className="text-red-600 dark:text-red-400">CGM Integration:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Dexcom, Abbott FreeStyle Libre</span>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                <strong className="text-pink-600 dark:text-pink-400">Telehealth:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Embedded Virtual Care APIs</span>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                <strong className="text-cyan-600 dark:text-cyan-400">Ride Booking:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Uber, Lyft Accessibility APIs</span>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                <strong className="text-teal-600 dark:text-teal-400">Maps & Navigation:</strong>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Google Maps, GPS Tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Security & Compliance</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <strong className="text-red-600 dark:text-red-400">🔒 HIPAA Compliant</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">End-to-end encryption for health data</p>
            </div>
            <div>
              <strong className="text-orange-600 dark:text-orange-400">🛡️ SOC 2 Type II</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Enterprise-grade security standards</p>
            </div>
            <div>
              <strong className="text-yellow-600 dark:text-yellow-400">🔐 GDPR Ready</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Data privacy & user consent management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Role Workflows Component
function RoleWorkflows() {
  const roles = [
    {
      name: "Patient",
      icon: "👤",
      color: "blue",
      workflows: [
        "View real-time vital signs dashboard",
        "Receive medication reminders",
        "Access voice-guided navigation",
        "Emergency SOS with GPS sharing",
        "Book accessible rides",
        "Track fitness & wellness goals",
        "Join virtual care telehealth sessions"
      ]
    },
    {
      name: "Caretaker",
      icon: "👨‍👩‍👧",
      color: "green",
      workflows: [
        "Monitor multiple patients simultaneously",
        "Receive critical health alerts",
        "Track patient location via geo-fencing",
        "Manage medication schedules",
        "View device health status",
        "Coordinate with healthcare providers",
        "Access emergency contact features"
      ]
    },
    {
      name: "Physician",
      icon: "👨‍⚕️",
      color: "purple",
      workflows: [
        "Review patient health analytics",
        "Access AI-powered predictive insights",
        "Prescribe medications remotely",
        "Conduct virtual consultations",
        "Monitor CGM data integration",
        "Analyze treatment effectiveness",
        "Manage inventory & vendors"
      ]
    },
    {
      name: "Nurse",
      icon: "👩‍⚕️",
      color: "pink",
      workflows: [
        "Triage patient alerts by priority",
        "Update vital signs manually",
        "Coordinate care plans",
        "Manage medication administration",
        "Document patient interactions",
        "Support telehealth sessions",
        "Track device compliance"
      ]
    },
    {
      name: "AI Admin",
      icon: "🤖",
      color: "orange",
      workflows: [
        "Configure 12 preventive AI models",
        "Monitor Edge AI performance",
        "Analyze system-wide analytics",
        "Manage agentic AI scenarios",
        "Optimize model predictions",
        "Review AI recommendations",
        "Configure alert thresholds"
      ]
    }
  ];

  const colorClasses = {
    blue: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800",
    green: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800",
    purple: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800",
    pink: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-pink-200 dark:border-pink-800",
    orange: "from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-800"
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-6">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Role-Based Workflows
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`bg-gradient-to-br ${colorClasses[role.color]} border p-6 rounded-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{role.icon}</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{role.name}</h3>
            </div>
            <ul className="space-y-2">
              {role.workflows.map((workflow, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{workflow}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Team & Roadmap Component
function TeamRoadmap({ teamResources, onResourceChange, downloadAsPDF, downloadAsPPT }: any) {
  const teamRoles = [
    { key: "projectLead", label: "Project Lead", icon: "👨‍💼", color: "purple" },
    { key: "uiux", label: "UI/UX Designer", icon: "🎨", color: "pink" },
    { key: "fullstack", label: "Full Stack Developer", icon: "💻", color: "blue" },
    { key: "aimliot", label: "AI/ML/IoT Engineer", icon: "🤖", color: "green" },
    { key: "technicalAdvisor", label: "Technical Advisor", icon: "🔬", color: "cyan" },
    { key: "businessMarketing", label: "Business & Marketing", icon: "📊", color: "orange" },
    { key: "iotProcurement", label: "IoT Procurement", icon: "📦", color: "teal" }
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1: Foundation (Q1 2026)",
      items: [
        "✓ Core mobile app architecture with React + TypeScript",
        "✓ Supabase backend integration & authentication",
        "✓ Role-based dashboard implementation",
        "✓ Basic vital signs monitoring",
        "✓ Smart device connectivity (Cane, Glasses, Monitors)"
      ],
      status: "completed"
    },
    {
      phase: "Phase 2: AI & Integration (Q2 2026)",
      items: [
        "✓ Edge AI Architecture with 12 preventive models",
        "✓ Agentic AI system with 5 real-world scenarios",
        "✓ CGM API integration (Dexcom, Abbott)",
        "✓ Virtual care telehealth embedding",
        "✓ 24-language support for visual assistance"
      ],
      status: "completed"
    },
    {
      phase: "Phase 3: Advanced Features (Q3 2026)",
      items: [
        "⏳ Advanced fitness modules with AI optimization",
        "⏳ Inventory & vendor management system",
        "⏳ Enhanced geo-fencing with predictive routing",
        "⏳ Multi-device health monitoring dashboard",
        "⏳ Voice assistant v2.0 with natural language"
      ],
      status: "in-progress"
    },
    {
      phase: "Phase 4: Scale & Compliance (Q4 2026)",
      items: [
        "🔜 HIPAA compliance certification",
        "🔜 SOC 2 Type II audit completion",
        "🔜 Clinical trials & FDA approval process",
        "🔜 Enterprise deployment features",
        "🔜 Global market expansion (EU, Asia)"
      ],
      status: "planned"
    }
  ];

  const colorClasses = {
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    teal: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
  };

  return (
    <div className="space-y-6">
      {/* Team Structure */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Team Structure
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamRoles.map((role) => (
            <div key={role.key} className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="text-xl">{role.icon}</span>
                {role.label}
              </label>
              <input
                type="text"
                value={teamResources[role.key]}
                onChange={(e) => onResourceChange(role.key, e.target.value)}
                placeholder={`Enter ${role.label} name`}
                className={`w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 ${colorClasses[role.color]} focus:ring-2 focus:ring-opacity-50`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={downloadAsPDF}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            📄 Download as PDF
          </button>
          <button
            onClick={downloadAsPPT}
            className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-teal-700 transition-colors"
          >
            📊 Download as PPT
          </button>
        </div>
      </div>

      {/* Product Roadmap */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Product Roadmap
        </h2>

        <div className="space-y-6">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className={`border-l-4 pl-6 ${
                phase.status === 'completed'
                  ? 'border-green-500'
                  : phase.status === 'in-progress'
                  ? 'border-blue-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{phase.phase}</span>
                {phase.status === 'completed' && <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded">Completed</span>}
                {phase.status === 'in-progress' && <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">In Progress</span>}
                {phase.status === 'planned' && <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">Planned</span>}
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Functional Architecture Component
function FunctionalArchitecture({ downloadArchitecturePDF, downloadArchitecturePPT }: any) {
  return (
    <div className="space-y-6">
      {/* Header with Download Buttons */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Functional Architecture Documentation
          </h2>
          <div className="flex gap-3">
            <button
              onClick={downloadArchitecturePDF}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-sm"
            >
              📄 Download PDF
            </button>
            <button
              onClick={downloadArchitecturePPT}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-teal-700 transition-colors text-sm"
            >
              📊 Download PPT
            </button>
          </div>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Comprehensive documentation of the HealthCare Companion platform's functional architecture, including system modules, data flows, integration points, and security architecture.
        </p>
      </div>

      {/* System Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. System Overview</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          HealthCare Companion is a unified mobile healthcare platform integrating <strong>blind mobile assistance</strong> and <strong>remote patient monitoring</strong> into a comprehensive solution supporting five distinct user roles with specialized dashboards.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">👤</div>
            <strong className="text-sm">Patient</strong>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Primary care recipient</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">👨‍👩‍👧</div>
            <strong className="text-sm">Caretaker</strong>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Family/assigned care</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">👨‍⚕️</div>
            <strong className="text-sm">Physician</strong>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Medical diagnosis</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">👩‍⚕️</div>
            <strong className="text-sm">Nurse</strong>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Daily care mgmt</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🤖</div>
            <strong className="text-sm">AI Admin</strong>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">System analytics</p>
          </div>
        </div>
      </div>

      {/* Core Functional Modules */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">2. Core Functional Modules</h3>

        <div className="space-y-6">
          {/* Visual Assistance Module */}
          <div className="border-l-4 border-blue-500 pl-6 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent p-4 rounded-r-lg">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <span className="text-2xl">📱</span>
              Visual Assistance Module
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Purpose:</strong> Enable visually impaired users to navigate independently using AI-powered guidance
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Functions:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Voice-guided navigation with obstacle detection</li>
                  <li>• Object recognition (24 languages)</li>
                  <li>• Smart Cane & Glasses integration</li>
                  <li>• Accessible ride booking with audio</li>
                  <li>• Geo-fencing and GPS tracking</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technology Stack:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Computer Vision (OpenCV, TensorFlow)</li>
                  <li>• Edge AI for real-time processing</li>
                  <li>• GPS & Bluetooth LE</li>
                  <li>• Speech synthesis (24 languages)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Remote Patient Monitoring Module */}
          <div className="border-l-4 border-purple-500 pl-6 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent p-4 rounded-r-lg">
            <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
              <span className="text-2xl">❤️</span>
              Remote Patient Monitoring Module
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Purpose:</strong> Continuous health monitoring with real-time alerts and intervention
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Functions:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Real-time vital signs (HR, BP, SpO2, Temp)</li>
                  <li>• Medication tracking & reminders</li>
                  <li>• CGM integration (Dexcom, Abbott)</li>
                  <li>• Emergency SOS with location</li>
                  <li>• Device health monitoring</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technology Stack:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• IoT sensors (BLE, Wi-Fi)</li>
                  <li>• WebSockets for real-time data</li>
                  <li>• RESTful API integration</li>
                  <li>• Push notifications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Analytics Module */}
          <div className="border-l-4 border-green-500 pl-6 bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent p-4 rounded-r-lg">
            <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI Analytics & Predictive Module
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Purpose:</strong> Proactive health management through predictive analytics and automated insights
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Functions:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• 12 preventive AI models</li>
                  <li>• 5 agentic AI scenarios</li>
                  <li>• Edge AI processing (&lt;100ms)</li>
                  <li>• Federated learning</li>
                  <li>• Automated health insights</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technology Stack:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• TensorFlow Lite (mobile)</li>
                  <li>• PyTorch Mobile</li>
                  <li>• Edge computing architecture</li>
                  <li>• Cloud-based model training</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Virtual Care Module */}
          <div className="border-l-4 border-pink-500 pl-6 bg-gradient-to-r from-pink-50 to-transparent dark:from-pink-900/20 dark:to-transparent p-4 rounded-r-lg">
            <h4 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2 flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              Virtual Care Telehealth Module
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Purpose:</strong> Enable remote consultations between patients and healthcare providers
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Functions:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Video/audio consultations</li>
                  <li>• Real-time vital signs sharing</li>
                  <li>• Appointment scheduling</li>
                  <li>• Digital prescriptions</li>
                  <li>• Session recording & transcripts</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technology Stack:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• WebRTC for video streaming</li>
                  <li>• Secure messaging protocols</li>
                  <li>• Screen sharing capability</li>
                  <li>• Cloud recording storage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fitness Module */}
          <div className="border-l-4 border-orange-500 pl-6 bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent p-4 rounded-r-lg">
            <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2">
              <span className="text-2xl">💪</span>
              Fitness & Wellness Module
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Purpose:</strong> Comprehensive fitness tracking with AI-powered optimization
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Functions:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Activity tracking (steps, calories)</li>
                  <li>• Workout library with guidance</li>
                  <li>• Nutrition tracking</li>
                  <li>• Sleep analysis</li>
                  <li>• AI-personalized goals</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technology Stack:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Wearable device integration</li>
                  <li>• ML activity recognition</li>
                  <li>• Nutrition database APIs</li>
                  <li>• Sleep pattern analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Inventory Module */}
          <div className="border-l-4 border-teal-500 pl-6 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent p-4 rounded-r-lg">
            <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2 flex items-center gap-2">
              <span className="text-2xl">📦</span>
              Inventory & Vendor Management Module
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Purpose:</strong> Manage medical devices, supplies, and vendor relationships
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Functions:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Real-time inventory tracking</li>
                  <li>• Vendor management & procurement</li>
                  <li>• Order tracking with notifications</li>
                  <li>• Refund request processing</li>
                  <li>• Device allocation to patients</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Technology Stack:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• RESTful API architecture</li>
                  <li>• Database management system</li>
                  <li>• Automated alert system</li>
                  <li>• Shipment tracking integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Architecture */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">3. Data Flow Architecture</h3>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex-1">
              <div className="text-3xl mb-2">📊</div>
              <strong className="text-sm">Collection</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">IoT Sensors</p>
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="flex-1">
              <div className="text-3xl mb-2">⚡</div>
              <strong className="text-sm">Edge Processing</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">On-Device AI</p>
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="flex-1">
              <div className="text-3xl mb-2">☁️</div>
              <strong className="text-sm">Cloud Storage</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">Supabase</p>
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="flex-1">
              <div className="text-3xl mb-2">🧠</div>
              <strong className="text-sm">AI Analytics</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">Predictions</p>
            </div>
            <div className="text-2xl text-blue-600">→</div>
            <div className="flex-1">
              <div className="text-3xl mb-2">📱</div>
              <strong className="text-sm">Presentation</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">Dashboards</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Data Sources:</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span><strong>Smart Devices:</strong> Canes, Glasses, Watches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span><strong>Health Monitors:</strong> BP, SpO2, Glucose, ECG</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span><strong>GPS Trackers:</strong> Location, movement patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span><strong>User Input:</strong> Symptoms, medications, activities</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Processing Layers:</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span><strong>Edge:</strong> Real-time inference (&lt;100ms)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span><strong>Cloud:</strong> Complex analytics & ML training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span><strong>Hybrid:</strong> Federated learning sync</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span><strong>Security:</strong> End-to-end encryption (AES-256)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Integration Architecture */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">4. Integration Architecture</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">External API Integrations</h4>
            <div className="space-y-3">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <strong className="text-sm">Dexcom CGM API</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">OAuth 2.0, REST API, Real-time webhooks</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <strong className="text-sm">Abbott FreeStyle Libre</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">REST API, 15-min sync interval</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <strong className="text-sm">Uber/Lyft APIs</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Accessibility ride booking, real-time tracking</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <strong className="text-sm">Google Maps API</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Navigation, geocoding, directions</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">IoT Device Protocols</h4>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong className="text-sm">Bluetooth Low Energy (BLE)</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Smart Canes, Glasses, Health Monitors</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong className="text-sm">Wi-Fi</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Smart Watches, GPS Trackers (backup)</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong className="text-sm">MQTT</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Real-time sensor data streaming</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong className="text-sm">HTTPS/WebSockets</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Secure cloud communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">5. Security, Compliance & Performance</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">Security Architecture</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500">🔒</span>
                <span><strong>Encryption:</strong> AES-256 end-to-end</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">🔑</span>
                <span><strong>Authentication:</strong> Multi-factor (MFA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">🛡️</span>
                <span><strong>Authorization:</strong> Role-based access control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">🌐</span>
                <span><strong>Network:</strong> TLS 1.3, certificate pinning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">📋</span>
                <span><strong>Compliance:</strong> HIPAA, SOC 2, GDPR ready</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Performance Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Edge AI Latency</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">45-80ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">API Response Time</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">120-180ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">System Uptime</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">99.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Concurrent Users</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">5,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Data Sync Latency</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">1.2s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Scalability Strategy</h4>
          <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
            <div>• Auto-scaling Edge Functions</div>
            <div>• Database read replicas</div>
            <div>• CDN for static assets</div>
            <div>• Edge computing distribution</div>
            <div>• Geographic load balancing</div>
            <div>• Connection pooling</div>
          </div>
        </div>
      </div>

      {/* Download Reminder */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Complete Documentation Available:</strong> Download the full functional architecture documentation in PDF or presentation format using the buttons above.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Includes detailed diagrams, user workflows, integration specifications, and security architecture.
        </p>
      </div>
    </div>
  );
}

// Device QA Testing Component
function DeviceQATesting() {
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [testFilter, setTestFilter] = useState("all");

  // Incoming Device Batches
  const deviceBatches = [
    {
      batchId: "BATCH-2026-001",
      vendor: "MedTech Solutions",
      deviceType: "Smart Watch (HR, SpO2, Steps)",
      quantity: 50,
      arrivalDate: "2026-05-20",
      inspectionStatus: "in-progress",
      testedCount: 32,
      passedCount: 30,
      failedCount: 2
    },
    {
      batchId: "BATCH-2026-002",
      vendor: "VisionAid Corp",
      deviceType: "Smart Cane",
      quantity: 30,
      arrivalDate: "2026-05-22",
      inspectionStatus: "pending",
      testedCount: 0,
      passedCount: 0,
      failedCount: 0
    },
    {
      batchId: "BATCH-2026-003",
      vendor: "VisionAid Corp",
      deviceType: "Smart Glasses",
      quantity: 20,
      arrivalDate: "2026-05-18",
      inspectionStatus: "completed",
      testedCount: 20,
      passedCount: 19,
      failedCount: 1
    },
    {
      batchId: "BATCH-2026-004",
      vendor: "HealthMonitor Inc",
      deviceType: "Blood Pressure Monitor",
      quantity: 60,
      arrivalDate: "2026-05-24",
      inspectionStatus: "in-progress",
      testedCount: 45,
      passedCount: 43,
      failedCount: 2
    },
    {
      batchId: "BATCH-2026-005",
      vendor: "HealthMonitor Inc",
      deviceType: "Pulse Oximeter (SpO2)",
      quantity: 40,
      arrivalDate: "2026-05-19",
      inspectionStatus: "completed",
      testedCount: 40,
      passedCount: 40,
      failedCount: 0
    },
    {
      batchId: "BATCH-2026-006",
      vendor: "GlucoseTech Ltd",
      deviceType: "CGM Sensor (Dexcom Compatible)",
      quantity: 100,
      arrivalDate: "2026-05-23",
      inspectionStatus: "in-progress",
      testedCount: 75,
      passedCount: 72,
      failedCount: 3
    },
    {
      batchId: "BATCH-2026-007",
      vendor: "GlucoseTech Ltd",
      deviceType: "CGM Transmitter",
      quantity: 50,
      arrivalDate: "2026-05-21",
      inspectionStatus: "completed",
      testedCount: 50,
      passedCount: 48,
      failedCount: 2
    },
    {
      batchId: "BATCH-2026-008",
      vendor: "FitnessPro Systems",
      deviceType: "Activity Tracker (Steps, HR)",
      quantity: 80,
      arrivalDate: "2026-05-25",
      inspectionStatus: "in-progress",
      testedCount: 55,
      passedCount: 54,
      failedCount: 1
    }
  ];

  // Individual Device Test Records
  const deviceTestRecords = [
    {
      deviceId: "SW-2026-001-0015",
      batchId: "BATCH-2026-001",
      deviceType: "Smart Watch (HR, SpO2, Steps)",
      serialNumber: "SW45782901",
      manufacturer: "MedTech Solutions",
      testDate: "2026-05-21 09:15",
      tester: "Jane Smith",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 98 },
        software: { status: "passed", score: 100 },
        connectivity: { status: "passed", score: 95 },
        accuracy: { status: "passed", score: 97 },
        battery: { status: "passed", score: 99 }
      },
      calibrationData: {
        heartRate: {
          referenceValue: 72,
          measuredValue: 71,
          deviation: -1.39,
          tolerance: "±3 bpm",
          status: "passed"
        },
        spo2: {
          referenceValue: 98,
          measuredValue: 97,
          deviation: -1.02,
          tolerance: "±2%",
          status: "passed"
        },
        steps: {
          referenceCount: 1000,
          measuredCount: 998,
          deviation: -0.2,
          tolerance: "±2%",
          status: "passed"
        }
      }
    },
    {
      deviceId: "SW-2026-001-0023",
      batchId: "BATCH-2026-001",
      deviceType: "Smart Watch (HR, SpO2, Steps)",
      serialNumber: "SW45782909",
      manufacturer: "MedTech Solutions",
      testDate: "2026-05-21 10:30",
      tester: "Jane Smith",
      overallStatus: "failed",
      tests: {
        hardware: { status: "passed", score: 95 },
        software: { status: "passed", score: 100 },
        connectivity: { status: "failed", score: 45 },
        accuracy: { status: "passed", score: 96 },
        battery: { status: "passed", score: 98 }
      },
      calibrationData: {
        heartRate: {
          referenceValue: 75,
          measuredValue: 74,
          deviation: -1.33,
          tolerance: "±3 bpm",
          status: "passed"
        },
        spo2: {
          referenceValue: 97,
          measuredValue: 96,
          deviation: -1.03,
          tolerance: "±2%",
          status: "passed"
        },
        steps: {
          referenceCount: 1000,
          measuredCount: 1002,
          deviation: 0.2,
          tolerance: "±2%",
          status: "passed"
        }
      },
      failureReason: "Bluetooth connectivity intermittent - signal drops below 50%"
    },
    {
      deviceId: "PO-2026-005-0025",
      batchId: "BATCH-2026-005",
      deviceType: "Pulse Oximeter (SpO2)",
      serialNumber: "PO56723891",
      manufacturer: "HealthMonitor Inc",
      testDate: "2026-05-20 13:30",
      tester: "Sarah Johnson",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 100 },
        software: { status: "passed", score: 99 },
        connectivity: { status: "passed", score: 98 },
        accuracy: { status: "passed", score: 99 },
        battery: { status: "passed", score: 97 }
      },
      calibrationData: {
        spo2: {
          referenceValue: 99,
          measuredValue: 99,
          deviation: 0,
          tolerance: "±2%",
          status: "passed"
        },
        pulseRate: {
          referenceValue: 68,
          measuredValue: 68,
          deviation: 0,
          tolerance: "±3 bpm",
          status: "passed"
        },
        perfusionIndex: {
          referenceValue: 5.2,
          measuredValue: 5.1,
          deviation: -1.92,
          tolerance: "±5%",
          status: "passed"
        }
      }
    },
    {
      deviceId: "PO-2026-005-0038",
      batchId: "BATCH-2026-005",
      deviceType: "Pulse Oximeter (SpO2)",
      serialNumber: "PO56723904",
      manufacturer: "HealthMonitor Inc",
      testDate: "2026-05-20 14:15",
      tester: "Sarah Johnson",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 98 },
        software: { status: "passed", score: 100 },
        connectivity: { status: "passed", score: 97 },
        accuracy: { status: "passed", score: 98 },
        battery: { status: "passed", score: 96 }
      },
      calibrationData: {
        spo2: {
          referenceValue: 96,
          measuredValue: 97,
          deviation: 1.04,
          tolerance: "±2%",
          status: "passed"
        },
        pulseRate: {
          referenceValue: 82,
          measuredValue: 81,
          deviation: -1.22,
          tolerance: "±3 bpm",
          status: "passed"
        },
        perfusionIndex: {
          referenceValue: 4.8,
          measuredValue: 4.7,
          deviation: -2.08,
          tolerance: "±5%",
          status: "passed"
        }
      }
    },
    {
      deviceId: "CGM-2026-006-0042",
      batchId: "BATCH-2026-006",
      deviceType: "CGM Sensor (Dexcom Compatible)",
      serialNumber: "CGM78945612",
      manufacturer: "GlucoseTech Ltd",
      testDate: "2026-05-24 10:45",
      tester: "Dr. Robert Lee",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 99 },
        software: { status: "passed", score: 98 },
        connectivity: { status: "passed", score: 97 },
        accuracy: { status: "passed", score: 99 },
        battery: { status: "passed", score: 100 }
      },
      calibrationData: {
        glucose: {
          referenceValue: 120,
          measuredValue: 118,
          deviation: -1.67,
          tolerance: "±15% or ±15 mg/dL",
          status: "passed",
          unit: "mg/dL"
        },
        responseTime: {
          referenceValue: 5,
          measuredValue: 4.8,
          deviation: -4.0,
          tolerance: "±10%",
          status: "passed",
          unit: "minutes"
        },
        signalStability: {
          referenceValue: 100,
          measuredValue: 98,
          deviation: -2.0,
          tolerance: "±5%",
          status: "passed",
          unit: "%"
        }
      }
    },
    {
      deviceId: "CGM-2026-006-0056",
      batchId: "BATCH-2026-006",
      deviceType: "CGM Sensor (Dexcom Compatible)",
      serialNumber: "CGM78945626",
      manufacturer: "GlucoseTech Ltd",
      testDate: "2026-05-24 11:20",
      tester: "Dr. Robert Lee",
      overallStatus: "failed",
      tests: {
        hardware: { status: "passed", score: 96 },
        software: { status: "passed", score: 99 },
        connectivity: { status: "passed", score: 95 },
        accuracy: { status: "failed", score: 68 },
        battery: { status: "passed", score: 98 }
      },
      calibrationData: {
        glucose: {
          referenceValue: 110,
          measuredValue: 92,
          deviation: -16.36,
          tolerance: "±15% or ±15 mg/dL",
          status: "failed",
          unit: "mg/dL"
        },
        responseTime: {
          referenceValue: 5,
          measuredValue: 7.2,
          deviation: 44.0,
          tolerance: "±10%",
          status: "failed",
          unit: "minutes"
        },
        signalStability: {
          referenceValue: 100,
          measuredValue: 85,
          deviation: -15.0,
          tolerance: "±5%",
          status: "failed",
          unit: "%"
        }
      },
      failureReason: "Glucose measurement deviation -16.36% exceeds ±15% tolerance. Response time 7.2min exceeds acceptable range. Sensor membrane degradation suspected."
    },
    {
      deviceId: "CGMT-2026-007-0028",
      batchId: "BATCH-2026-007",
      deviceType: "CGM Transmitter",
      serialNumber: "CGMT89456723",
      manufacturer: "GlucoseTech Ltd",
      testDate: "2026-05-22 09:30",
      tester: "Dr. Robert Lee",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 98 },
        software: { status: "passed", score: 100 },
        connectivity: { status: "passed", score: 99 },
        accuracy: { status: "passed", score: 97 },
        battery: { status: "passed", score: 96 }
      },
      calibrationData: {
        transmissionAccuracy: {
          referenceValue: 100,
          measuredValue: 99.2,
          deviation: -0.8,
          tolerance: "±2%",
          status: "passed",
          unit: "%"
        },
        signalStrength: {
          referenceValue: -60,
          measuredValue: -58,
          deviation: 3.33,
          tolerance: "±10 dBm",
          status: "passed",
          unit: "dBm"
        },
        dataLatency: {
          referenceValue: 300,
          measuredValue: 285,
          deviation: -5.0,
          tolerance: "±10%",
          status: "passed",
          unit: "ms"
        }
      }
    },
    {
      deviceId: "AT-2026-008-0035",
      batchId: "BATCH-2026-008",
      deviceType: "Activity Tracker (Steps, HR)",
      serialNumber: "AT67834512",
      manufacturer: "FitnessPro Systems",
      testDate: "2026-05-26 08:45",
      tester: "Emily Rodriguez",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 99 },
        software: { status: "passed", score: 98 },
        connectivity: { status: "passed", score: 97 },
        accuracy: { status: "passed", score: 99 },
        battery: { status: "passed", score: 100 }
      },
      calibrationData: {
        steps: {
          referenceCount: 2000,
          measuredCount: 1998,
          deviation: -0.1,
          tolerance: "±2%",
          status: "passed"
        },
        heartRate: {
          referenceValue: 65,
          measuredValue: 66,
          deviation: 1.54,
          tolerance: "±3 bpm",
          status: "passed"
        },
        distance: {
          referenceValue: 1.5,
          measuredValue: 1.48,
          deviation: -1.33,
          tolerance: "±3%",
          status: "passed",
          unit: "km"
        },
        caloriesBurned: {
          referenceValue: 250,
          measuredValue: 248,
          deviation: -0.8,
          tolerance: "±5%",
          status: "passed",
          unit: "kcal"
        }
      }
    },
    {
      deviceId: "BPM-2026-004-0032",
      batchId: "BATCH-2026-004",
      deviceType: "Blood Pressure Monitor",
      serialNumber: "BPM89012345",
      manufacturer: "HealthMonitor Inc",
      testDate: "2026-05-25 11:10",
      tester: "Sarah Johnson",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 97 },
        software: { status: "passed", score: 100 },
        connectivity: { status: "passed", score: 99 },
        accuracy: { status: "passed", score: 98 },
        battery: { status: "passed", score: 94 }
      },
      calibrationData: {
        systolicBP: {
          referenceValue: 120,
          measuredValue: 119,
          deviation: -0.83,
          tolerance: "±3 mmHg",
          status: "passed",
          unit: "mmHg"
        },
        diastolicBP: {
          referenceValue: 80,
          measuredValue: 81,
          deviation: 1.25,
          tolerance: "±3 mmHg",
          status: "passed",
          unit: "mmHg"
        },
        pulseRate: {
          referenceValue: 72,
          measuredValue: 71,
          deviation: -1.39,
          tolerance: "±3 bpm",
          status: "passed"
        }
      }
    },
    {
      deviceId: "SG-2026-003-0008",
      batchId: "BATCH-2026-003",
      deviceType: "Smart Glasses",
      serialNumber: "SG23789456",
      manufacturer: "VisionAid Corp",
      testDate: "2026-05-19 14:20",
      tester: "Michael Chen",
      overallStatus: "passed",
      tests: {
        hardware: { status: "passed", score: 99 },
        software: { status: "passed", score: 98 },
        connectivity: { status: "passed", score: 97 },
        accuracy: { status: "passed", score: 100 },
        battery: { status: "passed", score: 96 }
      }
    },
    {
      deviceId: "SG-2026-003-0014",
      batchId: "BATCH-2026-003",
      deviceType: "Smart Glasses",
      serialNumber: "SG23789462",
      manufacturer: "VisionAid Corp",
      testDate: "2026-05-19 15:45",
      tester: "Michael Chen",
      overallStatus: "failed",
      tests: {
        hardware: { status: "passed", score: 96 },
        software: { status: "passed", score: 99 },
        connectivity: { status: "passed", score: 98 },
        accuracy: { status: "failed", score: 62 },
        battery: { status: "passed", score: 95 }
      },
      failureReason: "Object detection accuracy below 90% threshold - camera calibration issue"
    }
  ];

  // QA Testing Procedures
  const qaTestingProcedures = [
    {
      category: "Hardware Inspection",
      tests: [
        "Visual inspection for physical damage",
        "Button/switch functionality verification",
        "Display/LED functionality check",
        "Sensor alignment and condition",
        "Enclosure integrity and sealing"
      ]
    },
    {
      category: "Software Verification",
      tests: [
        "Firmware version validation",
        "Boot-up sequence test",
        "Software update capability",
        "Factory reset functionality",
        "Error handling and logging"
      ]
    },
    {
      category: "Connectivity Testing",
      tests: [
        "Bluetooth pairing stability",
        "Signal strength measurement",
        "Connection range testing",
        "Data transmission accuracy",
        "Reconnection after disconnect"
      ]
    },
    {
      category: "Accuracy & Calibration",
      tests: [
        "Sensor calibration verification",
        "Measurement accuracy against reference",
        "Reading consistency test (5 iterations)",
        "Environmental condition variations",
        "Edge case scenario testing"
      ]
    },
    {
      category: "Battery & Power",
      tests: [
        "Battery charge level verification",
        "Charging functionality test",
        "Power consumption monitoring",
        "Battery life estimation",
        "Low battery warning test"
      ]
    },
    {
      category: "Heart Rate Calibration",
      tests: [
        "Reference ECG comparison (±3 bpm tolerance)",
        "Multi-position testing (sitting, standing, lying)",
        "Exercise stress test (60-180 bpm range)",
        "Motion artifact rejection verification",
        "Low perfusion scenario testing"
      ]
    },
    {
      category: "SpO2 Calibration",
      tests: [
        "Reference pulse oximeter validation (±2% tolerance)",
        "Hypoxia simulation testing (85-100% range)",
        "Perfusion index measurement accuracy",
        "Ambient light interference testing",
        "Motion artifact handling verification"
      ]
    },
    {
      category: "Step Counter Calibration",
      tests: [
        "Controlled step count validation (±2% tolerance)",
        "Distance calculation accuracy (GPS reference)",
        "Cadence detection (slow/normal/fast walking)",
        "False positive rejection (vehicle motion)",
        "Calorie burn estimation accuracy"
      ]
    },
    {
      category: "CGM Calibration",
      tests: [
        "Glucose accuracy (±15% or ±15 mg/dL tolerance)",
        "Response time verification (5-10 min lag)",
        "Signal stability over 24-hour period",
        "Temperature compensation testing",
        "Sensor membrane integrity check"
      ]
    },
    {
      category: "Blood Pressure Calibration",
      tests: [
        "Systolic/Diastolic accuracy (±3 mmHg tolerance)",
        "Cuff pressure measurement validation",
        "Pulse rate detection accuracy",
        "Repeatability testing (3 consecutive readings)",
        "Irregular heartbeat detection"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20";
      case "failed":
        return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20";
      case "in-progress":
        return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20";
      case "pending":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20";
      case "completed":
        return "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Device QA & Testing Laboratory
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Comprehensive quality assurance and sanity testing for all wearable devices received from manufacturers.
          Complete traceability from warehouse arrival to deployment readiness.
        </p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total Batches</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{deviceBatches.length}</p>
            </div>
            <div className="text-3xl">📦</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Devices Tested</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {deviceBatches.reduce((sum, batch) => sum + batch.testedCount, 0)}
              </p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Pass Rate</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {(() => {
                  const totalTested = deviceBatches.reduce((sum, batch) => sum + batch.testedCount, 0);
                  const totalPassed = deviceBatches.reduce((sum, batch) => sum + batch.passedCount, 0);
                  return totalTested > 0 ? ((totalPassed / totalTested) * 100).toFixed(1) : 0;
                })()}%
              </p>
            </div>
            <div className="text-3xl">📊</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Failed Devices</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                {deviceBatches.reduce((sum, batch) => sum + batch.failedCount, 0)}
              </p>
            </div>
            <div className="text-3xl">❌</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">CGM Sensors</p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {deviceBatches.filter(b => b.deviceType.includes('CGM')).reduce((sum, batch) => sum + batch.testedCount, 0)}
              </p>
            </div>
            <div className="text-3xl">🩸</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Wearables</p>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                {deviceBatches.filter(b => b.deviceType.includes('Watch') || b.deviceType.includes('Tracker')).reduce((sum, batch) => sum + batch.testedCount, 0)}
              </p>
            </div>
            <div className="text-3xl">⌚</div>
          </div>
        </div>
      </div>

      {/* Batch Tracking */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Incoming Device Batches
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Batch ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Device Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Vendor</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Quantity</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Arrival Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Testing Progress</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {deviceBatches.map((batch) => (
                <tr key={batch.batchId} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {batch.batchId}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {batch.deviceType}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {batch.vendor}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {batch.quantity} units
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {batch.arrivalDate}
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-400">
                          {batch.testedCount}/{batch.quantity}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {((batch.testedCount / batch.quantity) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(batch.testedCount / batch.quantity) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        ✅ {batch.passedCount} | ❌ {batch.failedCount}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(batch.inspectionStatus)}`}>
                      {batch.inspectionStatus.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Device Test Records */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Device Test Records
          </h3>
          <div className="flex gap-3">
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <option value="all">All Batches</option>
              {deviceBatches.map(batch => (
                <option key={batch.batchId} value={batch.batchId}>{batch.batchId}</option>
              ))}
            </select>
            <select
              value={testFilter}
              onChange={(e) => setTestFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <option value="all">All Results</option>
              <option value="passed">Passed Only</option>
              <option value="failed">Failed Only</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {deviceTestRecords
            .filter(record => selectedBatch === "all" || record.batchId === selectedBatch)
            .filter(record => testFilter === "all" || record.overallStatus === testFilter)
            .map((record) => (
              <div
                key={record.deviceId}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {record.deviceType} - {record.deviceId}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Serial: {record.serialNumber} | Batch: {record.batchId}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tested by {record.tester} on {record.testDate}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold ${getStatusColor(record.overallStatus)}`}>
                    {record.overallStatus.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-4 mb-4">
                  {Object.entries(record.tests).map(([testName, testResult]: [string, any]) => (
                    <div
                      key={testName}
                      className={`p-3 rounded-lg border-2 ${
                        testResult.status === "passed"
                          ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20"
                          : "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20"
                      }`}
                    >
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 capitalize">
                        {testName}
                      </p>
                      <p className={`text-2xl font-bold ${
                        testResult.status === "passed"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}>
                        {testResult.score}%
                      </p>
                      <p className="text-xs mt-1">
                        {testResult.status === "passed" ? "✅ Pass" : "❌ Fail"}
                      </p>
                    </div>
                  ))}
                </div>

                {record.calibrationData && (
                  <div className="mt-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-cyan-800 dark:text-cyan-400 mb-3 flex items-center gap-2">
                      🎯 Calibration & Sanity Test Results
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {Object.entries(record.calibrationData).map(([metric, data]: [string, any]) => (
                        <div
                          key={metric}
                          className={`p-3 rounded-lg border ${
                            data.status === "passed"
                              ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
                              : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700"
                          }`}
                        >
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 capitalize">
                            {metric.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Reference:</span>
                              <span className="font-semibold">{data.referenceValue} {data.unit || ''}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Measured:</span>
                              <span className="font-semibold">{data.measuredValue || data.measuredCount} {data.unit || ''}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Deviation:</span>
                              <span className={`font-bold ${
                                data.status === "passed"
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-red-600 dark:text-red-400"
                              }`}>
                                {data.deviation > 0 ? '+' : ''}{data.deviation.toFixed(2)}%
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Tolerance:</span>
                              <span className="text-gray-700 dark:text-gray-300">{data.tolerance}</span>
                            </div>
                            <div className="mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
                              <span className={`font-bold text-xs ${
                                data.status === "passed"
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-red-600 dark:text-red-400"
                              }`}>
                                {data.status === "passed" ? "✅ PASS" : "❌ FAIL"}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {record.failureReason && (
                  <div className="mt-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-1">
                      Failure Reason:
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      {record.failureReason}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Calibration Summary by Device Type */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Calibration Summary by Device Type
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Heart Rate Devices */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">❤️</span>
              <h4 className="font-semibold text-red-600 dark:text-red-400">Heart Rate Sensors</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tolerance:</span>
                <span className="font-semibold">±3 bpm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Avg Deviation:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">-0.82%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Pass Rate:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Devices Tested:</span>
                <span className="font-semibold">5</span>
              </div>
            </div>
          </div>

          {/* SpO2 Devices */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🫁</span>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">SpO2 Sensors</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tolerance:</span>
                <span className="font-semibold">±2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Avg Deviation:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">-0.50%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Pass Rate:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Devices Tested:</span>
                <span className="font-semibold">4</span>
              </div>
            </div>
          </div>

          {/* Step Counter */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">👣</span>
              <h4 className="font-semibold text-green-600 dark:text-green-400">Step Counters</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tolerance:</span>
                <span className="font-semibold">±2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Avg Deviation:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">-0.15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Pass Rate:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Devices Tested:</span>
                <span className="font-semibold">3</span>
              </div>
            </div>
          </div>

          {/* CGM Sensors */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🩸</span>
              <h4 className="font-semibold text-purple-600 dark:text-purple-400">CGM Sensors</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tolerance:</span>
                <span className="font-semibold">±15% or ±15 mg/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Avg Deviation:</span>
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">-9.02%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Pass Rate:</span>
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">50%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Devices Tested:</span>
                <span className="font-semibold">2</span>
              </div>
            </div>
          </div>

          {/* Blood Pressure */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🩺</span>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">Blood Pressure</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tolerance:</span>
                <span className="font-semibold">±3 mmHg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Avg Deviation:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">0.21%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Pass Rate:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Devices Tested:</span>
                <span className="font-semibold">1</span>
              </div>
            </div>
          </div>

          {/* Activity Trackers */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏃</span>
              <h4 className="font-semibold text-yellow-600 dark:text-yellow-400">Activity Trackers</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tolerance:</span>
                <span className="font-semibold">Multi-metric</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Avg Deviation:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">-0.34%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Pass Rate:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Devices Tested:</span>
                <span className="font-semibold">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QA Testing Procedures */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Standard QA Testing Procedures
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {qaTestingProcedures.map((procedure, index) => (
            <div
              key={index}
              className={`border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 ${
                index >= 5 ? 'border-l-4 border-l-cyan-500' : ''
              }`}
            >
              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {index + 1}. {procedure.category}
              </h4>
              <ul className="space-y-1.5">
                {procedure.tests.map((test, testIndex) => (
                  <li key={testIndex} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 mt-0.5 text-sm">✓</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-blue-600 dark:text-blue-400">Note:</strong> Procedures 6-10 (highlighted with cyan border) are specialized calibration tests for wearable health sensors.
            All devices must pass general QA tests (1-5) plus their specific calibration procedures.
          </p>
        </div>
      </div>

      {/* Traceability & Compliance */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Traceability & Compliance
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">📋 Documentation</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Batch receiving certificates</li>
              <li>• Individual device test reports</li>
              <li>• Calibration certificates</li>
              <li>• Failure analysis reports</li>
              <li>• Vendor quality agreements</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">🔍 Tracking</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Unique serial number tracking</li>
              <li>• Batch-to-deployment mapping</li>
              <li>• Test history audit trail</li>
              <li>• Warehouse location tracking</li>
              <li>• Patient allocation records</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">✅ Compliance</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>• FDA 21 CFR Part 820 (QMS)</li>
              <li>• ISO 13485 medical devices</li>
              <li>• IEC 60601 electrical safety</li>
              <li>• HIPAA device security</li>
              <li>• CE marking requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Edge AI Architecture Component
function EdgeAIArchitecture() {
  const aiModels = [
    { name: "Fall Detection", accuracy: "98%", latency: "50ms", icon: "🚨" },
    { name: "Medication Adherence", accuracy: "95%", latency: "100ms", icon: "💊" },
    { name: "Vital Signs Anomaly", accuracy: "97%", latency: "80ms", icon: "❤️" },
    { name: "Sleep Pattern Analysis", accuracy: "94%", latency: "120ms", icon: "😴" },
    { name: "Activity Recognition", accuracy: "96%", latency: "60ms", icon: "🏃" },
    { name: "Nutrition Tracking", accuracy: "92%", latency: "150ms", icon: "🥗" },
    { name: "Glucose Prediction", accuracy: "93%", latency: "200ms", icon: "🩸" },
    { name: "Cardiac Event Detection", accuracy: "99%", latency: "40ms", icon: "💓" },
    { name: "Respiratory Monitoring", accuracy: "95%", latency: "70ms", icon: "🫁" },
    { name: "Stress Level Assessment", accuracy: "91%", latency: "100ms", icon: "😰" },
    { name: "Mobility Pattern Analysis", accuracy: "94%", latency: "90ms", icon: "🦯" },
    { name: "Environmental Hazard Detection", accuracy: "97%", latency: "45ms", icon: "⚠️" }
  ];

  const agenticScenarios = [
    {
      title: "Diabetic Emergency Prevention",
      description: "AI agent monitors CGM data, predicts hypoglycemia 30 minutes in advance, alerts patient and caretaker, suggests immediate actions.",
      agents: ["Glucose Monitor", "Alert Manager", "Recommendation Engine"]
    },
    {
      title: "Fall Prevention & Response",
      description: "Multi-sensor fusion detects pre-fall patterns, sends preventive alerts, and triggers emergency response if fall occurs.",
      agents: ["Motion Sensor", "Balance Analyzer", "Emergency Dispatcher"]
    },
    {
      title: "Medication Non-Adherence Intervention",
      description: "Tracks medication intake, identifies patterns of non-adherence, deploys personalized reminder strategies, escalates to care team.",
      agents: ["Adherence Tracker", "Behavior Analyzer", "Care Coordinator"]
    },
    {
      title: "Cardiac Event Early Warning",
      description: "Continuous heart rate variability analysis detects early signs of cardiac events, initiates telehealth consultation, alerts emergency contacts.",
      agents: ["ECG Analyzer", "Risk Assessor", "Telehealth Connector"]
    },
    {
      title: "Visual Navigation Assistant",
      description: "Real-time object detection, obstacle avoidance guidance, route optimization, and accessible transportation booking coordination.",
      agents: ["Computer Vision", "Path Planner", "Ride Coordinator"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Architecture Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Edge AI Architecture
        </h2>

        <div className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Hybrid Edge-Cloud Architecture</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our Edge AI system processes critical health data locally on-device for ultra-low latency (&lt;100ms) while leveraging cloud resources for complex analytics and model training.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <strong className="text-blue-600 dark:text-blue-400">Edge Processing</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Real-time inference on mobile devices</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <strong className="text-purple-600 dark:text-purple-400">Cloud Analytics</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Complex model training & aggregation</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-2xl mb-2">🔄</div>
                <strong className="text-green-600 dark:text-green-400">Federated Learning</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Privacy-preserving model updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* 12 Preventive AI Models */}
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">12 Preventive AI Models</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {aiModels.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="text-3xl mb-2">{model.icon}</div>
              <h4 className="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200">{model.name}</h4>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">{model.accuracy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Latency:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{model.latency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Model Pipeline */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">AI Model Pipeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center">
              <div className="text-2xl mb-2">📊</div>
              <strong className="text-sm">Data Collection</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">Multi-sensor fusion</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 text-center">
              <div className="text-2xl mb-2">🔧</div>
              <strong className="text-sm">Preprocessing</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">Normalization & filtering</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 text-center">
              <div className="text-2xl mb-2">🧠</div>
              <strong className="text-sm">Edge Inference</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">TensorFlow Lite models</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <strong className="text-sm">Action Trigger</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">Alerts & interventions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agentic AI System */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Agentic AI System - 5 Real-World Scenarios
        </h2>

        <div className="space-y-6">
          {agenticScenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {index + 1}. {scenario.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{scenario.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Active Agents:</span>
                {scenario.agents.map((agent, agentIndex) => (
                  <span
                    key={agentIndex}
                    className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* UML Diagram Reference */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Architecture Documentation</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Comprehensive UML diagrams illustrating system architecture, data flow, and agent interactions are available in the main application.
          </p>
          <div className="flex gap-3">
            <span className="text-sm bg-white dark:bg-gray-700 px-3 py-1 rounded border border-gray-300 dark:border-gray-600">📐 System Architecture Diagram</span>
            <span className="text-sm bg-white dark:bg-gray-700 px-3 py-1 rounded border border-gray-300 dark:border-gray-600">🔄 Agent Collaboration Flow</span>
            <span className="text-sm bg-white dark:bg-gray-700 px-3 py-1 rounded border border-gray-300 dark:border-gray-600">📊 Data Pipeline Diagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDemo() {
  const [activeSection, setActiveSection] = useState("overview");
  
  const [teamResources, setTeamResources] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('healthcareTeamResources');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing saved team resources:', e);
        }
      }
    }
    return {
      uiux: "",
      fullstack: "",
      aimliot: "",
      technicalAdvisor: "",
      businessMarketing: "",
      iotProcurement: "",
      projectLead: ""
    };
  });

  const handleResourceChange = (role: string, name: string) => {
    setTeamResources(prev => {
      const updated = { ...prev, [role]: name };
      if (typeof window !== 'undefined') {
        localStorage.setItem('healthcareTeamResources', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const downloadAsPDF = async () => {
    // Generate PDF content as HTML that can be printed
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HealthCare Companion - Team & Roadmap</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
    h1 { color: #7C3AED; border-bottom: 3px solid #7C3AED; padding-bottom: 10px; }
    h2 { color: #2563EB; margin-top: 30px; }
    .team-member { margin: 15px 0; padding: 10px; background: #F3F4F6; border-radius: 5px; }
    .team-member strong { color: #1F2937; }
    .phase { margin: 20px 0; padding: 15px; border-left: 4px solid #10B981; background: #F0FDF4; }
    .phase h3 { margin: 0 0 10px 0; color: #059669; }
    .phase ul { margin: 10px 0; padding-left: 20px; }
    .logo { text-align: center; margin-bottom: 30px; }
  </style>
</head>
<body>
  <div class="logo">
    <h1>🏥 HealthCare Companion</h1>
    <p><strong>Team Structure & Product Roadmap</strong></p>
  </div>

  <h2>Team Structure</h2>
  <div class="team-member"><strong>👨‍💼 Project Lead:</strong> ${teamResources.projectLead || 'TBD'}</div>
  <div class="team-member"><strong>🎨 UI/UX Designer:</strong> ${teamResources.uiux || 'TBD'}</div>
  <div class="team-member"><strong>💻 Full Stack Developer:</strong> ${teamResources.fullstack || 'TBD'}</div>
  <div class="team-member"><strong>🤖 AI/ML/IoT Engineer:</strong> ${teamResources.aimliot || 'TBD'}</div>
  <div class="team-member"><strong>🔬 Technical Advisor:</strong> ${teamResources.technicalAdvisor || 'TBD'}</div>
  <div class="team-member"><strong>📊 Business & Marketing:</strong> ${teamResources.businessMarketing || 'TBD'}</div>
  <div class="team-member"><strong>📦 IoT Procurement:</strong> ${teamResources.iotProcurement || 'TBD'}</div>

  <h2>Product Roadmap</h2>

  <div class="phase">
    <h3>✅ Phase 1: Foundation (Q1 2026) - COMPLETED</h3>
    <ul>
      <li>Core mobile app architecture with React + TypeScript</li>
      <li>Supabase backend integration & authentication</li>
      <li>Role-based dashboard implementation</li>
      <li>Basic vital signs monitoring</li>
      <li>Smart device connectivity (Cane, Glasses, Monitors)</li>
    </ul>
  </div>

  <div class="phase">
    <h3>✅ Phase 2: AI & Integration (Q2 2026) - COMPLETED</h3>
    <ul>
      <li>Edge AI Architecture with 12 preventive models</li>
      <li>Agentic AI system with 5 real-world scenarios</li>
      <li>CGM API integration (Dexcom, Abbott)</li>
      <li>Virtual care telehealth embedding</li>
      <li>24-language support for visual assistance</li>
    </ul>
  </div>

  <div class="phase" style="border-left-color: #3B82F6; background: #EFF6FF;">
    <h3 style="color: #2563EB;">⏳ Phase 3: Advanced Features (Q3 2026) - IN PROGRESS</h3>
    <ul>
      <li>Advanced fitness modules with AI optimization</li>
      <li>Inventory & vendor management system</li>
      <li>Enhanced geo-fencing with predictive routing</li>
      <li>Multi-device health monitoring dashboard</li>
      <li>Voice assistant v2.0 with natural language</li>
    </ul>
  </div>

  <div class="phase" style="border-left-color: #6B7280; background: #F9FAFB;">
    <h3 style="color: #4B5563;">🔜 Phase 4: Scale & Compliance (Q4 2026) - PLANNED</h3>
    <ul>
      <li>HIPAA compliance certification</li>
      <li>SOC 2 Type II audit completion</li>
      <li>Clinical trials & FDA approval process</li>
      <li>Enterprise deployment features</li>
      <li>Global market expansion (EU, Asia)</li>
    </ul>
  </div>

  <hr style="margin: 40px 0;">
  <p style="text-align: center; color: #6B7280; font-size: 12px;">
    Generated on ${new Date().toLocaleDateString()} | HealthCare Companion by Navilli
  </p>
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HealthCare-Companion-Team-Roadmap.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show success message
    alert('HTML document downloaded! Open it in a browser and use Print > Save as PDF to create a PDF file.');
  };

  const downloadAsPPT = async () => {
    // Generate PowerPoint-style HTML presentation
    const pptContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HealthCare Companion Presentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #000;
    }
    .slide {
      width: 960px;
      height: 540px;
      margin: 20px auto;
      padding: 60px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      page-break-after: always;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      border-radius: 10px;
    }
    .slide h1 {
      font-size: 48px;
      margin: 0 0 20px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .slide h2 {
      font-size: 36px;
      margin: 20px 0;
      border-bottom: 3px solid white;
      padding-bottom: 10px;
    }
    .slide h3 { font-size: 28px; margin: 15px 0; }
    .slide p { font-size: 20px; line-height: 1.6; }
    .slide ul { font-size: 18px; line-height: 1.8; }
    .slide.title { text-align: center; padding-top: 150px; }
    .team-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 20px;
    }
    .team-item {
      background: rgba(255,255,255,0.2);
      padding: 15px;
      border-radius: 8px;
      font-size: 16px;
    }
    .phase-box {
      background: rgba(255,255,255,0.2);
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
    }
    @media print {
      .slide { margin: 0; page-break-after: always; }
    }
  </style>
</head>
<body>

<!-- Slide 1: Title -->
<div class="slide title">
  <h1>🏥 HealthCare Companion</h1>
  <p style="font-size: 28px; margin: 30px 0;">Team Structure & Product Roadmap</p>
  <p style="font-size: 20px; margin-top: 80px;">Unified Healthcare Platform</p>
  <p style="font-size: 16px;">Powered by Navilli</p>
</div>

<!-- Slide 2: Team Structure -->
<div class="slide">
  <h2>👥 Team Structure</h2>
  <div class="team-grid">
    <div class="team-item"><strong>👨‍💼 Project Lead</strong><br>${teamResources.projectLead || 'TBD'}</div>
    <div class="team-item"><strong>🎨 UI/UX Designer</strong><br>${teamResources.uiux || 'TBD'}</div>
    <div class="team-item"><strong>💻 Full Stack Developer</strong><br>${teamResources.fullstack || 'TBD'}</div>
    <div class="team-item"><strong>🤖 AI/ML/IoT Engineer</strong><br>${teamResources.aimliot || 'TBD'}</div>
    <div class="team-item"><strong>🔬 Technical Advisor</strong><br>${teamResources.technicalAdvisor || 'TBD'}</div>
    <div class="team-item"><strong>📊 Business & Marketing</strong><br>${teamResources.businessMarketing || 'TBD'}</div>
  </div>
</div>

<!-- Slide 3: Phase 1 & 2 -->
<div class="slide">
  <h2>✅ Completed Phases</h2>
  <div class="phase-box">
    <h3>Phase 1: Foundation (Q1 2026)</h3>
    <ul>
      <li>Core mobile app architecture</li>
      <li>Supabase backend integration</li>
      <li>Role-based dashboards</li>
      <li>Smart device connectivity</li>
    </ul>
  </div>
  <div class="phase-box">
    <h3>Phase 2: AI & Integration (Q2 2026)</h3>
    <ul>
      <li>Edge AI with 12 preventive models</li>
      <li>Agentic AI system</li>
      <li>24-language support</li>
    </ul>
  </div>
</div>

<!-- Slide 4: Phase 3 & 4 -->
<div class="slide">
  <h2>🚀 Upcoming Phases</h2>
  <div class="phase-box">
    <h3>⏳ Phase 3: Advanced Features (Q3 2026)</h3>
    <ul>
      <li>Advanced fitness modules</li>
      <li>Inventory & vendor management</li>
      <li>Enhanced geo-fencing</li>
      <li>Voice assistant v2.0</li>
    </ul>
  </div>
  <div class="phase-box">
    <h3>🔜 Phase 4: Scale & Compliance (Q4 2026)</h3>
    <ul>
      <li>HIPAA & SOC 2 compliance</li>
      <li>FDA approval process</li>
      <li>Global market expansion</li>
    </ul>
  </div>
</div>

<!-- Slide 5: Closing -->
<div class="slide title">
  <h1>Thank You</h1>
  <p style="font-size: 24px; margin-top: 60px;">Questions?</p>
  <p style="font-size: 18px; margin-top: 100px; opacity: 0.8;">
    Generated on ${new Date().toLocaleDateString()}<br>
    HealthCare Companion by Navilli
  </p>
</div>

</body>
</html>`;

    // Create blob and download
    const blob = new Blob([pptContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HealthCare-Companion-Presentation.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show success message
    alert('Presentation downloaded! Open the HTML file in a browser for a full-screen presentation view.');
  };

  const downloadArchitecturePDF = async () => {
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HealthCare Companion - Functional Architecture</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; line-height: 1.6; }
    h1 { color: #7C3AED; border-bottom: 3px solid #7C3AED; padding-bottom: 10px; }
    h2 { color: #2563EB; margin-top: 30px; border-bottom: 2px solid #E5E7EB; padding-bottom: 8px; }
    h3 { color: #059669; margin-top: 20px; }
    .section { margin: 25px 0; padding: 20px; background: #F9FAFB; border-radius: 8px; border-left: 4px solid #3B82F6; }
    .component-box { margin: 15px 0; padding: 15px; background: white; border-radius: 6px; border: 1px solid #E5E7EB; }
    .component-box h4 { color: #1F2937; margin: 0 0 10px 0; }
    .flow-diagram { margin: 20px 0; padding: 20px; background: #EFF6FF; border-radius: 8px; text-align: center; }
    .arrow { display: inline-block; margin: 0 10px; color: #3B82F6; font-weight: bold; }
    ul { padding-left: 25px; }
    li { margin: 8px 0; }
    .logo { text-align: center; margin-bottom: 30px; }
    .highlight { background: #FEF3C7; padding: 2px 6px; border-radius: 3px; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { border: 1px solid #E5E7EB; padding: 10px; text-align: left; }
    th { background: #F3F4F6; font-weight: bold; }
  </style>
</head>
<body>
  <div class="logo">
    <h1>🏥 HealthCare Companion</h1>
    <p><strong>Functional Architecture Documentation</strong></p>
  </div>

  <div class="section">
    <h2>1. System Overview</h2>
    <p>HealthCare Companion is a unified mobile healthcare platform that integrates <span class="highlight">blind mobile assistance</span> and <span class="highlight">remote patient monitoring</span> into a single comprehensive solution. The system employs a role-based architecture supporting five distinct user types:</p>
    <ul>
      <li><strong>Patient:</strong> Primary users receiving care and assistance</li>
      <li><strong>Caretaker:</strong> Family members or assigned caregivers monitoring patients</li>
      <li><strong>Physician:</strong> Medical doctors providing diagnosis and treatment</li>
      <li><strong>Nurse:</strong> Healthcare staff managing day-to-day patient care</li>
      <li><strong>AI Admin:</strong> System administrators managing AI models and analytics</li>
    </ul>
  </div>

  <div class="section">
    <h2>2. Core Functional Modules</h2>

    <div class="component-box">
      <h4>📱 Visual Assistance Module</h4>
      <p><strong>Purpose:</strong> Enable visually impaired users to navigate independently using AI-powered guidance</p>
      <p><strong>Key Functions:</strong></p>
      <ul>
        <li>Voice-guided navigation with real-time obstacle detection</li>
        <li>Object recognition and scene description (24 languages)</li>
        <li>Smart Cane and Smart Glasses integration</li>
        <li>Accessible ride booking with audio feedback</li>
        <li>Geo-fencing and GPS tracking for safety</li>
      </ul>
      <p><strong>Technology:</strong> Computer Vision (OpenCV, TensorFlow), Edge AI, GPS, Bluetooth LE</p>
    </div>

    <div class="component-box">
      <h4>❤️ Remote Patient Monitoring Module</h4>
      <p><strong>Purpose:</strong> Continuous health monitoring with real-time alerts</p>
      <p><strong>Key Functions:</strong></p>
      <ul>
        <li>Real-time vital signs monitoring (HR, BP, SpO2, Temperature, Glucose)</li>
        <li>Medication tracking with automated reminders</li>
        <li>CGM API integration (Dexcom, Abbott FreeStyle Libre)</li>
        <li>Emergency SOS with automatic location sharing</li>
        <li>Device health monitoring (Smart Watches, Health Monitors, GPS Trackers)</li>
      </ul>
      <p><strong>Technology:</strong> IoT Sensors, Bluetooth, API Integration, WebSockets</p>
    </div>

    <div class="component-box">
      <h4>🤖 AI Analytics & Predictive Module</h4>
      <p><strong>Purpose:</strong> Proactive health management through predictive analytics</p>
      <p><strong>Key Functions:</strong></p>
      <ul>
        <li>12 preventive AI models (Fall Detection, Medication Adherence, etc.)</li>
        <li>Agentic AI system with 5 real-world scenario handlers</li>
        <li>Edge AI processing for ultra-low latency (&lt;100ms)</li>
        <li>Federated learning for privacy-preserving model updates</li>
        <li>Automated health insights and intervention recommendations</li>
      </ul>
      <p><strong>Technology:</strong> TensorFlow Lite, PyTorch Mobile, Edge Computing</p>
    </div>

    <div class="component-box">
      <h4>🏥 Virtual Care Telehealth Module</h4>
      <p><strong>Purpose:</strong> Enable remote consultations between patients and providers</p>
      <p><strong>Key Functions:</strong></p>
      <ul>
        <li>Video/audio consultation with screen sharing</li>
        <li>Real-time vital signs sharing during calls</li>
        <li>Appointment scheduling and reminders</li>
        <li>Digital prescription management</li>
        <li>Session recording and transcript generation</li>
      </ul>
      <p><strong>Technology:</strong> WebRTC, Video Streaming, Secure Messaging</p>
    </div>

    <div class="component-box">
      <h4>💪 Fitness & Wellness Module</h4>
      <p><strong>Purpose:</strong> Comprehensive fitness tracking and optimization</p>
      <p><strong>Key Functions:</strong></p>
      <ul>
        <li>Activity tracking (steps, calories, distance)</li>
        <li>Workout library with guided exercises</li>
        <li>Nutrition tracking and meal planning</li>
        <li>Sleep analysis and improvement recommendations</li>
        <li>AI-powered personalized fitness goals</li>
      </ul>
      <p><strong>Technology:</strong> Wearable Integration, ML Models, Activity Recognition</p>
    </div>

    <div class="component-box">
      <h4>📦 Inventory & Vendor Management Module</h4>
      <p><strong>Purpose:</strong> Manage medical devices and supply chain</p>
      <p><strong>Key Functions:</strong></p>
      <ul>
        <li>Real-time inventory tracking with low-stock alerts</li>
        <li>Vendor management and procurement workflow</li>
        <li>Order tracking with shipment notifications</li>
        <li>Refund request processing</li>
        <li>Device allocation to patients</li>
      </ul>
      <p><strong>Technology:</strong> RESTful APIs, Database Management, Notification System</p>
    </div>
  </div>

  <div class="section">
    <h2>3. Data Flow Architecture</h2>

    <div class="flow-diagram">
      <p><strong>Data Collection → Processing → Storage → Analytics → Action</strong></p>
      <p style="margin-top: 15px;">
        IoT Devices/Sensors <span class="arrow">→</span>
        Edge Processing <span class="arrow">→</span>
        Cloud Backend <span class="arrow">→</span>
        AI Analysis <span class="arrow">→</span>
        User Dashboards/Alerts
      </p>
    </div>

    <h3>Data Flow Stages:</h3>
    <table>
      <tr>
        <th>Stage</th>
        <th>Description</th>
        <th>Components</th>
      </tr>
      <tr>
        <td>1. Collection</td>
        <td>Gathering data from multiple sources</td>
        <td>Smart Cane, Smart Glasses, Health Monitors, GPS Trackers, Smart Watches</td>
      </tr>
      <tr>
        <td>2. Edge Processing</td>
        <td>Real-time processing on device for low latency</td>
        <td>TensorFlow Lite Models, Object Detection, Fall Detection</td>
      </tr>
      <tr>
        <td>3. Transmission</td>
        <td>Secure data transfer to cloud</td>
        <td>HTTPS/WSS, End-to-End Encryption, HIPAA Compliance</td>
      </tr>
      <tr>
        <td>4. Cloud Storage</td>
        <td>Persistent storage and backup</td>
        <td>Supabase PostgreSQL, Blob Storage, KV Store</td>
      </tr>
      <tr>
        <td>5. Analytics</td>
        <td>Pattern recognition and predictions</td>
        <td>12 AI Models, Agentic AI System, Predictive Algorithms</td>
      </tr>
      <tr>
        <td>6. Presentation</td>
        <td>Role-based visualization</td>
        <td>React Dashboards, Charts, Real-time Updates</td>
      </tr>
    </table>
  </div>

  <div class="section">
    <h2>4. User Interaction Flows</h2>

    <h3>Patient Journey Flow:</h3>
    <ol>
      <li><strong>Onboarding:</strong> Registration → Profile Setup → Device Pairing → Initial Assessment</li>
      <li><strong>Daily Use:</strong> Voice Assistance → Vital Signs Check → Medication Reminder → Activity Tracking</li>
      <li><strong>Healthcare Event:</strong> Symptom Detection → AI Analysis → Alert Generation → Provider Notification → Intervention</li>
      <li><strong>Follow-up:</strong> Virtual Consultation → Treatment Adjustment → Progress Monitoring</li>
    </ol>

    <h3>Physician Workflow:</h3>
    <ol>
      <li><strong>Patient Overview:</strong> View assigned patients → Review vital trends → Check AI insights</li>
      <li><strong>Alert Triage:</strong> Receive critical alerts → Assess severity → Prioritize interventions</li>
      <li><strong>Consultation:</strong> Join virtual call → Review real-time vitals → Update treatment plan</li>
      <li><strong>Documentation:</strong> Add clinical notes → Prescribe medications → Schedule follow-up</li>
    </ol>

    <h3>Caretaker Workflow:</h3>
    <ol>
      <li><strong>Monitoring:</strong> Track patient location → Check vital signs → Review medication adherence</li>
      <li><strong>Emergency Response:</strong> Receive SOS alert → View GPS location → Coordinate with emergency services</li>
      <li><strong>Communication:</strong> Message care team → Schedule appointments → Request assistance</li>
    </ol>
  </div>

  <div class="section">
    <h2>5. Integration Architecture</h2>

    <h3>External API Integrations:</h3>
    <table>
      <tr>
        <th>Service</th>
        <th>Purpose</th>
        <th>Integration Method</th>
      </tr>
      <tr>
        <td>Dexcom CGM API</td>
        <td>Continuous glucose monitoring data</td>
        <td>OAuth 2.0, REST API, Real-time webhooks</td>
      </tr>
      <tr>
        <td>Abbott FreeStyle Libre</td>
        <td>Flash glucose monitoring</td>
        <td>REST API, Data sync every 15 minutes</td>
      </tr>
      <tr>
        <td>Uber/Lyft APIs</td>
        <td>Accessible ride booking</td>
        <td>REST API, OAuth, Real-time status updates</td>
      </tr>
      <tr>
        <td>Google Maps API</td>
        <td>Navigation and location services</td>
        <td>JavaScript SDK, Directions API, Geocoding</td>
      </tr>
      <tr>
        <td>Telehealth Platform</td>
        <td>Virtual care video consultations</td>
        <td>WebRTC, Embedded SDK, Session management</td>
      </tr>
    </table>

    <h3>IoT Device Protocols:</h3>
    <ul>
      <li><strong>Bluetooth Low Energy (BLE):</strong> Smart Cane, Smart Glasses, Health Monitors</li>
      <li><strong>Wi-Fi:</strong> Smart Watches, GPS Trackers (backup)</li>
      <li><strong>MQTT:</strong> Real-time sensor data streaming</li>
      <li><strong>HTTPS:</strong> API communication with cloud backend</li>
    </ul>
  </div>

  <div class="section">
    <h2>6. Security & Compliance Architecture</h2>

    <h3>Security Layers:</h3>
    <ul>
      <li><strong>Data Encryption:</strong> End-to-end encryption (AES-256) for all health data</li>
      <li><strong>Authentication:</strong> Multi-factor authentication, Supabase Auth</li>
      <li><strong>Authorization:</strong> Role-based access control (RBAC) with granular permissions</li>
      <li><strong>Network Security:</strong> TLS 1.3, Certificate pinning, VPN support</li>
      <li><strong>Data Privacy:</strong> HIPAA compliance, GDPR ready, user consent management</li>
    </ul>

    <h3>Compliance Standards:</h3>
    <ul>
      <li>✓ HIPAA (Health Insurance Portability and Accountability Act)</li>
      <li>✓ SOC 2 Type II (Security, Availability, Confidentiality)</li>
      <li>⏳ FDA Pre-Cert Approval (In Progress)</li>
      <li>⏳ GDPR Certification (EU Markets)</li>
    </ul>
  </div>

  <div class="section">
    <h2>7. Scalability & Performance</h2>

    <h3>Performance Metrics:</h3>
    <table>
      <tr>
        <th>Metric</th>
        <th>Target</th>
        <th>Current</th>
      </tr>
      <tr>
        <td>Edge AI Inference Latency</td>
        <td>&lt; 100ms</td>
        <td>45-80ms</td>
      </tr>
      <tr>
        <td>API Response Time</td>
        <td>&lt; 200ms</td>
        <td>120-180ms</td>
      </tr>
      <tr>
        <td>System Uptime</td>
        <td>&gt; 99.9%</td>
        <td>99.8%</td>
      </tr>
      <tr>
        <td>Concurrent Users</td>
        <td>10,000+</td>
        <td>5,000 (tested)</td>
      </tr>
      <tr>
        <td>Data Sync Latency</td>
        <td>&lt; 2s</td>
        <td>1.2s</td>
      </tr>
    </table>

    <h3>Scalability Strategy:</h3>
    <ul>
      <li><strong>Horizontal Scaling:</strong> Auto-scaling Supabase Edge Functions based on load</li>
      <li><strong>Database Optimization:</strong> Indexed queries, connection pooling, read replicas</li>
      <li><strong>CDN Caching:</strong> Static assets served via global CDN</li>
      <li><strong>Edge Computing:</strong> AI processing distributed to user devices</li>
      <li><strong>Load Balancing:</strong> Geographic distribution of server resources</li>
    </ul>
  </div>

  <hr style="margin: 40px 0;">
  <p style="text-align: center; color: #6B7280; font-size: 12px;">
    Generated on ${new Date().toLocaleDateString()} | HealthCare Companion Functional Architecture v1.0<br>
    © 2026 Navilli - Confidential & Proprietary
  </p>
</body>
</html>`;

    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HealthCare-Companion-Functional-Architecture.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Architecture documentation downloaded! Open in browser and use Print > Save as PDF.');
  };

  const downloadArchitecturePPT = async () => {
    const pptContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HealthCare Companion - Functional Architecture Presentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #000;
    }
    .slide {
      width: 960px;
      height: 540px;
      margin: 20px auto;
      padding: 60px;
      background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
      color: white;
      page-break-after: always;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      border-radius: 10px;
      overflow: hidden;
    }
    .slide h1 {
      font-size: 48px;
      margin: 0 0 20px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .slide h2 {
      font-size: 36px;
      margin: 20px 0;
      border-bottom: 3px solid rgba(255,255,255,0.3);
      padding-bottom: 10px;
    }
    .slide h3 { font-size: 28px; margin: 15px 0; }
    .slide p { font-size: 18px; line-height: 1.6; }
    .slide ul { font-size: 16px; line-height: 1.8; margin-left: 20px; }
    .slide.title { text-align: center; padding-top: 150px; }
    .module-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 20px;
    }
    .module-box {
      background: rgba(255,255,255,0.15);
      padding: 15px;
      border-radius: 8px;
      font-size: 14px;
    }
    .module-box h4 {
      margin: 0 0 8px 0;
      font-size: 18px;
    }
    .flow-box {
      background: rgba(255,255,255,0.15);
      padding: 15px;
      margin: 15px 0;
      border-radius: 8px;
      text-align: center;
    }
    @media print {
      .slide { margin: 0; page-break-after: always; }
    }
  </style>
</head>
<body>

<!-- Slide 1: Title -->
<div class="slide title">
  <h1>🏥 HealthCare Companion</h1>
  <p style="font-size: 32px; margin: 30px 0;">Functional Architecture</p>
  <p style="font-size: 20px; margin-top: 80px;">Unified Healthcare Platform</p>
  <p style="font-size: 16px;">Technical Documentation | Navilli</p>
</div>

<!-- Slide 2: System Overview -->
<div class="slide">
  <h2>System Overview</h2>
  <p style="margin: 20px 0;">Unified platform integrating blind assistance + remote monitoring</p>
  <div class="module-grid">
    <div class="module-box">
      <h4>👥 5 User Roles</h4>
      <p>Patient, Caretaker, Physician, Nurse, AI Admin</p>
    </div>
    <div class="module-box">
      <h4>📱 6 Core Modules</h4>
      <p>Visual Assistance, Patient Monitoring, AI Analytics, Telehealth, Fitness, Inventory</p>
    </div>
    <div class="module-box">
      <h4>🤖 12 AI Models</h4>
      <p>Preventive analytics with edge processing</p>
    </div>
    <div class="module-box">
      <h4>🌐 24 Languages</h4>
      <p>Global accessibility support</p>
    </div>
  </div>
</div>

<!-- Slide 3: Core Modules Part 1 -->
<div class="slide">
  <h2>Core Modules (1/2)</h2>
  <div style="margin-top: 20px;">
    <div class="module-box" style="margin-bottom: 15px;">
      <h4>📱 Visual Assistance</h4>
      <ul style="margin: 8px 0 0 20px;">
        <li>Voice navigation + object detection</li>
        <li>Smart Cane/Glasses integration</li>
        <li>Accessible ride booking</li>
      </ul>
    </div>
    <div class="module-box" style="margin-bottom: 15px;">
      <h4>❤️ Remote Patient Monitoring</h4>
      <ul style="margin: 8px 0 0 20px;">
        <li>Real-time vital signs tracking</li>
        <li>CGM API integration</li>
        <li>Emergency SOS with GPS</li>
      </ul>
    </div>
    <div class="module-box">
      <h4>🤖 AI Analytics</h4>
      <ul style="margin: 8px 0 0 20px;">
        <li>12 preventive models + 5 agentic scenarios</li>
        <li>Edge AI (&lt;100ms latency)</li>
      </ul>
    </div>
  </div>
</div>

<!-- Slide 4: Core Modules Part 2 -->
<div class="slide">
  <h2>Core Modules (2/2)</h2>
  <div style="margin-top: 20px;">
    <div class="module-box" style="margin-bottom: 15px;">
      <h4>🏥 Virtual Care Telehealth</h4>
      <ul style="margin: 8px 0 0 20px;">
        <li>Video/audio consultations</li>
        <li>Real-time vital signs sharing</li>
        <li>Digital prescription management</li>
      </ul>
    </div>
    <div class="module-box" style="margin-bottom: 15px;">
      <h4>💪 Fitness & Wellness</h4>
      <ul style="margin: 8px 0 0 20px;">
        <li>Activity + nutrition tracking</li>
        <li>AI-powered fitness goals</li>
        <li>Sleep analysis</li>
      </ul>
    </div>
    <div class="module-box">
      <h4>📦 Inventory & Vendors</h4>
      <ul style="margin: 8px 0 0 20px;">
        <li>Device allocation + tracking</li>
        <li>Vendor management + procurement</li>
      </ul>
    </div>
  </div>
</div>

<!-- Slide 5: Data Flow -->
<div class="slide">
  <h2>Data Flow Architecture</h2>
  <div class="flow-box" style="margin-top: 30px;">
    <p style="font-size: 18px; font-weight: bold;">Collection → Processing → Storage → Analytics → Action</p>
  </div>
  <div class="module-grid" style="margin-top: 30px;">
    <div class="module-box">
      <h4>1. Collection</h4>
      <p>IoT sensors, smart devices</p>
    </div>
    <div class="module-box">
      <h4>2. Edge Processing</h4>
      <p>Real-time on-device AI</p>
    </div>
    <div class="module-box">
      <h4>3. Cloud Storage</h4>
      <p>Supabase PostgreSQL</p>
    </div>
    <div class="module-box">
      <h4>4. AI Analytics</h4>
      <p>Predictive models</p>
    </div>
  </div>
</div>

<!-- Slide 6: Integration -->
<div class="slide">
  <h2>Integration Architecture</h2>
  <h3 style="font-size: 22px; margin-top: 30px;">External APIs</h3>
  <ul style="font-size: 16px;">
    <li><strong>CGM:</strong> Dexcom, Abbott FreeStyle Libre</li>
    <li><strong>Transportation:</strong> Uber, Lyft accessibility APIs</li>
    <li><strong>Navigation:</strong> Google Maps</li>
    <li><strong>Telehealth:</strong> Embedded virtual care platform</li>
  </ul>
  <h3 style="font-size: 22px; margin-top: 25px;">IoT Protocols</h3>
  <ul style="font-size: 16px;">
    <li><strong>BLE:</strong> Smart devices communication</li>
    <li><strong>MQTT:</strong> Real-time sensor streaming</li>
    <li><strong>HTTPS:</strong> Secure cloud APIs</li>
  </ul>
</div>

<!-- Slide 7: Security & Performance -->
<div class="slide">
  <h2>Security & Performance</h2>
  <div class="module-grid" style="margin-top: 25px;">
    <div>
      <h3 style="font-size: 22px;">Security</h3>
      <ul style="font-size: 14px;">
        <li>End-to-end encryption (AES-256)</li>
        <li>Multi-factor authentication</li>
        <li>RBAC with granular permissions</li>
        <li>HIPAA + SOC 2 compliance</li>
      </ul>
    </div>
    <div>
      <h3 style="font-size: 22px;">Performance</h3>
      <ul style="font-size: 14px;">
        <li>Edge AI: 45-80ms latency</li>
        <li>API response: 120-180ms</li>
        <li>System uptime: 99.8%</li>
        <li>5,000+ concurrent users</li>
      </ul>
    </div>
  </div>
  <div class="flow-box" style="margin-top: 25px;">
    <p><strong>Scalability:</strong> Auto-scaling, CDN caching, edge computing, geographic load balancing</p>
  </div>
</div>

<!-- Slide 8: Closing -->
<div class="slide title">
  <h1>Questions?</h1>
  <p style="font-size: 20px; margin-top: 80px;">HealthCare Companion</p>
  <p style="font-size: 16px;">Functional Architecture v1.0</p>
  <p style="font-size: 14px; margin-top: 100px; opacity: 0.8;">
    Generated on ${new Date().toLocaleDateString()}<br>
    © 2026 Navilli - Confidential
  </p>
</div>

</body>
</html>`;

    const blob = new Blob([pptContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HealthCare-Companion-Functional-Architecture-Presentation.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Architecture presentation downloaded! Open in browser for full-screen view.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Navilli Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HealthCare Companion
              </h1>
              <p className="text-sm text-muted-foreground">Product Demo & Technical Documentation</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="brochure">Brochure</TabsTrigger>
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="functional">Functional</TabsTrigger>
            <TabsTrigger value="edgeai">Edge AI</TabsTrigger>
            <TabsTrigger value="deviceqa">Device QA</TabsTrigger>
            <TabsTrigger value="team">Team & Roadmap</TabsTrigger>
          </TabsList>

          {/* Overview Section */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            <ProductOverview />
          </TabsContent>

          {/* Product Brochure Section */}
          <TabsContent value="brochure" className="space-y-6 mt-6">
            <ProductBrochure />
          </TabsContent>

          {/* Problem Statement Section */}
          <TabsContent value="problem" className="space-y-6 mt-6">
            <ProblemStatement />
          </TabsContent>

          {/* Solution & Benefits Section */}
          <TabsContent value="solution" className="space-y-6 mt-6">
            <SolutionBenefits />
            <RoleWorkflows />
          </TabsContent>

          {/* Technical Architecture Section */}
          <TabsContent value="architecture" className="space-y-6 mt-6">
            <TechnicalArchitecture />
            <CGMIntegration />
          </TabsContent>

          {/* Functional Architecture Section */}
          <TabsContent value="functional" className="space-y-6 mt-6">
            <FunctionalArchitecture
              downloadArchitecturePDF={downloadArchitecturePDF}
              downloadArchitecturePPT={downloadArchitecturePPT}
            />
          </TabsContent>

          {/* Edge AI Architecture Section */}
          <TabsContent value="edgeai" className="space-y-6 mt-6">
            <EdgeAIArchitecture />
          </TabsContent>

          {/* Device QA Testing Section */}
          <TabsContent value="deviceqa" className="space-y-6 mt-6">
            <DeviceQATesting />
          </TabsContent>

          {/* Team & Roadmap Section */}
          <TabsContent value="team" className="space-y-6 mt-6">
            <TeamRoadmap
              teamResources={teamResources}
              onResourceChange={handleResourceChange}
              downloadAsPDF={downloadAsPDF}
              downloadAsPPT={downloadAsPPT}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}