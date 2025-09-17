import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Edit, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Star,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";
import Navigation from "@/components/Navigation";
import NewFooter from "@/components/NewFooter";

const Profile = () => {
  // Mock user data
  const [userData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@email.com",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    language: "English",
    education: "Computer Science, Stanford University, 2022",
    workInfo: "Frontend Developer at TechCorp\nPreviously: Junior Developer at StartupXYZ",
    projects: "E-commerce Platform (React, Node.js)\nTask Management App (Vue.js, Firebase)\nOpen Source Contributor",
    interests: ["Web Development", "Machine Learning", "Open Source", "Startups", "Design Systems"],
    skills: "JavaScript, React, Node.js, Python, TypeScript, AWS, Docker",
    expertiseLevel: "Intermediate",
    socialLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson"
    },
    profileCompletion: 85
  });

  const [editingSection, setEditingSection] = useState<string | null>(null);

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  const calculateFilledFields = () => {
    const totalFields = 13;
    const filledFields = [
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.location,
      userData.phone,
      userData.language,
      userData.education,
      userData.workInfo,
      userData.projects,
      userData.skills,
      userData.expertiseLevel,
      userData.socialLinks.github,
      userData.socialLinks.linkedin
    ].filter(field => field && field.trim() !== '').length;
    
    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-bright-blue/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-bright-green/10 rounded-lg rotate-45 blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-bright-yellow/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-brand-purple/10 rounded-lg rotate-12 blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-xl font-semibold bg-bright-blue text-white">
                      {getInitials(userData.firstName, userData.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      {userData.firstName} {userData.lastName}
                    </h1>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {userData.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex-1 md:max-w-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Profile Completion</span>
                    <span className="text-sm text-muted-foreground">{calculateFilledFields()}%</span>
                  </div>
                  <Progress value={calculateFilledFields()} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Complete your profile to increase visibility
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-xl"
                    onClick={() => setEditingSection(editingSection === 'personal' ? null : 'personal')}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Name</p>
                    <p className="text-foreground">{userData.firstName} {userData.lastName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-foreground">{userData.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {userData.phone}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Language</p>
                    <p className="text-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {userData.language}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Professional Info
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-xl"
                    onClick={() => setEditingSection(editingSection === 'professional' ? null : 'professional')}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </p>
                  <p className="text-foreground mt-1">{userData.education}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Work Experience</p>
                  <div className="mt-1 space-y-1">
                    {userData.workInfo.split('\n').map((line, index) => (
                      <p key={index} className="text-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Projects</p>
                  <div className="mt-1 space-y-1">
                    {userData.projects.split('\n').map((project, index) => (
                      <p key={index} className="text-foreground text-sm">{project}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Interests */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Skills & Interests
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-xl"
                    onClick={() => setEditingSection(editingSection === 'skills' ? null : 'skills')}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Expertise Level
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {userData.expertiseLevel}
                  </Badge>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Skills</p>
                  <p className="text-foreground text-sm">{userData.skills}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    {userData.interests.map((interest) => (
                      <Badge key={interest} variant="outline" className="rounded-full">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Social Links
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-xl"
                    onClick={() => setEditingSection(editingSection === 'social' ? null : 'social')}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {userData.socialLinks.github && (
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href={userData.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bright-blue hover:underline text-sm"
                    >
                      GitHub Profile
                    </a>
                  </div>
                )}
                
                {userData.socialLinks.linkedin && (
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href={userData.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bright-blue hover:underline text-sm"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
                
                {userData.socialLinks.twitter && (
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href={userData.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bright-blue hover:underline text-sm"
                    >
                      X (Twitter) Profile
                    </a>
                  </div>
                )}
                
                {!userData.socialLinks.github && !userData.socialLinks.linkedin && !userData.socialLinks.twitter && (
                  <p className="text-muted-foreground text-sm">No social links added yet</p>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      
      <NewFooter />
    </div>
  );
};

export default Profile;