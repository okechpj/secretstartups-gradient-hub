import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Github, Linkedin, Chrome, Upload, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import NewFooter from "@/components/NewFooter";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";

const Signup = () => {
  const navigate = useNavigate();
  const { signUp, user, loading } = useAuth();
  const { updateProfile } = useProfile();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate('/profile');
    }
  }, [user, loading, navigate]);
  const progress = (currentStep / totalSteps) * 100;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    phone: "",
    language: "",
    education: "",
    workInfo: "",
    projects: "",
    interests: [] as string[],
    skills: "",
    expertiseLevel: "",
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: ""
    }
  });

  const [newInterest, setNewInterest] = useState("");

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSignup();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return;
    }

    setIsSubmitting(true);
    
    const { error } = await signUp(formData.email, formData.password, {
      first_name: formData.firstName,
      last_name: formData.lastName
    });

    if (!error) {
      // Store additional profile data for later update
      localStorage.setItem('pendingProfileData', JSON.stringify({
        location: formData.location,
        phone: formData.phone,
        preferred_language: formData.language,
        education: formData.education,
        work_info: formData.workInfo,
        projects: formData.projects,
        skills: formData.skills,
        expertise_level: formData.expertiseLevel,
        interests: formData.interests,
        github_url: formData.socialLinks.github,
        linkedin_url: formData.socialLinks.linkedin,
        twitter_url: formData.socialLinks.twitter
      }));
    }
    
    setIsSubmitting(false);
  };

  const addInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData({
        ...formData,
        interests: [...formData.interests, newInterest.trim()]
      });
      setNewInterest("");
    }
  };

  const removeInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter(i => i !== interest)
    });
  };

  const stepTitles = [
    "Account Setup",
    "Profile Basics", 
    "Professional Details",
    "Interests & Skills"
  ];

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
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Join SecretStartups Community</h1>
            <p className="text-muted-foreground">Create your account and start building together</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{stepTitles[currentStep - 1]}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{stepTitles[currentStep - 1]}</CardTitle>
              <CardDescription>
                {currentStep === 1 && "Let's get started with the basics"}
                {currentStep === 2 && "Tell us a bit about yourself"}
                {currentStep === 3 && "Share your professional background"}
                {currentStep === 4 && "What are you interested in and skilled at?"}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Step 1: Required Info */}
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* Step 2: Profile Basics */}
              {currentStep === 2 && (
                <>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8" variant="secondary">
                        +
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="City, Country"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 123-4567"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select value={formData.language} onValueChange={(value) => setFormData({...formData, language: value})}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="pt">Portuguese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Step 3: Professional Details */}
              {currentStep === 3 && (
                <>
                  <div>
                    <Label htmlFor="education">Education</Label>
                    <Input
                      id="education"
                      value={formData.education}
                      onChange={(e) => setFormData({...formData, education: e.target.value})}
                      placeholder="University, Degree, Year"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="workInfo">Work Experience</Label>
                    <Textarea
                      id="workInfo"
                      value={formData.workInfo}
                      onChange={(e) => setFormData({...formData, workInfo: e.target.value})}
                      placeholder="Current/Previous roles, companies..."
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="projects">Projects Done</Label>
                    <Textarea
                      id="projects"
                      value={formData.projects}
                      onChange={(e) => setFormData({...formData, projects: e.target.value})}
                      placeholder="Describe your notable projects..."
                      className="rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* Step 4: Interests & Skills */}
              {currentStep === 4 && (
                <>
                  <div>
                    <Label>Interests</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        placeholder="Add an interest"
                        className="rounded-xl"
                        onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                      />
                      <Button onClick={addInterest} variant="outline" className="rounded-xl">Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.interests.map((interest) => (
                        <div key={interest} className="bg-muted px-3 py-1 rounded-full flex items-center gap-1">
                          <span className="text-sm">{interest}</span>
                          <button onClick={() => removeInterest(interest)} className="text-muted-foreground hover:text-foreground">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="skills">Skills</Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => setFormData({...formData, skills: e.target.value})}
                      placeholder="JavaScript, React, Node.js, Python..."
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label>Expertise Level</Label>
                    <Select value={formData.expertiseLevel} onValueChange={(value) => setFormData({...formData, expertiseLevel: value})}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Social Links</Label>
                    <Input
                      value={formData.socialLinks.github}
                      onChange={(e) => setFormData({
                        ...formData,
                        socialLinks: {...formData.socialLinks, github: e.target.value}
                      })}
                      placeholder="GitHub URL"
                      className="rounded-xl"
                    />
                    <Input
                      value={formData.socialLinks.linkedin}
                      onChange={(e) => setFormData({
                        ...formData,
                        socialLinks: {...formData.socialLinks, linkedin: e.target.value}
                      })}
                      placeholder="LinkedIn URL"
                      className="rounded-xl"
                    />
                    <Input
                      value={formData.socialLinks.twitter}
                      onChange={(e) => setFormData({
                        ...formData,
                        socialLinks: {...formData.socialLinks, twitter: e.target.value}
                      })}
                      placeholder="X (Twitter) URL"
                      className="rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <div className="flex gap-2">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handlePrevious} className="rounded-xl">
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {currentStep > 1 && currentStep < totalSteps && (
                    <Button variant="ghost" onClick={handleSkip} className="rounded-xl">
                      Skip for now
                    </Button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <Button onClick={handleNext} className="rounded-xl">
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="rounded-xl">
                      Finish Signup
                    </Button>
                  )}
                </div>
              </div>

              {/* Login Link */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-bright-blue hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <NewFooter />
    </div>
  );
};

export default Signup;