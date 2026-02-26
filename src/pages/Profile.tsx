import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ProfileComponent from "@/components/moodle/Profile";

const queryClient = new QueryClient();

const Profile: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileComponent />
    </QueryClientProvider>
  );
};

export default Profile;
