import { Phone, AlertTriangle, Users, MapPin, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";

export function EmergencyPanel() {
  const emergencyContacts = [
    { name: "Emergency Services", number: "911", icon: <AlertTriangle className="w-5 h-5" /> },
    { name: "Dr. Sarah Johnson", number: "(555) 123-4567", icon: <Phone className="w-5 h-5" /> },
    { name: "John Doe (Son)", number: "(555) 234-5678", icon: <Users className="w-5 h-5" /> },
    { name: "Mary Doe (Daughter)", number: "(555) 345-6789", icon: <Users className="w-5 h-5" /> },
  ];

  const handleEmergencyCall = (name: string, number: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`Calling ${name} at ${number}`);
      window.speechSynthesis.speak(utterance);
    }
    // In a real app, this would initiate a call
    alert(`Calling ${name} at ${number}`);
  };

  const handleLocationShare = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Sharing your location with emergency contacts");
      window.speechSynthesis.speak(utterance);
    }
    alert("Location shared with emergency contacts: 123 Main St, Anytown, USA");
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-red-600 dark:text-red-400">Emergency</h1>
        <p className="text-muted-foreground mt-1">Quick access to emergency services</p>
      </div>

      {/* Emergency Alert */}
      <Alert className="bg-red-50 dark:bg-red-950 border-red-500">
        <AlertTriangle className="w-5 h-5 text-red-600" />
        <AlertDescription>
          In case of life-threatening emergency, call 911 immediately
        </AlertDescription>
      </Alert>

      {/* SOS Button */}
      <Card className="border-red-500 bg-red-50 dark:bg-red-950">
        <CardContent className="p-6">
          <Button 
            className="w-full h-32 bg-red-600 hover:bg-red-700 text-white"
            size="lg"
            onClick={() => handleEmergencyCall("Emergency Services", "911")}
          >
            <div className="flex flex-col items-center gap-3">
              <AlertTriangle className="w-12 h-12" />
              <span className="text-xl">SOS - CALL 911</span>
            </div>
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Emergency Contacts
          </CardTitle>
          <CardDescription>Quick dial your emergency contacts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {emergencyContacts.slice(1).map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                  {contact.icon}
                </div>
                <div>
                  <p>{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.number}</p>
                </div>
              </div>
              <Button 
                size="sm"
                onClick={() => handleEmergencyCall(contact.name, contact.number)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Location Sharing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location Services
          </CardTitle>
          <CardDescription>Share your location with contacts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full"
            variant="outline"
            onClick={handleLocationShare}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Share Location Now
          </Button>
          
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Current Location:</p>
            <p className="text-sm">123 Main Street, Anytown, USA 12345</p>
            <p className="text-xs text-muted-foreground mt-2">Last updated: Just now</p>
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            Medical Information
          </CardTitle>
          <CardDescription>Critical health info for first responders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-muted-foreground">Blood Type:</p>
              <p className="mt-1">O Positive</p>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-muted-foreground">Allergies:</p>
              <p className="mt-1">Penicillin, Peanuts</p>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-muted-foreground">Conditions:</p>
              <p className="mt-1">Hypertension, Type 2 Diabetes, Visual Impairment</p>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-muted-foreground">Current Medications:</p>
              <p className="mt-1">Aspirin 81mg, Lisinopril 10mg, Metformin 500mg</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Safety Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Keep your phone charged at all times</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Update your emergency contacts regularly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Share your location with trusted contacts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Keep medical information up to date</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
