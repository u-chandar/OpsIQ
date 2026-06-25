import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Heart,
  Activity,
  Moon,
  Footprints,
  Droplet,
  Wind,
  Brain,
  Weight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Database,
  Zap,
  MessageSquare,
  Shield,
  Target,
  Stethoscope,
  BarChart3
} from "lucide-react";

export function PreventiveAIModels() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card className="border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-blue-600" />
            Preventive AI Models for Wearable Device Data
          </CardTitle>
          <CardDescription>
            Early detection, risk prediction, and personalized interventions using multi-modal signals: HR, HRV, SpO₂, BP, glucose, temperature, sleep, gait, accelerometer, and environmental data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-background rounded-lg text-center">
              <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <p className="font-medium">Heart Rate</p>
              <p className="text-muted-foreground">Continuous</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <Activity className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="font-medium">HRV</p>
              <p className="text-muted-foreground">Waveform</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <Wind className="w-6 h-6 mx-auto mb-2 text-cyan-500" />
              <p className="font-medium">SpO₂</p>
              <p className="text-muted-foreground">Blood O₂</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <p className="font-medium">BP</p>
              <p className="text-muted-foreground">Pressure</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <Droplet className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <p className="font-medium">Glucose</p>
              <p className="text-muted-foreground">CGM</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <Moon className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
              <p className="font-medium">Sleep</p>
              <p className="text-muted-foreground">Stages</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <Footprints className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <p className="font-medium">Gait</p>
              <p className="text-muted-foreground">Movement</p>
            </div>
            <div className="p-3 bg-background rounded-lg text-center">
              <Brain className="w-6 h-6 mx-auto mb-2 text-pink-500" />
              <p className="font-medium">Stress</p>
              <p className="text-muted-foreground">HRV-based</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* A. Vitals Monitoring & Early Risk Detection Models */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600" />
            A. Vitals Monitoring & Early Risk Detection Models
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Model 1 */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">1</Badge>
                    <strong>Abnormal Vitals Pattern Detection Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Early signs of infection, dehydration, shock, or cardiac strain</p>
                </div>
                <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">LSTM/GRU</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">HR, HRV, BP, SpO₂, temperature, respiration rate</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">LSTM/GRU temporal anomaly detection with attention mechanism</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">Severity score (0-100) + recommended actions</p>
                </div>
              </div>
            </div>

            {/* Model 2 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">2</Badge>
                    <strong>Cardiovascular Stress & Arrhythmia Prediction</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Atrial fibrillation, tachycardia, bradycardia pre-onset prediction</p>
                </div>
                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">CNN + Transformer</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Continuous HR + HRV waveform (50Hz sampling)</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">CNN for waveform + Transformer for temporal patterns</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">"Likely arrhythmic event in next 12 hours" (confidence: 0.0-1.0)</p>
                </div>
              </div>
            </div>

            {/* Model 3 */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">3</Badge>
                    <strong>Sleep Quality Degradation & Risk Modeling</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Sleep apnea, insomnia, early hypoxia detection</p>
                </div>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Autoencoder + Bayesian</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Sleep stages, movement, SpO₂ dips, HR variability</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Autoencoders + Bayesian sleep efficiency models</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">Daily sleep score (0-100) + intervention plan</p>
                </div>
              </div>
            </div>

            {/* Model 4 */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">4</Badge>
                    <strong>Fall Risk & Motion Instability Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Predict fall probability, detect mobility deterioration</p>
                </div>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">Pose + Gait Detection</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Gait sensors, gyroscope, accelerometer, balance metrics</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Pose detection + gait anomaly detection with temporal fusion</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">"High fall-risk in next 7 days" (probability score)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* B. Diabetes Prevention & Management Models */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-orange-600" />
            B. Diabetes Prevention & Management Models
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Model 5 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">5</Badge>
                    <strong>Continuous Glucose Pattern Prediction Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Predict glucose spikes/drops before they occur</p>
                </div>
                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">Seq2Seq Transformer</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">CGM readings + meal patterns + HR + activity level</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Seq2Seq Transformer with temporal attention forecasting</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">Sliding 3-hour glucose prediction (mg/dL ±15 accuracy)</p>
                </div>
              </div>
            </div>

            {/* Model 6 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">6</Badge>
                    <strong>Insulin Resistance Risk Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Early detection of metabolic syndrome</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">XGBoost + CatBoost</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Long-term glucose + physical activity + HRV + sleep quality</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Ensemble gradient boosting (XGBoost + CatBoost)</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">0–1 insulin resistance risk score (calibrated probability)</p>
                </div>
              </div>
            </div>

            {/* Model 7 */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">7</Badge>
                    <strong>Hypoglycemia/Hyperglycemia Early-Warning Engine</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Prevent dangerous lows/highs before onset</p>
                </div>
                <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">Anomaly Detection</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Glucose + sleep cycle + activity state + meal timing</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Early anomaly alerting with temporal thresholds</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">"Risk of hypo in next 2 hours" (30min lead time)</p>
                </div>
              </div>
            </div>

            {/* Model 8 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">8</Badge>
                    <strong>Meal Response Personalization Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Identify best/worst foods per user</p>
                </div>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">Personalized Embeddings</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Glucose after meals, food logs, gut rhythms, microbiome data</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Personalized model with food embeddings + user profiling</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">Personalized food response ranking (glycemic impact score)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* C. Chronic Disease Monitoring & Prevention Models */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            C. Chronic Disease Monitoring & Prevention Models
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Model 9 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">9</Badge>
                    <strong>Hypertension Prediction & Control Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Predict long-term BP elevation</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">LSTM + Attention</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">BP trends + sodium intake + stress score + sleep quality</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Temporal risk stratification with LSTM attention mechanism</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">"Risk of stage-2 hypertension in 6 months" (probability)</p>
                </div>
              </div>
            </div>

            {/* Model 10 */}
            <div className="border-l-4 border-cyan-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">10</Badge>
                    <strong>COPD / Respiratory Decline Model</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Early deterioration detection</p>
                </div>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">CNN Waveform</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">O₂ dips, respiration rate, sleep apnea cycles</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">CNN for SpO₂ dip waveform analysis + temporal patterns</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">Expected respiratory stress score (0-100 scale)</p>
                </div>
              </div>
            </div>

            {/* Model 11 */}
            <div className="border-l-4 border-pink-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">11</Badge>
                    <strong>Stress & Burnout Early Detection (HRV-based)</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Emotional health intervention</p>
                </div>
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300">HRV Analysis</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">HRV metrics, temperature, sleep patterns, activity levels</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">HRV-based stress index model with frequency domain analysis</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">Daily neural load score (recovery vs. stress balance)</p>
                </div>
              </div>
            </div>

            {/* Model 12 */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm mb-1 flex items-center gap-2">
                    <Badge variant="outline">12</Badge>
                    <strong>Obesity & Activity Metabolism Prediction</strong>
                  </h3>
                  <p className="text-xs text-muted-foreground">Weight gain risk prediction</p>
                </div>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">Metabolic Model</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Inputs</strong></p>
                  <p className="text-xs text-muted-foreground">Calorie burn (accelerometer) + HR + sleep quality + BMI trends</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Method</strong></p>
                  <p className="text-xs text-muted-foreground">Personalized metabolic rate model with energy balance</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs mb-1"><strong>Output</strong></p>
                  <p className="text-xs text-muted-foreground">30-day metabolic drift score (caloric surplus/deficit trend)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Performance Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Model Performance Comparison
          </CardTitle>
          <CardDescription>
            Accuracy, latency, and resource requirements across all preventive models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <svg width="1000" height="500" viewBox="0 0 1000 500" className="mx-auto">
              {/* Title */}
              <text x="500" y="25" textAnchor="middle" className="fill-foreground text-sm font-medium">
                Preventive AI Models: Accuracy vs. Inference Latency
              </text>

              {/* Axes */}
              <line x1="80" y1="50" x2="80" y2="450" stroke="currentColor" strokeWidth="2" className="stroke-foreground" />
              <line x1="80" y1="450" x2="950" y2="450" stroke="currentColor" strokeWidth="2" className="stroke-foreground" />

              {/* Y-axis labels (Accuracy %) */}
              <text x="50" y="55" textAnchor="end" className="fill-muted-foreground text-xs">100%</text>
              <text x="50" y="155" textAnchor="end" className="fill-muted-foreground text-xs">95%</text>
              <text x="50" y="255" textAnchor="end" className="fill-muted-foreground text-xs">90%</text>
              <text x="50" y="355" textAnchor="end" className="fill-muted-foreground text-xs">85%</text>
              <text x="50" y="455" textAnchor="end" className="fill-muted-foreground text-xs">80%</text>

              {/* X-axis labels (Latency ms) */}
              <text x="80" y="475" textAnchor="middle" className="fill-muted-foreground text-xs">0ms</text>
              <text x="280" y="475" textAnchor="middle" className="fill-muted-foreground text-xs">50ms</text>
              <text x="480" y="475" textAnchor="middle" className="fill-muted-foreground text-xs">100ms</text>
              <text x="680" y="475" textAnchor="middle" className="fill-muted-foreground text-xs">150ms</text>
              <text x="880" y="475" textAnchor="middle" className="fill-muted-foreground text-xs">200ms</text>

              {/* Axis labels */}
              <text x="40" y="250" textAnchor="middle" className="fill-foreground text-xs" transform="rotate(-90 40 250)">
                Accuracy (%)
              </text>
              <text x="515" y="495" textAnchor="middle" className="fill-foreground text-xs">
                Inference Latency (ms)
              </text>

              {/* Data points */}
              {/* Model 1: Vitals Anomaly - 92% accuracy, 8ms */}
              <circle cx="112" cy="131" r="8" fill="rgb(239, 68, 68)" opacity="0.8" />
              <text x="112" y="120" textAnchor="middle" className="fill-foreground text-xs">M1</text>

              {/* Model 2: Arrhythmia - 94% accuracy, 45ms */}
              <circle cx="236" cy="71" r="8" fill="rgb(249, 115, 22)" opacity="0.8" />
              <text x="236" y="60" textAnchor="middle" className="fill-foreground text-xs">M2</text>

              {/* Model 3: Sleep - 91% accuracy, 30ms */}
              <circle cx="200" cy="161" r="8" fill="rgb(99, 102, 241)" opacity="0.8" />
              <text x="200" y="150" textAnchor="middle" className="fill-foreground text-xs">M3</text>

              {/* Model 4: Fall Risk - 89% accuracy, 12ms */}
              <circle cx="128" cy="221" r="8" fill="rgb(34, 197, 94)" opacity="0.8" />
              <text x="128" y="210" textAnchor="middle" className="fill-foreground text-xs">M4</text>

              {/* Model 5: Glucose Pred - 93% accuracy, 85ms */}
              <circle cx="420" cy="101" r="8" fill="rgb(249, 115, 22)" opacity="0.8" />
              <text x="420" y="90" textAnchor="middle" className="fill-foreground text-xs">M5</text>

              {/* Model 6: Insulin Resistance - 90% accuracy, 15ms */}
              <circle cx="140" cy="191" r="8" fill="rgb(234, 179, 8)" opacity="0.8" />
              <text x="140" y="180" textAnchor="middle" className="fill-foreground text-xs">M6</text>

              {/* Model 7: Hypo Warning - 95% accuracy, 5ms */}
              <circle cx="100" cy="41" r="8" fill="rgb(239, 68, 68)" opacity="0.8" />
              <text x="100" y="30" textAnchor="middle" className="fill-foreground text-xs">M7</text>

              {/* Model 8: Meal Response - 88% accuracy, 95ms */}
              <circle cx="456" cy="251" r="8" fill="rgb(168, 85, 247)" opacity="0.8" />
              <text x="456" y="240" textAnchor="middle" className="fill-foreground text-xs">M8</text>

              {/* Model 9: Hypertension - 91% accuracy, 18ms */}
              <circle cx="152" cy="161" r="8" fill="rgb(59, 130, 246)" opacity="0.8" />
              <text x="152" y="150" textAnchor="middle" className="fill-foreground text-xs">M9</text>

              {/* Model 10: COPD - 89% accuracy, 25ms */}
              <circle cx="180" cy="221" r="8" fill="rgb(6, 182, 212)" opacity="0.8" />
              <text x="180" y="210" textAnchor="middle" className="fill-foreground text-xs">M10</text>

              {/* Model 11: Stress - 87% accuracy, 10ms */}
              <circle cx="120" cy="281" r="8" fill="rgb(236, 72, 153)" opacity="0.8" />
              <text x="120" y="270" textAnchor="middle" className="fill-foreground text-xs">M11</text>

              {/* Model 12: Obesity - 86% accuracy, 20ms */}
              <circle cx="164" cy="311" r="8" fill="rgb(34, 197, 94)" opacity="0.8" />
              <text x="164" y="300" textAnchor="middle" className="fill-foreground text-xs">M12</text>

              {/* Ideal zone */}
              <rect x="80" y="50" width="150" height="150" fill="rgb(34, 197, 94)" opacity="0.1" />
              <text x="155" y="125" textAnchor="middle" className="fill-green-600 text-xs font-medium">Ideal Zone</text>
              <text x="155" y="140" textAnchor="middle" className="fill-green-600 text-xs">High Accuracy</text>
              <text x="155" y="155" textAnchor="middle" className="fill-green-600 text-xs">Low Latency</text>
            </svg>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-2 border rounded text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span>Critical Alerts</span>
              </div>
              <p className="text-muted-foreground">M1, M7 - Immediate response</p>
            </div>
            <div className="p-2 border rounded text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span>Cardiovascular</span>
              </div>
              <p className="text-muted-foreground">M2, M5 - Heart & glucose</p>
            </div>
            <div className="p-2 border rounded text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Chronic Disease</span>
              </div>
              <p className="text-muted-foreground">M9, M10 - Long-term trends</p>
            </div>
            <div className="p-2 border rounded text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Lifestyle</span>
              </div>
              <p className="text-muted-foreground">M4, M11, M12 - Behavioral</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full Wearable Ecosystem Table */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Preventive Model Ecosystem</CardTitle>
          <CardDescription>
            Comprehensive overview of all preventive AI models organized by chronic disease area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-3 bg-muted">Chronic Area</th>
                  <th className="text-left p-3 bg-muted">AI Models Used</th>
                  <th className="text-left p-3 bg-muted">Primary Signals</th>
                  <th className="text-left p-3 bg-muted">Output</th>
                  <th className="text-center p-3 bg-muted">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Droplet className="w-4 h-4 text-orange-500" />
                      <strong>Diabetes</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• Glucose forecasting (M5)</p>
                      <p>• Insulin resistance (M6)</p>
                      <p>• Hypo prediction (M7)</p>
                      <p>• Meal response model (M8)</p>
                    </div>
                  </td>
                  <td className="p-3">CGM, HR, Activity, Meals, Sleep</td>
                  <td className="p-3">Personalized glycemic control, 3-hr predictions, food rankings</td>
                  <td className="p-3 text-center">
                    <Badge variant="destructive">Critical</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <strong>Cardiac</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• Arrhythmia detection (M2)</p>
                      <p>• HRV stress analysis (M11)</p>
                      <p>• BP prediction (M9)</p>
                      <p>• Vitals anomaly (M1)</p>
                    </div>
                  </td>
                  <td className="p-3">HR, HRV, BP, Temperature, Stress</td>
                  <td className="p-3">Early cardiac alerts, 12-hr arrhythmia warning, BP trends</td>
                  <td className="p-3 text-center">
                    <Badge variant="destructive">Critical</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4 text-indigo-500" />
                      <strong>Sleep</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• Sleep quality model (M3)</p>
                      <p>• COPD/apnea detection (M10)</p>
                    </div>
                  </td>
                  <td className="p-3">Sleep stages, Movement, SpO₂, HR</td>
                  <td className="p-3">Sleep hygiene interventions, apnea alerts, quality score</td>
                  <td className="p-3 text-center">
                    <Badge className="bg-orange-100 text-orange-700">High</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-cyan-500" />
                      <strong>Respiratory</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• COPD deterioration (M10)</p>
                      <p>• Vitals anomaly (M1)</p>
                    </div>
                  </td>
                  <td className="p-3">SpO₂, Respiration, Sleep apnea cycles</td>
                  <td className="p-3">Early lung dysfunction flags, respiratory stress score</td>
                  <td className="p-3 text-center">
                    <Badge className="bg-orange-100 text-orange-700">High</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-pink-500" />
                      <strong>Mental Health</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• HRV stress detection (M11)</p>
                      <p>• Sleep disturbance (M3)</p>
                    </div>
                  </td>
                  <td className="p-3">HRV, Temperature, Sleep, Activity</td>
                  <td className="p-3">Burnout risk signals, neural load score, recovery metrics</td>
                  <td className="p-3 text-center">
                    <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Footprints className="w-4 h-4 text-green-500" />
                      <strong>Mobility</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• Gait anomaly detection (M4)</p>
                      <p>• Fall risk prediction (M4)</p>
                    </div>
                  </td>
                  <td className="p-3">Gait, Gyroscope, Accelerometer, Balance</td>
                  <td className="p-3">Fall prevention, 7-day risk probability, mobility score</td>
                  <td className="p-3 text-center">
                    <Badge variant="destructive">Critical</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Weight className="w-4 h-4 text-green-500" />
                      <strong>Metabolic</strong>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1">
                      <p>• Obesity prediction (M12)</p>
                      <p>• Insulin resistance (M6)</p>
                    </div>
                  </td>
                  <td className="p-3">Calorie burn, HR, Sleep, BMI, Activity</td>
                  <td className="p-3">30-day metabolic drift, weight gain risk, energy balance</td>
                  <td className="p-3 text-center">
                    <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
