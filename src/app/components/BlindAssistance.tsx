import { useState } from "react";
import { Camera, Mic, Navigation, BookOpen, Volume2, MapPin, Scan, MessageSquare, Languages, Globe, Car, Clock, DollarSign, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

// Language configuration with BCP 47 language codes
const LANGUAGES = [
  { code: "en-US", name: "English (US)", flag: "🇺🇸" },
  { code: "es-ES", name: "Spanish (Spain)", flag: "🇪🇸" },
  { code: "es-MX", name: "Spanish (Mexico)", flag: "🇲🇽" },
  { code: "fr-FR", name: "French", flag: "🇫🇷" },
  { code: "de-DE", name: "German", flag: "🇩🇪" },
  { code: "it-IT", name: "Italian", flag: "🇮🇹" },
  { code: "pt-BR", name: "Portuguese (Brazil)", flag: "🇧🇷" },
  { code: "zh-CN", name: "Chinese (Mandarin)", flag: "🇨🇳" },
  { code: "ja-JP", name: "Japanese", flag: "🇯🇵" },
  { code: "ko-KR", name: "Korean", flag: "🇰🇷" },
  { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
  { code: "te-IN", name: "Telugu", flag: "🇮🇳" },
  { code: "ta-IN", name: "Tamil", flag: "🇮🇳" },
  { code: "kn-IN", name: "Kannada", flag: "🇮🇳" },
  { code: "ml-IN", name: "Malayalam", flag: "🇮🇳" },
  { code: "ar-SA", name: "Arabic", flag: "🇸🇦" },
  { code: "ru-RU", name: "Russian", flag: "🇷🇺" },
  { code: "nl-NL", name: "Dutch", flag: "🇳🇱" },
  { code: "pl-PL", name: "Polish", flag: "🇵🇱" },
  { code: "sv-SE", name: "Swedish", flag: "🇸🇪" },
  { code: "tr-TR", name: "Turkish", flag: "🇹🇷" },
  { code: "vi-VN", name: "Vietnamese", flag: "🇻🇳" },
  { code: "th-TH", name: "Thai", flag: "🇹🇭" },
  { code: "id-ID", name: "Indonesian", flag: "🇮🇩" }
];

export function BlindAssistance() {
  const [isListening, setIsListening] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [detectedObject, setDetectedObject] = useState("");
  const [voiceCommand, setVoiceCommand] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [rideStatus, setRideStatus] = useState<"idle" | "searching" | "found" | "enroute">("idle");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setVoiceCommand("Where am I?");
        setIsListening(false);
        // Simulate response
        setTimeout(() => {
          speakTextInLanguage("You are at home, near the living room entrance.");
        }, 500);
      }, 2000);
    }
  };

  const speakTextInLanguage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      
      // Try to find a voice that matches the selected language
      const voices = window.speechSynthesis.getVoices();
      const matchingVoice = voices.find(voice => voice.lang.startsWith(selectedLanguage.split('-')[0]));
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleObjectDetection = () => {
    setIsCameraActive(!isCameraActive);
    if (!isCameraActive) {
      // Simulate object detection
      setTimeout(() => {
        const objects = ["Door", "Chair", "Table", "Person", "Stairs"];
        const detected = objects[Math.floor(Math.random() * objects.length)];
        setDetectedObject(detected);
        
        speakTextInLanguage(`${detected} detected ahead, approximately 5 feet away.`);
      }, 1500);
    } else {
      setDetectedObject("");
    }
  };

  const speakText = (text: string) => {
    speakTextInLanguage(text);
  };

  const currentLanguage = LANGUAGES.find(lang => lang.code === selectedLanguage);

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1>Visual Assistance</h1>
        <p className="text-muted-foreground mt-1">AI-powered mobility support</p>
      </div>

      {/* Language Selection for Smart Cane & Smart Glasses */}
      <Card className="border-2 border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-purple-600" />
            🗣️ Voice Language Settings
          </CardTitle>
          <CardDescription>Choose your preferred language for Smart Cane & Smart Glasses voice assistance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language-select" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Selected Language
            </Label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger id="language-select" className="h-14 text-base bg-white dark:bg-gray-800">
                <SelectValue>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{currentLanguage?.flag}</span>
                    <span>{currentLanguage?.name}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="h-12 text-base">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900">
            <Volume2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">Smart Cane</span> and <span className="font-medium">Smart Glasses</span> will use this language for:
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                <li>Object detection announcements</li>
                <li>Navigation directions</li>
                <li>Text reading (OCR)</li>
                <li>All voice responses</li>
              </ul>
            </div>
          </div>

          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => speakText("Language settings updated. All voice assistance will now use your selected language.")}
          >
            <Volume2 className="w-4 h-4 mr-2" />
            Test Voice in {currentLanguage?.name}
          </Button>
        </CardContent>
      </Card>

      {/* Voice Command */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="w-5 h-5" />
            Voice Assistant
          </CardTitle>
          <CardDescription>Speak naturally to get help</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full h-24"
            size="lg"
            onClick={handleVoiceCommand}
            variant={isListening ? "default" : "outline"}
          >
            <div className="flex flex-col items-center gap-2">
              <Volume2 className={`w-8 h-8 ${isListening ? "animate-pulse" : ""}`} />
              <span>{isListening ? "Listening..." : "Tap to Speak"}</span>
            </div>
          </Button>
          
          {voiceCommand && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">You said:</p>
              <p className="mt-1">"{voiceCommand}"</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Object Detection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Object Detection
          </CardTitle>
          <CardDescription>Identify objects and obstacles around you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full h-24"
            size="lg"
            onClick={handleObjectDetection}
            variant={isCameraActive ? "default" : "outline"}
          >
            <div className="flex flex-col items-center gap-2">
              <Scan className={`w-8 h-8 ${isCameraActive ? "animate-pulse" : ""}`} />
              <span>{isCameraActive ? "Scanning..." : "Start Detection"}</span>
            </div>
          </Button>
          
          {detectedObject && (
            <div className="p-4 bg-blue-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500">Detected</Badge>
                <span className="text-sm">{detectedObject} ahead, ~5 feet</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Assistance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5" />
            Navigation
          </CardTitle>
          <CardDescription>Turn-by-turn directions with audio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => speakText("Navigation activated. Where would you like to go?")}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Start Navigation
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="secondary"
              onClick={() => speakText("Finding route to home")}
            >
              Go Home
            </Button>
            <Button 
              variant="secondary"
              onClick={() => speakText("Finding nearby pharmacy")}
            >
              Find Pharmacy
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ride Booking for Blind Assistance */}
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="w-5 h-5 text-green-600" />
            🚗 Accessible Ride Booking
          </CardTitle>
          <CardDescription>Book accessible transportation with voice assistance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {rideStatus === "idle" && (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full h-20 bg-green-600 hover:bg-green-700" 
                  size="lg"
                  onClick={() => speakText("Ride booking opened. Please enter your pickup and destination locations.")}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Car className="w-8 h-8" />
                    <span>Book Accessible Ride</span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Book Your Ride</DialogTitle>
                  <DialogDescription>
                    Voice-guided ride booking for accessible transportation
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="pickup" 
                        placeholder="Current location" 
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                      />
                      <Button 
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setPickupLocation("Current Location");
                          speakText("Pickup location set to current location");
                        }}
                      >
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoff">Destination</Label>
                    <Input 
                      id="dropoff" 
                      placeholder="Where to?"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                    />
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900">
                    <p className="text-sm">
                      <strong>Accessible Features:</strong>
                    </p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>✓ Wheelchair accessible vehicles</li>
                      <li>✓ Trained drivers for visual impairment</li>
                      <li>✓ Voice-guided pickup assistance</li>
                      <li>✓ Door-to-door service</li>
                    </ul>
                  </div>

                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue placeholder="Select ride type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Accessible</SelectItem>
                      <SelectItem value="premium">Premium Accessible</SelectItem>
                      <SelectItem value="wheelchair">Wheelchair Van</SelectItem>
                      <SelectItem value="assistant">With Assistant</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700" 
                    onClick={() => {
                      setRideStatus("searching");
                      speakText("Searching for accessible ride. Please wait.");
                      setTimeout(() => {
                        setRideStatus("found");
                        speakText("Ride found! Driver Michael is 3 minutes away in a Toyota Camry. Vehicle is wheelchair accessible.");
                      }, 3000);
                    }}
                  >
                    <Car className="w-4 h-4 mr-2" />
                    Request Accessible Ride
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}

          {rideStatus === "searching" && (
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-500 rounded-lg">
                <div className="flex items-center gap-3">
                  <Car className="w-6 h-6 text-yellow-600 animate-pulse" />
                  <div>
                    <p className="font-medium">Searching for accessible ride...</p>
                    <p className="text-sm text-muted-foreground">Finding nearby drivers</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {rideStatus === "found" && (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 border-2 border-green-500 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-600">Ride Found</Badge>
                  <span className="text-sm text-muted-foreground">3 min away</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Michael Rodriguez</p>
                      <p className="text-sm text-muted-foreground">⭐ 4.9 (482 rides)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-muted-foreground" />
                    <p className="text-sm">Toyota Camry • Blue • ABC 1234</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <p className="text-sm">Estimated arrival: 3 minutes</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                    <p className="text-sm">Estimated fare: $12.50</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900">
                <p className="text-sm">
                  ♿ <strong>Accessible Features Active:</strong>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Vehicle is wheelchair accessible. Driver trained in visual assistance support.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  onClick={() => speakText("Calling driver Michael Rodriguez now")}
                >
                  📞 Call Driver
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setRideStatus("enroute");
                    speakText("Driver is on the way. You will be notified when they arrive.");
                  }}
                >
                  Track Ride
                </Button>
              </div>

              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => {
                  setRideStatus("idle");
                  speakText("Ride cancelled");
                }}
              >
                Cancel Ride
              </Button>
            </div>
          )}

          {rideStatus === "enroute" && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Car className="w-6 h-6 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium">Driver arriving soon</p>
                    <p className="text-sm text-muted-foreground">Michael is 1 minute away</p>
                  </div>
                </div>
                <div className="w-full bg-blue-200 dark:bg-blue-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-3/4 animate-pulse"></div>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={() => {
                  speakText("Driver has arrived. Vehicle is right in front of you.");
                }}
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Announce Arrival
              </Button>

              <Button 
                variant="outline"
                className="w-full"
                onClick={() => {
                  setRideStatus("idle");
                  speakText("Ride completed. Thank you for using accessible transportation.");
                }}
              >
                Complete Ride
              </Button>
            </div>
          )}

          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              All ride updates announced in {LANGUAGES.find(l => l.code === selectedLanguage)?.name}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Text Reader */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Text Reader
          </CardTitle>
          <CardDescription>Scan and read text aloud</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full"
            variant="outline"
            onClick={() => {
              speakText("Point camera at text. Sample text detected: Medication label, take one tablet twice daily with food.");
            }}
          >
            <Camera className="w-4 h-4 mr-2" />
            Scan Text
          </Button>
        </CardContent>
      </Card>

      {/* Quick Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Quick Commands
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => speakText("Current time is 2:30 PM")}
            >
              What time?
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => speakText("You are at home")}
            >
              Where am I?
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => speakText("Weather today: Sunny, 72 degrees")}
            >
              Weather
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => speakText("Next medication in 30 minutes")}
            >
              Medication
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
