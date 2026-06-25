import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Heart,
  Activity,
  Droplet,
  Wind,
  Brain,
  Footprints,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Target,
  Award,
  Calendar,
  Clock,
  Utensils,
  Moon
} from "lucide-react";

export function RealWorldScenarios() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-green-600" />
            Real-World Agentic AI Scenarios: Disease Prevention & Lifestyle Improvement
          </CardTitle>
          <CardDescription>
            Comprehensive case studies showing how multi-agent AI systems, health coaching, and activity monitoring transform patient outcomes across diabetes, cardiac, respiratory, and metabolic conditions
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Diabetes Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-orange-600" />
            Diabetes Management & Prevention Scenarios
          </CardTitle>
          <CardDescription>
            AI-driven glucose control with lifestyle interventions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Scenario 1: Type 2 Diabetes Reversal */}
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-orange-600 rounded-lg shrink-0">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm">Scenario 1: Type 2 Diabetes Reversal Through Activity & Diet</h3>
                    <Badge className="bg-orange-100 text-orange-700">90-Day Journey</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Male, 58 years, HbA1c: 8.2%, BMI: 32, sedentary lifestyle (avg 2,100 steps/day)
                  </p>
                  
                  <div className="space-y-4">
                    {/* Week 1-2 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 1-2</Badge>
                        <span className="text-xs">Baseline Assessment & Goal Setting</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Agent Actions:</p>
                          <div className="space-y-1 text-xs">
                            <p>✓ <strong>Glucose Agent (M5):</strong> Detects fasting glucose 165 mg/dL, post-meal spikes to 245 mg/dL</p>
                            <p>✓ <strong>Activity Agent (M12):</strong> Identifies severe physical inactivity</p>
                            <p>✓ <strong>Insulin Resistance Model (M6):</strong> Risk score 0.87 (high)</p>
                            <p>✓ <strong>Health Coach Agent:</strong> Initiates personalized conversation</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Health Coach Interaction:</p>
                          <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded text-xs space-y-1">
                            <p><strong>Coach:</strong> "I noticed your glucose levels are running high. The good news? We can work together to improve this. Let's start small—how about aiming for 5,000 steps today?"</p>
                            <p><strong>Patient:</strong> "That sounds doable."</p>
                            <p><strong>Coach:</strong> "Great! I'll track your progress and check in with you this evening."</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-muted rounded">
                        <p className="text-xs"><strong>Intervention:</strong> Step goal: 5,000/day, reduce refined carbs by 30%, CGM alerts enabled</p>
                      </div>
                    </div>

                    {/* Week 3-4 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 3-4</Badge>
                        <span className="text-xs">Building Momentum</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Wearable Data Analysis:</p>
                          <div className="space-y-1 text-xs">
                            <p>📊 Average steps: 6,200/day (+97% from baseline)</p>
                            <p>📊 Fasting glucose: 145 mg/dL (↓20 mg/dL)</p>
                            <p>📊 Post-meal spikes: 210 mg/dL (↓35 mg/dL)</p>
                            <p>📊 Weight: -4.2 lbs</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Multi-Agent Collaboration:</p>
                          <div className="space-y-1 text-xs">
                            <p>✓ <strong>Meal Response Model (M8):</strong> Identifies white rice causes 80 mg/dL spike</p>
                            <p>✓ <strong>Activity Agent:</strong> Correlates 15-min post-meal walks reduce spikes by 25%</p>
                            <p>✓ <strong>Health Coach:</strong> "I noticed rice really spikes your glucose. What if we try cauliflower rice instead?"</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-green-100 dark:bg-green-950 rounded">
                        <p className="text-xs"><strong>Progress:</strong> Patient achieving goals 85% of days. Health Coach celebrates wins daily.</p>
                      </div>
                    </div>

                    {/* Week 8 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 8</Badge>
                        <span className="text-xs">Hitting Stride</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Activity Milestone:</p>
                          <div className="space-y-1 text-xs">
                            <p>🎯 Average steps: 9,500/day (+352% from baseline)</p>
                            <p>🎯 Added strength training 2x/week</p>
                            <p>🎯 Morning 20-min walks now habitual</p>
                            <p>🎯 Sleep quality improved (M3): 78 → 86/100</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Metabolic Improvements:</p>
                          <div className="space-y-1 text-xs">
                            <p>✓ Fasting glucose: 115 mg/dL (↓50 mg/dL)</p>
                            <p>✓ Post-meal peaks: 165 mg/dL (↓80 mg/dL)</p>
                            <p>✓ Insulin resistance score: 0.87 → 0.52</p>
                            <p>✓ Weight: -12.8 lbs, BMI: 32 → 29.5</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-950 rounded text-xs">
                        <p><strong>Health Coach:</strong> "You're crushing it! Your glucose control is amazing. Your doctor might be able to reduce your medication at your next visit. How do you feel?"</p>
                        <p className="mt-1"><strong>Patient:</strong> "I feel 10 years younger. I can play with my grandkids without getting winded!"</p>
                      </div>
                    </div>

                    {/* Week 12 - Final Results */}
                    <div className="p-3 bg-green-100 dark:bg-green-950 rounded-lg border-l-4 border-green-600">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <Badge className="bg-green-600 text-white">Week 12: Results</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">7.1%</p>
                          <p className="text-muted-foreground">HbA1c</p>
                          <p className="text-green-600 text-xs">↓1.1% (from 8.2%)</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">10,200</p>
                          <p className="text-muted-foreground">Avg Steps/Day</p>
                          <p className="text-green-600 text-xs">↑386% (from 2,100)</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">-18.5 lbs</p>
                          <p className="text-muted-foreground">Weight Loss</p>
                          <p className="text-green-600 text-xs">BMI: 28.2 (normal range)</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">0.38</p>
                          <p className="text-muted-foreground">IR Risk Score</p>
                          <p className="text-green-600 text-xs">↓0.49 (56% reduction)</p>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-background rounded text-xs">
                        <p><strong>Physician Note:</strong> "Medication reduced by 50%. Patient showing signs of diabetes reversal. Continue lifestyle modifications. Excellent work by patient and AI care team."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 2: Hypoglycemia Prevention */}
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-red-600 rounded-lg shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm">Scenario 2: Preventing Dangerous Hypoglycemia During Exercise</h3>
                    <Badge variant="destructive">Critical Prevention</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Female, 42 years, Type 1 Diabetes, new to exercise routine, CGM + Smart Watch
                  </p>
                  
                  <div className="space-y-3">
                    {/* Timeline */}
                    <div className="space-y-2 text-xs">
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">9:00 AM</Badge>
                        <div className="flex-1">
                          <p><strong>Activity Agent:</strong> Detects patient preparing for gym (accelerometer shows movement pattern, location GPS)</p>
                          <p className="text-muted-foreground">Current glucose: 135 mg/dL (CGM reading)</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">9:05 AM</Badge>
                        <div className="flex-1">
                          <p><strong>Glucose Prediction Model (M5):</strong> Forecasts glucose will drop to ~85 mg/dL in 45 minutes based on:</p>
                          <div className="ml-4 text-muted-foreground space-y-1 mt-1">
                            <p>• Historical exercise patterns (cardio drops glucose 40-60 mg/dL)</p>
                            <p>• Last insulin dose (3 units fast-acting, 2.5 hours ago)</p>
                            <p>• Current downward trend (-8 mg/dL over last 30 min)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">9:06 AM</Badge>
                        <div className="flex-1">
                          <p><strong>Hypo Warning Engine (M7):</strong> High risk of hypoglycemia in next 60 minutes (confidence: 0.92)</p>
                          <p><strong>Alert Escalation Agent:</strong> Priority P0 (immediate intervention needed)</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge className="bg-orange-600 shrink-0">9:06 AM</Badge>
                        <div className="flex-1 p-3 bg-orange-100 dark:bg-orange-950 rounded">
                          <p className="font-medium mb-2">🔔 Smart Watch Alert + Health Coach:</p>
                          <div className="space-y-1">
                            <p><strong>Notification:</strong> "WAIT! Your glucose is heading down and exercise will drop it further. Risk of hypoglycemia in 45 minutes."</p>
                            <p><strong>Coach Recommendation:</strong> "Eat 15g fast carbs now (4 glucose tablets or 4 oz juice). Wait 15 minutes, then you can exercise safely."</p>
                            <p className="text-muted-foreground mt-2">Patient clicks: "I ate 4 glucose tablets"</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">9:22 AM</Badge>
                        <div className="flex-1">
                          <p><strong>CGM Reading:</strong> Glucose rising to 148 mg/dL</p>
                          <p><strong>Health Coach:</strong> "Perfect! Your glucose is in a safe range. You're good to work out now. I'll monitor you during exercise."</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">9:25 AM</Badge>
                        <div className="flex-1">
                          <p><strong>Activity Agent:</strong> Detects cardio workout start (HR elevated to 145 bpm, accelerometer confirms running)</p>
                          <p className="text-muted-foreground">Continuous monitoring activated: glucose checked every 5 minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">10:05 AM</Badge>
                        <div className="flex-1">
                          <p><strong>During Exercise Monitoring:</strong></p>
                          <div className="ml-4 text-muted-foreground space-y-1 mt-1">
                            <p>• 9:30 AM: 142 mg/dL ✓</p>
                            <p>• 9:45 AM: 128 mg/dL ✓</p>
                            <p>• 10:00 AM: 115 mg/dL ✓ (safe range)</p>
                            <p>• 10:15 AM: 105 mg/dL ⚠️ (trending down)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge className="bg-yellow-600 shrink-0">10:15 AM</Badge>
                        <div className="flex-1 p-3 bg-yellow-100 dark:bg-yellow-950 rounded">
                          <p><strong>Health Coach:</strong> "Your glucose is getting low (105). Time to wrap up your workout in the next 5 minutes and have a snack."</p>
                          <p className="text-muted-foreground mt-1">Patient ends workout, eats protein bar with 20g carbs</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Badge variant="outline" className="shrink-0">10:45 AM</Badge>
                        <div className="flex-1">
                          <p><strong>Post-Exercise:</strong> Glucose stabilized at 118 mg/dL</p>
                          <p><strong>Health Coach:</strong> "Great workout! Your glucose stayed in the safe zone the whole time. Next time, we'll adjust your pre-workout carbs based on what we learned today."</p>
                        </div>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <p className="text-xs font-medium">Outcome: Hypoglycemia Prevented</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">What Could Have Happened:</p>
                          <p className="text-muted-foreground">Without AI intervention: Glucose would have dropped to ~65 mg/dL during workout, causing severe hypoglycemia, dizziness, potential fainting</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">What Actually Happened:</p>
                          <p className="text-green-600">Safe exercise session, glucose stayed 105-148 mg/dL throughout, patient gained confidence in exercise</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Learning Applied:</p>
                          <p className="text-muted-foreground">System learned patient's specific exercise glucose response. Future workouts automatically suggest optimal pre-workout carbs (12-15g for this patient)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cardiac Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600" />
            Cardiac Health & Rehabilitation Scenarios
          </CardTitle>
          <CardDescription>
            AI-powered heart health improvement through activity and lifestyle modifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Scenario 3: Post-Heart Attack Rehabilitation */}
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-red-600 rounded-lg shrink-0">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm">Scenario 3: Cardiac Rehabilitation with Progressive Activity Goals</h3>
                    <Badge className="bg-red-100 text-red-700">6-Month Recovery</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Male, 62 years, post-MI (myocardial infarction) 4 weeks ago, scared to exercise
                  </p>
                  
                  <div className="space-y-4">
                    {/* Month 1 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Month 1</Badge>
                        <span className="text-xs">Cautious Beginning</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Initial State:</p>
                          <div className="space-y-1">
                            <p>💔 Extremely sedentary: 800 steps/day</p>
                            <p>💔 Resting HR: 78 bpm, HRV very low</p>
                            <p>💔 BP: 145/92 (stage 2 hypertension)</p>
                            <p>💔 Anxiety about any physical activity</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Health Coach Approach:</p>
                          <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded space-y-1">
                            <p><strong>Coach:</strong> "I know you're worried, but gentle movement is actually the best medicine for your heart. Let's start with just 5 minutes of slow walking, 3 times a day. I'll watch your heart rate to make sure you're safe."</p>
                            <p className="mt-2 text-muted-foreground">Target: 2,000 steps/day, HR must stay below 100 bpm</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <p className="font-medium text-xs">Multi-Agent Monitoring:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                          <div className="p-2 bg-muted rounded">
                            <p><strong>Cardiac Stress Model (M2):</strong> Monitors HR and HRV during every walk</p>
                            <p className="text-muted-foreground">Alert if HR &gt; 100 bpm or irregular rhythm detected</p>
                          </div>
                          <div className="p-2 bg-muted rounded">
                            <p><strong>Activity Agent (M12):</strong> Tracks steps, celebrates small wins</p>
                            <p className="text-muted-foreground">"Great job! 5-minute walk completed safely. HR peaked at 92 bpm."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Month 2 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Month 2</Badge>
                        <span className="text-xs">Building Confidence</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Progress Metrics:</p>
                          <div className="space-y-1">
                            <p>📈 Steps: 3,500/day (↑338%)</p>
                            <p>📈 Resting HR: 72 bpm (↓6 bpm)</p>
                            <p>📈 HRV improving: 32 → 45 ms</p>
                            <p>📈 BP: 138/88 (improving)</p>
                            <p>📈 Confidence: Patient asks to increase activity</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Adaptive Goals:</p>
                          <div className="space-y-1">
                            <p><strong>Cardiac Model Analysis:</strong> Heart responding well to activity, no arrhythmias detected</p>
                            <p><strong>Health Coach:</strong> "Your heart is getting stronger! Your resting heart rate has dropped 6 beats. Let's add 2 more minutes to your walks."</p>
                            <p className="text-green-600 mt-2">New target: 4,500 steps/day, 10-min walks</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Month 4 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Month 4</Badge>
                        <span className="text-xs">Breakthrough Moment</span>
                      </div>
                      <div className="space-y-3 text-xs">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">7,200</p>
                            <p className="text-muted-foreground">Steps/day</p>
                          </div>
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">65 bpm</p>
                            <p className="text-muted-foreground">Resting HR</p>
                          </div>
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">58 ms</p>
                            <p className="text-muted-foreground">HRV</p>
                          </div>
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">128/82</p>
                            <p className="text-muted-foreground">BP</p>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                          <p className="font-medium mb-1">Health Coach Milestone Conversation:</p>
                          <div className="space-y-1">
                            <p><strong>Coach:</strong> "I have amazing news! Your heart health has improved so much. You're now at LOWER cardiac risk than before your heart attack. Your doctor will be thrilled."</p>
                            <p><strong>Patient:</strong> "Really? I feel so much better. I can walk without getting tired."</p>
                            <p><strong>Coach:</strong> "Your hard work paid off. You've walked over 600,000 steps in the last 4 months. Ready to add some light strength training?"</p>
                          </div>
                        </div>

                        <div className="p-2 bg-muted rounded">
                          <p className="font-medium mb-1">Predictive Cardiac Model (M2) Analysis:</p>
                          <p>Arrhythmia risk: 0.68 → 0.22 (68% reduction). HRV indicates strong parasympathetic recovery. Patient can safely increase intensity.</p>
                        </div>
                      </div>
                    </div>

                    {/* Month 6 - Final Results */}
                    <div className="p-3 bg-green-100 dark:bg-green-950 rounded-lg border-l-4 border-green-600">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-green-600" />
                        <Badge className="bg-green-600 text-white">Month 6: Transformation Complete</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">10,500</p>
                          <p className="text-muted-foreground">Steps/Day</p>
                          <p className="text-green-600 text-xs">+1,213%</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">62 bpm</p>
                          <p className="text-muted-foreground">Resting HR</p>
                          <p className="text-green-600 text-xs">-16 bpm</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">65 ms</p>
                          <p className="text-muted-foreground">HRV</p>
                          <p className="text-green-600 text-xs">+103%</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">122/78</p>
                          <p className="text-muted-foreground">BP</p>
                          <p className="text-green-600 text-xs">Normal</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">-22 lbs</p>
                          <p className="text-muted-foreground">Weight</p>
                          <p className="text-green-600 text-xs">BMI: Normal</p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-2 bg-background rounded text-xs">
                          <p className="font-medium mb-1">Cardiologist Report:</p>
                          <p>"Patient's ejection fraction improved from 45% to 58%. Medication reduced by 40%. This is one of the best cardiac rehab outcomes I've seen. AI monitoring allowed safe progression beyond what traditional rehab offers."</p>
                        </div>
                        <div className="p-2 bg-background rounded text-xs">
                          <p className="font-medium mb-1">Patient Testimonial:</p>
                          <p>"The Health Coach gave me courage when I was terrified to move. Now I hike with my wife every weekend. My heart is stronger than it's been in 20 years. This system saved my life."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Respiratory/Lung Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-cyan-600" />
            Respiratory Health & Lung Improvement Scenarios
          </CardTitle>
          <CardDescription>
            AI-driven breathing capacity improvement through targeted interventions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Scenario 4: COPD Management */}
            <div className="p-4 border-l-4 border-cyan-500 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-cyan-600 rounded-lg shrink-0">
                  <Wind className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm">Scenario 4: COPD Patient Improving Lung Function Through Activity</h3>
                    <Badge className="bg-cyan-100 text-cyan-700">16-Week Program</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Female, 67 years, moderate COPD, SpO₂ baseline 91-93%, gets winded easily
                  </p>
                  
                  <div className="space-y-4">
                    {/* Week 1-2 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 1-2</Badge>
                        <span className="text-xs">Baseline Assessment</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Initial Measurements:</p>
                          <div className="space-y-1">
                            <p>🫁 SpO₂: 91-93% at rest, drops to 88% with exertion</p>
                            <p>🫁 Steps: 1,200/day (very limited)</p>
                            <p>🫁 Respiratory rate: 22 breaths/min (elevated)</p>
                            <p>🫁 Sleep disruptions from breathing issues</p>
                            <p>🫁 Uses rescue inhaler 4-5x daily</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">COPD Decline Model (M10) Analysis:</p>
                          <div className="space-y-1">
                            <p><strong>Risk Assessment:</strong> Respiratory stress score: 72/100 (high)</p>
                            <p><strong>SpO₂ Dip Detection:</strong> Frequent desaturation events during sleep (avg 12/night)</p>
                            <p><strong>Prediction:</strong> Without intervention, lung function will decline 8-12% annually</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 rounded text-xs">
                        <p className="font-medium mb-1">Health Coach Introduction:</p>
                        <p><strong>Coach:</strong> "I can see breathing is challenging for you. The good news is we can improve your lung capacity with gentle, paced walking. I'll make sure you never overdo it—I'll watch your oxygen levels constantly."</p>
                        <p className="mt-2"><strong>Initial Plan:</strong> 3-minute walks, 3x/day. Stop immediately if SpO₂ drops below 89%.</p>
                      </div>
                    </div>

                    {/* Week 4-6 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 4-6</Badge>
                        <span className="text-xs">Breathing Improves</span>
                      </div>
                      <div className="space-y-3 text-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="font-medium mb-1">Progress Tracking:</p>
                            <div className="space-y-1">
                              <p>📊 SpO₂: 92-94% at rest, stays at 90% during walks</p>
                              <p>📊 Steps: 2,800/day (+133%)</p>
                              <p>📊 Respiratory rate: 19 breaths/min (↓3)</p>
                              <p>📊 Walk duration: 3 min → 7 min without distress</p>
                              <p>📊 Rescue inhaler use: 4-5x → 2-3x daily</p>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Multi-Agent Insights:</p>
                            <div className="space-y-1">
                              <p><strong>Sleep Model (M3):</strong> Sleep quality improving—fewer SpO₂ dips (12 → 7 per night)</p>
                              <p><strong>Activity Agent:</strong> Identifies optimal walking time: 10 AM (SpO₂ highest)</p>
                              <p><strong>COPD Model:</strong> Respiratory stress score: 72 → 58 (19% improvement)</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 bg-green-100 dark:bg-green-950 rounded">
                          <p className="font-medium mb-1">Health Coach Encouragement:</p>
                          <p>"Amazing progress! You're walking more than twice as much as when we started. Your lungs are getting stronger—notice how you're not as winded? Let's add breathing exercises before your walks."</p>
                        </div>

                        <div className="p-2 bg-muted rounded">
                          <p className="font-medium mb-1">New Intervention: Breathing Exercises</p>
                          <p>Health Coach teaches pursed-lip breathing technique via app videos. Reminds patient before each walk. Activity Agent tracks breathing rate during exercises.</p>
                        </div>
                      </div>
                    </div>

                    {/* Week 10-12 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 10-12</Badge>
                        <span className="text-xs">Remarkable Transformation</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium mb-1">Lung Function Gains:</p>
                          <div className="space-y-1">
                            <p>✓ SpO₂: 93-95% at rest, 91-92% during walks</p>
                            <p>✓ Steps: 4,500/day (+275% from baseline)</p>
                            <p>✓ Can walk 15 minutes continuously</p>
                            <p>✓ Respiratory rate: 17 breaths/min (normal range)</p>
                            <p>✓ Sleep SpO₂ dips: 7 → 3 per night</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Lifestyle Impact:</p>
                          <div className="space-y-1">
                            <p>🌟 Rescue inhaler: 2-3x → 1x daily (70% reduction)</p>
                            <p>🌟 Energy levels significantly improved</p>
                            <p>🌟 Can grocery shop without wheelchair</p>
                            <p>🌟 Plays with grandchildren (previously impossible)</p>
                            <p>🌟 Sleep quality: 54 → 79/100</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 rounded text-xs">
                        <p className="font-medium mb-1">Patient Reflection:</p>
                        <p><strong>Patient:</strong> "Six months ago I couldn't walk to my mailbox. Yesterday I walked around the entire block! The Health Coach is like having a respiratory therapist with me 24/7. It alerts me when I need to rest and celebrates every tiny improvement."</p>
                      </div>
                    </div>

                    {/* Week 16 - Results */}
                    <div className="p-3 bg-green-100 dark:bg-green-950 rounded-lg border-l-4 border-green-600">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-green-600" />
                        <Badge className="bg-green-600 text-white">Week 16: Pulmonologist Follow-up</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-3">
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">94%</p>
                          <p className="text-muted-foreground">Avg SpO₂</p>
                          <p className="text-green-600 text-xs">+3% (huge for COPD)</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">5,200</p>
                          <p className="text-muted-foreground">Steps/Day</p>
                          <p className="text-green-600 text-xs">+333%</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">16 min</p>
                          <p className="text-muted-foreground">6-Minute Walk</p>
                          <p className="text-green-600 text-xs">+167%</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">38</p>
                          <p className="text-muted-foreground">Resp. Stress</p>
                          <p className="text-green-600 text-xs">-47% reduction</p>
                        </div>
                      </div>

                      <div className="p-2 bg-background rounded text-xs">
                        <p className="font-medium mb-1">Pulmonologist Report:</p>
                        <p>"Spirometry shows 18% improvement in FEV1—remarkable for a COPD patient. The AI-guided pulmonary rehabilitation exceeded clinic-based outcomes. Patient went from moderate to mild COPD classification. Highly recommend this system for all COPD patients."</p>
                      </div>

                      <div className="mt-3 p-2 bg-background rounded text-xs">
                        <p className="font-medium mb-1">COPD Decline Model (M10) Final Analysis:</p>
                        <p>Respiratory stress score: 72 → 38 (53% reduction). Predicted annual decline: -8-12% → -2-3%. Patient has regained approximately 3 years of lung function. Prognosis: Excellent with continued activity maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lifestyle & Metabolic Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Footprints className="w-5 h-5 text-green-600" />
            Lifestyle Transformation & Metabolic Health Scenarios
          </CardTitle>
          <CardDescription>
            Comprehensive wellness improvement through activity tracking and health coaching
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Scenario 5: Sedentary to Active Transformation */}
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-green-600 rounded-lg shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm">Scenario 5: From Desk Job to 10K Steps—Preventing Metabolic Syndrome</h3>
                    <Badge className="bg-green-100 text-green-700">12-Week Challenge</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Female, 45 years, software engineer, sits 12+ hours/day, pre-diabetic, high stress
                  </p>
                  
                  <div className="space-y-4">
                    {/* Baseline */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">Baseline</Badge>
                        <span className="text-xs">Multiple Risk Factors</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="p-2 bg-red-100 dark:bg-red-950 rounded">
                          <p className="font-medium mb-1">Activity:</p>
                          <p>🔴 1,800 steps/day</p>
                          <p>🔴 Sitting: 12-14 hrs/day</p>
                          <p>🔴 Exercise: 0 min/week</p>
                        </div>
                        <div className="p-2 bg-red-100 dark:bg-red-950 rounded">
                          <p className="font-medium mb-1">Metabolic:</p>
                          <p>🔴 Fasting glucose: 118 mg/dL</p>
                          <p>🔴 BMI: 29.8 (overweight)</p>
                          <p>🔴 Waist: 37 inches</p>
                        </div>
                        <div className="p-2 bg-red-100 dark:bg-red-950 rounded">
                          <p className="font-medium mb-1">Stress & Sleep:</p>
                          <p>🔴 HRV: 28 ms (very low)</p>
                          <p>🔴 Sleep: 5.5 hrs/night</p>
                          <p>🔴 Stress score: 8.5/10</p>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-muted rounded text-xs">
                        <p><strong>Multi-Model Risk Assessment:</strong></p>
                        <p>• Insulin Resistance (M6): 0.82 (very high risk for Type 2 diabetes)</p>
                        <p>• Metabolic Drift (M12): 30-day score predicts 8-12 lb weight gain</p>
                        <p>• Stress Detection (M11): Chronic stress, burnout risk 0.76</p>
                        <p>• Hypertension Model (M9): 6-month BP elevation risk: 0.68</p>
                      </div>
                    </div>

                    {/* Week 1-3 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 1-3</Badge>
                        <span className="text-xs">Breaking the Sitting Habit</span>
                      </div>
                      <div className="space-y-3 text-xs">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                          <p className="font-medium mb-2">Health Coach Strategy:</p>
                          <div className="space-y-1">
                            <p><strong>Coach:</strong> "Sitting 12 hours a day is literally shaving years off your life. But I won't ask you to change everything at once. Let's start with one simple rule: Every 60 minutes, stand up and move for 2 minutes. I'll remind you."</p>
                            <p className="mt-2 text-muted-foreground">Smart Watch vibrates every hour with gentle reminder</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="font-medium mb-1">Week 1 Micro-Habits:</p>
                            <div className="space-y-1">
                              <p>✓ Hourly 2-min movement breaks (accepted 65% of time)</p>
                              <p>✓ Park farther from office entrance</p>
                              <p>✓ Take stairs for 1 flight (then elevator)</p>
                              <p>✓ Steps increased: 1,800 → 3,200/day</p>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Health Coach Gamification:</p>
                            <div className="space-y-1">
                              <p>🏆 "3-Day Streak" badge earned</p>
                              <p>🏆 "First Mile" achievement unlocked</p>
                              <p>🏆 Daily motivational quote at 8 AM</p>
                              <p><strong>Coach:</strong> "You moved during 9 out of 12 work hours today! That's reducing your disease risk right there."</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 bg-muted rounded">
                          <p className="font-medium mb-1">Stress Agent (M11) Insight:</p>
                          <p>HRV analysis shows patient's stress peaks at 3 PM daily. Health Coach adjusts reminder to suggest 3 PM walk: "Your stress is highest right now. A 5-minute walk will help more than coffee."</p>
                        </div>
                      </div>
                    </div>

                    {/* Week 5-7 */}
                    <div className="p-3 bg-background rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week 5-7</Badge>
                        <span className="text-xs">Momentum Building</span>
                      </div>
                      <div className="space-y-3 text-xs">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">6,800</p>
                            <p className="text-muted-foreground text-xs">Steps/day</p>
                            <p className="text-green-600 text-xs">+278%</p>
                          </div>
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">112</p>
                            <p className="text-muted-foreground text-xs">Glucose</p>
                            <p className="text-green-600 text-xs">↓6 mg/dL</p>
                          </div>
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">38 ms</p>
                            <p className="text-muted-foreground text-xs">HRV</p>
                            <p className="text-green-600 text-xs">+36%</p>
                          </div>
                          <div className="p-2 bg-green-100 dark:bg-green-950 rounded text-center">
                            <p className="text-lg">-5.2 lbs</p>
                            <p className="text-muted-foreground text-xs">Weight</p>
                            <p className="text-green-600 text-xs">No diet!</p>
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                          <p className="font-medium mb-2">Health Coach Adaptive Coaching:</p>
                          <div className="space-y-1">
                            <p><strong>Coach observes:</strong> Patient consistently hits 7K steps on weekends but struggles weekdays</p>
                            <p><strong>New strategy:</strong> "I noticed you crush your step goals on weekends! What if we tried walking meetings at work? I can remind you before your 2 PM meeting tomorrow."</p>
                            <p className="mt-2 text-muted-foreground">Patient tries walking meeting → loves it → now does 2-3 per week</p>
                            <p className="mt-1"><strong>Result:</strong> Weekday steps jump from 5,500 → 7,200</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-2 bg-muted rounded">
                            <p className="font-medium mb-1">Metabolic Improvements:</p>
                            <p>Insulin Resistance (M6): 0.82 → 0.64 (22% reduction). Metabolic Drift (M12): Predicts 4 lb weight LOSS over next 30 days instead of gain.</p>
                          </div>
                          <div className="p-2 bg-muted rounded">
                            <p className="font-medium mb-1">Sleep Quality:</p>
                            <p>Sleep Model (M3): Quality improved 5.5 → 6.8 hrs/night. More movement = better sleep = more energy = more movement (positive cycle!)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Week 10-12 */}
                    <div className="p-3 bg-green-100 dark:bg-green-950 rounded-lg border-l-4 border-green-600">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-green-600" />
                        <Badge className="bg-green-600 text-white">Week 12: Lifestyle Transformed</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs mb-3">
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">10,400</p>
                          <p className="text-muted-foreground">Steps/Day</p>
                          <p className="text-green-600 text-xs">+478%</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">98</p>
                          <p className="text-muted-foreground">Glucose</p>
                          <p className="text-green-600 text-xs">Normal!</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">52 ms</p>
                          <p className="text-muted-foreground">HRV</p>
                          <p className="text-green-600 text-xs">+86%</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">-14 lbs</p>
                          <p className="text-muted-foreground">Weight</p>
                          <p className="text-green-600 text-xs">BMI: 27.2</p>
                        </div>
                        <div className="text-center p-2 bg-background rounded">
                          <p className="text-xl mb-1">4.5/10</p>
                          <p className="text-muted-foreground">Stress</p>
                          <p className="text-green-600 text-xs">↓47%</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-2 bg-background rounded">
                          <p className="font-medium mb-1">New Habits Established:</p>
                          <div className="space-y-1">
                            <p>✓ Morning 20-min walk (before work)</p>
                            <p>✓ Lunch walk with colleague 4x/week</p>
                            <p>✓ Walking meetings 2-3x/week</p>
                            <p>✓ Standing desk 4 hrs/day</p>
                            <p>✓ Weekend hikes with family</p>
                            <p>✓ Sleep: 7.2 hrs/night consistently</p>
                          </div>
                        </div>
                        <div className="p-2 bg-background rounded">
                          <p className="font-medium mb-1">Disease Risk Reduction:</p>
                          <div className="space-y-1">
                            <p>📉 Type 2 diabetes risk: 0.82 → 0.34 (59% ↓)</p>
                            <p>📉 Cardiovascular disease risk: -42%</p>
                            <p>📉 Hypertension 6-mo risk: 0.68 → 0.22</p>
                            <p>📉 All-cause mortality risk: -35%</p>
                            <p className="text-green-600 mt-2">Metabolic syndrome REVERSED</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 rounded text-xs">
                        <p className="font-medium mb-2">Patient Reflection:</p>
                        <p>"I can't believe I went from barely moving to averaging over 10,000 steps a day. The Health Coach made it feel like a game, not a chore. The crazy part? I never 'went on a diet' but lost 14 pounds anyway. My doctor took me off the pre-diabetes watchlist. My energy is through the roof, my stress is manageable, and I sleep like a baby. This AI system didn't just change my activity level—it changed my entire life."</p>
                      </div>

                      <div className="mt-3 p-2 bg-background rounded text-xs">
                        <p className="font-medium mb-1">Health Coach Final Message:</p>
                        <p>"You walked 683,000 steps in 12 weeks—that's 341 miles! You've added years to your life and life to your years. I'm so proud of you. Want to set a new goal? How about your first 5K race? 😊"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impact Summary */}
      <Card className="border-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            Cumulative Impact: How Activity & AI Coaching Transform Chronic Disease Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Droplet className="w-5 h-5 text-orange-600" />
                  <h3 className="text-sm">Diabetes</h3>
                </div>
                <div className="space-y-1">
                  <p><strong>Activity Impact:</strong> 8,000+ steps/day reduces Type 2 risk by 50-60%</p>
                  <p><strong>AI Advantage:</strong> Meal timing + activity correlation improves glucose control 3x faster than activity alone</p>
                  <p className="text-orange-600 mt-2">Average HbA1c reduction: -1.2% in 12 weeks</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  <h3 className="text-sm">Cardiac</h3>
                </div>
                <div className="space-y-1">
                  <p><strong>Activity Impact:</strong> 7,000+ steps/day reduces cardiac mortality by 50-70%</p>
                  <p><strong>AI Advantage:</strong> HRV-guided exercise prevents overexertion, accelerates recovery</p>
                  <p className="text-red-600 mt-2">Resting HR reduction: -12 bpm avg in 6 months</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-sm">Respiratory</h3>
                </div>
                <div className="space-y-1">
                  <p><strong>Activity Impact:</strong> 5,000+ steps/day improves lung capacity in COPD by 15-20%</p>
                  <p><strong>AI Advantage:</strong> SpO₂-monitored walking prevents hypoxemia, optimizes exertion</p>
                  <p className="text-cyan-600 mt-2">FEV1 improvement: +18% avg in 16 weeks</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  <h3 className="text-sm">Metabolic</h3>
                </div>
                <div className="space-y-1">
                  <p><strong>Activity Impact:</strong> 10,000+ steps/day reverses metabolic syndrome in 60% of patients</p>
                  <p><strong>AI Advantage:</strong> Personalized step goals based on metabolic response data</p>
                  <p className="text-green-600 mt-2">Insulin sensitivity: +45% avg in 12 weeks</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-sm mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-600" />
                The Synergy Effect: Why AI + Activity &gt; Sum of Parts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="font-medium mb-1">Personalization at Scale</p>
                  <p className="text-muted-foreground">AI learns each patient's unique response to activity. Same 5,000 steps have different metabolic impact for different people—AI optimizes for YOUR body.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Real-Time Adaptation</p>
                  <p className="text-muted-foreground">Health Coach adjusts goals daily based on sleep, stress, glucose, HR. Prevents burnout and injury. Maximizes sustainable progress.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Behavioral Psychology</p>
                  <p className="text-muted-foreground">AI identifies what motivates YOU (competition, streaks, health metrics) and adapts coaching style. 85% adherence vs. 40% for generic programs.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
