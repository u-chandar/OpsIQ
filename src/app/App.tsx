import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Bell,
  MessageCircle,
  Send,
  X,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  Users,
  FileText,
  Settings,
  HelpCircle,
  Zap,
  Clock,
  DollarSign,
  UserCheck,
  Target,
  Database,
  Layers,
  CheckCircle,
  LogOut,
} from "lucide-react";

// Types for admin setup
interface AdminConfig {
  adminName: string;
  adminEmail: string;
  organization: string;
  role: string;
  apiEndpoint: string;
  installedAt: string;
}

// Mock data
const p2pTrendData = [
  { month: "Jan", days: 118 },
  { month: "Feb", days: 105 },
  { month: "Mar", days: 98 },
  { month: "Apr", days: 85 },
  { month: "May", days: 75 },
  { month: "Jun", days: 68 },
];

const invoiceVolumeData = [
  { month: "Jan", invoices: 142, processed: 120 },
  { month: "Feb", invoices: 158, processed: 135 },
  { month: "Mar", invoices: 172, processed: 155 },
  { month: "Apr", invoices: 188, processed: 170 },
  { month: "May", invoices: 192, processed: 180 },
  { month: "Jun", invoices: 196, processed: 185 },
];

const discountCaptureData = [
  { month: "Jan", capture: 1.2 },
  { month: "Feb", capture: 2.1 },
  { month: "Mar", capture: 2.8 },
  { month: "Apr", capture: 3.5 },
  { month: "May", capture: 4.0 },
  { month: "Jun", capture: 4.5 },
];

const apAgingData = [
  { bucket: "Current", amount: 120 },
  { bucket: "30 Days", amount: 89 },
  { bucket: "60 Days", amount: 72 },
  { bucket: "90 Days", amount: 39 },
  { bucket: "120+ Days", amount: 12 },
];

const recruitingTrendData = [
  { month: "Jan", days: 52 },
  { month: "Feb", days: 48 },
  { month: "Mar", days: 44 },
  { month: "Apr", days: 41 },
  { month: "May", days: 38 },
  { month: "Jun", days: 35 },
];

const aiAgents = [
  { name: "Invoice Review", domain: "AP & Invoicing", status: "live", accuracy: 94 },
  { name: "Resume Screening", domain: "Recruiting", status: "live", accuracy: 89 },
  { name: "Vendor Assessment", domain: "Vendor Mgmt", status: "live", accuracy: 91 },
  { name: "Compliance Check", domain: "P2P", status: "live", accuracy: 96 },
  { name: "Market Research", domain: "Procurement", status: "live", accuracy: 87 },
  { name: "SOW Generator", domain: "Procurement", status: "planned", accuracy: null },
  { name: "Risk Assessment", domain: "Engineering", status: "planned", accuracy: null },
  { name: "Discount Optimizer", domain: "Vendor Mgmt", status: "planned", accuracy: null },
  { name: "Cash Flow Forecast", domain: "AP & Invoicing", status: "planned", accuracy: null },
  { name: "Invoice Generator", domain: "AP & Invoicing", status: "planned", accuracy: null },
  { name: "Skill Gap Analyzer", domain: "HR & Engineering", status: "planned", accuracy: null },
  { name: "Candidate Matcher", domain: "Recruiting", status: "planned", accuracy: null },
];

const initiatives = [
  { title: "Real-time AI Dashboard", domain: "P2P", status: "active", priority: "high" },
  { title: "Invoice Review Agent", domain: "AP", status: "active", priority: "high" },
  { title: "Discount Capture Automation", domain: "Vendor", status: "active", priority: "medium" },
  { title: "Vendor Capability Scoring", domain: "Vendor", status: "planned", priority: "high" },
  { title: "Resume AI Screening", domain: "Recruiting", status: "active", priority: "high" },
  { title: "Compliance Drift Monitoring", domain: "P2P", status: "planned", priority: "medium" },
  { title: "Self-Perform vs SubK Analysis", domain: "Engineering", status: "planned", priority: "high" },
  { title: "Maverick Spend Detection", domain: "P2P", status: "planned", priority: "medium" },
];

