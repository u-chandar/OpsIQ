import { useState } from "react";
import { MessageCircle, Send, X, User, Stethoscope, Activity, Phone, Video } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Message {
  id: string;
  sender: string;
  senderRole: string;
  content: string;
  timestamp: Date;
  isOwn: boolean;
}

interface Contact {
  id: string;
  name: string;
  role: string;
  status: "online" | "offline" | "busy";
  specialty?: string;
  lastMessage?: string;
  unreadCount?: number;
}

interface ChatSupportProps {
  currentUserRole: "patient" | "caretaker" | "physician" | "nurse";
  currentUserName?: string;
}

export function ChatSupport({ currentUserRole, currentUserName = "User" }: ChatSupportProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Dr. Sarah Johnson",
      senderRole: "Physician",
      content: "Hello! How are you feeling today?",
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
    },
    {
      id: "2",
      sender: currentUserName,
      senderRole: currentUserRole,
      content: "I'm doing well, thank you!",
      timestamp: new Date(Date.now() - 3000000),
      isOwn: true,
    },
  ]);

  // Define contacts based on user role
  const getContacts = (): Contact[] => {
    switch (currentUserRole) {
      case "patient":
        return [
          {
            id: "1",
            name: "Dr. Sarah Johnson",
            role: "Physician",
            status: "online",
            specialty: "Primary Care",
            lastMessage: "How are you feeling today?",
            unreadCount: 1,
          },
          {
            id: "2",
            name: "Nurse Emily Chen",
            role: "Nurse",
            status: "online",
            specialty: "Care Coordinator",
            lastMessage: "Don't forget your medication",
          },
          {
            id: "3",
            name: "Dr. Michael Brown",
            role: "Physician",
            status: "busy",
            specialty: "Cardiology",
          },
          {
            id: "4",
            name: "Nurse Robert Lee",
            role: "Nurse",
            status: "offline",
            specialty: "Home Care",
          },
        ];
      case "caretaker":
        return [
          {
            id: "1",
            name: "Dr. Sarah Johnson",
            role: "Physician",
            status: "online",
            specialty: "Primary Care - Patient: John Doe",
            lastMessage: "Patient vitals look stable",
            unreadCount: 2,
          },
          {
            id: "2",
            name: "Nurse Emily Chen",
            role: "Nurse",
            status: "online",
            specialty: "Care Coordinator",
          },
          {
            id: "3",
            name: "Dr. Michael Brown",
            role: "Physician",
            status: "busy",
            specialty: "Specialist Consultation",
          },
        ];
      case "nurse":
        return [
          {
            id: "1",
            name: "Dr. Sarah Johnson",
            role: "Physician",
            status: "online",
            specialty: "On-call Physician",
            lastMessage: "Update on patient in Room 302?",
            unreadCount: 1,
          },
          {
            id: "2",
            name: "Dr. Michael Brown",
            role: "Physician",
            status: "online",
            specialty: "Attending Physician",
          },
          {
            id: "3",
            name: "Nurse Manager Alice Kim",
            role: "Nurse Manager",
            status: "online",
            specialty: "Shift Supervisor",
          },
        ];
      case "physician":
        return [
          {
            id: "1",
            name: "Nurse Emily Chen",
            role: "Nurse",
            status: "online",
            specialty: "Floor Nurse",
            lastMessage: "Patient requesting pain medication",
            unreadCount: 1,
          },
          {
            id: "2",
            name: "Dr. Michael Brown",
            role: "Physician",
            status: "online",
            specialty: "Consulting Physician",
          },
          {
            id: "3",
            name: "Nurse Robert Lee",
            role: "Nurse",
            status: "busy",
            specialty: "ICU Nurse",
          },
        ];
      default:
        return [];
    }
  };

  const contacts = getContacts();

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedContact) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: currentUserName,
      senderRole: currentUserRole,
      content: messageInput,
      timestamp: new Date(),
      isOwn: true,
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");

    // Simulate response after 2 seconds
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: selectedContact.name,
        senderRole: selectedContact.role,
        content: "Thank you for your message. I'll get back to you shortly.",
        timestamp: new Date(),
        isOwn: false,
      };
      setMessages((prev) => [...prev, response]);
    }, 2000);
  };

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const getStatusColor = (status: Contact["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
    }
  };

  const getRoleIcon = (role: string) => {
    if (role.toLowerCase().includes("physician") || role.toLowerCase().includes("doctor")) {
      return <Stethoscope className="w-4 h-4" />;
    }
    if (role.toLowerCase().includes("nurse")) {
      return <Activity className="w-4 h-4" />;
    }
    return <User className="w-4 h-4" />;
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 z-40 h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
          {contacts.some((c) => c.unreadCount) && (
            <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {contacts.reduce((sum, c) => sum + (c.unreadCount || 0), 0)}
            </span>
          )}
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 z-40 w-96 h-[600px] shadow-2xl flex flex-col">
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                Healthcare Team Chat
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
            <Tabs defaultValue="chats" className="flex-1 flex flex-col">
              <TabsList className="w-full grid grid-cols-2 rounded-none">
                <TabsTrigger value="chats">Chats</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
              </TabsList>

              {/* Chat List */}
              <TabsContent value="chats" className="flex-1 m-0 overflow-hidden">
                {!selectedContact ? (
                  <ScrollArea className="h-full">
                    <div className="p-4 space-y-2">
                      {contacts.map((contact) => (
                        <div
                          key={contact.id}
                          onClick={() => handleContactSelect(contact)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                        >
                          <div className="relative">
                            <Avatar>
                              <AvatarFallback className="bg-blue-100 text-blue-700">
                                {contact.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span
                              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(
                                contact.status
                              )}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium truncate">{contact.name}</p>
                              {contact.unreadCount && (
                                <Badge variant="default" className="bg-blue-600 text-xs">
                                  {contact.unreadCount}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate">
                              {contact.specialty}
                            </p>
                            {contact.lastMessage && (
                              <p className="text-sm text-muted-foreground truncate mt-1">
                                {contact.lastMessage}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="flex flex-col h-full">
                    {/* Chat Header */}
                    <div className="p-4 border-b flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedContact(null)}
                          className="h-8 w-8"
                        >
                          ←
                        </Button>
                        <div className="relative">
                          <Avatar>
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                              {selectedContact.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(
                              selectedContact.status
                            )}`}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{selectedContact.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {selectedContact.specialty}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Video className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.isOwn
                                  ? "bg-blue-600 text-white"
                                  : "bg-muted"
                              }`}
                            >
                              {!message.isOwn && (
                                <p className="text-xs font-medium mb-1">
                                  {message.sender}
                                </p>
                              )}
                              <p className="text-sm">{message.content}</p>
                              <p
                                className={`text-xs mt-1 ${
                                  message.isOwn ? "text-blue-100" : "text-muted-foreground"
                                }`}
                              >
                                {message.timestamp.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Input
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                          placeholder="Type a message..."
                          className="flex-1"
                        />
                        <Button
                          onClick={handleSendMessage}
                          disabled={!messageInput.trim()}
                          size="icon"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Contacts List */}
              <TabsContent value="contacts" className="flex-1 m-0 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-2">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        onClick={() => {
                          handleContactSelect(contact);
                        }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                              {contact.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(
                              contact.status
                            )}`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {getRoleIcon(contact.role)}
                            <p className="font-medium">{contact.name}</p>
                          </div>
                          <Badge variant="outline" className="text-xs mb-1">
                            {contact.role}
                          </Badge>
                          <p className="text-xs text-muted-foreground">
                            {contact.specialty}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Phone className="w-3 h-3 mr-1" />
                              Call
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleContactSelect(contact);
                              }}
                            >
                              <MessageCircle className="w-3 h-3 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </>
  );
}
