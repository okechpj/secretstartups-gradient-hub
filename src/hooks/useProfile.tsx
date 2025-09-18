import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  location: string | null;
  phone: string | null;
  preferred_language: string | null;
  education: string | null;
  work_info: string | null;
  projects: string | null;
  skills: string | null;
  expertise_level: string | null;
  interests: string[] | null;
  avatar_url: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  profile_completion: number | null;
  created_at: string;
  updated_at: string;
}

export const useProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        toast({
          title: "Error",
          description: "Failed to load profile",
          variant: "destructive"
        });
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: 'No user logged in' };

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update profile",
          variant: "destructive"
        });
        return { error };
      }

      setProfile(data);
      toast({
        title: "Success",
        description: "Profile updated successfully"
      });
      return { data };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { error };
    }
  };

  const calculateCompletion = (profile: Profile | null): number => {
    if (!profile) return 0;
    
    const fields = [
      profile.first_name,
      profile.last_name,
      profile.location,
      profile.phone,
      profile.preferred_language,
      profile.education,
      profile.work_info,
      profile.projects,
      profile.skills,
      profile.expertise_level,
      profile.interests?.length ? profile.interests : null,
      profile.github_url,
      profile.linkedin_url
    ];
    
    const filledFields = fields.filter(field => field && 
      (typeof field === 'string' ? field.trim() !== '' : true)
    ).length;
    
    return Math.round((filledFields / fields.length) * 100);
  };

  const uploadAvatar = async (file: File) => {
    if (!user) return { error: 'No user logged in' };

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: data.publicUrl })
        .eq('user_id', user.id);

      if (updateError) {
        throw updateError;
      }

      await fetchProfile();
      toast({
        title: "Success",
        description: "Avatar updated successfully"
      });

      return { data: data.publicUrl };
    } catch (error) {
      console.error('Error uploading avatar:', error);
      toast({
        title: "Error",
        description: "Failed to upload avatar",
        variant: "destructive"
      });
      return { error };
    }
  };

  return {
    profile,
    loading,
    updateProfile,
    uploadAvatar,
    calculateCompletion: () => calculateCompletion(profile),
    refetch: fetchProfile
  };
};