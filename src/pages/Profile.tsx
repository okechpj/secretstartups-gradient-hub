import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  ExternalLink,
  Upload,
  Save,
  X
} from "lucide-react";
import Navigation from "@/components/Navigation";
import NewFooter from "@/components/NewFooter";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, loading: profileLoading, updateProfile, uploadAvatar, calculateCompletion } = useProfile();
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});
  const [isUpdating, setIsUpdating] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin');
    }
  }, [user, authLoading, navigate]);

  // Load pending profile data from signup
  useEffect(() => {
    if (user && profile) {
      const pendingData = localStorage.getItem('pendingProfileData');
      if (pendingData) {
        const data = JSON.parse(pendingData);
        updateProfile(data);
        localStorage.removeItem('pendingProfileData');
      }
    }
  }, [user, profile, updateProfile]);

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`;
  };

  const handleEdit = (section: string) => {
    setEditingSection(section);
    setEditData(profile || {});
  };

  const handleCancel = () => {
    setEditingSection(null);
    setEditData({});
  };

  const handleSave = async () => {
    setIsUpdating(true);
    await updateProfile(editData);
    setEditingSection(null);
    setEditData({});
    setIsUpdating(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadAvatar(file);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bright-blue mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Profile not found</p>
        </div>
      </div>
    );
  }

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
                  <div className="relative">
                    <Avatar className="w-20 h-20">
                      {profile.avatar_url && <AvatarImage src={profile.avatar_url} />}
                      <AvatarFallback className="text-xl font-semibold bg-bright-blue text-white">
                        {getInitials(profile.first_name || '', profile.last_name || '')}
                      </AvatarFallback>
                    </Avatar>
                    <label className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-50">
                      <Upload className="w-4 h-4 text-gray-600" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      {profile.first_name} {profile.last_name}
                    </h1>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {profile.location || 'Location not set'}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {user?.email}
                    </p>
                  </div>
                  
                  <div className="ml-auto">
                    <Button variant="outline" onClick={handleSignOut} className="rounded-xl">
                      Sign Out
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 md:max-w-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Profile Completion</span>
                    <span className="text-sm text-muted-foreground">{calculateCompletion()}%</span>
                  </div>
                  <Progress value={calculateCompletion()} className="h-2" />
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
                    <p className="text-foreground">{profile.first_name} {profile.last_name}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-foreground">{user?.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {profile.phone || 'Not set'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Language</p>
                    <p className="text-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {profile.preferred_language || 'Not set'}
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
                  <p className="text-foreground mt-1">{profile.education || 'Not set'}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Work Experience</p>
                  <div className="mt-1 space-y-1">
                    {profile.work_info ? profile.work_info.split('\n').map((line, index) => (
                      <p key={index} className="text-foreground text-sm">{line}</p>
                    )) : <p className="text-muted-foreground text-sm">Not set</p>}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Projects</p>
                  <div className="mt-1 space-y-1">
                    {profile.projects ? profile.projects.split('\n').map((project, index) => (
                      <p key={index} className="text-foreground text-sm">{project}</p>
                    )) : <p className="text-muted-foreground text-sm">Not set</p>}
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
                    {profile.expertise_level || 'Beginner'}
                  </Badge>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Skills</p>
                  <p className="text-foreground text-sm">{profile.skills || 'Not set'}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests && profile.interests.length > 0 ? (
                      profile.interests.map((interest) => (
                        <Badge key={interest} variant="outline" className="rounded-full">
                          {interest}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm">Not set</p>
                    )}
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
                {profile.github_url && (
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href={profile.github_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bright-blue hover:underline text-sm"
                    >
                      GitHub Profile
                    </a>
                  </div>
                )}
                
                {profile.linkedin_url && (
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href={profile.linkedin_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bright-blue hover:underline text-sm"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
                
                {profile.twitter_url && (
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href={profile.twitter_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bright-blue hover:underline text-sm"
                    >
                      X (Twitter) Profile
                    </a>
                  </div>
                )}
                
                {!profile.github_url && !profile.linkedin_url && !profile.twitter_url && (
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