// Additional mock data for other tabs
const p2pStages = [
  { stage: "Requisition", count: 24, avgDays: 3, status: "on-track" },
  { stage: "Buyer Review", count: 18, avgDays: 2, status: "on-track" },
  { stage: "Approval", count: 12, avgDays: 5, status: "delayed" },
  { stage: "PO Creation", count: 8, avgDays: 2, status: "on-track" },
  { stage: "Supplier Response", count: 5, avgDays: 14, status: "delayed" },
  { stage: "Fulfillment", count: 3, avgDays: 21, status: "on-track" },
  { stage: "Invoice", count: 2, avgDays: 8, status: "on-track" },
  { stage: "Payment", count: 1, avgDays: 3, status: "on-track" },
];

const invoiceDetails = [
  { id: "INV-2024-001", vendor: "Nexa Corp", amount: 45230, status: "paid", daysOverdue: 0 },
  { id: "INV-2024-002", vendor: "Proxima Inc", amount: 23450, status: "paid", daysOverdue: 0 },
  { id: "INV-2024-003", vendor: "Atlas Global", amount: 67890, status: "pending", daysOverdue: 0 },
  { id: "INV-2024-004", vendor: "Kappa Tech", amount: 12340, status: "past-due", daysOverdue: 5 },
  { id: "INV-2024-005", vendor: "Mira Systems", amount: 34560, status: "past-due", daysOverdue: 12 },
  { id: "INV-2024-006", vendor: "Delta Supplies", amount: 23100, status: "past-due", daysOverdue: 38 },
  { id: "INV-2024-007", vendor: "Sigma Logistics", amount: 56780, status: "past-due", daysOverdue: 65 },
  { id: "INV-2024-008", vendor: "Omega Partners", amount: 89240, status: "past-due", daysOverdue: 92 },
];

const candidates = [
  { name: "Alice Johnson", role: "Senior Procurement Analyst", score: 94, effort: "1-click", match: "92%" },
  { name: "Bob Chen", role: "Supply Chain Manager", score: 88, effort: "2-min", match: "87%" },
  { name: "Carol Davis", role: "Vendor Manager", score: 85, effort: "5-min", match: "84%" },
  { name: "David Martinez", role: "Contract Administrator", score: 79, effort: "10-min", match: "78%" },
  { name: "Emma Wilson", role: "Operations Specialist", score: 72, effort: "15-min", match: "71%" },
];

const vendors = [
  { name: "Nexa Corp", score: 94, tier: "Preferred", orders: 156, disputes: 2, discount: "12.5%" },
  { name: "Proxima Inc", score: 87, tier: "Preferred", orders: 98, disputes: 1, discount: "8.2%" },
  { name: "Atlas Global", score: 79, tier: "Evaluated", orders: 45, disputes: 3, discount: "5.1%" },
  { name: "Kappa Tech", score: 71, tier: "Evaluated", orders: 32, disputes: 5, discount: "3.7%" },
  { name: "Mira Systems", score: 63, tier: "Standard", orders: 18, disputes: 4, discount: "2.1%" },
];

const selfPerformAnalysis = [
  { workType: "Site Design", currentlySubK: 45, recommendation: "Keep SubK", efficiency: "85%" },
  { workType: "Civil Works", currentlySubK: 60, recommendation: "Increase Self", efficiency: "72%" },
  { workType: "HVAC Systems", currentlySubK: 80, recommendation: "Keep SubK", efficiency: "90%" },
  { workType: "Electrical", currentlySubK: 55, recommendation: "Self-Perform", efficiency: "78%" },
  { workType: "Inspection", currentlySubK: 25, recommendation: "Self-Perform", efficiency: "92%" },
  { workType: "Permitting", currentlySubK: 10, recommendation: "Self-Perform", efficiency: "88%" },
];

