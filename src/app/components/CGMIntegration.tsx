import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Activity, 
  Shield, 
  Database, 
  Bell, 
  CheckCircle, 
  Smartphone, 
  Zap, 
  Network, 
  ArrowRight, 
  AlertCircle 
} from "lucide-react";

export function CGMIntegration() {
  return (
    <Card className="border-teal-500 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-teal-600" />
          CGM (Continuous Glucose Monitoring) API Integration
        </CardTitle>
        <CardDescription>
          Official manufacturer specifications and technical integration details for real-time glucose monitoring
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* API Access & Authentication */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-teal-400">
            <h4 className="mb-3 flex items-center gap-2 text-teal-700 dark:text-teal-400">
              <Shield className="w-5 h-5" />
              API Access & Authentication
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-teal-50 dark:bg-teal-900 rounded">
                  <p className="font-medium mb-1">API Type</p>
                  <p className="text-xs text-muted-foreground">Cloud-based REST API for CGM data retrieval</p>
                </div>
                <div className="p-3 bg-teal-50 dark:bg-teal-900 rounded">
                  <p className="font-medium mb-1">Data Source</p>
                  <p className="text-xs text-muted-foreground">Device → Cloud → API (not direct device access)</p>
                </div>
                <div className="p-3 bg-teal-50 dark:bg-teal-900 rounded">
                  <p className="font-medium mb-1">Authentication</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Current:</strong> OAuth 2.0<br />
                    <strong>Future Options:</strong> JWT, API Key (upon request)
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-cyan-50 dark:bg-cyan-900 rounded">
                  <p className="font-medium mb-1">Data Delivery Method</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Current:</strong> Polling (pull-based)<br />
                    <strong>Planned:</strong> Event push / Webhooks (few months)
                  </p>
                </div>
                <div className="p-3 bg-cyan-50 dark:bg-cyan-900 rounded">
                  <p className="font-medium mb-1">Documentation</p>
                  <p className="text-xs text-muted-foreground">To be defined collaboratively upon partnership confirmation</p>
                </div>
                <div className="p-3 bg-cyan-50 dark:bg-cyan-900 rounded">
                  <p className="font-medium mb-1">OAuth 2.0 Flow</p>
                  <p className="text-xs text-muted-foreground">Standard authorization code grant with refresh tokens</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Specifications */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-400">
            <h4 className="mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <Database className="w-5 h-5" />
              Glucose Reading Data Specifications
            </h4>
            <div className="space-y-4">
              {/* Sampling Interval */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Sampling Interval</Badge>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">3 minutes</span>
                </div>
                <p className="text-xs text-muted-foreground">480 readings per 24 hours | High-resolution continuous monitoring</p>
              </div>

              {/* Data Fields */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-lg">
                <p className="font-medium mb-3">Available Fields per Reading:</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300">
                    <p className="font-medium text-blue-700 dark:text-blue-400">📅 timestamp</p>
                    <p className="text-xs text-muted-foreground mt-1">UTC format for global consistency</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300">
                    <p className="font-medium text-blue-700 dark:text-blue-400">🩸 glucose value + unit</p>
                    <p className="text-xs text-muted-foreground mt-1">mg/dL or mmol/L with unit indicator</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300">
                    <p className="font-medium text-blue-700 dark:text-blue-400">📈 trend type</p>
                    <p className="text-xs text-muted-foreground mt-1">Rate-of-change indicator (↑↗→↘↓)</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300">
                    <p className="font-medium text-blue-700 dark:text-blue-400">🆔 packageNumber</p>
                    <p className="text-xs text-muted-foreground mt-1">Unique reading ID for deduplication</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300">
                    <p className="font-medium text-blue-700 dark:text-blue-400">🚦 glucose state</p>
                    <p className="text-xs text-muted-foreground mt-1">High / Normal / Low classification</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded border border-blue-300">
                    <p className="font-medium text-blue-700 dark:text-blue-400">✅ quality flag</p>
                    <p className="text-xs text-muted-foreground mt-1">Reading reliability indicator</p>
                  </div>
                </div>
              </div>

              {/* Sample JSON Payload */}
              <div className="p-4 bg-gray-800 text-gray-100 rounded-lg font-mono text-xs overflow-x-auto">
                <p className="text-green-400 mb-2">// Sample CGM Reading Payload (JSON)</p>
                <pre>{`{
  "packageNumber": "abc123xyz789",
  "timestamp": "2026-02-26T14:32:00Z",
  "glucoseValue": 128,
  "unit": "mg/dL",
  "trendType": "STEADY",
  "glucoseState": "NORMAL",
  "qualityFlag": "GOOD"
}`}</pre>
              </div>
            </div>
          </div>

          {/* Alert Configuration */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-orange-400">
            <h4 className="mb-3 flex items-center gap-2 text-orange-700 dark:text-orange-400">
              <Bell className="w-5 h-5" />
              Alert System & Threshold Configuration
            </h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <p className="font-medium">Per-Patient Customization</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Each patient can set individual high/low glucose thresholds</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <p className="font-medium">Default Standards</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Falls back to international medical standards if not customized</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 rounded-lg border-l-4 border-red-500">
                <p className="font-medium mb-2 text-red-700 dark:text-red-400">Alert Delivery Mechanism:</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🔔</span>
                    <span><strong>Vibration alerts</strong> when glucose exceeds thresholds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🔊</span>
                    <span><strong>Sound alerts</strong> for high/low glucose events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">⚙️</span>
                    <span><strong>Customizable alerts</strong> available upon request (severity levels, repeat logic, cooldown periods)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                <p className="font-medium mb-2">Integration with Healthcare Companion:</p>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">API Pull</Badge>
                    <p className="text-xs">Glucose state field triggers app alerts</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">Multi-Role</Badge>
                    <p className="text-xs">Notify patient, caretaker, physician</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">AI Agent</Badge>
                    <p className="text-xs">Feed to Glucose Agent (M5) for predictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Lifecycle & Connectivity */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-purple-400">
            <h4 className="mb-3 flex items-center gap-2 text-purple-700 dark:text-purple-400">
              <Smartphone className="w-5 h-5" />
              Device Lifecycle & Connectivity Management
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded border-l-4 border-purple-600">
                  <p className="font-medium mb-1">Available Metadata:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>✓ Sensor activation time (session start)</li>
                    <li>✓ Sensor end time / expiration</li>
                    <li>✓ Remaining sensor life (days/hours)</li>
                    <li>✓ Real-time connectivity status</li>
                    <li>✓ Patient-device pairing history</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded">
                  <p className="font-medium mb-1">Data Integrity:</p>
                  <p className="text-sm text-muted-foreground">Auto-resync on reconnection ensures minimal data loss</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded border-l-4 border-indigo-600">
                  <p className="font-medium mb-1">Connection Monitoring:</p>
                  <p className="text-sm text-muted-foreground mb-2">Signal loss events are tracked; device automatically backfills missing data upon reconnection</p>
                  <Badge className="bg-indigo-600">Data Loss: Rare</Badge>
                </div>
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded">
                  <p className="font-medium mb-1">Session Management:</p>
                  <p className="text-sm text-muted-foreground">Typical sensor lifespan: 10-14 days | API alerts on sensor expiration approaching</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance & Data Access */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-green-400">
            <h4 className="mb-3 flex items-center gap-2 text-green-700 dark:text-green-400">
              <Zap className="w-5 h-5" />
              Performance Metrics & Data Access
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">≤3s</p>
                <p className="text-sm font-medium">Data Latency</p>
                <p className="text-xs text-muted-foreground mt-1">Sensor → Cloud → API</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">∞</p>
                <p className="text-sm font-medium">Historical Data</p>
                <p className="text-xs text-muted-foreground mt-1">Permanent cloud storage</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">JSON</p>
                <p className="text-sm font-medium">AGP Reports</p>
                <p className="text-xs text-muted-foreground mt-1">Structured data format</p>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded">
                <p className="font-medium mb-1">Historical Access:</p>
                <p className="text-sm text-muted-foreground">Bulk data backfill available | Query by date range | No retention limits</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded">
                <p className="font-medium mb-1">AGP (Ambulatory Glucose Profile):</p>
                <p className="text-sm text-muted-foreground">API endpoint returns calculated AGP summary metrics in JSON format</p>
              </div>
            </div>
          </div>

          {/* Standards & Compliance */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-cyan-400">
            <h4 className="mb-3 flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
              <Shield className="w-5 h-5" />
              Healthcare Standards & Interoperability
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900 rounded-lg border-l-4 border-cyan-600">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-cyan-700" />
                  <p className="font-medium">FHIR Support</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Fast Healthcare Interoperability Resources</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• <strong>Observation</strong> resource for glucose readings</li>
                  <li>• <strong>Device</strong> resource for CGM metadata</li>
                  <li>• Full FHIR R4 specification compliance</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-700" />
                  <p className="font-medium">HL7 v2 Support</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Health Level 7 Version 2 Messaging</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• <strong>ORU^R01</strong> message type (Observation Result)</li>
                  <li>• Standard segments: MSH, PID, OBR, OBX</li>
                  <li>• Compatible with hospital EHR/EMR systems</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 rounded-lg">
              <p className="font-medium mb-2">Integration Benefits:</p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Badge className="bg-cyan-600">FHIR</Badge>
                  <span className="text-xs">Modern cloud-native APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600">HL7</Badge>
                  <span className="text-xs">Legacy system compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-600">Dual Support</Badge>
                  <span className="text-xs">Maximum interoperability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Architecture Diagram */}
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-700">
            <h4 className="mb-4 flex items-center gap-2 text-teal-700 dark:text-teal-400">
              <Network className="w-5 h-5" />
              CGM Integration Architecture Flow
            </h4>
            <div className="flex items-center justify-between gap-3 overflow-x-auto">
              <div className="flex-1 min-w-[140px] bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-teal-400 text-center">
                <div className="text-2xl mb-2">📟</div>
                <p className="font-medium text-sm">CGM Sensor</p>
                <p className="text-xs text-muted-foreground mt-1">3-min readings</p>
              </div>
              <ArrowRight className="w-6 h-6 text-teal-600 shrink-0" />
              <div className="flex-1 min-w-[140px] bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-cyan-400 text-center">
                <div className="text-2xl mb-2">☁️</div>
                <p className="font-medium text-sm">CGM Cloud</p>
                <p className="text-xs text-muted-foreground mt-1">≤3s latency</p>
              </div>
              <ArrowRight className="w-6 h-6 text-cyan-600 shrink-0" />
              <div className="flex-1 min-w-[140px] bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-400 text-center">
                <div className="text-2xl mb-2">🔐</div>
                <p className="font-medium text-sm">OAuth 2.0</p>
                <p className="text-xs text-muted-foreground mt-1">Authentication</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-600 shrink-0" />
              <div className="flex-1 min-w-[140px] bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-purple-400 text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="font-medium text-sm">Our API Layer</p>
                <p className="text-xs text-muted-foreground mt-1">Polling (→Push)</p>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 shrink-0" />
              <div className="flex-1 min-w-[140px] bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-green-400 text-center">
                <div className="text-2xl mb-2">🤖</div>
                <p className="font-medium text-sm">AI Agents</p>
                <p className="text-xs text-muted-foreground mt-1">M5, M6 Analysis</p>
              </div>
              <ArrowRight className="w-6 h-6 text-green-600 shrink-0" />
              <div className="flex-1 min-w-[140px] bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-orange-400 text-center">
                <div className="text-2xl mb-2">👥</div>
                <p className="font-medium text-sm">Care Team</p>
                <p className="text-xs text-muted-foreground mt-1">Real-time alerts</p>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <p className="font-medium mb-1">End-to-End Latency: Sensor Reading → Care Team Alert</p>
              <p className="text-xs">≤5 seconds (3s API latency + 2s processing & notification)</p>
            </div>
          </div>

          {/* Future Enhancements */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900 dark:to-amber-900 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium mb-2">Planned Enhancements (Coming Soon):</p>
                <ul className="text-sm space-y-1">
                  <li>✨ <strong>Event Push Service (Webhooks):</strong> Real-time push notifications instead of polling (expected in a few months)</li>
                  <li>✨ <strong>JWT & API Key Auth:</strong> Additional authentication methods beyond OAuth 2.0</li>
                  <li>✨ <strong>Advanced Alert Configuration:</strong> Start/end time, severity levels, acknowledgment status, cooldown/repeat logic</li>
                  <li>✨ <strong>Enhanced Documentation:</strong> Comprehensive API docs with sample payloads upon partnership confirmation</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
