import { useState } from "react";
import { 
  Activity, 
  TrendingUp, 
  Target, 
  Flame, 
  Footprints, 
  Heart, 
  Trophy, 
  Calendar,
  Clock,
  Zap,
  Dumbbell,
  Award,
  LineChart as LineChartIcon
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface FitnessModuleProps {
  vitalsData?: {
    heartRate?: number;
    bloodPressure?: string;
    oxygen?: number;
    weight?: number;
  };
}

export function FitnessModule({ vitalsData }: FitnessModuleProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>("steps");

  // Daily fitness goals
  const fitnessGoals = [
    {
      id: "steps",
      label: "Daily Steps",
      current: 8234,
      target: 10000,
      unit: "steps",
      icon: <Footprints className="w-5 h-5" />,
      color: "bg-blue-500",
      improvement: "+12%"
    },
    {
      id: "calories",
      label: "Calories Burned",
      current: 420,
      target: 500,
      unit: "kcal",
      icon: <Flame className="w-5 h-5" />,
      color: "bg-orange-500",
      improvement: "+8%"
    },
    {
      id: "exercise",
      label: "Exercise Minutes",
      current: 35,
      target: 45,
      unit: "min",
      icon: <Dumbbell className="w-5 h-5" />,
      color: "bg-purple-500",
      improvement: "+15%"
    },
    {
      id: "active-hours",
      label: "Active Hours",
      current: 6,
      target: 8,
      unit: "hrs",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-green-500",
      improvement: "+10%"
    }
  ];

  // Weekly activity data
  const weeklyActivityData = [
    { day: "Mon", steps: 7500, calories: 380, exercise: 30, heartRate: 68 },
    { day: "Tue", steps: 9200, calories: 450, exercise: 40, heartRate: 70 },
    { day: "Wed", steps: 8100, calories: 410, exercise: 35, heartRate: 69 },
    { day: "Thu", steps: 10500, calories: 520, exercise: 50, heartRate: 72 },
    { day: "Fri", steps: 8900, calories: 440, exercise: 38, heartRate: 71 },
    { day: "Sat", steps: 11200, calories: 550, exercise: 55, heartRate: 70 },
    { day: "Sun", steps: 8234, calories: 420, exercise: 35, heartRate: 72 }
  ];

  // Vitals improvement over 30 days
  const vitalsImprovementData = [
    { week: "Week 1", restingHR: 78, weight: 185, bp: 135, activity: 20 },
    { week: "Week 2", restingHR: 76, weight: 183, bp: 132, activity: 28 },
    { week: "Week 3", restingHR: 74, weight: 181, bp: 128, activity: 35 },
    { week: "Week 4", restingHR: 72, weight: 179, bp: 125, activity: 40 }
  ];

  // Workout history
  const workoutHistory = [
    { 
      type: "Walking", 
      duration: "30 min", 
      calories: 150, 
      time: "8:00 AM",
      heartRateAvg: 105,
      improvement: "Better than last week"
    },
    { 
      type: "Yoga", 
      duration: "20 min", 
      calories: 80, 
      time: "6:30 PM",
      heartRateAvg: 85,
      improvement: "Flexibility +5%"
    },
    { 
      type: "Cycling", 
      duration: "45 min", 
      calories: 300, 
      time: "Yesterday 7:00 AM",
      heartRateAvg: 120,
      improvement: "Personal best!"
    }
  ];

  // Achievements and milestones
  const achievements = [
    { title: "7-Day Streak", description: "Completed daily goals for a week", earned: true, icon: "🔥" },
    { title: "Heart Health Hero", description: "Resting heart rate improved by 10%", earned: true, icon: "❤️" },
    { title: "Step Master", description: "Reached 10,000 steps 5 days in a row", earned: true, icon: "👣" },
    { title: "Weight Goal", description: "Lost 5 lbs in 30 days", earned: false, icon: "🎯" }
  ];

  // Health score calculation
  const calculateHealthScore = () => {
    let score = 0;
    fitnessGoals.forEach(goal => {
      score += (goal.current / goal.target) * 25;
    });
    return Math.round(score);
  };

  const healthScore = calculateHealthScore();

  return (
    <div className="space-y-6">
      {/* Health Score Overview */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3>Health & Wellness Score</h3>
              </div>
              <p className="text-sm text-muted-foreground">Based on fitness activity and vital improvements</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">{healthScore}</div>
              <div className="text-sm text-muted-foreground">out of 100</div>
              <Badge className="mt-2 bg-green-500 text-white">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5 from last week
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Goals Progress */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3>Today's Fitness Goals</h3>
          <Badge variant="secondary">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {fitnessGoals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <Card 
                key={goal.id}
                className={`cursor-pointer transition-all ${
                  selectedGoal === goal.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedGoal(goal.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${goal.color} bg-opacity-10`}>
                      <div className={`${goal.color.replace('bg-', 'text-')}`}>
                        {goal.icon}
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      {goal.improvement}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{goal.label}</p>
                  <div className="flex items-baseline gap-1 mt-2 mb-3">
                    <span className="text-2xl">{goal.current.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">/ {goal.target.toLocaleString()} {goal.unit}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {Math.round(progress)}% complete
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="activity">
            <Activity className="w-4 h-4 mr-2" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="vitals">
            <Heart className="w-4 h-4 mr-2" />
            Vitals Impact
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Award className="w-4 h-4 mr-2" />
            Achievements
          </TabsTrigger>
        </TabsList>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-4">
          {/* Weekly Activity Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChartIcon className="w-5 h-5" />
                Weekly Activity Overview
              </CardTitle>
              <CardDescription>Your activity trends over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis 
                    dataKey="day" 
                    style={{ fontSize: '12px' }}
                    stroke="rgba(0,0,0,0.5)"
                  />
                  <YAxis 
                    style={{ fontSize: '12px' }}
                    stroke="rgba(0,0,0,0.5)"
                  />
                  <Tooltip />
                  <Bar key="bar-steps" dataKey="steps" fill="rgb(59, 130, 246)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Workouts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5" />
                Recent Workouts
              </CardTitle>
              <CardDescription>Track your exercise sessions and improvements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {workoutHistory.map((workout, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{workout.type}</p>
                      <p className="text-sm text-muted-foreground">{workout.time}</p>
                    </div>
                    <Badge variant="secondary">
                      <Flame className="w-3 h-3 mr-1" />
                      {workout.calories} kcal
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>Avg {workout.heartRateAvg} bpm</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                    <Zap className="w-4 h-4" />
                    <span>{workout.improvement}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Vitals Impact Tab */}
        <TabsContent value="vitals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Fitness Impact on Health Vitals
              </CardTitle>
              <CardDescription>See how your fitness routine improves your health metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Resting Heart Rate Improvement */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Resting Heart Rate</p>
                  <Badge className="bg-green-500 text-white">
                    -6 bpm improvement
                  </Badge>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={vitalsImprovementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis 
                      dataKey="week" 
                      style={{ fontSize: '12px' }}
                      stroke="rgba(0,0,0,0.5)"
                    />
                    <YAxis 
                      domain={[70, 80]}
                      style={{ fontSize: '12px' }}
                      stroke="rgba(0,0,0,0.5)"
                    />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="restingHR" 
                      stroke="rgb(239, 68, 68)" 
                      fill="rgba(239, 68, 68, 0.2)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Weight and Blood Pressure */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">Weight Loss</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl">6</span>
                      <span className="text-sm text-muted-foreground">lbs</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      185 → 179 lbs
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">Blood Pressure</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl">-10</span>
                      <span className="text-sm text-muted-foreground">mmHg</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      135 → 125 systolic
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Activity vs Heart Rate Correlation */}
              <div>
                <p className="text-sm font-medium mb-3">Activity vs Resting Heart Rate</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={vitalsImprovementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis 
                      dataKey="week" 
                      style={{ fontSize: '12px' }}
                      stroke="rgba(0,0,0,0.5)"
                    />
                    <YAxis 
                      yAxisId="left"
                      style={{ fontSize: '12px' }}
                      stroke="rgba(0,0,0,0.5)"
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      style={{ fontSize: '12px' }}
                      stroke="rgba(0,0,0,0.5)"
                    />
                    <Tooltip />
                    <Line 
                      key="line-resting-hr"
                      yAxisId="left"
                      type="monotone" 
                      dataKey="restingHR" 
                      stroke="rgb(239, 68, 68)" 
                      strokeWidth={2}
                      name="Resting HR"
                      dot={{ fill: "rgb(239, 68, 68)", r: 4 }}
                    />
                    <Line 
                      key="line-activity"
                      yAxisId="right"
                      type="monotone" 
                      dataKey="activity" 
                      stroke="rgb(139, 92, 246)" 
                      strokeWidth={2}
                      name="Activity (min)"
                      dot={{ fill: "rgb(139, 92, 246)", r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  As your activity increases, your resting heart rate improves
                </p>
              </div>

              {/* Health Insights */}
              <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-500 text-white">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">Excellent Progress!</p>
                      <p className="text-sm text-muted-foreground">
                        Your consistent fitness routine has led to a 8% improvement in cardiovascular health over the past month. Keep up the great work!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Fitness Achievements
              </CardTitle>
              <CardDescription>Milestones and accomplishments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    achievement.earned 
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-yellow-300 dark:border-yellow-700" 
                      : "bg-muted border-border opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{achievement.title}</p>
                        {achievement.earned && (
                          <Badge className="bg-green-500 text-white">
                            <Award className="w-3 h-3 mr-1" />
                            Earned
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Challenge */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Weekly Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-2">Complete 50 minutes of exercise</p>
                  <Progress value={70} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-1">35 / 50 minutes completed</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-500 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    Bonus: 100 points
                  </Badge>
                  <Badge variant="outline">Expires in 2 days</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <Button className="w-full" variant="outline">
            <Activity className="w-4 h-4 mr-2" />
            Start Workout
          </Button>
          <Button className="w-full" variant="outline">
            <Target className="w-4 h-4 mr-2" />
            Set New Goal
          </Button>
          <Button className="w-full" variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            View History
          </Button>
          <Button className="w-full" variant="outline">
            <Trophy className="w-4 h-4 mr-2" />
            Share Progress
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}