// Setup Wizard Component for Initial Installation
function SetupWizard({ onComplete }: { onComplete: (config: AdminConfig) => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    adminName: "",
    adminEmail: "",
    organization: "",
    role: "Operations Manager",
    apiEndpoint: "http://localhost:5000",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (stepNum: number) => {
    const newErrors: Record<string, string> = {};
    if (stepNum === 1) {
      if (!formData.adminName.trim()) newErrors.adminName = "Admin name is required";
      if (!formData.adminEmail.trim()) newErrors.adminEmail = "Email is required";
      if (!formData.adminEmail.includes("@")) newErrors.adminEmail = "Valid email required";
    }
    if (stepNum === 2) {
      if (!formData.organization.trim()) newErrors.organization = "Organization name is required";
    }
    if (stepNum === 3) {
      if (!formData.apiEndpoint.trim()) newErrors.apiEndpoint = "API endpoint is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        const config: AdminConfig = {
          ...formData,
          installedAt: new Date().toISOString(),
        };
        localStorage.setItem("opsiq_admin_config", JSON.stringify(config));
        onComplete(config);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                O
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">OpsIQ</h1>
                <p className="text-xs text-slate-500">Operations Intelligence Platform</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">Welcome! Let's set up your admin account.</p>
          </div>

          {/* Progress */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition ${
                  s <= step ? "bg-cyan-600" : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">Admin Information</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.adminName}
                    onChange={(e) =>
                      setFormData({ ...formData, adminName: e.target.value })
                    }
                    placeholder="John Doe"
                    className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      errors.adminName ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.adminName && (
                    <p className="text-xs text-red-600 mt-1">{errors.adminName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.adminEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, adminEmail: e.target.value })
                    }
                    placeholder="admin@company.com"
                    className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      errors.adminEmail ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.adminEmail && (
                    <p className="text-xs text-red-600 mt-1">{errors.adminEmail}</p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">Organization Setup</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    placeholder="Acme Corporation"
                    className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      errors.organization ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.organization && (
                    <p className="text-xs text-red-600 mt-1">{errors.organization}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option>Operations Manager</option>
                    <option>VP Operations</option>
                    <option>CFO</option>
                    <option>Procurement Manager</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900">API Configuration</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    API Endpoint
                  </label>
                  <input
                    type="url"
                    value={formData.apiEndpoint}
                    onChange={(e) =>
                      setFormData({ ...formData, apiEndpoint: e.target.value })
                    }
                    placeholder="http://localhost:5000"
                    className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      errors.apiEndpoint ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.apiEndpoint && (
                    <p className="text-xs text-red-600 mt-1">{errors.apiEndpoint}</p>
                  )}
                  <p className="text-xs text-slate-500 mt-2">
                    Leave as default for local development
                  </p>
                </div>
                <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                  <p className="text-xs text-cyan-900">
                    <strong>Ready to launch!</strong> After setup, the dashboard will connect to your configured API to load live agent data.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                type="button"
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              type="button"
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-white transition flex items-center justify-center gap-2 ${
                step === 3
                  ? "bg-cyan-600 hover:bg-cyan-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {step === 3 ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Complete Setup
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Step indicator */}
          <p className="text-center text-xs text-slate-500 mt-4">
            Step {step} of 3
          </p>
        </div>
      </div>
    </div>
  );
}

function KPICard({
  label,
  value,
  unit,
  target,
  trend,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  unit?: string;
  target?: string;
  trend?: string;
  icon: React.FC<{ className: string }>;
}) {
  const isPositive = trend?.startsWith("+");
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {value}
            {unit && <span className="text-lg text-slate-500 ml-1">{unit}</span>}
          </p>
          {target && <p className="mt-1 text-xs text-slate-500">{target}</p>}
          {trend && (
            <p
              className={`mt-2 flex items-center gap-1 text-xs font-medium ${
                isPositive ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {trend}
            </p>
          )}
        </div>
        <div className="rounded-lg bg-slate-100 p-2">
          <Icon className="h-6 w-6 text-slate-600" />
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium transition ${
        active
          ? "border-b-2 border-cyan-600 text-cyan-600"
          : "border-b-2 border-transparent text-slate-600 hover:text-slate-900"
      }`}
      type="button"
    >
      {label}
    </button>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm analyzing your question. Based on current data: P2P cycle is 68 days (target 60), AP aging is $332K, and we have 5 AI agents live.",
        },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-96 rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col max-h-96">
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Ask OpsIQ</h3>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-slate-100 rounded-lg"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div className="text-center text-sm text-slate-500">
                <p className="font-medium mb-2">Ask about your operations</p>
                <p className="text-xs">P2P cycles, AP aging, vendors, recruiting, and more</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-lg px-3 py-2 max-w-xs text-sm ${
                      msg.role === "user"
                        ? "bg-cyan-600 text-white"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex gap-2 border-t border-slate-200 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="rounded-lg bg-cyan-600 p-1.5 text-white hover:bg-cyan-700"
              type="button"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-cyan-600 p-4 text-white shadow-lg hover:bg-cyan-700 transition"
          type="button"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [adminConfig, setAdminConfig] = useState<AdminConfig | null>(null);
  const [setupComplete, setSetupComplete] = useState(false);

  // Load config on mount
  useEffect(() => {
    const saved = localStorage.getItem("opsiq_admin_config");
    if (saved) {
      const config = JSON.parse(saved) as AdminConfig;
      setAdminConfig(config);
      setSetupComplete(true);
    }
  }, []);

  const handleSetupComplete = (config: AdminConfig) => {
    setAdminConfig(config);
    setSetupComplete(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("opsiq_admin_config");
    setSetupComplete(false);
    setAdminConfig(null);
  };

  // Show setup wizard if not setup
  if (!setupComplete) {
    return <SetupWizard onComplete={handleSetupComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">OpsIQ</h1>
            <p className="text-sm text-slate-500">Operations Intelligence</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
              5 AI Agents Live
            </span>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{adminConfig?.adminName}</p>
              <p className="text-xs text-slate-500">{adminConfig?.organization}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition"
              title="Logout and reconfigure"
              type="button"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-white sticky top-0">
        <div className="mx-auto max-w-7xl px-6 flex gap-2">
          <TabButton
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <TabButton
            label="Procure to Pay"
            active={activeTab === "p2p"}
            onClick={() => setActiveTab("p2p")}
          />
          <TabButton
            label="AP & Invoicing"
            active={activeTab === "ap"}
            onClick={() => setActiveTab("ap")}
          />
          <TabButton
            label="Recruiting"
            active={activeTab === "recruiting"}
            onClick={() => setActiveTab("recruiting")}
          />
          <TabButton
            label="Vendor & Engineering"
            active={activeTab === "vendor"}
            onClick={() => setActiveTab("vendor")}
          />
          <TabButton
            label="Architecture"
            active={activeTab === "arch"}
            onClick={() => setActiveTab("arch")}
          />
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Key Performance Indicators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <KPICard
                  label="P2P Cycle"
                  value="68"
                  unit="days"
                  target="Target: 60 days"
                  trend="-50 days since Jan"
                  icon={Clock}
                />
                <KPICard
                  label="Recruiting Cycle"
                  value="35"
                  unit="days"
                  target="Target: 28 days"
                  trend="-17 days since Jan"
                  icon={Users}
                />
                <KPICard
                  label="AP Aging"
                  value="$332K"
                  target="88 invoices open · Target: <$250K"
                  trend={null}
                  icon={DollarSign}
                />
                <KPICard
                  label="Active Invoices"
                  value="196"
                  unit="inv"
                  target="Target: <220"
                  trend="+54 since Jan"
                  icon={FileText}
                />
                <KPICard
                  label="Active Vendors"
                  value="84"
                  unit="vendors"
                  target="34 fully evaluated · Target: 100+"
                  trend={null}
                  icon={UserCheck}
                />
                <KPICard
                  label="Discount Capture"
                  value="4.5"
                  unit="%"
                  target="Target: 5%"
                  trend="+3.3% since Jan"
                  icon={TrendingUp}
                />
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">P2P Cycle Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={p2pTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="days" stroke="#06b6d4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Invoice Volume & Processing</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={invoiceVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="invoices" fill="#94a3b8" />
                    <Bar dataKey="processed" fill="#06b6d4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">AP Aging Breakdown</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={apAgingData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="bucket" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#f97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Discount Capture Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={discountCaptureData}>
                    <defs>
                      <linearGradient id="colorCapture" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="capture" stroke="#10b981" fill="url(#colorCapture)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">AI Agents (12 Total)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiAgents.map((agent) => (
                  <div
                    key={agent.name}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-slate-900">{agent.name}</p>
                        <p className="text-xs text-slate-500">{agent.domain}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          agent.status === "live"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {agent.status === "live" ? "Live" : "Planned"}
                      </span>
                    </div>
                    {agent.accuracy && (
                      <p className="mt-2 text-xs text-slate-600">Accuracy: {agent.accuracy}%</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Initiatives Roadmap</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {initiatives.slice(0, 8).map((init) => (
                  <div
                    key={init.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-start justify-between"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{init.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{init.domain}</p>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          init.status === "active"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {init.status}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          init.priority === "high"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {init.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "p2p" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Procure to Pay Lifecycle</h2>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">P2P Process Stages</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-slate-200">
                    <tr>
                      <th className="text-left py-2 px-3">Stage</th>
                      <th className="text-left py-2 px-3">In Progress</th>
                      <th className="text-left py-2 px-3">Avg Days</th>
                      <th className="text-left py-2 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p2pStages.map((stage) => (
                      <tr key={stage.stage} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-3 font-medium text-slate-900">{stage.stage}</td>
                        <td className="py-3 px-3 text-slate-600">{stage.count}</td>
                        <td className="py-3 px-3 text-slate-600">{stage.avgDays}d</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            stage.status === 'on-track' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                          }`}>
                            {stage.status === 'on-track' ? '✓ On Track' : '⚠ Delayed'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-slate-900 mb-4">Active Initiatives (25 Total)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {initiatives.filter(i => i.domain === 'P2P').map((init) => (
                  <div key={init.title} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="font-medium text-slate-900">{init.title}</p>
                    <div className="flex gap-2 mt-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        init.status === 'active' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                      }`}>{init.status}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        init.priority === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                      }`}>{init.priority}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "ap" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">AP & Invoicing</h2>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Open Invoices & Aging</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-slate-200">
                    <tr>
                      <th className="text-left py-2 px-3">Invoice ID</th>
                      <th className="text-left py-2 px-3">Vendor</th>
                      <th className="text-left py-2 px-3">Amount</th>
                      <th className="text-left py-2 px-3">Status</th>
                      <th className="text-left py-2 px-3">Days Overdue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceDetails.map((inv) => (
                      <tr key={inv.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-3 font-medium text-slate-900">{inv.id}</td>
                        <td className="py-3 px-3 text-slate-600">{inv.vendor}</td>
                        <td className="py-3 px-3 text-slate-600">${inv.amount.toLocaleString()}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            inv.status === 'paid' ? 'bg-emerald-100 text-emerald-700' :
                            inv.status === 'pending' ? 'bg-blue-100 text-blue-700' :
                            'bg-rose-100 text-rose-700'
                          }`}>
                            {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-600">{inv.daysOverdue > 0 ? `${inv.daysOverdue}d` : '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === "recruiting" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Recruiting Lifecycle</h2>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Top 5 AI-Screened Candidates</h3>
              <div className="space-y-4">
                {candidates.map((candidate, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-slate-900">{candidate.name}</p>
                        <p className="text-sm text-slate-600 mt-1">{candidate.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-cyan-600">{candidate.score}%</p>
                        <p className="text-xs text-slate-500">AI Score</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 mb-1">Application Effort</p>
                        <p className="text-sm font-medium text-slate-700">{candidate.effort}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 mb-1">Role Match</p>
                        <p className="text-sm font-medium text-emerald-600">{candidate.match}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "vendor" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Vendor & Engineering</h2>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Top 5 Vendor Scores</h3>
              <div className="space-y-3">
                {vendors.map((vendor) => (
                  <div key={vendor.name} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-medium text-slate-900">{vendor.name}</p>
                        <p className="text-xs text-slate-500 mt-1">Tier: {vendor.tier}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-cyan-600">{vendor.score}</p>
                        <p className="text-xs text-slate-500">Score</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-500">Orders</p>
                        <p className="text-sm font-medium text-slate-900">{vendor.orders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Disputes</p>
                        <p className="text-sm font-medium text-slate-900">{vendor.disputes}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Discount</p>
                        <p className="text-sm font-medium text-emerald-600">{vendor.discount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Self-Perform vs SubK Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-slate-200">
                    <tr>
                      <th className="text-left py-2 px-3">Work Type</th>
                      <th className="text-left py-2 px-3">Currently SubK %</th>
                      <th className="text-left py-2 px-3">AI Recommendation</th>
                      <th className="text-left py-2 px-3">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selfPerformAnalysis.map((work) => (
                      <tr key={work.workType} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-3 font-medium text-slate-900">{work.workType}</td>
                        <td className="py-3 px-3 text-slate-600">{work.currentlySubK}%</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            work.recommendation === 'Self-Perform' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {work.recommendation}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-600">{work.efficiency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === "arch" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Architecture & Tech Stack</h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Azure Blob Storage</p>
                    <p className="text-sm text-slate-600">Data ingestion & file storage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Azure Document Intelligence</p>
                    <p className="text-sm text-slate-600">AI-powered document extraction</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Azure OpenAI</p>
                    <p className="text-sm text-slate-600">12 AI agents & NLP processing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Databricks</p>
                    <p className="text-sm text-slate-600">Compute & data warehousing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Power BI</p>
                    <p className="text-sm text-slate-600">Advanced analytics & reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Chatbot />
    </div>
  );
}
