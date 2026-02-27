import type { Profile, UpdateProfilePayload } from "@/types/profile";
import httpClient from "../http-client";

class ProfileService {
  async getProfile(): Promise<Profile> {
    try {
      const response = await httpClient.get<Profile>("/profile");
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async updateProfile(payload: UpdateProfilePayload): Promise<Profile> {
    try {
      const response = await httpClient.put<Profile>("/profile", payload);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: unknown) {
    // Centralized error handling
    if (error instanceof Error) {
      console.error("ProfileService error:", error.message);
    } else {
      console.error("ProfileService unknown error:", error);
    }
  }
}

export default new ProfileService();
