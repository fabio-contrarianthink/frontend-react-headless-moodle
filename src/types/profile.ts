export interface Profile {
  id: number;
  full_name: string;
  email: string;
  address?: string;
  phone: string;
  contact_preference: "email" | "text";
  member_since: string;
  is_premium: true;
  stats: {
    resources: number;
    videos: number;
    tools: number;
  };
  avatar: string;
}

export interface UpdateProfilePayload {
  full_name: string;
  email: string;
  address?: string;
  phone: string;
  contact_preference: "email" | "text";
}
