import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Cpu,
  Network,
  Zap,
  Server,
  AlertCircle,
  CheckCircle,
  Bell,
  GitBranch,
  MessageSquare,
  Shield,
  Target,
  Phone,
  Users
} from "lucide-react";
import { RealWorldScenarios } from "./RealWorldScenarios";

export function AgenticAIModels() {
  return (
    <div className="space-y-6">
      {/* First show Real-World Scenarios */}
      <RealWorldScenarios />
      
      {/* Then show the rest of the content */}
      {/* AI Models & Techniques */}
      <Card>
        <CardHeader>
          <CardTitle>Efficient AI Modeling Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Edge AI Models */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                <h3 className="text-sm">Edge AI Models (On-Device)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Vision: MobileNet-SSD + YOLO v8 Nano</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Real-time object detection for smart glasses/cane</p>
                  <div className="space-y-1 text-xs">
                    <p>• Model size: 4.5 MB (quantized INT8)</p>
                    <p>• Inference: 25-30 FPS on mobile GPU</p>
                    <p>• Latency: &lt;40ms per frame</p>
                    <p>• Accuracy: 87% mAP on custom dataset</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Vitals: Lightweight LSTM</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Time-series forecasting for vital trends</p>
                  <div className="space-y-1 text-xs">
                    <p>• Model size: 1.2 MB (pruned 60%)</p>
                    <p>• Inference: &lt;10ms per prediction</p>
                    <p>• Input: Last 50 readings (5-min windows)</p>
                    <p>• Accuracy: 92% anomaly detection rate</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Activity: 1D CNN</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Accelerometer-based activity recognition</p>
                  <div className="space-y-1 text-xs">
                    <p>• Model size: 800 KB</p>
                    <p>• Inference: 5ms per classification</p>
                    <p>• Classes: Walk, sit, stand, fall, rest</p>
                    <p>• Accuracy: 94% on validation set</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Voice: Whisper Tiny</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Speech recognition for voice commands</p>
                  <div className="space-y-1 text-xs">
                    <p>• Model size: 39 MB (quantized)</p>
                    <p>• Inference: 200ms per utterance</p>
                    <p>• Languages: 24 languages supported</p>
                    <p>• WER: 8.2% on medical vocabulary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud AI Models */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm">Cloud AI Models (Server-Side)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Health Prediction: XGBoost Ensemble</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Multi-output regression for health forecasting</p>
                  <div className="space-y-1 text-xs">
                    <p>• Features: 156 engineered features</p>
                    <p>• Predictions: 7-day health trajectory</p>
                    <p>• Targets: BP, HR, SpO2, fall risk</p>
                    <p>• RMSE: BP ±3.2 mmHg, HR ±4.1 bpm</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Medication Adherence: Random Forest</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Predict likelihood of missed medications</p>
                  <div className="space-y-1 text-xs">
                    <p>• Features: 42 behavioral + temporal</p>
                    <p>• Output: Probability score 0-1</p>
                    <p>• Threshold: 0.65 for proactive reminder</p>
                    <p>• Precision: 88%, Recall: 85%</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Fall Risk: Deep Neural Network</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Multi-modal fusion for fall prediction</p>
                  <div className="space-y-1 text-xs">
                    <p>• Inputs: Gait, balance, vitals, history</p>
                    <p>• Architecture: 5-layer DNN + attention</p>
                    <p>• Output: 24hr fall probability</p>
                    <p>• AUC-ROC: 0.91, Sensitivity: 89%</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Clinical NLP: BioBERT Fine-tuned</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Extract insights from doctor notes</p>
                  <div className="space-y-1 text-xs">
                    <p>• Tasks: NER, relation extraction</p>
                    <p>• Entities: Symptoms, meds, conditions</p>
                    <p>• Fine-tuned: 50K clinical notes</p>
                    <p>• F1 Score: 0.89 on medical entities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Approaches */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-5 h-5 text-green-600" />
                <h3 className="text-sm">Hybrid Edge-Cloud Architecture</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Split Computing</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Distribute model layers across edge and cloud</p>
                  <div className="space-y-1 text-xs">
                    <p>• Edge: First 3 CNN layers (feature extraction)</p>
                    <p>• Cloud: Final layers (complex reasoning)</p>
                    <p>• Benefit: 60% reduction in data transfer</p>
                    <p>• Fallback: Edge completes if offline</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Federated Learning</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Privacy-preserving model training</p>
                  <div className="space-y-1 text-xs">
                    <p>• Local training on patient device</p>
                    <p>• Only model updates sent to cloud</p>
                    <p>• Differential privacy: ε=1.0</p>
                    <p>• Convergence: 50 rounds, 200 clients</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Dynamic Model Selection</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Adaptive model complexity based on context</p>
                  <div className="space-y-1 text-xs">
                    <p>• Low battery: Use smaller models</p>
                    <p>• Critical event: Deploy full models</p>
                    <p>• Network quality: Adjust cloud reliance</p>
                    <p>• Energy savings: Up to 45%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Agent Communication Protocol */}
      <Card>
        <CardHeader>
          <CardTitle>Multi-Agent Communication Protocol</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                Message Types
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm mb-1"><strong>Query</strong></p>
                  <p className="text-xs text-muted-foreground">Request information from another agent</p>
                  <p className="text-xs font-mono mt-1">{"{ type: 'QUERY', target: 'MedAgent', data: {...} }"}</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm mb-1"><strong>Alert</strong></p>
                  <p className="text-xs text-muted-foreground">Broadcast critical finding to all agents</p>
                  <p className="text-xs font-mono mt-1">{"{ type: 'ALERT', priority: 'HIGH', event: {...} }"}</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm mb-1"><strong>Update</strong></p>
                  <p className="text-xs text-muted-foreground">Share state changes with relevant agents</p>
                  <p className="text-xs font-mono mt-1">{"{ type: 'UPDATE', state: 'NEW', context: {...} }"}</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm mb-1"><strong>Action</strong></p>
                  <p className="text-xs text-muted-foreground">Coordinate multi-agent response</p>
                  <p className="text-xs font-mono mt-1">{"{ type: 'ACTION', plan: 'EMERGENCY', tasks: [...] }"}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                Consensus & Safety
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Multi-Agent Voting</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Critical decisions require agent consensus</p>
                  <div className="text-xs space-y-1">
                    <p>• Emergency escalation: 2/3 agents agree</p>
                    <p>• Medication changes: All agents must validate</p>
                    <p>• False positive reduction: Cross-verification</p>
                  </div>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Confidence Thresholds</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Agents report confidence scores</p>
                  <div className="text-xs space-y-1">
                    <p>• High (≥0.9): Autonomous action allowed</p>
                    <p>• Medium (0.7-0.9): Alert care team first</p>
                    <p>• Low (&lt;0.7): Request human review</p>
                  </div>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1"><strong>Override Protocols</strong></p>
                  <p className="text-xs text-muted-foreground mb-2">Human oversight always available</p>
                  <div className="text-xs space-y-1">
                    <p>• Physician can override any AI decision</p>
                    <p>• Patient opt-out for specific features</p>
                    <p>• Audit trail for all AI actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>System Performance & Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm">Response Time</h3>
              </div>
              <p className="text-2xl mb-1">1.2s</p>
              <p className="text-xs text-muted-foreground">End-to-end anomaly detection & alert</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <h3 className="text-sm">Accuracy</h3>
              </div>
              <p className="text-2xl mb-1">91.5%</p>
              <p className="text-xs text-muted-foreground">Overall prediction accuracy across agents</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                <h3 className="text-sm">Edge Processing</h3>
              </div>
              <p className="text-2xl mb-1">78%</p>
              <p className="text-xs text-muted-foreground">Tasks handled on-device (no cloud)</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <h3 className="text-sm">False Positives</h3>
              </div>
              <p className="text-2xl mb-1">4.2%</p>
              <p className="text-xs text-muted-foreground">Multi-agent consensus reduces errors</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-sm mb-3">Battery Impact</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Edge AI models:</span>
                  <span className="text-green-600">+8% daily drain</span>
                </div>
                <div className="flex justify-between">
                  <span>Continuous monitoring:</span>
                  <span className="text-green-600">+12% daily drain</span>
                </div>
                <div className="flex justify-between">
                  <span>Total increase:</span>
                  <span>~20% vs baseline app</span>
                </div>
                <p className="text-muted-foreground mt-2">Optimized for all-day usage (&gt;18 hours)</p>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="text-sm mb-3">Data Usage</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Cloud sync (daily):</span>
                  <span>~25 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Model updates:</span>
                  <span>~50 MB/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency uploads:</span>
                  <span>&lt;1 MB/event</span>
                </div>
                <p className="text-muted-foreground mt-2">WiFi preferred, works offline 24+ hrs</p>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="text-sm mb-3">Model Updates</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Update frequency:</span>
                  <span>Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>A/B testing:</span>
                  <span>10% rollout first</span>
                </div>
                <div className="flex justify-between">
                  <span>Rollback time:</span>
                  <span>&lt;2 hours</span>
                </div>
                <p className="text-muted-foreground mt-2">Continuous learning from user feedback</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Enhancements */}
      <Card className="border-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-purple-600" />
            Future Agentic AI Enhancements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h3 className="text-sm mb-2">🧠 Reinforcement Learning Agents</h3>
                <p className="text-xs text-muted-foreground">
                  Agents that learn optimal intervention strategies from patient outcomes, adapting over time to individual patient preferences and responses.
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="text-sm mb-2">🤝 Collaborative Filtering</h3>
                <p className="text-xs text-muted-foreground">
                  Learn from similar patient cohorts to improve predictions. "Patients like you who showed these patterns typically..."
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="text-sm mb-2">🔮 Multi-Modal Fusion</h3>
                <p className="text-xs text-muted-foreground">
                  Combine vision, audio, text, and sensor data in a unified transformer model for holistic patient understanding.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h3 className="text-sm mb-2">🌐 Federated Multi-Agent Learning</h3>
                <p className="text-xs text-muted-foreground">
                  Agents across all patients learn collectively without sharing private data, improving global accuracy while preserving privacy.
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="text-sm mb-2">💬 Natural Language Interaction</h3>
                <p className="text-xs text-muted-foreground">
                  Conversational AI agents that explain their reasoning: "I noticed your heart rate was elevated because you missed your medication. Here's why..."
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="text-sm mb-2">⚡ Quantum-Inspired Optimization</h3>
                <p className="text-xs text-muted-foreground">
                  Use quantum computing algorithms for complex scheduling and resource allocation in large patient populations.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}